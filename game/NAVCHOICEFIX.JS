/* Shared header placement and concise choice labels. */
(()=>{
const script=document.currentScript;
const home=new URL('./',script.src).pathname.replace(/\/+$/,'');
const style=document.createElement('style');
style.textContent=`
header.gpx-home-header{display:flex!important;flex-wrap:wrap!important;align-items:center!important;gap:14px!important}
header.gpx-home-header>.brand{order:0!important;margin-right:auto!important}
header.gpx-home-header>[data-language-picker],header.gpx-home-header>.languages{order:2!important}
header.gpx-home-header>.gpx-home-right{order:99!important;margin-left:auto!important;align-self:center!important;justify-self:end!important;white-space:normal;text-align:right}
.gpx-choice-description,.mode-option .mode-description{display:none!important}
@media(max-width:640px){header.gpx-home-header>.brand{flex-basis:100%!important}header.gpx-home-header>.gpx-home-right{flex:0 1 auto!important;max-width:100%;font-size:14px}}
`;
document.head.append(style);
function apply(){
 const lang=document.documentElement.lang.startsWith('el')?'el':'en';
 document.querySelectorAll('header a').forEach(a=>{
  if(a.classList.contains('brand'))return;
  const u=new URL(a.href,location.href);
  if(u.origin!==location.origin||u.pathname.replace(/\/+$/,'')!==home)return;
  const h=a.closest('header');h.classList.add('gpx-home-header');a.classList.add('gpx-home-right');
  if(a.parentElement!==h)h.append(a);
  const label=lang==='el'?'← Πίσω στην αρχική':'← Back to home';
  if(a.textContent!==label)a.textContent=label;
 });
 document.querySelectorAll('main>.grid>.tile>span:not(.symbol),main>.grid>.tile>small,.mode-option .mode-description,#turnMode .mode small,#pickCard small').forEach(e=>{
  if(/(?:19|20)\d{2}/.test(e.textContent))return;
  e.classList.add('gpx-choice-description');
 });
}
let pending=false;
new MutationObserver(()=>{if(!pending){pending=true;queueMicrotask(()=>{pending=false;apply()})}}).observe(document.body,{childList:true,subtree:true});
new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
apply();
})();
