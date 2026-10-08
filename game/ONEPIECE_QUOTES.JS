// Short translated excerpts, not official English/Greek subtitle transcriptions.
// For a scene without an exact cross-medium reference, unlock at its arc's end.
const OP_QUOTES = [
  ['iceburg','Iceburg',['Iceberg'],"I'll float this whole island.",'Θα κάνω όλο το νησί να επιπλέει.',431,null,325,431,'https://mangakawiki.com/archives/5407'],
  ['heracles','Heracles',['Heracles-un','Hercules'],'Run! This forest will make you stronger!','Τρέχα! Αυτό το δάσος θα σε δυναμώσει!',596,null,516,596,'https://mangakawiki.com/archives/9976'],
  ['woop-slap','Woop Slap',['Woopp Slap'],'A dream... or destiny?','Όνειρο... ή πεπρωμένο;',96,null,53,96,'https://mangakawiki.com/archives/9703'],
  ['wyper','Wyper',['Wiper'],"Your ancestor’s name was Noland?",'Τον πρόγονό σου τον έλεγαν Noland;',296,null,195,296,'https://mangakawiki.com/archives/6888'],
  ['momonga','Momonga',[],'One and zero are different.','Το ένα διαφέρει από το μηδέν.',516,null,411,516,'https://mangakawiki.com/archives/8418'],
  ['shakky','Shakky',['Shakuyaku'],'Information is a weapon.','Η πληροφορία είναι όπλο.',498,null,405,498,'https://mangakawiki.com/archives/9979'],
  ['tom','Tom',[],'My dream has finally started running.','Το όνειρό μου επιτέλους άρχισε να τρέχει.',357,null,263,357,'https://mangakawiki.com/archives/5867'],
  ['zeff','Zeff',['Red Leg Zeff'],'Because you shared my dream.','Επειδή είχες το ίδιο όνειρο με μένα.',58,null,30,58,'https://mangakawiki.com/archives/5314'],
  ['dalton','Dalton',[],'How can you call that politics?','Πώς τολμάς να το λες πολιτική;',136,null,91,136,'https://mangakawiki.com/archives/7170'],
  ['kureha','Dr. Kureha',['Kureha','Doctor Kureha'],'I hate tearful farewells.','Σιχαίνομαι τους δακρύβρεχτους αποχαιρετισμούς.',153,null,91,153,'https://mangakawiki.com/archives/5148'],
  ['brook','Brook',[],"No problem. I’m used to solitude.",'Κανένα πρόβλημα. Έχω συνηθίσει τη μοναξιά.',606,null,574,606,'https://mangakawiki.com/archives/4987'],
  ['franky','Franky',['Cutty Flam'],"Don’t trample on people’s memories!",'Μην πατάς πάνω στις αναμνήσεις των άλλων!',null,248,248,374,'https://animemanga33.com/archives/42204'],
  ['zoro','Roronoa Zoro',['Zoro'],'At least this country has good weather.','Τουλάχιστον αυτή η χώρα έχει καλό καιρό.',null,893,893,958,'https://animemanga33.com/archives/19801'],
  ['robin','Nico Robin',['Robin'],'Never doubt the Log Pose.','Ποτέ μην αμφισβητείς το Log Pose.',null,144,144,302,'https://animemanga33.com/archives/41494'],
  ['sanji','Sanji',['Vinsmoke Sanji'],'The devil created spices.','Ο διάβολος δημιούργησε τα μπαχαρικά.',null,298,298,430,'https://www.imdb.com/title/tt1051039/quotes/'],
  ['usopp','Usopp',['Sogeking'],"Nobody surpasses me in negative thoughts!",'Κανείς δεν με ξεπερνά στις αρνητικές σκέψεις!',461,356,356,461,'https://theirlines.seesaa.net/article/370148261.html'],
  ['blackbeard','Marshall D. Teach',['Blackbeard','Teach'],'Let them laugh.','Ας μας κοροϊδεύουν.',null,147,147,302,'https://animemanga33.com/archives/41494'],
  ['crocodile','Crocodile',['Sir Crocodile'],'Born under death’s shadow...','Γεννήθηκε στη σκιά του θανάτου...',null,96,96,217,'https://animemanga33.com/archives/41266'],
  ['ace','Portgas D. Ace',['Ace'],'Living today is enough.','Μου αρκεί να ζήσω σήμερα.',null,94,94,217,'https://animemanga33.com/archives/41266'],
  ['kuzan','Kuzan',['Aokiji','Aokiji Kuzan'],'Live as quietly as possible.','Ζήσε όσο πιο διακριτικά μπορείς.',null,278,278,430,'https://animemanga33.com/archives/42053'],
  ["vivi", "Nefertari Vivi", ["Vivi"], "Will you call me your friend again?", "Θα με ξαναπείτε φίλη σας;", 216, 129, 129, 216, "https://one-piece.com/anime/129/index.html"]
].map(([id,name,aliases,en,el,chapter,episode,minEpisode,minChapter,source])=>({id,name,aliases,en,el,chapter,episode,minEpisode,minChapter,source}));
let opQuoteState=null;
try { opQuoteState=JSON.parse(read('GMP_ONE_PIECE_QUOTES_V1','null')); } catch { /* Corrupt saves start a new round. */ }
function opQuotePool(){return OP_QUOTES.filter(q=>(opMedium==='manga'?q.minChapter:q.minEpisode)<=opEpisodeLimit);}
function opQuoteCandidates(){
  const candidates=opRoster().map(c=>({id:opNormalize(c.name),name:c.name,aliases:c.aliases}));
  for(const q of opQuotePool()){
    const existing=candidates.find(c=>opNormalize(c.name)===opNormalize(q.name)||c.aliases.some(a=>opNormalize(a)===opNormalize(q.name)));
    if(existing){existing.aliases=[...new Set([existing.name,...existing.aliases,...q.aliases])];existing.name=q.name;existing.id=opNormalize(q.name);}
    else candidates.push({id:opNormalize(q.name),name:q.name,aliases:q.aliases});
  }
  return candidates;
}
function opSaveQuote(){write('GMP_ONE_PIECE_QUOTES_V1',JSON.stringify(opQuoteState));}
function opNextQuote(){
  const pool=opQuotePool();if(!pool.length){opQuoteState=null;opSaveQuote();return;}
  let deck=opQuoteState?.medium===opMedium&&opQuoteState?.limit===opEpisodeLimit&&Array.isArray(opQuoteState.deck)?opQuoteState.deck.filter(id=>pool.some(q=>q.id===id)):[];
  if(!deck.length){
    deck=pool.map(q=>q.id);
    for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}
    if(deck.length>1&&deck[deck.length-1]===opQuoteState?.id)[deck[0],deck[deck.length-1]]=[deck[deck.length-1],deck[0]];
  }
  opQuoteState={number:gmpNextRoundNumber('onepiece','quote'),id:deck.pop(),deck,medium:opMedium,limit:opEpisodeLimit,guesses:[],ended:false};opSaveQuote();
}
function opQuoteRound(){
  const s=opQuoteState,q=opQuotePool().find(q=>q.id===s?.id),ids=new Set(opQuoteCandidates().map(c=>c.id));
  const valid=q&&s.medium===opMedium&&s.limit===opEpisodeLimit&&typeof s.ended==='boolean'&&Array.isArray(s.deck)&&new Set(s.deck).size===s.deck.length&&s.deck.every(id=>id!==s.id&&opQuotePool().some(q=>q.id===id))&&Array.isArray(s.guesses)&&s.guesses.length<=5&&new Set(s.guesses).size===s.guesses.length&&s.guesses.every(id=>ids.has(id));
  if(!valid)opNextQuote();
  if(gmpEnsureRoundNumber('onepiece','quote',opQuoteState))opSaveQuote();
  return opQuoteState;
}
function opSubmitQuote(){
  const s=opQuoteRound();if(!s||s.ended||s.guesses.length>=5)return;
  const input=opDialog.querySelector('#opGuess'),value=opNormalize(input.value);
  const c=opQuoteCandidates().find(c=>[c.name,...c.aliases].some(a=>opNormalize(a)===value));
  const message=opDialog.querySelector('.op-message');
  if(!c||s.guesses.includes(c.id)){message.textContent=c?T('You already tried this character.','Έχεις ήδη δοκιμάσει αυτόν τον χαρακτήρα.'):T('Choose a character from the list.','Διάλεξε έναν χαρακτήρα από τη λίστα.');input.focus();return;}
  s.guesses.push(c.id);const q=OP_QUOTES.find(q=>q.id===s.id);
  if(c.id===opNormalize(q.name)||s.guesses.length===5)s.ended=true;
  opSaveQuote();opRender();opDialog.querySelector(s.ended?'[data-op-quote-next]':'#opGuess')?.focus();
}
function opRenderQuote(){
  const s=opQuoteRound(),q=OP_QUOTES.find(q=>q.id===s?.id),candidates=opQuoteCandidates();
  const won=q&&s.guesses.includes(opNormalize(q.name));
  opDialog.innerHTML=`<div class="dialog-top"><div><p class="eyebrow">ONE PIECE · QUOTES</p><h2 id="opTitle">${T('Who said it?','Ποιος το είπε;')}</h2></div><button class="close" type="button" data-op-close aria-label="${T('Close','Κλείσιμο')}">×</button></div>
    ${s?gmpRoundLabel(s.number):''}
    ${gmpModeTabs('onepiece','quote')}
    <p class="op-intro">${T('21 short quotes · 21 different characters · 5 guesses per round.','21 μικρές ατάκες · 21 διαφορετικοί χαρακτήρες · 5 προσπάθειες ανά γύρο.')}</p>
    <form class="op-episodes"><label for="opMedium">${T('Following','Παρακολουθώ / διαβάζω')}</label><select id="opMedium"><option value="anime" ${opMedium==='anime'?'selected':''}>Anime</option><option value="manga" ${opMedium==='manga'?'selected':''}>Manga</option></select><label for="opEpisode">${opMedium==='manga'?T('Last chapter read','Τελευταίο κεφάλαιο που διάβασες'):T('Last episode watched','Τελευταίο επεισόδιο που είδες')}</label><div class="guess-row"><input id="opEpisode" type="number" min="1" max="${opMaxProgress()}" step="1" required value="${opEpisodeLimit}"><button class="button lime" type="submit">${T('Apply','Εφαρμογή')}</button></div></form>

    ${q?`<blockquote class="op-quote">“${esc(T(q.en,q.el))}”</blockquote>
    ${!s.ended?`<form class="op-form"><label for="opGuess">${T('Who says this line?','Ποιος λέει αυτή την ατάκα;')}</label><div class="guess-row"><input id="opGuess" list="opChoices" autocomplete="off" maxlength="80" required><button class="button lime" type="submit">${T('Guess →','Απάντηση →')}</button></div><datalist id="opChoices">${candidates.map(c=>`<option value="${esc(c.name)}"></option>`).join('')}</datalist></form>`:''}
    <p class="op-message ${won?'op-won':''}" role="status" aria-live="polite">${s.ended?(won?T('Correct!','Σωστά!'):T('Round ended.','Ο γύρος τελείωσε.')):T(`${5-s.guesses.length} guesses remaining.`,`${5-s.guesses.length} προσπάθειες απομένουν.`)}</p>
    ${s.guesses.length?`<ul class="op-quote-guesses">${s.guesses.map(id=>`<li>${id===opNormalize(q.name)?'✓':'✕'} ${esc(candidates.find(c=>c.id===id).name)}</li>`).join('')}</ul>`:''}
    ${s.ended?`<div class="op-quote-answer"><strong>${esc(q.name)}</strong><p>${q.chapter?T('Chapter','Κεφάλαιο')+' '+q.chapter:T('Episode','Επεισόδιο')+' '+q.episode} · <a href="${esc(q.source)}" target="_blank" rel="noopener noreferrer">${T('Quote reference','Πηγή ατάκας')}</a></p></div><button class="button lime op-next" type="button" data-op-quote-next>${T('Next quote →','Επόμενη ατάκα →')}</button>`:`<button class="text-button" type="button" data-op-quote-reveal>${T('Reveal & end round','Δείξε απάντηση & τέλος γύρου')}</button>`}`:`<p role="status">${T('No quotes available yet. Raise your episode or chapter limit when you catch up.','Δεν υπάρχουν ακόμη διαθέσιμες ατάκες. Αύξησε το όριο όταν προχωρήσεις στην ιστορία.')}</p>`}
    <p class="op-footer">${T('Short translated excerpts; wording varies between editions. Quotes unlock after their scene, sometimes at the end of its arc. Progress is saved on this device.','Σύντομα μεταφρασμένα αποσπάσματα· η διατύπωση διαφέρει ανά έκδοση. Οι ατάκες ανοίγουν μετά τη σκηνή τους, μερικές στο τέλος του arc. Η πρόοδος αποθηκεύεται σε αυτή τη συσκευή.')}</p>`;
}
