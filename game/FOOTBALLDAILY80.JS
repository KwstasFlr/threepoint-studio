/* Expand Daily from the next Athens day; preserve earlier answers. */
(()=>{
  'use strict';
  const startDay='2026-10-31';
  const extra=['yamal','bellingham','palmer','vinicius','saka','pedri','musiala','wirtz','rodrygo','raphinha','odegaard','valverde','brunofernandes','osimhen','isak','rice','vandijk','courtois','neuer','hakimi'];
  if(typeof playerForDay!=='function'||typeof FB_PLAYERS==='undefined'||typeof FB_DAILY_IDS==='undefined')return;
  const previous=playerForDay;
  const start=Date.parse(startDay+'T00:00:00Z')/86400000;
  const ids=new Set([...FB_DAILY_IDS,...extra]);
  const pool=[...new Map(FB_PLAYERS.filter(p=>ids.has(p.id)).map(p=>[p.id,p])).values()];
  if(!Number.isInteger(start)||extra.some(id=>!pool.some(p=>p.id===id)))return;
  const orders=[];
  function orderFor(cycle){
    for(let c=orders.length;c<=cycle;c++){
      const order=[...pool].sort((a,b)=>hash(`guessplex-football-80:${startDay}:${c}:${a.id}`)-hash(`guessplex-football-80:${startDay}:${c}:${b.id}`)||a.id.localeCompare(b.id));
      const last=c===0?previous(start-1).id:orders[c-1].at(-1).id;
      if(order.length>1&&order[0].id===last)order.push(order.shift());
      orders.push(order);
    }
    return orders[cycle];
  }
  playerForDay=function(value){
    if(value<start)return previous(value);
    const elapsed=value-start,cycle=Math.floor(elapsed/pool.length);
    return orderFor(cycle)[elapsed%pool.length];
  };
})();
