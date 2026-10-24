export const SESSION_KEY = 'GUESSPLEX_PARTY_V1';
export function makePlayer(id){return {id,name:'',age:'',gender:'',customGender:'',country:'',relationship:'friend',partner:'',preference:'none',ready:false};}
export function validPlayer(p){return !!p && Number.isInteger(Number(p.age)) && Number(p.age)>=18 && Number(p.age)<=120 && typeof p.name==='string' && p.name.length<=32 && ['','male','female','custom'].includes(p.gender) && ['friend','partner','family','other'].includes(p.relationship) && ['none','any','male','female'].includes(p.preference);}
export function eligiblePair(a,b){
  if(!a||!b||a.id===b.id||!validPlayer(a)||!validPlayer(b)||a.relationship==='family'||b.relationship==='family')return false;
  if(a.relationship==='partner'||b.relationship==='partner'){
    if(a.relationship!=='partner'||b.relationship!=='partner'||String(a.partner)!==String(b.id)||String(b.partner)!==String(a.id))return false;
  }
  const accepts=(p,q)=>p.preference==='any'||(p.preference!=='none'&&p.preference===q.gender);
  return accepts(a,b)&&accepts(b,a);
}
export function shuffle(items,random=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function drawCard(cards,mode,type,player,players,used=[],random=Math.random){
  const targets=players.filter(p=>eligiblePair(player,p));
  const eligible=cards.filter(c=>c.mode===mode&&c.type===type&&(!c.pair||targets.length));
  if(!eligible.length)throw new Error('No eligible cards');
  let pool=eligible.filter(c=>!used.includes(c.id));
  let nextUsed=[...used];
  if(!pool.length){const ids=new Set(eligible.map(c=>c.id));nextUsed=used.filter(id=>!ids.has(id));pool=eligible;}
  const card=pool[Math.floor(random()*pool.length)];
  return {id:card.id,target:card.pair?targets[Math.floor(random()*targets.length)].id:null,used:[...nextUsed,card.id]};
}
export function restoreSession(raw,cards){
  try{
    const s=JSON.parse(raw);if(!s||!Array.isArray(s.players)||s.players.length<2||s.players.length>20||!['casual','extreme'].includes(s.mode)||!['setup','profiles','game'].includes(s.stage))return null;
    if(!s.players.every((p,i)=>p&&p.id===i&&typeof p.name==='string'&&p.name.length<=32&&typeof p.country==='string'&&p.country.length<=60&&typeof p.customGender==='string'&&p.customGender.length<=40&&typeof p.ready==='boolean'))return null;
    if(s.players.some(p=>p.ready&&!validPlayer(p))||s.stage==='game'&&s.players.some(p=>!p.ready||!validPlayer(p)))return null;
    const cardIds=new Set(cards.map(c=>c.id));
    s.used=Array.isArray(s.used)?[...new Set(s.used.filter(id=>cardIds.has(id)))]:[];
    s.turn=Number.isSafeInteger(s.turn)&&s.turn>=0?s.turn:0;
    s.profileIndex=Number.isInteger(s.profileIndex)&&s.profileIndex>=0&&s.profileIndex<s.players.length?s.profileIndex:0;
    if(s.active){const c=cards.find(c=>c.id===s.active.id);const a=s.players[s.turn%s.players.length];const b=s.players.find(p=>p.id===s.active.target);if(!c||c.mode!==s.mode||(c.pair&&!eligiblePair(a,b)))s.active=null;else if(!c.pair)s.active.target=null;}
    return s;
  }catch{return null;}
}
