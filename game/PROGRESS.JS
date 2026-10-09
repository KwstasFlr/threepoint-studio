"use strict";
// One award per round, shared by the game hub and the separate Greek pages.
window.GMPProgress=(()=>{
 const KEY='GAME_MULTIPLEX_V4',LEDGER='GMP_SCORE_LEDGER_V1';
 let client=null,user=null,queue=Promise.resolve();
 const get=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
 const put=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
 const blank=()=>({rounds:{},classic:null,points:0,totalWins:0,firstWins:0,dailyWins:0,classicWins:0,classicFirst:0,streak:0,bestStreak:0,lastDailyWin:null});
 const count=value=>Number.isSafeInteger(value)&&value>=0?value:0;
 const ready=window.GMPScoreAdapter?Promise.resolve():new Promise((resolve)=>{
  const timer=setTimeout(resolve,6000);const finish=()=>{clearTimeout(timer);resolve();};const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';script.crossOrigin='anonymous';script.onload=finish;script.onerror=finish;document.head.append(script);
 }).then(async()=>{
  if(!window.supabase)return;
  client=window.supabase.createClient('https://yrwgwxopleydtyckkvaz.supabase.co','sb_publishable_Prv6Os1Y96CtkVfbySk_ww_hiIzo5-L');
  const result=await client.auth.getSession();user=result.data.session?.user??null;
 }).catch(()=>{});
 async function award(event){
  const task=async()=>{
   await ready;
   const adapter=window.GMPScoreAdapter;
   const ctx=adapter?await adapter.context():{key:user?KEY+':'+user.id:KEY,state:get(user?KEY+':'+user.id:KEY,blank()),user,client};
   const token=[ctx.key,event.game,event.mode,event.mode==='daily'?event.day:event.round].join('|');
   const ledger=get(LEDGER,{});
   if(ledger[token])return {points:ledger[token],duplicate:true,online:!!ctx.user};
   const attempt=count(event.attempt);if(!attempt||!event.round||!event.game||!event.mode)return {points:0};
   let profile=null;
   if(!adapter&&ctx.user&&ctx.client){
    const response=await ctx.client.from('profiles').select('*').eq('id',ctx.user.id).single();
    if(!response.error)profile=response.data;
   }
   const fields={points:'points',totalWins:'correct_guesses',firstWins:'first_try',dailyWins:'daily_wins',bestStreak:'best_streak'};
   if(profile)for(const [local,remote] of Object.entries(fields))ctx.state[local]=Math.max(count(ctx.state[local]),count(profile[remote]));
   const before=JSON.parse(JSON.stringify(ctx.state));
   ctx.state.categoryScores=window.GMPCategoryScores.merge(ctx.state.categoryScores,profile?.category_scores);
   const points=(event.extra?1:([5,4,3,2][attempt-1]||1))+(event.mode==='daily'?2:0);
   ctx.state.points=count(ctx.state.points)+points;ctx.state.totalWins=count(ctx.state.totalWins)+1;
   if(attempt===1&&!event.extra)ctx.state.firstWins=count(ctx.state.firstWins)+1;
   if(event.mode==='daily')ctx.state.dailyWins=count(ctx.state.dailyWins)+1;
   window.GMPCategoryScores.add(ctx.state,event.game,points,event.extra?0:attempt);
   ledger[token]=points;
   // Roll back the stored counters if the ledger cannot be written.
   const previous=localStorage.getItem(ctx.key);
   try{put(ctx.key,ctx.state);put(LEDGER,ledger);}catch(error){Object.assign(ctx.state,before);if(previous!==null)localStorage.setItem(ctx.key,previous);else localStorage.removeItem(ctx.key);throw error;}
   let online=false;
   if(adapter){adapter.persist();adapter.refresh();online=!!ctx.user&&(await adapter.sync())===true;}
   else if(ctx.user&&ctx.client&&profile){
    const stats=Object.fromEntries(Object.entries(fields).map(([local,remote])=>[remote,count(ctx.state[local])]));
    if(Object.hasOwn(profile,"category_scores"))stats.category_scores=window.GMPCategoryScores.clean(ctx.state.categoryScores);
    const response=await ctx.client.from('profiles').update(stats).eq('id',ctx.user.id);online=!response.error;
   }
   window.dispatchEvent(new Event('gmp-score-change'));
   return {points,online,guest:!ctx.user};
  };
  queue=queue.catch(()=>{}).then(()=>navigator.locks?navigator.locks.request('guessplex-score',task):task());return queue;
 }
 return {award,ready};
})();
