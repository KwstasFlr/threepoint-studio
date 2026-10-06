"use strict";
function gmpNumberKey(game,mode){return 'GMP_ROUND_NUMBER_'+game+'_'+mode;}
function gmpValidNumber(value){return Number.isSafeInteger(value)&&value>0;}
function gmpCurrentNumber(game,mode){const value=Number(read(gmpNumberKey(game,mode),'0'));return gmpValidNumber(value)?value:0;}
function gmpNextRoundNumber(game,mode){const number=gmpCurrentNumber(game,mode)+1;write(gmpNumberKey(game,mode),String(number));return number;}
function gmpEnsureRoundNumber(game,mode,round){
  if(!round)return false;
  if(gmpValidNumber(round.number)){if(round.number>gmpCurrentNumber(game,mode))write(gmpNumberKey(game,mode),String(round.number));return false;}
  round.number=gmpCurrentNumber(game,mode)||1;write(gmpNumberKey(game,mode),String(round.number));return true;
}
function gmpRoundLabel(number){
  return `<div class="round-number"><span class="round-caption">${T('You are on round','Είστε στον γύρο')}</span><strong>No${number}</strong><span class="round-context">${T('Your progress in this mode','Η πρόοδός σου σε αυτό το mode')}</span></div>`;
}
function gmpModeTabs(game,selected){
  const modes=game==='gaming'?['classic','quote']:game==='football'?['daily','unlimited']:['daily','unlimited','quote'];
  const prefix={football:'fb',onepiece:'op',gaming:'gm'}[game];
  const info={
    daily:['D','Daily',T('One challenge per day','Μία πρόκληση την ημέρα')],
    unlimited:['∞','Unlimited',T('New round whenever you want','Νέος γύρος όποτε θέλεις')],
    classic:['C','Classic',T('Compare character traits','Σύγκρινε χαρακτηριστικά')],
    quote:['“ ”','Quotes',T('Find who says the line','Βρες ποιος λέει την ατάκα')]
  };
  return `<div class="op-modes mode-picker" role="group" aria-label="${T('Choose game mode','Διάλεξε τρόπο παιχνιδιού')}">${modes.map(mode=>{const [icon,name,description]=info[mode];return `<button class="mode-option" type="button" data-${prefix}-mode="${mode}" aria-pressed="${mode===selected}"><span class="mode-icon" aria-hidden="true">${icon}</span><span class="mode-name">${name}</span><span class="mode-description">${description}</span></button>`;}).join('')}</div>`;
}
function gmpFocusRound(dialog){
  dialog.querySelector('.mode-option[aria-pressed="true"]')?.focus({preventScroll:true});
  dialog.scrollTop=0;
}
