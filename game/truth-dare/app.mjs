import {CARDS} from './cards.mjs';
import {SESSION_KEY,makePlayer,validPlayer,drawCard,restoreSession} from './engine.mjs?v=2';
const $=id=>document.getElementById(id);
const COPY={
 enableFlirting:['Enable flirting · optional, for couples or friends who both opt in.','Ενεργοποίηση φλερτ · προαιρετικά, για ζευγάρια ή φίλους που συμφωνούν και οι δύο.'],
 back:['← All games','← Όλα τα παιχνίδια'],eyebrow:['TRUTH OR DARE · 18+','ΑΛΗΘΕΙΑ Ή ΘΑΡΡΟΣ · 18+'],tagline:['Your friends. Your secrets. Your call.','Η παρέα σου. Τα μυστικά σου. Η επιλογή σου.'],setup:['Set the mood','Διάλεξε διάθεση'],howMany:['How many players?','Πόσοι παίζουν;'],chooseMode:['Choose your mood','Διάλεξε ένταση'],casualNote:['Funny truths. Playful challenges.','Αστείες αλήθειες. Παιχνιδιάρικες δοκιμασίες.'],extremeNote:['Bolder questions. Bigger blushes.','Πιο τολμηρές ερωτήσεις. Περισσότερη αμηχανία.'],adultConsent:['Everyone is 18 or older and agrees to play. Any card can be skipped.','Όλοι είναι τουλάχιστον 18 ετών και συμφωνούν να παίξουν. Κάθε κάρτα μπορεί να παραλειφθεί.'],addPlayers:['Add players','Πρόσθεσε παίκτες'],name:['Name or nickname','Όνομα ή ψευδώνυμο'],age:['Age · 18+','Ηλικία · 18+'],gender:['Gender · optional','Φύλο · προαιρετικό'],ratherNot:['Prefer not to say','Δεν θέλω να απαντήσω'],male:['Male','Άνδρας'],female:['Female','Γυναίκα'],writeYours:['Write yours','Γράψε το δικό σου'],yourGender:['Your gender','Το φύλο σου'],country:['Country · optional','Χώρα · προαιρετικό'],relationship:['Relationship to this group','Σχέση με την παρέα'],friends:['Friends','Φίλοι'],partner:['Partner','Σύντροφος'],family:['Family','Συγγενείς'],other:['Other','Άλλο'],whichPartner:['My partner is','Ο/Η σύντροφός μου είναι'],preferences:['Flirting preferences · optional','Προτιμήσεις φλερτ · προαιρετικό'],preferenceNote:['Only for optional, non-explicit flirting cards. Both players must opt in. Family profiles never receive these cards.','Μόνο για προαιρετικές κάρτες φλερτ, χωρίς γραφικό περιεχόμενο. Πρέπει να συμφωνούν και οι δύο. Τα προφίλ συγγενών δεν λαμβάνουν αυτές τις κάρτες.'],comfortable:["I'm comfortable flirting with",'Νιώθω άνετα να φλερτάρω με'],noFlirting:['No flirting cards','Χωρίς κάρτες φλερτ'],anyGender:['Any gender','Όλα τα φύλα'],men:['Men','Άνδρες'],women:['Women','Γυναίκες'],previous:['Back','Πίσω'],privacy:['Profiles stay in this browser tab and are not uploaded. End session deletes them.','Τα προφίλ μένουν μόνο σε αυτή την καρτέλα του browser και δεν αποστέλλονται. Το τέλος συνεδρίας τα διαγράφει.'],edit:['Edit players','Αλλαγή παικτών'],yourTurn:['YOUR TURN','Η ΣΕΙΡΑ ΣΟΥ'],truth:['Truth','Αλήθεια'],dare:['Dare','Θάρρος'],truthNote:['Tell us something.','Πες μας κάτι.'],dareNote:['Show us something.','Δείξε μας κάτι.'],pairConsent:['Ask first. Continue only if both of you want to.','Ρώτα πρώτα. Συνεχίστε μόνο αν το θέλετε και οι δύο.'],pass:['Pass · no penalty','Πάσο · χωρίς ποινή'],next:['Next player','Επόμενος παίκτης'],gameNote:['A pass is always an answer. No points. No pressure.','Το πάσο είναι πάντα απάντηση. Χωρίς πόντους. Χωρίς πίεση.'],moreInfo:['More information · How to play','Περισσότερες πληροφορίες · Πώς παίζεται'],rules:['Add 2–20 adults and choose Casual or Extreme. Take turns picking Truth or Dare, then pass the device to the next player. Cards do not repeat until the eligible deck runs out. Switch language at any time. Flirting is optional, never explicit, and requires matching preferences; a Partner profile pairs only with a mutually selected partner. Family profiles get non-romantic cards. Everyone can pass without a penalty.','Πρόσθεσε 2–20 ενήλικες και διάλεξε Casual ή Extreme. Με τη σειρά επιλέγετε Αλήθεια ή Θάρρος και δίνετε τη συσκευή στον επόμενο. Οι διαθέσιμες κάρτες δεν επαναλαμβάνονται μέχρι να εξαντληθούν. Αλλάζεις γλώσσα όποτε θέλεις. Το φλερτ είναι προαιρετικό, χωρίς γραφικό περιεχόμενο, και χρειάζεται αμοιβαίες προτιμήσεις. Τα προφίλ συντρόφων συνδυάζονται μόνο όταν επιλέξουν ο ένας τον άλλον. Τα προφίλ συγγενών παίρνουν μη ρομαντικές κάρτες. Όλοι μπορούν να πουν πάσο χωρίς ποινή.'],noRank:['This party game has no leaderboard or competitive score.','Αυτό το παιχνίδι παρέας δεν έχει leaderboard ή ανταγωνιστική βαθμολογία.'],end:['End session & delete profiles','Τέλος συνεδρίας & διαγραφή προφίλ'],endTitle:['End this session?','Να τελειώσει η συνεδρία;'],endNote:["All player profiles and this game's progress will be deleted from this tab.",'Όλα τα προφίλ παικτών και η πρόοδος αυτού του παιχνιδιού θα διαγραφούν από την καρτέλα.'],cancel:['Cancel','Ακύρωση'],confirmEnd:['End & delete','Τέλος & διαγραφή'],privacyLink:['Privacy','Απόρρητο'],nextProfile:['Save & next player','Αποθήκευση & επόμενος'],start:['Let’s play','Πάμε να παίξουμε'],ageError:['Enter a whole-number age from 18 to 120 for every player.','Βάλε ακέραιη ηλικία από 18 έως 120 για κάθε παίκτη.'],storageError:['Browser storage is unavailable. You can play, but reloading will clear this session.','Η αποθήκευση του browser δεν είναι διαθέσιμη. Μπορείτε να παίξετε, αλλά η ανανέωση θα σβήσει τη συνεδρία.'],player:['Player','Παίκτης'],turn:['Turn','Σειρά'],with:['With','Με'],selectPartner:['Choose player','Διάλεξε παίκτη'],fewer:['Fewer players','Λιγότεροι παίκτες'],morePlayers:['More players','Περισσότεροι παίκτες']
};
let lang='en',state=null,index=0,count=2,storageFailed=false;
try{lang=localStorage.getItem('GMP_LANGUAGE')==='el'?'el':'en';}catch{}
try{state=restoreSession(sessionStorage.getItem(SESSION_KEY),CARDS);}catch{storageFailed=true;}
if(state){index=state.profileIndex;count=state.players.length;}
const t=key=>COPY[key]?.[lang==='el'?1:0]||key;
const playerName=p=>p.name.trim()||`${t('player')} ${p.id+1}`;
function save(){if(!state)return;state.profileIndex=index;try{sessionStorage.setItem(SESSION_KEY,JSON.stringify(state));}catch{storageFailed=true;}status();}
function status(){$('storageStatus').textContent=storageFailed?t('storageError'):'';}
function setCount(n){count=Math.max(2,Math.min(20,n));$('playerCount').value=count;$('countDisplay').value=count;$('less').disabled=count===2;$('more').disabled=count===20;}
function translate(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
 document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
 $('less').setAttribute('aria-label',t('fewer'));$('more').setAttribute('aria-label',t('morePlayers'));
 $('playerChips').setAttribute('aria-label',lang==='el'?'Παίκτες':'Players');
 const codes=['GR','CY','GB','US','CA','AU','DE','FR','IT','ES','PT','NL','BE','CH','AT','SE','NO','DK','FI','PL','RO','BG','AL','TR','IE','BR','MX','AR','IN','JP','KR','ZA'];
 const names=new Intl.DisplayNames([lang],{type:'region'});$('countryOptions').replaceChildren(...codes.map(code=>{const o=document.createElement('option');o.value=names.of(code);return o;}));
 status();
}
function render(focus=false){
 translate();const stage=state?.stage||'setup';document.body.dataset.stage=stage;
 for(const name of ['setup','profiles','game'])$(name).hidden=stage!==name;
 $('endSession').hidden=!state;
 document.body.dataset.mode=state?.mode||document.querySelector('[name=mode]:checked').value;
 if(stage==='setup'){setCount(count);if(state){document.querySelector(`[name=mode][value=${state.mode}]`).checked=true;$('enableFlirting').checked=!!state.flirting;}return;}
 if(stage==='profiles'){loadProfile();if(focus)$('profileTitle').focus();return;}
 const current=state.players[state.turn%state.players.length];
 $('modeBadge').textContent=state.mode==='casual'?'Casual':'Extreme';
 $('turnNumber').textContent=`${t('turn')} ${state.turn+1}`;
 $('turnTitle').textContent=playerName(current);
 $('pickCard').hidden=!!state.active;$('card').hidden=!state.active;$('cardActions').hidden=!state.active;
 if(state.active){
  const c=CARDS.find(c=>c.id===state.active.id);const target=state.players.find(p=>p.id===state.active.target);
  $('card').classList.toggle('dare-card',c.type==='dare');$('cardType').textContent=t(c.type);
  $('cardText').textContent=c[lang].replaceAll('{target}',target?playerName(target):'');
  $('targetNote').textContent=target?`${t('with')} ${playerName(target)}`:'';$('consentNote').hidden=!c.pair;
 }
 if(focus)(state.active?$('cardText'):$('turnTitle')).focus();
}
function toggleFields(){
 document.querySelector('.preferences').hidden=!state.flirting;
 $('customGenderField').hidden=$('playerGender').value!=='custom';
 $('partnerField').hidden=$('playerRelationship').value!=='partner';
 $('playerPartner').required=$('playerRelationship').value==='partner';
 $('playerPreference').disabled=!state.flirting||$('playerRelationship').value==='family';
 if(!state.flirting||$('playerRelationship').value==='family')$('playerPreference').value='none';
}
function loadProfile(){
 const p=state.players[index];$('profileTitle').textContent=`${t('player')} ${index+1}`;$('profileProgress').textContent=`${index+1} / ${state.players.length}`;
 $('playerChips').replaceChildren(...state.players.map((p,i)=>{const b=document.createElement('button');b.type='button';b.textContent=`${p.ready?'✓ ':''}${playerName(p)}`;b.setAttribute('aria-current',String(i===index));b.onclick=()=>{capture();index=i;save();loadProfile();$('profileTitle').focus();};return b;}));
 $('playerName').value=p.name;$('playerName').placeholder=`${t('player')} ${index+1}`;$('playerAge').value=p.age;$('playerGender').value=p.gender;$('customGender').value=p.customGender;$('playerCountry').value=p.country;$('playerRelationship').value=p.relationship;$('playerPreference').value=p.preference;
 const empty=document.createElement('option');empty.value='';empty.textContent=t('selectPartner');
 $('playerPartner').replaceChildren(empty,...state.players.filter(q=>q.id!==p.id).map(q=>{const o=document.createElement('option');o.value=q.id;o.textContent=playerName(q);return o;}));$('playerPartner').value=String(p.partner);
 $('savePlayer').textContent=index<state.players.length-1?t('nextProfile'):t('start');$('profileError').textContent='';toggleFields();
}
function capture(){
 if(state?.stage!=='profiles')return;
 const p=state.players[index];Object.assign(p,{name:$('playerName').value.trim().slice(0,32),age:$('playerAge').value,gender:$('playerGender').value,customGender:$('playerGender').value==='custom'?$('customGender').value.trim().slice(0,40):'',country:$('playerCountry').value.trim().slice(0,60),relationship:$('playerRelationship').value,partner:$('playerRelationship').value==='partner'?$('playerPartner').value:'',preference:$('playerRelationship').value==='family'?'none':$('playerPreference').value});
 p.ready=validPlayer(p)&&(p.relationship!=='partner'||p.partner!=='');
}
$('less').onclick=()=>setCount(count-1);$('more').onclick=()=>setCount(count+1);
document.querySelectorAll('[name=mode]').forEach(el=>el.onchange=()=>document.body.dataset.mode=el.value);
$('setupForm').onsubmit=e=>{
 e.preventDefault();if(!$('setupForm').reportValidity())return;
 const old=state?.players||[];
 state={stage:'profiles',flirting:$('enableFlirting').checked,mode:document.querySelector('[name=mode]:checked').value,players:Array.from({length:count},(_,i)=>old[i]||makePlayer(i)),turn:0,used:[],active:null,profileIndex:0};
 state.players.forEach(p=>{if(p.relationship==='partner'&&!state.players.some(q=>String(q.id)===String(p.partner))){p.partner='';p.ready=false;}});
 index=0;save();render(true);
};
$('profileForm').addEventListener('input',()=>{toggleFields();capture();save();});
$('profileForm').addEventListener('change',()=>{toggleFields();capture();save();});
$('profileForm').onsubmit=e=>{
 e.preventDefault();capture();
 if(!state.players[index].ready){$('profileError').textContent=t('ageError');return;}
 if(index<state.players.length-1)index++;
 else {const unready=state.players.findIndex(p=>!p.ready||!validPlayer(p));if(unready!==-1)index=unready;else{state.stage='game';state.active=null;}}
 save();render(true);
};
$('previousPlayer').onclick=()=>{capture();if(index>0)index--;else state.stage='setup';save();render(true);};
$('editPlayers').onclick=()=>{state.stage='profiles';state.active=null;index=0;save();render(true);};
function choose(type){if(state?.stage!=='game'||state.active)return;const result=drawCard(state.flirting?CARDS:CARDS.filter(c=>!c.pair),state.mode,type,state.players[state.turn%state.players.length],state.players,state.used);state.used=result.used;state.active={id:result.id,target:result.target};save();render(true);}
$('truth').onclick=()=>choose('truth');$('dare').onclick=()=>choose('dare');
function next(){if(!state?.active)return;state.turn++;state.active=null;save();render(true);}
$('pass').onclick=next;$('done').onclick=next;
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{capture();lang=b.dataset.lang;try{localStorage.setItem('GMP_LANGUAGE',lang);}catch{}save();render();});
$('endSession').onclick=()=>{$('endDialog').showModal();};
$('endDialog').addEventListener('close',()=>{if($('endDialog').returnValue!=='delete')return;try{sessionStorage.removeItem(SESSION_KEY);}catch{}state=null;index=0;count=2;$('adultConsent').checked=false;$('setupForm').reset();$('profileForm').reset();render();$('setupTitle').setAttribute('tabindex','-1');$('setupTitle').focus();});
render();
