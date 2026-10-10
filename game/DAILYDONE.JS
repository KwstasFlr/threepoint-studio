"use strict";
// Remembers which Daily rounds are finished: on this device, and in the account when logged in.
window.GMPDaily=(()=>{
 const KEY='GMP_DAILY_DONE_V1',games=['football','onepiece'];
 const valid=value=>value&&typeof value==='object'&&/^\d{4}-\d{2}-\d{2}$/.test(value.day);
 function clean(value){
  const result={};for(const game of games)if(valid(value?.[game]))result[game]={day:value[game].day,won:value[game].won===true};return result;
 }
 function all(){try{return clean(JSON.parse(localStorage.getItem(KEY)));}catch{return {};}}
 function put(value){try{localStorage.setItem(KEY,JSON.stringify(value));}catch{/* The round itself is still saved by its game. */}}
 function done(game,day){return all()[game]?.day===day;}
 function mark(game,day,won){
  if(!games.includes(game)||!valid({day}))return;
  const saved=all();if(saved[game]?.day===day&&(saved[game].won||!won))return;
  saved[game]={day,won:!!won};put(saved);
 }
 // Keep the most recent day per game from the account and this device.
 function merge(remote){
  const saved=all(),incoming=clean(remote);let changed=false;
  for(const game of games){const next=incoming[game];if(next&&(!saved[game]||next.day>saved[game].day)){saved[game]=next;changed=true;}}
  if(changed){put(saved);window.dispatchEvent(new Event('gmp-daily-change'));}
  return saved;
 }
 return {all,done,mark,merge};
})();
