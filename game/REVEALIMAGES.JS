"use strict";
(() => {
  const scriptURL = document.currentScript.src;
  const manifestURL = new URL('REVEALIMAGES.json?v=20261026', scriptURL);
  let manifestPromise;
  const entries = () => manifestPromise ||= fetch(manifestURL).then(r => {
    if (!r.ok) throw new Error('Image catalog unavailable');
    return r.json();
  }).catch(() => { manifestPromise = undefined; return {}; });
  const style = document.createElement('style');
  style.textContent = `.gmp-answer-photo{margin:14px 0 20px;display:grid;place-items:center;width:100%;max-width:680px;border:1px solid #ffffff20;border-radius:16px;overflow:hidden;background:#101315}.gmp-answer-photo[hidden]{display:none!important}.gmp-answer-photo img{display:block;width:100%;height:auto;max-height:420px;object-fit:contain}.gmp-answer-photo[data-kind="portrait"]{max-width:440px}.gmp-answer-photo[data-kind="portrait"] img{max-height:400px}.gmp-answer-photo[data-kind="country"]{max-width:400px}.gmp-answer-photo[data-kind="country"] img{max-height:240px;padding:16px;box-sizing:border-box}.gmp-photo-shown #result #revealImage{display:none!important}`;
  document.head.append(style);
  const states = new WeakMap();
  function scan() {
    const statuses = [...document.querySelectorAll('dialog[open] .op-message[data-reveal-key],main #feedback[data-reveal-key]')];
    for (const status of statuses) {
      const root = status.closest('dialog') || document.querySelector('#game') || status.closest('main');
      if (!root) continue;
      const won = status.classList.contains('op-won') || /^(Correct!|Σωστά!)/i.test(status.textContent.trim());
      const key = won ? status.dataset.revealKey : '';
      let state = states.get(root);
      if (!state || state.key !== key || state.status !== status) {
        state?.figure?.remove();
        root.classList.remove('gmp-photo-shown');
        state = {key, status, figure:null};
        states.set(root,state);
        if (key) show(root,state);
      }
      const banner = root.querySelector('[data-gmp-feedback]');
      if (state.figure && banner && banner.nextElementSibling !== state.figure) banner.after(state.figure);
      const image = state.figure?.querySelector('img');
      if (image && status.dataset.correctAnswer && image.alt !== status.dataset.correctAnswer) image.alt = status.dataset.correctAnswer;
    }
  }
  async function show(root,state) {
    const catalog = await entries();
    if (states.get(root) !== state || !state.status.isConnected) return;
    const record = catalog[state.key];
    if (!record?.image) return;
    const url = new URL(record.image,scriptURL);
    if (!['https:','http:'].includes(url.protocol)) return;
    const figure = document.createElement('figure');
    figure.className = 'gmp-answer-photo';
    figure.dataset.kind = record.type;
    figure.hidden = true;
    const image = document.createElement('img');
    image.alt = state.status.dataset.correctAnswer || record.title || '';
    image.decoding = 'async';
    image.referrerPolicy = 'no-referrer';
    image.addEventListener('load', () => {
      if (states.get(root) !== state) return;
      figure.hidden = false;
      root.classList.add('gmp-photo-shown');
    }, {once:true});
    image.addEventListener('error', () => {
      figure.remove();
      state.figure = null;
      root.classList.remove('gmp-photo-shown');
    }, {once:true});
    figure.append(image);
    state.figure = figure;
    const anchor = root.querySelector('[data-gmp-feedback]') || state.status;
    anchor.after(figure);
    image.src = url.href;
  }
  new MutationObserver(scan).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['open','class','data-correct-answer','data-reveal-key']});
  scan();
})();
