"use strict";

// Bounties and fruit names are frozen at the end of Wano.
// Source: https://one-piece.com/character/
const OP_CHARACTERS = [
  {id:"luffy",name:"Monkey D. Luffy",aliases:["luffy","λουφι","λούφι"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Hito Hito no Mi: Nika",fruitType:"Mythical Zoan",bounty:3000000000,arc:"East Blue"},
  {id:"zoro",name:"Roronoa Zoro",aliases:["zoro","ζορο","ζόρο"],gender:"male",form:"human",role:["Swordsman","Ξιφομάχος"],fruit:null,fruitType:null,bounty:1111000000,arc:"East Blue"},
  {id:"nami",name:"Nami",aliases:["νάμι","ναμι"],gender:"female",form:"human",role:["Navigator","Πλοηγός"],fruit:null,fruitType:null,bounty:366000000,arc:"East Blue"},
  {id:"chopper",name:"Tony Tony Chopper",aliases:["chopper","τσοπερ","τσόπερ"],gender:"male",form:"reindeer",role:["Doctor","Γιατρός"],fruit:"Hito Hito no Mi",fruitType:"Zoan",bounty:1000,arc:"Drum Island"},
  {id:"robin",name:"Nico Robin",aliases:["robin","ρομπιν","ρόμπιν"],gender:"female",form:"human",role:["Archaeologist","Αρχαιολόγος"],fruit:"Hana Hana no Mi",fruitType:"Paramecia",bounty:930000000,arc:"Alabasta"},
  {id:"shanks",name:"Shanks",aliases:["σανκς","σάνκς"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:4048900000,arc:"East Blue"},
  {id:"ace",name:"Portgas D. Ace",aliases:["ace","έις","εις"],gender:"male",form:"human",role:["Commander","Διοικητής"],fruit:"Mera Mera no Mi",fruitType:"Logia",bounty:550000000,arc:"Alabasta"},
  {id:"law",name:"Trafalgar Law",aliases:["law","trafalgar d water law","λο","λοου"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Ope Ope no Mi",fruitType:"Paramecia",bounty:3000000000,arc:"Sabaody"},
  {id:"hancock",name:"Boa Hancock",aliases:["hancock","χανκοκ","χάνκοκ"],gender:"female",form:"human",role:["Captain","Καπετάνιος"],fruit:"Mero Mero no Mi",fruitType:"Paramecia",bounty:1659000000,arc:"Amazon Lily"},
  {id:"buggy",name:"Buggy",aliases:["μπαγκι","μπάγκι"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Bara Bara no Mi",fruitType:"Paramecia",bounty:3189000000,arc:"East Blue"},
  {id:"bellamy",name:"Bellamy",aliases:["μπελαμι","μπέλαμι"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Bane Bane no Mi",fruitType:"Paramecia",bounty:195000000,arc:"Jaya"},
  {id:"foxy",name:"Foxy",aliases:["φοξι","φόξι"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Noro Noro no Mi",fruitType:"Paramecia",bounty:24000000,arc:"Long Ring Long Land"},
  {id:"galdino",name:"Galdino (Mr. 3)",aliases:["galdino","mr 3","mr3","γκαλντινο","γκαλντίνο"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Doru Doru no Mi",fruitType:"Paramecia",bounty:24000000,arc:"Little Garden"},
  {id:"daz",name:"Daz Bones (Mr. 1)",aliases:["daz bones","daz bonez","mr 1","mr1","νταζ μποουνς"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Supa Supa no Mi",fruitType:"Paramecia",bounty:75000000,arc:"Alabasta"},
  {id:"bonclay",name:"Bentham (Bon Clay)",aliases:["bentham","bon clay","bonclay","mr 2","mr2","μπον κλει","μπον κλέι"],gender:"male",form:"human",role:["Leader","Ηγέτης"],fruit:"Mane Mane no Mi",fruitType:"Paramecia",bounty:32000000,arc:"Alabasta"},
  {id:"perona",name:"Perona",aliases:["περονα","περόνα"],gender:"female",form:"human",role:["Commander","Διοικητής"],fruit:"Horo Horo no Mi",fruitType:"Paramecia",bounty:null,arc:"Thriller Bark"},
  {id:"blueno",name:"Blueno",aliases:["μπλουενο","μπλουένο"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Doa Doa no Mi",fruitType:"Paramecia",bounty:null,arc:"Water 7"},
  {id:"kalifa",name:"Kalifa",aliases:["καλιφα","καλίφα"],gender:"female",form:"human",role:["Agent","Πράκτορας"],fruit:"Awa Awa no Mi",fruitType:"Paramecia",bounty:null,arc:"Water 7"},
  {id:"jabra",name:"Jabra",aliases:["jabura","τζαμπρα","τζάμπρα"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Inu Inu no Mi: Wolf",fruitType:"Zoan",bounty:null,arc:"Enies Lobby"},
  {id:"caribou",name:"Caribou",aliases:["καριμπου","καριμπού"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Numa Numa no Mi",fruitType:"Logia",bounty:210000000,arc:"Return to Sabaody"},
  {id:"kaku",name:"Kaku",aliases:["κακου","κάκου"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Ushi Ushi no Mi: Giraffe",fruitType:"Zoan",bounty:null,arc:"Water 7"},
  {id:"kumadori",name:"Kumadori",aliases:["κουμαντορι","κουμαντόρι"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:null,fruitType:null,bounty:null,arc:"Enies Lobby"},
  {id:"fukuro",name:"Fukuro",aliases:["fukurou","φουκουρο","φουκούρο"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:null,fruitType:null,bounty:null,arc:"Enies Lobby"},
  {id:"spandam",name:"Spandam",aliases:["σπανταμ","σπάνταμ"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:null,fruitType:null,bounty:null,arc:"Water 7"},
  {id:"hina",name:"Hina",aliases:["χινα","χίνα"],gender:"female",form:"human",role:["Marine","Πεζοναύτης"],fruit:"Ori Ori no Mi",fruitType:"Paramecia",bounty:null,arc:"Alabasta"},
  {id:"tashigi",name:"Tashigi",aliases:["τασιγκι","τασίγκι"],gender:"female",form:"human",role:["Marine","Πεζοναύτης"],fruit:null,fruitType:null,bounty:null,arc:"East Blue"},
  {id:"wapol",name:"Wapol",aliases:["γουαπολ","γουάπολ"],gender:"male",form:"human",role:["King","Βασιλιάς"],fruit:"Baku Baku no Mi",fruitType:"Paramecia",bounty:null,arc:"Drum Island"},
  {id:"dalton",name:"Dalton",aliases:["νταλτον","ντάλτον"],gender:"male",form:"human",role:["King","Βασιλιάς"],fruit:"Ushi Ushi no Mi: Bison",fruitType:"Zoan",bounty:null,arc:"Drum Island"},
  {id:"pell",name:"Pell",aliases:["πελ"],gender:"male",form:"human",role:["Royal guard","Βασιλικός φρουρός"],fruit:"Tori Tori no Mi: Falcon",fruitType:"Zoan",bounty:null,arc:"Alabasta"},
  {id:"chaka",name:"Chaka",aliases:["τσακα","τσάκα"],gender:"male",form:"human",role:["Royal guard","Βασιλικός φρουρός"],fruit:"Inu Inu no Mi: Jackal",fruitType:"Zoan",bounty:null,arc:"Alabasta"},
  {id:"arlong",name:"Arlong",aliases:["αρλονγκ","άρλονγκ"],gender:"male",form:"fishman",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:20000000,arc:"East Blue"},
  {id:"kuro",name:"Kuro",aliases:["captain kuro","κουρο","κούρο"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:16000000,arc:"East Blue"},
  {id:"krieg",name:"Don Krieg",aliases:["krieg","don krieg","κριγκ"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:17000000,arc:"East Blue"},
  {id:"gin",name:"Gin",aliases:["γκιν"],gender:"male",form:"human",role:["Commander","Διοικητής"],fruit:null,fruitType:null,bounty:12000000,arc:"East Blue"},
  {id:"alvida",name:"Alvida",aliases:["αλβιντα","αλβίντα"],gender:"female",form:"human",role:["Captain","Καπετάνιος"],fruit:"Sube Sube no Mi",fruitType:"Paramecia",bounty:5000000,arc:"East Blue"},
  {id:"smoker",name:"Smoker",aliases:["σμοκερ","σμόκερ"],gender:"male",form:"human",role:["Marine","Πεζοναύτης"],fruit:"Moku Moku no Mi",fruitType:"Logia",bounty:null,arc:"East Blue"},
  {id:"crocus",name:"Crocus",aliases:["κροκους","κρόκους"],gender:"male",form:"human",role:["Doctor","Γιατρός"],fruit:null,fruitType:null,bounty:null,arc:"Reverse Mountain"},
  {id:"laboon",name:"Laboon",aliases:["λαμπουν","λαμπούν"],gender:"male",form:"whale",role:["Companion","Σύντροφος"],fruit:null,fruitType:null,bounty:null,arc:"Reverse Mountain"},
  {id:"dorry",name:"Dorry",aliases:["ντορι","ντόρι"],gender:"male",form:"giant",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:100000000,arc:"Little Garden"},
  {id:"brogy",name:"Brogy",aliases:["broggy","μπρογκι","μπρόγκι"],gender:"male",form:"giant",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:100000000,arc:"Little Garden"},
  {id:"mr5",name:"Gem (Mr. 5)",aliases:["gem","mr 5","mr5","τζεμ"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Bomu Bomu no Mi",fruitType:"Paramecia",bounty:10000000,arc:"Whisky Peak"},
  {id:"missvalentine",name:"Mikita (Miss Valentine)",aliases:["mikita","miss valentine","μικιτα","μίκιτα"],gender:"female",form:"human",role:["Agent","Πράκτορας"],fruit:"Kilo Kilo no Mi",fruitType:"Paramecia",bounty:7500000,arc:"Whisky Peak"},
  {id:"missgoldenweek",name:"Marianne (Miss Goldenweek)",aliases:["marianne","miss goldenweek","miss golden week","μαριαν","μαριάν"],gender:"female",form:"human",role:["Artist","Καλλιτέχνης"],fruit:null,fruitType:null,bounty:29000000,arc:"Little Garden"},
  {id:"chess",name:"Chess",aliases:["τσεσ"],gender:"male",form:"human",role:["Advisor","Σύμβουλος"],fruit:null,fruitType:null,bounty:null,arc:"Drum Island"},
  {id:"kuromarimo",name:"Kuromarimo",aliases:["κουρομαριμο","κουρομαρίμο"],gender:"male",form:"human",role:["Officer","Αξιωματικός"],fruit:null,fruitType:null,bounty:null,arc:"Drum Island"},
  {id:"kureha",name:"Dr. Kureha",aliases:["kureha","doctor kureha","κουρεχα","κουρέχα"],gender:"female",form:"human",role:["Doctor","Γιατρός"],fruit:null,fruitType:null,bounty:null,arc:"Drum Island"},
  {id:"hiluluk",name:"Dr. Hiriluk",aliases:["hiriluk","hiluluk","dr hiluluk","χιρουλουκ","χιριλουκ"],gender:"male",form:"human",role:["Doctor","Γιατρός"],fruit:null,fruitType:null,bounty:null,arc:"Drum Island"},
  {id:"hatchan",name:"Hatchan",aliases:["hachi","χατσαν","χάτσαν"],gender:"male",form:"fishman",role:["Officer","Αξιωματικός"],fruit:null,fruitType:null,bounty:8000000,arc:"East Blue"},
  {id:"chew",name:"Chew",aliases:["choo","chu","τσου"],gender:"male",form:"fishman",role:["Officer","Αξιωματικός"],fruit:null,fruitType:null,bounty:5500000,arc:"East Blue"},
  {id:"kuroobi",name:"Kuroobi",aliases:["kuroobi","κουροομπι","κουροόμπι"],gender:"male",form:"fishman",role:["Officer","Αξιωματικός"],fruit:null,fruitType:null,bounty:9000000,arc:"East Blue"},
];
const OP_BY_ID = new Map(OP_CHARACTERS.map(character=>[character.id,character]));
const OP_STORAGE_KEY = "GMP_ONE_PIECE_V1";
const OP_GUESS_LIMIT = 10;
let opAdBusy = false;
let opMode = "daily";
let opRounds = {daily:null,unlimited:null};
let opReturnFocus = null;

function opDay(){
  const parts = new Intl.DateTimeFormat("en-US",{timeZone:"Europe/Athens",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
  const get = type=>parts.find(part=>part.type===type).value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function opDailyId(day){
  const days = Math.floor(Date.parse(`${day}T00:00:00Z`)/86400000);
  // Keep today's shared Daily unchanged; use the expanded roster from tomorrow.
  const rosterSize = day < "2026-10-06" ? 30 : OP_CHARACTERS.length;
  return OP_CHARACTERS[((days*7+3)%rosterSize+rosterSize)%rosterSize].id;
}

function opNewRound(mode,previousId){
  const day = opDay();
  const dailyId = opDailyId(day);
  const pool = OP_CHARACTERS.filter(character=>character.id!==previousId && (mode!=="unlimited" || character.id!==dailyId));
  return {day,target:mode==="daily"?opDailyId(day):pool[Math.floor(Math.random()*pool.length)].id,guesses:[],extra:false,ended:false};
}

function opValidRound(value,mode){
  return value && OP_BY_ID.has(value.target) && Array.isArray(value.guesses)
    && (value.extra===undefined || typeof value.extra==="boolean")
    && (value.ended===undefined || typeof value.ended==="boolean")
    && value.guesses.length<=OP_GUESS_LIMIT+(value.extra?1:0)
    && new Set(value.guesses).size===value.guesses.length
    && value.guesses.every(id=>OP_BY_ID.has(id))
    && (mode!=="daily" || (value.day===opDay() && value.target===opDailyId(value.day)))
    && (mode!=="unlimited" || value.target!==opDailyId(opDay()))
    && (value.guesses.indexOf(value.target)===-1 || value.guesses.at(-1)===value.target);
}

try{
  const saved = JSON.parse(read(OP_STORAGE_KEY,"null"));
  if(saved) for(const mode of ["daily","unlimited"]){
    if(opValidRound(saved[mode],mode)) opRounds[mode]=saved[mode];
  }
}catch{ /* A damaged save starts a fresh round. */ }

function opSave(){write(OP_STORAGE_KEY,JSON.stringify(opRounds));}
function opRound(){
  if(!opValidRound(opRounds[opMode],opMode)){
    opRounds[opMode]=opNewRound(opMode);
    opSave();
  }
  return opRounds[opMode];
}
function opWon(round){return round.guesses.includes(round.target);}
function opGuessLimit(round){return OP_GUESS_LIMIT+(round.extra?1:0);}
function opDone(round){return opWon(round) || !!round.ended || (!!round.extra && round.guesses.length>=opGuessLimit(round));}
function opCanGuess(round){return !opDone(round) && round.guesses.length<opGuessLimit(round) && !opAdBusy;}
function opCanReward(round){return !opDone(round) && !round.extra && round.guesses.length===OP_GUESS_LIMIT;}
function opNormalize(value){return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[.\s]+/g," ").trim();}

function opCompare(guess,target,key){
  if(guess.id===target.id) return {kind:"match",symbol:"✓"};
  if(key==="fruit"){
    if(guess.fruitType===target.fruitType) return {kind:"match",symbol:"✓"};
    if(guess.fruitType?.includes("Zoan") && target.fruitType?.includes("Zoan")) return {kind:"partial",symbol:"≈"};
    return {kind:"miss",symbol:"×"};
  }
  if(key==="bounty" && (guess.bounty===null || target.bounty===null)) return {kind:"unknown",symbol:"?"};
  if(key==="role" && guess.role[0]===target.role[0]) return {kind:"match",symbol:"✓"};
  if(guess[key]===target[key]) return {kind:"match",symbol:"✓"};
  return {kind:"miss",symbol:key==="bounty"?(guess.bounty<target.bounty?"↑":"↓"):"×"};
}

function opValue(character,key){
  if(key==="name") return character.name;
  if(key==="gender") return character.gender==="male"?T("Male","Άνδρας"):T("Female","Γυναίκα");
  if(key==="form"){
    const forms={human:["Human","Άνθρωπος"],reindeer:["Reindeer","Τάρανδος"],cyborg:["Human / cyborg","Άνθρωπος / cyborg"],skeleton:["Human / skeleton","Άνθρωπος / σκελετός"],fishman:["Fish-man","Ψαράνθρωπος"]};
    forms.giant=["Giant","Γίγαντας"];
    forms.whale=["Whale","Φάλαινα"];
    return T(...forms[character.form]);
  }
  if(key==="role") return T(...character.role);
  if(key==="fruit") return character.fruitType?`${character.fruitType} — ${character.fruit}`:"No Devil Fruit";
  if(key==="bounty") return character.bounty===null?T("Undisclosed","Μη γνωστή"):new Intl.NumberFormat(lang==="el"?"el-GR":"en-US").format(character.bounty)+" ฿";
  return character[key];
}

const opDialog = document.createElement("dialog");
opDialog.id="onePieceDialog";
opDialog.className="op-dialog";
opDialog.setAttribute("aria-labelledby","opTitle");
document.body.append(opDialog);

function openOnePieceGame(){
  opReturnFocus=document.activeElement;
  opRender();
  if(!opDialog.open) opDialog.showModal();
  opDialog.querySelector("input")?.focus();
}

function opRender(){
  const round=opRound();
  const target=OP_BY_ID.get(round.target);
  const won=opWon(round);
  const done=opDone(round);
  const canReward=opCanReward(round);
  const adConfigured=!!window.GMPRewardedAds?.configured();
  const available=OP_CHARACTERS.filter(character=>!round.guesses.includes(character.id));
  const columns=[
    ["name",T("Character","Χαρακτήρας")],["gender",T("Gender","Φύλο")],
    ["form",T("Species / form","Είδος / μορφή")],["role",T("Crew role","Ρόλος")],
    ["fruit",T("Devil Fruit · type & name","Devil Fruit · τύπος & όνομα")],["bounty",T("Bounty","Επικήρυξη")],
    ["arc",T("First appearance arc","Πρώτη εμφάνιση")]
  ];
  const status=won?T(`Found it: ${target.name}! ${round.guesses.length} guesses.`,`Το βρήκες: ${target.name}! ${round.guesses.length} προσπάθειες.`)
    :done?T(`The character was ${target.name}.`,`Ο χαρακτήρας ήταν ${target.name}.`)
    :canReward?T("10 / 10 guesses used. Watch an ad for one extra guess, or reveal the answer.","10 / 10 προσπάθειες. Δες διαφήμιση για μία έξτρα προσπάθεια ή εμφάνισε την απάντηση.")
    :T(`${round.guesses.length} / ${opGuessLimit(round)} guesses. Choose a character to compare their traits.`,`${round.guesses.length} / ${opGuessLimit(round)} προσπάθειες. Διάλεξε έναν χαρακτήρα για να συγκρίνεις τα χαρακτηριστικά του.`);
  opDialog.innerHTML=`
    <div class="dialog-top"><div><span class="eyebrow">ONE PIECE · CLASSIC</span><h2 id="opTitle">${T("GUESS THE CHARACTER","ΜΑΝΤΕΨΕ ΤΟΝ ΧΑΡΑΚΤΗΡΑ")}</h2></div>
      <button class="close" type="button" data-op-close aria-label="${T("Close","Κλείσιμο")}">×</button></div>
    <p class="op-intro">${T("Find the hidden One Piece character. Each guess compares their traits with the answer.","Βρες τον κρυφό χαρακτήρα του One Piece. Κάθε προσπάθεια συγκρίνει τα χαρακτηριστικά με την απάντηση.")}</p>
    <div class="op-modes" aria-label="${T("Game mode","Τρόπος παιχνιδιού")}">
      <button type="button" data-op-mode="daily" aria-pressed="${opMode==="daily"}">${T("Daily","Ημερήσιο")}</button>
      <button type="button" data-op-mode="unlimited" aria-pressed="${opMode==="unlimited"}">${T("Unlimited","Ελεύθερο")}</button>
    </div>
    <p class="muted">${opMode==="daily"?T(`Daily challenge · ${round.day} · Resets at midnight in Athens.`,`Ημερήσιο challenge · ${round.day} · Αλλάζει τα μεσάνυχτα, ώρα Αθήνας.`):T("New character every round. Play as often as you like.","Νέος χαρακτήρας σε κάθε γύρο. Παίξε όσες φορές θέλεις.")}</p>
    <div class="op-legend"><span class="op-match">✓ ${T("Match","Ταιριάζει")}</span><span class="op-partial">≈ ${T("Related Zoan types","Συγγενικοί τύποι Zoan")}</span><span class="op-miss">× ${T("Different","Διαφορετικό")}</span><span class="op-unknown">? ${T("Bounty undisclosed","Μη γνωστή επικήρυξη")}</span><span>↑ / ↓ ${T("Target bounty is higher / lower","Η ζητούμενη επικήρυξη είναι μεγαλύτερη / μικρότερη")}</span></div>
    <form class="op-form" ${!opCanGuess(round)?"hidden":""}>
      <label for="opGuess">${T("Choose or type a character","Διάλεξε ή γράψε χαρακτήρα")}</label>
      <div class="guess-row"><input id="opGuess" list="opChoices" autocomplete="off" maxlength="80" required placeholder="${T("e.g. Luffy","π.χ. Luffy")}"><button class="button lime" type="submit">${T("Guess →","Απάντηση →")}</button></div>
      <datalist id="opChoices">${available.map(character=>`<option value="${esc(character.name)}"></option>`).join("")}</datalist>
    </form>
    <p class="op-message ${won?"op-won":""}" role="status" aria-live="polite">${esc(status)}</p>
    ${canReward?`<div class="op-reward"><button class="button lime" type="button" data-op-ad ${opAdBusy||!adConfigured?"disabled":""}>${T("Watch ad · +1 guess","Δες διαφήμιση · +1 προσπάθεια")}</button>
      <button class="text-button" type="button" data-op-reveal ${opAdBusy?"disabled":""}>${T("Reveal & end round","Δείξε απάντηση & τέλος γύρου")}</button>
      ${!adConfigured?`<p class="muted">${T("Rewarded ads are not configured yet.","Οι διαφημίσεις για έξτρα προσπάθεια δεν έχουν συνδεθεί ακόμη.")}</p>`:""}</div>`:""}
    ${round.guesses.length?`<div class="op-table-scroll" tabindex="0" role="region" aria-label="${T("Guess comparisons, scroll horizontally","Συγκρίσεις απαντήσεων, κύλιση οριζόντια")}"><table class="op-table"><caption>${T("Your guesses · newest first","Οι προσπάθειές σου · πιο πρόσφατη πρώτη")}</caption><thead><tr>${columns.map(([,label])=>`<th scope="col">${label}</th>`).join("")}</tr></thead><tbody>
      ${[...round.guesses].reverse().map(id=>{const character=OP_BY_ID.get(id);return `<tr>${columns.map(([key])=>{const comparison=opCompare(character,target,key);return `<td class="op-${comparison.kind}">${esc(opValue(character,key))}<span class="op-symbol">${comparison.symbol}</span></td>`;}).join("")}</tr>`;}).join("")}
    </tbody></table></div>`:""}
    ${opMode==="unlimited"?`<button class="button lime op-next" type="button" data-op-next ${opAdBusy?"disabled":""}>${T("New round →","Νέος γύρος →")}</button>`:""}
    <p class="op-footer">${T("Contains spoilers through the end of Wano. Bounties use that snapshot. Progress is saved on this device.","Περιέχει spoilers έως το τέλος του Wano. Οι επικηρύξεις αντιστοιχούν σε εκείνη την περίοδο. Η πρόοδος αποθηκεύεται σε αυτή τη συσκευή.")}<br>
    <a href="https://one-piece.com/character/" target="_blank" rel="noopener noreferrer">${T("Official character reference","Επίσημη αναφορά χαρακτήρων")}</a></p>`;
}

opDialog.addEventListener("click",event=>{
  if(event.target.closest("[data-op-close]")){opDialog.close();return;}
  if(opAdBusy)return;
  if(event.target.closest("[data-op-ad]")){opWatchAd();return;}
  if(event.target.closest("[data-op-reveal]")){
    const round=opRound();
    if(opCanReward(round)){round.ended=true;opSave();opRender();}
    return;
  }
  const mode=event.target.closest("[data-op-mode]");
  if(mode){opMode=mode.dataset.opMode;opRender();opDialog.querySelector("input")?.focus();return;}
  if(event.target.closest("[data-op-next]")){
    opRounds.unlimited=opNewRound("unlimited",opRound().target);
    opSave();opRender();opDialog.querySelector("input")?.focus();
  }
});

opDialog.addEventListener("submit",event=>{
  event.preventDefault();
  const round=opRound();
  if(!opCanGuess(round)) return;
  const input=opDialog.querySelector("input");
  const value=opNormalize(input.value);
  const character=OP_CHARACTERS.find(item=>[item.name,...item.aliases].some(name=>opNormalize(name)===value));
  const message=opDialog.querySelector(".op-message");
  if(!character){message.textContent=T("Choose a character from the list.","Διάλεξε έναν χαρακτήρα από τη λίστα.");input.focus();return;}
  if(round.guesses.includes(character.id)){message.textContent=T("You already tried this character.","Έχεις ήδη δοκιμάσει αυτόν τον χαρακτήρα.");input.focus();return;}
  round.guesses.push(character.id);
  opSave();opRender();
  if(opWon(round)) opDialog.querySelector("[data-op-next], [data-op-close]")?.focus();
  else opDialog.querySelector("input")?.focus();
});

opDialog.addEventListener("close",()=>{
  if(opReturnFocus?.isConnected) opReturnFocus.focus();
  else document.querySelector('[data-game="one-piece"]')?.focus();
});

document.querySelectorAll("[data-lang]").forEach(button=>button.addEventListener("click",()=>{if(opDialog.open)opRender();}));

async function opWatchAd(){
  const selectedMode=opMode;
  const round=opRound();
  if(opAdBusy || !opCanReward(round) || !window.GMPRewardedAds?.configured())return;
  opAdBusy=true;
  // Rewarded ads need to appear above the page rather than behind a native dialog.
  opDialog.close();
  let granted=false;
  try{granted=await window.GMPRewardedAds.show();}catch{ /* No ad means no reward. */ }
  opAdBusy=false;
  const stillCurrent=opRounds[selectedMode]===round && opValidRound(round,selectedMode);
  if(granted && stillCurrent && opCanReward(round)){
    round.extra=true;
    opSave();
  }
  opMode=selectedMode;
  openOnePieceGame();
  if(!granted)opDialog.querySelector(".op-message").textContent=T("No reward was granted. You can retry when an ad is available.","Δεν δόθηκε έξτρα προσπάθεια. Μπορείς να δοκιμάσεις ξανά όταν υπάρχει διαθέσιμη διαφήμιση.");
}
