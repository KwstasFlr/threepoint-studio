import {isCountryCode,resolveCountry} from './countries.mjs?v=6';
export const SESSION_KEY = 'GUESSPLEX_PARTY_V1';
export function makePlayer(id){return {id,name:'',age:'',gender:'',customGender:'',country:'',relationship:'friend',partner:'',preference:'none',forfeitConsent:false,analyticsConsent:false,analyticsSent:false,roundGroup:'friends',ready:false};}
export function validPlayer(p){return !!p && Number.isInteger(Number(p.age)) && Number(p.age)>=1 && Number(p.age)<=120 && typeof p.name==='string' && p.name.length<=32 && ['male','female','custom','unspecified'].includes(p.gender)&&isCountryCode(p.country)&&(p.gender!=='custom'||typeof p.customGender==='string'&&p.customGender.trim().length>0) && ['friend','partner','family','other'].includes(p.relationship) && ['none','any','male','female'].includes(p.preference);}
export function eligiblePair(a,b){
  if(!a||!b||Number(a.age)<18||Number(b.age)<18||a.id===b.id||!validPlayer(a)||!validPlayer(b)||a.relationship==='family'||b.relationship==='family')return false;
  if(a.relationship==='partner'||b.relationship==='partner'){
    if(a.relationship!=='partner'||b.relationship!=='partner'||String(a.partner)!==String(b.id)||String(b.partner)!==String(a.id))return false;
  }
  const accepts=(p,q)=>p.preference==='any'||(p.preference!=='none'&&p.preference===q.gender);
  return accepts(a,b)&&accepts(b,a);
}
export function shuffle(items,random=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function optedIn(p){return validPlayer(p)&&Number(p.age)>=18&&(p.spicyConsent===true||p.preference!=='none')&&p.relationship!=='family';}
export function eligibleCards(cards,mode,type,player,players,spicy=false){
  const targets=players.filter(p=>eligiblePair(player,p));
  const adult=spicy&&mode==='extreme'&&optedIn(player);
  return cards.filter(c=>c.mode===mode&&c.type===type&&Boolean(c.adult)===adult&&(!c.pair||spicy&&targets.length)&&(!c.group||players.every(optedIn))&&(!c.minTargets||targets.length>=c.minTargets));
}
export function canRequestForfeit(mode,players,player,spicy){return mode==='extreme'&&spicy&&optedIn(player)&&players.every(optedIn);}
export function canOfferForfeit(mode,players,player,spicy){return player.forfeitConsent===true&&canRequestForfeit(mode,players,player,spicy);}
export function drawCard(cards,mode,type,player,players,used=[],random=Math.random,spicy=false){
  const targets=players.filter(p=>eligiblePair(player,p));
  const eligible=eligibleCards(cards,mode,type,player,players,spicy);
  if(!eligible.length)throw new Error('No eligible cards');
  let pool=eligible.filter(c=>!used.includes(c.id));
  let nextUsed=[...used];
  if(!pool.length){const ids=new Set(eligible.map(c=>c.id));nextUsed=used.filter(id=>!ids.has(id));pool=eligible;}
  const card=pool[Math.floor(random()*pool.length)];
  return {id:card.id,target:card.pair?targets[Math.floor(random()*targets.length)].id:null,used:[...nextUsed,card.id]};
}
export function restoreSession(raw,cards){
  try{
    const s=JSON.parse(raw);if(!s||!Array.isArray(s.players)||s.players.length<2||s.players.length>20||!['casual','extreme'].includes(s.mode)||!['menu','setup','profiles','turn','game'].includes(s.stage))return null;
    if(!s.players.every((p,i)=>p&&p.id===i&&typeof p.name==='string'&&p.name.length<=32&&typeof p.country==='string'&&p.country.length<=60&&typeof p.customGender==='string'&&p.customGender.length<=40&&typeof p.ready==='boolean'))return null;
    s.players.forEach(p=>{p.country=resolveCountry(p.country);if(!validPlayer(p))p.ready=false;p.analyticsConsent=p.analyticsConsent===true;p.analyticsSent=p.analyticsSent===true;});
    if(['turn','game'].includes(s.stage)&&s.players.some(p=>!p.ready)){s.stage='profiles';s.profileIndex=s.players.findIndex(p=>!p.ready);s.active=null;}
    const cardIds=new Set(cards.map(c=>c.id));
    s.group=['lovers','friends','other'].includes(s.group)?s.group:'friends';
    s.flirting=s.flirting===true;
    s.players.forEach(p=>{p.forfeitConsent=p.forfeitConsent===true;p.roundGroup=['friends','lovers','other'].includes(p.roundGroup)?p.roundGroup:'friends';});
    s.used=Array.isArray(s.used)?[...new Set(s.used.filter(id=>cardIds.has(id)))]:[];
    s.turn=Number.isSafeInteger(s.turn)&&s.turn>=0?s.turn:0;
    s.passUses=s.passUses===1?1:0;
    s.turnStep=s.turnStep==='mode'?'mode':'identity';
    s.profileIndex=Number.isInteger(s.profileIndex)&&s.profileIndex>=0&&s.profileIndex<s.players.length?s.profileIndex:0;
    if(s.active){const c=cards.find(c=>c.id===s.active.id);const a=s.players[s.turn%s.players.length];const allowed=c&&eligibleCards(cards,s.mode,c.type,a,s.players,s.flirting).some(x=>x.id===c.id);if(!allowed||(s.active.forfeit&&(c.id!=='supplied-dare-3'||!canOfferForfeit(s.mode,s.players,a,s.flirting))))s.active=null;else if(!c.pair)s.active.target=null;else if(!eligiblePair(a,s.players.find(p=>p.id===s.active.target)))s.active=null;}
    return s;
  }catch{return null;}
}
