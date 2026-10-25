import {SUPPLIED_CARDS} from './supplied-cards.mjs?v=1';
// Original decks plus the supplied adult deck. Pairings are consent-filtered.
const decks = {
  casual: {
    truth: [
      ['What song do you secretly know every word to?','Ποιο τραγούδι ξέρεις κρυφά απ’ έξω;'],
      ['What is the most ridiculous thing you believed as a child?','Ποιο είναι το πιο αστείο πράγμα που πίστευες ως παιδί;'],
      ['What harmless habit would your friends roast you for?','Για ποια αθώα συνήθειά σου θα σε πείραζαν οι φίλοι σου;'],
      ['What is your most embarrassing autocorrect story? No need to show your phone.','Ποιο είναι το πιο αστείο λάθος του autocorrect σου; Δεν χρειάζεται να δείξεις το κινητό.'],
      ['Which fictional character would be your worst roommate?','Ποιος φανταστικός χαρακτήρας θα ήταν ο χειρότερος συγκάτοικός σου;'],
      ['What is the strangest food combination you actually enjoy?','Ποιος παράξενος συνδυασμός φαγητών σου αρέσει πραγματικά;'],
      ['What tiny thing makes you unreasonably competitive?','Σε ποιο ασήμαντο πράγμα γίνεσαι υπερβολικά ανταγωνιστικός;'],
      ['What purchase looked much better in your imagination?','Ποια αγορά έμοιαζε πολύ καλύτερη στη φαντασία σου;'],
      ['If your life had a warning label, what would it say?','Αν η ζωή σου είχε προειδοποιητική ετικέτα, τι θα έγραφε;'],
      ['Which trend did you follow and immediately regret?','Ποια μόδα ακολούθησες και το μετάνιωσες αμέσως;'],
      ['What is the funniest excuse you have used to leave an event?','Ποια είναι η πιο αστεία δικαιολογία που χρησιμοποίησες για να φύγεις από μια εκδήλωση;'],
      ['What skill do you confidently pretend to have?','Ποια ικανότητα παριστάνεις με αυτοπεποίθηση ότι έχεις;'],
      ['What would your younger self find surprising about you?','Τι θα εξέπληττε τον νεότερο εαυτό σου για εσένα σήμερα;'],
      ['Which movie scene always makes you laugh?','Ποια σκηνή ταινίας σε κάνει πάντα να γελάς;'],
      ['What would you do with a completely free afternoon?','Τι θα έκανες με ένα εντελώς ελεύθερο απόγευμα;'],
      ['What local expression from your country would you teach the group?','Ποια έκφραση από τη χώρα σου θα μάθαινες στην παρέα;'],
      ['What compliment have you never forgotten?','Ποιο κομπλιμέντο δεν έχεις ξεχάσει ποτέ;'],
      ['What would be your ideal first date with {target}?','Ποιο θα ήταν το ιδανικό πρώτο σου ραντεβού με το άτομο {target};',true],
      ['What non-physical quality do you find charming about {target}?','Ποιο στοιχείο του χαρακτήρα του ατόμου {target} βρίσκεις γοητευτικό;',true],
      ['What song would you choose for a dance with {target}?','Ποιο τραγούδι θα διάλεγες για έναν χορό με το άτομο {target};',true]
    ],
    dare: [
      ['Give your best dramatic movie-trailer voice for ten seconds.','Κάνε τη φωνή ενός δραματικού trailer για δέκα δευτερόλεπτα.'],
      ['Sell an imaginary, completely useless invention to the group.','Πούλησε στην παρέα μια φανταστική, εντελώς άχρηστη εφεύρεση.'],
      ['Describe your day as if you were a sports commentator.','Περιέγραψε τη μέρα σου σαν αθλητικός σχολιαστής.'],
      ['Perform a ten-second dance using only your shoulders.','Χόρεψε για δέκα δευτερόλεπτα χρησιμοποιώντας μόνο τους ώμους σου.'],
      ['Mime a familiar movie and let the group guess it.','Κάνε παντομίμα μια γνωστή ταινία για να τη βρει η παρέα.'],
      ['Give a serious acceptance speech for the award for Best Nap.','Βγάλε σοβαρό ευχαριστήριο λόγο για το βραβείο Καλύτερου Υπνάκου.'],
      ['Invent a fancy restaurant name for your last meal.','Δώσε στο τελευταίο σου γεύμα ένα όνομα ακριβού εστιατορίου.'],
      ['Speak like a robot until the end of this turn.','Μίλα σαν ρομπότ μέχρι να τελειώσει αυτή η σειρά.'],
      ['Show three different reactions to winning an imaginary lottery.','Δείξε τρεις διαφορετικές αντιδράσεις όταν κερδίζεις ένα φανταστικό λαχείο.'],
      ['Make up a two-line song about this room.','Φτιάξε ένα τραγουδάκι δύο στίχων για αυτό το δωμάτιο.'],
      ['Present an ordinary object as a priceless museum exhibit.','Παρουσίασε ένα καθημερινό αντικείμενο σαν ανεκτίμητο έκθεμα μουσείου.'],
      ['Tell a tiny story using only five words.','Πες μια μικρή ιστορία με μόνο πέντε λέξεις.'],
      ['Act out a slow-motion celebration while staying seated.','Κάνε έναν πανηγυρισμό σε αργή κίνηση, μένοντας καθιστός.'],
      ['Give everyone a fictional superhero nickname. Keep it kind.','Δώσε σε όλους ένα φανταστικό όνομα υπερήρωα. Με καλή διάθεση.'],
      ['Teach the group one friendly greeting from your country.','Μάθε στην παρέα έναν φιλικό χαιρετισμό από τη χώρα σου.'],
      ['Describe an animal without naming it; let the group guess.','Περιέγραψε ένα ζώο χωρίς να το ονομάσεις για να το βρει η παρέα.'],
      ['Give yourself a new entrance catchphrase and perform it.','Βρες μια ατάκα για την είσοδό σου στο δωμάτιο και παίξ’ την.'],
      ['Offer {target} a sincere compliment about their personality.','Κάνε στο άτομο {target} ένα ειλικρινές κομπλιμέντο για τον χαρακτήρα του.',true],
      ['Ask {target} to help invent the name of your imaginary romantic comedy.','Ζήτησε από το άτομο {target} να βρείτε μαζί τον τίτλο της φανταστικής ρομαντικής σας κωμωδίας.',true],
      ['Invite {target} to exchange your cheesiest, kindest pickup lines.','Πρότεινε στο άτομο {target} να ανταλλάξετε τις πιο γλυκανάλατες, ευγενικές ατάκες φλερτ σας.',true]
    ]
  },
  extreme: {
    truth: [
      ['What is the boldest romantic move you have actually made? Leave names out.','Ποια είναι η πιο τολμηρή κίνηση φλερτ που έχεις κάνει; Χωρίς ονόματα.'],
      ['What harmless secret about yourself would surprise this group?','Ποιο αθώο μυστικό σου θα εξέπληττε αυτή την παρέα;'],
      ['When did you last try very hard to look completely unbothered?','Πότε προσπάθησες τελευταία να φανείς εντελώς αδιάφορος ενώ δεν ήσουν;'],
      ['What is your biggest dating red flag in yourself?','Ποιο είναι το δικό σου μεγαλύτερο red flag στα ραντεβού;'],
      ['What compliment would make you blush right now?','Ποιο κομπλιμέντο θα σε έκανε να κοκκινίσεις αυτή τη στιγμή;'],
      ['What is the most obvious hint you completely missed?','Ποιο ολοφάνερο υπονοούμενο δεν κατάλαβες καθόλου;'],
      ['What is the most awkward date moment you can laugh about now?','Ποια αμήχανη στιγμή από ραντεβού μπορείς πλέον να θυμάσαι γελώντας;'],
      ['Have you ever rehearsed a conversation before sending one message? Tell the story without naming anyone.','Έχεις προβάρει ολόκληρη συζήτηση πριν στείλεις ένα μήνυμα; Πες την ιστορία χωρίς ονόματα.'],
      ['What romantic gesture sounds wonderful in a movie but awkward in real life?','Ποια ρομαντική κίνηση φαίνεται υπέροχη σε ταινία αλλά αμήχανη στην πραγματικότητα;'],
      ['Which first impression of you is usually wrong?','Ποια πρώτη εντύπωση για εσένα είναι συνήθως λάθος;'],
      ['What is one thing you wish you were brave enough to say more often?','Τι θα ήθελες να έχεις το θάρρος να λες πιο συχνά;'],
      ['What is the pettiest reason you have lost interest in a date?','Ποιος είναι ο πιο ασήμαντος λόγος που έχασες το ενδιαφέρον σου για ένα ραντεβού;'],
      ['What is your most embarrassing attempt to look cool?','Ποια είναι η πιο αμήχανη προσπάθειά σου να φανείς cool;'],
      ['What personal boundary did you only learn to express recently?','Ποιο προσωπικό όριο έμαθες μόλις πρόσφατα να εκφράζεις;'],
      ['What is one opinion you changed because you liked someone?','Ποια άποψή σου άλλαξες επειδή σου άρεσε κάποιος;'],
      ['What makes you feel attractive without changing your appearance?','Τι σε κάνει να νιώθεις ελκυστικός χωρίς να αλλάξεις την εμφάνισή σου;'],
      ['Which fictional romance is your embarrassing favourite?','Ποιο φανταστικό ειδύλλιο σου αρέσει αλλά ντρέπεσαι να το παραδεχτείς;'],
      ['What was the first thing you noticed about {target}?','Ποιο ήταν το πρώτο πράγμα που πρόσεξες στο άτομο {target};',true],
      ['If {target} asked you on a surprise date, what would you hope they planned?','Αν το άτομο {target} σε καλούσε σε ραντεβού έκπληξη, τι θα ήλπιζες να έχει σχεδιάσει;',true],
      ['What question have you wanted to ask {target} but felt too shy to ask? They may pass too.','Ποια ερώτηση ήθελες να κάνεις στο άτομο {target} αλλά ντρεπόσουν; Μπορεί κι εκείνο να πει πάσο.',true]
    ],
    dare: [
      ['Deliver your most confident pickup line to an imaginary crush.','Πες την πιο σίγουρη ατάκα φλερτ σου σε ένα φανταστικό crush.'],
      ['Perform a fully clothed, ten-second perfume advert starring yourself.','Παίξε για δέκα δευτερόλεπτα σε μια διαφήμιση αρώματος, με όλα τα ρούχα σου.'],
      ['Give a dramatic breakup speech to an imaginary bad habit.','Βγάλε έναν δραματικό λόγο χωρισμού σε μια φανταστική κακή συνήθεια.'],
      ['Act out arriving at a date and realising you are at the wrong restaurant.','Παίξε ότι φτάνεις σε ραντεβού και συνειδητοποιείς ότι είσαι σε λάθος εστιατόριο.'],
      ['Invent three terrible dating-app opening lines, then one good one.','Βρες τρεις απαίσιες πρώτες ατάκες για dating app και μετά μία καλή.'],
      ['Read an imaginary grocery list as a dramatic love letter.','Διάβασε μια φανταστική λίστα για ψώνια σαν δραματικό ερωτικό γράμμα.'],
      ['Give yourself a 15-second pep talk before an imaginary first date.','Δώσε στον εαυτό σου δεκαπέντε δευτερόλεπτα εμψύχωσης πριν από ένα φανταστικό πρώτο ραντεβού.'],
      ['Model three over-the-top red-carpet poses, staying in your space.','Κάνε τρεις υπερβολικές πόζες κόκκινου χαλιού, μένοντας στον χώρο σου.'],
      ['Explain your ideal date using only five words and a dramatic look.','Περιέγραψε το ιδανικό σου ραντεβού με πέντε λέξεις και ένα δραματικό βλέμμα.'],
      ['Play both sides of a hilariously awkward first-date conversation.','Παίξε και τους δύο ρόλους μιας κωμικά αμήχανης συζήτησης σε πρώτο ραντεβού.'],
      ['Confess your love to an imaginary pizza with a completely straight face.','Εξομολογήσου την αγάπη σου σε μια φανταστική πίτσα με εντελώς σοβαρό ύφος.'],
      ['Invent an honest dating bio for yourself in two sentences. Do not post it.','Γράψε προφορικά ένα ειλικρινές dating bio για εσένα σε δύο προτάσεις. Μην το δημοσιεύσεις.'],
      ['Give your best mysterious entrance, then ruin it with an awful joke.','Κάνε την πιο μυστηριώδη είσοδό σου και χάλασέ την με ένα απαίσιο αστείο.'],
      ['Turn a harmless embarrassing memory into a dramatic movie scene.','Μετέτρεψε μια αθώα ντροπιαστική ανάμνηση σε δραματική σκηνή ταινίας.'],
      ['Name three things you like about yourself without making a joke.','Πες τρία πράγματα που σου αρέσουν στον εαυτό σου χωρίς να κάνεις αστείο.'],
      ['Announce an imaginary engagement to your favourite snack.','Ανακοίνωσε έναν φανταστικό αρραβώνα με το αγαπημένο σου σνακ.'],
      ['Create a ten-second romantic movie scene alone, with no words.','Παίξε μόνος σου μια ρομαντική σκηνή ταινίας δέκα δευτερολέπτων, χωρίς λόγια.'],
      ['Invite {target} to a ten-second eye-contact challenge. Either of you can stop whenever you like.','Πρότεινε στο άτομο {target} να κοιταχτείτε στα μάτια για δέκα δευτερόλεπτα. Οποιοσδήποτε μπορεί να σταματήσει όποτε θέλει.',true],
      ['Ask {target} to join a completely improvised, no-touch rom-com scene.','Πρότεινε στο άτομο {target} μια εντελώς αυτοσχέδια σκηνή ρομαντικής κωμωδίας, χωρίς άγγιγμα.',true],
      ['Offer {target} three sincere compliments, without mentioning appearance.','Κάνε στο άτομο {target} τρία ειλικρινή κομπλιμέντα, χωρίς αναφορά στην εμφάνιση.',true]
    ]
  }
};
// Questions supplied by the user in two screenshots, transcribed and translated.
const PHOTO_QUESTIONS = [
  {
    "id": "photo-truth-elevator",
    "mode": "casual",
    "type": "truth",
    "en": "If you had to choose one person here to be stuck in an elevator with for 24 hours, who would you choose and why?",
    "el": "Αν έπρεπε να διαλέξεις έναν/μία από την παρέα εδώ μέσα για να κλειστείτε σε ένα ασανσέρ για 24 ώρες, ποιον θα διάλεγες και γιατί;",
    "pair": false,
    "adult": false
  },
  {
    "id": "photo-truth-private-moment",
    "mode": "extreme",
    "type": "truth",
    "en": "What was your most awkward moment of being caught during a private moment?",
    "el": "Ποια είναι η πιο αμήχανη στιγμή που σε «έπιασαν» σε προσωπική σου στιγμή;",
    "pair": false,
    "adult": true
  },
  {
    "id": "photo-truth-wrong-recipient",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever sent a message or photo to the wrong person by mistake, and what happened?",
    "el": "Έχεις ποτέ στείλει μήνυμα ή φωτογραφία σε λάθος άτομο κατά λάθος και τι έγινε;",
    "pair": false,
    "adult": false
  },
  {
    "id": "photo-truth-red-flag",
    "mode": "casual",
    "type": "truth",
    "en": "What is the biggest red flag in a partner that you personally forgive?",
    "el": "Ποιο είναι το μεγαλύτερο «red flag» σε έναν σύντροφο που εσύ ο ίδιος/η ίδια συγχωρείς;",
    "pair": false,
    "adult": false
  },
  {
    "id": "photo-truth-holiday-fling",
    "mode": "extreme",
    "type": "truth",
    "en": "Who in this group is most likely to have a one-night stand on vacation?",
    "el": "Ποιος από την παρέα είναι πιο πιθανό να κάνει σχέση μίας βραδιάς στις διακοπές;",
    "pair": false,
    "adult": true
  },
  {
    "id": "photo-truth-flirting",
    "mode": "extreme",
    "type": "truth",
    "en": "Who is most likely to flirt while already in a relationship?",
    "el": "Ποιος είναι πιο πιθανό να φλερτάρει ενώ έχει ήδη σχέση;",
    "pair": false,
    "adult": true
  },
  {
    "id": "photo-truth-dating-profile",
    "mode": "extreme",
    "type": "truth",
    "en": "Who is most likely to have a secret profile on a dating app?",
    "el": "Ποιος είναι πιο πιθανό να έχει κρυφό προφίλ σε εφαρμογή γνωριμιών;",
    "pair": false,
    "adult": true
  }
];
// Keep stable IDs for saved sessions while correcting answer-only prompts.
const ANSWER_ONLY_IDS = new Set(["extreme-dare-9", "extreme-dare-12", "extreme-dare-15", "supplied-dare-8", "supplied-dare-19", "supplied-dare-26", "supplied-dare-36"]);
const EXTRA_PHOTO_QUESTIONS = [
  {
    "id": "photo2-truth-first-impression",
    "mode": "casual",
    "type": "truth",
    "pair": true,
    "partnerOnly": true,
    "adult": false,
    "en": "What was your first impression of {target}, and what do you find most attractive about them right now?",
    "el": "Ποια ήταν η πρώτη σου εντύπωση για το άτομο {target} και ποιο στοιχείο του βρίσκεις πιο ελκυστικό αυτή τη στιγμή;"
  },
  {
    "id": "photo2-truth-weekend",
    "mode": "casual",
    "type": "truth",
    "pair": true,
    "partnerOnly": true,
    "adult": false,
    "en": "If you and {target} could disappear together for a weekend, where would you want to go and what would you do?",
    "el": "Αν μπορούσατε να εξαφανιστείτε για ένα Σαββατοκύριακο, εσύ και το άτομο {target}, πού θα ήθελες να πάτε και τι θα κάνατε;"
  },
  {
    "id": "photo2-truth-unshared-fantasy",
    "mode": "extreme",
    "type": "truth",
    "pair": true,
    "partnerOnly": true,
    "adult": true,
    "en": "What secret fantasy have you not yet shared with {target}?",
    "el": "Ποια κρυφή σου φαντασίωση δεν έχεις εξομολογηθεί ακόμα στο άτομο {target};"
  },
  {
    "id": "photo2-truth-partner-tastes",
    "mode": "extreme",
    "type": "truth",
    "pair": false,
    "minPlayers": 3,
    "adult": true,
    "en": "Who in this group do you think has the most unusual taste in partners?",
    "el": "Ποιος από την παρέα πιστεύεις ότι έχει τα πιο περίεργα γούστα στους συντρόφους του;"
  },
  {
    "id": "photo2-truth-staying-in",
    "mode": "casual",
    "type": "truth",
    "pair": false,
    "minPlayers": 3,
    "adult": false,
    "en": "Have you ever lied to this group to avoid going out so you could stay in with someone you were flirting with?",
    "el": "Έχεις πει ποτέ ψέματα στην παρέα για να αποφύγεις να βγεις και να μείνεις με κάποιο φλερτ;"
  },
  {
    "id": "photo2-truth-getting-attention",
    "mode": "casual",
    "type": "truth",
    "pair": false,
    "adult": false,
    "en": "What is the craziest thing you have done to get someone’s attention?",
    "el": "Ποιο είναι το πιο τρελό πράγμα που έχεις κάνει για να τραβήξεις την προσοχή κάποιου ή κάποιας;"
  },
  {
    "id": "photo2-truth-kissed-in-group",
    "mode": "extreme",
    "type": "truth",
    "pair": false,
    "minPlayers": 3,
    "adult": true,
    "en": "Have you ever kissed someone in this group, or thought about doing it?",
    "el": "Έχεις φιλήσει ποτέ κάποιον από αυτή την παρέα ή έχεις σκεφτεί να το κάνεις;"
  },
  {
    "id": "photo2-truth-date-red-flag",
    "mode": "casual",
    "type": "truth",
    "pair": false,
    "adult": false,
    "en": "What is the biggest red flag you have tolerated on a date?",
    "el": "Ποιο είναι το μεγαλύτερο «red flag» που έχεις ανεχτεί σε ένα ραντεβού;"
  }
];
const GROUP_QUESTION_IDS = new Set(["photo-truth-elevator", "photo-truth-holiday-fling", "photo-truth-flirting", "photo-truth-dating-profile", "casual-truth-16", "extreme-truth-2", "supplied-truth-15"]);
const TWO_PLAYER_WORDING = {
  "casual-dare-2": {
    "en": "Sell an imaginary, completely useless invention to the other player.",
    "el": "Πούλησε στο άλλο άτομο μια φανταστική, εντελώς άχρηστη εφεύρεση."
  },
  "casual-dare-5": {
    "en": "Mime a familiar movie and let the other player guess it.",
    "el": "Κάνε παντομίμα μια γνωστή ταινία για να τη βρει το άλλο άτομο."
  },
  "casual-dare-14": {
    "en": "Give the other player a fictional superhero nickname. Keep it kind.",
    "el": "Δώσε στο άλλο άτομο ένα φανταστικό όνομα υπερήρωα. Με καλή διάθεση."
  },
  "casual-dare-15": {
    "en": "Teach the other player one friendly greeting from your country.",
    "el": "Μάθε στο άλλο άτομο έναν φιλικό χαιρετισμό από τη χώρα σου."
  },
  "casual-dare-16": {
    "en": "Describe an animal without naming it and let the other player guess.",
    "el": "Περιέγραψε ένα ζώο χωρίς να το ονομάσεις για να το βρει το άλλο άτομο."
  },
  "supplied-dare-5": {
    "en": "Dance in an overtly sensual way for 30 seconds to music chosen by the other player. Let loose!",
    "el": "Χόρεψε έντονα αισθησιακά για 30 δευτερόλεπτα με μουσική που διαλέγει το άλλο άτομο."
  },
  "supplied-dare-32": {
    "en": "Give the other player three very deliberate winks.",
    "el": "Κλείσε επιτηδευμένα το μάτι στο άλλο άτομο τρεις φορές."
  },
  "supplied-dare-41": {
    "en": "Propose a dirty toast to the other player.",
    "el": "Κάνε μια πικάντικη πρόποση στο άλλο άτομο."
  },
  "supplied-dare-50": {
    "en": "End your turn by blowing a lingering kiss to the other player.",
    "el": "Κλείσε τη σειρά σου στέλνοντας ένα παρατεταμένο φιλί στο άλλο άτομο."
  },
  "photo2-truth-first-impression": {
    "en": "What was your first impression of the person opposite you, and what do you find most attractive about them right now?",
    "el": "Ποια ήταν η πρώτη σου εντύπωση για το άτομο απέναντί σου και ποιο στοιχείο του βρίσκεις πιο ελκυστικό αυτή τη στιγμή;"
  },
  "photo2-truth-weekend": {
    "en": "If the two of you could disappear together for a weekend, where would you want to go and what would you do?",
    "el": "Αν φεύγατε οι δυο σας για ένα Σαββατοκύριακο, πού θα ήθελες να πάτε και τι θα κάνατε;"
  },
  "photo2-truth-unshared-fantasy": {
    "en": "What secret fantasy have you not yet shared with the person opposite you?",
    "el": "Ποια κρυφή σου φαντασίωση δεν έχεις εξομολογηθεί ακόμα στο άτομο απέναντί σου;"
  }
};
export const CARDS = [...Object.entries(decks).flatMap(([mode,types])=>Object.entries(types).flatMap(([type,rows])=>rows.map(([en,el,pair=false],i)=>({id:`${mode}-${type}-${i+1}`,mode,type,en,el,pair})))),...SUPPLIED_CARDS,...PHOTO_QUESTIONS,...EXTRA_PHOTO_QUESTIONS].map(card=>({...card,...(ANSWER_ONLY_IDS.has(card.id)?{type:'truth'}:{}),...(GROUP_QUESTION_IDS.has(card.id)?{minPlayers:3}:{})})).map(card=>({...card,variants:TWO_PLAYER_WORDING[card.id]?{two:TWO_PLAYER_WORDING[card.id]}:undefined,...(card.id==='supplied-dare-32'?{minTargets:0,variants:{two:TWO_PLAYER_WORDING[card.id],group:{en:'Give a very deliberate wink to each of the other players.',el:'Κλείσε επιτηδευμένα το μάτι σε καθένα από τα υπόλοιπα άτομα της παρέας.'}}}:{})}));
export function cardWording(card,language,playerCount){return (playerCount===2?card.variants?.two?.[language]:card.variants?.group?.[language])||card[language];}
