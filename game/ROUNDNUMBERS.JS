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
function gmpRoundLabel(number){return `<p class="round-number">${T(`You are on round No${number}`,`Είστε στον γύρο No${number}`)}</p>`;}
