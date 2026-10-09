import {filterTitles, matches, submitGuess, yearHint, titleWordHint} from './engine.mjs?v=20261008-hint5';

const $ = id => document.getElementById(id);
if (document.body.dataset.page === 'play') boot();

async function boot() {
  const params = new URLSearchParams(location.search);
  const kind = params.get('kind');
  const filter = params.get('filter');
  const audioDemo = params.get('demo') === 'audio';
  const newDemo = params.get('demo') === 'new';
  const names = {movies: 'Ελληνικές Ταινίες', series: 'Ελληνικές Σειρές'};
  const filters = kind === 'movies' ? {bw: 'Ασπρόμαυρες', color: 'Έγχρωμες', mix: 'Όλες'} : {old: 'Παλιές — έως 2009', new: 'Νέες — από 2010', mix: 'Όλες'};
  if (!names[kind] || !filters[filter]) {
    $('loading').textContent = 'Διάλεξε πρώτα ταινίες ή σειρές από την αρχική σελίδα Greek.';
    return;
  }
  $('heading').textContent = names[kind];
  $('category').textContent = newDemo ? 'Νέος γρίφος με πραγματικό ήχο' : audioDemo ? 'Δοκιμή πραγματικού ήχου' : filters[filter];
  $('back').href = `${kind}.html`;
  document.title = `${filters[filter]} · ${names[kind]} — GuessPlex`;
  let titles;
  try {
    const response = await fetch('titles.json?v=20261009-series10');
    if (!response.ok) throw new Error('Titles unavailable');
    titles = filterTitles(await response.json(), kind, filter);
    if (audioDemo) titles = titles.filter(title => title.audio);
    if (newDemo) titles = titles.filter(title => title.addedIn === '20261008-eleven');
    if (!titles.length) throw new Error('Empty category');
  } catch {
    $('loading').textContent = 'Δεν φορτώθηκαν οι γρίφοι. Δοκίμασε ανανέωση της σελίδας.';
    return;
  }
  const key = `threepoint-greek-v1:${kind}:${filter}${newDemo ? ":new-demo" : audioDemo ? ":audio-demo" : ""}`;
  const ids = titles.map(t => t.id);
  let state;
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved && ids.includes(saved.id) && Array.isArray(saved.guesses) && saved.guesses.length <= 6 && saved.guesses.every(g => typeof g === 'string' && g.length <= 150)) {
      let previous = [];
      const title = titles.find(t => t.id === saved.id);
      for (const guess of saved.guesses) {
        const result = submitGuess(title, previous, guess);
        if (result.error) throw new Error('Invalid saved round');
        previous = result.guesses;
      }
      state = {id: saved.id, guesses: previous, bag: Array.isArray(saved.bag) ? [...new Set(saved.bag.filter(id => ids.includes(id) && id !== saved.id))] : []};
    }
  } catch { /* Storage may be unavailable; the game still works. */ }
  const stop = () => { $('audio').pause(); };
  const save = () => { try {localStorage.setItem(key, JSON.stringify(state));} catch {} };
  function nextRound() {
    stop();
    const last = state?.id;
    let bag = state?.bag?.length ? state.bag : [...ids];
    let choices = bag.filter(id => id !== last);
    if (!choices.length) choices = bag;
    const id = choices[Math.floor(Math.random() * choices.length)];
    state = {id, guesses: [], bag: bag.filter(item => item !== id)};
    save();
    $('guess').value = '';
    $('clueDetails').open = false;
    $('audioStatus').textContent = '';
    $('audio').removeAttribute('src');
    render();
  }
  function render() {
    const title = titles.find(t => t.id === state.id);
    const won = state.guesses.some(g => matches(title, g));
    const ended = won || state.guesses.length === 6;
    const wrong = state.guesses.length - (won ? 1 : 0);
    $('progress').textContent = `${state.guesses.length} / 6 προσπάθειες`;
    $('clue').textContent = title.clue;
    $('audioLabel').textContent = title.audio ? 'Άκου το σύντομο απόσπασμα.' : 'Δεν υπάρχει διαθέσιμο ηχητικό απόσπασμα. Διάβασε τον γρίφο.';
    $('audio').hidden = !title.audio;
    if (title.audio) $('audio').src = title.audio;
    $('history').replaceChildren(...state.guesses.map(guess => {
      const li = document.createElement('li');
      li.textContent = `${matches(title, guess) ? '✓' : '✕'} ${guess}`;
      return li;
    }));
    const help = [
      ['Δύο ηθοποιοί', title.supporting.join(' · ')],
      [kind === 'movies' ? 'Χρονιά πρώτης κυκλοφορίας' : 'Χρονιά πρώτης προβολής', `Ανάμεσα στο ${yearHint(title)}.`],
      ['Δύο βασικοί ηθοποιοί', title.leads.join(' · ')],
      ['Η ιστορία', title.synopsis],
      ['Πόσες λέξεις έχει ο τίτλος;', titleWordHint(title)]
    ];
    $('hints').replaceChildren(...help.slice(0, Math.min(wrong, 5)).map(([heading, text], index) => {
      const section = document.createElement('section');
      section.className = 'hint';
      const h3 = document.createElement('h3');
      h3.textContent = `${index + 1}. ${heading}`;
      const p = document.createElement('p');
      p.textContent = text;
      section.append(h3, p);
      return section;
    }));
    $('guessForm').hidden = ended;
    $('next').hidden = !ended;
    $('result').hidden = !ended;
    $('feedback').textContent = ended ? (won ? 'Σωστά! Βρήκες τον τίτλο.' : 'Ολοκληρώθηκαν οι 6 προσπάθειες.') : wrong ? `Δεν είναι αυτός ο τίτλος. ${wrong === 5 ? "Απομένει 1 προσπάθεια." : `Απομένουν ${6 - wrong} προσπάθειες.`} ${wrong <= 5 ? 'Άνοιξε μια νέα βοήθεια παρακάτω.' : 'Χρησιμοποίησε όλες τις βοήθειες για την τελευταία απάντηση.'}` : 'Πάρε τον χρόνο σου. Δεν υπάρχει χρονόμετρο.';
    $('resultHeading').textContent = won ? 'Το βρήκες!' : 'Η σωστή απάντηση';
    $('answer').textContent = ended ? `${title.title} · ${title.year}` : '';
    $('revealImage').hidden = true;
    $('revealImage').removeAttribute('src');
    $('imageCredit').textContent = '';
    $('sourceLink').removeAttribute('href');
    if (ended) {
      $('sourceLink').href = title.source;
      if (title.image) {
        $('revealImage').alt = `Εικόνα από το έργο «${title.title}»`;
        $('revealImage').src = title.image;
        $('revealImage').hidden = false;
        $('imageCredit').textContent = title.imageCredit || '';
      }
    }
  }
  $('revealImage').addEventListener('error', () => {
    $('revealImage').hidden = true;
    $('imageCredit').textContent = 'Η εικόνα δεν φορτώθηκε.';
  });
  $('audio').addEventListener('error', () => {
    $('audioStatus').textContent = 'Ο ήχος δεν φορτώθηκε. Μπορείς να διαβάσεις τον γρίφο.';
    $('clueDetails').open = true;
  });
  window.addEventListener('pagehide', stop);
  $('guessForm').addEventListener('submit', event => {
    event.preventDefault();
    const title = titles.find(t => t.id === state.id);
    const result = submitGuess(title, state.guesses, $('guess').value);
    if (result.error) { $('feedback').textContent = result.error; return; }
    state.guesses = result.guesses;
    save();
    $('guess').value = '';
    render();
    if (result.ended) {stop(); $('result').focus();} else $('guess').focus();
  });
  $('next').addEventListener('click', () => { nextRound(); $('guess').focus(); });
  if (state) render(); else nextRound();
  $('loading').hidden = true;
  $('game').hidden = false;
}
