/* Shared home link: keep navigation at the right edge of the header. */
(()=>{
function apply(){
 let language=document.documentElement.lang;
 try{const raw=localStorage.getItem('GMP_LANGUAGE');language=JSON.parse(raw)||raw||language}catch{}
 const label=language==='el'?'← Πίσω στην αρχική':'← Back to home';
 document.querySelectorAll('a.gmp-back,a.category-back,a[data-text="back"]').forEach(a=>{
  if(new URL(a.href,location.href).pathname.replace(/\/+$/,'')!=='/game')return;
  if(a.textContent.trim()!==label)a.textContent=label;
  const header=a.closest('header');if(header){a.style.order='99';a.style.marginLeft='auto';header.style.flexWrap='wrap';}
 });
}
let queued=false;new MutationObserver(()=>{if(!queued){queued=true;queueMicrotask(()=>{queued=false;apply()})}}).observe(document.body,{childList:true,subtree:true});
apply();
})();
