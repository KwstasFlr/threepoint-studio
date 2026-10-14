export const alternatives=[];
export const normalize=s=>String(s).normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/ς/g,'σ').replace(/[^\p{L}\p{N}]/gu,'');
export const clues=(p,variant,language)=>p.clues.map(c=>c[language==='el'?1:0]);
export function validState(s,data){const targets=new Set(data.map(p=>p.id)),ids=new Set([...data,...alternatives].map(p=>p.id));return s?.version===1&&targets.has(s.id)&&typeof s.token==='string'&&s.token.length>10&&Array.isArray(s.guesses)&&s.guesses.length<=3&&new Set(s.guesses).size===s.guesses.length&&s.guesses.every(id=>ids.has(id))&&Number.isSafeInteger(s.round)&&s.round>0&&Number.isSafeInteger(s.wins)&&s.wins>=0&&Array.isArray(s.used)&&s.used.every(id=>targets.has(id))&&s.seen&&typeof s.seen==='object';}
