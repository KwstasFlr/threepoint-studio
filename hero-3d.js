"use strict";
(() => {
  const hero = document.querySelector('.reference-hero');
  if (!hero) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 701px)');
  let frame = 0, x = 0, y = 0;
  const reset = () => {
    cancelAnimationFrame(frame); frame = 0;
    for (const property of ['--mark-x','--mark-y']) hero.style.removeProperty(property);
  };
  hero.addEventListener('pointermove', event => {
    if (motion.matches || !pointer.matches) return;
    const bounds = hero.getBoundingClientRect();
    x = Math.max(-1,Math.min(1,(event.clientX-bounds.left)/bounds.width*2-1));
    y = Math.max(-1,Math.min(1,(event.clientY-bounds.top)/bounds.height*2-1));
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      hero.style.setProperty('--mark-x', `${6-y*5}deg`);
      hero.style.setProperty('--mark-y', `${-12+x*8}deg`);
    });
  }, {passive:true});
  hero.addEventListener('pointerleave',reset);
  motion.addEventListener('change',reset);
  pointer.addEventListener('change',reset);
})();
