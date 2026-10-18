"use strict";
window.GMPCategoryScores=(()=>{
 const names={overall:'Top Legends',onepiece:'Top Weebs',gaming:'Top Noobs',football:'Top Footy Nerds',greek:'Top Greek Cinephiles',cinematix:'Top Movie Buffs',painter:'Top Art Lovers',country:'Top Geologist',car:'Top Petrolheads',people:'Top Icons',knowledge:'Fast Pistol'};
 const categories=['football','onepiece','gaming','greek','cinematix','painter','country','car','people','knowledge'];
 const number=n=>Number.isSafeInteger(n)&&n>=0?n:0;
 function clean(value){
  const result={};for(const category of categories){const v=value?.[category];if(v&&typeof v==='object')result[category]={points:number(v.points),wins:number(v.wins),first:number(v.first),bestStreak:number(v.bestStreak)};}return result;
 }
 function merge(local,remote){
  const a=clean(local),b=clean(remote);for(const c of categories){if(!b[c])continue;if(!a[c])a[c]=b[c];else for(const field of ['points','wins','first','bestStreak'])a[c][field]=Math.max(a[c][field],b[c][field]);}return a;
 }
 function add(state,category,points,attempt,streak=0){
  if(category.startsWith('greek-'))category='greek';if(category.startsWith('cinematix-'))category='cinematix';if(!categories.includes(category))return;
  const scores=clean(state.categoryScores);const s=scores[category]??{points:0,wins:0,first:0,bestStreak:0};
  s.points+=number(points);s.wins++;if(attempt===1)s.first++;s.bestStreak=Math.max(s.bestStreak,number(streak));scores[category]=s;state.categoryScores=scores;
 }
 const order=(a,b)=>b.points-a.points||b.first-a.first||b.correct-a.correct||b.streak-a.streak||String(a.name).localeCompare(String(b.name));
 function ranking(players,category){
  if(category==='overall')return [...players].sort(order);if(!categories.includes(category))return [];
  return players.map(player=>{const s=clean(player.categoryScores)[category];return {...player,points:s?.points??0,correct:s?.wins??0,first:s?.first??0,streak:s?.bestStreak??0};}).filter(p=>p.correct>0).sort(order);
 }
 return {names,clean,merge,add,ranking};
})();
