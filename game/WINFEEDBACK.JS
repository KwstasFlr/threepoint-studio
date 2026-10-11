"use strict";
(()=>{
 const style=document.createElement('style');style.textContent=`.gmp-win-banner{display:flex;align-items:center;gap:16px;margin:18px 0 24px;padding:20px 24px;border:2px solid #c6f34e;border-radius:16px;background:#c6f34e;color:#111a05;font-size:clamp(26px,5vw,40px);font-weight:900;line-height:1.2;box-shadow:0 0 28px #c6f34230;scroll-margin-top:20px}.gmp-win-banner .win-check{display:grid;place-items:center;width:52px;height:52px;flex-shrink:0;border-radius:50%;background:#111a05;color:#c6f34e}.gmp-win-banner [hidden]{display:none!important}`;document.head.append(style);
 function update(){
  const roots=[...document.querySelectorAll('dialog[open]')];const feedback=document.querySelector('main #feedback');if(feedback)roots.push(document.querySelector('#game')||document.querySelector('main'));
  for(const root of roots){
   const status=root.querySelector('.op-message')||feedback,won=!!status&&(status.classList.contains('op-won')||/^(Correct!|Σωστά!)/i.test(status.textContent.trim()));let banner=root.querySelector('[data-gmp-feedback]');
   if(!won){banner?.remove();continue}
   const fresh=!banner;if(fresh){banner=document.createElement('div');banner.className='gmp-win-banner';banner.dataset.gmpFeedback='';banner.setAttribute('role','status');banner.innerHTML='<span class="win-check" aria-hidden="true">✓</span><div class="win-copy"><div class="win-label"><span data-win-en>CORRECT!</span><span data-win-el>ΣΩΣΤΑ!</span></div><strong class="win-answer"></strong></div>';const top=root.querySelector('.dialog-top');if(top)top.after(banner);else root.prepend(banner)}
   const answer=banner.querySelector('.win-answer'),name=status.dataset.correctAnswer||'';if(answer.textContent!==name)answer.textContent=name;
   const greek=document.documentElement.lang==='el';const en=banner.querySelector('[data-win-en]'),el=banner.querySelector('[data-win-el]');if(en.hidden!==greek)en.hidden=greek;if(el.hidden===greek)el.hidden=!greek;
   if(fresh)banner.scrollIntoView({block:'nearest',behavior:'auto'});
  }
 }
 new MutationObserver(update).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['open','class','data-correct-answer']});new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});update();
})();
