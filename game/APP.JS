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
  },
{
  "id": "gerdmuller",
  "name": "Gerd Müller",
  "aliases": [
    "gerd muller",
    "gerd müller",
    "muller",
    "γκερντ μιλερ",
    "γκερντ μύλλερ"
  ],
  "nation": [
    "Germany",
    "Γερμανία"
  ],
  "position": [
    "Striker",
    "Σέντερ φορ"
  ],
  "teaser": [
    "The penalty area was my natural habitat.",
    "Η μεγάλη περιοχή ήταν το φυσικό μου περιβάλλον."
  ],
  "clues": [
    [
      "I was born in Nördlingen.",
      "Γεννήθηκα στο Νέρντλινγκεν."
    ],
    [
      "I joined Bayern Munich in 1964.",
      "Πήγα στην Bayern Munich το 1964."
    ],
    [
      "I won three consecutive European Cups with Bayern.",
      "Κέρδισα τρία συνεχόμενα Κύπελλα Πρωταθλητριών με την Bayern."
    ],
    [
      "My career also took me to Fort Lauderdale Strikers.",
      "Η καριέρα μου με έφερε και στους Fort Lauderdale Strikers."
    ]
  ],
  "birthDate": "1945-11-03",
  "highestMarketValue": null,
  "status": "retired",
  "goals": null,
  "assists": null,
  "cleanSheets": null,
  "clubs": [
    "TSV 1861 Nördlingen",
    "Bayern Munich",
    "Fort Lauderdale Strikers"
  ],
  "image": null,
  "source": "https://fcbayern.com/en/club/hall-of-fame/gerd-muller"
}
];

// Unlimited-only additions; preserve the original Daily schedule.
const UNLIMITED_PLAYERS = [...[
  {
    "id": "neymar",
    "name": "Neymar",
    "aliases": [
      "Neymar",
      "Neymar",
      "νεϊμαρ"
    ],
    "nation": [
      "Brazil",
      "Βραζιλία"
    ],
    "position": [
      "Forward",
      "Επιθετικός"
    ],
    "teaser": [
      "My role on the pitch: forward.",
      "Η θέση μου στο γήπεδο: Επιθετικός."
    ],
    "clues": [
      [
        "My international team: Brazil.",
        "Η εθνική μου ομάδα: Βραζιλία."
      ],
      [
        "Santos is part of my club career.",
        "Η Santos αποτελεί σταθμό της καριέρας μου."
      ],
      [
        "I have worn the shirt of Barcelona.",
        "Έχω φορέσει τη φανέλα της Barcelona."
      ],
      [
        "Another club on my journey was Paris Saint-Germain.",
        "Μία ακόμη ομάδα στην πορεία μου ήταν η Paris Saint-Germain."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Santos",
      "Barcelona",
      "Paris Saint-Germain"
    ],
    "image": null
  },
  {
    "id": "suarez",
    "name": "Luis Suárez",
    "aliases": [
      "Luis Suárez",
      "Suárez",
      "σουαρες"
    ],
    "nation": [
      "Uruguay",
      "Ουρουγουάη"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "My role on the pitch: striker.",
      "Η θέση μου στο γήπεδο: Σέντερ φορ."
    ],
    "clues": [
      [
        "Ajax is part of my club career.",
        "Η Ajax αποτελεί σταθμό της καριέρας μου."
      ],
      [
        "I have worn the shirt of Liverpool.",
        "Έχω φορέσει τη φανέλα της Liverpool."
      ],
      [
        "Another club on my journey was Barcelona.",
        "Μία ακόμη ομάδα στην πορεία μου ήταν η Barcelona."
      ],
      [
        "My international team: Uruguay.",
        "Η εθνική μου ομάδα: Ουρουγουάη."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Ajax",
      "Liverpool",
      "Barcelona"
    ],
    "image": null
  },
  {
    "id": "lewandowski",
    "name": "Robert Lewandowski",
    "aliases": [
      "Robert Lewandowski",
      "Lewandowski",
      "λεβαντοφσκι"
    ],
    "nation": [
      "Poland",
      "Πολωνία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "My role on the pitch: striker.",
      "Η θέση μου στο γήπεδο: Σέντερ φορ."
    ],
    "clues": [
      [
        "I have worn the shirt of Bayern Munich.",
        "Έχω φορέσει τη φανέλα της Bayern Munich."
      ],
      [
        "Another club on my journey was Barcelona.",
        "Μία ακόμη ομάδα στην πορεία μου ήταν η Barcelona."
      ],
      [
        "My international team: Poland.",
        "Η εθνική μου ομάδα: Πολωνία."
      ],
      [
        "Borussia Dortmund is part of my club career.",
        "Η Borussia Dortmund αποτελεί σταθμό της καριέρας μου."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Borussia Dortmund",
      "Bayern Munich",
      "Barcelona"
    ],
    "image": null
  },
  {
    "id": "benzema",
    "name": "Karim Benzema",
    "aliases": [
      "Karim Benzema",
      "Benzema",
      "μπενζεμα"
    ],
    "nation": [
      "France",
      "Γαλλία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "My role on the pitch: striker.",
      "Η θέση μου στο γήπεδο: Σέντερ φορ."
    ],
    "clues": [
      [
        "My international team: France.",
        "Η εθνική μου ομάδα: Γαλλία."
      ],
      [
        "Lyon is part of my club career.",
        "Η Lyon αποτελεί σταθμό της καριέρας μου."
      ],
      [
        "I have worn the shirt of Real Madrid.",
        "Έχω φορέσει τη φανέλα της Real Madrid."
      ],
      [
        "Another club on my journey was Al-Ittihad.",
        "Μία ακόμη ομάδα στην πορεία μου ήταν η Al-Ittihad."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Lyon",
      "Real Madrid",
      "Al-Ittihad"
    ],
    "image": null
  },
  {
    "id": "salah",
    "name": "Mohamed Salah",
    "aliases": [
      "Mohamed Salah",
      "Salah",
      "σαλαχ"
    ],
    "nation": [
      "Egypt",
      "Αίγυπτος"
    ],
    "position": [
      "Forward",
      "Επιθετικός"
    ],
    "teaser": [
      "My role on the pitch: forward.",
      "Η θέση μου στο γήπεδο: Επιθετικός."
    ],
    "clues": [
      [
        "Basel is part of my club career.",
        "Η Basel αποτελεί σταθμό της καριέρας μου."
      ],
      [
        "I have worn the shirt of Roma.",
        "Έχω φορέσει τη φανέλα της Roma."
      ],
      [
        "Another club on my journey was Liverpool.",
        "Μία ακόμη ομάδα στην πορεία μου ήταν η Liverpool."
      ],
      [
        "My international team: Egypt.",
        "Η εθνική μου ομάδα: Αίγυπτος."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Basel",
      "Roma",
      "Liverpool"
    ],
    "image": null
  },
  {
    "id": "mane",
    "name": "Sadio Mané",
    "aliases": [
      "Sadio Mané",
      "Mané",
      "μανε"
    ],
    "nation": [
      "Senegal",
      "Σενεγάλη"
    ],
    "position": [
      "Forward",
      "Επιθετικός"
    ],
    "teaser": [
      "My role on the pitch: forward.",
      "Η θέση μου στο γήπεδο: Επιθετικός."
    ],
    "clues": [
      [
        "I have worn the shirt of Liverpool.",
        "Έχω φορέσει τη φανέλα της Liverpool."
      ],
      [
        "Another club on my journey was Bayern Munich.",
        "Μία ακόμη ομάδα στην πορεία μου ήταν η Bayern Munich."
      ],
      [
        "My international team: Senegal.",
        "Η εθνική μου ομάδα: Σενεγάλη."
      ],
      [
        "Southampton is part of my club career.",
        "Η Southampton αποτελεί σταθμό της καριέρας μου."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Southampton",
      "Liverpool",
      "Bayern Munich"
    ],
    "image": null
  },
  {
    "id": "debruyne",
    "name": "Kevin De Bruyne",
    "aliases": [
      "Kevin De Bruyne",
      "Bruyne",
      "ντε μπροινε",
      "de bruyne",
      "debruyne"
    ],
    "nation": [
      "Belgium",
      "Βέλγιο"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "My role on the pitch: midfielder.",
      "Η θέση μου στο γήπεδο: Μέσος."
    ],
    "clues": [
      [
        "My international team: Belgium.",
        "Η εθνική μου ομάδα: Βέλγιο."
      ],
      [
        "Genk is part of my club career.",
        "Η Genk αποτελεί σταθμό της καριέρας μου."
      ],
      [
        "I have worn the shirt of Wolfsburg.",
        "Έχω φορέσει τη φανέλα της Wolfsburg."
      ],
      [
        "Another club on my journey was Manchester City.",
        "Μία ακόμη ομάδα στην πορεία μου ήταν η Manchester City."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Genk",
      "Wolfsburg",
      "Manchester City"
    ],
    "image": null
  },
  {
    "id": "hazard",
    "name": "Eden Hazard",
    "aliases": [
      "Eden Hazard",
      "Hazard",
      "αζαρ"
    ],
    "nation": [
      "Belgium",
      "Βέλγιο"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "teaser": [
      "My role on the pitch: winger.",
      "Η θέση μου στο γήπεδο: Εξτρέμ."
    ],
    "clues": [
      [
        "Lille is part of my club career.",
        "Η Lille αποτελεί σταθμό της καριέρας μου."
      ],
      [
        "I have worn the shirt of Chelsea.",
        "Έχω φορέσει τη φανέλα της Chelsea."
      ],
      [
        "Another club on my journey was Real Madrid.",
        "Μία ακόμη ομάδα στην πορεία μου ήταν η Real Madrid."
      ],
      [
        "My international team: Belgium.",
        "Η εθνική μου ομάδα: Βέλγιο."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Lille",
      "Chelsea",
      "Real Madrid"
    ],
    "image": null
  },
  {
    "id": "bale",
    "name": "Gareth Bale",
    "aliases": [
      "Gareth Bale",
      "Bale",
      "μπειλ"
    ],
    "nation": [
      "Wales",
      "Ουαλία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "teaser": [
      "My role on the pitch: winger.",
      "Η θέση μου στο γήπεδο: Εξτρέμ."
    ],
    "clues": [
      [
        "I have worn the shirt of Tottenham.",
        "Έχω φορέσει τη φανέλα της Tottenham."
      ],
      [
        "Another club on my journey was Real Madrid.",
        "Μία ακόμη ομάδα στην πορεία μου ήταν η Real Madrid."
      ],
      [
        "My international team: Wales.",
        "Η εθνική μου ομάδα: Ουαλία."
      ],
      [
        "Southampton is part of my club career.",
        "Η Southampton αποτελεί σταθμό της καριέρας μου."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Southampton",
      "Tottenham",
      "Real Madrid"
    ],
    "image": null
  },
  {
    "id": "ibrahimovic",
    "name": "Zlatan Ibrahimović",
    "aliases": [
      "Zlatan Ibrahimović",
      "Ibrahimović",
      "ιμπραϊμοβιτς",
      "zlatan",
      "ζλαταν"
    ],
    "nation": [
      "Sweden",
      "Σουηδία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "My role on the pitch: striker.",
      "Η θέση μου στο γήπεδο: Σέντερ φορ."
    ],
    "clues": [
      [
        "My international team: Sweden.",
        "Η εθνική μου ομάδα: Σουηδία."
      ],
      [
        "Ajax is part of my club career.",
        "Η Ajax αποτελεί σταθμό της καριέρας μου."
      ],
      [
        "I have worn the shirt of Inter Milan.",
        "Έχω φορέσει τη φανέλα της Inter Milan."
      ],
      [
        "Another club on my journey was Paris Saint-Germain.",
        "Μία ακόμη ομάδα στην πορεία μου ήταν η Paris Saint-Germain."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Ajax",
      "Inter Milan",
      "Paris Saint-Germain"
    ],
    "image": null
  },
  {
    "id": "aguero",
    "name": "Sergio Agüero",
    "aliases": [
      "Sergio Agüero",
      "Agüero",
      "αγκουερο",
      "kun aguero",
      "kun",
      "κουν αγκουερο"
    ],
    "nation": [
      "Argentina",
      "Αργεντινή"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Look for a striker with an international club career.",
      "Αναζήτησε έναν παίκτη με διεθνή διαδρομή σε συλλόγους. Θέση: Σέντερ φορ."
    ],
    "clues": [
      [
        "One chapter of my career unfolded at Independiente.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Independiente."
      ],
      [
        "Atlético Madrid fans have seen me in their team's colours.",
        "Οι φίλαθλοι της Atlético Madrid με έχουν δει με τη φανέλα της ομάδας τους."
      ],
      [
        "My club history also includes Manchester City.",
        "Στην πορεία μου συναντάς και την Manchester City."
      ],
      [
        "On the international stage, my team was Argentina.",
        "Στη διεθνή σκηνή αγωνίστηκα με την εθνική: Αργεντινή."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Independiente",
      "Atlético Madrid",
      "Manchester City"
    ],
    "image": null
  },
  {
    "id": "torres",
    "name": "Fernando Torres",
    "aliases": [
      "Fernando Torres",
      "Torres",
      "τορες"
    ],
    "nation": [
      "Spain",
      "Ισπανία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Look for a striker with an international club career.",
      "Αναζήτησε έναν παίκτη με διεθνή διαδρομή σε συλλόγους. Θέση: Σέντερ φορ."
    ],
    "clues": [
      [
        "Liverpool fans have seen me in their team's colours.",
        "Οι φίλαθλοι της Liverpool με έχουν δει με τη φανέλα της ομάδας τους."
      ],
      [
        "My club history also includes Chelsea.",
        "Στην πορεία μου συναντάς και την Chelsea."
      ],
      [
        "On the international stage, my team was Spain.",
        "Στη διεθνή σκηνή αγωνίστηκα με την εθνική: Ισπανία."
      ],
      [
        "One chapter of my career unfolded at Atlético Madrid.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Atlético Madrid."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Atlético Madrid",
      "Liverpool",
      "Chelsea"
    ],
    "image": null
  },
  {
    "id": "villa",
    "name": "David Villa",
    "aliases": [
      "David Villa",
      "Villa",
      "βιγια"
    ],
    "nation": [
      "Spain",
      "Ισπανία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Look for a striker with an international club career.",
      "Αναζήτησε έναν παίκτη με διεθνή διαδρομή σε συλλόγους. Θέση: Σέντερ φορ."
    ],
    "clues": [
      [
        "My club history also includes New York City FC.",
        "Στην πορεία μου συναντάς και την New York City FC."
      ],
      [
        "On the international stage, my team was Spain.",
        "Στη διεθνή σκηνή αγωνίστηκα με την εθνική: Ισπανία."
      ],
      [
        "One chapter of my career unfolded at Valencia.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Valencia."
      ],
      [
        "Barcelona fans have seen me in their team's colours.",
        "Οι φίλαθλοι της Barcelona με έχουν δει με τη φανέλα της ομάδας τους."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Valencia",
      "Barcelona",
      "New York City FC"
    ],
    "image": null
  },
  {
    "id": "eto",
    "name": "Samuel Eto’o",
    "aliases": [
      "Samuel Eto’o",
      "Eto’o",
      "ετο",
      "eto'o",
      "etoo",
      "samuel eto o"
    ],
    "nation": [
      "Cameroon",
      "Καμερούν"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Look for a striker with an international club career.",
      "Αναζήτησε έναν παίκτη με διεθνή διαδρομή σε συλλόγους. Θέση: Σέντερ φορ."
    ],
    "clues": [
      [
        "On the international stage, my team was Cameroon.",
        "Στη διεθνή σκηνή αγωνίστηκα με την εθνική: Καμερούν."
      ],
      [
        "One chapter of my career unfolded at Mallorca.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Mallorca."
      ],
      [
        "Barcelona fans have seen me in their team's colours.",
        "Οι φίλαθλοι της Barcelona με έχουν δει με τη φανέλα της ομάδας τους."
      ],
      [
        "My club history also includes Inter Milan.",
        "Στην πορεία μου συναντάς και την Inter Milan."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Mallorca",
      "Barcelona",
      "Inter Milan"
    ],
    "image": null
  },
  {
    "id": "drogba",
    "name": "Didier Drogba",
    "aliases": [
      "Didier Drogba",
      "Drogba",
      "ντρογκμπα"
    ],
    "nation": [
      "Ivory Coast",
      "Ακτή Ελεφαντοστού"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Look for a striker with an international club career.",
      "Αναζήτησε έναν παίκτη με διεθνή διαδρομή σε συλλόγους. Θέση: Σέντερ φορ."
    ],
    "clues": [
      [
        "One chapter of my career unfolded at Guingamp.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Guingamp."
      ],
      [
        "Marseille fans have seen me in their team's colours.",
        "Οι φίλαθλοι της Marseille με έχουν δει με τη φανέλα της ομάδας τους."
      ],
      [
        "My club history also includes Chelsea.",
        "Στην πορεία μου συναντάς και την Chelsea."
      ],
      [
        "On the international stage, my team was Ivory Coast.",
        "Στη διεθνή σκηνή αγωνίστηκα με την εθνική: Ακτή Ελεφαντοστού."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Guingamp",
      "Marseille",
      "Chelsea"
    ],
    "image": null
  },
  {
    "id": "kaka",
    "name": "Kaká",
    "aliases": [
      "Kaká",
      "Kaká",
      "κακα"
    ],
    "nation": [
      "Brazil",
      "Βραζιλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Look for a midfielder with an international club career.",
      "Αναζήτησε έναν παίκτη με διεθνή διαδρομή σε συλλόγους. Θέση: Μέσος."
    ],
    "clues": [
      [
        "AC Milan fans have seen me in their team's colours.",
        "Οι φίλαθλοι της AC Milan με έχουν δει με τη φανέλα της ομάδας τους."
      ],
      [
        "My club history also includes Real Madrid.",
        "Στην πορεία μου συναντάς και την Real Madrid."
      ],
      [
        "On the international stage, my team was Brazil.",
        "Στη διεθνή σκηνή αγωνίστηκα με την εθνική: Βραζιλία."
      ],
      [
        "One chapter of my career unfolded at São Paulo.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην São Paulo."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "São Paulo",
      "AC Milan",
      "Real Madrid"
    ],
    "image": null
  },
  {
    "id": "figo",
    "name": "Luís Figo",
    "aliases": [
      "Luís Figo",
      "Figo",
      "φιγκο"
    ],
    "nation": [
      "Portugal",
      "Πορτογαλία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "teaser": [
      "Look for a winger with an international club career.",
      "Αναζήτησε έναν παίκτη με διεθνή διαδρομή σε συλλόγους. Θέση: Εξτρέμ."
    ],
    "clues": [
      [
        "My club history also includes Real Madrid.",
        "Στην πορεία μου συναντάς και την Real Madrid."
      ],
      [
        "On the international stage, my team was Portugal.",
        "Στη διεθνή σκηνή αγωνίστηκα με την εθνική: Πορτογαλία."
      ],
      [
        "One chapter of my career unfolded at Sporting CP.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Sporting CP."
      ],
      [
        "Barcelona fans have seen me in their team's colours.",
        "Οι φίλαθλοι της Barcelona με έχουν δει με τη φανέλα της ομάδας τους."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Sporting CP",
      "Barcelona",
      "Real Madrid"
    ],
    "image": null
  },
  {
    "id": "rivaldo",
    "name": "Rivaldo",
    "aliases": [
      "Rivaldo",
      "Rivaldo",
      "ριβαλντο"
    ],
    "nation": [
      "Brazil",
      "Βραζιλία"
    ],
    "position": [
      "Forward",
      "Επιθετικός"
    ],
    "teaser": [
      "Look for a forward with an international club career.",
      "Αναζήτησε έναν παίκτη με διεθνή διαδρομή σε συλλόγους. Θέση: Επιθετικός."
    ],
    "clues": [
      [
        "On the international stage, my team was Brazil.",
        "Στη διεθνή σκηνή αγωνίστηκα με την εθνική: Βραζιλία."
      ],
      [
        "One chapter of my career unfolded at Deportivo La Coruña.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Deportivo La Coruña."
      ],
      [
        "Barcelona fans have seen me in their team's colours.",
        "Οι φίλαθλοι της Barcelona με έχουν δει με τη φανέλα της ομάδας τους."
      ],
      [
        "My club history also includes Olympiacos.",
        "Στην πορεία μου συναντάς και την Olympiacos."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Deportivo La Coruña",
      "Barcelona",
      "Olympiacos"
    ],
    "image": null
  },
  {
    "id": "beckham",
    "name": "David Beckham",
    "aliases": [
      "David Beckham",
      "Beckham",
      "μπεκαμ"
    ],
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Look for a midfielder with an international club career.",
      "Αναζήτησε έναν παίκτη με διεθνή διαδρομή σε συλλόγους. Θέση: Μέσος."
    ],
    "clues": [
      [
        "One chapter of my career unfolded at Manchester United.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Manchester United."
      ],
      [
        "Real Madrid fans have seen me in their team's colours.",
        "Οι φίλαθλοι της Real Madrid με έχουν δει με τη φανέλα της ομάδας τους."
      ],
      [
        "My club history also includes LA Galaxy.",
        "Στην πορεία μου συναντάς και την LA Galaxy."
      ],
      [
        "On the international stage, my team was England.",
        "Στη διεθνή σκηνή αγωνίστηκα με την εθνική: Αγγλία."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Manchester United",
      "Real Madrid",
      "LA Galaxy"
    ],
    "image": null
  },
  {
    "id": "lampard",
    "name": "Frank Lampard",
    "aliases": [
      "Frank Lampard",
      "Lampard",
      "λαμπαρντ"
    ],
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Look for a midfielder with an international club career.",
      "Αναζήτησε έναν παίκτη με διεθνή διαδρομή σε συλλόγους. Θέση: Μέσος."
    ],
    "clues": [
      [
        "Chelsea fans have seen me in their team's colours.",
        "Οι φίλαθλοι της Chelsea με έχουν δει με τη φανέλα της ομάδας τους."
      ],
      [
        "My club history also includes Manchester City.",
        "Στην πορεία μου συναντάς και την Manchester City."
      ],
      [
        "On the international stage, my team was England.",
        "Στη διεθνή σκηνή αγωνίστηκα με την εθνική: Αγγλία."
      ],
      [
        "One chapter of my career unfolded at West Ham United.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην West Ham United."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "West Ham United",
      "Chelsea",
      "Manchester City"
    ],
    "image": null
  },
  {
    "id": "rooney",
    "name": "Wayne Rooney",
    "aliases": [
      "Wayne Rooney",
      "Rooney",
      "ρουνεϊ"
    ],
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Forward",
      "Επιθετικός"
    ],
    "teaser": [
      "Three clubs, one career. Can you connect the dots?",
      "Τρεις ομάδες, μία καριέρα. Μπορείς να βρεις τη σύνδεση;"
    ],
    "clues": [
      [
        "Earlier in my career, I wore the colours of Everton.",
        "Νωρίτερα στην καριέρα μου φόρεσα τη φανέλα της Everton."
      ],
      [
        "My career took me to Manchester United.",
        "Η πορεία μου με έφερε στην Manchester United."
      ],
      [
        "You can also find D.C. United on my football CV.",
        "Στο ποδοσφαιρικό βιογραφικό μου θα βρεις και την D.C. United."
      ],
      [
        "My international career was with England.",
        "Στις εθνικές ομάδες εκπροσώπησα την Αγγλία."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Everton",
      "Manchester United",
      "D.C. United"
    ],
    "image": null
  },
  {
    "id": "owen",
    "name": "Michael Owen",
    "aliases": [
      "Michael Owen",
      "Owen",
      "οουεν"
    ],
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Follow my club journey to find my name.",
      "Ακολούθησε τη διαδρομή μου στους συλλόγους για να βρεις το όνομά μου."
    ],
    "clues": [
      [
        "My career took me to Real Madrid.",
        "Η πορεία μου με έφερε στην Real Madrid."
      ],
      [
        "You can also find Newcastle United on my football CV.",
        "Στο ποδοσφαιρικό βιογραφικό μου θα βρεις και την Newcastle United."
      ],
      [
        "My international career was with England.",
        "Στις εθνικές ομάδες εκπροσώπησα την Αγγλία."
      ],
      [
        "Earlier in my career, I wore the colours of Liverpool.",
        "Νωρίτερα στην καριέρα μου φόρεσα τη φανέλα της Liverpool."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Liverpool",
      "Real Madrid",
      "Newcastle United"
    ],
    "image": null
  },
  {
    "id": "shearer",
    "name": "Alan Shearer",
    "aliases": [
      "Alan Shearer",
      "Shearer",
      "σιρερ"
    ],
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "My career crossed paths with some famous shirts.",
      "Στην καριέρα μου φόρεσα μερικές διάσημες φανέλες."
    ],
    "clues": [
      [
        "You can also find Newcastle United on my football CV.",
        "Στο ποδοσφαιρικό βιογραφικό μου θα βρεις και την Newcastle United."
      ],
      [
        "My international career was with England.",
        "Στις εθνικές ομάδες εκπροσώπησα την Αγγλία."
      ],
      [
        "Earlier in my career, I wore the colours of Southampton.",
        "Νωρίτερα στην καριέρα μου φόρεσα τη φανέλα της Southampton."
      ],
      [
        "My career took me to Blackburn Rovers.",
        "Η πορεία μου με έφερε στην Blackburn Rovers."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Southampton",
      "Blackburn Rovers",
      "Newcastle United"
    ],
    "image": null
  },
  {
    "id": "bergkamp",
    "name": "Dennis Bergkamp",
    "aliases": [
      "Dennis Bergkamp",
      "Bergkamp",
      "μπεργκαμπ"
    ],
    "nation": [
      "Netherlands",
      "Ολλανδία"
    ],
    "position": [
      "Forward",
      "Επιθετικός"
    ],
    "teaser": [
      "Three clubs, one career. Can you connect the dots?",
      "Τρεις ομάδες, μία καριέρα. Μπορείς να βρεις τη σύνδεση;"
    ],
    "clues": [
      [
        "My international career was with Netherlands.",
        "Στις εθνικές ομάδες εκπροσώπησα την Ολλανδία."
      ],
      [
        "Earlier in my career, I wore the colours of Ajax.",
        "Νωρίτερα στην καριέρα μου φόρεσα τη φανέλα της Ajax."
      ],
      [
        "My career took me to Inter Milan.",
        "Η πορεία μου με έφερε στην Inter Milan."
      ],
      [
        "You can also find Arsenal on my football CV.",
        "Στο ποδοσφαιρικό βιογραφικό μου θα βρεις και την Arsenal."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Ajax",
      "Inter Milan",
      "Arsenal"
    ],
    "image": null
  },
  {
    "id": "vanpersie",
    "name": "Robin van Persie",
    "aliases": [
      "Robin van Persie",
      "van Persie",
      "Persie",
      "φαν περσι",
      "φαν περσι"
    ],
    "nation": [
      "Netherlands",
      "Ολλανδία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Follow my club journey to find my name.",
      "Ακολούθησε τη διαδρομή μου στους συλλόγους για να βρεις το όνομά μου."
    ],
    "clues": [
      [
        "Earlier in my career, I wore the colours of Feyenoord.",
        "Νωρίτερα στην καριέρα μου φόρεσα τη φανέλα της Feyenoord."
      ],
      [
        "My career took me to Arsenal.",
        "Η πορεία μου με έφερε στην Arsenal."
      ],
      [
        "You can also find Manchester United on my football CV.",
        "Στο ποδοσφαιρικό βιογραφικό μου θα βρεις και την Manchester United."
      ],
      [
        "My international career was with Netherlands.",
        "Στις εθνικές ομάδες εκπροσώπησα την Ολλανδία."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Feyenoord",
      "Arsenal",
      "Manchester United"
    ],
    "image": null
  },
  {
    "id": "robben",
    "name": "Arjen Robben",
    "aliases": [
      "Arjen Robben",
      "Robben",
      "ρομπεν"
    ],
    "nation": [
      "Netherlands",
      "Ολλανδία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "teaser": [
      "My career crossed paths with some famous shirts.",
      "Στην καριέρα μου φόρεσα μερικές διάσημες φανέλες."
    ],
    "clues": [
      [
        "My career took me to Real Madrid.",
        "Η πορεία μου με έφερε στην Real Madrid."
      ],
      [
        "You can also find Bayern Munich on my football CV.",
        "Στο ποδοσφαιρικό βιογραφικό μου θα βρεις και την Bayern Munich."
      ],
      [
        "My international career was with Netherlands.",
        "Στις εθνικές ομάδες εκπροσώπησα την Ολλανδία."
      ],
      [
        "Earlier in my career, I wore the colours of Chelsea.",
        "Νωρίτερα στην καριέρα μου φόρεσα τη φανέλα της Chelsea."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Chelsea",
      "Real Madrid",
      "Bayern Munich"
    ],
    "image": null
  },
  {
    "id": "sneijder",
    "name": "Wesley Sneijder",
    "aliases": [
      "Wesley Sneijder",
      "Sneijder",
      "σναϊντερ"
    ],
    "nation": [
      "Netherlands",
      "Ολλανδία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Three clubs, one career. Can you connect the dots?",
      "Τρεις ομάδες, μία καριέρα. Μπορείς να βρεις τη σύνδεση;"
    ],
    "clues": [
      [
        "You can also find Inter Milan on my football CV.",
        "Στο ποδοσφαιρικό βιογραφικό μου θα βρεις και την Inter Milan."
      ],
      [
        "My international career was with Netherlands.",
        "Στις εθνικές ομάδες εκπροσώπησα την Ολλανδία."
      ],
      [
        "Earlier in my career, I wore the colours of Ajax.",
        "Νωρίτερα στην καριέρα μου φόρεσα τη φανέλα της Ajax."
      ],
      [
        "My career took me to Real Madrid.",
        "Η πορεία μου με έφερε στην Real Madrid."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Ajax",
      "Real Madrid",
      "Inter Milan"
    ],
    "image": null
  },
  {
    "id": "seedorf",
    "name": "Clarence Seedorf",
    "aliases": [
      "Clarence Seedorf",
      "Seedorf",
      "σειντορφ",
      "ζεεντορφ"
    ],
    "nation": [
      "Netherlands",
      "Ολλανδία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Follow my club journey to find my name.",
      "Ακολούθησε τη διαδρομή μου στους συλλόγους για να βρεις το όνομά μου."
    ],
    "clues": [
      [
        "My international career was with Netherlands.",
        "Στις εθνικές ομάδες εκπροσώπησα την Ολλανδία."
      ],
      [
        "Earlier in my career, I wore the colours of Ajax.",
        "Νωρίτερα στην καριέρα μου φόρεσα τη φανέλα της Ajax."
      ],
      [
        "My career took me to Real Madrid.",
        "Η πορεία μου με έφερε στην Real Madrid."
      ],
      [
        "You can also find AC Milan on my football CV.",
        "Στο ποδοσφαιρικό βιογραφικό μου θα βρεις και την AC Milan."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Ajax",
      "Real Madrid",
      "AC Milan"
    ],
    "image": null
  },
  {
    "id": "pirlo",
    "name": "Andrea Pirlo",
    "aliases": [
      "Andrea Pirlo",
      "Pirlo",
      "πιρλο"
    ],
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "My career crossed paths with some famous shirts.",
      "Στην καριέρα μου φόρεσα μερικές διάσημες φανέλες."
    ],
    "clues": [
      [
        "Earlier in my career, I wore the colours of Brescia.",
        "Νωρίτερα στην καριέρα μου φόρεσα τη φανέλα της Brescia."
      ],
      [
        "My career took me to AC Milan.",
        "Η πορεία μου με έφερε στην AC Milan."
      ],
      [
        "You can also find Juventus on my football CV.",
        "Στο ποδοσφαιρικό βιογραφικό μου θα βρεις και την Juventus."
      ],
      [
        "My international career was with Italy.",
        "Στις εθνικές ομάδες εκπροσώπησα την Ιταλία."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Brescia",
      "AC Milan",
      "Juventus"
    ],
    "image": null
  },
  {
    "id": "baggio",
    "name": "Roberto Baggio",
    "aliases": [
      "Roberto Baggio",
      "Baggio",
      "μπατζο"
    ],
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Forward",
      "Επιθετικός"
    ],
    "teaser": [
      "Three clubs, one career. Can you connect the dots?",
      "Τρεις ομάδες, μία καριέρα. Μπορείς να βρεις τη σύνδεση;"
    ],
    "clues": [
      [
        "My career took me to Juventus.",
        "Η πορεία μου με έφερε στην Juventus."
      ],
      [
        "You can also find Brescia on my football CV.",
        "Στο ποδοσφαιρικό βιογραφικό μου θα βρεις και την Brescia."
      ],
      [
        "My international career was with Italy.",
        "Στις εθνικές ομάδες εκπροσώπησα την Ιταλία."
      ],
      [
        "Earlier in my career, I wore the colours of Fiorentina.",
        "Νωρίτερα στην καριέρα μου φόρεσα τη φανέλα της Fiorentina."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Fiorentina",
      "Juventus",
      "Brescia"
    ],
    "image": null
  },
  {
    "id": "ronaldonazario",
    "name": "Ronaldo Nazário",
    "aliases": [
      "Ronaldo Nazário",
      "Ronaldo Nazario",
      "R9",
      "ροναλντο ναζαριο"
    ],
    "nation": [
      "Brazil",
      "Βραζιλία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Trace my journey through these clubs.",
      "Ακολούθησε τη διαδρομή μου σε αυτές τις ομάδες."
    ],
    "clues": [
      [
        "Fans of Barcelona have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Barcelona."
      ],
      [
        "Another shirt I wore was that of Inter Milan.",
        "Φόρεσα επίσης τη φανέλα της Inter Milan."
      ],
      [
        "My national team was Brazil.",
        "Αγωνίστηκα με την εθνική: Βραζιλία."
      ],
      [
        "My club journey includes a spell at PSV.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την PSV."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "PSV",
      "Barcelona",
      "Inter Milan"
    ],
    "image": null
  },
  {
    "id": "buffon",
    "name": "Gianluigi Buffon",
    "aliases": [
      "Gianluigi Buffon",
      "Buffon",
      "Gigi Buffon",
      "μπουφον"
    ],
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Goalkeeper",
      "Τερματοφύλακας"
    ],
    "teaser": [
      "Different shirts, the same player. Who am I?",
      "Διαφορετικές φανέλες, ο ίδιος παίκτης. Ποιος είμαι;"
    ],
    "clues": [
      [
        "Another shirt I wore was that of Paris Saint-Germain.",
        "Φόρεσα επίσης τη φανέλα της Paris Saint-Germain."
      ],
      [
        "My national team was Italy.",
        "Αγωνίστηκα με την εθνική: Ιταλία."
      ],
      [
        "My club journey includes a spell at Parma.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την Parma."
      ],
      [
        "Fans of Juventus have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Juventus."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Parma",
      "Juventus",
      "Paris Saint-Germain"
    ],
    "image": null
  },
  {
    "id": "cech",
    "name": "Petr Čech",
    "aliases": [
      "Petr Čech",
      "Cech",
      "Petr Cech",
      "τσεχ"
    ],
    "nation": [
      "Czech Republic",
      "Τσεχία"
    ],
    "position": [
      "Goalkeeper",
      "Τερματοφύλακας"
    ],
    "teaser": [
      "Each stop on my journey brings you closer to my name.",
      "Κάθε σταθμός της πορείας μου σε φέρνει πιο κοντά στο όνομά μου."
    ],
    "clues": [
      [
        "My national team was Czech Republic.",
        "Αγωνίστηκα με την εθνική: Τσεχία."
      ],
      [
        "My club journey includes a spell at Rennes.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την Rennes."
      ],
      [
        "Fans of Chelsea have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Chelsea."
      ],
      [
        "Another shirt I wore was that of Arsenal.",
        "Φόρεσα επίσης τη φανέλα της Arsenal."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Rennes",
      "Chelsea",
      "Arsenal"
    ],
    "image": null
  },
  {
    "id": "vandersar",
    "name": "Edwin van der Sar",
    "aliases": [
      "Edwin van der Sar",
      "van der Sar",
      "φαν ντερ σαρ"
    ],
    "nation": [
      "Netherlands",
      "Ολλανδία"
    ],
    "position": [
      "Goalkeeper",
      "Τερματοφύλακας"
    ],
    "teaser": [
      "Trace my journey through these clubs.",
      "Ακολούθησε τη διαδρομή μου σε αυτές τις ομάδες."
    ],
    "clues": [
      [
        "My club journey includes a spell at Ajax.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την Ajax."
      ],
      [
        "Fans of Fulham have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Fulham."
      ],
      [
        "Another shirt I wore was that of Manchester United.",
        "Φόρεσα επίσης τη φανέλα της Manchester United."
      ],
      [
        "My national team was Netherlands.",
        "Αγωνίστηκα με την εθνική: Ολλανδία."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Ajax",
      "Fulham",
      "Manchester United"
    ],
    "image": null
  },
  {
    "id": "xabialonso",
    "name": "Xabi Alonso",
    "aliases": [
      "Xabi Alonso",
      "Alonso",
      "τσαμπι αλονσο",
      "αλονσο"
    ],
    "nation": [
      "Spain",
      "Ισπανία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Different shirts, the same player. Who am I?",
      "Διαφορετικές φανέλες, ο ίδιος παίκτης. Ποιος είμαι;"
    ],
    "clues": [
      [
        "Fans of Liverpool have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Liverpool."
      ],
      [
        "Another shirt I wore was that of Bayern Munich.",
        "Φόρεσα επίσης τη φανέλα της Bayern Munich."
      ],
      [
        "My national team was Spain.",
        "Αγωνίστηκα με την εθνική: Ισπανία."
      ],
      [
        "My club journey includes a spell at Real Sociedad.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την Real Sociedad."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Real Sociedad",
      "Liverpool",
      "Bayern Munich"
    ],
    "image": null
  },
  {
    "id": "rakitic",
    "name": "Ivan Rakitić",
    "aliases": [
      "Ivan Rakitić",
      "Rakitic",
      "Rakitić",
      "ρακιτιτς"
    ],
    "nation": [
      "Croatia",
      "Κροατία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Each stop on my journey brings you closer to my name.",
      "Κάθε σταθμός της πορείας μου σε φέρνει πιο κοντά στο όνομά μου."
    ],
    "clues": [
      [
        "Another shirt I wore was that of Barcelona.",
        "Φόρεσα επίσης τη φανέλα της Barcelona."
      ],
      [
        "My national team was Croatia.",
        "Αγωνίστηκα με την εθνική: Κροατία."
      ],
      [
        "My club journey includes a spell at Basel.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την Basel."
      ],
      [
        "Fans of Sevilla have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Sevilla."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Basel",
      "Sevilla",
      "Barcelona"
    ],
    "image": null
  },
  {
    "id": "berbatov",
    "name": "Dimitar Berbatov",
    "aliases": [
      "Dimitar Berbatov",
      "Berbatov",
      "μπερμπατοφ"
    ],
    "nation": [
      "Bulgaria",
      "Βουλγαρία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Trace my journey through these clubs.",
      "Ακολούθησε τη διαδρομή μου σε αυτές τις ομάδες."
    ],
    "clues": [
      [
        "My national team was Bulgaria.",
        "Αγωνίστηκα με την εθνική: Βουλγαρία."
      ],
      [
        "My club journey includes a spell at Bayer Leverkusen.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την Bayer Leverkusen."
      ],
      [
        "Fans of Tottenham Hotspur have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Tottenham Hotspur."
      ],
      [
        "Another shirt I wore was that of Manchester United.",
        "Φόρεσα επίσης τη φανέλα της Manchester United."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Bayer Leverkusen",
      "Tottenham Hotspur",
      "Manchester United"
    ],
    "image": null
  },
  {
    "id": "dzeko",
    "name": "Edin Džeko",
    "aliases": [
      "Edin Džeko",
      "Dzeko",
      "Džeko",
      "τζεκο"
    ],
    "nation": [
      "Bosnia and Herzegovina",
      "Βοσνία και Ερζεγοβίνη"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Different shirts, the same player. Who am I?",
      "Διαφορετικές φανέλες, ο ίδιος παίκτης. Ποιος είμαι;"
    ],
    "clues": [
      [
        "My club journey includes a spell at Wolfsburg.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την Wolfsburg."
      ],
      [
        "Fans of Manchester City have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Manchester City."
      ],
      [
        "Another shirt I wore was that of Roma.",
        "Φόρεσα επίσης τη φανέλα της Roma."
      ],
      [
        "My national team was Bosnia and Herzegovina.",
        "Αγωνίστηκα με την εθνική: Βοσνία και Ερζεγοβίνη."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Wolfsburg",
      "Manchester City",
      "Roma"
    ],
    "image": null
  },
  {
    "id": "yayatoure",
    "name": "Yaya Touré",
    "aliases": [
      "Yaya Touré",
      "Yaya Toure",
      "Yaya",
      "γιαγια τουρε"
    ],
    "nation": [
      "Ivory Coast",
      "Ακτή Ελεφαντοστού"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Each stop on my journey brings you closer to my name.",
      "Κάθε σταθμός της πορείας μου σε φέρνει πιο κοντά στο όνομά μου."
    ],
    "clues": [
      [
        "Fans of Barcelona have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Barcelona."
      ],
      [
        "Another shirt I wore was that of Manchester City.",
        "Φόρεσα επίσης τη φανέλα της Manchester City."
      ],
      [
        "My national team was Ivory Coast.",
        "Αγωνίστηκα με την εθνική: Ακτή Ελεφαντοστού."
      ],
      [
        "My club journey includes a spell at Olympiacos.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την Olympiacos."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Olympiacos",
      "Barcelona",
      "Manchester City"
    ],
    "image": null
  },
  {
    "id": "cambiasso",
    "name": "Esteban Cambiasso",
    "aliases": [
      "Esteban Cambiasso",
      "Cambiasso",
      "καμπιασο"
    ],
    "nation": [
      "Argentina",
      "Αργεντινή"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Trace my journey through these clubs.",
      "Ακολούθησε τη διαδρομή μου σε αυτές τις ομάδες."
    ],
    "clues": [
      [
        "Another shirt I wore was that of Olympiacos.",
        "Φόρεσα επίσης τη φανέλα της Olympiacos."
      ],
      [
        "My national team was Argentina.",
        "Αγωνίστηκα με την εθνική: Αργεντινή."
      ],
      [
        "My club journey includes a spell at Real Madrid.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την Real Madrid."
      ],
      [
        "Fans of Inter Milan have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Inter Milan."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Real Madrid",
      "Inter Milan",
      "Olympiacos"
    ],
    "image": null
  },
  {
    "id": "kuyt",
    "name": "Dirk Kuyt",
    "aliases": [
      "Dirk Kuyt",
      "Kuyt",
      "Dirk Kuijt",
      "Kuijt",
      "καουτ",
      "κουιτ"
    ],
    "nation": [
      "Netherlands",
      "Ολλανδία"
    ],
    "position": [
      "Forward",
      "Επιθετικός"
    ],
    "teaser": [
      "Different shirts, the same player. Who am I?",
      "Διαφορετικές φανέλες, ο ίδιος παίκτης. Ποιος είμαι;"
    ],
    "clues": [
      [
        "My national team was Netherlands.",
        "Αγωνίστηκα με την εθνική: Ολλανδία."
      ],
      [
        "My club journey includes a spell at Feyenoord.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την Feyenoord."
      ],
      [
        "Fans of Liverpool have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Liverpool."
      ],
      [
        "Another shirt I wore was that of Fenerbahçe.",
        "Φόρεσα επίσης τη φανέλα της Fenerbahçe."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Feyenoord",
      "Liverpool",
      "Fenerbahçe"
    ],
    "image": null
  },
  {
    "id": "parkjisung",
    "name": "Park Ji-sung",
    "aliases": [
      "Park Ji-sung",
      "Park Ji Sung",
      "Ji Sung Park",
      "Park",
      "παρκ",
      "παρκ τζι σουνγκ"
    ],
    "nation": [
      "South Korea",
      "Νότια Κορέα"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Each stop on my journey brings you closer to my name.",
      "Κάθε σταθμός της πορείας μου σε φέρνει πιο κοντά στο όνομά μου."
    ],
    "clues": [
      [
        "My club journey includes a spell at PSV.",
        "Στην πορεία μου υπάρχει ένα πέρασμα από την PSV."
      ],
      [
        "Fans of Manchester United have cheered for me.",
        "Έχω αγωνιστεί μπροστά στους φιλάθλους της Manchester United."
      ],
      [
        "Another shirt I wore was that of Queens Park Rangers.",
        "Φόρεσα επίσης τη φανέλα της Queens Park Rangers."
      ],
      [
        "My national team was South Korea.",
        "Αγωνίστηκα με την εθνική: Νότια Κορέα."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "PSV",
      "Manchester United",
      "Queens Park Rangers"
    ],
    "image": null
  },
  {
    "id": "casillas",
    "name": "Iker Casillas",
    "aliases": [
      "Iker Casillas",
      "Casillas",
      "κασιγιας"
    ],
    "nation": [
      "Spain",
      "Ισπανία"
    ],
    "position": [
      "Goalkeeper",
      "Τερματοφύλακας"
    ],
    "teaser": [
      "Think beyond the goalscorers.",
      "Σκέψου πέρα από τους σκόρερ."
    ],
    "clues": [
      [
        "I wore the colours of Real Madrid.",
        "Φόρεσα τη φανέλα της Real Madrid."
      ],
      [
        "My career also took me to Porto.",
        "Η καριέρα μου με έφερε και στην Porto."
      ],
      [
        "I captained Spain to the 2010 World Cup title.",
        "Ήμουν αρχηγός της Ισπανίας στην κατάκτηση του Μουντιάλ του 2010."
      ],
      [
        "I represented Spain internationally.",
        "Εκπροσώπησα την εθνική: Ισπανία."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Real Madrid",
      "Porto"
    ],
    "image": null
  },
  {
    "id": "puyol",
    "name": "Carles Puyol",
    "aliases": [
      "Carles Puyol",
      "Puyol",
      "πουγιολ"
    ],
    "nation": [
      "Spain",
      "Ισπανία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "teaser": [
      "The next clue may be the one that gives me away.",
      "Το επόμενο στοιχείο ίσως αποκαλύψει ποιος είμαι."
    ],
    "clues": [
      [
        "My main role was defender.",
        "Η βασική μου θέση: Αμυντικός."
      ],
      [
        "I scored the only goal in the 2010 World Cup semi-final against Germany.",
        "Πέτυχα το μοναδικό γκολ στον ημιτελικό του Μουντιάλ 2010 απέναντι στη Γερμανία."
      ],
      [
        "I represented Spain internationally.",
        "Εκπροσώπησα την εθνική: Ισπανία."
      ],
      [
        "I wore the colours of Barcelona.",
        "Φόρεσα τη φανέλα της Barcelona."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Barcelona"
    ],
    "image": null
  },
  {
    "id": "terry",
    "name": "John Terry",
    "aliases": [
      "John Terry",
      "Terry",
      "τερι"
    ],
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "teaser": [
      "A familiar shirt could point you in the right direction.",
      "Μια γνώριμη φανέλα μπορεί να σε οδηγήσει στη σωστή απάντηση."
    ],
    "clues": [
      [
        "Centre-back was my position.",
        "Αγωνιζόμουν ως κεντρικός αμυντικός."
      ],
      [
        "I represented England internationally.",
        "Εκπροσώπησα την εθνική: Αγγλία."
      ],
      [
        "I wore the colours of Chelsea.",
        "Φόρεσα τη φανέλα της Chelsea."
      ],
      [
        "My career also took me to Aston Villa.",
        "Η καριέρα μου με έφερε και στην Aston Villa."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Chelsea",
      "Aston Villa"
    ],
    "image": null
  },
  {
    "id": "ferdinand",
    "name": "Rio Ferdinand",
    "aliases": [
      "Rio Ferdinand",
      "Ferdinand",
      "φερντιναντ"
    ],
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "teaser": [
      "Think beyond the goalscorers.",
      "Σκέψου πέρα από τους σκόρερ."
    ],
    "clues": [
      [
        "I represented England internationally.",
        "Εκπροσώπησα την εθνική: Αγγλία."
      ],
      [
        "I wore the colours of West Ham United.",
        "Φόρεσα τη φανέλα της West Ham United."
      ],
      [
        "My career also took me to Manchester United.",
        "Η καριέρα μου με έφερε και στην Manchester United."
      ],
      [
        "I played as a centre-back.",
        "Έπαιζα ως κεντρικός αμυντικός."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "West Ham United",
      "Leeds United",
      "Manchester United"
    ],
    "image": null
  },
  {
    "id": "vidic",
    "name": "Nemanja Vidić",
    "aliases": [
      "Nemanja Vidić",
      "Vidić",
      "βιντιτς"
    ],
    "nation": [
      "Serbia",
      "Σερβία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "teaser": [
      "The next clue may be the one that gives me away.",
      "Το επόμενο στοιχείο ίσως αποκαλύψει ποιος είμαι."
    ],
    "clues": [
      [
        "I wore the colours of Red Star Belgrade.",
        "Φόρεσα τη φανέλα της Red Star Belgrade."
      ],
      [
        "My career also took me to Inter Milan.",
        "Η καριέρα μου με έφερε και στην Inter Milan."
      ],
      [
        "My role was in central defence.",
        "Η θέση μου ήταν στο κέντρο της άμυνας."
      ],
      [
        "I represented Serbia internationally.",
        "Εκπροσώπησα την εθνική: Σερβία."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Red Star Belgrade",
      "Manchester United",
      "Inter Milan"
    ],
    "image": null
  },
  {
    "id": "evra",
    "name": "Patrice Evra",
    "aliases": [
      "Patrice Evra",
      "Evra",
      "εβρα"
    ],
    "nation": [
      "France",
      "Γαλλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "teaser": [
      "A familiar shirt could point you in the right direction.",
      "Μια γνώριμη φανέλα μπορεί να σε οδηγήσει στη σωστή απάντηση."
    ],
    "clues": [
      [
        "My career also took me to Juventus.",
        "Η καριέρα μου με έφερε και στην Juventus."
      ],
      [
        "Left-back was my main position.",
        "Η βασική μου θέση ήταν αριστερό μπακ."
      ],
      [
        "I represented France internationally.",
        "Εκπροσώπησα την εθνική: Γαλλία."
      ],
      [
        "I wore the colours of Monaco.",
        "Φόρεσα τη φανέλα της Monaco."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Monaco",
      "Manchester United",
      "Juventus"
    ],
    "image": null
  },
  {
    "id": "ashleycole",
    "name": "Ashley Cole",
    "aliases": [
      "Ashley Cole",
      "Cole",
      "ασλεϊ κολ",
      "ασλει κολ",
      "Cole"
    ],
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "teaser": [
      "Think beyond the goalscorers.",
      "Σκέψου πέρα από τους σκόρερ."
    ],
    "clues": [
      [
        "I played mainly at left-back.",
        "Αγωνιζόμουν κυρίως ως αριστερό μπακ."
      ],
      [
        "I represented England internationally.",
        "Εκπροσώπησα την εθνική: Αγγλία."
      ],
      [
        "I wore the colours of Arsenal.",
        "Φόρεσα τη φανέλα της Arsenal."
      ],
      [
        "My career also took me to Roma.",
        "Η καριέρα μου με έφερε και στην Roma."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Arsenal",
      "Chelsea",
      "Roma"
    ],
    "image": null
  },
  {
    "id": "gerrard",
    "name": "Steven Gerrard",
    "aliases": [
      "Steven Gerrard",
      "Gerrard",
      "τζεραρντ"
    ],
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "The next clue may be the one that gives me away.",
      "Το επόμενο στοιχείο ίσως αποκαλύψει ποιος είμαι."
    ],
    "clues": [
      [
        "I represented England internationally.",
        "Εκπροσώπησα την εθνική: Αγγλία."
      ],
      [
        "I wore the colours of Liverpool.",
        "Φόρεσα τη φανέλα της Liverpool."
      ],
      [
        "My career also took me to LA Galaxy.",
        "Η καριέρα μου με έφερε και στην LA Galaxy."
      ],
      [
        "I captained Liverpool in the 2005 Champions League final.",
        "Ήμουν αρχηγός της Liverpool στον τελικό του Champions League του 2005."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Liverpool",
      "LA Galaxy"
    ],
    "image": null
  },
  {
    "id": "scholes",
    "name": "Paul Scholes",
    "aliases": [
      "Paul Scholes",
      "Scholes",
      "σκοουλς"
    ],
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "A familiar shirt could point you in the right direction.",
      "Μια γνώριμη φανέλα μπορεί να σε οδηγήσει στη σωστή απάντηση."
    ],
    "clues": [
      [
        "I wore the colours of Manchester United.",
        "Φόρεσα τη φανέλα της Manchester United."
      ],
      [
        "My main role was midfielder.",
        "Η βασική μου θέση: Μέσος."
      ],
      [
        "My senior club career was spent entirely at Manchester United.",
        "Όλη η επαγγελματική μου καριέρα σε συλλόγους ήταν στη Manchester United."
      ],
      [
        "I represented England internationally.",
        "Εκπροσώπησα την εθνική: Αγγλία."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Manchester United"
    ],
    "image": null
  },
  {
    "id": "totti",
    "name": "Francesco Totti",
    "aliases": [
      "Francesco Totti",
      "Totti",
      "τοτι"
    ],
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Forward",
      "Επιθετικός"
    ],
    "teaser": [
      "Think beyond the goalscorers.",
      "Σκέψου πέρα από τους σκόρερ."
    ],
    "clues": [
      [
        "My main role was forward.",
        "Η βασική μου θέση: Επιθετικός."
      ],
      [
        "I won the 2006 World Cup with Italy.",
        "Κατέκτησα το Μουντιάλ του 2006 με την Ιταλία."
      ],
      [
        "I represented Italy internationally.",
        "Εκπροσώπησα την εθνική: Ιταλία."
      ],
      [
        "I wore the colours of Roma.",
        "Φόρεσα τη φανέλα της Roma."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Roma"
    ],
    "image": null
  },
  {
    "id": "deco",
    "name": "Deco",
    "aliases": [
      "Deco",
      "ντεκο"
    ],
    "nation": [
      "Portugal",
      "Πορτογαλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "My club history holds the answer.",
      "Οι ομάδες της καριέρας μου κρύβουν την απάντηση."
    ],
    "clues": [
      [
        "A chapter of my career was written at Porto.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Porto."
      ],
      [
        "I also appeared in the shirt of Barcelona.",
        "Αγωνίστηκα επίσης με τη φανέλα της Barcelona."
      ],
      [
        "My list of clubs includes Chelsea.",
        "Στη λίστα των ομάδων μου βρίσκεται και η Chelsea."
      ],
      [
        "On international duty, I played for Portugal.",
        "Στις διεθνείς διοργανώσεις αγωνίστηκα με την εθνική: Πορτογαλία."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Porto",
      "Barcelona",
      "Chelsea"
    ],
    "image": null
  },
  {
    "id": "ballack",
    "name": "Michael Ballack",
    "aliases": [
      "Michael Ballack",
      "Ballack",
      "μπαλακ"
    ],
    "nation": [
      "Germany",
      "Γερμανία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Follow the shirts I wore to uncover my identity.",
      "Ακολούθησε τις φανέλες που φόρεσα για να βρεις ποιος είμαι."
    ],
    "clues": [
      [
        "I also appeared in the shirt of Bayern Munich.",
        "Αγωνίστηκα επίσης με τη φανέλα της Bayern Munich."
      ],
      [
        "My list of clubs includes Chelsea.",
        "Στη λίστα των ομάδων μου βρίσκεται και η Chelsea."
      ],
      [
        "On international duty, I played for Germany.",
        "Στις διεθνείς διοργανώσεις αγωνίστηκα με την εθνική: Γερμανία."
      ],
      [
        "A chapter of my career was written at Bayer Leverkusen.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Bayer Leverkusen."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Bayer Leverkusen",
      "Bayern Munich",
      "Chelsea"
    ],
    "image": null
  },
  {
    "id": "essien",
    "name": "Michael Essien",
    "aliases": [
      "Michael Essien",
      "Essien",
      "εσιεν"
    ],
    "nation": [
      "Ghana",
      "Γκάνα"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Several clubs share a chapter of my story.",
      "Αρκετοί σύλλογοι μοιράζονται ένα κεφάλαιο της ιστορίας μου."
    ],
    "clues": [
      [
        "My list of clubs includes AC Milan.",
        "Στη λίστα των ομάδων μου βρίσκεται και η AC Milan."
      ],
      [
        "On international duty, I played for Ghana.",
        "Στις διεθνείς διοργανώσεις αγωνίστηκα με την εθνική: Γκάνα."
      ],
      [
        "A chapter of my career was written at Lyon.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Lyon."
      ],
      [
        "I also appeared in the shirt of Chelsea.",
        "Αγωνίστηκα επίσης με τη φανέλα της Chelsea."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Lyon",
      "Chelsea",
      "AC Milan"
    ],
    "image": null
  },
  {
    "id": "makelele",
    "name": "Claude Makélélé",
    "aliases": [
      "Claude Makélélé",
      "Makelele",
      "Makélélé",
      "μακελελε"
    ],
    "nation": [
      "France",
      "Γαλλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "My club history holds the answer.",
      "Οι ομάδες της καριέρας μου κρύβουν την απάντηση."
    ],
    "clues": [
      [
        "On international duty, I played for France.",
        "Στις διεθνείς διοργανώσεις αγωνίστηκα με την εθνική: Γαλλία."
      ],
      [
        "A chapter of my career was written at Celta Vigo.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Celta Vigo."
      ],
      [
        "I also appeared in the shirt of Real Madrid.",
        "Αγωνίστηκα επίσης με τη φανέλα της Real Madrid."
      ],
      [
        "My list of clubs includes Chelsea.",
        "Στη λίστα των ομάδων μου βρίσκεται και η Chelsea."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Celta Vigo",
      "Real Madrid",
      "Chelsea"
    ],
    "image": null
  },
  {
    "id": "veron",
    "name": "Juan Sebastián Verón",
    "aliases": [
      "Juan Sebastián Verón",
      "Veron",
      "Verón",
      "βερον"
    ],
    "nation": [
      "Argentina",
      "Αργεντινή"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "teaser": [
      "Follow the shirts I wore to uncover my identity.",
      "Ακολούθησε τις φανέλες που φόρεσα για να βρεις ποιος είμαι."
    ],
    "clues": [
      [
        "A chapter of my career was written at Lazio.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Lazio."
      ],
      [
        "I also appeared in the shirt of Manchester United.",
        "Αγωνίστηκα επίσης με τη φανέλα της Manchester United."
      ],
      [
        "My list of clubs includes Chelsea.",
        "Στη λίστα των ομάδων μου βρίσκεται και η Chelsea."
      ],
      [
        "On international duty, I played for Argentina.",
        "Στις διεθνείς διοργανώσεις αγωνίστηκα με την εθνική: Αργεντινή."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Lazio",
      "Manchester United",
      "Chelsea"
    ],
    "image": null
  },
  {
    "id": "crespo",
    "name": "Hernán Crespo",
    "aliases": [
      "Hernán Crespo",
      "Crespo",
      "κρεσπο"
    ],
    "nation": [
      "Argentina",
      "Αργεντινή"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Several clubs share a chapter of my story.",
      "Αρκετοί σύλλογοι μοιράζονται ένα κεφάλαιο της ιστορίας μου."
    ],
    "clues": [
      [
        "I also appeared in the shirt of Lazio.",
        "Αγωνίστηκα επίσης με τη φανέλα της Lazio."
      ],
      [
        "My list of clubs includes Chelsea.",
        "Στη λίστα των ομάδων μου βρίσκεται και η Chelsea."
      ],
      [
        "On international duty, I played for Argentina.",
        "Στις διεθνείς διοργανώσεις αγωνίστηκα με την εθνική: Αργεντινή."
      ],
      [
        "A chapter of my career was written at Parma.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Parma."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Parma",
      "Lazio",
      "Chelsea"
    ],
    "image": null
  },
  {
    "id": "shevchenko",
    "name": "Andriy Shevchenko",
    "aliases": [
      "Andriy Shevchenko",
      "Shevchenko",
      "σεβτσενκο"
    ],
    "nation": [
      "Ukraine",
      "Ουκρανία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "My club history holds the answer.",
      "Οι ομάδες της καριέρας μου κρύβουν την απάντηση."
    ],
    "clues": [
      [
        "My list of clubs includes Chelsea.",
        "Στη λίστα των ομάδων μου βρίσκεται και η Chelsea."
      ],
      [
        "On international duty, I played for Ukraine.",
        "Στις διεθνείς διοργανώσεις αγωνίστηκα με την εθνική: Ουκρανία."
      ],
      [
        "A chapter of my career was written at Dynamo Kyiv.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Dynamo Kyiv."
      ],
      [
        "I also appeared in the shirt of AC Milan.",
        "Αγωνίστηκα επίσης με τη φανέλα της AC Milan."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Dynamo Kyiv",
      "AC Milan",
      "Chelsea"
    ],
    "image": null
  },
  {
    "id": "inzaghi",
    "name": "Filippo Inzaghi",
    "aliases": [
      "Filippo Inzaghi",
      "Inzaghi",
      "Pippo Inzaghi",
      "ιντζαγκι"
    ],
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "Follow the shirts I wore to uncover my identity.",
      "Ακολούθησε τις φανέλες που φόρεσα για να βρεις ποιος είμαι."
    ],
    "clues": [
      [
        "On international duty, I played for Italy.",
        "Στις διεθνείς διοργανώσεις αγωνίστηκα με την εθνική: Ιταλία."
      ],
      [
        "A chapter of my career was written at Atalanta.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Atalanta."
      ],
      [
        "I also appeared in the shirt of Juventus.",
        "Αγωνίστηκα επίσης με τη φανέλα της Juventus."
      ],
      [
        "My list of clubs includes AC Milan.",
        "Στη λίστα των ομάδων μου βρίσκεται και η AC Milan."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Atalanta",
      "Juventus",
      "AC Milan"
    ],
    "image": null
  },
  {
    "id": "delpiero",
    "name": "Alessandro Del Piero",
    "aliases": [
      "Alessandro Del Piero",
      "Del Piero",
      "ντελ πιερο"
    ],
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Forward",
      "Επιθετικός"
    ],
    "teaser": [
      "Several clubs share a chapter of my story.",
      "Αρκετοί σύλλογοι μοιράζονται ένα κεφάλαιο της ιστορίας μου."
    ],
    "clues": [
      [
        "A chapter of my career was written at Padova.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Padova."
      ],
      [
        "I also appeared in the shirt of Juventus.",
        "Αγωνίστηκα επίσης με τη φανέλα της Juventus."
      ],
      [
        "My list of clubs includes Sydney FC.",
        "Στη λίστα των ομάδων μου βρίσκεται και η Sydney FC."
      ],
      [
        "On international duty, I played for Italy.",
        "Στις διεθνείς διοργανώσεις αγωνίστηκα με την εθνική: Ιταλία."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Padova",
      "Juventus",
      "Sydney FC"
    ],
    "image": null
  },
  {
    "id": "anelka",
    "name": "Nicolas Anelka",
    "aliases": [
      "Nicolas Anelka",
      "Anelka",
      "ανελκα"
    ],
    "nation": [
      "France",
      "Γαλλία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "teaser": [
      "My club history holds the answer.",
      "Οι ομάδες της καριέρας μου κρύβουν την απάντηση."
    ],
    "clues": [
      [
        "I also appeared in the shirt of Real Madrid.",
        "Αγωνίστηκα επίσης με τη φανέλα της Real Madrid."
      ],
      [
        "My list of clubs includes Chelsea.",
        "Στη λίστα των ομάδων μου βρίσκεται και η Chelsea."
      ],
      [
        "On international duty, I played for France.",
        "Στις διεθνείς διοργανώσεις αγωνίστηκα με την εθνική: Γαλλία."
      ],
      [
        "A chapter of my career was written at Arsenal.",
        "Ένα κεφάλαιο της καριέρας μου γράφτηκε στην Arsenal."
      ]
    ],
    "birthDate": null,
    "goals": null,
    "assists": null,
    "cleanSheets": null,
    "highestMarketValue": null,
    "clubs": [
      "Arsenal",
      "Real Madrid",
      "Chelsea"
    ],
    "image": null
  }
]];


/* GAME CATEGORIES */
/* 30 additional players — Unlimited only */
UNLIMITED_PLAYERS.push(
  ...[
    ["xavi", "Xavi Hernández", "Spain", "Ισπανία",
      "Midfielder", "Μέσος", "Barcelona", "Al Sadd",
      ["xavi", "xavi hernandez", "τσαβι"]],

    ["iniesta", "Andrés Iniesta", "Spain", "Ισπανία",
      "Midfielder", "Μέσος", "Barcelona", "Vissel Kobe",
      ["iniesta", "andres iniesta", "ινιεστα"]],

    ["busquets", "Sergio Busquets", "Spain", "Ισπανία",
      "Midfielder", "Μέσος", "Barcelona", "Inter Miami",
      ["busquets", "μπουσκετς"]],

    ["pique", "Gerard Piqué", "Spain", "Ισπανία",
      "Defender", "Αμυντικός", "Manchester United", "Barcelona",
      ["pique", "πικε"]],

    ["ramos", "Sergio Ramos", "Spain", "Ισπανία",
      "Defender", "Αμυντικός", "Sevilla", "Real Madrid",
      ["ramos", "ραμος"]],

    ["marcelo", "Marcelo", "Brazil", "Βραζιλία",
      "Defender", "Αμυντικός", "Real Madrid", "Olympiacos",
      ["marcelo", "μαρσελο"]],

    ["danialves", "Dani Alves", "Brazil", "Βραζιλία",
      "Defender", "Αμυντικός", "Sevilla", "Barcelona",
      ["dani alves", "daniel alves", "alves", "ντανι αλβες", "αλβες"]],

    ["robertocarlos", "Roberto Carlos", "Brazil", "Βραζιλία",
      "Defender", "Αμυντικός", "Inter Milan", "Real Madrid",
      ["roberto carlos", "ρομπερτο καρλος"]],

    ["lahm", "Philipp Lahm", "Germany", "Γερμανία",
      "Defender", "Αμυντικός", "Stuttgart", "Bayern Munich",
      ["lahm", "λαμ"]],

    ["klose", "Miroslav Klose", "Germany", "Γερμανία",
      "Striker", "Σέντερ φορ", "Werder Bremen", "Lazio",
      ["klose", "κλοζε"]],

    ["podolski", "Lukas Podolski", "Germany", "Γερμανία",
      "Forward", "Επιθετικός", "Köln", "Arsenal",
      ["podolski", "ποντολσκι"]],

    ["schweinsteiger", "Bastian Schweinsteiger", "Germany", "Γερμανία",
      "Midfielder", "Μέσος", "Bayern Munich", "Manchester United",
      ["schweinsteiger", "σβαϊνσταϊγκερ", "σβαινσταιγκερ"]],

    ["ozil", "Mesut Özil", "Germany", "Γερμανία",
      "Midfielder", "Μέσος", "Real Madrid", "Arsenal",
      ["ozil", "özil", "οζιλ"]],

    ["khedira", "Sami Khedira", "Germany", "Γερμανία",
      "Midfielder", "Μέσος", "Real Madrid", "Juventus",
      ["khedira", "κεντιρα"]],

    ["mariogomez", "Mario Gómez", "Germany", "Γερμανία",
      "Striker", "Σέντερ φορ", "Bayern Munich", "Fiorentina",
      ["mario gomez", "gomez", "μαριο γκομεζ", "γκομεζ"]],

    ["klinsmann", "Jürgen Klinsmann", "Germany", "Γερμανία",
      "Striker", "Σέντερ φορ", "Inter Milan", "Tottenham Hotspur",
      ["klinsmann", "jurgen klinsmann", "κλινσμαν"]],

    ["voller", "Rudi Völler", "Germany", "Γερμανία",
      "Striker", "Σέντερ φορ", "Roma", "Marseille",
      ["voller", "völler", "voeller", "φελερ", "βολερ"]],

    ["cantona", "Eric Cantona", "France", "Γαλλία",
      "Forward", "Επιθετικός", "Leeds United", "Manchester United",
      ["cantona", "καντονα"]],

    ["markhughes", "Mark Hughes", "Wales", "Ουαλία",
      "Forward", "Επιθετικός", "Manchester United", "Barcelona",
      ["mark hughes", "hughes", "μαρκ χιουζ", "χιουζ"]],

    ["yorke", "Dwight Yorke", "Trinidad and Tobago", "Τρινιντάντ και Τομπάγκο",
      "Striker", "Σέντερ φορ", "Aston Villa", "Manchester United",
      ["yorke", "dwight yorke", "γιορκ"]],

    ["andycole", "Andy Cole", "England", "Αγγλία",
      "Striker", "Σέντερ φορ", "Newcastle United", "Manchester United",
      ["andy cole", "andrew cole", "αντι κολ", "αντι κοουλ"]],

    ["solskjaer", "Ole Gunnar Solskjær", "Norway", "Νορβηγία",
      "Striker", "Σέντερ φορ", "Molde", "Manchester United",
      ["solskjaer", "solskjær", "solskjaer", "σολσκιερ", "σολσκιαιρ"]],

    ["sheringham", "Teddy Sheringham", "England", "Αγγλία",
      "Striker", "Σέντερ φορ", "Tottenham Hotspur", "Manchester United",
      ["sheringham", "σερινγχαμ", "σεριγχαμ"]],

    ["fowler", "Robbie Fowler", "England", "Αγγλία",
      "Striker", "Σέντερ φορ", "Liverpool", "Leeds United",
      ["fowler", "φαουλερ"]],

    ["mcmanaman", "Steve McManaman", "England", "Αγγλία",
      "Midfielder", "Μέσος", "Liverpool", "Real Madrid",
      ["mcmanaman", "μακμαναμαν"]],

    ["mascherano", "Javier Mascherano", "Argentina", "Αργεντινή",
      "Midfielder / Defender", "Μέσος / Αμυντικός", "Liverpool", "Barcelona",
      ["mascherano", "μασερανο", "μασκερανο"]],

    ["tevez", "Carlos Tévez", "Argentina", "Αργεντινή",
      "Forward", "Επιθετικός", "Manchester City", "Juventus",
      ["tevez", "tévez", "τεβες"]],

    ["higuain", "Gonzalo Higuaín", "Argentina", "Αργεντινή",
      "Striker", "Σέντερ φορ", "Real Madrid", "Napoli",
      ["higuain", "higuaín", "ιγκουαιν"]],

    ["diegomilito", "Diego Milito", "Argentina", "Αργεντινή",
      "Striker", "Σέντερ φορ", "Genoa", "Inter Milan",
      ["diego milito", "milito", "ντιεγκο μιλιτο", "μιλιτο"]],

    ["zanetti", "Javier Zanetti", "Argentina", "Αργεντινή",
      "Defender / Midfielder", "Αμυντικός / Μέσος", "Banfield", "Inter Milan",
      ["zanetti", "ζανετι", "τζανετι"]]
  ]
    .filter(row => !UNLIMITED_PLAYERS.some(player => player.id === row[0]))
    .map((row, index) => {
      const [
        id, name, nationEN, nationEL,
        positionEN, positionEL, clubA, clubB, aliases
      ] = row;

      const clues = [
        [
          `I represented ${nationEN} internationally.`,
          `Αγωνίστηκα με την εθνική: ${nationEL}.`
        ],
        [
          `My career includes a spell at ${clubA}.`,
          `Η καριέρα μου περιλαμβάνει ένα πέρασμα από την ${clubA}.`
        ],
        [
          `My role on the pitch: ${positionEN.toLowerCase()}.`,
          `Η θέση μου στο γήπεδο: ${positionEL}.`
        ],
        [
          `I also wore the shirt of ${clubB}.`,
          `Φόρεσα επίσης τη φανέλα της ${clubB}.`
        ]
      ];

      // Vary the opening clue instead of always starting with nationality.
      const offset = (index + 1) % clues.length;

      return {
        id,
        name,
        aliases: [...new Set([name, ...aliases])],
        nation: [nationEN, nationEL],
        position: [positionEN, positionEL],
        teaser: [
          [
            "Follow my career to uncover my name.",
            "Different shirts, one player. Who am I?",
            "My football journey holds the answer."
          ][index % 3],
          [
            "Ακολούθησε την καριέρα μου για να βρεις το όνομά μου.",
            "Διαφορετικές φανέλες, ένας παίκτης. Ποιος είμαι;",
            "Η ποδοσφαιρική μου διαδρομή κρύβει την απάντηση."
          ][index % 3]
        ],
        clues: [
          ...clues.slice(offset),
          ...clues.slice(0, offset)
        ],
        birthDate: null,
        goals: null,
        assists: null,
        cleanSheets: null,
        highestMarketValue: null,
        clubs: [clubA, clubB],
        image: null
      };
    })
);
/* Additional players are exclusive to Football Unlimited. */
UNLIMITED_PLAYERS.push(...[
  ["hleb", "Alexander Hleb", "Belarus", "Λευκορωσία", "Midfielder", "Μέσος", "Arsenal", "Barcelona", ["hleb", "alexander hleb", "χλεμπ"]],
  ["rosicky", "Tomáš Rosický", "Czech Republic", "Τσεχία", "Midfielder", "Μέσος", "Borussia Dortmund", "Arsenal", ["rosicky", "tomas rosicky", "ροσίσκι", "ροσισκι"]],
  ["benayoun", "Yossi Benayoun", "Israel", "Ισραήλ", "Midfielder", "Μέσος", "Liverpool", "Chelsea", ["benayoun", "yossi benayoun", "μπεναγιουν"]],
  ["malouda", "Florent Malouda", "France", "Γαλλία", "Winger", "Εξτρέμ", "Lyon", "Chelsea", ["malouda", "florent malouda", "μαλουντα"]],
  ["saha", "Louis Saha", "France", "Γαλλία", "Striker", "Σέντερ φορ", "Fulham", "Everton", ["saha", "louis saha", "σαχα"]],
  ["yakubu", "Yakubu Aiyegbeni", "Nigeria", "Νιγηρία", "Striker", "Σέντερ φορ", "Portsmouth", "Everton", ["yakubu", "yakubu aiyegbeni", "γιακουμπου"]],
  ["kranjcar", "Niko Kranjčar", "Croatia", "Κροατία", "Midfielder", "Μέσος", "Portsmouth", "Tottenham", ["kranjcar", "niko kranjcar", "κρανιτσαρ"]],
  ["dembaba", "Demba Ba", "Senegal", "Σενεγάλη", "Striker", "Σέντερ φορ", "Newcastle United", "Chelsea", ["demba ba", "ντεμπα μπα"]],
  ["nolan", "Kevin Nolan", "England", "Αγγλία", "Midfielder", "Μέσος", "Bolton Wanderers", "Newcastle United", ["nolan", "kevin nolan", "νολαν"]],
  ["tugay", "Tugay Kerimoğlu", "Turkey", "Τουρκία", "Midfielder", "Μέσος", "Rangers", "Blackburn Rovers", ["tugay", "tugay kerimoglu", "τουγκαϊ", "τουγκαι"]]
].map(([id,name,nationEN,nationEL,positionEN,positionEL,clubA,clubB,aliases]) => ({
  id, name, aliases: [...new Set([name,...aliases])],
  nation: [nationEN,nationEL], position: [positionEN,positionEL],
  teaser: ["Two clubs on my career path can help you find my name.", "Δύο ομάδες της καριέρας μου μπορούν να σε βοηθήσουν να βρεις το όνομά μου."],
  clues: [
    [`My career includes a spell at ${clubA}.`, `Η καριέρα μου περιλαμβάνει ένα πέρασμα από την ${clubA}.`],
    [`My role on the pitch: ${positionEN.toLowerCase()}.`, `Η θέση μου στο γήπεδο: ${positionEL}.`],
    [id === "nolan" ? "I come from England." : `My international team: ${nationEN}.`, id === "nolan" ? "Κατάγομαι από την Αγγλία." : `Η εθνική μου ομάδα: ${nationEL}.`],
    [`I also wore the shirt of ${clubB}.`, `Φόρεσα επίσης τη φανέλα της ${clubB}.`]
  ],
  birthDate:null, goals:null, assists:null, cleanSheets:null,
  highestMarketValue:null, clubs:[clubA,clubB], image:null
})));

const GAME_DATA = [
  {
    id: "football",
    name: "Football",
    available: true,
    category: "SPORT",

    description: [
      "Who Am I?",
      "Ποιος είμαι;"
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
    available: true,
    category: "ANIME",

    description: [
      "Guess the character",
      "Μάντεψε τον χαρακτήρα"
    ]
  },

  {
    id: "gaming",
    name: "Gaming",
    available: true,
    category: "GAMING",
    description: ["Characters & quotes", "Χαρακτήρες & ατάκες"]
  },

  {id: "greek", name: "Greek", available: true, category: "CINEMA & TV", description: ["Greek movies & series", "Ελληνικές ταινίες & σειρές"]},

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
    (r.mode === "classic" ? UNLIMITED_PLAYERS : P).some(
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
    classicFirst: 0,
    categoryScores: {}
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

    state.categoryScores = window.GMPCategoryScores.clean(saved.categoryScores);

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
  await saveOnlineStats();

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

  state.categoryScores=window.GMPCategoryScores.merge(state.categoryScores,currentProfile.category_scores);
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

  if(Object.hasOwn(currentProfile,"category_scores"))stats.category_scores=window.GMPCategoryScores.clean(state.categoryScores);

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
    return true;
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
  // Keep published Daily answers unchanged through 8 October 2026.
  const dailyPool = value < 20735 ? P.filter(player => player.id !== "gerdmuller") : P;
  const elapsed =
    value - START;

  const cycle =
    Math.floor(
      elapsed / dailyPool.length
    );

  const order =
    [...dailyPool].sort(
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
    P.find(player => player.id === id) ||
    UNLIMITED_PLAYERS.find(
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


function setLanguageLabel(element, en, el) {
  if (!element || en === undefined || el === undefined) return;
  element.classList.add('localized-label');
  let english = element.querySelector(':scope > .label-en');
  let greek = element.querySelector(':scope > .label-el');
  if (!english || !greek) {
    english = document.createElement('span'); english.className = 'label-en';
    greek = document.createElement('span'); greek.className = 'label-el';
    element.replaceChildren(english, greek);
  }
  if (english.textContent !== en) english.textContent = en;
  if (greek.textContent !== el) greek.textContent = el;
  english.setAttribute('aria-hidden', String(lang !== 'en'));
  greek.setAttribute('aria-hidden', String(lang !== 'el'));
}
function stabilizeLanguageLabels() {
  // Account controls are rendered from the current session by renderAuthState.
  document.querySelectorAll('[data-en][data-el]:not([data-auth])').forEach(element => setLanguageLabel(element, element.dataset.en, element.dataset.el));
  GAME_DATA.forEach(game => {
    const card = document.querySelector('[data-game="'+game.id+'"]');
    if (!card) return;
    setLanguageLabel(card.querySelector('.card-badge'), game.available?'PLAY NOW':'COMING SOON', game.available?'ΠΑΙΞΕ ΤΩΡΑ':'ΣΥΝΤΟΜΑ');
    setLanguageLabel(card.querySelector('.card-bottom span'), ...game.description);
  });
}

function applyLanguage() {
  if (!authBusy) {
    setAuthMode(authMode);
  }

  document.documentElement.lang =
    lang;

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
  stabilizeLanguageLabels();
}

let languageFrame = null;
let requestedLanguage = lang;
function requestLanguage(next) {
  requestedLanguage = next === 'el' ? 'el' : 'en';
  // Update the selection immediately; commit only the latest click each frame.
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.classList.toggle('selected', button.dataset.lang === requestedLanguage);
    button.setAttribute('aria-pressed', String(button.dataset.lang === requestedLanguage));
  });
  if (languageFrame !== null) return;
  languageFrame = requestAnimationFrame(() => {
    languageFrame = null;
    if (lang === requestedLanguage) return;
    lang = requestedLanguage;
    applyLanguage();
    window.dispatchEvent(new Event('gmp-language-change'));
    write('GMP_LANGUAGE', lang);
  });
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => requestLanguage(button.dataset.lang)));

/* GAME CARDS */

function renderGames() {
  const grid =
    $("gameGrid");

  if (!grid) return;

  const playableGames = GAME_DATA.filter(game => game.available);
  // Preserve image nodes and event handlers when translating the existing cards.
  if (grid.children.length === playableGames.length && playableGames.every(game => grid.querySelector('[data-game="'+game.id+'"]'))) {
    playableGames.forEach(game => {
      const card=grid.querySelector('[data-game="'+game.id+'"]');
      setLanguageLabel(card.querySelector('.card-badge'),game.available?'PLAY NOW':'COMING SOON',game.available?'ΠΑΙΞΕ ΤΩΡΑ':'ΣΥΝΤΟΜΑ');
      card.querySelector('.card-info h3').textContent=game.name;
      setLanguageLabel(card.querySelector('.card-bottom span'),...game.description);
    });
    return;
  }
  grid.innerHTML = "";

  playableGames.forEach(game => {
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

    const cardImages={greek:'greek-tv-photo.jpg',gaming:'gaming.svg',football:'football-ball.svg',movies:'movies.jpg','one-piece':'one-piece.svg',naruto:'naruto.svg',bleach:'bleach.png',basketball:'basketball.jpg',cricket:'cricket-action.jpg',pokemon:'pokemon.svg'};
    const logo=['one-piece','naruto','bleach','pokemon'].includes(game.id);
    card.innerHTML = `
      <div
        class="game-card-image licensed-art ${logo?'licensed-logo':''}"
        aria-hidden="true"
      ><img src="images/${cardImages[game.id]}" alt="" loading="lazy" decoding="async"></div>

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
                ? ""
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
    const rankingFields="id, username, points, correct_guesses, first_try, streak, best_streak";
    const request=fields=>supabaseClient.from("profiles").select(fields).order("points",{ascending:false}).order("correct_guesses",{ascending:false}).order("first_try",{ascending:false});
    let {data,error}=await request(rankingFields+", category_scores");
    if(error&&["42703","PGRST204"].includes(error.code)&&String(error.message).includes("category_scores"))({data,error}=await request(rankingFields));

    if (error) {
      throw error;
    }

    onlineLeaderboard =
      (data || []).map(
        profile => ({
          id: profile.id,
          categoryScores:window.GMPCategoryScores.clean(profile.category_scores),

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

  const title=window.GMPCategoryScores.names[boardFilter]||window.GMPCategoryScores.names.overall;
  if($("leaderboardTitle"))$("leaderboardTitle").textContent=title;
  const leaderboard=window.GMPCategoryScores.ranking(onlineLeaderboard,boardFilter);

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
                : "The leaderboard is waiting for its first players.",
              leaderboardError
                ? "Η κατάταξη δεν είναι προσωρινά διαθέσιμη."
                : "Η κατάταξη περιμένει τις πρώτες νίκες σε αυτή την κατηγορία."
            )
          }
        </strong>

        <p>
          ${
            T(
              leaderboardError
                ? "You can still play as a guest."
                : "Log in to add your wins to the overall rankings.",

              leaderboardError
                ? "Μπορείς να συνεχίσεις ως επισκέπτης."
                : "Συνδέσου για να μετρούν οι νίκες σου στη συνολική κατάταξη."
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

  // A podium of two or three names looks empty; show it once the board fills up.
  podium.hidden = leaderboard.length < 10;
  if (podium.hidden) return;

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
  const previous = state.classic?.pid;
  const deckKey = activeStorageKey + ":unlimited-deck-v1";
  let deck = [];
  try {
    const stored = JSON.parse(read(deckKey, "[]"));
    if (Array.isArray(stored)) deck = [...new Set(stored)].filter(id =>
      UNLIMITED_PLAYERS.some(p => p.id === id) && id !== previous);
  } catch {}
  if (!deck.length) {
    deck = UNLIMITED_PLAYERS.map(p => p.id);
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    if (deck[deck.length - 1] === previous && deck.length > 1) {
      [deck[0], deck[deck.length - 1]] = [deck[deck.length - 1], deck[0]];
    }
  }
  const id = deck.pop();
  state.classic = make(id, "classic");
  write(deckKey, JSON.stringify(deck));
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
      !valid(state.classic) ||
      state.classic.status !==
        "playing"
        ? newClassicRound()
        : state.classic;

    return;
  }

  round = null;
}

function openGame(id) {
  if (id === "greek") { window.location.href = "greek/"; return; }
  if (id === "gaming") { openGamingGame(); return; }
  if (id === "football") {
    openFootballGame("unlimited");
    return;
  }
  if (id === "one-piece") {
    openOnePieceGame();
    return;
  }
  if (id !== "football") {
    return;
  }

  currentMode = "classic";

  document
    .querySelectorAll("[data-mode]")
    .forEach(button => {
      button.hidden =
        button.dataset.mode !== "classic";
    });

  selectRound("classic");
  openDialog("gameDialog");
  renderGame();
}

if ($("dailyLaunchButton")) {
  $("dailyLaunchButton").onclick =
    () => {
      openFootballGame("daily");
      return;
      currentMode = "daily";

      document
        .querySelectorAll("[data-mode]")
        .forEach(button => {
          button.hidden =
            button.dataset.mode === "classic";
        });

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

function isOriginClue(clue) {
  const text = clue.join(" ").toLowerCase();
  return /\b(born|birthplace|nationality|national|international|represent|represented|home country|my country|come from)\b|is where my story began|i am (french|brazilian)|εθνικ|γεννή|κατάγο|πατρίδα|αγωνίζομαι με|αγωνίστηκα με|είμαι (γάλλος|βραζιλιάνος)/i.test(text);
}

function orderFootballClues(clues) {
  const origin = clues.filter(isOriginClue);
  const career = clues.filter(clue => !isOriginClue(clue));
  // Preserve every clue, putting origin after two career clues.
  return [...career.slice(0, 2), ...origin, ...career.slice(2)];
}

const ORIGIN_HINT_PLAYERS = new Set([
  "rakitic", "berbatov", "dzeko", "cambiasso", "kuyt", "parkjisung",
  "essien", "veron", "anelka", "podolski", "khedira", "mariogomez",
  "voller", "markhughes", "yorke", "andycole", "sheringham", "fowler",
  "mcmanaman", "diegomilito", "hleb", "rosicky", "benayoun", "malouda",
  "saha", "yakubu", "kranjcar", "dembaba", "nolan", "tugay"
]);

function footballCluesForPlayer(player, clues) {
  if (ORIGIN_HINT_PLAYERS.has(player.id)) return orderFootballClues(clues);
  const career = clues.filter(clue => !isOriginClue(clue));
  const replacements = [
    [`My role on the pitch: ${player.position[0].toLowerCase()}.`, `Η θέση μου στο γήπεδο: ${player.position[1]}.`],
    [`My career includes ${player.clubs.join(" and ")}.`, `Η καριέρα μου περιλαμβάνει τις ομάδες: ${player.clubs.join(", ")}.`],
    [`I have worn the shirts of ${player.clubs.length} clubs listed in this challenge.`, `Στη διαδρομή μου για αυτό το challenge περιλαμβάνονται ${player.clubs.length} σύλλογοι.`]
  ];
  for (const clue of replacements) {
    if (career.length >= clues.length) break;
    if (!career.some(existing => existing[0] === clue[0])) career.push(clue);
  }
  return career;
}

function displayClues(player, mode) {
  const unlimited = {
  "messi": [
    [
      "Argentina is where my story began.",
      "Η ιστορία μου ξεκίνησε στην Αργεντινή."
    ],
    [
      "Barcelona was where I rose to global stardom.",
      "Στην Barcelona καθιερώθηκα ως παγκόσμιος σταρ."
    ],
    [
      "More than one Ballon d'Or has come my way.",
      "Η Χρυσή Μπάλα έχει έρθει στα χέρια μου περισσότερες από μία φορές."
    ],
    [
      "A World Cup triumph with my country is part of my story.",
      "Στην πορεία μου υπάρχει και η κατάκτηση Παγκοσμίου Κυπέλλου με την εθνική μου."
    ]
  ],
  "ronaldo": [
    [
      "My birthplace is in Portugal.",
      "Ο τόπος γέννησής μου βρίσκεται στην Πορτογαλία."
    ],
    [
      "Manchester United features on my career path.",
      "Η Manchester United είναι ένας σταθμός της καριέρας μου."
    ],
    [
      "At Real Madrid, I became one of the club's most famous names.",
      "Στη Real Madrid έγινα ένα από τα πιο διάσημα ονόματα του συλλόγου."
    ],
    [
      "You may know me by the nickname CR7.",
      "Ίσως με γνωρίζεις με το παρατσούκλι CR7."
    ]
  ],
  "mbappe": [
    [
      "My nationality? French.",
      "Η εθνικότητά μου; Γαλλική."
    ],
    [
      "Monaco was where I developed as a player.",
      "Στη Monaco αναδείχθηκα ως ποδοσφαιριστής."
    ],
    [
      "Paris Saint-Germain saw me become a superstar.",
      "Στην Paris Saint-Germain εξελίχθηκα σε superstar."
    ],
    [
      "A World Cup winner before my twenties.",
      "Πρωταθλητής κόσμου πριν κλείσω τα είκοσι."
    ]
  ],
  "haaland": [
    [
      "Norway is the country I play for internationally.",
      "Στις εθνικές διοργανώσεις αγωνίζομαι με τη Νορβηγία."
    ],
    [
      "Borussia Dortmund is one of my former clubs.",
      "Η Borussia Dortmund είναι μία από τις προηγούμενες ομάδες μου."
    ],
    [
      "Manchester City became my next destination.",
      "Η Manchester City έγινε ο επόμενος προορισμός μου."
    ],
    [
      "Professional football runs in the family: my father played too.",
      "Το επαγγελματικό ποδόσφαιρο είναι οικογενειακή υπόθεση: έπαιζε και ο πατέρας μου."
    ]
  ],
  "modric": [
    [
      "On international duty, I wear the colours of Croatia.",
      "Με την εθνική φοράω τα χρώματα της Κροατίας."
    ],
    [
      "My career includes a spell at Tottenham.",
      "Η καριέρα μου περιλαμβάνει ένα πέρασμα από την Tottenham."
    ],
    [
      "Real Madrid is where I earned legendary status.",
      "Στη Real Madrid απέκτησα τη φήμη ενός θρύλου."
    ],
    [
      "The Ballon d'Or is among my honours.",
      "Στις διακρίσεις μου βρίσκεται και η Χρυσή Μπάλα."
    ]
  ],
  "ronaldinho": [
    [
      "Brazil is my home country.",
      "Η πατρίδα μου είναι η Βραζιλία."
    ],
    [
      "Paris Saint-Germain once had me in their squad.",
      "Κάποτε ανήκα στο ρόστερ της Paris Saint-Germain."
    ],
    [
      "A major chapter of my career unfolded at Barcelona.",
      "Ένα μεγάλο κεφάλαιο της καριέρας μου γράφτηκε στην Barcelona."
    ],
    [
      "Skills, creativity and free kicks made me famous.",
      "Ντρίμπλες, δημιουργικότητα και φάουλ με έκαναν διάσημο."
    ]
  ],
  "zidane": [
    [
      "France was my team on the international stage.",
      "Στη διεθνή σκηνή αγωνιζόμουν με την εθνική Γαλλίας."
    ],
    [
      "Juventus is part of my playing history.",
      "Η Juventus αποτελεί μέρος της ποδοσφαιρικής μου διαδρομής."
    ],
    [
      "Real Madrid came later in my playing career.",
      "Η Real Madrid ακολούθησε αργότερα στην καριέρα μου ως παίκτη."
    ],
    [
      "Two goals in a World Cup final are on my record.",
      "Στο ενεργητικό μου έχω δύο γκολ σε έναν τελικό Παγκοσμίου Κυπέλλου."
    ]
  ],
  "henry": [
    [
      "I come from France.",
      "Κατάγομαι από τη Γαλλία."
    ],
    [
      "Monaco gave me my start in senior football.",
      "Στη Monaco έκανα το ξεκίνημά μου στο επαγγελματικό ποδόσφαιρο."
    ],
    [
      "Arsenal is where I became a club legend.",
      "Στην Arsenal έγινα θρύλος του συλλόγου."
    ],
    [
      "Barcelona was a later stop on my career journey.",
      "Η Barcelona ήταν μεταγενέστερος σταθμός στην καριέρα μου."
    ]
  ]
};
  const clues = mode === "classic" ? (unlimited[player.id] || player.clues) : player.clues;
  return footballCluesForPlayer(player, clues);
}

function renderClues(player) {
  const grid =
    $("clueGrid");

  if (!grid) return;

  grid.innerHTML = "";

  const visible =
    visibleClues(round);

  displayClues(player, round.mode).forEach(
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

  window.GMPCategoryScores.add(state,"football",earned+bonus,extraAttempt?0:attempt,state.streak);
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

window.GMPScoreAdapter={
 async context(){
  try{await ensureOnline();const {data}=await supabaseClient.auth.getSession();if(data.session?.user&&currentUser?.id!==data.session.user.id){currentUser=data.session.user;await loadCurrentProfile();}}catch{}
  loadState();return {state,key:activeStorageKey,user:currentUser,client:supabaseClient};
 },persist:save,refresh:renderAll,sync:saveOnlineStats
};
window.addEventListener("online",()=>{if(currentUser)saveOnlineStats();});
