"use strict";
window.GMPCategoryScores=(()=>{
 const names={overall:'Top Legends',onepiece:'Top Weebs',gaming:'Top Noobs',football:'Top Footy Nerds',greek:'Top Greek Cinephiles'};
 const categories=['football','onepiece','gaming','greek'];
 const number=n=>Number.isSafeInteger(n)&&n>=0?n:0;
 function clean(value){
  const result={};for(const category of categories){const v=value?.[category];if(v&&typeof v==='object')result[category]={points:number(v.points),wins:number(v.wins),first:number(v.first),bestStreak:number(v.bestStreak)};}return result;
 }
 function merge(local,remote){
  const a=clean(local),b=clean(remote);for(const c of categories){if(!b[c])continue;if(!a[c])a[c]=b[c];else for(const field of ['points','wins','first','bestStreak'])a[c][field]=Math.max(a[c][field],b[c][field]);}return a;
 }
 function add(state,category,points,attempt,streak=0){
  if(category.startsWith('greek-'))category='greek';if(!categories.includes(category))return;
  const scores=clean(state.categoryScores);const s=scores[category]??{points:0,wins:0,first:0,bestStreak:0};
  s.points+=number(points);s.wins++;if(attempt===1)s.first++;s.bestStreak=Math.max(s.bestStreak,number(streak));scores[category]=s;state.categoryScores=scores;
 }
 function ranking(players,category){
  if(category==='overall')return [...players];if(!categories.includes(category))return [];
  return players.map(player=>{const s=clean(player.categoryScores)[category];return {...player,points:s?.points??0,correct:s?.wins??0,first:s?.first??0,streak:s?.bestStreak??0};}).filter(p=>p.correct>0).sort((a,b)=>b.points-a.points||b.correct-a.correct||b.first-a.first||String(a.name).localeCompare(String(b.name)));
 }
 return {names,clean,merge,add,ranking};
})();
