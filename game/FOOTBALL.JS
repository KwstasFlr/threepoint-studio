"use strict";
const FB_PLAYERS = [...P,...UNLIMITED_PLAYERS].map(player=>({...player,...FB_METADATA[player.id],name:player.name})).concat(FB_NEW_PLAYERS);
const FB_DAILY_IDS=new Set(P.map(player=>player.id));
const FB_UNLIMITED_IDS=new Set(FB_PLAYERS.filter(player=>!FB_DAILY_IDS.has(player.id)).map(player=>player.id));
let fbCurrency=read("GMP_FOOTBALL_CURRENCY","EUR")==="USD"?"USD":"EUR";
const FB_BY_ID = new Map(FB_PLAYERS.map(player=>[player.id,player]));
const FB_STORAGE_KEY = "GMP_FOOTBALL_COMPARE_V1";
const FB_GUESS_LIMIT = 10;
let fbAdBusy = false;
let fbMode = "daily";
let fbRounds = {daily:null,unlimited:null};
let fbReturnFocus = null;

function fbDay(){
  const parts = new Intl.DateTimeFormat("en-US",{timeZone:"Europe/Athens",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
  const get = type=>parts.find(part=>part.type===type).value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function fbDailyId(day){return playerForDay(Math.floor(Date.parse(`${day}T00:00:00Z`)/86400000)).id;}

function fbNewRound(mode,previousId){
  const day = fbDay();
  const dailyId = fbDailyId(day);
  const pool = FB_PLAYERS.filter(player=>player.id!==previousId && (mode!=="unlimited" || FB_UNLIMITED_IDS.has(player.id)));
  return {day,target:mode==="daily"?fbDailyId(day):pool[Math.floor(Math.random()*pool.length)].id,guesses:[],extra:false,ended:false};
}

function fbValidRound(value,mode){
  return value && FB_BY_ID.has(value.target) && Array.isArray(value.guesses)
    && (value.extra===undefined || typeof value.extra==="boolean")
    && (value.ended===undefined || typeof value.ended==="boolean")
    && value.guesses.length<=FB_GUESS_LIMIT+(value.extra?1:0)
    && new Set(value.guesses).size===value.guesses.length
    && value.guesses.every(id=>FB_BY_ID.has(id))
    && (mode!=="daily" || (value.day===fbDay() && value.target===fbDailyId(value.day)))
    && (mode!=="unlimited" || FB_UNLIMITED_IDS.has(value.target))
    && (value.guesses.indexOf(value.target)===-1 || value.guesses.at(-1)===value.target);
}

try{
  const saved = JSON.parse(read(FB_STORAGE_KEY,"null"));
  if(saved) for(const mode of ["daily","unlimited"]){
    if(fbValidRound(saved[mode],mode)) fbRounds[mode]=saved[mode];
  }
}catch{ /* A damaged save starts a fresh round. */ }

function fbSave(){write(FB_STORAGE_KEY,JSON.stringify(fbRounds));}
function fbRound(){
  if(!fbValidRound(fbRounds[fbMode],fbMode)){
    fbRounds[fbMode]=fbNewRound(fbMode);
    fbSave();
  }
  return fbRounds[fbMode];
}
function fbWon(round){return round.guesses.includes(round.target);}
function fbGuessLimit(round){return FB_GUESS_LIMIT+(round.extra?1:0);}
function fbDone(round){return fbWon(round) || !!round.ended || (!!round.extra && round.guesses.length>=fbGuessLimit(round));}
function fbCanGuess(round){return !fbDone(round) && round.guesses.length<fbGuessLimit(round) && !fbAdBusy;}
function fbCanReward(round){return !fbDone(round) && !round.extra && round.guesses.length===FB_GUESS_LIMIT;}
function fbNormalize(value){return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[.\s]+/g," ").trim();}

function fbAge(player,day=fbDay()){
  if(!player.birthDate)return null;
  const [year,month,date]=day.split('-').map(Number);
  const [birthYear,birthMonth,birthDay]=player.birthDate.split('-').map(Number);
  return year-birthYear-(month<birthMonth||(month===birthMonth&&date<birthDay)?1:0);
}
function fbCompare(guess,target,key){
  if(guess.id===target.id)return {kind:'match',symbol:'✓'};
  const a=key==='age'?fbAge(guess):Array.isArray(guess[key])?guess[key][0]:guess[key];
  const b=key==='age'?fbAge(target):Array.isArray(target[key])?target[key][0]:target[key];
  if(a==null||b==null)return {kind:'unknown',symbol:'?'};
  if(a===b)return {kind:'match',symbol:'✓'};
  return {kind:'miss',symbol:['age','highestMarketValue'].includes(key)?(a<b?'↑':'↓'):'×'};
}
function fbValue(player,key){
  if(key==='age')return fbAge(player)??T('Unavailable','Μη διαθέσιμη');
  if(key==='nation'||key==='position')return T(...player[key]);
  if(key==='status')return player.status==='active'?T('Active','Ενεργός'):player.status==='retired'?T('Retired','Αποσυρμένος'):T('Unavailable','Μη διαθέσιμη');
  if(key==='highestMarketValue')return player.highestMarketValue==null?T('Unavailable','Μη διαθέσιμη'):new Intl.NumberFormat(lang==='el'?'el-GR':'en-US',{style:'currency',currency:fbCurrency,maximumFractionDigits:0}).format(player.highestMarketValue*(fbCurrency==='USD'?FB_EXCHANGE.usdPerEuro:1));
  return player[key];
}

const fbDialog = document.createElement("dialog");
fbDialog.id="footballCompareDialog";
fbDialog.className="op-dialog";
fbDialog.setAttribute("aria-labelledby","fbTitle");
document.body.append(fbDialog);

function openFootballGame(mode){
  if(mode==='daily'||mode==='unlimited')fbMode=mode;
  fbReturnFocus=document.activeElement;
  fbRender();
  if(!fbDialog.open) fbDialog.showModal();
  fbDialog.querySelector("input")?.focus();
}

function fbRender(){
  const round=fbRound();
  const target=FB_BY_ID.get(round.target);
  const won=fbWon(round);
  const done=fbDone(round);
  const canReward=fbCanReward(round);
  const adConfigured=!!window.GMPRewardedAds?.configured();
  const available=FB_PLAYERS.filter(player=>!round.guesses.includes(player.id));
  const columns=[['name',T('Player','Παίκτης')],['nation',T('Nationality','Εθνικότητα')],['highestMarketValue',T('Highest value','Υψηλότερη αξία')],['status',T('Active / retired','Ενεργός / αποσυρμένος')],['age',T('Age','Ηλικία')],['position',T('Position','Θέση')]];
  const status=won?T(`Found it: ${target.name}! ${round.guesses.length} guesses.`,`Το βρήκες: ${target.name}! ${round.guesses.length} προσπάθειες.`)
    :done?T(`The player was ${target.name}.`,`Ο παίκτης ήταν ${target.name}.`)
    :canReward?T("10 / 10 guesses used. Watch an ad for one extra guess, or reveal the answer.","10 / 10 προσπάθειες. Δες διαφήμιση για μία έξτρα προσπάθεια ή εμφάνισε την απάντηση.")
    :T(`${round.guesses.length} / ${fbGuessLimit(round)} guesses. Choose a player to compare their traits.`,`${round.guesses.length} / ${fbGuessLimit(round)} προσπάθειες. Διάλεξε έναν παίκτη για να συγκρίνεις τα χαρακτηριστικά του.`);
  fbDialog.innerHTML=`
    <div class="dialog-top"><div><span class="eyebrow">FOOTBALL · PLAYERS</span><h2 id="fbTitle">${T("GUESS THE PLAYER","ΜΑΝΤΕΨΕ ΤΟΝ ΠΑΙΚΤΗ")}</h2></div>
      <button class="close" type="button" data-fb-close aria-label="${T("Close","Κλείσιμο")}">×</button></div>
    <p class="op-intro">${T("Find the hidden football player. Each guess compares their traits with the answer.","Βρες τον κρυφό ποδοσφαιριστή. Κάθε προσπάθεια συγκρίνει τα χαρακτηριστικά με την απάντηση.")}</p>
    <div class="op-modes" aria-label="${T("Game mode","Τρόπος παιχνιδιού")}">
      <button type="button" data-fb-mode="daily" aria-pressed="${fbMode==="daily"}">${T("Daily","Ημερήσιο")}</button>
      <button type="button" data-fb-mode="unlimited" aria-pressed="${fbMode==="unlimited"}">${T("Unlimited","Ελεύθερο")}</button>
    </div>
    <p class="muted">${fbMode==="daily"?T(`Daily challenge · ${round.day} · Resets at midnight in Athens.`,`Ημερήσιο challenge · ${round.day} · Αλλάζει τα μεσάνυχτα, ώρα Αθήνας.`):T("New player every round. Play as often as you like.","Νέος παίκτης σε κάθε γύρο. Παίξε όσες φορές θέλεις.")}</p>
    <div class="op-legend"><span class="op-match">✓ ${T("Match","Ταιριάζει")}</span><span class="op-miss">× ${T("Different","Διαφορετικό")}</span><span class="op-unknown">? ${T("Value unavailable","Μη διαθέσιμη αξία")}</span><span>↑ / ↓ ${T("Target age / value is higher / lower","Η ζητούμενη ηλικία / αξία είναι μεγαλύτερη / μικρότερη")}</span></div>
    <div class="fb-currency"><label for="fbCurrency">${T('Currency','Νόμισμα')}</label><select id="fbCurrency"><option value="EUR" ${fbCurrency==='EUR'?'selected':''}>EUR (€)</option><option value="USD" ${fbCurrency==='USD'?'selected':''}>USD ($)</option></select></div>
    <form class="op-form" ${!fbCanGuess(round)?"hidden":""}>
      <label for="fbGuess">${T("Choose or type a player","Διάλεξε ή γράψε παίκτη")}</label>
      <div class="guess-row"><input id="fbGuess" list="fbChoices" autocomplete="off" maxlength="80" required placeholder="${T("e.g. Messi","π.χ. Messi")}"><button class="button lime" type="submit">${T("Guess →","Απάντηση →")}</button></div>
      <datalist id="fbChoices">${available.map(player=>`<option value="${esc(player.name)}"></option>`).join("")}</datalist>
    </form>
    <p class="op-message ${won?"op-won":""}" role="status" aria-live="polite">${esc(status)}</p>
    ${canReward?`<div class="op-reward"><button class="button lime" type="button" data-fb-ad ${fbAdBusy||!adConfigured?"disabled":""}>${T("Watch ad · +1 guess","Δες διαφήμιση · +1 προσπάθεια")}</button>
      <button class="text-button" type="button" data-fb-reveal ${fbAdBusy?"disabled":""}>${T("Reveal & end round","Δείξε απάντηση & τέλος γύρου")}</button>
      ${!adConfigured?`<p class="muted">${T("Rewarded ads are not configured yet.","Οι διαφημίσεις για έξτρα προσπάθεια δεν έχουν συνδεθεί ακόμη.")}</p>`:""}</div>`:""}
    ${round.guesses.length?`<div class="op-table-scroll" tabindex="0" role="region" aria-label="${T("Guess comparisons, scroll horizontally","Συγκρίσεις απαντήσεων, κύλιση οριζόντια")}"><table class="op-table"><caption>${T("Your guesses · newest first","Οι προσπάθειές σου · πιο πρόσφατη πρώτη")}</caption><thead><tr>${columns.map(([,label])=>`<th scope="col">${label}</th>`).join("")}</tr></thead><tbody>
      ${[...round.guesses].reverse().map(id=>{const player=FB_BY_ID.get(id);return `<tr>${columns.map(([key])=>{const comparison=fbCompare(player,target,key);return `<td class="op-${comparison.kind}">${esc(fbValue(player,key))}<span class="op-symbol">${comparison.symbol}</span></td>`;}).join("")}</tr>`;}).join("")}
    </tbody></table></div>`:""}
    ${fbMode==="unlimited"?`<button class="button lime op-next" type="button" data-fb-next ${fbAdBusy?"disabled":""}>${T("New round →","Νέος γύρος →")}</button>`:""}
    <p class="op-footer">${T('Highest recorded career market value, not transfer fee. Ages update automatically. Progress is saved on this device.','Υψηλότερη καταγεγραμμένη αξία καριέρας. Η ηλικία ενημερώνεται αυτόματα. Η πρόοδος αποθηκεύεται στη συσκευή.')}<br>${T('USD conversion','Μετατροπή USD')}: 1 EUR = ${FB_EXCHANGE.usdPerEuro} USD · ${FB_EXCHANGE.date} · <a href="${FB_EXCHANGE.source}" target="_blank" rel="noopener noreferrer">ECB</a><br>${T('Player data checked','Έλεγχος στοιχείων')}: 2026-10-05 · <a href="https://www.transfermarkt.com/" target="_blank" rel="noopener noreferrer">Transfermarkt</a></p>`;
}

fbDialog.addEventListener("click",event=>{
  if(event.target.closest("[data-fb-close]")){fbDialog.close();return;}
  if(fbAdBusy)return;
  if(event.target.closest("[data-fb-ad]")){fbWatchAd();return;}
  if(event.target.closest("[data-fb-reveal]")){
    const round=fbRound();
    if(fbCanReward(round)){round.ended=true;fbFinish(round);fbSave();fbRender();}
    return;
  }
  const mode=event.target.closest("[data-fb-mode]");
  if(mode){fbMode=mode.dataset.fbMode;fbRender();fbDialog.querySelector("input")?.focus();return;}
  if(event.target.closest("[data-fb-next]")){
    fbRounds.unlimited=fbNewRound("unlimited",fbRound().target);
    fbSave();fbRender();fbDialog.querySelector("input")?.focus();
  }
});

fbDialog.addEventListener("submit",event=>{
  event.preventDefault();
  const round=fbRound();
  if(!fbCanGuess(round)) return;
  const input=fbDialog.querySelector("input");
  const value=fbNormalize(input.value);
  const player=FB_PLAYERS.find(item=>[item.name,...item.aliases].some(name=>fbNormalize(name)===value));
  const message=fbDialog.querySelector(".op-message");
  if(!player){message.textContent=T("Choose a player from the list.","Διάλεξε έναν παίκτη από τη λίστα.");input.focus();return;}
  if(round.guesses.includes(player.id)){message.textContent=T("You already tried this player.","Έχεις ήδη δοκιμάσει αυτόν τον παίκτη.");input.focus();return;}
  round.guesses.push(player.id);
  if(fbDone(round))fbFinish(round);
  fbSave();fbRender();
  if(fbWon(round)) fbDialog.querySelector("[data-fb-next], [data-fb-close]")?.focus();
  else fbDialog.querySelector("input")?.focus();
});

fbDialog.addEventListener("close",()=>{
  if(fbReturnFocus?.isConnected) fbReturnFocus.focus();
  else document.querySelector('[data-game="football"]')?.focus();
});

window.addEventListener("gmp-language-change",()=>{if(fbDialog.open)fbRender();});

async function fbWatchAd(){
  const selectedMode=fbMode;
  const round=fbRound();
  if(fbAdBusy || !fbCanReward(round) || !window.GMPRewardedAds?.configured())return;
  fbAdBusy=true;
  // Rewarded ads need to appear above the page rather than behind a native dialog.
  fbDialog.close();
  let granted=false;
  try{granted=await window.GMPRewardedAds.show();}catch{ /* No ad means no reward. */ }
  fbAdBusy=false;
  const stillCurrent=fbRounds[selectedMode]===round && fbValidRound(round,selectedMode);
  if(granted && stillCurrent && fbCanReward(round)){
    round.extra=true;
    fbSave();
  }
  fbMode=selectedMode;
  openFootballGame();
  if(!granted)fbDialog.querySelector(".op-message").textContent=T("No reward was granted. You can retry when an ad is available.","Δεν δόθηκε έξτρα προσπάθεια. Μπορείς να δοκιμάσεις ξανά όταν υπάρχει διαθέσιμη διαφήμιση.");
}

fbDialog.addEventListener('change',event=>{if(event.target.id==='fbCurrency'){const input=fbDialog.querySelector('input');const draft=input?.value;fbCurrency=event.target.value==='USD'?'USD':'EUR';write('GMP_FOOTBALL_CURRENCY',fbCurrency);fbRender();if(draft&&fbDialog.querySelector('input'))fbDialog.querySelector('input').value=draft;fbDialog.querySelector('#fbCurrency')?.focus();}});

function fbFinish(selectedRound){
  if(selectedRound.scored)return;
  selectedRound.scored=true;
  const won=fbWon(selectedRound),daily=fbMode==='daily';
  const dayNumber=Math.floor(Date.parse(`${selectedRound.day}T00:00:00Z`)/86400000);
  const oldRound=daily?state.rounds[keyForDay(dayNumber)]:null;
  if(daily&&oldRound&&oldRound.status!=='playing')return;
  const attempt=selectedRound.guesses.length;
  const earned=won?([5,4,3,2][attempt-1]||1):0;
  const bonus=daily&&won?DAILY_BONUS:0;
  if(won){
    state.points+=earned+bonus;state.totalWins++;
    if(attempt===1){state.firstWins++;if(!daily)state.classicFirst++;}
    if(daily){state.dailyWins++;state.streak=state.lastDailyWin===dayNumber-1?state.streak+1:1;state.lastDailyWin=dayNumber;state.bestStreak=Math.max(state.bestStreak,state.streak);}
    else state.classicWins++;
    confetti();
  }else if(daily)state.streak=0;
  if(daily){
    const completed=make(selectedRound.target,'daily');
    Object.assign(completed,{status:won?'won':'lost',attempts:Math.min(4,attempt),guesses:selectedRound.guesses.map(id=>FB_BY_ID.get(id).name),points:earned,bonus,completedAt:Date.now()});
    state.rounds[keyForDay(dayNumber)]=completed;lockDailyRound(completed,dayNumber);
  }
  selectedRound.points=earned+bonus;
  save();renderAll();
  if(currentUser&&supabaseClient)saveOnlineStats();
}

