"use strict";
window.GMPCategoryScores=(()=>{
 const names={overall:'Top Legends',onepiece:'Top Weebs',gaming:'Top Noobs',football:'Top Footy Nerds',greek:'Top Greek Cinephiles',cinematix:'Top Movie Buffs',painter:'Top Art Lovers',country:'Top Geologist',car:'Top Petrolheads',people:'Top Icons',knowledge:'Fast Pistol'};
 const categories=['football','onepiece','gaming','greek','cinematix','painter','country','car','people','knowledge'];
 const number=n=>Number.isSafeInteger(n)&&n>=0?n:0;
 const duration=n=>Number.isSafeInteger(n)&&n>0&&n<=60000?n:null;
 const sprintOrder=(a,b)=>b.streak-a.streak||(a.bestTimeMs??Infinity)-(b.bestTimeMs??Infinity)||b.points-a.points||b.correct-a.correct||String(a.name).localeCompare(String(b.name));
 function clean(value){
  const result={};for(const category of categories){const v=value?.[category];if(v&&typeof v==='object'){result[category]={points:number(v.points),wins:number(v.wins),first:number(v.first),bestStreak:number(v.bestStreak)};if(category==='knowledge')result[category].bestTimeMs=number(v.bestStreak)>0?duration(v.bestTimeMs):null;}}return result;
 }
 function merge(local,remote){
  const a=clean(local),b=clean(remote);for(const c of categories){if(!b[c])continue;if(!a[c])a[c]=b[c];else{if(c==='knowledge'){const winner=b[c].bestStreak>a[c].bestStreak?b[c]:b[c].bestStreak<a[c].bestStreak?a[c]:(b[c].bestTimeMs??Infinity)<(a[c].bestTimeMs??Infinity)?b[c]:a[c];a[c].bestTimeMs=winner.bestTimeMs;}for(const field of ['points','wins','first','bestStreak'])a[c][field]=Math.max(a[c][field],b[c][field]);}}return a;
 }
 function add(state,category,points,attempt,streak=0,elapsedMs=null){
  if(category.startsWith('greek-'))category='greek';if(category.startsWith('cinematix-'))category='cinematix';if(!categories.includes(category))return;
  const scores=clean(state.categoryScores);const s=scores[category]??{points:0,wins:0,first:0,bestStreak:0};
  if(category==='knowledge'){const ms=duration(elapsedMs);if(number(streak)>s.bestStreak)s.bestTimeMs=ms;else if(number(streak)===s.bestStreak&&ms!==null&&(s.bestTimeMs==null||ms<s.bestTimeMs))s.bestTimeMs=ms;}
  s.points+=number(points);s.wins++;if(attempt===1)s.first++;s.bestStreak=Math.max(s.bestStreak,number(streak));scores[category]=s;state.categoryScores=scores;
 }
 const order=(a,b)=>b.points-a.points||b.first-a.first||b.correct-a.correct||b.streak-a.streak||String(a.name).localeCompare(String(b.name));
 function ranking(players,category){
  if(category==='overall')return [...players].sort(order);if(!categories.includes(category))return [];
  return players.map(player=>{const s=clean(player.categoryScores)[category];return {...player,points:s?.points??0,correct:s?.wins??0,first:s?.first??0,streak:s?.bestStreak??0,bestTimeMs:category==='knowledge'?s?.bestTimeMs??null:null};}).filter(p=>p.correct>0).sort(category==='knowledge'?sprintOrder:order);
 }
 return {names,clean,merge,add,ranking,sprintOrder};
})();
