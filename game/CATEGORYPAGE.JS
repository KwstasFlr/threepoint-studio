const categoryParams=new URLSearchParams(location.search);
const pageCategory=categoryParams.get('category');const pageMode=categoryParams.get('mode');
const dialogIds={football:'footballCompareDialog','one-piece':'onePieceDialog',gaming:'gamingDialog'};
const pageDialog=document.getElementById(dialogIds[pageCategory]);
if(pageDialog){
 const back=document.createElement('a');back.className='category-back';back.href=pageCategory+'.html';back.dataset.en='← Choose a game mode';back.dataset.el='← Επιλογή τρόπου παιχνιδιού';back.textContent=T(back.dataset.en,back.dataset.el);document.querySelector('header').after(back);
 back.after(pageDialog);pageDialog.classList.add('category-game');pageDialog.showModal=function(){this.show();};
 pageDialog.addEventListener('close',()=>{location.href=pageCategory+'.html';});
 if(pageCategory==='football')openFootballGame(pageMode==='daily'?'daily':'unlimited');
 if(pageCategory==='gaming'){gmMode=pageMode==='quote'?'quote':'classic';openGamingGame();}
 if(pageCategory==='one-piece'){opMode=['daily','unlimited','quote'].includes(pageMode)?pageMode:'daily';openOnePieceGame();}
 document.title=({football:'Football','one-piece':'One Piece',gaming:'Gaming'})[pageCategory]+' — GuessPlex';
}else{location.replace('./');}

