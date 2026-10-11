"use strict";
// One searchable, keyboard-accessible list for every game. Keep canonical names intact.
(()=>{
 const equivalents={'ł':'l','ø':'o','đ':'d','ð':'d','þ':'th','æ':'ae','œ':'oe','ß':'ss','ı':'i'};
 const fold=value=>String(value??'').normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[łøđðþæœßı]/g,c=>equivalents[c]).replace(/ς/g,'σ');
 const normalize=value=>fold(value).replace(/[^\p{L}\p{N}]/gu,'');
 function resolve(value,items){
  const n=normalize(value);if(!n)return undefined;
  const exact=items.filter(c=>[c.name,...(c.aliases||[])].some(a=>normalize(a)===n));
  if(exact.length===1)return exact[0];if(exact.length>1)return undefined;
  const surnames=items.filter(c=>normalize(c.name.split(/\s+/).at(-1))===n);
  return surnames.length===1?surnames[0]:undefined;
 }
 window.GMPNames={fold,normalize,resolve};
 const css=document.createElement('style');css.textContent=`
 .gmp-name-list{position:fixed;z-index:20000;box-sizing:border-box;max-height:260px;overflow:auto;overscroll-behavior:contain;background:#161c23;color:#fff;border:1px solid #71803a;border-radius:10px;box-shadow:0 12px 30px #0008;padding:5px;margin:0}
 .gmp-name-list[hidden]{display:none}.gmp-name-list [role=option]{display:block;box-sizing:border-box;width:100%;margin:0;border:0;border-radius:5px;background:transparent;color:inherit;text-align:left;font:inherit;line-height:1.4;padding:11px 12px;cursor:pointer;min-height:44px}
 .gmp-name-list [role=option]:hover,.gmp-name-list [aria-selected=true]{background:#c6f34e;color:#101510}
 .gmp-name-list .empty{padding:12px;color:#cbd1d7}`;document.head.append(css);
 let input=null,popup=null,choices=[],active=-1,sequence=0;
 function close(){if(popup)popup.hidden=true;if(input){input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');}active=-1;}
 function position(){if(!input?.isConnected){close();return}const r=input.getBoundingClientRect();const space=innerHeight-r.bottom;popup.style.left=Math.max(8,r.left)+'px';popup.style.width=Math.min(r.width,innerWidth-16)+'px';popup.style.maxHeight=Math.max(80,Math.min(260,space>=130?space-12:r.top-12))+'px';popup.style.top=space>=130?r.bottom+5+'px':'auto';popup.style.bottom=space>=130?'auto':innerHeight-r.top+5+'px';}
 function choose(index){const c=choices[index];if(!c)return;input.value=c.value;close();input.dispatchEvent(new Event('input',{bubbles:true}));close();input.focus();}
 function show(field){
  const id=field.getAttribute('list')||field.dataset.gmpList,list=document.getElementById(id);if(!list||field.disabled||field.closest('[hidden]'))return;
  if(input!==field){close();popup?.remove();input=field;popup=document.createElement('div');popup.className='gmp-name-list';popup.id='gmpNames'+(++sequence);popup.setAttribute('role','listbox');popup.setAttribute('aria-label',field.labels?.[0]?.textContent||'Names');(field.closest('dialog')||document.body).append(popup);}
  field.dataset.gmpList=id;field.removeAttribute('list');field.setAttribute('role','combobox');field.setAttribute('aria-autocomplete','list');field.setAttribute('aria-haspopup','listbox');field.setAttribute('aria-controls',popup.id);field.setAttribute('aria-expanded','true');field.removeAttribute('aria-activedescendant');
  const query=normalize(field.value),seen=new Set();choices=[...list.options].filter(o=>o.value&&!seen.has(o.value)&&seen.add(o.value)).filter(o=>normalize([o.value,o.label,o.dataset.aliases||''].join(' ')).includes(query)).sort((a,b)=>a.value.localeCompare(b.value,document.documentElement.lang||'en'));
  active=-1;popup.replaceChildren();choices.forEach((o,k)=>{const b=document.createElement('button');b.type='button';b.tabIndex=-1;b.id=popup.id+'-'+k;b.setAttribute('role','option');b.setAttribute('aria-selected','false');b.textContent=o.value;b.addEventListener('pointerdown',e=>e.preventDefault());b.addEventListener('click',()=>choose(k));popup.append(b)});
  if(!choices.length){const msg=document.createElement('div');msg.className='empty';msg.textContent=document.documentElement.lang==='el'?'Δεν βρέθηκαν ονόματα.':'No names found.';popup.append(msg)}popup.hidden=false;position();
 }
 function eligible(e){return e.target instanceof HTMLInputElement&&(e.target.hasAttribute('list')||e.target.dataset.gmpList);}
 document.addEventListener('focusin',e=>{if(eligible(e))show(e.target)});
 document.addEventListener('click',e=>{if(eligible(e))show(e.target);else if(!popup?.contains(e.target))close()});
 document.addEventListener('input',e=>{if(eligible(e))show(e.target)});
 document.addEventListener('focusout',e=>{if(e.target===input)setTimeout(()=>{if(document.activeElement!==input)close()},0)});
 document.addEventListener('keydown',e=>{
  if(!eligible(e))return;
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){
   e.preventDefault();if(popup?.hidden||input!==e.target)show(e.target);if(!choices.length)return;
   active=e.key==='ArrowDown'?(active+1)%choices.length:(active<0?choices.length-1:(active-1+choices.length)%choices.length);
   [...popup.querySelectorAll('[role=option]')].forEach((b,k)=>b.setAttribute('aria-selected',String(k===active)));const b=popup.children[active];input.setAttribute('aria-activedescendant',b.id);b.scrollIntoView({block:'nearest'});
  }else if(e.key==='Enter'&&popup&&!popup.hidden&&active>=0){e.preventDefault();choose(active)}
  else if(e.key==='Escape'&&popup&&!popup.hidden){e.preventDefault();e.stopPropagation();close()}
  else if(e.key==='Tab')close();
 },true);
 document.addEventListener('submit',close,true);document.addEventListener('close',close,true);
 addEventListener('resize',()=>{if(popup&&!popup.hidden)position()});document.addEventListener('scroll',e=>{if(popup&&!popup.hidden&&!popup.contains(e.target))position()},true);
 new MutationObserver(records=>{if(!input?.isConnected){popup?.remove();input=null;popup=null;return}if(popup&&!popup.hidden&&(input.disabled||input.closest('[hidden]'))){close();return}if(popup&&!popup.hidden&&records.some(r=>r.target.nodeName==='DATALIST'||r.target.closest?.('datalist')))show(input)}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden','disabled']});
})();
