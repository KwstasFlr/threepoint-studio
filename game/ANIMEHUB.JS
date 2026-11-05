/* Add Anime to the existing hub without replacing other category code. */
(()=>{
 'use strict';
 if(typeof GAME_DATA==='undefined'||typeof renderGames!=='function')return;
 if(!GAME_DATA.some(g=>g.id==='anime'))GAME_DATA.push({id:'anime',name:'Anime',available:true,category:'ANIME',description:['Guess from the shoes','Μάντεψε από τα παπούτσια']});
 const previousRender=renderGames;
 renderGames=function(){previousRender();let card=document.querySelector('#gameGrid [data-game="anime"]');if(!card)return;if(card.tagName!=='A'){const link=document.createElement('a');link.className=card.className;link.dataset.game='anime';link.innerHTML=card.innerHTML;card.replaceWith(link);card=link;}card.href='anime/';card.style.textDecoration='none';const image=card.querySelector('img');if(image&&image.getAttribute('src')!=='anime/media/a02.webp')image.src='anime/media/a02.webp';};
 const previousOpen=openGame;
 openGame=function(id){if(id==='anime'){location.href='anime/';return;}return previousOpen(id);};
 renderGames();
 const filters=document.getElementById('leaderboardFilters');
 if(filters&&!filters.querySelector('[data-board="anime"]')){const button=document.createElement('button');button.type='button';button.dataset.board='anime';button.textContent='Anime';button.addEventListener('click',()=>{boardFilter='anime';filters.querySelectorAll('[data-board]').forEach(b=>b.classList.toggle('selected',b===button));renderLeaderboard();});filters.append(button);}
 const guide=document.querySelector('.guide-grid');
 if(guide&&!document.getElementById('anime-guide')){const article=document.createElement('article');article.className='guide-card';article.id='anime-guide';article.innerHTML='<h3>ANIME</h3><p data-en="Recognise a famous anime character from their shoes. Each image has four choices and a five-second countdown that starts after loading. After each answer, see the character and the full original image. Finish the set to see your score and total answering time." data-el="Αναγνώρισε έναν γνωστό χαρακτήρα anime από τα παπούτσια. Κάθε εικόνα έχει τέσσερις επιλογές και αντίστροφη μέτρηση πέντε δευτερολέπτων που ξεκινά μετά τη φόρτωση. Μετά την απάντηση βλέπεις τον χαρακτήρα και ολόκληρη την αρχική εικόνα. Στο τέλος βλέπεις το σκορ και τον συνολικό χρόνο απαντήσεων."></p>';const p=article.querySelector('p');p.textContent=document.documentElement.lang==='el'?p.dataset.el:p.dataset.en;guide.append(article);const nav=document.querySelector('.guide-links');if(nav){const a=document.createElement('a');a.href='#anime-guide';a.textContent='ANIME';nav.append(a);}}
})();
