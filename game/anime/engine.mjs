export function shuffle(values,random=Math.random){const out=[...values];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
export const QUESTION_MS=10000;
export class AnimeRound{
 constructor(bank,{now=()=>performance.now(),random=Math.random}={}){this.bank=bank;this.now=now;this.random=random;this.status='ready';this.history=[];this.serial=0;}
 start(){const pool=shuffle(this.bank,this.random),chosen=[...pool.filter(x=>x.gender==='female').slice(0,6),...pool.filter(x=>x.gender!=='female').slice(0,4)];for(const item of pool){if(chosen.length>=10)break;if(!chosen.includes(item))chosen.push(item);}this.deck=shuffle(chosen.slice(0,10),this.random);this.history=[];this.serial++;this.prepare();}
 prepare(){if(!this.deck.length){this.status='finished';return;}this.item=this.deck.shift();this.options=shuffle([this.item,...shuffle(this.bank.filter(x=>x.id!==this.item.id),this.random).slice(0,3)],this.random);this.status='loading';this.serial++;}
 activate(serial){if(this.status!=='loading'||serial!==this.serial)return false;this.started=this.now();this.deadline=this.started+QUESTION_MS;this.status='playing';return true;}
 remaining(){return this.status==='playing'?Math.max(0,this.deadline-this.now()):this.status==='loading'||this.status==='ready'?QUESTION_MS:0;}
 answer(serial,id){if(this.status!=='playing'||serial!==this.serial)return null;const expired=this.now()>=this.deadline;if(!expired&&!this.options.some(x=>x.id===id))return null;const entry={id:this.item.id,picked:expired?null:id,correct:!expired&&id===this.item.id,elapsedMs:Math.min(QUESTION_MS,Math.max(0,this.now()-this.started)),timeout:expired};this.history.push(entry);this.status='reveal';return entry;}
 tick(){return this.status==='playing'&&this.remaining()===0?this.answer(this.serial,null):null;}
 next(){if(this.status!=='reveal')return false;this.prepare();return true;}
 get correct(){return this.history.filter(x=>x.correct).length;}
 elapsed(){return this.history.reduce((n,x)=>n+x.elapsedMs,0)+(this.status==='playing'?Math.min(QUESTION_MS,Math.max(0,this.now()-this.started)):0);}
}
