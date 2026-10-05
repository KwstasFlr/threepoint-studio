"use strict";

// Game debut years (not book/film debuts). Weapons describe their classic identity.
// Greek lines are translations of the short original-language excerpts.
const GM_CHARACTERS = [
  {id:'lara',name:'Lara Croft',aliases:['lara','λάρα','λαρα κροφτ'],gender:'female',series:'Tomb Raider',genre:'adventure',year:1996,weapon:'pistols',quote:['I make my own luck.','Δημιουργώ τη δική μου τύχη.'],game:'Tomb Raider: The Last Revelation',source:'https://tombraiderhorizons.com/2014/07/20/in-the-spotlight-stella/'},
  {id:'jill',name:'Jill Valentine',aliases:['jill','τζιλ','τζιλ βαλενταιν'],gender:'female',series:'Resident Evil',genre:'horror',year:1996,weapon:'handgun',quote:["You want S.T.A.R.S.? I'll give you stars!",'Θέλεις S.T.A.R.S.; Θα σου δώσω αστέρια!'],game:'Resident Evil 3',source:'https://www.starburstmagazine.com/features/nicole-tompkins-resident-evil-3/'},
  {id:'chun-li',name:'Chun-Li',aliases:['chun li','chunli','τσουν λι'],gender:'female',series:'Street Fighter',genre:'fighting',year:1991,weapon:'kicks',quote:["I'm the strongest woman in the world!",'Είμαι η δυνατότερη γυναίκα στον κόσμο!'],game:'Street Fighter II',source:'https://streetfighter.fandom.com/wiki/Chun-Li/Quotes'},
  {id:'aloy',name:'Aloy',aliases:['έιλοϊ','αλοι'],gender:'female',series:'Horizon',genre:'adventure',year:2017,weapon:'bow',quote:["I'm not your Anointed!",'Δεν είμαι η Εκλεκτή σας!'],game:'Horizon Zero Dawn',source:'https://game-scripts-wiki.blogspot.com/2018/10/horizon-zero-dawn-full-transcript.html'},
  {id:'bayonetta',name:'Bayonetta',aliases:['cereza','μπαγιονετα','μπαγιονέτα'],gender:'female',series:'Bayonetta',genre:'action',year:2009,weapon:'gun-heels',quote:["As long as there's music, I'll keep on dancing.",'Όσο υπάρχει μουσική, θα συνεχίζω να χορεύω.'],game:'Bayonetta',source:'https://bayonetta.fandom.com/wiki/Bayonetta_%28character%29/Quotes'},
  {id:'kratos',name:'Kratos',aliases:['κράτος','κρατος'],gender:'male',series:'God of War',genre:'adventure',year:2005,weapon:'blades',quote:['Do not be sorry. Be better.','Μη ζητάς συγγνώμη. Γίνε καλύτερος.'],game:'God of War (2018)',source:'https://en.wikiquote.org/wiki/God_of_War_%282018_video_game%29'},
  {id:'geralt',name:'Geralt of Rivia',aliases:['geralt','γκεραλτ','γκέραλτ'],gender:'male',series:'The Witcher',genre:'rpg',year:2007,weapon:'swords',quote:["Wind's howling.",'Ο άνεμος ουρλιάζει.'],game:'The Witcher 3: Wild Hunt',source:'https://www.transcript-publishing.com/media/pdf/0b/2f/6e/oa9783839462645x3KFvT1HsQjWN.pdf'},
  {id:'arthur',name:'Arthur Morgan',aliases:['arthur','άρθουρ','αρθουρ μοργκαν'],gender:'male',series:'Red Dead Redemption',genre:'adventure',year:2018,weapon:'revolver',quote:['I gave you all I had.','Σου έδωσα ό,τι είχα.'],game:'Red Dead Redemption 2',source:'https://reddead.fandom.com/wiki/Arthur_Morgan/Quotes'},
  {id:'chief',name:'Master Chief',aliases:['chief','john','john-117','john 117','μαστερ τσιφ'],gender:'male',series:'Halo',genre:'fps',year:2001,weapon:'rifle',quote:['Wake me when you need me.','Ξύπνα με όταν με χρειαστείς.'],game:'Halo 3',source:'https://www.halopedia.org/Wake_Me_When_You_Need_Me'},
  {id:'ezio',name:'Ezio Auditore',aliases:['ezio','ezio auditore da firenze','έτσιο','ετσιο'],gender:'male',series:"Assassin's Creed",genre:'adventure',year:2009,weapon:'hidden-blade',quote:['Requiescat in pace.','Αναπαύσου εν ειρήνη.'],game:"Assassin's Creed II",source:'https://www.imdb.com/title/tt1201133/quotes/'}
];
const GM_BY_ID=new Map(GM_CHARACTERS.map(c=>[c.id,c]));
const GM_LABELS={male:['Male','Άνδρας'],female:['Female','Γυναίκα'],adventure:['Action adventure','Δράση / περιπέτεια'],horror:['Survival horror','Τρόμος / επιβίωση'],fighting:['Fighting','Μάχες'],action:['Action','Δράση'],rpg:['RPG','RPG'],fps:['FPS','FPS'],pistols:['Dual pistols','Δύο πιστόλια'],handgun:['Handgun','Πιστόλι'],kicks:['Martial arts / kicks','Πολεμικές τέχνες / κλωτσιές'],bow:['Bow','Τόξο'],'gun-heels':['Guns / gun heels','Όπλα / ένοπλα τακούνια'],blades:['Blades of Chaos','Λεπίδες του Χάους'],swords:['Steel / silver swords','Ατσάλινο / ασημένιο σπαθί'],revolver:['Revolver','Περίστροφο'],rifle:['Assault rifle','Τυφέκιο εφόδου'],'hidden-blade':['Hidden blade','Κρυφή λεπίδα']};
function gmNormalize(value){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[.\s_-]+/g,' ').trim();}
function gmValue(c,key){return GM_LABELS[c[key]]?T(...GM_LABELS[c[key]]):String(c[key]);}
function gmMax(mode){return mode==='classic'?6:5;}
let gmMode='classic',gmRounds={classic:null,quote:null},gmReturnFocus=null;
try{const saved=JSON.parse(read('GMP_GAMING_V1','null'));if(saved&&typeof saved==='object')gmRounds={classic:saved.classic,quote:saved.quote};}catch{/* Invalid saves are replaced. */}
function gmSave(){write('GMP_GAMING_V1',JSON.stringify(gmRounds));}
function gmValidRound(round,mode){
  if(!round||!GM_BY_ID.has(round.target)||typeof round.ended!=='boolean'||!Array.isArray(round.guesses)||round.guesses.length>gmMax(mode)||new Set(round.guesses).size!==round.guesses.length||round.guesses.some(id=>!GM_BY_ID.has(id)))return false;
  if(!Array.isArray(round.deck)||new Set(round.deck).size!==round.deck.length||round.deck.some(id=>id===round.target||!GM_BY_ID.has(id)))return false;
  const hit=round.guesses.indexOf(round.target);
  if(hit!==-1&&(hit!==round.guesses.length-1||!round.ended))return false;
  return round.guesses.length!==gmMax(mode)||round.ended;
}
function gmNewRound(mode){
  const old=gmRounds[mode];let deck=gmValidRound(old,mode)?[...old.deck]:[];
  if(!deck.length){deck=GM_CHARACTERS.map(c=>c.id);for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}if(deck.length>1&&deck.at(-1)===old?.target)[deck[0],deck[deck.length-1]]=[deck.at(-1),deck[0]];}
  gmRounds[mode]={number:gmpNextRoundNumber('gaming',mode),target:deck.pop(),deck,guesses:[],ended:false};gmSave();return gmRounds[mode];
}
function gmRound(){const round=gmValidRound(gmRounds[gmMode],gmMode)?gmRounds[gmMode]:gmNewRound(gmMode);if(gmpEnsureRoundNumber('gaming',gmMode,round))gmSave();return round;}
function gmGuess(value){
  const round=gmRound();if(round.ended)return 'ended';
  const character=GM_CHARACTERS.find(c=>[c.name,...c.aliases].some(a=>gmNormalize(a)===gmNormalize(value)));
  if(!character)return 'invalid';if(round.guesses.includes(character.id))return 'duplicate';
  round.guesses.push(character.id);if(character.id===round.target||round.guesses.length===gmMax(gmMode))round.ended=true;
  gmSave();return character.id===round.target?'won':'miss';
}
const gmDialog=document.createElement('dialog');gmDialog.id='gamingDialog';gmDialog.className='op-dialog gm-dialog';gmDialog.setAttribute('aria-labelledby','gmTitle');document.body.append(gmDialog);
function openGamingGame(){gmReturnFocus=document.activeElement;gmRender();if(!gmDialog.open)gmDialog.showModal();gmDialog.querySelector('#gmGuess')?.focus();}
function gmRender(){
  const round=gmRound(),target=GM_BY_ID.get(round.target),won=round.guesses.includes(target.id);
  const columns=[['name',T('Character','Χαρακτήρας')],['gender',T('Gender','Φύλο')],['series',T('Franchise','Σειρά')],['genre',T('Genre','Είδος')],['year',T('Game debut','Πρώτη εμφάνιση σε παιχνίδι')],['weapon',T('Signature weapon / style','Χαρακτηριστικό όπλο / στυλ')]];
  gmDialog.innerHTML=`<button class="dialog-close" type="button" data-gm-close aria-label="${T('Close','Κλείσιμο')}">×</button><p class="eyebrow">GAMING · ${gmMode==='classic'?'CLASSIC':'QUOTES'}</p><h2 id="gmTitle">${gmMode==='classic'?T('Guess the character','Μάντεψε τον χαρακτήρα'):T('Who said it?','Ποιος το είπε;')}</h2>
    ${gmpRoundLabel(round.number)}
    <p class="op-intro">${T('10 gaming characters · 5 men and 5 women. Classic compares traits; Quotes asks who says the line.','10 gaming χαρακτήρες · 5 άνδρες και 5 γυναίκες. Το Classic συγκρίνει χαρακτηριστικά· στα Quotes βρίσκεις ποιος λέει την ατάκα.')}</p>
    <div class="op-modes" role="group" aria-label="${T('Game mode','Mode παιχνιδιού')}">${[['classic','Classic'],['quote',T('Who said it?','Βρες το quote')]].map(([mode,label])=>`<button type="button" data-gm-mode="${mode}" aria-pressed="${gmMode===mode}">${label}</button>`).join('')}</div>
    ${gmMode==='quote'?`<blockquote class="op-quote">“${esc(T(...target.quote))}”</blockquote>`:`<p class="gm-legend">${T('✓ Match · × Different · ↑ / ↓ Target debuted later / earlier.','✓ Ίδιο · × Διαφορετικό · ↑ / ↓ Ο στόχος εμφανίστηκε αργότερα / νωρίτερα.')}</p>`}
    ${!round.ended?`<form class="op-form"><label for="gmGuess">${T('Choose or type a character','Διάλεξε ή γράψε χαρακτήρα')}</label><div class="guess-row"><input id="gmGuess" list="gmChoices" autocomplete="off" maxlength="80" required placeholder="${T('e.g. Lara Croft','π.χ. Lara Croft')}"><button class="button lime" type="submit">${T('Guess →','Απάντηση →')}</button></div><datalist id="gmChoices">${[...GM_CHARACTERS].sort((a,b)=>a.name.localeCompare(b.name)).map(c=>`<option value="${esc(c.name)}"></option>`).join('')}</datalist></form>`:''}
    <p class="op-message ${won?'op-won':''}" role="status" aria-live="polite">${won?T('Correct!','Σωστά!'):round.ended?T('Round ended.','Ο γύρος τελείωσε.'):T(`${gmMax(gmMode)-round.guesses.length} guesses remaining.`,`${gmMax(gmMode)-round.guesses.length} προσπάθειες απομένουν.`)}</p>
    ${gmMode==='classic'&&round.guesses.length?`<div class="op-table-scroll" tabindex="0" role="region" aria-label="${T('Guess comparisons, scroll horizontally','Συγκρίσεις απαντήσεων, κύλιση οριζόντια')}"><table class="op-table"><caption>${T('Your guesses · newest first','Προσπάθειες · πιο πρόσφατη πρώτη')}</caption><thead><tr>${columns.map(([,label])=>`<th scope="col">${label}</th>`).join('')}</tr></thead><tbody>${[...round.guesses].reverse().map(id=>{const c=GM_BY_ID.get(id);return `<tr>${columns.map(([key])=>{const match=c[key]===target[key],symbol=match?'✓':key==='year'?(target.year>c.year?'↑':'↓'):'×';return `<td class="${match?'op-match':'op-miss'}">${esc(gmValue(c,key))}<span class="op-symbol">${symbol}</span></td>`;}).join('')}</tr>`;}).join('')}</tbody></table></div>`:''}
    ${gmMode==='quote'&&round.guesses.length?`<ul class="op-quote-guesses">${round.guesses.map(id=>`<li>${id===target.id?'✓':'✕'} ${esc(GM_BY_ID.get(id).name)}</li>`).join('')}</ul>`:''}
    ${round.ended?`<div class="op-quote-answer"><strong>${esc(target.name)}</strong><p>${esc(gmMode==='quote'?target.game:target.series)}${gmMode==='quote'?` · <a href="${esc(target.source)}" target="_blank" rel="noopener noreferrer">${T('Quote reference','Πηγή ατάκας')}</a>`:''}</p></div>`:`<button class="text-button" type="button" data-gm-reveal>${T('Reveal & end round','Δείξε απάντηση & τέλος γύρου')}</button>`}
    <button class="button lime op-next" type="button" data-gm-next>${T('New round →','Νέος γύρος →')}</button><p class="op-footer">${T('10 rounds per mode before the deck repeats. Progress is saved on this device. These modes do not award leaderboard points. Quotes can contain story spoilers; Greek text is translated.','10 γύροι ανά mode πριν επαναληφθεί η τράπουλα. Η πρόοδος αποθηκεύεται σε αυτή τη συσκευή. Τα modes δεν δίνουν πόντους κατάταξης. Οι ατάκες μπορεί να περιέχουν spoilers· το ελληνικό κείμενο είναι μετάφραση.')}</p>`;
}
gmDialog.addEventListener('submit',event=>{event.preventDefault();const input=gmDialog.querySelector('#gmGuess');if(!input)return;const result=gmGuess(input.value);if(result==='invalid'||result==='duplicate'){gmDialog.querySelector('.op-message').textContent=result==='invalid'?T('Choose a character from the list.','Διάλεξε έναν χαρακτήρα από τη λίστα.'):T('You already tried this character.','Έχεις ήδη δοκιμάσει αυτόν τον χαρακτήρα.');input.focus();return;}gmRender();gmDialog.querySelector(gmRound().ended?'[data-gm-next]':'#gmGuess')?.focus();});
gmDialog.addEventListener('click',event=>{if(event.target.closest('[data-gm-close]')){gmDialog.close();return;}const mode=event.target.closest('[data-gm-mode]');if(mode){gmMode=mode.dataset.gmMode==='quote'?'quote':'classic';gmRender();gmDialog.querySelector('#gmGuess')?.focus();return;}if(event.target.closest('[data-gm-reveal]')){gmRound().ended=true;gmSave();gmRender();gmDialog.querySelector('[data-gm-next]')?.focus();return;}if(event.target.closest('[data-gm-next]')){gmNewRound(gmMode);gmRender();gmDialog.querySelector('#gmGuess')?.focus();}});
gmDialog.addEventListener('close',()=>{if(gmReturnFocus?.isConnected)gmReturnFocus.focus();else document.querySelector('[data-game="gaming"]')?.focus();});
window.addEventListener('gmp-language-change',()=>{if(gmDialog.open)gmRender();});
