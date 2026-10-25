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
const RESEARCH_CARDS_18 = [
  {
    "id": "research18-late-excuse",
    "mode": "casual",
    "type": "truth",
    "en": "When did you last say you were almost there while you had not even left home?",
    "el": "Πότε είπες τελευταία φορά «σε πέντε λεπτά είμαι εκεί» ενώ δεν είχες φύγει καν από το σπίτι;",
    "adult": false,
    "pair": false
  },
  {
    "id": "research18-search-memory",
    "mode": "casual",
    "type": "truth",
    "en": "What have you searched online lately that would sound ridiculous without the backstory?",
    "el": "Τι έψαξες πρόσφατα στο ίντερνετ που, χωρίς την ιστορία από πίσω, θα ακουγόταν τελείως γελοίο;",
    "adult": false,
    "pair": false
  },
  {
    "id": "research18-wrong-laugh",
    "mode": "casual",
    "type": "truth",
    "en": "Tell us about a moment when you laughed and immediately realised it was the wrong time.",
    "el": "Ποια φορά σε έπιασαν γέλια και κατάλαβες αμέσως ότι ήταν η χειρότερη δυνατή στιγμή;",
    "adult": false,
    "pair": false
  },
  {
    "id": "research18-pretended-hear",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever nodded through a conversation without hearing a word? What did you accidentally agree to?",
    "el": "Έχεις κάνει ότι ακούς μια κουβέντα ενώ δεν άκουγες τίποτα; Σε τι κατέληξες να συμφωνήσεις;",
    "adult": false,
    "pair": false
  },
  {
    "id": "research18-kept-object",
    "mode": "casual",
    "type": "truth",
    "en": "What battered old thing do you refuse to throw away, and what is its story?",
    "el": "Ποιο παλιό, ταλαιπωρημένο πράγμα δεν πετάς με τίποτα και ποια είναι η ιστορία του;",
    "adult": false,
    "pair": false
  },
  {
    "id": "research18-small-drama",
    "mode": "casual",
    "type": "truth",
    "en": "What tiny inconvenience makes you react as if your whole day is ruined?",
    "el": "Ποιο ασήμαντο πράγμα σε κάνει να αντιδράς λες και καταστράφηκε ολόκληρη η μέρα σου;",
    "adult": false,
    "pair": false
  },
  {
    "id": "research18-unearned-pride",
    "mode": "casual",
    "type": "truth",
    "en": "What very small achievement are you still far too proud of?",
    "el": "Για ποιο εντελώς μικρό κατόρθωμα καμαρώνεις ακόμα περισσότερο απ’ όσο θα έπρεπε;",
    "adult": false,
    "pair": false
  },
  {
    "id": "research18-misheard-lyric",
    "mode": "casual",
    "type": "truth",
    "en": "Which song lyric did you sing completely wrong for years? What did you think it said?",
    "el": "Ποιον στίχο τραγουδούσες λάθος για χρόνια και τι νόμιζες ότι έλεγε;",
    "adult": false,
    "pair": false
  },
  {
    "id": "research18-group-lost-train",
    "mode": "casual",
    "type": "truth",
    "en": "Who here would miss a train because they stopped for a snack? Defend your choice.",
    "el": "Ποιος από την παρέα θα έχανε το τρένο επειδή σταμάτησε για κάτι να φάει; Γιατί το πιστεύεις;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "research18-group-spare-key",
    "mode": "casual",
    "type": "truth",
    "en": "Who in this group would you trust with a spare key, and who would forget where they put it?",
    "el": "Σε ποιον από την παρέα θα εμπιστευόσουν ένα δεύτερο κλειδί και ποιος θα ξεχνούσε πού το έβαλε;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "research18-song-opening",
    "mode": "casual",
    "type": "dare",
    "en": "The other players pick a familiar song. Sing its opening for fifteen seconds without looking up the words.",
    "el": "Οι υπόλοιποι διαλέγουν ένα γνωστό τραγούδι. Τραγούδησε την αρχή του για δεκαπέντε δευτερόλεπτα χωρίς να ψάξεις τους στίχους.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player picks a familiar song. Sing its opening for fifteen seconds without looking up the words.",
        "el": "Το άλλο άτομο διαλέγει ένα γνωστό τραγούδι. Τραγούδησε την αρχή του για δεκαπέντε δευτερόλεπτα χωρίς να ψάξεις τους στίχους."
      }
    }
  },
  {
    "id": "research18-mime-job",
    "mode": "casual",
    "type": "dare",
    "en": "Choose a job without telling anyone. Mime it for the others to guess, with a thirty-second limit.",
    "el": "Διάλεξε κρυφά ένα επάγγελμα. Δείξ’ το με παντομίμα για να το βρουν οι υπόλοιποι, με όριο τριάντα δευτερόλεπτα.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "Choose a job without telling the other player. Mime it for up to thirty seconds while they try to guess it.",
        "el": "Διάλεξε ένα επάγγελμα χωρίς να το πεις στο άλλο άτομο. Δείξ’ το με παντομίμα για έως τριάντα δευτερόλεπτα, ενώ προσπαθεί να το μαντέψει."
      }
    }
  },
  {
    "id": "research18-clap-pattern",
    "mode": "casual",
    "type": "dare",
    "en": "Clap a short rhythm and let the others clap it back. Add one beat each time until someone loses the pattern.",
    "el": "Χτύπα ένα μικρό ρυθμικό μοτίβο με παλαμάκια και άσε τους υπόλοιπους να το επαναλάβουν. Πρόσθετε ένα χτύπημα κάθε φορά μέχρι κάποιος να μπερδευτεί.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "Clap a short rhythm for the other player to repeat. Add one beat each time until one of you loses the pattern.",
        "el": "Χτύπα ένα μικρό μοτίβο με παλαμάκια για να το επαναλάβει το άλλο άτομο. Πρόσθετε ένα χτύπημα κάθε φορά μέχρι ένας από τους δύο να μπερδευτεί."
      }
    }
  },
  {
    "id": "research18-silent-sentence",
    "mode": "casual",
    "type": "dare",
    "en": "Mouth a simple sentence without making a sound. The others have three tries to lip-read it.",
    "el": "Πες μια απλή πρόταση μόνο με τα χείλη, χωρίς ήχο. Οι υπόλοιποι έχουν τρεις προσπάθειες να καταλάβουν τι λες.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "Mouth a simple sentence without a sound. The other player has three tries to lip-read it.",
        "el": "Πες μια απλή πρόταση μόνο με τα χείλη, χωρίς ήχο. Το άλλο άτομο έχει τρεις προσπάθειες να καταλάβει τι λες."
      }
    }
  },
  {
    "id": "research18-backwards-name",
    "mode": "casual",
    "type": "dare",
    "en": "Say your first name backwards, then try your surname. You get ten seconds and no writing it down.",
    "el": "Πες το μικρό σου όνομα ανάποδα και μετά δοκίμασε το επώνυμο. Έχεις δέκα δευτερόλεπτα, χωρίς να τα γράψεις.",
    "adult": false,
    "pair": false
  },
  {
    "id": "research18-no-teeth",
    "mode": "casual",
    "type": "dare",
    "en": "For twenty seconds, explain how to make a sandwich without letting your teeth show.",
    "el": "Για είκοσι δευτερόλεπτα, εξήγησε πώς φτιάχνεται ένα τοστ χωρίς να φανούν καθόλου τα δόντια σου.",
    "adult": false,
    "pair": false
  },
  {
    "id": "research18-opposite-hand",
    "mode": "casual",
    "type": "dare",
    "en": "Draw a self-portrait with your non-writing hand in twenty seconds. The others choose its title.",
    "el": "Ζωγράφισε τον εαυτό σου με το χέρι που δεν γράφεις, σε είκοσι δευτερόλεπτα. Οι υπόλοιποι δίνουν τίτλο στο έργο.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "Draw a self-portrait with your non-writing hand in twenty seconds. The other player gives it a title.",
        "el": "Ζωγράφισε τον εαυτό σου με το χέρι που δεν γράφεις, σε είκοσι δευτερόλεπτα. Το άλλο άτομο δίνει τίτλο στο έργο."
      }
    }
  },
  {
    "id": "research18-alphabet-switch",
    "mode": "casual",
    "type": "dare",
    "en": "Take turns with the other players naming things in this room, alphabetically. Keep going until you miss a letter.",
    "el": "Πες εναλλάξ με τους υπόλοιπους πράγματα που υπάρχουν στο δωμάτιο, με αλφαβητική σειρά. Συνεχίστε μέχρι να κολλήσεις σε ένα γράμμα.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "Take turns with the other player naming things in this room, alphabetically, until you miss a letter.",
        "el": "Πες εναλλάξ με το άλλο άτομο πράγματα που υπάρχουν στο δωμάτιο, με αλφαβητική σειρά, μέχρι να κολλήσεις σε ένα γράμμα."
      }
    }
  },
  {
    "id": "research18-group-conductor",
    "mode": "casual",
    "type": "dare",
    "en": "Conduct the group through ten seconds of humming. You may only use gestures to make them louder, quieter or stop.",
    "el": "Γίνε ο μαέστρος της παρέας για δέκα δευτερόλεπτα μουρμουρίσματος. Μόνο με κινήσεις, κάνε τους να δυναμώσουν, να χαμηλώσουν ή να σταματήσουν.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "research18-group-frozen-photo",
    "mode": "casual",
    "type": "dare",
    "en": "Give everyone a different pose, then count down to an imaginary group photo. Stay frozen for ten seconds; no actual photo needed.",
    "el": "Δώσε σε καθέναν διαφορετική πόζα και μέτρα αντίστροφα για μια φανταστική ομαδική φωτογραφία. Μείνετε ακίνητοι δέκα δευτερόλεπτα, χωρίς να χρειάζεται να βγάλετε φωτογραφία.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "research18-unsent-message",
    "mode": "extreme",
    "type": "truth",
    "en": "What is the boldest message you typed out, stared at, and never sent?",
    "el": "Ποιο ήταν το πιο τολμηρό μήνυμα που έγραψες, κοιτούσες για ώρα και τελικά δεν έστειλες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-pretended-unbothered",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever acted completely fine about someone seeing another person when you were actually jealous? What gave you away?",
    "el": "Έχεις κάνει ότι δεν σε νοιάζει που κάποιος βλέπει άλλο άτομο, ενώ ζήλευες; Τι σε πρόδωσε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-outfit-for-someone",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever dressed for one particular person and pretended it was a coincidence?",
    "el": "Έχεις ντυθεί επίτηδες για να σε προσέξει ένα συγκεκριμένο άτομο και μετά το έπαιξες «έτσι μου ήρθε»;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-different-in-private",
    "mode": "extreme",
    "type": "truth",
    "en": "Has someone treated you one way in private and another way in front of people? Did you call it out?",
    "el": "Σου έχει φερθεί κάποιος αλλιώς όταν είστε μόνοι και αλλιώς μπροστά σε κόσμο; Του το είπες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-left-on-read",
    "mode": "extreme",
    "type": "truth",
    "en": "When have you deliberately delayed replying to someone you actually liked, and what were you trying to achieve?",
    "el": "Πότε άργησες επίτηδες να απαντήσεις σε κάποιον που σου άρεσε και τι ήθελες να πετύχεις;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-planned-coincidence",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever arranged to be somewhere just to run into a person, without admitting that was why?",
    "el": "Έχεις κανονίσει να βρεθείς κάπου μόνο και μόνο για να «πετύχεις» ένα άτομο, χωρίς να παραδεχτείς ότι γι’ αυτό πήγες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-kiss-regret",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you shared a kiss and immediately known it should not happen a second time? What changed?",
    "el": "Έχεις φιλήσει κάποιον και καταλάβει αμέσως ότι δεν πρέπει να υπάρξει δεύτερη φορά; Τι άλλαξε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-last-minute-invite",
    "mode": "extreme",
    "type": "truth",
    "en": "What is the most last-minute invitation you have accepted because you really wanted to see that person?",
    "el": "Ποια πρόσκληση της τελευταίας στιγμής δέχτηκες επειδή ήθελες πολύ να δεις εκείνο το άτομο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-kept-the-attention",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you kept a conversation going because you liked the attention, even though you did not want it to go anywhere?",
    "el": "Έχεις κρατήσει μια κουβέντα ζωντανή επειδή σου άρεσε η προσοχή, ενώ δεν ήθελες να προχωρήσει πουθενά;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-leave-the-night",
    "mode": "extreme",
    "type": "truth",
    "en": "What kind of message could make you leave a night out early to see the person who sent it?",
    "el": "Τι μήνυμα θα μπορούσε να σε κάνει να φύγεις νωρίτερα από μια έξοδο για να δεις το άτομο που το έστειλε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-undefined-relationship",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you had something that felt like a relationship but neither person would name it? Who avoided the conversation?",
    "el": "Είχες ποτέ κάτι που έμοιαζε με σχέση αλλά κανείς δεν το έλεγε σχέση; Ποιος απέφευγε την κουβέντα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-chemistry-changed",
    "mode": "extreme",
    "type": "truth",
    "en": "Has a single conversation made you suddenly attracted to someone you had never seen that way?",
    "el": "Σε έχει κάνει μία μόνο συζήτηση να δεις ξαφνικά αλλιώς ένα άτομο που μέχρι τότε δεν σε τραβούσε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-group-spontaneous-date",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here could most easily talk you into an unplanned late-night date? What would they have to say?",
    "el": "Ποιος από την παρέα θα σε έπειθε πιο εύκολα για ένα αυθόρμητο βραδινό ραντεβού και τι θα έπρεπε να σου πει;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "research18-group-awkward-date",
    "mode": "extreme",
    "type": "truth",
    "en": "Who in this group would make an awkward date funny instead of painful, and why?",
    "el": "Ποιος από την παρέα θα έκανε ένα άβολο ραντεβού αστείο αντί για μαρτύριο και γιατί;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "research18-group-ex-text",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here is most likely to message an ex and then claim it was only to ask something practical?",
    "el": "Ποιος από την παρέα είναι πιο πιθανό να στείλει σε πρώην και μετά να πει «μια πληροφορία ήθελα μόνο»;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "research18-group-text-advice",
    "mode": "extreme",
    "type": "truth",
    "en": "Who would you ask to check a bold message before you sent it, and whose advice would make you regret it?",
    "el": "Σε ποιον από την παρέα θα έδειχνες ένα τολμηρό μήνυμα πριν το στείλεις και ποιανού τη συμβουλή θα μετάνιωνες;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "research18-partner-small-detail",
    "mode": "extreme",
    "type": "truth",
    "en": "What little detail about {target} keeps coming back to you after you have said goodbye?",
    "el": "Ποια μικρή λεπτομέρεια του ατόμου {target} σκέφτεσαι ξανά αφού έχετε αποχαιρετιστεί;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What little detail about the person opposite you stays in your mind after you say goodbye?",
        "el": "Ποια μικρή λεπτομέρεια του ατόμου απέναντί σου σου μένει στο μυαλό αφού αποχαιρετιστείτε;"
      }
    }
  },
  {
    "id": "research18-partner-stay-longer",
    "mode": "extreme",
    "type": "truth",
    "en": "Which night with {target} did you secretly wish would last a little longer? What made it different?",
    "el": "Ποιο βράδυ με το άτομο {target} θα ήθελες κρυφά να είχε κρατήσει λίγο παραπάνω και τι το έκανε διαφορετικό;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Which night together did you wish would last a little longer, and what made it different?",
        "el": "Ποιο βράδυ οι δυο σας θα ήθελες να είχε κρατήσει λίγο παραπάνω και τι το έκανε διαφορετικό;"
      }
    }
  },
  {
    "id": "research18-partner-initiate",
    "mode": "extreme",
    "type": "truth",
    "en": "What would you like {target} to initiate more often without you having to ask?",
    "el": "Τι θα ήθελες να ξεκινά πιο συχνά το άτομο {target}, χωρίς να χρειάζεται να το ζητήσεις;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What would you like the person opposite you to initiate more often, without you having to ask?",
        "el": "Τι θα ήθελες να ξεκινά πιο συχνά το άτομο απέναντί σου, χωρίς να χρειάζεται να το ζητήσεις;"
      }
    }
  },
  {
    "id": "research18-partner-missed-flirt",
    "mode": "extreme",
    "type": "truth",
    "en": "When has {target} been flirting with you and you only realised it much later?",
    "el": "Πότε σε φλέρταρε το άτομο {target} και το κατάλαβες πολύ αργότερα;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "When was the person opposite you flirting with you and you only realised it much later?",
        "el": "Πότε σε φλέρταρε το άτομο απέναντί σου και το κατάλαβες πολύ αργότερα;"
      }
    }
  },
  {
    "id": "research18-chorus-eye-contact",
    "mode": "extreme",
    "type": "dare",
    "en": "The others pick a chorus. Lip-sync twenty seconds of it while keeping a completely serious face.",
    "el": "Οι υπόλοιποι διαλέγουν ένα ρεφρέν. Κάνε lip-sync για είκοσι δευτερόλεπτα, κρατώντας εντελώς σοβαρό ύφος.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player picks a chorus. Lip-sync twenty seconds of it while keeping a completely serious face.",
        "el": "Το άλλο άτομο διαλέγει ένα ρεφρέν. Κάνε lip-sync για είκοσι δευτερόλεπτα, κρατώντας εντελώς σοβαρό ύφος."
      }
    }
  },
  {
    "id": "research18-real-invitation",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform a ten-second voice note asking someone out in your own style. Say it aloud; do not record or send it.",
    "el": "Κάνε μια πρόβα φωνητικού δέκα δευτερολέπτων, ζητώντας από κάποιον να βγείτε με το δικό σου στιλ. Πες το δυνατά, χωρίς εγγραφή ή αποστολή.",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-three-tones",
    "mode": "extreme",
    "type": "dare",
    "en": "The others choose an ordinary sentence. Deliver it three ways: shy, confident and teasing.",
    "el": "Οι υπόλοιποι διαλέγουν μια καθημερινή φράση. Πες την με τρεις τρόπους: ντροπαλά, με αυτοπεποίθηση και πειραχτικά.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player chooses an ordinary sentence. Deliver it three ways: shy, confident and teasing.",
        "el": "Το άλλο άτομο διαλέγει μια καθημερινή φράση. Πες την με τρεις τρόπους: ντροπαλά, με αυτοπεποίθηση και πειραχτικά."
      }
    }
  },
  {
    "id": "research18-straight-face",
    "mode": "extreme",
    "type": "dare",
    "en": "Keep a straight face for twenty seconds while the others take turns delivering their worst flirting lines.",
    "el": "Κράτα σοβαρό ύφος για είκοσι δευτερόλεπτα, ενώ οι υπόλοιποι λένε διαδοχικά τις χειρότερες ατάκες φλερτ τους.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "Keep a straight face for twenty seconds while the other player delivers their worst flirting lines.",
        "el": "Κράτα σοβαρό ύφος για είκοσι δευτερόλεπτα, ενώ το άλλο άτομο λέει τις χειρότερες ατάκες φλερτ του."
      }
    }
  },
  {
    "id": "research18-flirt-no-words",
    "mode": "extreme",
    "type": "dare",
    "en": "Show how you would catch someone’s attention across a room, without speaking or touching anyone. You have ten seconds.",
    "el": "Δείξε πώς θα τραβούσες την προσοχή κάποιου από την άλλη άκρη του δωματίου, χωρίς λόγια ή άγγιγμα. Έχεις δέκα δευτερόλεπτα.",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-walk-and-line",
    "mode": "extreme",
    "type": "dare",
    "en": "Make an entrance as if you have just spotted your date. Stop an arm’s length away and deliver your opening line.",
    "el": "Κάνε μια είσοδο σαν να είδες μόλις το ραντεβού σου. Σταμάτα σε απόσταση ενός χεριού και πες την πρώτη σου ατάκα.",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-dance-style-switch",
    "mode": "extreme",
    "type": "dare",
    "en": "Dance for twenty seconds. Whenever the others say switch, change your style immediately.",
    "el": "Χόρεψε για είκοσι δευτερόλεπτα. Κάθε φορά που οι υπόλοιποι λένε «αλλαγή», άλλαζε αμέσως στιλ.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "Dance for twenty seconds. Every time the other player says switch, change your style immediately.",
        "el": "Χόρεψε για είκοσι δευτερόλεπτα. Κάθε φορά που το άλλο άτομο λέει «αλλαγή», άλλαζε αμέσως στιλ."
      }
    }
  },
  {
    "id": "research18-silent-pickup",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out asking someone for their number using only facial expressions and gestures. No actual contact details.",
    "el": "Παίξε ότι ζητάς το τηλέφωνο κάποιου μόνο με εκφράσεις και κινήσεις. Χωρίς πραγματικά στοιχεία επικοινωνίας.",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-same-line-better",
    "mode": "extreme",
    "type": "dare",
    "en": "Deliver a short flirting line. The others coach your tone once, then you have to perform it again.",
    "el": "Πες μια σύντομη ατάκα φλερτ. Οι υπόλοιποι σου δίνουν μία οδηγία για το ύφος και την ξαναλές ακολουθώντας την.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "Deliver a short flirting line. The other player gives you one tip about your tone, then you perform it again.",
        "el": "Πες μια σύντομη ατάκα φλερτ. Το άλλο άτομο σου δίνει μία οδηγία για το ύφος και την ξαναλές ακολουθώντας την."
      }
    }
  },
  {
    "id": "research18-compliment-alphabet",
    "mode": "extreme",
    "type": "dare",
    "en": "Make up a playful compliment without using the words beautiful, hot or cute. Deliver it as if you genuinely mean it.",
    "el": "Φτιάξε ένα παιχνιδιάρικο κομπλιμέντο χωρίς τις λέξεις όμορφος, όμορφη, σέξι ή γλυκός. Πες το σαν να το εννοείς πραγματικά.",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-bad-date-recovery",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out accidentally calling a date by the wrong name, then try to recover in fifteen seconds.",
    "el": "Παίξε ότι μόλις είπες λάθος όνομα στο ραντεβού σου και προσπάθησε να το σώσεις μέσα σε δεκαπέντε δευτερόλεπτα.",
    "adult": true,
    "pair": false
  },
  {
    "id": "research18-one-word-story",
    "mode": "extreme",
    "type": "dare",
    "en": "Build a short flirtatious conversation one word at a time with the others. You must keep it going for twenty words.",
    "el": "Φτιάξε μια μικρή κουβέντα φλερτ, λέγοντας από μία λέξη με τους υπόλοιπους εναλλάξ. Κρατήστε την για είκοσι λέξεις.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "Build a short flirtatious conversation with the other player, one word each. Keep it going for twenty words.",
        "el": "Φτιάξε μια μικρή κουβέντα φλερτ με το άλλο άτομο, λέγοντας από μία λέξη εναλλάξ. Κρατήστε την για είκοσι λέξεις."
      }
    }
  },
  {
    "id": "research18-group-blind-vote",
    "mode": "extreme",
    "type": "dare",
    "en": "The group chooses an annoying but harmless date habit. Act it out for fifteen seconds without explaining what you are doing.",
    "el": "Η παρέα διαλέγει μια εκνευριστική αλλά αθώα συνήθεια σε ραντεβού. Παίξ’ τη για δεκαπέντε δευτερόλεπτα, χωρίς να εξηγείς τι κάνεις.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "research18-group-first-date-scene",
    "mode": "extreme",
    "type": "dare",
    "en": "The group gives you two harmless words. Act out arriving at a first date and fit both words naturally into your greeting.",
    "el": "Η παρέα σου δίνει δύο αθώες λέξεις. Παίξε ότι φτάνεις σε πρώτο ραντεβού και βάλε και τις δύο φυσικά στον χαιρετισμό σου.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "research18-partner-song-moment",
    "mode": "extreme",
    "type": "dare",
    "en": "If you both want to, invite {target} to a twenty-second slow dance. Let them pick the song.",
    "el": "Αν το θέλετε και οι δύο, κάλεσε το άτομο {target} σε έναν αργό χορό είκοσι δευτερολέπτων. Τη μουσική τη διαλέγει εκείνο.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "If you both want to, invite the person opposite you to a twenty-second slow dance. They choose the song.",
        "el": "Αν το θέλετε και οι δύο, κάλεσε το άτομο απέναντί σου σε έναν αργό χορό είκοσι δευτερολέπτων. Τη μουσική τη διαλέγει εκείνο."
      }
    }
  },
  {
    "id": "research18-partner-eye-message",
    "mode": "extreme",
    "type": "dare",
    "en": "Face {target}. Use only your eyes and your smile to invite them on a date; they guess what you meant.",
    "el": "Στάσου απέναντι από το άτομο {target}. Μόνο με το βλέμμα και το χαμόγελο, κάνε του πρόσκληση για ραντεβού για να μαντέψει τι εννοείς.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Face the other player. Invite them on a date using only your eyes and your smile; they guess what you meant.",
        "el": "Στάσου απέναντι από το άλλο άτομο. Μόνο με το βλέμμα και το χαμόγελο, κάνε του πρόσκληση για ραντεβού για να μαντέψει τι εννοείς."
      }
    }
  },
  {
    "id": "research18-partner-hand-heart",
    "mode": "extreme",
    "type": "dare",
    "en": "If {target} agrees, trace a small heart on their palm. They then trace one back without looking.",
    "el": "Αν συμφωνεί το άτομο {target}, σχημάτισε μια μικρή καρδιά στην παλάμη του. Μετά κάνει το ίδιο στη δική σου, χωρίς να κοιτάζει.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "If you both agree, trace a small heart on the other player’s palm. They then do the same on yours without looking.",
        "el": "Αν συμφωνείτε και οι δύο, σχημάτισε μια μικρή καρδιά στην παλάμη του άλλου ατόμου. Μετά κάνει το ίδιο στη δική σου, χωρίς να κοιτάζει."
      }
    }
  },
  {
    "id": "research18-partner-recreate-hello",
    "mode": "extreme",
    "type": "dare",
    "en": "Recreate the way you first greeted {target}, then do it again as the much more confident version of yourself today.",
    "el": "Αναπαράστησε πώς χαιρέτησες το άτομο {target} όταν πρωτογνωριστήκατε. Ξανακάν’ το μετά όπως θα το έκανες σήμερα, με περισσότερη αυτοπεποίθηση.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Recreate how you greeted the person opposite you when you first met. Then do it again as today’s more confident you.",
        "el": "Αναπαράστησε πώς χαιρέτησες το άτομο απέναντί σου όταν πρωτογνωριστήκατε. Ξανακάν’ το μετά όπως θα το έκανες σήμερα, με περισσότερη αυτοπεποίθηση."
      }
    }
  },
  {
    "id": "research18-partner-mirror",
    "mode": "extreme",
    "type": "dare",
    "en": "Face {target} and mirror their movements for twenty seconds, as if you were their reflection. Switch leader halfway.",
    "el": "Στάσου απέναντι από το άτομο {target} και μιμήσου τις κινήσεις του για είκοσι δευτερόλεπτα, σαν να είσαι ο καθρέφτης του. Στη μέση αλλάξτε αρχηγό.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Face the other player and mirror their movements for twenty seconds. Switch leader halfway through.",
        "el": "Στάσου απέναντι από το άλλο άτομο και μιμήσου τις κινήσεις του για είκοσι δευτερόλεπτα. Στη μέση αλλάξτε αρχηγό."
      }
    }
  },
  {
    "id": "research18-partner-real-voice",
    "mode": "extreme",
    "type": "dare",
    "en": "Look at {target} and say come a little closer three ways: joking, shy and confident. Stay where you are; this is about the delivery.",
    "el": "Κοίτα το άτομο {target} και πες «έλα λίγο πιο κοντά» με τρεις τρόπους: αστειευόμενα, ντροπαλά και με αυτοπεποίθηση. Μείνε στη θέση σου· η δοκιμασία είναι το ύφος.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Look at the other player and say come a little closer three ways: joking, shy and confident. Stay where you are; this is about the delivery.",
        "el": "Κοίτα το άλλο άτομο και πες «έλα λίγο πιο κοντά» με τρεις τρόπους: αστειευόμενα, ντροπαλά και με αυτοπεποίθηση. Μείνε στη θέση σου· η δοκιμασία είναι το ύφος."
      }
    }
  }
];
export const CARDS = [...Object.entries(decks).flatMap(([mode,types])=>Object.entries(types).flatMap(([type,rows])=>rows.map(([en,el,pair=false],i)=>({id:`${mode}-${type}-${i+1}`,mode,type,en,el,pair})))),...SUPPLIED_CARDS,...PHOTO_QUESTIONS,...EXTRA_PHOTO_QUESTIONS,...RESEARCH_CARDS_18].map(card=>({...card,...(ANSWER_ONLY_IDS.has(card.id)?{type:'truth'}:{}),...(GROUP_QUESTION_IDS.has(card.id)?{minPlayers:3}:{})})).map(card=>({...card,variants:TWO_PLAYER_WORDING[card.id]?{two:TWO_PLAYER_WORDING[card.id]}:card.variants,...(card.id==='supplied-dare-32'?{minTargets:0,variants:{two:TWO_PLAYER_WORDING[card.id],group:{en:'Give a very deliberate wink to each of the other players.',el:'Κλείσε επιτηδευμένα το μάτι σε καθένα από τα υπόλοιπα άτομα της παρέας.'}}}:{})}));
export function cardWording(card,language,playerCount){return (playerCount===2?card.variants?.two?.[language]:card.variants?.group?.[language])||card[language];}
