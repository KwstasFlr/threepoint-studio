"use strict";

/* CONNECTION */

const SUPABASE_URL =
  "https://yrwgwxopleydtyckkvaz.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_Prv6Os1Y96CtkVfbySk_ww_hiIzo5-L";

const SUPABASE_SDK =
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

const SDK_TIMEOUT = 6000;

let supabaseClient = null;
let supabaseLoadPromise = null;
let authListenerBound = false;

function connectionError() {
  return new Error(
    T(
      "Online services are unavailable. You can continue as a guest.",
      "Οι online υπηρεσίες δεν είναι διαθέσιμες. Μπορείς να συνεχίσεις ως επισκέπτης."
    )
  );
}

function ensureOnline() {
  if (supabaseClient) {
    return Promise.resolve(
      supabaseClient
    );
  }

  if (supabaseLoadPromise) {
    return supabaseLoadPromise;
  }

  supabaseLoadPromise =
    new Promise((resolve, reject) => {
      if (
        window.supabase?.createClient
      ) {
        supabaseClient =
          window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY
          );

        resolve(supabaseClient);
        return;
      }

      const script =
        document.createElement("script");

      let finished = false;

      const timer = setTimeout(
        () => {
          finish(connectionError());
        },
        SDK_TIMEOUT
      );

      function finish(error) {
        if (finished) return;

        finished = true;
        clearTimeout(timer);

        script.onload = null;
        script.onerror = null;

        if (error) {
          script.remove();
          reject(error);
        } else {
          resolve(supabaseClient);
        }
      }

      script.id =
        "gmp-supabase-sdk";

      script.async = true;
      script.crossOrigin =
        "anonymous";

      script.src =
        SUPABASE_SDK;

      script.onload = () => {
        if (
          !window.supabase
            ?.createClient
        ) {
          finish(connectionError());
          return;
        }

        supabaseClient =
          window.supabase
            .createClient(
              SUPABASE_URL,
              SUPABASE_KEY
            );

        finish();
      };

      script.onerror = () =>
        finish(connectionError());

      document.head.appendChild(
        script
      );
    })
      .catch(error => {
        supabaseLoadPromise = null;
        throw error;
      });

  return supabaseLoadPromise;
}

let currentUser = null;
let currentProfile = null;
let onlineLeaderboard = [];
let authMode = "login";
let authBusy = false;
let statsQueue = Promise.resolve();
let leaderboardError = false;

let activeStorageKey =
  "GAME_MULTIPLEX_V4";

const REVOLUT_URL =
  "https://revolut.me/konstajmq6";

const DAY = 86400000;

const START = Math.floor(
  Date.UTC(2026, 8, 7) / DAY
);

const KEY =
  "GAME_MULTIPLEX_V4";

const DAILY_LOCK_PREFIX =
  `${KEY}:DAILY_LOCK:`;

const $ = id =>
  document.getElementById(id);

const day = n =>
  Math.floor(n / DAY);

const today = () =>
  day(Date.now());

let storageOK = true;

function read(k, fallback) {
  try {
    return (
      localStorage.getItem(k) ??
      fallback
    );
  } catch {
    storageOK = false;
    return fallback;
  }
}

function write(k, value) {
  try {
    localStorage.setItem(
      k,
      value
    );
  } catch {
    storageOK = false;
  }
}

let lang =
  read(
    "GMP_LANGUAGE",
    "en"
  ) === "el"
    ? "el"
    : "en";

const T = (en, el) =>
  lang === "el" ? el : en;

const esc = value =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const norm = value =>
  String(value ?? "")
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .toLowerCase()
    .replace(
      /[^a-z0-9α-ωάέήίόύώϊϋΐΰ]+/gi,
      " "
    )
    .trim();

/* PLAYER DATA */

const P = [
  {
    id: "messi",
    name: "Lionel Messi",

    aliases: [
      "messi",
      "lionel messi",
      "leo messi",
      "μέσι",
      "μεσι",
      "μεσσι"
    ],

    nation: [
      "Argentina",
      "Αργεντινή"
    ],

    position: [
      "Forward",
      "Επιθετικός"
    ],

    teaser: [
      "My left foot has given defenders plenty of homework.",
      "Το αριστερό μου πόδι έχει βάλει αρκετό διάβασμα στους αμυντικούς."
    ],

    clues: [
      [
        "I was born in Argentina.",
        "Γεννήθηκα στην Αργεντινή."
      ],
      [
        "I became a global star at Barcelona.",
        "Έγινα παγκόσμιος σταρ στην Barcelona."
      ],
      [
        "I have won the Ballon d'Or multiple times.",
        "Έχω κερδίσει πολλές φορές τη Χρυσή Μπάλα."
      ],
      [
        "I won the World Cup with my country.",
        "Κατέκτησα το Παγκόσμιο Κύπελλο με την εθνική μου ομάδα."
      ]
    ],

    birthDate: "1987-06-24",
    goals: null,
    assists: null,
    cleanSheets: null,
    highestMarketValue: null,

    clubs: [
      "Barcelona",
      "Paris Saint-Germain",
      "Inter Miami"
    ],

    image: null
  },

  {
    id: "ronaldo",
    name: "Cristiano Ronaldo",

    aliases: [
      "cristiano ronaldo",
      "ronaldo",
      "cr7",
      "κριστιανο ροναλντο",
      "ροναλντο"
    ],

    nation: [
      "Portugal",
      "Πορτογαλία"
    ],

    position: [
      "Forward",
      "Επιθετικός"
    ],

    teaser: [
      "Goals, records and a famous number seven.",
      "Γκολ, ρεκόρ και ένα διάσημο νούμερο επτά."
    ],

    clues: [
      [
        "I was born in Portugal.",
        "Γεννήθηκα στην Πορτογαλία."
      ],
      [
        "I played for Manchester United.",
        "Έπαιξα στη Manchester United."
      ],
      [
        "I became one of Real Madrid's most famous players.",
        "Έγινα ένας από τους πιο διάσημους παίκτες της Real Madrid."
      ],
      [
        "CR7 is one of my most famous nicknames.",
        "Το CR7 είναι ένα από τα πιο γνωστά παρατσούκλια μου."
      ]
    ],

    birthDate: "1985-02-05",
    goals: null,
    assists: null,
    cleanSheets: null,
    highestMarketValue: null,

    clubs: [
      "Sporting CP",
      "Manchester United",
      "Real Madrid",
      "Juventus",
      "Al-Nassr"
    ],

    image: null
  },

  {
    id: "mbappe",
    name: "Kylian Mbappé",

    aliases: [
      "kylian mbappe",
      "mbappe",
      "mbappé",
      "κιλιαν εμπαπε",
      "εμπαπε"
    ],

    nation: [
      "France",
      "Γαλλία"
    ],

    position: [
      "Forward",
      "Επιθετικός"
    ],

    teaser: [
      "Speed is one of my biggest weapons.",
      "Η ταχύτητα είναι ένα από τα μεγαλύτερα όπλα μου."
    ],

    clues: [
      [
        "I am French.",
        "Είμαι Γάλλος."
      ],
      [
        "I developed at Monaco.",
        "Αναδείχθηκα στη Monaco."
      ],
      [
        "I became a superstar at Paris Saint-Germain.",
        "Έγινα superstar στην Paris Saint-Germain."
      ],
      [
        "I won the World Cup as a teenager.",
        "Κατέκτησα το Παγκόσμιο Κύπελλο ως έφηβος."
      ]
    ],

    birthDate: "1998-12-20",
    goals: null,
    assists: null,
    cleanSheets: null,
    highestMarketValue: null,

    clubs: [
      "Monaco",
      "Paris Saint-Germain",
      "Real Madrid"
    ],

    image: null
  },

  {
    id: "haaland",
    name: "Erling Haaland",

    aliases: [
      "erling haaland",
      "haaland",
      "χαλαντ",
      "ερλινγκ χαλαντ"
    ],

    nation: [
      "Norway",
      "Νορβηγία"
    ],

    position: [
      "Striker",
      "Σέντερ φορ"
    ],

    teaser: [
      "Power, pace and goals are a big part of my game.",
      "Δύναμη, ταχύτητα και γκολ είναι μεγάλο μέρος του παιχνιδιού μου."
    ],

    clues: [
      [
        "I represent Norway.",
        "Αγωνίζομαι με τη Νορβηγία."
      ],
      [
        "I played for Borussia Dortmund.",
        "Έπαιξα στην Borussia Dortmund."
      ],
      [
        "I moved to Manchester City.",
        "Πήγα στη Manchester City."
      ],
      [
        "My father was also a professional footballer.",
        "Ο πατέρας μου ήταν επίσης επαγγελματίας ποδοσφαιριστής."
      ]
    ],

    birthDate: "2000-07-21",
    goals: null,
    assists: null,
    cleanSheets: null,
    highestMarketValue: null,

    clubs: [
      "Molde",
      "Red Bull Salzburg",
      "Borussia Dortmund",
      "Manchester City"
    ],

    image: null
  },

  {
    id: "modric",
    name: "Luka Modrić",

    aliases: [
      "luka modric",
      "modric",
      "modrić",
      "λουκα μοντριτς",
      "μοντριτς"
    ],

    nation: [
      "Croatia",
      "Κροατία"
    ],

    position: [
      "Midfielder",
      "Μέσος"
    ],

    teaser: [
      "I have controlled some of football's biggest matches from midfield.",
      "Έχω ελέγξει μερικά από τα μεγαλύτερα παιχνίδια από τη μεσαία γραμμή."
    ],

    clues: [
      [
        "I represent Croatia.",
        "Αγωνίζομαι με την Κροατία."
      ],
      [
        "I played for Tottenham.",
        "Έπαιξα στην Tottenham."
      ],
      [
        "I became a legend at Real Madrid.",
        "Έγινα θρύλος στη Real Madrid."
      ],
      [
        "I won the Ballon d'Or.",
        "Κατέκτησα τη Χρυσή Μπάλα."
      ]
    ],

    birthDate: "1985-09-09",
    goals: null,
    assists: null,
    cleanSheets: null,
    highestMarketValue: null,

    clubs: [
      "Dinamo Zagreb",
      "Tottenham Hotspur",
      "Real Madrid"
    ],

    image: null
  },

  {
    id: "ronaldinho",
    name: "Ronaldinho",

    aliases: [
      "ronaldinho",
      "ronaldinho gaucho",
      "ροναλντινιο"
    ],

    nation: [
      "Brazil",
      "Βραζιλία"
    ],

    position: [
      "Attacking Midfielder",
      "Επιθετικός μέσος"
    ],

    teaser: [
      "Football was always more fun with a smile.",
      "Το ποδόσφαιρο ήταν πάντα πιο όμορφο με ένα χαμόγελο."
    ],

    clues: [
      [
        "I am Brazilian.",
        "Είμαι Βραζιλιάνος."
      ],
      [
        "I played for Paris Saint-Germain.",
        "Έπαιξα στην Paris Saint-Germain."
      ],
      [
        "Barcelona was one of the biggest chapters of my career.",
        "Η Barcelona ήταν ένα από τα μεγαλύτερα κεφάλαια της καριέρας μου."
      ],
      [
        "I was famous for skills, creativity and free kicks.",
        "Ήμουν γνωστός για τις ντρίμπλες, τη δημιουργικότητα και τα φάουλ."
      ]
    ],

    birthDate: "1980-03-21",
    goals: null,
    assists: null,
    cleanSheets: null,
    highestMarketValue: null,

    clubs: [
      "Grêmio",
      "Paris Saint-Germain",
      "Barcelona",
      "AC Milan",
      "Flamengo",
      "Atlético Mineiro",
      "Querétaro",
      "Fluminense"
    ],

    image: null
  },

  {
    id: "zidane",
    name: "Zinedine Zidane",

    aliases: [
      "zinedine zidane",
      "zidane",
      "ζινεντιν ζινταν",
      "ζινταν"
    ],

    nation: [
      "France",
      "Γαλλία"
    ],

    position: [
      "Attacking Midfielder",
      "Επιθετικός μέσος"
    ],

    teaser: [
      "Elegance in midfield became part of my identity.",
      "Η κομψότητα στη μεσαία γραμμή έγινε μέρος της ταυτότητάς μου."
    ],

    clues: [
      [
        "I represented France.",
        "Αγωνίστηκα με τη Γαλλία."
      ],
      [
        "I played for Juventus.",
        "Έπαιξα στη Juventus."
      ],
      [
        "I later played for Real Madrid.",
        "Αργότερα έπαιξα στη Real Madrid."
      ],
      [
        "I scored twice in a World Cup final.",
        "Σκόραρα δύο φορές σε τελικό Παγκοσμίου Κυπέλλου."
      ]
    ],

    birthDate: "1972-06-23",
    goals: null,
    assists: null,
    cleanSheets: null,
    highestMarketValue: null,

    clubs: [
      "Cannes",
      "Bordeaux",
      "Juventus",
      "Real Madrid"
    ],

    image: null
  },

  {
    id: "henry",
    name: "Thierry Henry",

    aliases: [
      "thierry henry",
      "henry",
      "τιερι ανρι",
      "ανρι"
    ],

    nation: [
      "France",
      "Γαλλία"
    ],

    position: [
      "Striker",
      "Σέντερ φορ"
    ],

    teaser: [
      "North London became a very important place in my career.",
      "Το βόρειο Λονδίνο έγινε πολύ σημαντικό μέρος της καριέρας μου."
    ],

    clues: [
      [
        "I am French.",
        "Είμαι Γάλλος."
      ],
      [
        "I started my senior career at Monaco.",
        "Ξεκίνησα την επαγγελματική καριέρα μου στη Monaco."
      ],
      [
        "I became an Arsenal legend.",
        "Έγινα θρύλος της Arsenal."
      ],
      [
        "I later played for Barcelona.",
        "Αργότερα έπαιξα στην Barcelona."
      ]
    ],

    birthDate: "1977-08-17",
    goals: null,
    assists: null,
    cleanSheets: null,
    highestMarketValue: null,

    clubs: [
      "Monaco",
      "Juventus",
      "Arsenal",
      "Barcelona",
      "New York Red Bulls"
    ],

    image: null
  }
];

/* GAME CATEGORIES */

const GAME_DATA = [
  {
    id: "football",
    name: "Football",
    available: true,
    category: "SPORT",

    description: [
      "Who Am I? · Daily & Unlimited",
      "Μάντεψε τον παίκτη · Καθημερινό & Ελεύθερο"
    ]
  },

  {
    id: "movies",
    name: "Movies",
    available: false,
    category: "MOVIES",

    description: [
      "In development",
      "Σε ανάπτυξη"
    ]
  },

  {
    id: "one-piece",
    name: "One Piece",
    available: false,
    category: "ANIME",

    description: [
      "In development",
      "Σε ανάπτυξη"
    ]
  },

  {
    id: "naruto",
    name: "Naruto",
    available: false,
    category: "ANIME",

    description: [
      "In development",
      "Σε ανάπτυξη"
    ]
  },

  {
    id: "bleach",
    name: "Bleach",
    available: false,
    category: "ANIME",

    description: [
      "In development",
      "Σε ανάπτυξη"
    ]
  },

  {
    id: "basketball",
    name: "Basketball",
    available: false,
    category: "SPORT",

    description: [
      "In development",
      "Σε ανάπτυξη"
    ]
  },

  {
    id: "cricket",
    name: "Cricket",
    available: false,
    category: "SPORT",

    description: [
      "In development",
      "Σε ανάπτυξη"
    ]
  },

  {
    id: "pokemon",
    name: "Pokémon",
    available: false,
    category: "GAMES",

    description: [
      "In development",
      "Σε ανάπτυξη"
    ]
  }
];

/* STATE */

function integer(n) {
  return (
    Number.isInteger(n) &&
    n >= 0
  );
}

function make(
  pid,
  mode = "daily"
) {
  return {
    pid,
    mode,
    guesses: [],
    attempts: 0,
    status: "playing",
    points: 0,
    bonus: 0,
    extra: false,
    extraUsed: false,
    completedAt: null
  };
}

function valid(r) {
  return (
    r &&
    typeof r === "object" &&
    P.some(
      p => p.id === r.pid
    ) &&
    [
      "daily",
      "classic",
      "archive"
    ].includes(r.mode) &&
    [
      "playing",
      "won",
      "lost",
      "givenup"
    ].includes(r.status) &&
    Array.isArray(r.guesses) &&
    r.guesses.every(
      guess =>
        typeof guess === "string"
    ) &&
    integer(r.attempts) &&
    r.attempts <= 4 &&
    typeof r.extra ===
      "boolean" &&
    typeof r.extraUsed ===
      "boolean" &&
    integer(r.points) &&
    integer(r.bonus)
  );
}

function initialState() {
  return {
    rounds: {},
    classic: null,
    points: 0,
    totalWins: 0,
    dailyWins: 0,
    streak: 0,
    bestStreak: 0,
    firstWins: 0,
    classicWins: 0,
    lastDailyWin: null,
    classicFirst: 0
  };
}

let state = initialState();

function loadState() {
  const raw =
    read(
      activeStorageKey,
      ""
    );

  if (!raw) return;

  try {
    const saved =
      JSON.parse(raw);

    if (
      !saved ||
      typeof saved !== "object"
    ) {
      return;
    }

    if (
      saved.rounds &&
      typeof saved.rounds ===
        "object"
    ) {
      for (
        const [key, savedRound]
        of Object.entries(
          saved.rounds
        )
      ) {
        if (
          integer(Number(key)) &&
          Number(key) <= today() &&
          valid(savedRound)
        ) {
          state.rounds[key] =
            savedRound;
        }
      }
    }

    if (
      valid(saved.classic) &&
      saved.classic.mode ===
        "classic"
    ) {
      state.classic =
        saved.classic;
    }

    state.lastDailyWin =
      integer(saved.lastDailyWin)
        ? saved.lastDailyWin
        : null;

    state.points =
      integer(saved.points)
        ? saved.points
        : 0;

    state.totalWins =
      integer(saved.totalWins)
        ? saved.totalWins
        : 0;

    state.dailyWins =
      integer(saved.dailyWins)
        ? saved.dailyWins
        : 0;

    state.streak =
      integer(saved.streak)
        ? saved.streak
        : 0;

    state.bestStreak =
      integer(saved.bestStreak)
        ? saved.bestStreak
        : 0;

    state.firstWins =
      integer(saved.firstWins)
        ? saved.firstWins
        : 0;

    state.classicWins =
      integer(saved.classicWins)
        ? saved.classicWins
        : 0;

    state.classicFirst =
      integer(saved.classicFirst)
        ? Math.min(
            saved.classicFirst,
            state.classicWins
          )
        : 0;
  } catch {}
}

function save() {
  write(
    activeStorageKey,
    JSON.stringify(state)
  );
}

loadState();

function switchProgress(user) {
  const key =
    user
      ? `${KEY}:${user.id}`
      : KEY;

  if (
    activeStorageKey === key
  ) {
    return;
  }

  save();

  activeStorageKey = key;
  state = initialState();

  loadState();

  round = null;
  currentMode = "daily";

  renderAll();
}

function updateDailyStreak() {
  if (
    state.lastDailyWin !==
      today() &&
    state.lastDailyWin !==
      today() - 1
  ) {
    state.streak = 0;
  }
}

function requireOnline() {
  if (!supabaseClient) {
    throw connectionError();
  }
}

/* AUTHENTICATION */

async function signUp(
  username,
  email,
  password
) {
  await ensureOnline();
  requireOnline();

  const cleanUsername =
    String(username || "")
      .trim();

  const cleanEmail =
    String(email || "")
      .trim()
      .toLowerCase();

  if (
    cleanUsername.length < 3 ||
    cleanUsername.length > 20
  ) {
    throw new Error(
      T(
        "Username must be 3–20 characters.",
        "Το username πρέπει να έχει 3–20 χαρακτήρες."
      )
    );
  }

  if (password.length < 6) {
    throw new Error(
      T(
        "Password must have at least 6 characters.",
        "Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες."
      )
    );
  }

  const { data, error } =
    await supabaseClient.auth
      .signUp({
        email: cleanEmail,
        password,

        options: {
          data: {
            username:
              cleanUsername
          }
        }
      });

  if (error) {
    throw error;
  }

  currentUser =
    data.session?.user ?? null;

  if (currentUser) {
    await loadCurrentProfile();
    await mergeGuestProgressIntoAccount();
  }

  return data;
}

async function login(
  email,
  password
) {
  await ensureOnline();
  requireOnline();

  const { data, error } =
    await supabaseClient.auth
      .signInWithPassword({
        email:
          String(email || "")
            .trim()
            .toLowerCase(),

        password
      });

  if (error) {
    throw error;
  }

  currentUser =
    data.user ?? null;

  await loadCurrentProfile();
  await mergeGuestProgressIntoAccount();

  return data;
}

async function logout() {
  if (!supabaseClient) {
    currentUser = null;
    currentProfile = null;

    switchProgress(null);
    renderAuthState();
    renderLeaderboard();

    return;
  }

  const { error } =
    await supabaseClient.auth
      .signOut();

  if (error) {
    throw error;
  }

  currentUser = null;
  currentProfile = null;

  switchProgress(null);
  renderAuthState();

  await loadLeaderboard();
}

async function loadCurrentProfile() {
  switchProgress(
    currentUser
  );

  const userId =
    currentUser?.id;

  currentProfile = null;

  if (
    !currentUser ||
    !supabaseClient
  ) {
    renderAuthState();
    return null;
  }

  const { data, error } =
    await supabaseClient
      .from("profiles")
      .select("*")
      .eq(
        "id",
        currentUser.id
      )
      .single();

  if (error) {
    console.error(
      "Profile error:",
      error
    );

    return null;
  }

  if (
    currentUser?.id !== userId
  ) {
    return null;
  }

  currentProfile = data;

  hydrateProfileCounters();
  renderAuthState();

  return data;
}

async function mergeGuestProgressIntoAccount() {
  if (
    !currentUser ||
    !currentProfile
  ) {
    return;
  }

  hydrateProfileCounters();
  renderAll();

  await loadLeaderboard();
}

function hydrateProfileCounters() {
  if (!currentProfile) return;

  const fields = {
    points: "points",
    totalWins:
      "correct_guesses",
    firstWins: "first_try",
    dailyWins: "daily_wins",
    bestStreak: "best_streak"
  };

  for (
    const [local, remote]
    of Object.entries(fields)
  ) {
    const value =
      currentProfile[remote];

    if (integer(value)) {
      state[local] =
        Math.max(
          state[local],
          value
        );
    }
  }

  updateDailyStreak();
  save();
}

async function saveOnlineStats() {
  if (
    !currentUser ||
    !currentProfile ||
    !supabaseClient
  ) {
    return;
  }

  const userId =
    currentUser.id;

  const stats = {
    points: state.points,

    correct_guesses:
      state.totalWins,

    first_try:
      state.firstWins,

    daily_wins:
      state.dailyWins,

    streak:
      state.streak,

    best_streak:
      state.bestStreak
  };

  const task = async () => {
    if (
      currentUser?.id !== userId
    ) {
      return;
    }

    const { data, error } =
      await supabaseClient
        .from("profiles")
        .update(stats)
        .eq("id", userId)
        .select()
        .single();

    if (error) {
      console.error(
        "Supabase stats error:",
        error
      );

      if ($("onlineSyncNote")) {
        $("onlineSyncNote")
          .textContent =
            T(
              "Saved on this device. Online sync failed; try again later.",
              "Αποθηκεύτηκε στη συσκευή. Ο online συγχρονισμός απέτυχε· δοκίμασε αργότερα."
            );
      }

      return;
    }

    if (
      currentUser?.id !== userId
    ) {
      return;
    }

    currentProfile = data;

    if ($("onlineSyncNote")) {
      $("onlineSyncNote")
        .textContent = "";
    }

    await loadLeaderboard();
  };

  statsQueue =
    statsQueue
      .catch(() => {})
      .then(task);

  return statsQueue;
}

/* AUTH UI */

function setAuthMode(mode) {
  if (authBusy) return;

  authMode =
    mode === "signup"
      ? "signup"
      : "login";

  const signup =
    authMode === "signup";

  for (
    const [
      id,
      isActive,
      label
    ] of [
      [
        "loginTab",
        !signup,
        T(
          "LOG IN",
          "ΣΥΝΔΕΣΗ"
        )
      ],
      [
        "signupTab",
        signup,
        T(
          "SIGN UP",
          "ΕΓΓΡΑΦΗ"
        )
      ]
    ]
  ) {
    const button = $(id);

    if (button) {
      button.classList.toggle(
        "active",
        isActive
      );

      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );

      button.textContent =
        label;
    }
  }

  if ($("accountSubtitle")) {
    $("accountSubtitle")
      .textContent =
        signup
          ? T(
              "Create your player account.",
              "Δημιούργησε τον λογαριασμό σου."
            )
          : T(
              "Log in and continue playing.",
              "Συνδέσου και συνέχισε το παιχνίδι."
            );
  }

  if ($("accountPassword")) {
    $("accountPassword").type =
      "password";

    $("accountPassword")
      .autocomplete =
        signup
          ? "new-password"
          : "current-password";
  }

  if ($("togglePassword")) {
    $("togglePassword")
      .textContent =
        T(
          "SHOW",
          "ΕΜΦΑΝΙΣΗ"
        );

    $("togglePassword")
      .setAttribute(
        "aria-label",
        T(
          "Show password",
          "Εμφάνιση κωδικού"
        )
      );

    $("togglePassword")
      .setAttribute(
        "aria-pressed",
        "false"
      );
  }

  if ($("accountTitle")) {
    $("accountTitle")
      .textContent =
        signup
          ? T(
              "SIGN UP",
              "ΕΓΓΡΑΦΗ"
            )
          : T(
              "LOG IN",
              "ΣΥΝΔΕΣΗ"
            );
  }

  if ($("usernameField")) {
    $("usernameField").hidden =
      !signup;
  }

  if ($("accountUsername")) {
    $("accountUsername").required =
      signup;
  }

  if ($("accountSubmit")) {
    $("accountSubmit")
      .textContent =
        signup
          ? T(
              "Create account →",
              "Δημιουργία λογαριασμού →"
            )
          : T(
              "Log in →",
              "Σύνδεση →"
            );
  }

  if ($("accountMessage")) {
    $("accountMessage")
      .textContent = "";
  }
}

function openAuthModal(mode) {
  setAuthMode(mode);
  openDialog("accountDialog");
}

function renderAuthState() {
  const loginButton =
    $("loginButton");

  const signupButton =
    $("signupButton");

  if (
    !loginButton ||
    !signupButton
  ) {
    return;
  }

  if (
    currentUser &&
    currentProfile
  ) {
    loginButton.textContent =
      currentProfile.username ||
      T(
        "PLAYER",
        "ΠΑΙΚΤΗΣ"
      );

    loginButton.onclick = () => {
      $("leaderboard")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    };

    signupButton.textContent =
      T(
        "LOG OUT",
        "ΑΠΟΣΥΝΔΕΣΗ"
      );

    signupButton.onclick =
      async () => {
        try {
          await logout();
        } catch (error) {
          console.error(error);
          alert(error.message);
        }
      };

    return;
  }

  loginButton.textContent =
    T(
      "LOG IN",
      "ΣΥΝΔΕΣΗ"
    );

  signupButton.textContent =
    T(
      "SIGN UP",
      "ΕΓΓΡΑΦΗ"
    );

  loginButton.onclick = () =>
    openAuthModal("login");

  signupButton.onclick = () =>
    openAuthModal("signup");
}

$("loginTab")
  ?.addEventListener(
    "click",
    () =>
      setAuthMode("login")
  );

$("signupTab")
  ?.addEventListener(
    "click",
    () =>
      setAuthMode("signup")
  );

$("togglePassword")
  ?.addEventListener(
    "click",
    () => {
      const input =
        $("accountPassword");

      if (!input) return;

      const visible =
        input.type ===
        "password";

      input.type =
        visible
          ? "text"
          : "password";

      $("togglePassword")
        .textContent =
          visible
            ? T(
                "HIDE",
                "ΑΠΟΚΡΥΨΗ"
              )
            : T(
                "SHOW",
                "ΕΜΦΑΝΙΣΗ"
              );

      $("togglePassword")
        .setAttribute(
          "aria-pressed",
          String(visible)
        );
    }
  );

if ($("accountForm")) {
  $("accountForm")
    .addEventListener(
      "submit",
      async event => {
        event.preventDefault();

        if (authBusy) return;

        authBusy = true;

        $("loginTab").disabled =
          true;

        $("signupTab").disabled =
          true;

        const username =
          $("accountUsername")
            ?.value.trim() || "";

        const email =
          $("accountEmail")
            ?.value.trim() || "";

        const password =
          $("accountPassword")
            ?.value || "";

        const message =
          $("accountMessage");

        const submit =
          $("accountSubmit");

        if (message) {
          message.textContent = "";
        }

        if (submit) {
          submit.disabled = true;
        }

        try {
          if (
            authMode === "signup"
          ) {
            const data =
              await signUp(
                username,
                email,
                password
              );

            if (!data.session) {
              if (message) {
                message.textContent =
                  T(
                    "Check your email to confirm your account, then log in.",
                    "Έλεγξε το email σου για επιβεβαίωση και μετά συνδέσου."
                  );
              }

              $("accountPassword")
                .value = "";

              return;
            }
          } else {
            await login(
              email,
              password
            );
          }

          if (message) {
            message.textContent =
              authMode === "signup"
                ? T(
                    "Account created successfully.",
                    "Ο λογαριασμός δημιουργήθηκε."
                  )
                : T(
                    "Logged in successfully.",
                    "Η σύνδεση ολοκληρώθηκε."
                  );
          }

          setTimeout(
            () =>
              closeDialog(
                "accountDialog"
              ),
            450
          );

          await loadLeaderboard();
        } catch (error) {
          console.error(error);

          if (message) {
            message.textContent =
              error.message ||
              T(
                "Something went wrong.",
                "Κάτι πήγε στραβά."
              );
          }
        } finally {
          authBusy = false;

          $("loginTab").disabled =
            false;

          $("signupTab").disabled =
            false;

          if (submit) {
            submit.disabled =
              false;
          }
        }
      }
    );
}

if ($("accountGuest")) {
  $("accountGuest").onclick =
    () =>
      closeDialog(
        "accountDialog"
      );
}

async function initializeAuth() {
  if (!supabaseClient) {
    renderAuthState();
    await loadLeaderboard();
    return;
  }

  try {
    const {
      data: { session }
    } =
      await supabaseClient.auth
        .getSession();

    currentUser =
      session?.user ?? null;

    if (currentUser) {
      await loadCurrentProfile();
    } else {
      currentProfile = null;
      renderAuthState();
    }

    await loadLeaderboard();
  } catch (error) {
    console.error(
      "Auth initialization:",
      error
    );

    currentUser = null;
    currentProfile = null;

    renderAuthState();
    await loadLeaderboard();
  }
}

function bindAuthListener() {
  if (
    !supabaseClient ||
    authListenerBound
  ) {
    return;
  }

  authListenerBound = true;

  supabaseClient.auth
    .onAuthStateChange(
      (event, session) => {
        setTimeout(
          async () => {
            currentUser =
              session?.user ??
              null;

            currentProfile = null;

            switchProgress(
              currentUser
            );

            if (currentUser) {
              await loadCurrentProfile();
            }

            renderAuthState();
            await loadLeaderboard();
          },
          0
        );
      }
    );
}

/* PLAYER SELECTION */

function hash(value) {
  let result = 2166136261;

  for (
    let index = 0;
    index < value.length;
    index++
  ) {
    result ^=
      value.charCodeAt(index);

    result =
      Math.imul(
        result,
        16777619
      );
  }

  return result >>> 0;
}

function playerForDay(value) {
  const elapsed =
    value - START;

  const cycle =
    Math.floor(
      elapsed / P.length
    );

  const order =
    [...P].sort(
      (a, b) =>
        hash(
          `multiplex-2026:${cycle}:${a.id}`
        ) -
        hash(
          `multiplex-2026:${cycle}:${b.id}`
        )
    );

  return order[
    (
      (
        elapsed
      ) %
        order.length +
      order.length
    ) %
      order.length
  ];
}

function playerById(id) {
  return (
    P.find(
      player =>
        player.id === id
    ) ||
    P[0]
  );
}

function keyForDay(value) {
  return String(value);
}

function readDailyLock(
  value = today()
) {
  const raw = read(
    `${DAILY_LOCK_PREFIX}${keyForDay(value)}`,
    ""
  );

  if (!raw) return null;

  try {
    const savedRound =
      JSON.parse(raw);

    return (
      valid(savedRound) &&
      savedRound.mode === "daily" &&
      savedRound.status !== "playing"
        ? savedRound
        : null
    );
  } catch {
    return null;
  }
}

function lockDailyRound(
  selectedRound,
  value = today()
) {
  if (
    !selectedRound ||
    selectedRound.mode !== "daily" ||
    selectedRound.status === "playing"
  ) {
    return;
  }

  write(
    `${DAILY_LOCK_PREFIX}${keyForDay(value)}`,
    JSON.stringify(selectedRound)
  );
}

function dailyRound(
  value = today()
) {
  const key =
    keyForDay(value);

  const lockedRound =
    readDailyLock(value);

  if (lockedRound) {
    state.rounds[key] =
      lockedRound;

    save();

    return state.rounds[key];
  }

  if (!state.rounds[key]) {
    state.rounds[key] =
      make(
        playerForDay(value).id,
        "daily"
      );

    save();
  }

  return state.rounds[key];
}

function pointsForAttempt(
  attempt,
  extra = false
) {
  if (extra) return 1;

  return (
    [5, 4, 3, 2][
      attempt - 1
    ] || 0
  );
}

const DAILY_BONUS = 2;

let currentMode = "daily";
let round = null;
let archivePage = 0;
let boardFilter = "overall";

/* LANGUAGE */

function applyLanguage() {
  if (!authBusy) {
    setAuthMode(authMode);
  }

  document.documentElement.lang =
    lang;

  document
    .querySelectorAll(
      "[data-en]"
    )
    .forEach(element => {
      const value =
        lang === "el"
          ? element.dataset.el
          : element.dataset.en;

      if (
        value !== undefined
      ) {
        element.textContent =
          value;
      }
    });

  document
    .querySelectorAll(
      "[data-lang]"
    )
    .forEach(button => {
      button.classList.toggle(
        "selected",
        button.dataset.lang ===
          lang
      );
    });

  renderGames();
  renderAuthState();
  renderLeaderboard();

  if (
    $("gameDialog")?.open
  ) {
    renderGame();
  }
}

document
  .querySelectorAll(
    "[data-lang]"
  )
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        lang =
          button.dataset.lang ===
          "el"
            ? "el"
            : "en";

        write(
          "GMP_LANGUAGE",
          lang
        );

        applyLanguage();
      }
    );
  });

/* GAME CARDS */

function renderGames() {
  const grid =
    $("gameGrid");

  if (!grid) return;

  grid.innerHTML = "";

  GAME_DATA.forEach(game => {
    const card =
      document.createElement(
        game.available
          ? "button"
          : "article"
      );

    card.className =
      "game-card" +
      (
        game.available
          ? " available"
          : ""
      );

    card.dataset.game =
      game.id;

    if (game.available) {
      card.type = "button";
    }

    card.innerHTML = `
      <div
        class="game-card-image"
        aria-hidden="true"
      ></div>

      <span class="card-badge">
        ${
          game.available
            ? T(
                "PLAY NOW",
                "ΠΑΙΞΕ ΤΩΡΑ"
              )
            : T(
                "COMING SOON",
                "ΣΥΝΤΟΜΑ"
              )
        }
      </span>

      <div class="card-info">
        <h3>
          ${esc(game.name)}
        </h3>

        <div class="card-bottom">
          <span>
            ${esc(
              T(
                ...game.description
              )
            )}
          </span>

          <span>
            ${
              game.available
                ? "↗"
                : ""
            }
          </span>
        </div>
      </div>
    `;

    if (game.available) {
      card.addEventListener(
        "click",
        () =>
          openGame(game.id)
      );
    }

    grid.appendChild(card);
  });
}

/* LEADERBOARD */

async function loadLeaderboard() {
  leaderboardError = false;

  if (!supabaseClient) {
    onlineLeaderboard = [];
    renderLeaderboard();
    return;
  }

  try {
    const { data, error } =
      await supabaseClient
        .from("profiles")
        .select(
          "id, username, points, correct_guesses, first_try, streak, best_streak"
        )
        .order(
          "points",
          {
            ascending: false
          }
        )
        .order(
          "correct_guesses",
          {
            ascending: false
          }
        )
        .order(
          "first_try",
          {
            ascending: false
          }
        );

    if (error) {
      throw error;
    }

    onlineLeaderboard =
      (data || []).map(
        profile => ({
          id: profile.id,

          name:
            profile.username,

          points:
            profile.points || 0,

          correct:
            profile
              .correct_guesses ||
            0,

          first:
            profile.first_try ||
            0,

          streak:
            profile.best_streak ||
            profile.streak ||
            0,

          currentUser:
            currentUser
              ? profile.id ===
                currentUser.id
              : false
        })
      );
  } catch (error) {
    console.error(
      "Leaderboard error:",
      error
    );

    onlineLeaderboard = [];
    leaderboardError = true;
  }

  renderLeaderboard();
}

function renderLeaderboard() {
  const rows =
    $("leaderboardRows");

  const currentPlayerBox =
    $("currentPlayerRank");

  if (!rows) return;

  const leaderboard =
    [
      "overall",
      "football"
    ].includes(boardFilter)
      ? [...onlineLeaderboard]
      : [];

  const top10 =
    leaderboard.slice(0, 10);

  rows.innerHTML = "";

  if (!top10.length) {
    rows.innerHTML = `
      <div class="leaderboard-empty">
        <strong>
          ${
            T(
              leaderboardError
                ? "Leaderboard temporarily unavailable."
                : ![
                    "overall",
                    "football"
                  ].includes(
                    boardFilter
                  )
                  ? "This game is in development."
                  : "The leaderboard is waiting for its first players.",

              leaderboardError
                ? "Η κατάταξη δεν είναι προσωρινά διαθέσιμη."
                : ![
                    "overall",
                    "football"
                  ].includes(
                    boardFilter
                  )
                  ? "Αυτό το παιχνίδι είναι σε ανάπτυξη."
                  : "Η κατάταξη περιμένει τους πρώτους παίκτες."
            )
          }
        </strong>

        <p>
          ${
            T(
              leaderboardError
                ? "You can still play as a guest."
                : "Available rankings currently cover Football.",

              leaderboardError
                ? "Μπορείς να συνεχίσεις ως επισκέπτης."
                : "Προς το παρόν υπάρχουν αποτελέσματα μόνο για το Football."
            )
          }
        </p>
      </div>
    `;
  } else {
    top10.forEach(
      (player, index) => {
        const row =
          document.createElement(
            "div"
          );

        row.className =
          "leaderboard-row" +
          (
            player.currentUser
              ? " current-user-row"
              : ""
          );

        row.innerHTML = `
          <span>
            ${index + 1}
          </span>

          <strong>
            ${esc(player.name)}

            ${
              player.currentUser
                ? `<small class="you-badge">${T("YOU", "ΕΣΥ")}</small>`
                : ""
            }
          </strong>

          <span>
            ${player.correct}
          </span>

          <span>
            ${player.first}
          </span>

          <span>
            ${player.streak}
          </span>

          <span class="leader-points">
            ${player.points}
          </span>
        `;

        rows.appendChild(row);
      }
    );
  }

  if (currentPlayerBox) {
    const currentIndex =
      leaderboard.findIndex(
        player =>
          player.currentUser
      );

    if (currentIndex >= 10) {
      const player =
        leaderboard[
          currentIndex
        ];

      currentPlayerBox.hidden =
        false;

      currentPlayerBox
        .innerHTML = `
          <div class="leaderboard-you-divider">
            <span>• • •</span>
          </div>

          <div class="leaderboard-row current-user-row">
            <span>
              ${currentIndex + 1}
            </span>

            <strong>
              ${esc(player.name)}
              <small class="you-badge">
                ${T("YOU", "ΕΣΥ")}
              </small>
            </strong>

            <span>${player.correct}</span>
            <span>${player.first}</span>
            <span>${player.streak}</span>

            <span class="leader-points">
              ${player.points}
            </span>
          </div>
        `;
    } else {
      currentPlayerBox.hidden =
        true;

      currentPlayerBox
        .innerHTML = "";
    }
  }

  renderPodium(leaderboard);
}

function renderPodium(
  leaderboard
) {
  const podium =
    $("leaderboardPodium");

  if (!podium) return;

  const places = [
    {
      index: 1,
      className: "second"
    },
    {
      index: 0,
      className: "first"
    },
    {
      index: 2,
      className: "third"
    }
  ];

  podium.innerHTML = "";

  places.forEach(
    ({
      index,
      className
    }) => {
      const player =
        leaderboard[index] || {
          name: "—",
          points: 0
        };

      const item =
        document.createElement(
          "article"
        );

      item.className =
        `podium-player ${className}`;

      item.innerHTML = `
        ${
          className === "first"
            ? `<span class="podium-crown">♛</span>`
            : ""
        }

        <span class="podium-position">
          ${index + 1}
        </span>

        <div class="podium-avatar">
          ${
            esc(
              (
                player.name ||
                "?"
              )
                .charAt(0)
                .toUpperCase()
            )
          }
        </div>

        <strong>
          ${esc(player.name)}

          ${
            player.currentUser
              ? `<small class="you-badge">${T("YOU", "ΕΣΥ")}</small>`
              : ""
          }
        </strong>

        <span>
          ${player.points} pts
        </span>
      `;

      podium.appendChild(item);
    }
  );
}

document
  .querySelectorAll(
    "[data-board]"
  )
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        boardFilter =
          button.dataset.board ||
          "overall";

        document
          .querySelectorAll(
            "[data-board]"
          )
          .forEach(item => {
            item.classList.toggle(
              "selected",
              item === button
            );
          });

        renderLeaderboard();
      }
    );
  });

if ($("leaderboardButton")) {
  $("leaderboardButton").onclick =
    () => {
      $("leaderboard")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
    };
}

/* DIALOG CONTROLS */

function openDialog(id) {
  const dialog = $(id);

  if (
    dialog &&
    !dialog.open
  ) {
    dialog.showModal();
  }
}

function closeDialog(id) {
  const dialog = $(id);

  if (dialog?.open) {
    dialog.close();
  }
}

document
  .querySelectorAll(
    "[data-close]"
  )
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        closeDialog(
          button.dataset.close
        );
      }
    );
  });

document
  .querySelectorAll("dialog")
  .forEach(dialog => {
    dialog.addEventListener(
      "click",
      event => {
        if (
          event.target !== dialog
        ) {
          return;
        }

        const rect =
          dialog
            .getBoundingClientRect();

        if (
          event.clientX <
            rect.left ||
          event.clientX >
            rect.right ||
          event.clientY <
            rect.top ||
          event.clientY >
            rect.bottom
        ) {
          dialog.close();
        }
      }
    );
  });

if ($("pointsInfoButton")) {
  $("pointsInfoButton").onclick =
    () => {
      openDialog(
        "pointsDialog"
      );
    };
}

if ($("closePointsDialog")) {
  $("closePointsDialog").onclick =
    () => {
      closeDialog(
        "pointsDialog"
      );
    };
}

document
  .querySelectorAll(
    "[data-auth]"
  )
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        if (currentUser) return;

        openAuthModal(
          button.dataset.auth ===
            "signup"
            ? "signup"
            : "login"
        );
      }
    );
  });
/* ROUND SELECTION */

function newClassicRound() {
  const previous =
    state.classic?.pid;

  let pool =
    P.filter(
      player =>
        player.id !== previous
    );

  if (!pool.length) {
    pool = P;
  }

  const player =
    pool[
      Math.floor(
        Math.random() *
        pool.length
      )
    ];

  state.classic =
    make(
      player.id,
      "classic"
    );

  save();

  return state.classic;
}

function selectRound(mode) {
  currentMode = mode;

  if (mode === "daily") {
    round =
      dailyRound(today());

    return;
  }

  if (mode === "classic") {
    round =
      !state.classic ||
      state.classic.status !==
        "playing"
        ? newClassicRound()
        : state.classic;

    return;
  }

  round = null;
}

function openGame(id) {
  if (id !== "football") {
    return;
  }

  currentMode = "daily";

  selectRound("daily");
  openDialog("gameDialog");
  renderGame();
}

if ($("dailyLaunchButton")) {
  $("dailyLaunchButton").onclick =
    () => {
      currentMode = "daily";
      selectRound("daily");
      openDialog("gameDialog");
      renderGame();
    };
}

function modeText(mode) {
  if (mode === "daily") {
    return T(
      "Today's player. Same challenge for everyone. Solve it and earn a +2 Daily Bonus.",
      "Ο παίκτης της ημέρας. Ίδιο challenge για όλους. Βρες τον και κέρδισε +2 Daily Bonus."
    );
  }

  if (mode === "classic") {
    return T(
      "Unlimited rounds. A new player every round. Keep playing without a daily limit.",
      "Unlimited γύροι. Νέος παίκτης σε κάθε γύρο. Παίξε χωρίς ημερήσιο όριο."
    );
  }

  return T(
    "Play previous Daily challenges.",
    "Παίξε προηγούμενα Daily challenges."
  );
}

/* GAME VIEW */

function renderGame() {
  document
    .querySelectorAll(
      "[data-mode]"
    )
    .forEach(button => {
      button.classList.toggle(
        "selected",
        button.dataset.mode ===
          currentMode
      );
    });

  if ($("gameCategory")) {
    $("gameCategory").textContent =
      "FOOTBALL · WHO AM I?";
  }

  if ($("gameTitle")) {
    $("gameTitle").textContent =
      T(
        "GUESS THE PLAYER",
        "ΜΑΝΤΕΨΕ ΤΟΝ ΠΑΙΚΤΗ"
      );
  }

  if ($("modeDescription")) {
    $("modeDescription")
      .textContent =
        modeText(currentMode);
  }

  renderSupply();

  if (
    currentMode === "archive" &&
    !round
  ) {
    if ($("archivePicker")) {
      $("archivePicker").hidden =
        false;
    }

    if ($("roundArea")) {
      $("roundArea").hidden =
        true;
    }

    renderArchive();
    return;
  }

  if ($("archivePicker")) {
    $("archivePicker").hidden =
      true;
  }

  if ($("roundArea")) {
    $("roundArea").hidden =
      false;
  }

  if (!round) {
    selectRound(currentMode);
  }

  renderRound();
}

document
  .querySelectorAll(
    "[data-mode]"
  )
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        currentMode =
          button.dataset.mode;

        if (
          currentMode ===
          "archive"
        ) {
          round = null;
        } else {
          selectRound(
            currentMode
          );
        }

        renderGame();
      }
    );
  });

function renderSupply() {
  if (
    !$("supplyLabel") ||
    !$("supplyValue") ||
    !$("supplyDetail")
  ) {
    return;
  }

  if (
    currentMode === "daily"
  ) {
    $("supplyLabel")
      .textContent = "DAILY";

    $("supplyValue")
      .textContent =
        T(
          "TODAY",
          "ΣΗΜΕΡΑ"
        );

    $("supplyDetail")
      .textContent =
        T(
          "+2 bonus when solved",
          "+2 bonus όταν το βρεις"
        );

    return;
  }

  if (
    currentMode === "classic"
  ) {
    $("supplyLabel")
      .textContent =
        "UNLIMITED";

    $("supplyValue")
      .textContent = "∞";

    $("supplyDetail")
      .textContent =
        T(
          "No daily limit",
          "Χωρίς ημερήσιο όριο"
        );

    return;
  }

  $("supplyLabel")
    .textContent =
      T(
        "PAST DAILIES",
        "ΠΑΛΙΑ DAILY"
      );

  $("supplyValue")
    .textContent = "↶";

  $("supplyDetail")
    .textContent =
      T(
        "Previous challenges",
        "Προηγούμενα challenges"
      );
}

function attemptsRemaining(
  selectedRound
) {
  if (
    !selectedRound ||
    selectedRound.status !==
      "playing"
  ) {
    return 0;
  }

  const normal =
    Math.max(
      0,
      4 -
        selectedRound.attempts
    );

  if (normal > 0) {
    return normal;
  }

  if (
    selectedRound.extra &&
    !selectedRound.extraUsed
  ) {
    return 1;
  }

  return 0;
}

function visibleClues(
  selectedRound
) {
  if (!selectedRound) {
    return 1;
  }

  if (
    selectedRound.status !==
      "playing"
  ) {
    return 4;
  }

  return Math.min(
    4,
    Math.max(
      1,
      selectedRound.attempts +
        1
    )
  );
}

function renderRound() {
  if (!round) return;

  const player =
    playerById(round.pid);

  if ($("roundLabel")) {
    $("roundLabel")
      .textContent =
        currentMode === "daily"
          ? T(
              "TODAY'S PLAYER",
              "ΠΑΙΚΤΗΣ ΤΗΣ ΗΜΕΡΑΣ"
            )
          : currentMode ===
              "classic"
            ? "UNLIMITED"
            : T(
                "PAST DAILY",
                "ΠΑΛΙΟ DAILY"
              );
  }

  if ($("attemptsLeft")) {
    $("attemptsLeft")
      .textContent =
        round.status ===
          "playing"
          ? T(
              `${attemptsRemaining(round)} guesses left`,
              `Απομένουν ${attemptsRemaining(round)} προσπάθειες`
            )
          : T(
              "CHALLENGE COMPLETE",
              "ΤΕΛΟΣ CHALLENGE"
            );
  }

  renderDots();
  renderTeaser(player);
  renderClues(player);
  renderHistory();
  renderResult(player);

  renderPlayerReveal(
    player,
    round
  );

  renderReward();
  renderActions();
}

function renderDots() {
  const box =
    $("attemptDots");

  if (!box) return;

  box.innerHTML = "";

  for (
    let index = 0;
    index < 4;
    index++
  ) {
    const dot =
      document.createElement(
        "span"
      );

    if (
      index < round.attempts
    ) {
      dot.classList.add(
        "used"
      );
    }

    box.appendChild(dot);
  }

  if (round.extra) {
    const dot =
      document.createElement(
        "span"
      );

    dot.classList.add(
      "extra"
    );

    if (round.extraUsed) {
      dot.classList.add(
        "used"
      );
    }

    box.appendChild(dot);
  }
}

function renderTeaser(player) {
  if ($("teaserText")) {
    $("teaserText")
      .textContent =
        T(...player.teaser);
  }
}

function renderClues(player) {
  const grid =
    $("clueGrid");

  if (!grid) return;

  grid.innerHTML = "";

  const visible =
    visibleClues(round);

  player.clues.forEach(
    (clue, index) => {
      const item =
        document.createElement(
          "article"
        );

      item.className = "clue";

      if (index >= visible) {
        item.classList.add(
          "locked"
        );
      }

      item.innerHTML = `
        <small>
          ${T("CLUE", "ΣΤΟΙΧΕΙΟ")}
          ${index + 1}
        </small>

        <strong>
          ${
            index < visible
              ? esc(T(...clue))
              : esc(
                  T(
                    "Unlocks after your next guess",
                    "Ξεκλειδώνει μετά την επόμενη προσπάθεια"
                  )
                )
          }
        </strong>
      `;

      grid.appendChild(item);
    }
  );

  if ($("clueHelp")) {
    $("clueHelp")
      .textContent =
        round.status ===
          "playing"
          ? T(
              "Each wrong guess reveals another clue.",
              "Κάθε λάθος απάντηση αποκαλύπτει ένα ακόμη στοιχείο."
            )
          : "";
  }
}

function renderHistory() {
  const box =
    $("guessHistory");

  if (!box) return;

  box.innerHTML = "";

  round.guesses.forEach(
    guess => {
      const item =
        document.createElement(
          "span"
        );

      item.textContent =
        guess;

      box.appendChild(item);
    }
  );
}

/* GUESS VALIDATION */

function isCorrect(
  player,
  value
) {
  const guess =
    norm(value);

  if (!guess) {
    return false;
  }

  return [
    player.name,
    ...player.aliases
  ].some(
    answer =>
      norm(answer) === guess
  );
}

function submitGuess(value) {
  if (
    currentMode === "daily"
  ) {
    tick();
  }

  if (
    !round ||
    round.status !==
      "playing" ||
    attemptsRemaining(round) ===
      0
  ) {
    return;
  }

  const guess =
    String(value || "")
      .trim();

  if (!guess) return;

  const player =
    playerById(round.pid);

  round.guesses.push(guess);

  const extraAttempt =
    round.attempts >= 4 &&
    round.extra &&
    !round.extraUsed;

  if (extraAttempt) {
    round.extraUsed = true;
  } else {
    round.attempts++;
  }

  if (
    isCorrect(
      player,
      guess
    )
  ) {
    winRound(extraAttempt);
    return;
  }

  if (extraAttempt) {
    loseRound();
    return;
  }

  save();
  renderRound();
}

/* ROUND RESULTS */

async function winRound(
  extraAttempt
) {
  if (
    !round ||
    round.status !==
      "playing"
  ) {
    return;
  }

  const attempt =
    extraAttempt
      ? 5
      : Math.max(
          1,
          round.attempts
        );

  const earned =
    pointsForAttempt(
      attempt,
      extraAttempt
    );

  const bonus =
    round.mode === "daily" &&
    state.rounds[
      keyForDay(today())
    ] === round
      ? DAILY_BONUS
      : 0;

  round.status = "won";
  round.points = earned;
  round.bonus = bonus;

  round.completedAt =
    Date.now();

  state.points +=
    earned + bonus;

  state.totalWins++;

  if (
    round.mode === "daily" &&
    state.rounds[
      keyForDay(today())
    ] === round
  ) {
    state.dailyWins++;

    state.streak =
      state.lastDailyWin ===
        today() - 1
        ? state.streak + 1
        : 1;

    state.lastDailyWin =
      today();

    state.bestStreak =
      Math.max(
        state.bestStreak,
        state.streak
      );
  }

  lockDailyRound(round);

  if (
    round.mode === "classic"
  ) {
    state.classicWins++;
  }

  if (
    !extraAttempt &&
    attempt === 1
  ) {
    state.firstWins++;

    if (
      round.mode === "classic"
    ) {
      state.classicFirst++;
    }
  }

  save();
  confetti();
  renderAll();

  if (
    currentUser &&
    supabaseClient
  ) {
    await saveOnlineStats();
  }
}

async function loseRound() {
  if (
    !round ||
    round.status !==
      "playing"
  ) {
    return;
  }

  round.status = "lost";

  round.completedAt =
    Date.now();

  if (
    round.mode === "daily"
  ) {
    state.streak = 0;
  }

  lockDailyRound(round);

  save();
  renderAll();

  if (
    currentUser &&
    supabaseClient
  ) {
    await saveOnlineStats();
  }
}

async function revealRound() {
  if (
    !round ||
    round.status !==
      "playing"
  ) {
    return;
  }

  round.status = "givenup";

  round.completedAt =
    Date.now();

  if (
    round.mode === "daily"
  ) {
    state.streak = 0;
  }

  lockDailyRound(round);

  save();
  renderAll();

  if (
    currentUser &&
    supabaseClient
  ) {
    await saveOnlineStats();
  }
}

function renderResult(player) {
  const result =
    $("result");

  if (!result) return;

  result.className =
    "result";

  if (
    round.status ===
      "playing"
  ) {
    result.innerHTML = "";
    return;
  }

  if (
    round.status === "won"
  ) {
    const total =
      (round.points || 0) +
      (round.bonus || 0);

    result.classList.add(
      "success"
    );

    result.innerHTML = `
      <strong>
        ${T("CORRECT!", "ΣΩΣΤΟ!")}
      </strong>

      <span>
        ${
          T(
            `You earned ${total} points.`,
            `Κέρδισες ${total} πόντους.`
          )
        }
      </span>
    `;

    return;
  }

  if (
    round.status === "givenup"
  ) {
    result.innerHTML = `
      <strong>
        ${
          T(
            "PLAYER REVEALED",
            "ΑΠΟΚΑΛΥΨΗ ΠΑΙΚΤΗ"
          )
        }
      </strong>

      <span>
        ${esc(player.name)}
      </span>
    `;

    return;
  }

  result.innerHTML = `
    <strong>
      ${T(
        "ROUND OVER",
        "ΤΕΛΟΣ ΓΥΡΟΥ"
      )}
    </strong>

    <span>
      ${
        T(
          "The player was",
          "Ο παίκτης ήταν"
        )
      }
      ${esc(player.name)}.
    </span>
  `;
}

/* PLAYER REVEAL */

function ageFromBirth(
  birthDate
) {
  if (!birthDate) {
    return "—";
  }

  const birth =
    new Date(
      `${birthDate}T12:00:00`
    );

  const now =
    new Date();

  let age =
    now.getFullYear() -
    birth.getFullYear();

  const beforeBirthday =
    now.getMonth() <
      birth.getMonth() ||
    (
      now.getMonth() ===
        birth.getMonth() &&
      now.getDate() <
        birth.getDate()
    );

  if (beforeBirthday) {
    age--;
  }

  return age;
}

function initials(name) {
  return String(name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(
      word =>
        word.charAt(0)
    )
    .join("")
    .toUpperCase();
}

function isGoalkeeper(player) {
  return (
    /goalkeeper|τερματοφυλακ/i
      .test(
        norm(
          T(
            ...player.position
          )
        )
      )
  );
}

function renderPlayerReveal(
  player,
  selectedRound
) {
  const panel =
    $("playerReveal");

  if (!panel) return;

  const finished =
    selectedRound.status !==
      "playing";

  panel.hidden = !finished;

  if (!finished) {
    return;
  }

  const keeper =
    isGoalkeeper(player);

  if ($("revealStatusIcon")) {
    $("revealStatusIcon")
      .textContent =
        selectedRound.status ===
          "won"
          ? "✓"
          : "○";
  }

  if ($("revealStatusText")) {
    $("revealStatusText")
      .textContent =
        selectedRound.status ===
          "won"
          ? T(
              "CORRECT",
              "ΣΩΣΤΟ"
            )
          : T(
              "PLAYER REVEAL",
              "ΑΠΟΚΑΛΥΨΗ ΠΑΙΚΤΗ"
            );
  }

  if ($("revealPoints")) {
    const total =
      (
        selectedRound.points ||
        0
      ) +
      (
        selectedRound.bonus ||
        0
      );

    $("revealPoints")
      .textContent =
        selectedRound.status ===
          "won"
          ? `+${total} ${T("POINTS", "ΠΟΝΤΟΙ")}`
          : "";
  }

  if ($("revealName")) {
    $("revealName")
      .textContent =
        player.name;
  }

  if ($("revealMeta")) {
    $("revealMeta")
      .textContent =
        `${T(...player.nation)} · ${T(...player.position)}`;
  }

  if ($("revealAge")) {
    $("revealAge")
      .textContent =
        ageFromBirth(
          player.birthDate
        );
  }

  if ($("revealGoals")) {
    $("revealGoals")
      .textContent =
        player.goals ?? "—";
  }

  if ($("revealAssists")) {
    $("revealAssists")
      .textContent =
        player.assists ?? "—";
  }

  if ($("revealCleanSheets")) {
    $("revealCleanSheets")
      .textContent =
        player.cleanSheets ??
        "—";
  }

  if ($("revealMarketValue")) {
    $("revealMarketValue")
      .textContent =
        player
          .highestMarketValue ??
        "—";
  }

  if ($("goalsStat")) {
    $("goalsStat").hidden =
      keeper ||
      player.goals == null;
  }

  if ($("assistsStat")) {
    $("assistsStat").hidden =
      keeper ||
      player.assists == null;
  }

  if ($("cleanSheetsStat")) {
    $("cleanSheetsStat").hidden =
      !keeper ||
      player.cleanSheets == null;
  }

  const marketStat =
    $("revealMarketValue")
      ?.parentElement;

  if (marketStat) {
    marketStat.hidden =
      player
        .highestMarketValue ==
      null;
  }

  renderRevealPhoto(player);
  renderClubs(player);
}

function renderRevealPhoto(
  player
) {
  const photo =
    $("revealPhoto");

  const text =
    $("revealInitials");

  if (!photo) return;

  if (player.image) {
    photo.style
      .backgroundImage =
        `url("${player.image}")`;

    photo.classList.add(
      "has-photo"
    );

    if (text) {
      text.hidden = true;
    }

    return;
  }

  photo.style
    .backgroundImage = "";

  photo.classList.remove(
    "has-photo"
  );

  if (text) {
    text.hidden = false;

    text.textContent =
      initials(player.name);
  }
}

function renderClubs(player) {
  const box =
    $("revealClubs");

  if (!box) return;

  box.innerHTML = "";

  if (
    !player.clubs?.length
  ) {
    box.textContent = "—";
    return;
  }

  player.clubs.forEach(
    (club, index) => {
      const pill =
        document.createElement(
          "span"
        );

      pill.className =
        "club-pill";

      pill.textContent =
        club;

      box.appendChild(pill);

      if (
        index <
        player.clubs.length - 1
      ) {
        const arrow =
          document.createElement(
            "span"
          );

        arrow.className =
          "club-arrow";

        arrow.textContent = "→";

        box.appendChild(arrow);
      }
    }
  );
}

/* EXTRA GUESS */

function renderReward() {
  const button =
    $("rewardBtn");

  const note =
    $("rewardNote");

  if (
    !button ||
    !note ||
    !round
  ) {
    return;
  }

  const eligible =
    round.status ===
      "playing" &&
    round.attempts >= 4 &&
    !round.extra;

  button.disabled =
    !eligible;

  if (
    round.extra &&
    !round.extraUsed
  ) {
    note.textContent =
      T(
        "Extra guess unlocked · worth 1 point.",
        "Extra προσπάθεια ξεκλειδώθηκε · αξίζει 1 πόντο."
      );

    return;
  }

  if (eligible) {
    note.textContent =
      T(
        "Unlock one final guess.",
        "Ξεκλείδωσε μία τελευταία προσπάθεια."
      );

    return;
  }

  note.textContent = "";
}

function unlockExtra() {
  if (
    !round ||
    round.status !==
      "playing" ||
    round.attempts < 4 ||
    round.extra
  ) {
    return;
  }

  round.extra = true;

  save();
  renderRound();
}

function renderActions() {
  if (!round) return;

  const playing =
    round.status ===
      "playing";

  const noGuesses =
    !playing ||
    attemptsRemaining(round) ===
      0;

  if ($("guessInput")) {
    $("guessInput").disabled =
      noGuesses;
  }

  if ($("guessButton")) {
    $("guessButton").disabled =
      noGuesses;
  }

  if ($("guessForm")) {
    $("guessForm").hidden =
      !playing;
  }

  if ($("revealBtn")) {
    $("revealBtn").hidden =
      !playing;
  }

  if ($("nextBtn")) {
    $("nextBtn").hidden =
      !(
        !playing &&
        round.mode ===
          "classic"
      );
  }

  if ($("afterDailyBtn")) {
    $("afterDailyBtn").hidden =
      !(
        !playing &&
        round.mode ===
          "daily"
      );
  }
}

if ($("guessForm")) {
  $("guessForm")
    .addEventListener(
      "submit",
      event => {
        event.preventDefault();

        const input =
          $("guessInput");

        if (!input) return;

        const value =
          input.value;

        input.value = "";

        submitGuess(value);

        if (
          round?.status ===
          "playing"
        ) {
          input.focus();
        }
      }
    );
}

if ($("rewardBtn")) {
  $("rewardBtn").onclick =
    unlockExtra;
}

if ($("revealBtn")) {
  $("revealBtn").onclick =
    revealRound;
}

if ($("nextBtn")) {
  $("nextBtn").onclick =
    () => {
      currentMode =
        "classic";

      round =
        newClassicRound();

      renderGame();
    };
}

if ($("afterDailyBtn")) {
  $("afterDailyBtn").onclick =
    () => {
      currentMode =
        "classic";

      round =
        newClassicRound();

      renderGame();
    };
}

/* ARCHIVE */

function renderArchive() {
  const box =
    $("archiveChoices");

  if (!box) return;

  box.innerHTML = "";

  const now = today();
  const pageSize = 12;

  const start =
    1 +
    archivePage *
      pageSize;

  let created = 0;

  for (
    let index = start;
    index <
      start + pageSize;
    index++
  ) {
    const selectedDay =
      now - index;

    if (
      selectedDay < START
    ) {
      break;
    }

    const date =
      new Date(
        selectedDay * DAY
      );

    const button =
      document.createElement(
        "button"
      );

    button.type = "button";

    button.innerHTML = `
      <strong>
        ${
          date.toLocaleDateString(
            lang === "el"
              ? "el-GR"
              : "en-GB",
            {
              day: "2-digit",
              month: "short"
            }
          )
        }
      </strong>
    `;

    button.onclick = () => {
      const key =
        keyForDay(selectedDay);

      if (!state.rounds[key]) {
        state.rounds[key] =
          make(
            playerForDay(
              selectedDay
            ).id,
            "archive"
          );

        save();
      }

      round =
        state.rounds[key];

      if (
        round.status ===
          "playing"
      ) {
        round.mode = "archive";
      }

      if ($("archivePicker")) {
        $("archivePicker").hidden =
          true;
      }

      if ($("roundArea")) {
        $("roundArea").hidden =
          false;
      }

      renderRound();
    };

    box.appendChild(button);
    created++;
  }

  if ($("archiveEmpty")) {
    $("archiveEmpty")
      .textContent =
        created
          ? ""
          : T(
              "No older Daily challenges yet.",
              "Δεν υπάρχουν παλαιότερα Daily challenges ακόμη."
            );
  }

  if ($("archiveOlder")) {
    $("archiveOlder").disabled =
      now -
        (
          start +
          pageSize
        ) <
      START;
  }

  if ($("archiveNewer")) {
    $("archiveNewer").disabled =
      archivePage <= 0;
  }
}

if ($("archiveOlder")) {
  $("archiveOlder").onclick =
    () => {
      archivePage++;
      renderArchive();
    };
}

if ($("archiveNewer")) {
  $("archiveNewer").onclick =
    () => {
      archivePage =
        Math.max(
          0,
          archivePage - 1
        );

      renderArchive();
    };
}

/* EFFECTS */

function confetti() {
  const box =
    $("confetti");

  if (!box) return;

  box.innerHTML = "";

  for (
    let index = 0;
    index < 28;
    index++
  ) {
    const piece =
      document.createElement(
        "i"
      );

    piece.style.setProperty(
      "--left",
      `${Math.random() * 100}%`
    );

    piece.style.setProperty(
      "--delay",
      `${Math.random() * 0.35}s`
    );

    piece.style.setProperty(
      "--drift",
      `${-100 + Math.random() * 200}px`
    );

    piece.style.setProperty(
      "--spin",
      `${180 + Math.random() * 720}deg`
    );

    box.appendChild(piece);
  }

  setTimeout(
    () => {
      box.innerHTML = "";
    },
    2600
  );
}

/* DAILY RESET */

function secondsToDaily() {
  const now = Date.now();

  const next =
    (today() + 1) * DAY;

  return Math.max(
    0,
    Math.floor(
      (next - now) / 1000
    )
  );
}

function clock(seconds) {
  const hours =
    Math.floor(
      seconds / 3600
    );

  const minutes =
    Math.floor(
      (
        seconds % 3600
      ) / 60
    );

  const remainingSeconds =
    seconds % 60;

  return [
    hours,
    minutes,
    remainingSeconds
  ]
    .map(
      value =>
        String(value)
          .padStart(2, "0")
    )
    .join(":");
}

let lastDay = today();

function tick() {
  updateDailyStreak();

  if ($("dailyClock")) {
    $("dailyClock")
      .textContent =
        clock(
          secondsToDaily()
        );
  }

  const nowDay =
    today();

  if (
    nowDay !== lastDay
  ) {
    lastDay = nowDay;

    if (
      currentMode === "daily"
    ) {
      round =
        dailyRound(nowDay);

      if (
        $("gameDialog")?.open
      ) {
        renderGame();
      }
    }
  }
}

/* START */

if ($("donateLink")) {
  $("donateLink").href =
    REVOLUT_URL;
}

function renderAll() {
  renderGames();
  renderLeaderboard();
  renderAuthState();

  if (
    $("gameDialog")?.open
  ) {
    renderGame();
  }
}

/*
  FIRST PAINT:
  Η εφαρμογή εμφανίζεται πριν
  ξεκινήσει οποιαδήποτε σύνδεση.
*/

applyLanguage();
renderAll();
tick();

setInterval(
  tick,
  1000
);

/*
  Το Supabase φορτώνεται μετά
  την εμφάνιση της εφαρμογής.
*/

async function initializeOnline() {
  try {
    await ensureOnline();

    bindAuthListener();

    await initializeAuth();
  } catch (error) {
    console.warn(
      "Supabase unavailable — guest mode:",
      error
    );

    currentUser = null;
    currentProfile = null;
    onlineLeaderboard = [];
    leaderboardError = true;

    renderAuthState();
    renderLeaderboard();
  }
}

window.addEventListener(
  "load",
  () => {
    setTimeout(
      initializeOnline,
      100
    );
  },
  {
    once: true
  }
);

document.addEventListener(
  "visibilitychange",
  () => {
    if (document.hidden) {
      return;
    }

    tick();

    if (
      supabaseClient &&
      currentUser
    ) {
      loadCurrentProfile();
      loadLeaderboard();
    }
  }
);
