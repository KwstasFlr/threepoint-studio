"use strict";

// Bounties and fruit names are frozen at the end of Wano.
// Source: https://one-piece.com/character/Mugiwarano_itimi/index.html
const OP_CHARACTERS = [
  {id:"luffy",name:"Monkey D. Luffy",aliases:["luffy","λουφι","λούφι"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Hito Hito no Mi: Nika",fruitType:"Zoan",bounty:3000000000,arc:"East Blue"},
  {id:"zoro",name:"Roronoa Zoro",aliases:["zoro","ζορο","ζόρο"],gender:"male",form:"human",role:["Swordsman","Ξιφομάχος"],fruit:null,fruitType:null,bounty:1111000000,arc:"East Blue"},
  {id:"nami",name:"Nami",aliases:["νάμι","ναμι"],gender:"female",form:"human",role:["Navigator","Πλοηγός"],fruit:null,fruitType:null,bounty:366000000,arc:"East Blue"},
  {id:"chopper",name:"Tony Tony Chopper",aliases:["chopper","τσοπερ","τσόπερ"],gender:"male",form:"reindeer",role:["Doctor","Γιατρός"],fruit:"Hito Hito no Mi",fruitType:"Zoan",bounty:1000,arc:"Drum Island"},
  {id:"robin",name:"Nico Robin",aliases:["robin","ρομπιν","ρόμπιν"],gender:"female",form:"human",role:["Archaeologist","Αρχαιολόγος"],fruit:"Hana Hana no Mi",fruitType:"Paramecia",bounty:930000000,arc:"Alabasta"},
  {id:"shanks",name:"Shanks",aliases:["σανκς","σάνκς"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:4048900000,arc:"East Blue"},
  {id:"ace",name:"Portgas D. Ace",aliases:["ace","έις","εις"],gender:"male",form:"human",role:["Commander","Διοικητής"],fruit:"Mera Mera no Mi",fruitType:"Logia",bounty:550000000,arc:"Alabasta"},
  {id:"law",name:"Trafalgar Law",aliases:["law","trafalgar d water law","λο","λοου"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Ope Ope no Mi",fruitType:"Paramecia",bounty:3000000000,arc:"Sabaody"},
  {id:"hancock",name:"Boa Hancock",aliases:["hancock","χανκοκ","χάνκοκ"],gender:"female",form:"human",role:["Captain","Καπετάνιος"],fruit:"Mero Mero no Mi",fruitType:"Paramecia",bounty:1659000000,arc:"Amazon Lily"},
  {id:"buggy",name:"Buggy",aliases:["μπαγκι","μπάγκι"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Bara Bara no Mi",fruitType:"Paramecia",bounty:3189000000,arc:"East Blue"},
];
const OP_BY_ID = new Map(OP_CHARACTERS.map(character=>[character.id,character]));
const OP_STORAGE_KEY = "GMP_ONE_PIECE_V1";
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
  return OP_CHARACTERS[((days*7+3)%OP_CHARACTERS.length+OP_CHARACTERS.length)%OP_CHARACTERS.length].id;
}

function opNewRound(mode,previousId){
  const day = opDay();
  const pool = OP_CHARACTERS.filter(character=>character.id!==previousId);
  return {day,target:mode==="daily"?opDailyId(day):pool[Math.floor(Math.random()*pool.length)].id,guesses:[]};
}

function opValidRound(value,mode){
  return value && OP_BY_ID.has(value.target) && Array.isArray(value.guesses)
    && value.guesses.length<=OP_CHARACTERS.length
    && new Set(value.guesses).size===value.guesses.length
    && value.guesses.every(id=>OP_BY_ID.has(id))
    && (mode!=="daily" || (value.day===opDay() && value.target===opDailyId(value.day)))
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
function opNormalize(value){return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[.\s]+/g," ").trim();}

function opCompare(guess,target,key){
  if(key==="role" && guess.role[0]===target.role[0]) return {kind:"match",symbol:"✓"};
  if(guess[key]===target[key]) return {kind:"match",symbol:"✓"};
  if(key==="fruit" && guess.fruitType && guess.fruitType===target.fruitType) return {kind:"partial",symbol:"≈"};
  return {kind:"miss",symbol:key==="bounty"?(guess.bounty<target.bounty?"↑":"↓"):"×"};
}

function opValue(character,key){
  if(key==="name") return character.name;
  if(key==="gender") return character.gender==="male"?T("Male","Άνδρας"):T("Female","Γυναίκα");
  if(key==="form"){
    const forms={human:["Human","Άνθρωπος"],reindeer:["Reindeer","Τάρανδος"],cyborg:["Human / cyborg","Άνθρωπος / cyborg"],skeleton:["Human / skeleton","Άνθρωπος / σκελετός"],fishman:["Fish-man","Ψαράνθρωπος"]};
    return T(...forms[character.form]);
  }
  if(key==="role") return T(...character.role);
  if(key==="fruit") return character.fruit || T("None","Κανένα");
  if(key==="bounty") return new Intl.NumberFormat(lang==="el"?"el-GR":"en-US").format(character.bounty)+" ฿";
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
  const done=won || round.guesses.length===OP_CHARACTERS.length;
  const available=OP_CHARACTERS.filter(character=>!round.guesses.includes(character.id));
  const columns=[
    ["name",T("Character","Χαρακτήρας")],["gender",T("Gender","Φύλο")],
    ["form",T("Species / form","Είδος / μορφή")],["role",T("Crew role","Ρόλος")],
    ["fruit",T("Devil Fruit","Φρούτο του Διαβόλου")],["bounty",T("Bounty","Επικήρυξη")],
    ["arc",T("First appearance arc","Πρώτη εμφάνιση")]
  ];
  const status=won?T(`Found it: ${target.name}! ${round.guesses.length} guesses.`,`Το βρήκες: ${target.name}! ${round.guesses.length} προσπάθειες.`)
    :done?T(`The character was ${target.name}.`,`Ο χαρακτήρας ήταν ${target.name}.`)
    :T(`${round.guesses.length} / 10 guesses. Choose a character to compare their traits.`,`${round.guesses.length} / 10 προσπάθειες. Διάλεξε έναν χαρακτήρα για να συγκρίνεις τα χαρακτηριστικά του.`);
  opDialog.innerHTML=`
    <div class="dialog-top"><div><span class="eyebrow">ONE PIECE · CLASSIC</span><h2 id="opTitle">${T("GUESS THE CHARACTER","ΜΑΝΤΕΨΕ ΤΟΝ ΧΑΡΑΚΤΗΡΑ")}</h2></div>
      <button class="close" type="button" data-op-close aria-label="${T("Close","Κλείσιμο")}">×</button></div>
    <p class="op-intro">${T("Find the hidden character among 10 characters from across One Piece. Each guess compares their traits with the answer.","Βρες τον κρυφό χαρακτήρα ανάμεσα σε 10 χαρακτήρες από διαφορετικά πληρώματα του One Piece. Κάθε προσπάθεια συγκρίνει τα χαρακτηριστικά με την απάντηση.")}</p>
    <div class="op-modes" aria-label="${T("Game mode","Τρόπος παιχνιδιού")}">
      <button type="button" data-op-mode="daily" aria-pressed="${opMode==="daily"}">${T("Daily","Ημερήσιο")}</button>
      <button type="button" data-op-mode="unlimited" aria-pressed="${opMode==="unlimited"}">${T("Unlimited","Ελεύθερο")}</button>
    </div>
    <p class="muted">${opMode==="daily"?T(`Daily challenge · ${round.day} · Resets at midnight in Athens.`,`Ημερήσιο challenge · ${round.day} · Αλλάζει τα μεσάνυχτα, ώρα Αθήνας.`):T("New character every round. Play as often as you like.","Νέος χαρακτήρας σε κάθε γύρο. Παίξε όσες φορές θέλεις.")}</p>
    <div class="op-legend"><span class="op-match">✓ ${T("Match","Ταιριάζει")}</span><span class="op-partial">≈ ${T("Same fruit type","Ίδιος τύπος φρούτου")}</span><span class="op-miss">× ${T("Different","Διαφορετικό")}</span><span>↑ / ↓ ${T("Target bounty is higher / lower","Η ζητούμενη επικήρυξη είναι μεγαλύτερη / μικρότερη")}</span></div>
    <form class="op-form" ${done?"hidden":""}>
      <label for="opGuess">${T("Choose or type a character","Διάλεξε ή γράψε χαρακτήρα")}</label>
      <div class="guess-row"><input id="opGuess" list="opChoices" autocomplete="off" maxlength="80" required placeholder="${T("e.g. Luffy","π.χ. Luffy")}"><button class="button lime" type="submit">${T("Guess →","Απάντηση →")}</button></div>
      <datalist id="opChoices">${available.map(character=>`<option value="${esc(character.name)}"></option>`).join("")}</datalist>
    </form>
    <p class="op-message ${won?"op-won":""}" role="status" aria-live="polite">${esc(status)}</p>
    ${round.guesses.length?`<div class="op-table-scroll" tabindex="0" role="region" aria-label="${T("Guess comparisons, scroll horizontally","Συγκρίσεις απαντήσεων, κύλιση οριζόντια")}"><table class="op-table"><caption>${T("Your guesses · newest first","Οι προσπάθειές σου · πιο πρόσφατη πρώτη")}</caption><thead><tr>${columns.map(([,label])=>`<th scope="col">${label}</th>`).join("")}</tr></thead><tbody>
      ${[...round.guesses].reverse().map(id=>{const character=OP_BY_ID.get(id);return `<tr>${columns.map(([key])=>{const comparison=opCompare(character,target,key);return `<td class="op-${comparison.kind}">${esc(opValue(character,key))}<span class="op-symbol">${comparison.symbol}</span></td>`;}).join("")}</tr>`;}).join("")}
    </tbody></table></div>`:""}
    ${opMode==="unlimited"?`<button class="button lime op-next" type="button" data-op-next>${T("New round →","Νέος γύρος →")}</button>`:""}
    <p class="op-footer">${T("Contains spoilers through the end of Wano. Bounties use that snapshot. Progress is saved on this device.","Περιέχει spoilers έως το τέλος του Wano. Οι επικηρύξεις αντιστοιχούν σε εκείνη την περίοδο. Η πρόοδος αποθηκεύεται σε αυτή τη συσκευή.")}<br>
    <a href="https://one-piece.com/character/Mugiwarano_itimi/index.html" target="_blank" rel="noopener noreferrer">${T("Official character reference","Επίσημη αναφορά χαρακτήρων")}</a></p>`;
}

opDialog.addEventListener("click",event=>{
  if(event.target.closest("[data-op-close]")){opDialog.close();return;}
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
  if(opWon(round)) return;
  const input=opDialog.querySelector("input");
  const value=opNormalize(input.value);
  const character=OP_CHARACTERS.find(item=>[item.name,...item.aliases].some(name=>opNormalize(name)===value));
  const message=opDialog.querySelector(".op-message");
  if(!character){message.textContent=T("Choose one of the 10 characters from the list.","Διάλεξε έναν από τους 10 χαρακτήρες της λίστας.");input.focus();return;}
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
