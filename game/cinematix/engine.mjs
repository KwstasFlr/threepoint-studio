export function normalize(value) {
  return value.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('el').replace(/ς/g, 'σ').replace(/[^\p{L}\p{N}]/gu, '');
}
export function matches(title, guess) {
  return [title.title, ...(title.aliases || [])].some(value => normalize(value) === normalize(guess));
}
export function filterTitles(titles, kind, filter) {
  return titles.filter(t => t.kind === kind && (filter === 'mix' || (kind === 'movies' ? t.originalFormat === filter : filter === (t.year < 2010 ? 'old' : 'new'))));
}
export function yearHint(title) {
  const offset = [...title.id].reduce((sum, c) => sum + c.charCodeAt(0), 0) % 11;
  return `${title.year - offset}–${title.year - offset + 10}`;
}
export function titleWordHint(title) {
  const count = (title.title.normalize('NFC').match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu) || []).length;
  return `Ο βασικός τίτλος έχει ${count} ${count === 1 ? 'λέξη' : 'λέξεις'}.`;
}
export function submitGuess(title, previous, value) {
  const guess = value.trim();
  if (!normalize(guess)) return {error: 'Γράψε έναν τίτλο πρώτα.'};
  if (previous.some(p => normalize(p) === normalize(guess))) return {error: 'Αυτόν τον τίτλο τον έχεις ήδη δοκιμάσει.'};
  if (previous.length >= 6 || previous.some(p => matches(title, p))) return {error: 'Ο γύρος ολοκληρώθηκε.'};
  const guesses = [...previous, guess];
  const won = matches(title, guess);
  return {guesses, won, ended: won || guesses.length === 6, hints: Math.min(won ? guesses.length - 1 : guesses.length, 5)};
}
