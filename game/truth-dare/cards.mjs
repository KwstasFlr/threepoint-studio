import {BOLD_CARDS} from './bold-cards.mjs?v=22';
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
// BEGIN EXTRA_CARDS_19
const EXTRA_CARDS_19 = [
  {
    "id": "extra19-wrong-wave",
    "mode": "casual",
    "type": "truth",
    "en": "When did you last wave enthusiastically at someone who was actually waving at the person behind you?",
    "el": "Πότε χαιρέτησες τελευταία φορά κάποιον με ενθουσιασμό και κατάλαβες ότι χαιρετούσε το άτομο πίσω σου;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-forgot-the-name",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever kept talking to someone while desperately trying to remember their name? How did you manage it?",
    "el": "Έχεις συνεχίσει κουβέντα με κάποιον ενώ προσπαθούσες απεγνωσμένα να θυμηθείς το όνομά του; Πώς τη γλίτωσες;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-forgotten-subscription",
    "mode": "casual",
    "type": "truth",
    "en": "What have you paid for and then completely forgotten you had?",
    "el": "Τι έχεις πληρώσει και μετά ξέχασες εντελώς ότι το είχες;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-confidently-wrong",
    "mode": "casual",
    "type": "truth",
    "en": "What fact were you absolutely certain about until someone proved you wrong?",
    "el": "Για ποιο πράγμα ήσουν απόλυτα σίγουρος μέχρι που κάποιος σου απέδειξε ότι έκανες λάθος;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-holiday-planner",
    "mode": "casual",
    "type": "truth",
    "en": "Who here would plan the whole holiday, and who would turn up without even checking the destination?",
    "el": "Ποιος από την παρέα θα οργάνωνε όλες τις διακοπές και ποιος θα ερχόταν χωρίς να έχει κοιτάξει καν τον προορισμό;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-room-memory",
    "mode": "casual",
    "type": "dare",
    "en": "Look around for five seconds, then close your eyes. The others ask you where three visible objects are.",
    "el": "Κοίτα γύρω σου για πέντε δευτερόλεπτα και κλείσε τα μάτια. Οι υπόλοιποι σε ρωτούν πού βρίσκονται τρία αντικείμενα του δωματίου.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "Look around for five seconds, then close your eyes. The other player asks where three visible objects are.",
        "el": "Κοίτα γύρω σου για πέντε δευτερόλεπτα και κλείσε τα μάτια. Το άλλο άτομο σε ρωτά πού βρίσκονται τρία αντικείμενα του δωματίου."
      }
    }
  },
  {
    "id": "extra19-morning-routine",
    "mode": "casual",
    "type": "dare",
    "en": "Act out your real morning routine in fast-forward. You have fifteen seconds and cannot speak.",
    "el": "Παίξε την πραγματική πρωινή σου ρουτίνα σε γρήγορη κίνηση. Έχεις δεκαπέντε δευτερόλεπτα και δεν μιλάς.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-forbidden-letter",
    "mode": "casual",
    "type": "dare",
    "en": "Explain how to order a coffee without using the letter A. Stop after three sentences or your first mistake.",
    "el": "Εξήγησε πώς παραγγέλνεις καφέ χωρίς να χρησιμοποιήσεις το γράμμα Α. Σταμάτα μετά από τρεις προτάσεις ή στο πρώτο λάθος.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-copy-the-laugh",
    "mode": "casual",
    "type": "dare",
    "en": "Copy your own laugh as accurately as possible, then do the polite laugh you use when a joke is not funny.",
    "el": "Μιμήσου όσο πιο πιστά μπορείς το δικό σου γέλιο και μετά κάνε το ευγενικό γέλιο που βγάζεις όταν ένα αστείο δεν είναι αστείο.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-count",
    "mode": "casual",
    "type": "dare",
    "en": "Lead the group in counting from one to ten. Only one person can speak at once; if two speak together, restart.",
    "el": "Ξεκίνα με την παρέα να μετράτε από το ένα μέχρι το δέκα. Μιλάει μόνο ένα άτομο κάθε φορά· αν μιλήσουν δύο μαζί, ξαναρχίζετε.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-blocked-return",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever unblocked someone just to see whether they would notice or contact you?",
    "el": "Έχεις ξεμπλοκάρει κάποιον μόνο και μόνο για να δεις αν θα το προσέξει ή θα σου στείλει;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-kept-the-playlist",
    "mode": "extreme",
    "type": "truth",
    "en": "Do you still listen to a playlist because it reminds you of someone you no longer see?",
    "el": "Ακούς ακόμα κάποια playlist επειδή σου θυμίζει ένα άτομο που δεν βλέπεις πια;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-friend-screenshot",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever asked a friend to analyse a message when you already knew exactly what it meant?",
    "el": "Έχεις ζητήσει από φίλο να αναλύσει ένα μήνυμα, ενώ ήξερες ήδη πολύ καλά τι σήμαινε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-made-them-jealous",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever mentioned someone else just to see if the person you liked would get jealous?",
    "el": "Έχεις αναφέρει επίτηδες κάποιο άλλο άτομο για να δεις αν θα ζηλέψει αυτό που σου αρέσει;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-reply-draft-time",
    "mode": "extreme",
    "type": "truth",
    "en": "What is the longest you have spent deciding how to answer a very short message? What made it so difficult?",
    "el": "Πόση ώρα έχεις ξοδέψει για να απαντήσεις σε ένα πολύ μικρό μήνυμα και γιατί σου ήταν τόσο δύσκολο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-already-unsure-date",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you gone on a date when you already suspected you were not interested? What made you go?",
    "el": "Έχεις πάει σε ραντεβού ενώ υποψιαζόσουν ήδη ότι δεν ενδιαφέρεσαι; Τι σε έκανε να πας;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-public-profile-check",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you checked someone’s public profile so often that you worried about accidentally liking an old post?",
    "el": "Έχεις κοιτάξει τόσο πολλές φορές ένα δημόσιο προφίλ ώστε να φοβάσαι μήπως πατήσεις κατά λάθος like σε παλιά ανάρτηση;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-too-available",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever pretended to be busy because you were afraid of looking too available?",
    "el": "Έχεις κάνει ότι έχεις δουλειά επειδή φοβήθηκες μήπως φανείς υπερβολικά διαθέσιμος;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-changed-the-ending",
    "mode": "extreme",
    "type": "truth",
    "en": "Which almost-relationship would you give one more conversation to, rather than one more date?",
    "el": "Σε ποια σχεδόν σχέση θα έδινες μία κουβέντα ακόμα, αντί για ένα ραντεβού ακόμα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-unread-compliment",
    "mode": "extreme",
    "type": "truth",
    "en": "What compliment did you act indifferent about but keep thinking about afterwards?",
    "el": "Ποιο κομπλιμέντο το έπαιξες ότι δεν σε άγγιξε, αλλά το σκεφτόσουν μετά για ώρα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-good-cover",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would be the best at covering for you after an awkward romantic mistake?",
    "el": "Ποιος από την παρέα θα σε κάλυπτε καλύτερα μετά από μια αμήχανη ερωτική γκάφα;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-voice-flirt",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would flirt better in a voice message than face to face?",
    "el": "Ποιος από την παρέα θα φλέρταρε καλύτερα με φωνητικό παρά από κοντά;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-first-move",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here gives the impression that they make the first move, but probably waits for the other person?",
    "el": "Ποιος από την παρέα δείχνει ότι κάνει την πρώτη κίνηση, αλλά μάλλον περιμένει από τον άλλον;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-unspoken-expectation",
    "mode": "extreme",
    "type": "truth",
    "en": "What did you expect from {target} at the beginning but never actually say?",
    "el": "Τι περίμενες από το άτομο {target} στην αρχή, αλλά δεν το είχες πει ποτέ καθαρά;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What did you expect from the person opposite you at the beginning but never say clearly?",
        "el": "Τι περίμενες από το άτομο απέναντί σου στην αρχή, αλλά δεν το είχες πει ποτέ καθαρά;"
      }
    }
  },
  {
    "id": "extra19-partner-look-noticed",
    "mode": "extreme",
    "type": "truth",
    "en": "Which look from {target} tells you they want your attention without saying a word?",
    "el": "Ποιο βλέμμα του ατόμου {target} σου δείχνει ότι ζητά την προσοχή σου χωρίς να πει λέξη;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Which look from the person opposite you tells you they want your attention without a word?",
        "el": "Ποιο βλέμμα του ατόμου απέναντί σου σου δείχνει ότι ζητά την προσοχή σου χωρίς να πει λέξη;"
      }
    }
  },
  {
    "id": "extra19-date-goodbye",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out saying goodbye after a date without using the words goodbye, see you or text me.",
    "el": "Παίξε τον αποχαιρετισμό μετά από ραντεβού χωρίς τις λέξεις αντίο, τα λέμε ή στείλε μου.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-flirty-question-tone",
    "mode": "extreme",
    "type": "dare",
    "en": "The others give you an ordinary question. Ask it as if you were trying very hard to hide that you are flirting.",
    "el": "Οι υπόλοιποι σου δίνουν μια καθημερινή ερώτηση. Κάν’ τη σαν να προσπαθείς πολύ να κρύψεις ότι φλερτάρεις.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player gives you an ordinary question. Ask it as if you were trying to hide that you are flirting.",
        "el": "Το άλλο άτομο σου δίνει μια καθημερινή ερώτηση. Κάν’ τη σαν να προσπαθείς να κρύψεις ότι φλερτάρεις."
      }
    }
  },
  {
    "id": "extra19-movie-soundtrack",
    "mode": "extreme",
    "type": "dare",
    "en": "The others choose a dramatic song. Make a silent entrance timed exactly to its first big musical moment.",
    "el": "Οι υπόλοιποι διαλέγουν ένα δραματικό τραγούδι. Κάνε μια είσοδο χωρίς λόγια, συγχρονισμένη με το πρώτο μεγάλο μουσικό του σημείο.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player chooses a dramatic song. Make a silent entrance timed to its first big musical moment.",
        "el": "Το άλλο άτομο διαλέγει ένα δραματικό τραγούδι. Κάνε μια είσοδο χωρίς λόγια, συγχρονισμένη με το πρώτο μεγάλο μουσικό του σημείο."
      }
    }
  },
  {
    "id": "extra19-compliment-eyes-closed",
    "mode": "extreme",
    "type": "dare",
    "en": "Keep your eyes closed while the others give you three harmless compliments. React only with your face, not your voice.",
    "el": "Κράτα τα μάτια κλειστά όσο οι υπόλοιποι σου λένε τρία αθώα κομπλιμέντα. Αντέδρασε μόνο με το πρόσωπο, όχι με τη φωνή.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "Keep your eyes closed while the other player gives you three harmless compliments. React only with your face.",
        "el": "Κράτα τα μάτια κλειστά όσο το άλλο άτομο σου λέει τρία αθώα κομπλιμέντα. Αντέδρασε μόνο με το πρόσωπο."
      }
    }
  },
  {
    "id": "extra19-chair-date",
    "mode": "extreme",
    "type": "dare",
    "en": "Use an empty chair as an imaginary date. Pull it out, greet your date and handle an awkward silence in fifteen seconds.",
    "el": "Χρησιμοποίησε μια άδεια καρέκλα για φανταστικό ραντεβού. Τράβηξέ τη, χαιρέτησε και σώσε μια αμήχανη σιωπή σε δεκαπέντε δευτερόλεπτα.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-opposite-reaction",
    "mode": "extreme",
    "type": "dare",
    "en": "The others invent a harmless first-date disaster. React as though it is the most charming thing anyone has ever done.",
    "el": "Οι υπόλοιποι επινοούν ένα αθώο στραβοπάτημα σε πρώτο ραντεβού. Αντέδρασε σαν να είναι το πιο γοητευτικό πράγμα που σου έχει συμβεί.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player invents a harmless first-date disaster. React as though you find it incredibly charming.",
        "el": "Το άλλο άτομο επινοεί ένα αθώο στραβοπάτημα σε πρώτο ραντεβού. Αντέδρασε σαν να το βρίσκεις απίστευτα γοητευτικό."
      }
    }
  },
  {
    "id": "extra19-just-a-friend",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out introducing someone you clearly like as just a friend, while trying not to give yourself away.",
    "el": "Παίξε ότι συστήνεις κάποιον που σου αρέσει πολύ ως «απλώς φίλο», προσπαθώντας να μη φανείς.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-voice-note-rewind",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform a ten-second voice note after a great date. Then perform the version you would delete before sending.",
    "el": "Κάνε πρόβα ένα φωνητικό δέκα δευτερολέπτων μετά από ωραίο ραντεβού. Μετά κάνε την εκδοχή που θα έσβηνες πριν τη στείλεις.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-audience-countdown",
    "mode": "extreme",
    "type": "dare",
    "en": "The others count down from ten while you try to deliver a flirting line without rushing or laughing.",
    "el": "Οι υπόλοιποι μετρούν αντίστροφα από το δέκα, ενώ προσπαθείς να πεις μια ατάκα φλερτ χωρίς βιασύνη ή γέλια.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player counts down from ten while you deliver a flirting line without rushing or laughing.",
        "el": "Το άλλο άτομο μετρά αντίστροφα από το δέκα, ενώ λες μια ατάκα φλερτ χωρίς βιασύνη ή γέλια."
      }
    }
  },
  {
    "id": "extra19-silent-apology",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out arriving late to a date and apologising using only gestures. You cannot touch anyone.",
    "el": "Παίξε ότι άργησες στο ραντεβού και ζητάς συγγνώμη μόνο με κινήσεις, χωρίς να αγγίξεις κανέναν.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-scene-director",
    "mode": "extreme",
    "type": "dare",
    "en": "The group directs your first-date entrance using three short instructions. Perform it once with all three.",
    "el": "Η παρέα σκηνοθετεί την είσοδό σου σε πρώτο ραντεβού με τρεις σύντομες οδηγίες. Παίξ’ τη μία φορά ακολουθώντας και τις τρεις.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-laugh-test",
    "mode": "extreme",
    "type": "dare",
    "en": "Choose one volunteer. Try to make each other laugh for twenty seconds while the group stays silent and watches.",
    "el": "Διάλεξε έναν εθελοντή. Προσπαθήστε να κάνετε ο ένας τον άλλον να γελάσει για είκοσι δευτερόλεπτα, ενώ η παρέα παρακολουθεί σιωπηλά.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-forehead",
    "mode": "extreme",
    "type": "dare",
    "en": "If you both want to, rest your forehead gently against {target}’s for ten quiet seconds.",
    "el": "Αν το θέλετε και οι δύο, ακούμπησε απαλά το μέτωπό σου στο μέτωπο του ατόμου {target} για δέκα ήσυχα δευτερόλεπτα.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "If you both want to, rest your forehead gently against the other player’s for ten quiet seconds.",
        "el": "Αν το θέλετε και οι δύο, ακούμπησε απαλά το μέτωπό σου στο μέτωπο του άλλου ατόμου για δέκα ήσυχα δευτερόλεπτα."
      }
    }
  },
  {
    "id": "extra19-partner-hand-guess",
    "mode": "extreme",
    "type": "dare",
    "en": "If {target} agrees, trace a simple shape on their palm with your fingertip. They get three guesses.",
    "el": "Αν συμφωνεί το άτομο {target}, σχημάτισε ένα απλό σχήμα στην παλάμη του με το δάχτυλό σου. Έχει τρεις μαντεψιές.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "If you both agree, trace a simple shape on the other player’s palm. They get three guesses.",
        "el": "Αν συμφωνείτε και οι δύο, σχημάτισε ένα απλό σχήμα στην παλάμη του άλλου ατόμου. Έχει τρεις μαντεψιές."
      }
    }
  },
  {
    "id": "extra19-partner-chosen-greeting",
    "mode": "extreme",
    "type": "dare",
    "en": "Ask {target} to choose a greeting: a hand squeeze, a hug or a wave. Perform their choice, then reverse roles.",
    "el": "Ζήτησε από το άτομο {target} να διαλέξει χαιρετισμό: σφίξιμο χεριού, αγκαλιά ή χαιρετισμό από μακριά. Κάνε αυτό που διάλεξε και μετά αλλάξτε ρόλους.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "The other player chooses a greeting: a hand squeeze, a hug or a wave. Perform their choice, then reverse roles.",
        "el": "Το άλλο άτομο διαλέγει χαιρετισμό: σφίξιμο χεριού, αγκαλιά ή χαιρετισμό από μακριά. Κάνε αυτό που διάλεξε και μετά αλλάξτε ρόλους."
      }
    }
  },
  {
    "id": "extra19-forgot-why-entered",
    "mode": "casual",
    "type": "truth",
    "en": "What have you walked into a room to do and then completely forgotten once you got there?",
    "el": "Τι έχεις πάει να κάνεις σε ένα δωμάτιο και το ξέχασες εντελώς μόλις μπήκες;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-school-rumour",
    "mode": "casual",
    "type": "truth",
    "en": "What completely harmless school rumour did you believe for far too long?",
    "el": "Ποια εντελώς αθώα φήμη στο σχολείο πίστευες για πολύ περισσότερο απ’ όσο έπρεπε;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-bought-for-packaging",
    "mode": "casual",
    "type": "truth",
    "en": "What have you bought mostly because you liked its packaging rather than the thing itself?",
    "el": "Τι έχεις αγοράσει κυρίως επειδή σου άρεσε η συσκευασία και όχι τόσο αυτό που είχε μέσα;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-fake-expert",
    "mode": "casual",
    "type": "truth",
    "en": "Have you nodded confidently about a film, book or game you had never actually finished?",
    "el": "Έχεις μιλήσει με σιγουριά για ταινία, βιβλίο ή παιχνίδι που δεν είχες τελειώσει ποτέ;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-lost-argument",
    "mode": "casual",
    "type": "truth",
    "en": "What is the most ridiculous argument you have genuinely cared about winning?",
    "el": "Ποιος ήταν ο πιο γελοίος καβγάς στον οποίο ήθελες πραγματικά να βγεις νικητής;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-old-fashion-choice",
    "mode": "casual",
    "type": "truth",
    "en": "Which old photo of your outfit would you least want used as your profile picture today? Describe it without showing it.",
    "el": "Ποια παλιά φωτογραφία με το ντύσιμό σου δεν θα ήθελες με τίποτα για σημερινή φωτογραφία προφίλ; Περιέγραψέ τη χωρίς να τη δείξεις.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-saved-contact-name",
    "mode": "casual",
    "type": "truth",
    "en": "What is the funniest harmless name you have saved someone under in your contacts? No need to identify them.",
    "el": "Με ποιο αστείο, αθώο όνομα έχεις αποθηκεύσει κάποιον στις επαφές σου; Δεν χρειάζεται να πεις ποιος είναι.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-pretended-not-home",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever stayed completely silent because you did not want someone to realise you were home?",
    "el": "Έχεις μείνει τελείως αθόρυβος επειδή δεν ήθελες να καταλάβει κάποιος ότι είσαι στο σπίτι;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-road-trip-role",
    "mode": "casual",
    "type": "truth",
    "en": "On a road trip, who here would control the music, who would navigate and who would fall asleep first?",
    "el": "Σε ένα ταξίδι με αυτοκίνητο, ποιος από την παρέα θα διάλεγε μουσική, ποιος θα έβρισκε τον δρόμο και ποιος θα κοιμόταν πρώτος;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-surprise-party",
    "mode": "casual",
    "type": "truth",
    "en": "Who here could keep a surprise party secret, and who would accidentally reveal it in the first hour?",
    "el": "Ποιος από την παρέα θα κρατούσε μυστικό ένα πάρτι έκπληξη και ποιος θα το μαρτυρούσε την πρώτη ώρα;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-fake-weather",
    "mode": "casual",
    "type": "dare",
    "en": "Give a fifteen-second weather forecast for how your day has gone, using gestures as well as words.",
    "el": "Κάνε δελτίο καιρού δεκαπέντε δευτερολέπτων για το πώς πήγε η μέρα σου, με κινήσεις και λόγια.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-no-yes-no",
    "mode": "casual",
    "type": "dare",
    "en": "Answer the other players’ simple questions for thirty seconds without saying yes or no.",
    "el": "Απάντησε σε απλές ερωτήσεις των υπολοίπων για τριάντα δευτερόλεπτα χωρίς να πεις ναι ή όχι.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "Answer the other player’s simple questions for thirty seconds without saying yes or no.",
        "el": "Απάντησε σε απλές ερωτήσεις του άλλου ατόμου για τριάντα δευτερόλεπτα χωρίς να πεις ναι ή όχι."
      }
    }
  },
  {
    "id": "extra19-one-breath-tongue-twister",
    "mode": "casual",
    "type": "dare",
    "en": "Make up a tongue twister using your first name and say it three times without rushing.",
    "el": "Φτιάξε έναν γλωσσοδέτη με το μικρό σου όνομα και πες τον τρεις φορές χωρίς να βιαστείς.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-object-sound",
    "mode": "casual",
    "type": "dare",
    "en": "The others choose an ordinary object in the room. Make its sound and nothing else until they say stop, up to ten seconds.",
    "el": "Οι υπόλοιποι διαλέγουν ένα καθημερινό αντικείμενο του δωματίου. Κάνε μόνο τον ήχο του μέχρι να πουν στοπ, για έως δέκα δευτερόλεπτα.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player chooses an ordinary object in the room. Make only its sound for up to ten seconds.",
        "el": "Το άλλο άτομο διαλέγει ένα καθημερινό αντικείμενο του δωματίου. Κάνε μόνο τον ήχο του για έως δέκα δευτερόλεπτα."
      }
    }
  },
  {
    "id": "extra19-group-secret-leader",
    "mode": "casual",
    "type": "dare",
    "en": "Close your eyes while the group picks a leader. Open them and guess who leads as everyone copies that person’s gestures.",
    "el": "Κλείσε τα μάτια όσο η παρέα διαλέγει αρχηγό. Άνοιξέ τα και βρες ποιος καθοδηγεί τις κινήσεις που μιμούνται όλοι.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-revisited-old-chat",
    "mode": "extreme",
    "type": "truth",
    "en": "What is the oldest conversation you have reopened just to remember how someone used to speak to you?",
    "el": "Ποια είναι η πιο παλιά συνομιλία που άνοιξες ξανά μόνο για να θυμηθείς πώς σου μιλούσε κάποιος τότε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-friendship-almost-more",
    "mode": "extreme",
    "type": "truth",
    "en": "Has a friendship ever almost become something else, but neither person took the risk?",
    "el": "Έχει φτάσει μια φιλία πολύ κοντά στο να γίνει κάτι άλλο, αλλά κανείς από τους δύο δεν πήρε το ρίσκο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-date-friend-check",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever needed a friend’s honest opinion after a date because you could not tell whether it went well?",
    "el": "Έχεις χρειαστεί την ειλικρινή γνώμη φίλου μετά από ραντεβού επειδή δεν καταλάβαινες αν πήγε καλά;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-forgot-the-flirting",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever been so nervous around someone you liked that you forgot the question you were asking?",
    "el": "Έχεις αγχωθεί τόσο μπροστά σε άτομο που σου άρεσε ώστε να ξεχάσεις την ερώτηση που του έκανες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-told-friends-too-early",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you told your friends about a new person before you even knew whether you would see them again?",
    "el": "Έχεις μιλήσει στους φίλους σου για καινούριο άτομο πριν καν ξέρεις αν θα το ξαναδείς;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-story-for-one-viewer",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you posted a harmless story hoping one particular person would see it? Did they?",
    "el": "Έχεις ανεβάσει ένα αθώο story ελπίζοντας να το δει ένα συγκεκριμένο άτομο; Το είδε τελικά;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-made-up-other-plans",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you invented other plans to leave a date, then spent the evening at home?",
    "el": "Έχεις επινοήσει άλλο πρόγραμμα για να φύγεις από ραντεβού και τελικά πέρασες τη βραδιά στο σπίτι;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-recognised-the-ex",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you met an ex unexpectedly while looking nothing like you would have wanted? What did you do?",
    "el": "Έχεις πετύχει πρώην απρόσμενα, ενώ η εμφάνισή σου δεν ήταν καθόλου όπως θα ήθελες; Τι έκανες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-ignored-good-advice",
    "mode": "extreme",
    "type": "truth",
    "en": "What sensible dating advice have you ignored because you really wanted a different answer?",
    "el": "Ποια λογική συμβουλή για τα ερωτικά σου αγνόησες επειδή ήθελες πολύ να ακούσεις κάτι άλλο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-confused-kindness",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you mistaken kindness for flirting, or flirting for simple kindness? Which was worse?",
    "el": "Έχεις μπερδέψει την ευγένεια με φλερτ ή το φλερτ με απλή ευγένεια; Ποιο ήταν πιο αμήχανο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-lied-about-being-over-it",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you said you were over someone when one message from them would still have changed your whole evening?",
    "el": "Έχεις πει ότι ξεπέρασες κάποιον, ενώ ένα μήνυμά του θα σου άλλαζε ακόμα ολόκληρο το βράδυ;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-small-thing-ended-crush",
    "mode": "extreme",
    "type": "truth",
    "en": "What tiny, unexpected thing has ended a crush for you almost immediately?",
    "el": "Ποια μικρή και απρόσμενη λεπτομέρεια σου έκοψε σχεδόν αμέσως το ενδιαφέρον για κάποιον;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-unexpectedly-good-date",
    "mode": "extreme",
    "type": "truth",
    "en": "What date sounded like a bad idea but turned out surprisingly well?",
    "el": "Ποιο ραντεβού ακουγόταν κακή ιδέα αλλά τελικά πήγε απρόσμενα καλά;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-waited-for-goodnight",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever waited for a goodnight message instead of going to sleep?",
    "el": "Έχεις μείνει ξύπνιος περιμένοντας ένα μήνυμα για καληνύχτα αντί να κοιμηθείς;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-private-joke-person",
    "mode": "extreme",
    "type": "truth",
    "en": "Which private joke still makes you think of a person you no longer talk to?",
    "el": "Ποιο αστείο που καταλαβαίνατε μόνο οι δυο σας σου θυμίζει ακόμα ένα άτομο με το οποίο δεν μιλάτε πια;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-kept-the-gift",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you kept a gift from an old relationship because you genuinely liked the gift?",
    "el": "Έχεις κρατήσει δώρο από παλιά σχέση επειδή σου άρεσε πραγματικά το ίδιο το δώρο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-bad-timing",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you liked someone at the wrong time and later wondered what would have happened with better timing?",
    "el": "Σου άρεσε κάποιος σε λάθος χρονική στιγμή και αναρωτήθηκες μετά τι θα γινόταν αν είχατε γνωριστεί αλλιώς;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-remembered-small-detail",
    "mode": "extreme",
    "type": "truth",
    "en": "What small thing someone remembered about you made a bigger impression than an expensive gesture?",
    "el": "Ποια μικρή λεπτομέρεια που θυμήθηκε κάποιος για σένα σου έκανε μεγαλύτερη εντύπωση από μια ακριβή κίνηση;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-pretended-not-see",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you seen someone you liked in public and pretended not to notice because you did not know what to say?",
    "el": "Έχεις δει έξω κάποιον που σου άρεσε και έκανες ότι δεν τον πρόσεξες επειδή δεν ήξερες τι να πεις;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-answered-in-head",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you composed a perfect reply in your head and then sent something completely different?",
    "el": "Έχεις φτιάξει την τέλεια απάντηση στο μυαλό σου και τελικά έστειλες κάτι εντελώς διαφορετικό;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-wingperson",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would be your best wingperson, and who would accidentally make the situation more awkward?",
    "el": "Ποιος από την παρέα θα σε βοηθούσε καλύτερα στο φλερτ και ποιος θα έκανε κατά λάθος την κατάσταση πιο αμήχανη;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-secret-date-venue",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would choose the most unexpected place for a date, and where do you imagine they would take someone?",
    "el": "Ποιος από την παρέα θα διάλεγε το πιο απρόβλεπτο μέρος για ραντεβού και πού τον φαντάζεσαι να πηγαίνει;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-flirt-denial",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would deny flirting even after everyone else had noticed?",
    "el": "Ποιος από την παρέα θα αρνιόταν ότι φλερτάρει ενώ θα το είχαν καταλάβει όλοι οι υπόλοιποι;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-sudden-chemistry",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here do you think could surprise everyone by having chemistry with someone completely different from their usual type?",
    "el": "Ποιος από την παρέα θα μπορούσε να εκπλήξει τους πάντες με χημεία με ένα άτομο τελείως διαφορετικό από το συνηθισμένο του γούστο;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-patient-listener",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would you call after an awkward date because they would listen before laughing?",
    "el": "Ποιον από την παρέα θα έπαιρνες μετά από άβολο ραντεβού επειδή θα σε άκουγε πριν αρχίσει να γελάει;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-nervous-start",
    "mode": "extreme",
    "type": "truth",
    "en": "What were you most nervous about before your first proper outing with {target}?",
    "el": "Τι σε άγχωνε περισσότερο πριν από την πρώτη κανονική έξοδό σου με το άτομο {target};",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What worried you most before your first proper outing together?",
        "el": "Τι σε άγχωνε περισσότερο πριν από την πρώτη κανονική έξοδό σας;"
      }
    }
  },
  {
    "id": "extra19-partner-reassurance",
    "mode": "extreme",
    "type": "truth",
    "en": "What small gesture from {target} makes you feel wanted without needing a big conversation?",
    "el": "Ποια μικρή κίνηση του ατόμου {target} σε κάνει να νιώθεις επιθυμητός χωρίς να χρειάζεται μεγάλη κουβέντα;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What small gesture from the person opposite you makes you feel wanted without a big conversation?",
        "el": "Ποια μικρή κίνηση του ατόμου απέναντί σου σε κάνει να νιώθεις επιθυμητός χωρίς μεγάλη κουβέντα;"
      }
    }
  },
  {
    "id": "extra19-partner-accidental-flirt",
    "mode": "extreme",
    "type": "truth",
    "en": "What does {target} do without trying that you read as flirting every time?",
    "el": "Τι κάνει το άτομο {target} χωρίς να προσπαθεί και εσύ το παίρνεις κάθε φορά σαν φλερτ;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What does the person opposite you do without trying that feels like flirting every time?",
        "el": "Τι κάνει το άτομο απέναντί σου χωρίς να προσπαθεί και εσύ το παίρνεις κάθε φορά σαν φλερτ;"
      }
    }
  },
  {
    "id": "extra19-partner-change-mind",
    "mode": "extreme",
    "type": "truth",
    "en": "What changed your mind about {target} after the first few times you met?",
    "el": "Τι σου άλλαξε γνώμη για το άτομο {target} μετά τις πρώτες φορές που βρεθήκατε;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What changed your mind about the person opposite you after your first few meetings?",
        "el": "Τι σου άλλαξε γνώμη για το άτομο απέναντί σου μετά τις πρώτες φορές που βρεθήκατε;"
      }
    }
  },
  {
    "id": "extra19-partner-tiny-tradition",
    "mode": "extreme",
    "type": "truth",
    "en": "Which tiny habit between you and {target} would you miss most if it suddenly disappeared?",
    "el": "Ποια μικρή συνήθεια ανάμεσα σε εσένα και το άτομο {target} θα σου έλειπε περισσότερο αν χανόταν ξαφνικά;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Which little habit between the two of you would you miss most if it suddenly disappeared?",
        "el": "Ποια μικρή συνήθεια ανάμεσά σας θα σου έλειπε περισσότερο αν χανόταν ξαφνικά;"
      }
    }
  },
  {
    "id": "extra19-no-names-flirt",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out bumping into someone you like while trying not to reveal that you forgot their name.",
    "el": "Παίξε ότι συναντάς τυχαία κάποιον που σου αρέσει, προσπαθώντας να μη φανεί ότι ξέχασες το όνομά του.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-two-word-limits",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out asking for a second date using only two words at a time. Pause between each pair of words.",
    "el": "Παίξε ότι ζητάς δεύτερο ραντεβού χρησιμοποιώντας μόνο δύο λέξεις κάθε φορά. Κάνε παύση ανάμεσα σε κάθε ζευγάρι λέξεων.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-mouthful-metaphor",
    "mode": "extreme",
    "type": "dare",
    "en": "Deliver a confident dating introduction while pretending your mouth is full of very hot food.",
    "el": "Συστήσου με αυτοπεποίθηση σε ένα φανταστικό ραντεβού, παριστάνοντας ότι έχεις στο στόμα σου πολύ ζεστό φαγητό.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-phone-dying",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform the last ten seconds of an imaginary call with someone you like while your phone battery is dying.",
    "el": "Παίξε τα τελευταία δέκα δευτερόλεπτα μιας φανταστικής κλήσης με άτομο που σου αρέσει, ενώ τελειώνει η μπαταρία σου.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-cafe-spotting",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out noticing your date across a café, waving, and realising you have greeted the wrong person.",
    "el": "Παίξε ότι βλέπεις το ραντεβού σου σε ένα καφέ, χαιρετάς και καταλαβαίνεις ότι χαιρέτησες λάθος άτομο.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-compliment-backwards-tone",
    "mode": "extreme",
    "type": "dare",
    "en": "Say an ordinary greeting as though it is a huge romantic confession, then say a romantic confession as an ordinary greeting.",
    "el": "Πες έναν απλό χαιρετισμό σαν να κάνεις μεγάλη ερωτική εξομολόγηση και μετά μια ερωτική εξομολόγηση σαν απλό χαιρετισμό.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-sudden-music-cut",
    "mode": "extreme",
    "type": "dare",
    "en": "Start a confident ten-second dance. The others may stop the music once, and you must finish without changing your expression.",
    "el": "Ξεκίνα έναν χορό δέκα δευτερολέπτων με αυτοπεποίθηση. Οι υπόλοιποι μπορούν να κόψουν μία φορά τη μουσική και συνεχίζεις χωρίς να αλλάξεις ύφος.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "Start a confident ten-second dance. The other player stops the music once, and you finish without changing expression.",
        "el": "Ξεκίνα έναν χορό δέκα δευτερολέπτων με αυτοπεποίθηση. Το άλλο άτομο κόβει μία φορά τη μουσική και συνεχίζεις χωρίς να αλλάξεις ύφος."
      }
    }
  },
  {
    "id": "extra19-flirty-sales-pitch",
    "mode": "extreme",
    "type": "dare",
    "en": "Choose a harmless object nearby and make a fifteen-second dating profile for it, performing its introduction in the first person.",
    "el": "Διάλεξε ένα αθώο αντικείμενο δίπλα σου και κάνε του μια παρουσίαση γνωριμιών δεκαπέντε δευτερολέπτων, μιλώντας σαν να είσαι το ίδιο.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-too-obvious-glance",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out trying to steal a glance at someone you like and being much less subtle than you think.",
    "el": "Παίξε ότι προσπαθείς να ρίξεις κλεφτή ματιά σε κάποιον που σου αρέσει, αλλά φαίνεσαι πολύ περισσότερο απ’ όσο νομίζεις.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-laughing-at-everything",
    "mode": "extreme",
    "type": "dare",
    "en": "For fifteen seconds, react to every harmless sentence the others say as if it came from your favourite person.",
    "el": "Για δεκαπέντε δευτερόλεπτα, αντέδρασε σε κάθε αθώα πρόταση των υπολοίπων σαν να την είπε το αγαπημένο σου άτομο.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "For fifteen seconds, react to each harmless sentence the other player says as if it came from your favourite person.",
        "el": "Για δεκαπέντε δευτερόλεπτα, αντέδρασε σε κάθε αθώα πρόταση του άλλου ατόμου σαν να την είπε το αγαπημένο σου πρόσωπο."
      }
    }
  },
  {
    "id": "extra19-group-speed-scene",
    "mode": "extreme",
    "type": "dare",
    "en": "The group gives you a setting for a date and a silly interruption. Perform the moment it happens in twenty seconds.",
    "el": "Η παρέα σου δίνει ένα μέρος για ραντεβού και μια αστεία διακοπή. Παίξε τη στιγμή που συμβαίνει μέσα σε είκοσι δευτερόλεπτα.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-expression-round",
    "mode": "extreme",
    "type": "dare",
    "en": "Let the group choose three expressions: suspicious, impressed and shy. Switch between them each time someone points to you.",
    "el": "Άσε την παρέα να μοιράσει τρεις εκφράσεις: καχύποπτη, εντυπωσιασμένη και ντροπαλή. Άλλαζε έκφραση κάθε φορά που κάποιος σε δείχνει.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-hand-dance",
    "mode": "extreme",
    "type": "dare",
    "en": "If you both want to, hold one hand with {target} and invent a ten-second dance that keeps both of you in place.",
    "el": "Αν το θέλετε και οι δύο, πιάσε το ένα χέρι του ατόμου {target} και φτιάξτε έναν χορό δέκα δευτερολέπτων χωρίς να αλλάξετε θέση.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "If you both want to, hold one hand and invent a ten-second dance without moving from your places.",
        "el": "Αν το θέλετε και οι δύο, πιάστε το ένα χέρι και φτιάξτε έναν χορό δέκα δευτερολέπτων χωρίς να αλλάξετε θέση."
      }
    }
  },
  {
    "id": "extra19-partner-silent-thank-you",
    "mode": "extreme",
    "type": "dare",
    "en": "Face {target} and act out thanking them for a really good evening without using any words.",
    "el": "Στάσου απέναντι από το άτομο {target} και δείξε ότι το ευχαριστείς για ένα πολύ ωραίο βράδυ, χωρίς να χρησιμοποιήσεις λόγια.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Face the other player and act out thanking them for a really good evening without words.",
        "el": "Στάσου απέναντι από το άλλο άτομο και δείξε ότι το ευχαριστείς για ένα πολύ ωραίο βράδυ, χωρίς λόγια."
      }
    }
  },
  {
    "id": "extra19-partner-shared-count",
    "mode": "extreme",
    "type": "dare",
    "en": "If you both agree, hold hands with {target} and count quietly to five in turns, without breaking eye contact.",
    "el": "Αν συμφωνείτε και οι δύο, πιάσε τα χέρια του ατόμου {target} και μετρήστε σιγανά ως το πέντε εναλλάξ, κοιτάζοντας ο ένας τον άλλο.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "If you both agree, hold hands and count quietly to five in turns while keeping eye contact.",
        "el": "Αν συμφωνείτε και οι δύο, πιαστείτε από τα χέρια και μετρήστε σιγανά ως το πέντε εναλλάξ, κοιτάζοντας ο ένας τον άλλο."
      }
    }
  },
  {
    "id": "extra19-forgot-to-unmute",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever talked for ages before realising your microphone was muted, or thought it was muted when it was not?",
    "el": "Έχεις μιλήσει για ώρα χωρίς να καταλάβεις ότι το μικρόφωνο ήταν κλειστό ή νόμιζες ότι ήταν κλειστό ενώ δεν ήταν;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-wrong-queue",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever stood in a queue without being sure what it was for?",
    "el": "Έχεις σταθεί σε ουρά χωρίς να είσαι σίγουρος για ποιο πράγμα περίμενες;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-saved-box",
    "mode": "casual",
    "type": "truth",
    "en": "What empty box, bag or cable do you keep because you are convinced it will be useful someday?",
    "el": "Ποιο άδειο κουτί, σακούλα ή καλώδιο κρατάς επειδή είσαι σίγουρος ότι κάποτε θα χρειαστεί;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-secret-snack-rule",
    "mode": "casual",
    "type": "truth",
    "en": "What ordinary snack do you have a very particular way of eating?",
    "el": "Ποιο απλό σνακ έχεις έναν πολύ συγκεκριμένο τρόπο να το τρως;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-thought-someone-famous",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever mistaken a stranger for someone famous, or someone famous for a person you knew?",
    "el": "Έχεις μπερδέψει άγνωστο με διάσημο ή διάσημο με κάποιον που νόμιζες ότι γνωρίζεις;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-half-finished-hobby",
    "mode": "casual",
    "type": "truth",
    "en": "Which hobby did you buy equipment for before realising you did not actually want to do it?",
    "el": "Για ποιο χόμπι αγόρασες εξοπλισμό πριν καταλάβεις ότι τελικά δεν ήθελες να ασχοληθείς;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-wrong-words",
    "mode": "casual",
    "type": "truth",
    "en": "What everyday word have you pronounced wrong without anyone telling you?",
    "el": "Ποια καθημερινή λέξη έλεγες λάθος χωρίς να στο λέει κανείς;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-missed-the-ending",
    "mode": "casual",
    "type": "truth",
    "en": "What film, show or story have you confidently discussed after falling asleep before the end?",
    "el": "Για ποια ταινία, σειρά ή ιστορία έχεις μιλήσει με σιγουριά ενώ είχες κοιμηθεί πριν από το τέλος;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-last-minute-host",
    "mode": "casual",
    "type": "truth",
    "en": "Who here could host everyone with ten minutes’ notice, and who would need a full day to prepare?",
    "el": "Ποιος από την παρέα θα σας φιλοξενούσε με προειδοποίηση δέκα λεπτών και ποιος θα ήθελε ολόκληρη μέρα προετοιμασία;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-game-competitive",
    "mode": "casual",
    "type": "truth",
    "en": "Who here becomes unexpectedly competitive over the simplest game?",
    "el": "Ποιος από την παρέα γίνεται απρόσμενα ανταγωνιστικός ακόμα και στο πιο απλό παιχνίδι;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-invisible-box",
    "mode": "casual",
    "type": "dare",
    "en": "Mime opening a mysterious box. Change your expression three times before revealing an imaginary harmless object.",
    "el": "Κάνε παντομίμα ότι ανοίγεις ένα μυστηριώδες κουτί. Άλλαξε τρεις εκφράσεις πριν αποκαλύψεις ένα φανταστικό αθώο αντικείμενο.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-sentence-without-lips",
    "mode": "casual",
    "type": "dare",
    "en": "Say your full name and your favourite food while trying not to move your lips.",
    "el": "Πες το ονοματεπώνυμό σου και το αγαπημένο σου φαγητό προσπαθώντας να μην κινήσεις τα χείλη σου.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-word-from-gestures",
    "mode": "casual",
    "type": "dare",
    "en": "The others choose an everyday action. Perform it first at normal speed, then twice as fast, then in slow motion.",
    "el": "Οι υπόλοιποι διαλέγουν μια καθημερινή κίνηση. Κάν’ τη κανονικά, μετά διπλά γρήγορα και μετά σε αργή κίνηση.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player chooses an everyday action. Perform it normally, twice as fast and then in slow motion.",
        "el": "Το άλλο άτομο διαλέγει μια καθημερινή κίνηση. Κάν’ τη κανονικά, διπλά γρήγορα και μετά σε αργή κίνηση."
      }
    }
  },
  {
    "id": "extra19-animal-voice-message",
    "mode": "casual",
    "type": "dare",
    "en": "Say a simple greeting as three different animals, using sounds and gestures rather than real words.",
    "el": "Πες έναν απλό χαιρετισμό σαν τρία διαφορετικά ζώα, με ήχους και κινήσεις αντί για κανονικές λέξεις.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-repeat-move",
    "mode": "casual",
    "type": "dare",
    "en": "Start a circle of movements. Each player repeats everything before them and adds one small move; finish one whole round.",
    "el": "Ξεκίνα έναν κύκλο κινήσεων. Κάθε παίκτης επαναλαμβάνει όσα έγιναν πριν και προσθέτει μία μικρή κίνηση· ολοκληρώστε έναν γύρο.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-accidental-like",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever removed a like or reaction because you worried about the message it might send?",
    "el": "Έχεις αναιρέσει like ή αντίδραση επειδή φοβήθηκες τι μήνυμα μπορεί να έδινε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-dating-photo-advice",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever disagreed with a friend about which photo made you look most attractive? Who was right?",
    "el": "Έχεις διαφωνήσει με φίλο για το σε ποια φωτογραφία δείχνεις πιο ελκυστικός; Ποιος είχε δίκιο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-online-chemistry",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you felt stronger chemistry through messages than when you finally met in person?",
    "el": "Έχεις νιώσει μεγαλύτερη χημεία μέσα από μηνύματα απ’ ό,τι όταν βρεθήκατε τελικά από κοντά;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-hobby-for-a-crush",
    "mode": "extreme",
    "type": "truth",
    "en": "What hobby did you show an interest in mainly because someone you liked was into it?",
    "el": "Για ποιο χόμπι έδειξες ενδιαφέρον κυρίως επειδή ασχολούνταν με αυτό κάποιος που σου άρεσε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-long-way-home",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you taken the long way home just to keep a conversation or walk going a little longer?",
    "el": "Έχεις πάρει τον πιο μακρύ δρόμο για το σπίτι μόνο για να κρατήσει λίγο περισσότερο μια κουβέντα ή μια βόλτα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-almost-cancelled",
    "mode": "extreme",
    "type": "truth",
    "en": "What date did you nearly cancel and later feel glad you went to?",
    "el": "Ποιο ραντεβού παραλίγο να ακυρώσεις και μετά χάρηκες που πήγες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-morning-after-text",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever debated with a friend about whether a next-morning message sounded too eager?",
    "el": "Έχεις συζητήσει με φίλο αν ένα μήνυμα το επόμενο πρωί θα έδειχνε υπερβολικό ενθουσιασμό;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-kept-a-date-outfit",
    "mode": "extreme",
    "type": "truth",
    "en": "Do you have an outfit you associate with a date that went particularly well or badly?",
    "el": "Έχεις ένα ρούχο που το συνδέεις με ραντεβού που πήγε πολύ καλά ή πολύ άσχημα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-simple-plan-won",
    "mode": "extreme",
    "type": "truth",
    "en": "When has a simple walk or coffee impressed you more than an elaborate date plan?",
    "el": "Πότε σε εντυπωσίασε μια απλή βόλτα ή ένας καφές περισσότερο από ένα περίπλοκο σχέδιο για ραντεβού;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-voice-first-spark",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever started liking someone only after hearing their voice or the way they laughed?",
    "el": "Σου έχει αρέσει κάποιος μόνο αφού άκουσες τη φωνή του ή τον τρόπο που γελούσε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-who-knows-your-type",
    "mode": "extreme",
    "type": "truth",
    "en": "Who knows your taste in people better than you do, and what have they noticed?",
    "el": "Ποιος ξέρει τα γούστα σου στους ανθρώπους καλύτερα από εσένα και τι έχει παρατηρήσει;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-wingperson-backfire",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you tried to help a friend flirt and accidentally ended up getting the attention yourself?",
    "el": "Έχεις προσπαθήσει να βοηθήσεις φίλο στο φλερτ και τελικά τράβηξες εσύ την προσοχή;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-coded-crush-name",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you and a friend used a code name for someone you liked? What was the story behind the code?",
    "el": "Έχετε χρησιμοποιήσει με φίλο συνθηματικό όνομα για κάποιον που σου άρεσε; Πώς βγήκε το συνθηματικό;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-not-called-a-date",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you planned something you hoped was a date while deliberately avoiding that word?",
    "el": "Έχεις κανονίσει κάτι που ήλπιζες ότι είναι ραντεβού, αποφεύγοντας επίτηδες να το πεις έτσι;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-flirting-at-work-story",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you realised much later that a completely ordinary conversation had actually been flirting? What was the clue?",
    "el": "Έχεις καταλάβει πολύ αργότερα ότι μια τελείως καθημερινή κουβέντα ήταν τελικά φλερτ; Ποιο ήταν το σημάδι;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-goodbye-too-short",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever regretted ending an evening too quickly because you were trying to look casual?",
    "el": "Έχεις μετανιώσει που τελείωσες μια έξοδο πολύ γρήγορα επειδή προσπαθούσες να δείξεις άνετος;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-friend-knew-first",
    "mode": "extreme",
    "type": "truth",
    "en": "Has a friend noticed that you liked someone before you admitted it to yourself?",
    "el": "Έχει καταλάβει φίλος ότι σου αρέσει κάποιος πριν το παραδεχτείς εσύ στον εαυτό σου;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-unexpected-compliment-topic",
    "mode": "extreme",
    "type": "truth",
    "en": "What unexpected subject has someone complimented you on that made you see yourself differently?",
    "el": "Για ποιο απρόσμενο πράγμα σου έκανε κάποιος κομπλιμέντο και σε έκανε να δεις αλλιώς τον εαυτό σου;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-first-date-silence",
    "mode": "extreme",
    "type": "truth",
    "en": "What do you usually do when a first date hits a long silence: fill it, laugh at it or wait it out?",
    "el": "Τι κάνεις συνήθως όταν πέφτει μεγάλη σιωπή σε πρώτο ραντεβού: τη γεμίζεις, γελάς ή περιμένεις;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-noticed-the-effort",
    "mode": "extreme",
    "type": "truth",
    "en": "What small effort on someone’s part made you think they really wanted to see you?",
    "el": "Ποια μικρή προσπάθεια από την πλευρά κάποιου σου έδειξε ότι ήθελε πραγματικά να σε δει;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-best-introduction",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would introduce you to someone in the most flattering way without making you cringe?",
    "el": "Ποιος από την παρέα θα σε σύστηνε σε κάποιον με τον πιο κολακευτικό τρόπο χωρίς να σε κάνει να ντραπείς;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-secret-smile",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here gives away that they like someone simply by smiling at their phone?",
    "el": "Ποιος από την παρέα προδίδεται ότι του αρέσει κάποιος μόνο και μόνο επειδή χαμογελάει στο κινητό;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-overthinks-punctuation",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would spend the longest debating whether to add a full stop, an emoji or nothing to a message?",
    "el": "Ποιος από την παρέα θα σκεφτόταν περισσότερη ώρα αν θα βάλει τελεία, emoji ή τίποτα σε ένα μήνυμα;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-easy-confidence",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here seems naturally confident when meeting someone new, and what do they do?",
    "el": "Ποιος από την παρέα δείχνει πιο φυσική αυτοπεποίθηση όταν γνωρίζει νέο άτομο και τι κάνει;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-surprise-romantic",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would surprise you most by planning a genuinely romantic evening?",
    "el": "Ποιος από την παρέα θα σε εξέπληττε περισσότερο αν οργάνωνε ένα πραγματικά ρομαντικό βράδυ;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-trusted-first",
    "mode": "extreme",
    "type": "truth",
    "en": "What was the first moment you felt you could be yourself around {target}?",
    "el": "Ποια ήταν η πρώτη στιγμή που ένιωσες ότι μπορείς να είσαι ο εαυτός σου με το άτομο {target};",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "When did you first feel you could be yourself around the person opposite you?",
        "el": "Πότε ένιωσες πρώτη φορά ότι μπορείς να είσαι ο εαυτός σου με το άτομο απέναντί σου;"
      }
    }
  },
  {
    "id": "extra19-partner-unexpected-favourite",
    "mode": "extreme",
    "type": "truth",
    "en": "What small thing about spending time with {target} do you enjoy more than you expected to?",
    "el": "Ποιο μικρό πράγμα όταν περνάς χρόνο με το άτομο {target} απολαμβάνεις περισσότερο απ’ όσο περίμενες;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What small part of spending time together do you enjoy more than you expected?",
        "el": "Ποιο μικρό πράγμα όταν περνάτε χρόνο μαζί απολαμβάνεις περισσότερο απ’ όσο περίμενες;"
      }
    }
  },
  {
    "id": "extra19-partner-message-memory",
    "mode": "extreme",
    "type": "truth",
    "en": "Which ordinary message from {target} do you still remember because of how it made you feel?",
    "el": "Ποιο καθημερινό μήνυμα από το άτομο {target} θυμάσαι ακόμα για το πώς σε έκανε να νιώσεις;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Which ordinary message from the person opposite you do you remember because of how it made you feel?",
        "el": "Ποιο καθημερινό μήνυμα από το άτομο απέναντί σου θυμάσαι ακόμα για το πώς σε έκανε να νιώσεις;"
      }
    }
  },
  {
    "id": "extra19-partner-easy-plan",
    "mode": "extreme",
    "type": "truth",
    "en": "What is the simplest plan with {target} that would still feel like a really good date?",
    "el": "Ποιο είναι το πιο απλό σχέδιο με το άτομο {target} που θα σου έμοιαζε παρ’ όλα αυτά πολύ ωραίο ραντεβού;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What is the simplest plan together that would still feel like a really good date?",
        "el": "Ποιο είναι το πιο απλό σχέδιο οι δυο σας που θα σου έμοιαζε παρ’ όλα αυτά πολύ ωραίο ραντεβού;"
      }
    }
  },
  {
    "id": "extra19-partner-first-compliment",
    "mode": "extreme",
    "type": "truth",
    "en": "What compliment did you want to give {target} early on but hold back because it felt too soon?",
    "el": "Ποιο κομπλιμέντο ήθελες να κάνεις στο άτομο {target} στην αρχή, αλλά το κράτησες επειδή σου φαινόταν νωρίς;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What compliment did you want to give the person opposite you early on but hold back because it felt too soon?",
        "el": "Ποιο κομπλιμέντο ήθελες να κάνεις στο άτομο απέναντί σου στην αρχή, αλλά το κράτησες επειδή σου φαινόταν νωρίς;"
      }
    }
  },
  {
    "id": "extra19-flirty-emoji-face",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out three imaginary flirting emojis using only your face. The others guess which ones you mean.",
    "el": "Παίξε τρία φανταστικά emoji φλερτ μόνο με το πρόσωπο. Οι υπόλοιποι μαντεύουν ποια εννοείς.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "Act out three imaginary flirting emojis using only your face. The other player guesses them.",
        "el": "Παίξε τρία φανταστικά emoji φλερτ μόνο με το πρόσωπο. Το άλλο άτομο μαντεύει ποια εννοείς."
      }
    }
  },
  {
    "id": "extra19-unexpected-first-word",
    "mode": "extreme",
    "type": "dare",
    "en": "The others give you an ordinary word. Start a first-date greeting with it and make the sentence sound natural.",
    "el": "Οι υπόλοιποι σου δίνουν μια καθημερινή λέξη. Ξεκίνα μ’ αυτήν έναν χαιρετισμό για πρώτο ραντεβού και κάνε την πρόταση να ακούγεται φυσική.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player gives you an ordinary word. Start a first-date greeting with it and make it sound natural.",
        "el": "Το άλλο άτομο σου δίνει μια καθημερινή λέξη. Ξεκίνα μ’ αυτήν έναν χαιρετισμό για πρώτο ραντεβού και κάν’ τον να ακούγεται φυσικός."
      }
    }
  },
  {
    "id": "extra19-cafe-order-flirt",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out ordering a completely ordinary coffee while being far too obvious that you are trying to flirt.",
    "el": "Παίξε ότι παραγγέλνεις έναν τελείως απλό καφέ, ενώ φαίνεται υπερβολικά ότι προσπαθείς να φλερτάρεις.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-dramatic-pause",
    "mode": "extreme",
    "type": "dare",
    "en": "Deliver the sentence I forgot my keys with the dramatic pause of a romantic movie confession.",
    "el": "Πες τη φράση «ξέχασα τα κλειδιά μου» με τη δραματική παύση ερωτικής εξομολόγησης σε ταινία.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-sing-the-invite",
    "mode": "extreme",
    "type": "dare",
    "en": "Sing an invitation for a coffee using a tune you make up on the spot. Keep it under fifteen seconds.",
    "el": "Τραγούδησε μια πρόσκληση για καφέ με μελωδία που φτιάχνεις εκείνη τη στιγμή. Κράτησέ την κάτω από δεκαπέντε δευτερόλεπτα.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-not-listening-date",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out pretending to follow a date’s story while being distracted by how much you like them.",
    "el": "Παίξε ότι προσπαθείς να παρακολουθήσεις την ιστορία του ραντεβού σου αλλά σε αποσπά το πόσο σου αρέσει.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-caught-smiling",
    "mode": "extreme",
    "type": "dare",
    "en": "For fifteen seconds, alternate between secretly smiling at an imaginary message and pretending you were doing something serious.",
    "el": "Για δεκαπέντε δευτερόλεπτα, χαμογέλα κρυφά σε ένα φανταστικό μήνυμα και μετά κάνε ότι ασχολείσαι με κάτι σοβαρό.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-wrong-rehearsal",
    "mode": "extreme",
    "type": "dare",
    "en": "Rehearse a confident first greeting, then perform what it would actually look like if you suddenly got shy.",
    "el": "Κάνε πρόβα έναν πρώτο χαιρετισμό με αυτοπεποίθηση και μετά παίξε πώς θα έβγαινε πραγματικά αν ντρεπόσουν ξαφνικά.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-compliment-no-smile",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform a very formal compliment while the others try to make you smile using only silly expressions.",
    "el": "Κάνε ένα υπερβολικά επίσημο κομπλιμέντο, ενώ οι υπόλοιποι προσπαθούν να σε κάνουν να χαμογελάσεις μόνο με αστείες εκφράσεις.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "Perform a very formal compliment while the other player tries to make you smile using silly expressions.",
        "el": "Κάνε ένα υπερβολικά επίσημο κομπλιμέντο, ενώ το άλλο άτομο προσπαθεί να σε κάνει να χαμογελάσεις με αστείες εκφράσεις."
      }
    }
  },
  {
    "id": "extra19-flirt-in-a-whisper",
    "mode": "extreme",
    "type": "dare",
    "en": "Deliver a harmless invitation once in a stage whisper and once as if announcing it to an entire theatre.",
    "el": "Πες μια αθώα πρόσκληση μία φορά με θεατρικό ψίθυρο και μία σαν να την ανακοινώνεις σε ολόκληρο θέατρο.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-secret-cue",
    "mode": "extreme",
    "type": "dare",
    "en": "The group secretly picks a harmless cue word. Tell a short imaginary date story and watch for their reaction when you say it.",
    "el": "Η παρέα διαλέγει κρυφά μια αθώα λέξη. Πες μια μικρή φανταστική ιστορία ραντεβού και προσπάθησε να καταλάβεις από την αντίδρασή τους πότε την είπες.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-flirt-coach",
    "mode": "extreme",
    "type": "dare",
    "en": "Let each person give you one harmless acting note. Perform a five-second greeting that uses all the notes.",
    "el": "Άσε κάθε άτομο της παρέας να σου δώσει μία αθώα σκηνοθετική οδηγία. Παίξε έναν χαιρετισμό πέντε δευτερολέπτων που τις ακολουθεί όλες.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-same-direction",
    "mode": "extreme",
    "type": "dare",
    "en": "Face {target}. On a count of three, each turn your head left or right; try to match three times without planning aloud.",
    "el": "Στάσου απέναντι από το άτομο {target}. Στο τρία, γυρίστε ο καθένας το κεφάλι αριστερά ή δεξιά· προσπαθήστε να ταιριάξετε τρεις φορές χωρίς συνεννόηση.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Face the other player. On three, each look left or right; try to match three times without planning aloud.",
        "el": "Στάσου απέναντι από το άλλο άτομο. Στο τρία, κοιτάξτε ο καθένας αριστερά ή δεξιά· προσπαθήστε να ταιριάξετε τρεις φορές χωρίς συνεννόηση."
      }
    }
  },
  {
    "id": "extra19-partner-inside-joke-song",
    "mode": "extreme",
    "type": "dare",
    "en": "Turn one harmless phrase you and {target} often say into a ten-second song, without explaining the joke first.",
    "el": "Κάνε μια αθώα φράση που λέτε συχνά με το άτομο {target} τραγουδάκι δέκα δευτερολέπτων, χωρίς να εξηγήσεις πρώτα το αστείο.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Turn one harmless phrase the two of you often say into a ten-second song, without explaining the joke first.",
        "el": "Κάνε μια αθώα φράση που λέτε συχνά οι δυο σας τραγουδάκι δέκα δευτερολέπτων, χωρίς να εξηγήσεις πρώτα το αστείο."
      }
    }
  },
  {
    "id": "extra19-partner-shared-memory-mime",
    "mode": "extreme",
    "type": "dare",
    "en": "Mime a harmless memory you share with {target}. They have thirty seconds to recognise it.",
    "el": "Δείξε με παντομίμα μια αθώα ανάμνηση που μοιράζεσαι με το άτομο {target}. Έχει τριάντα δευτερόλεπτα να την αναγνωρίσει.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Mime a harmless memory the two of you share. The other player has thirty seconds to recognise it.",
        "el": "Δείξε με παντομίμα μια αθώα ανάμνηση των δυο σας. Το άλλο άτομο έχει τριάντα δευτερόλεπτα να την αναγνωρίσει."
      }
    }
  },
  {
    "id": "extra19-wrong-day-ready",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever got completely ready for something and then discovered it was on another day?",
    "el": "Έχεις ετοιμαστεί πλήρως για κάτι και μετά ανακάλυψες ότι ήταν άλλη μέρα;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-silly-child-rule",
    "mode": "casual",
    "type": "truth",
    "en": "What rule did you make up for yourself as a child that now makes absolutely no sense?",
    "el": "Ποιον κανόνα είχες βάλει μόνος σου ως παιδί που τώρα δεν βγάζει κανένα απολύτως νόημα;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-overpacked",
    "mode": "casual",
    "type": "truth",
    "en": "What unnecessary thing do you always pack just in case and never use?",
    "el": "Ποιο περιττό πράγμα βάζεις πάντα στη βαλίτσα «για καλό και για κακό» και δεν χρησιμοποιείς ποτέ;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-inconvenient-favourite",
    "mode": "casual",
    "type": "truth",
    "en": "What favourite film, song or food do your friends never want to hear you talk about again?",
    "el": "Για ποια αγαπημένη σου ταινία, τραγούδι ή φαγητό οι φίλοι σου δεν αντέχουν να σε ακούνε άλλο;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-wrong-door",
    "mode": "casual",
    "type": "truth",
    "en": "Have you tried to open the wrong door, car or apartment before realising your mistake?",
    "el": "Έχεις προσπαθήσει να ανοίξεις λάθος πόρτα, αυτοκίνητο ή διαμέρισμα πριν καταλάβεις το λάθος;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-accidental-collection",
    "mode": "casual",
    "type": "truth",
    "en": "What things have you accidentally started collecting without ever deciding to collect them?",
    "el": "Ποια πράγματα έχεις αρχίσει κατά λάθος να μαζεύεις χωρίς να αποφασίσεις ποτέ ότι θα κάνεις συλλογή;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-outdated-technology",
    "mode": "casual",
    "type": "truth",
    "en": "What bit of old technology do you miss even though the new version is more convenient?",
    "el": "Ποιο παλιό τεχνολογικό αντικείμενο σου λείπει παρότι η καινούρια εκδοχή είναι πιο βολική;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-failed-shortcut",
    "mode": "casual",
    "type": "truth",
    "en": "What shortcut did you take that ended up making everything take longer?",
    "el": "Ποια συντόμευση δοκίμασες και τελικά σε έκανε να αργήσεις πολύ περισσότερο;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-wrong-map",
    "mode": "casual",
    "type": "truth",
    "en": "Who here would keep insisting they knew the way even after everyone realised you were lost?",
    "el": "Ποιος από την παρέα θα επέμενε ότι ξέρει τον δρόμο ακόμα κι όταν όλοι θα είχαν καταλάβει ότι χαθήκατε;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-shared-flat",
    "mode": "casual",
    "type": "truth",
    "en": "If you shared a flat, who here would label the food and who would lose their own mug every day?",
    "el": "Αν μένατε μαζί, ποιος από την παρέα θα έβαζε ετικέτες στα τρόφιμα και ποιος θα έχανε κάθε μέρα τη δική του κούπα;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-questions-only",
    "mode": "casual",
    "type": "dare",
    "en": "Have a twenty-second conversation with the others using questions only. The first ordinary statement ends it.",
    "el": "Κάνε μια κουβέντα είκοσι δευτερολέπτων με τους υπόλοιπους χρησιμοποιώντας μόνο ερωτήσεις. Η πρώτη κανονική δήλωση την τελειώνει.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "Have a twenty-second conversation with the other player using questions only.",
        "el": "Κάνε μια κουβέντα είκοσι δευτερολέπτων με το άλλο άτομο χρησιμοποιώντας μόνο ερωτήσεις."
      }
    }
  },
  {
    "id": "extra19-memory-five-words",
    "mode": "casual",
    "type": "dare",
    "en": "The others say five harmless words once. Repeat them in order, then in reverse order.",
    "el": "Οι υπόλοιποι λένε μία φορά πέντε αθώες λέξεις. Επανάλαβέ τες με τη σειρά και μετά ανάποδα.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player says five harmless words once. Repeat them in order, then in reverse order.",
        "el": "Το άλλο άτομο λέει μία φορά πέντε αθώες λέξεις. Επανάλαβέ τες με τη σειρά και μετά ανάποδα."
      }
    }
  },
  {
    "id": "extra19-tiny-big-object",
    "mode": "casual",
    "type": "dare",
    "en": "Mime using the same imaginary object first as if it were tiny and then as if it were enormous.",
    "el": "Δείξε με παντομίμα ότι χρησιμοποιείς το ίδιο φανταστικό αντικείμενο πρώτα σαν να είναι μικροσκοπικό και μετά σαν να είναι τεράστιο.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-speech-punctuation",
    "mode": "casual",
    "type": "dare",
    "en": "Describe your last meal while saying every punctuation mark aloud. Stop after three sentences.",
    "el": "Περιέγραψε το τελευταίο σου γεύμα λέγοντας δυνατά και όλα τα σημεία στίξης. Σταμάτα μετά από τρεις προτάσεις.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-sound-story",
    "mode": "casual",
    "type": "dare",
    "en": "Start a short story. Each person in the group adds only a sound, and you must make the next sentence fit it.",
    "el": "Ξεκίνα μια μικρή ιστορία. Κάθε άτομο της παρέας προσθέτει μόνο έναν ήχο και εσύ πρέπει να ταιριάξεις την επόμενη πρόταση μ’ αυτόν.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-direct-or-slow",
    "mode": "extreme",
    "type": "truth",
    "en": "Does a clear, direct invitation attract you more than slowly working out whether someone is interested?",
    "el": "Σε τραβά περισσότερο μια ξεκάθαρη, άμεση πρόσκληση ή το να ανακαλύπτεις σιγά σιγά αν κάποιος ενδιαφέρεται;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-asked-before-kiss",
    "mode": "extreme",
    "type": "truth",
    "en": "Has someone asking before a first kiss made the moment better for you?",
    "el": "Σου έχει κάνει πιο όμορφη τη στιγμή το να σε ρωτήσει κάποιος πριν από το πρώτο φιλί;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-unexpected-confident-side",
    "mode": "extreme",
    "type": "truth",
    "en": "When has seeing someone in their element made you suddenly find them more attractive?",
    "el": "Πότε είδες κάποιον να κάνει αυτό που ξέρει καλά και ξαφνικά σου φάνηκε πιο ελκυστικός;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-noticed-the-hands",
    "mode": "extreme",
    "type": "truth",
    "en": "What ordinary gesture catches your eye when someone is talking to you?",
    "el": "Ποια καθημερινή κίνηση σου τραβά το βλέμμα όταν κάποιος σου μιλάει;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-stayed-after-everyone-left",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you stayed a little longer after everyone else left because you wanted time alone with one person?",
    "el": "Έχεις μείνει λίγο παραπάνω αφού έφυγαν οι υπόλοιποι επειδή ήθελες να μείνεις μόνος με ένα συγκεκριμένο άτομο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-goodbye-second-chance",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever found a reason to say goodbye twice because the first goodbye felt unfinished?",
    "el": "Έχεις βρει αφορμή να ξαναπείς αντίο επειδή ο πρώτος αποχαιρετισμός σου φάνηκε ότι άφησε κάτι στη μέση;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-looking-for-seat",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you chosen where to sit mainly because it put you next to someone you liked?",
    "el": "Έχεις διαλέξει πού θα καθίσεις κυρίως για να βρεθείς δίπλα σε κάποιον που σου άρεσε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-teasing-line",
    "mode": "extreme",
    "type": "truth",
    "en": "What harmless teasing remark has stayed with you because the chemistry was obvious?",
    "el": "Ποιο αθώο πείραγμα σου έμεινε επειδή η χημεία ήταν ολοφάνερη;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-almost-held-hands",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever been unsure whether an almost-touch was accidental or deliberate?",
    "el": "Έχεις αναρωτηθεί αν ένα παραλίγο άγγιγμα ήταν τυχαίο ή επίτηδες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-laughed-to-hide-nerves",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you laughed at a moment when you actually felt nervous about how close you were to someone?",
    "el": "Έχεις γελάσει σε μια στιγμή που στην πραγματικότητα αγχωνόσουν για το πόσο κοντά είχες βρεθεί σε κάποιον;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-confidence-not-volume",
    "mode": "extreme",
    "type": "truth",
    "en": "What makes quiet confidence attractive to you, if it is?",
    "el": "Τι βρίσκεις ελκυστικό στην ήρεμη αυτοπεποίθηση, αν σε τραβάει;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-almost-first-move",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you come very close to making a first move and then changed the subject instead?",
    "el": "Έχεις φτάσει πολύ κοντά στο να κάνεις την πρώτη κίνηση και τελικά άλλαξες θέμα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-different-hello",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you noticed someone suddenly greeting you differently and wondered whether something had changed?",
    "el": "Έχεις προσέξει κάποιον να σε χαιρετά ξαφνικά διαφορετικά και αναρωτήθηκες αν άλλαξε κάτι;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-daytime-instead",
    "mode": "extreme",
    "type": "truth",
    "en": "Has seeing someone in an ordinary daytime setting changed the attraction you felt on a night out?",
    "el": "Σου άλλαξε την έλξη το να δεις κάποιον σε μια απλή καθημερινή στιγμή αντί για βραδινή έξοδο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-mystery-vs-honesty",
    "mode": "extreme",
    "type": "truth",
    "en": "When does being mysterious stop being attractive and start being annoying for you?",
    "el": "Πότε το μυστήριο σταματά να σου φαίνεται γοητευτικό και αρχίζει να σε εκνευρίζει;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-held-back-invitation",
    "mode": "extreme",
    "type": "truth",
    "en": "What invitation have you wanted to make but delayed because you did not know how it would sound?",
    "el": "Ποια πρόσκληση ήθελες να κάνεις αλλά την ανέβαλες επειδή δεν ήξερες πώς θα ακουγόταν;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-late-meaning",
    "mode": "extreme",
    "type": "truth",
    "en": "Has a very ordinary sentence meant something completely different because of the way someone looked at you?",
    "el": "Έχει πάρει μια τελείως απλή φράση άλλο νόημα μόνο και μόνο από τον τρόπο που σε κοίταξε κάποιος;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-choosing-the-moment",
    "mode": "extreme",
    "type": "truth",
    "en": "Do you find a carefully chosen moment more attractive than a spontaneous first move?",
    "el": "Σε τραβά περισσότερο μια προσεκτικά διαλεγμένη στιγμή ή μια αυθόρμητη πρώτη κίνηση;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-too-much-practising",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you practised a casual hello so much that it sounded less natural when the moment came?",
    "el": "Έχεις κάνει τόση πρόβα έναν απλό χαιρετισμό ώστε όταν ήρθε η στιγμή να βγει λιγότερο φυσικός;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-admitted-to-friend",
    "mode": "extreme",
    "type": "truth",
    "en": "What was the clue that finally made you admit to a friend that you liked someone?",
    "el": "Ποιο ήταν το σημάδι που σε έκανε τελικά να παραδεχτείς σε φίλο ότι σου άρεσε κάποιος;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-best-eye-contact",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here seems most able to hold eye contact without making it awkward?",
    "el": "Ποιος από την παρέα φαίνεται να κρατά πιο εύκολα το βλέμμα χωρίς να κάνει τη στιγμή αμήχανη;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-misread-signals",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would be most likely to miss an obvious flirting signal, and why?",
    "el": "Ποιος από την παρέα είναι πιο πιθανό να μη δει ένα ολοφάνερο σημάδι φλερτ και γιατί;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-quiet-charmer",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here has a quieter charm than people notice at first?",
    "el": "Ποιος από την παρέα έχει πιο ήσυχη γοητεία απ’ όσο καταλαβαίνει κανείς στην αρχή;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-date-backup",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would you ask to rescue an awkward conversation without making it obvious?",
    "el": "Από ποιον στην παρέα θα ζητούσες να σώσει μια αμήχανη κουβέντα χωρίς να φανεί;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-most-readable",
    "mode": "extreme",
    "type": "truth",
    "en": "Whose face here makes it hardest for them to hide that they like someone?",
    "el": "Ποιον από την παρέα τον προδίδει περισσότερο το πρόσωπό του όταν του αρέσει κάποιος;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-first-close-moment",
    "mode": "extreme",
    "type": "truth",
    "en": "What first moment of being close to {target} do you remember particularly clearly?",
    "el": "Ποια πρώτη στιγμή που βρέθηκες κοντά στο άτομο {target} θυμάσαι ιδιαίτερα καθαρά;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What first moment of being close to the person opposite you do you remember particularly clearly?",
        "el": "Ποια πρώτη στιγμή που βρέθηκες κοντά στο άτομο απέναντί σου θυμάσαι ιδιαίτερα καθαρά;"
      }
    }
  },
  {
    "id": "extra19-partner-familiar-look",
    "mode": "extreme",
    "type": "truth",
    "en": "What familiar look from {target} can you recognise instantly, even across a room?",
    "el": "Ποιο γνώριμο βλέμμα του ατόμου {target} αναγνωρίζεις αμέσως, ακόμα και από την άλλη άκρη του δωματίου;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What familiar look from the person opposite you can you recognise instantly, even across a room?",
        "el": "Ποιο γνώριμο βλέμμα του ατόμου απέναντί σου αναγνωρίζεις αμέσως, ακόμα και από την άλλη άκρη του δωματίου;"
      }
    }
  },
  {
    "id": "extra19-partner-secretly-kept-plan",
    "mode": "extreme",
    "type": "truth",
    "en": "What small plan with {target} have you been looking forward to more than you admitted?",
    "el": "Ποιο μικρό σχέδιο με το άτομο {target} περίμενες με περισσότερη ανυπομονησία απ’ όση παραδεχόσουν;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What small plan together have you looked forward to more than you admitted?",
        "el": "Ποιο μικρό σχέδιο οι δυο σας περίμενες με περισσότερη ανυπομονησία απ’ όση παραδεχόσουν;"
      }
    }
  },
  {
    "id": "extra19-partner-one-extra-hour",
    "mode": "extreme",
    "type": "truth",
    "en": "If you and {target} unexpectedly had one free hour together tonight, how would you like to spend it?",
    "el": "Αν είχατε ξαφνικά μία ελεύθερη ώρα μαζί απόψε με το άτομο {target}, πώς θα ήθελες να την περάσετε;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "If the two of you unexpectedly had one free hour together tonight, how would you like to spend it?",
        "el": "Αν είχατε ξαφνικά μία ελεύθερη ώρα μαζί απόψε, πώς θα ήθελες να την περάσετε;"
      }
    }
  },
  {
    "id": "extra19-partner-small-bravery",
    "mode": "extreme",
    "type": "truth",
    "en": "When did {target} do something small but brave that made you notice them differently?",
    "el": "Πότε έκανε το άτομο {target} κάτι μικρό αλλά θαρραλέο και το πρόσεξες διαφορετικά;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "When did the person opposite you do something small but brave that made you notice them differently?",
        "el": "Πότε έκανε το άτομο απέναντί σου κάτι μικρό αλλά θαρραλέο και το πρόσεξες διαφορετικά;"
      }
    }
  },
  {
    "id": "extra19-three-real-questions",
    "mode": "extreme",
    "type": "dare",
    "en": "Interview one willing player for thirty seconds as if you had just met at a café. Ask questions, but do not ask their name or job.",
    "el": "Πάρε μια συνέντευξη τριάντα δευτερολέπτων από έναν πρόθυμο παίκτη σαν να γνωριστήκατε μόλις σε καφέ. Κάνε ερωτήσεις χωρίς να ρωτήσεις όνομα ή δουλειά.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "Interview the other player for thirty seconds as if you just met at a café, without asking their name or job.",
        "el": "Πάρε μια συνέντευξη τριάντα δευτερολέπτων από το άλλο άτομο σαν να γνωριστήκατε σε καφέ, χωρίς να ρωτήσεις όνομα ή δουλειά."
      }
    }
  },
  {
    "id": "extra19-ten-second-advert",
    "mode": "extreme",
    "type": "dare",
    "en": "Advertise yourself as a completely ordinary person to date, but perform the pitch like a wildly overconfident television advert.",
    "el": "Κάνε μια παρουσίαση του εαυτού σου ως απολύτως καθημερινού ατόμου για ραντεβού, αλλά παίξ’ την σαν υπερβολικά σίγουρη τηλεοπτική διαφήμιση.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-yes-and-date",
    "mode": "extreme",
    "type": "dare",
    "en": "Build a short imaginary date with the others. Every sentence you add must begin yes, and. Keep going for six sentences.",
    "el": "Φτιάξε ένα μικρό φανταστικό ραντεβού με τους υπόλοιπους. Κάθε πρόταση που προσθέτεις αρχίζει με «ναι, και». Συνεχίστε για έξι προτάσεις.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "Build an imaginary date with the other player. Each sentence starts yes, and. Continue for six sentences.",
        "el": "Φτιάξε ένα φανταστικό ραντεβού με το άλλο άτομο. Κάθε πρόταση αρχίζει με «ναι, και». Συνεχίστε για έξι προτάσεις."
      }
    }
  },
  {
    "id": "extra19-nervous-hands",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out being completely calm on a first date while your hands clearly reveal how nervous you are.",
    "el": "Παίξε ότι είσαι απόλυτα ήρεμος σε πρώτο ραντεβού ενώ τα χέρια σου δείχνουν ξεκάθαρα πόσο αγχώνεσαι.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-fake-accidental-meeting",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform an obviously planned meeting as if it were the biggest coincidence of your life.",
    "el": "Παίξε μια ολοφάνερα κανονισμένη συνάντηση σαν να είναι η μεγαλύτερη σύμπτωση της ζωής σου.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-romantic-traffic",
    "mode": "extreme",
    "type": "dare",
    "en": "Describe an imaginary traffic jam as if it were the reason destiny brought two people together. Make it a fifteen-second performance.",
    "el": "Περιέγραψε ένα φανταστικό μποτιλιάρισμα σαν να είναι ο λόγος που η μοίρα έφερε κοντά δύο ανθρώπους. Κάν’ το παράσταση δεκαπέντε δευτερολέπτων.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-rejected-autocorrect",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform reading a flirty message aloud, then reacting when you realise autocorrect changed its meaning.",
    "el": "Παίξε ότι διαβάζεις δυνατά ένα μήνυμα φλερτ και μετά αντιδράς όταν καταλαβαίνεις ότι το autocorrect άλλαξε το νόημα.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-slow-fast-hello",
    "mode": "extreme",
    "type": "dare",
    "en": "Say the same hello once as if you have been waiting all evening and once as if you are pretending not to care.",
    "el": "Πες τον ίδιο χαιρετισμό μία φορά σαν να τον περίμενες όλο το βράδυ και μία σαν να παριστάνεις ότι δεν σε νοιάζει.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-fake-group-chat",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform a fifteen-second imaginary voice note to your friends immediately after a surprising first date.",
    "el": "Παίξε ένα φανταστικό φωνητικό δεκαπέντε δευτερολέπτων προς τους φίλους σου αμέσως μετά από ένα απρόσμενο πρώτο ραντεβού.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-copy-romantic-pose",
    "mode": "extreme",
    "type": "dare",
    "en": "The others invent a harmless dramatic couple pose using gestures only. Recreate your half of it without touching anyone.",
    "el": "Οι υπόλοιποι δείχνουν με κινήσεις μια αθώα δραματική πόζα ζευγαριού. Αναπαράστησε το δικό σου μισό χωρίς να αγγίξεις κανέναν.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player shows a harmless dramatic couple pose. Recreate your half without touching.",
        "el": "Το άλλο άτομο δείχνει μια αθώα δραματική πόζα ζευγαριού. Αναπαράστησε το δικό σου μισό χωρίς άγγιγμα."
      }
    }
  },
  {
    "id": "extra19-group-two-directors",
    "mode": "extreme",
    "type": "dare",
    "en": "Two volunteers each give you one harmless word. Work both into a confident invitation without pausing.",
    "el": "Δύο εθελοντές δίνουν από μία αθώα λέξη. Βάλε και τις δύο σε μια πρόσκληση με αυτοπεποίθηση χωρίς να κομπιάσεις.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-passing-story",
    "mode": "extreme",
    "type": "dare",
    "en": "Start a fictional first-date story. Each player adds one sentence; you must perform the final line dramatically.",
    "el": "Ξεκίνα μια φανταστική ιστορία πρώτου ραντεβού. Κάθε παίκτης προσθέτει μία πρόταση και εσύ παίζεις θεατρικά την τελευταία.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-same-expression",
    "mode": "extreme",
    "type": "dare",
    "en": "Face {target} and choose an expression silently on three. Try to match three different expressions without discussing them.",
    "el": "Στάσου απέναντι από το άτομο {target} και στο τρία κάντε σιωπηλά μια έκφραση. Προσπαθήστε να ταιριάξετε τρεις διαφορετικές χωρίς συνεννόηση.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Face the other player and make an expression on three. Try to match three different expressions without planning them.",
        "el": "Στάσου απέναντι από το άλλο άτομο και στο τρία κάντε μια έκφραση. Προσπαθήστε να ταιριάξετε τρεις διαφορετικές χωρίς συνεννόηση."
      }
    }
  },
  {
    "id": "extra19-partner-arrival-scene",
    "mode": "extreme",
    "type": "dare",
    "en": "Recreate greeting {target} after a long time apart, using only gestures for the first ten seconds.",
    "el": "Αναπαράστησε πώς θα χαιρετούσες το άτομο {target} μετά από πολύ καιρό, μόνο με κινήσεις για τα πρώτα δέκα δευτερόλεπτα.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Recreate greeting the person opposite you after a long time apart, using gestures only for ten seconds.",
        "el": "Αναπαράστησε πώς θα χαιρετούσες το άτομο απέναντί σου μετά από πολύ καιρό, μόνο με κινήσεις για δέκα δευτερόλεπτα."
      }
    }
  },
  {
    "id": "extra19-partner-micro-scene",
    "mode": "extreme",
    "type": "dare",
    "en": "With {target}, act out choosing a place for a date using only three words each. Alternate until you agree on somewhere.",
    "el": "Με το άτομο {target}, παίξτε ότι διαλέγετε μέρος για ραντεβού χρησιμοποιώντας μόνο τρεις λέξεις ο καθένας. Μιλήστε εναλλάξ μέχρι να συμφωνήσετε.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Choose an imaginary date venue together using only three words each per turn. Keep alternating until you agree.",
        "el": "Διαλέξτε ένα φανταστικό μέρος για ραντεβού χρησιμοποιώντας μόνο τρεις λέξεις ο καθένας σε κάθε σειρά. Μιλήστε εναλλάξ μέχρι να συμφωνήσετε."
      }
    }
  },
  {
    "id": "extra19-queue-conversation",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever had a surprisingly good conversation with a stranger while waiting for something?",
    "el": "Έχεις πιάσει απρόσμενα ωραία κουβέντα με άγνωστο περιμένοντας κάπου;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-small-luxury",
    "mode": "casual",
    "type": "truth",
    "en": "What tiny everyday luxury improves your mood more than it probably should?",
    "el": "Ποια μικρή καθημερινή πολυτέλεια σου φτιάχνει τη διάθεση περισσότερο απ’ όσο θα περίμενες;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-borrowed-never-returned",
    "mode": "casual",
    "type": "truth",
    "en": "What harmless borrowed thing did you keep so long that it practically became yours?",
    "el": "Ποιο αθώο δανεικό πράγμα κράτησες τόσο καιρό που σχεδόν έγινε δικό σου;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-overexplained-joke",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever ruined a joke by trying too hard to explain why it was funny?",
    "el": "Έχεις χαλάσει ένα αστείο προσπαθώντας υπερβολικά να εξηγήσεις γιατί ήταν αστείο;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-accidental-matching",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever arrived somewhere wearing almost exactly the same thing as someone else?",
    "el": "Έχεις πάει κάπου φορώντας σχεδόν ακριβώς τα ίδια με κάποιον άλλον;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-habit-from-friend",
    "mode": "casual",
    "type": "truth",
    "en": "What harmless habit have you picked up from a friend without realising it?",
    "el": "Ποια αθώα συνήθεια κόλλησες από φίλο χωρίς να το καταλάβεις;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-wrong-celebration",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever cheered, clapped or congratulated someone before understanding what had happened?",
    "el": "Έχεις πανηγυρίσει, χειροκροτήσει ή δώσει συγχαρητήρια πριν καταλάβεις τι είχε συμβεί;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-simple-task-tutorial",
    "mode": "casual",
    "type": "truth",
    "en": "What simple task did you finally look up a tutorial for after pretending you knew how to do it?",
    "el": "Για ποια απλή δουλειά έψαξες τελικά οδηγίες αφού πρώτα παρίστανες ότι ξέρεις πώς γίνεται;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-spontaneous-trip",
    "mode": "casual",
    "type": "truth",
    "en": "Who here would agree to a trip before asking where you were going?",
    "el": "Ποιος από την παρέα θα έλεγε ναι σε ταξίδι πριν ρωτήσει πού θα πάτε;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-best-small-gift",
    "mode": "casual",
    "type": "truth",
    "en": "Who here would choose the best small present just by remembering something you once said?",
    "el": "Ποιος από την παρέα θα διάλεγε το καλύτερο μικρό δώρο απλώς επειδή θυμήθηκε κάτι που είχες πει;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-invisible-heavy-coat",
    "mode": "casual",
    "type": "dare",
    "en": "Act out putting on an imaginary coat that gets heavier each time you try to leave the room.",
    "el": "Παίξε ότι φοράς ένα φανταστικό παλτό που γίνεται πιο βαρύ κάθε φορά που πας να φύγεις από το δωμάτιο.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-reaction-chain",
    "mode": "casual",
    "type": "dare",
    "en": "Let the others choose a harmless surprise. React in three stages: confused, suspicious and delighted.",
    "el": "Άσε τους υπόλοιπους να διαλέξουν μια αθώα έκπληξη. Αντέδρασε σε τρία στάδια: μπερδεμένος, καχύποπτος και ενθουσιασμένος.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player chooses a harmless surprise. React in three stages: confused, suspicious and delighted.",
        "el": "Το άλλο άτομο διαλέγει μια αθώα έκπληξη. Αντέδρασε σε τρία στάδια: μπερδεμένος, καχύποπτος και ενθουσιασμένος."
      }
    }
  },
  {
    "id": "extra19-sing-the-directions",
    "mode": "casual",
    "type": "dare",
    "en": "Give directions from your seat to the door, but sing every word instead of speaking.",
    "el": "Δώσε οδηγίες από τη θέση σου ως την πόρτα, τραγουδώντας κάθε λέξη αντί να μιλάς.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-silent-laugh",
    "mode": "casual",
    "type": "dare",
    "en": "Laugh as convincingly as you can for ten seconds without making any sound.",
    "el": "Γέλα όσο πιο πειστικά μπορείς για δέκα δευτερόλεπτα χωρίς να βγάλεις καθόλου ήχο.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-rhythm-leader",
    "mode": "casual",
    "type": "dare",
    "en": "Start a simple rhythm on your knees. Each person adds one sound, and you keep the original rhythm going.",
    "el": "Ξεκίνα έναν απλό ρυθμό στα γόνατά σου. Κάθε άτομο προσθέτει έναν ήχο και εσύ κρατάς τον αρχικό ρυθμό.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-chemistry-became-boring",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever felt huge chemistry at first and then realised you had very little to talk about?",
    "el": "Έχεις νιώσει τεράστια χημεία στην αρχή και μετά κατάλαβες ότι δεν είχατε πολλά να πείτε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-admitting-next-meeting",
    "mode": "extreme",
    "type": "truth",
    "en": "How easily do you say you want to see someone again when you are not sure they feel the same?",
    "el": "Πόσο εύκολα λες ότι θέλεις να ξαναδείς κάποιον όταν δεν είσαι σίγουρος ότι νιώθει το ίδιο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-introduced-as-friend",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever felt disappointed when someone introduced you as just a friend?",
    "el": "Έχεις απογοητευτεί όταν κάποιος σε σύστησε ως «απλώς φίλο»;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-friendly-or-date",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you spent a whole evening unsure whether it was a date or a friendly hangout?",
    "el": "Έχεις περάσει ολόκληρο βράδυ χωρίς να ξέρεις αν ήταν ραντεβού ή φιλική έξοδος;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-felt-at-ease",
    "mode": "extreme",
    "type": "truth",
    "en": "What makes you feel at ease around someone you are attracted to, rather than feel you have to perform?",
    "el": "Τι σε κάνει να νιώθεις άνετα με κάποιον που σε ελκύει, αντί να αισθάνεσαι ότι πρέπει να εντυπωσιάζεις;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-easier-to-joke",
    "mode": "extreme",
    "type": "truth",
    "en": "Is it easier for you to make a joke than to admit you like someone? When has that backfired?",
    "el": "Σου είναι πιο εύκολο να κάνεις αστείο παρά να παραδεχτείς ότι σου αρέσει κάποιος; Πότε σου γύρισε μπούμερανγκ;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-preferred-not-knowing",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever preferred not to ask how someone felt because you liked the possibility more than a definite answer?",
    "el": "Έχεις προτιμήσει να μη ρωτήσεις πώς νιώθει κάποιος επειδή σου άρεσε η πιθανότητα περισσότερο από μια ξεκάθαρη απάντηση;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-unexpected-common-interest",
    "mode": "extreme",
    "type": "truth",
    "en": "What unlikely shared interest has made you feel closer to someone very quickly?",
    "el": "Ποιο απρόσμενο κοινό ενδιαφέρον σε έκανε να νιώσεις κοντά σε κάποιον πολύ γρήγορα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-last-word-flirting",
    "mode": "extreme",
    "type": "truth",
    "en": "Do you ever keep a conversation going just because you do not want to be the one who ends it?",
    "el": "Κρατάς ποτέ μια κουβέντα ζωντανή μόνο επειδή δεν θέλεις να είσαι εσύ που θα την τελειώσεις;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-unexpected-phone-call",
    "mode": "extreme",
    "type": "truth",
    "en": "Would an unexpected phone call from someone you like excite you or make you panic first?",
    "el": "Ένα απρόσμενο τηλεφώνημα από κάποιον που σου αρέσει θα σε ενθουσίαζε ή θα σε πανικόβαλλε πρώτα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-changed-your-type",
    "mode": "extreme",
    "type": "truth",
    "en": "What quality have you become attracted to that you used to think was not your type at all?",
    "el": "Ποιο χαρακτηριστικό άρχισε να σε τραβά ενώ παλιότερα πίστευες ότι δεν είναι καθόλου το γούστο σου;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-missed-your-old-self",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever missed the version of yourself you were with someone more than you missed the person?",
    "el": "Σου έχει λείψει περισσότερο ο εαυτός σου όπως ήσουν με κάποιον παρά το ίδιο το άτομο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-nothing-to-prove",
    "mode": "extreme",
    "type": "truth",
    "en": "When have you felt most attractive simply because you stopped trying to impress?",
    "el": "Πότε ένιωσες πιο ελκυστικός απλώς και μόνο επειδή σταμάτησες να προσπαθείς να εντυπωσιάσεις;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-friend-approved",
    "mode": "extreme",
    "type": "truth",
    "en": "How much does it matter to you that your friends genuinely like the person you are seeing?",
    "el": "Πόση σημασία έχει για σένα να συμπαθούν πραγματικά οι φίλοι σου το άτομο που βλέπεις;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-hidden-effort",
    "mode": "extreme",
    "type": "truth",
    "en": "What effort do you put into looking casual before a date that nobody would guess?",
    "el": "Ποια προσπάθεια κάνεις πριν από ραντεβού για να δείχνεις άνετος και κανείς δεν θα τη μάντευε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-liked-the-wrong-reason",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever realised you liked being chosen more than you liked the person choosing you?",
    "el": "Έχεις καταλάβει ότι σου άρεσε περισσότερο να σε επιλέγουν παρά το άτομο που σε επέλεγε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-first-honest-no",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever said no to a second date and felt proud of being clear rather than making excuses?",
    "el": "Έχεις πει όχι σε δεύτερο ραντεβού και ένιωσες καλά που ήσουν ξεκάθαρος αντί να βρεις δικαιολογίες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-almost-wrong-advice",
    "mode": "extreme",
    "type": "truth",
    "en": "What advice from a friend would have ruined a promising connection if you had followed it?",
    "el": "Ποια συμβουλή φίλου θα χαλούσε μια ωραία γνωριμία αν την είχες ακολουθήσει;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-too-long-to-ask",
    "mode": "extreme",
    "type": "truth",
    "en": "How long have you waited to ask someone out when your friends thought it was already obvious?",
    "el": "Πόσο έχεις περιμένει για να ζητήσεις από κάποιον να βγείτε, ενώ οι φίλοι σου το έβρισκαν ήδη ολοφάνερο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-liked-the-friendship",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you held back from flirting because you genuinely did not want to risk a good friendship?",
    "el": "Έχεις συγκρατηθεί από το φλερτ επειδή πραγματικά δεν ήθελες να ρισκάρεις μια καλή φιλία;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-admitted-disappointment",
    "mode": "extreme",
    "type": "truth",
    "en": "How do you react when a person you like cancels: say it bothered you, act fine, or suggest another day?",
    "el": "Πώς αντιδράς όταν ακυρώνει κάποιος που σου αρέσει: λες ότι σε πείραξε, κάνεις ότι όλα καλά ή προτείνεις άλλη μέρα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-eye-contact-after-joke",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever checked one particular person’s reaction after making a joke, even though you were speaking to everyone?",
    "el": "Έχεις κοιτάξει την αντίδραση ενός συγκεκριμένου ατόμου αφού είπες αστείο, παρότι μιλούσες σε όλους;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-kept-a-place",
    "mode": "extreme",
    "type": "truth",
    "en": "Is there a place you still associate with an almost-romance rather than an actual relationship?",
    "el": "Υπάρχει μέρος που το συνδέεις με κάτι που παραλίγο να γίνει έρωτας και όχι με πραγματική σχέση;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-surprising-patience",
    "mode": "extreme",
    "type": "truth",
    "en": "When has someone being patient with your nerves made them much more attractive to you?",
    "el": "Πότε το ότι κάποιος έκανε υπομονή με το άγχος σου τον έκανε πολύ πιο ελκυστικό στα μάτια σου;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-shared-humour-test",
    "mode": "extreme",
    "type": "truth",
    "en": "How quickly can a completely different sense of humour change your interest in someone?",
    "el": "Πόσο γρήγορα μπορεί ένα εντελώς διαφορετικό χιούμορ να σου αλλάξει το ενδιαφέρον για κάποιον;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-spontaneous-goodbye",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would leave a party early if their favourite person suddenly asked to meet?",
    "el": "Ποιος από την παρέα θα έφευγε νωρίς από πάρτι αν του ζητούσε ξαφνικά να βρεθούν το αγαπημένο του άτομο;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-helpful-honesty",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would give you the kindest honest answer about whether someone seems interested?",
    "el": "Ποιος από την παρέα θα σου έδινε την πιο ευγενική αλλά ειλικρινή απάντηση για το αν κάποιος δείχνει ενδιαφέρον;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-accidental-romance",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would turn an ordinary plan into a romantic story without meaning to?",
    "el": "Ποιος από την παρέα θα μετέτρεπε ένα απλό πρόγραμμα σε ρομαντική ιστορία χωρίς να το έχει σκοπό;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-plans-every-detail",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would quietly plan every detail of a date while claiming it was all spontaneous?",
    "el": "Ποιος από την παρέα θα κανόνιζε κρυφά κάθε λεπτομέρεια ενός ραντεβού και θα έλεγε ότι ήταν όλα αυθόρμητα;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-says-it-directly",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would most naturally say I like you without turning it into a big performance?",
    "el": "Ποιος από την παρέα θα έλεγε πιο φυσικά «μου αρέσεις» χωρίς να το κάνει ολόκληρη παράσταση;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-more-often-words",
    "mode": "extreme",
    "type": "truth",
    "en": "What ordinary sentence would you like to hear from {target} a little more often?",
    "el": "Ποια απλή καθημερινή φράση θα ήθελες να ακούς λίγο πιο συχνά από το άτομο {target};",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What ordinary sentence would you like to hear from the person opposite you a little more often?",
        "el": "Ποια απλή καθημερινή φράση θα ήθελες να ακούς λίγο πιο συχνά από το άτομο απέναντί σου;"
      }
    }
  },
  {
    "id": "extra19-partner-best-ordinary-moment",
    "mode": "extreme",
    "type": "truth",
    "en": "Which completely ordinary moment with {target} felt more romantic than a planned date?",
    "el": "Ποια τελείως καθημερινή στιγμή με το άτομο {target} σου φάνηκε πιο ρομαντική από ένα κανονισμένο ραντεβού;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Which ordinary moment together felt more romantic than a planned date?",
        "el": "Ποια τελείως καθημερινή στιγμή οι δυο σας σου φάνηκε πιο ρομαντική από ένα κανονισμένο ραντεβού;"
      }
    }
  },
  {
    "id": "extra19-partner-understands-you",
    "mode": "extreme",
    "type": "truth",
    "en": "What does {target} understand about you without you needing to explain it every time?",
    "el": "Τι καταλαβαίνει το άτομο {target} για σένα χωρίς να χρειάζεται να το εξηγείς κάθε φορά;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What does the person opposite you understand about you without you explaining it every time?",
        "el": "Τι καταλαβαίνει το άτομο απέναντί σου για σένα χωρίς να το εξηγείς κάθε φορά;"
      }
    }
  },
  {
    "id": "extra19-partner-small-surprise",
    "mode": "extreme",
    "type": "truth",
    "en": "What small surprise from {target} would suit you better than an expensive present?",
    "el": "Ποια μικρή έκπληξη από το άτομο {target} θα σου ταίριαζε περισσότερο από ένα ακριβό δώρο;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What small surprise from the person opposite you would suit you better than an expensive present?",
        "el": "Ποια μικρή έκπληξη από το άτομο απέναντί σου θα σου ταίριαζε περισσότερο από ένα ακριβό δώρο;"
      }
    }
  },
  {
    "id": "extra19-partner-brings-out",
    "mode": "extreme",
    "type": "truth",
    "en": "What side of you does spending time with {target} bring out that other people rarely see?",
    "el": "Ποια πλευρά σου βγάζει ο χρόνος με το άτομο {target} που οι άλλοι βλέπουν σπάνια;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What side of you comes out with the person opposite you that other people rarely see?",
        "el": "Ποια πλευρά σου βγαίνει με το άτομο απέναντί σου που οι άλλοι βλέπουν σπάνια;"
      }
    }
  },
  {
    "id": "extra19-unexpected-menu",
    "mode": "extreme",
    "type": "dare",
    "en": "Read an imaginary menu as if every dish were a daring invitation. Use only ordinary food names.",
    "el": "Διάβασε ένα φανταστικό μενού σαν κάθε πιάτο να είναι τολμηρή πρόσκληση. Χρησιμοποίησε μόνο συνηθισμένα ονόματα φαγητών.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-understated-big-confession",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform a huge fictional romantic confession as if you were casually asking someone to pass the salt.",
    "el": "Παίξε μια τεράστια φανταστική ερωτική εξομολόγηση σαν να ζητάς χαλαρά από κάποιον να σου περάσει το αλάτι.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-walk-in-three-styles",
    "mode": "extreme",
    "type": "dare",
    "en": "Make the same short entrance three ways: late for a date, pretending not to notice a crush, and spotting someone you hoped to see.",
    "el": "Κάνε την ίδια μικρή είσοδο με τρεις τρόπους: άργησες σε ραντεβού, κάνεις ότι δεν βλέπεις το φλερτ σου και βλέπεις κάποιον που ήλπιζες να συναντήσεις.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-reading-a-reply",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out reading a surprising romantic reply, putting your phone down calmly, and immediately picking it up again.",
    "el": "Παίξε ότι διαβάζεις μια απρόσμενη ερωτική απάντηση, αφήνεις ήρεμα το κινητό και το ξαναπιάνεις αμέσως.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-song-mood-change",
    "mode": "extreme",
    "type": "dare",
    "en": "The others choose a harmless sentence. Sing it once as a cheerful song and once as a dramatic ballad.",
    "el": "Οι υπόλοιποι διαλέγουν μια αθώα πρόταση. Τραγούδησέ τη μία φορά σαν χαρούμενο τραγούδι και μία σαν δραματική μπαλάντα.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player chooses a harmless sentence. Sing it cheerfully, then as a dramatic ballad.",
        "el": "Το άλλο άτομο διαλέγει μια αθώα πρόταση. Τραγούδησέ τη χαρούμενα και μετά σαν δραματική μπαλάντα."
      }
    }
  },
  {
    "id": "extra19-group-soft-spotlight",
    "mode": "extreme",
    "type": "dare",
    "en": "Pick one willing player. Ask them three quick, harmless getting-to-know-you questions while the group tries not to interrupt.",
    "el": "Διάλεξε έναν πρόθυμο παίκτη. Κάνε του τρεις γρήγορες, αθώες ερωτήσεις γνωριμίας ενώ η παρέα προσπαθεί να μη διακόψει.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-cue-the-smile",
    "mode": "extreme",
    "type": "dare",
    "en": "The group counts slowly to five. Give a different kind of smile at each number, without speaking.",
    "el": "Η παρέα μετρά αργά ως το πέντε. Κάνε διαφορετικό είδος χαμόγελου σε κάθε αριθμό, χωρίς να μιλήσεις.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-private-greeting",
    "mode": "extreme",
    "type": "dare",
    "en": "Invent a small, no-touch greeting with {target} that only the two of you would recognise. Perform it twice.",
    "el": "Φτιάξε με το άτομο {target} έναν μικρό χαιρετισμό χωρίς άγγιγμα που θα αναγνωρίζατε μόνο οι δυο σας. Κάντε τον δύο φορές.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Invent a small, no-touch greeting that only the two of you would recognise. Perform it twice.",
        "el": "Φτιάξτε έναν μικρό χαιρετισμό χωρίς άγγιγμα που θα αναγνωρίζατε μόνο οι δυο σας. Κάντε τον δύο φορές."
      }
    }
  },
  {
    "id": "extra19-partner-quiet-interview",
    "mode": "extreme",
    "type": "dare",
    "en": "Ask {target} one harmless question without using your voice; they answer with gestures too. You each get two guesses.",
    "el": "Κάνε στο άτομο {target} μία αθώα ερώτηση χωρίς φωνή· απαντά κι εκείνο με κινήσεις. Έχετε από δύο μαντεψιές.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Ask the other player one harmless question without your voice. They answer with gestures; you each get two guesses.",
        "el": "Κάνε στο άλλο άτομο μία αθώα ερώτηση χωρίς φωνή. Απαντά με κινήσεις και έχετε από δύο μαντεψιές."
      }
    }
  },
  {
    "id": "extra19-partner-wordless-plan",
    "mode": "extreme",
    "type": "dare",
    "en": "With {target}, act out deciding whether to stay in or go out without saying a word. Agree on a plan in twenty seconds.",
    "el": "Με το άτομο {target}, παίξτε ότι αποφασίζετε αν θα μείνετε μέσα ή θα βγείτε, χωρίς να πείτε λέξη. Συμφωνήστε σε είκοσι δευτερόλεπτα.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Decide through gestures alone whether you would stay in or go out together. Agree in twenty seconds.",
        "el": "Αποφασίστε μόνο με κινήσεις αν θα μένατε μέσα ή θα βγαίνατε οι δυο σας. Συμφωνήστε σε είκοσι δευτερόλεπτα."
      }
    }
  },
  {
    "id": "extra19-sorry-to-object",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever apologised to an object after bumping into it, or thanked a machine as if it were a person?",
    "el": "Έχεις ζητήσει συγγνώμη από αντικείμενο που χτύπησες ή ευχαρίστησες μηχάνημα σαν να ήταν άνθρωπος;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-gift-reaction",
    "mode": "casual",
    "type": "truth",
    "en": "What present did you struggle to react convincingly to, even though the person meant well?",
    "el": "Σε ποιο δώρο δυσκολεύτηκες να αντιδράσεις πειστικά παρότι ο άλλος το έδωσε με καλή πρόθεση;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-fridge-forgotten",
    "mode": "casual",
    "type": "truth",
    "en": "What do you buy, put in the fridge and then forget about until it is too late?",
    "el": "Τι αγοράζεις, βάζεις στο ψυγείο και το θυμάσαι όταν είναι πια αργά;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-foreign-word",
    "mode": "casual",
    "type": "truth",
    "en": "What word in another language have you used before you were completely sure what it meant?",
    "el": "Ποια λέξη σε άλλη γλώσσα έχεις χρησιμοποιήσει πριν σιγουρευτείς εντελώς τι σημαίνει;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-umbrella-fail",
    "mode": "casual",
    "type": "truth",
    "en": "What is your funniest harmless failed attempt to stay dry in the rain?",
    "el": "Ποια είναι η πιο αστεία αθώα αποτυχία σου στην προσπάθεια να μη βραχείς στη βροχή;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-shopping-list-fail",
    "mode": "casual",
    "type": "truth",
    "en": "What have you gone to buy, forgotten, and then returned home with everything except that?",
    "el": "Τι πήγες να αγοράσεις, το ξέχασες και γύρισες σπίτι με όλα εκτός από αυτό;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-food-name-confusion",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ordered something confidently and then discovered it was not the food you thought it was?",
    "el": "Έχεις παραγγείλει κάτι με σιγουριά και μετά ανακάλυψες ότι δεν ήταν το φαγητό που νόμιζες;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-quiet-skill",
    "mode": "casual",
    "type": "truth",
    "en": "What small practical thing are you surprisingly good at that your friends rarely notice?",
    "el": "Σε ποιο μικρό πρακτικό πράγμα είσαι απρόσμενα καλός και οι φίλοι σου σπάνια το προσέχουν;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-order-food",
    "mode": "casual",
    "type": "truth",
    "en": "Who here would take the longest to choose food and then want what someone else ordered?",
    "el": "Ποιος από την παρέα θα αργούσε περισσότερο να διαλέξει φαγητό και μετά θα ήθελε αυτό που παρήγγειλε κάποιος άλλος;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-remember-birthdays",
    "mode": "casual",
    "type": "truth",
    "en": "Who here remembers everyone’s important dates, and who needs three reminders?",
    "el": "Ποιος από την παρέα θυμάται τις σημαντικές ημερομηνίες όλων και ποιος θέλει τρεις υπενθυμίσεις;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-face-weather",
    "mode": "casual",
    "type": "dare",
    "en": "Show sunny, stormy, foggy and windy weather using only your face and shoulders.",
    "el": "Δείξε λιακάδα, καταιγίδα, ομίχλη και αέρα μόνο με το πρόσωπο και τους ώμους σου.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-imaginary-button",
    "mode": "casual",
    "type": "dare",
    "en": "Pretend an imaginary button changes your speaking speed. The others press it with a gesture three times while you explain your breakfast.",
    "el": "Παρίστανε ότι ένα φανταστικό κουμπί αλλάζει την ταχύτητα που μιλάς. Οι υπόλοιποι το πατούν με κίνηση τρεις φορές όσο εξηγείς το πρωινό σου.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "An imaginary button changes your speaking speed. The other player presses it with a gesture three times while you explain your breakfast.",
        "el": "Ένα φανταστικό κουμπί αλλάζει την ταχύτητα που μιλάς. Το άλλο άτομο το πατά με κίνηση τρεις φορές όσο εξηγείς το πρωινό σου."
      }
    }
  },
  {
    "id": "extra19-wrong-soundtrack",
    "mode": "casual",
    "type": "dare",
    "en": "Mime brushing your teeth as if you were the hero in a very dramatic action film.",
    "el": "Κάνε παντομίμα ότι βουρτσίζεις τα δόντια σου σαν να είσαι ο ήρωας σε πολύ δραματική ταινία δράσης.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-word-swap",
    "mode": "casual",
    "type": "dare",
    "en": "For three sentences, replace the word I with your first name while describing an ordinary day.",
    "el": "Για τρεις προτάσεις, αντικατάστησε το εγώ με το μικρό σου όνομα περιγράφοντας μια συνηθισμένη μέρα.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-word-chain",
    "mode": "casual",
    "type": "dare",
    "en": "Start with one everyday word. Each person adds a word beginning with the previous word’s last letter; complete a round without repeating.",
    "el": "Ξεκίνα με μία καθημερινή λέξη. Καθένας προσθέτει λέξη που αρχίζει από το τελευταίο γράμμα της προηγούμενης· ολοκληρώστε έναν γύρο χωρίς επανάληψη.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-first-date-bill",
    "mode": "extreme",
    "type": "truth",
    "en": "What feels most natural to you when the bill arrives on a first date, and have you ever misread the situation?",
    "el": "Τι σου φαίνεται πιο φυσικό όταν έρχεται ο λογαριασμός σε πρώτο ραντεβού και έχεις διαβάσει ποτέ λάθος την κατάσταση;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-always-initiating",
    "mode": "extreme",
    "type": "truth",
    "en": "How long does it take you to notice that you are always the one suggesting another meeting?",
    "el": "Πόσο καιρό σου παίρνει να προσέξεις ότι προτείνεις πάντα εσύ την επόμενη συνάντηση;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-date-phone-habit",
    "mode": "extreme",
    "type": "truth",
    "en": "What phone habit on a date makes you feel someone is present or not really there?",
    "el": "Ποια συνήθεια με το κινητό σε ένα ραντεβού σου δείχνει ότι ο άλλος είναι παρών ή ότι είναι αλλού;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-politeness-or-interest",
    "mode": "extreme",
    "type": "truth",
    "en": "Which sign helps you tell genuine interest apart from someone simply being polite?",
    "el": "Ποιο σημάδι σε βοηθά να ξεχωρίζεις το πραγματικό ενδιαφέρον από την απλή ευγένεια;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-quiet-or-loud-date",
    "mode": "extreme",
    "type": "truth",
    "en": "Do you learn more about someone in a quiet setting or during a busy night out?",
    "el": "Μαθαίνεις περισσότερα για κάποιον σε ένα ήσυχο μέρος ή σε μια γεμάτη βραδινή έξοδο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-different-language-charm",
    "mode": "extreme",
    "type": "truth",
    "en": "Has the way someone switches languages or explains a word ever made them more attractive to you?",
    "el": "Σε έχει τραβήξει περισσότερο κάποιος από τον τρόπο που αλλάζει γλώσσα ή σου εξηγεί μια λέξη;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-genuine-laugh",
    "mode": "extreme",
    "type": "truth",
    "en": "How quickly can you tell the difference between someone’s polite laugh and their real laugh?",
    "el": "Πόσο γρήγορα καταλαβαίνεις τη διαφορά ανάμεσα στο ευγενικό και στο πραγματικό γέλιο κάποιου;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-confidence-disappears",
    "mode": "extreme",
    "type": "truth",
    "en": "When has your usual confidence completely disappeared around one particular person?",
    "el": "Πότε εξαφανίστηκε εντελώς η συνηθισμένη σου αυτοπεποίθηση μπροστά σε ένα συγκεκριμένο άτομο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-pretended-knew-place",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you pretended to know a date venue well and then had no idea where anything was?",
    "el": "Έχεις κάνει ότι ξέρεις καλά το μέρος ενός ραντεβού και μετά δεν ήξερες πού βρίσκεται τίποτα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-food-to-impress",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ordered food or a drink you did not really like because you wanted to seem easygoing on a date?",
    "el": "Έχεις παραγγείλει φαγητό ή ρόφημα που δεν σου άρεσε ιδιαίτερα για να δείξεις άνετος σε ραντεβού;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-good-disagreement",
    "mode": "extreme",
    "type": "truth",
    "en": "Has disagreeing with someone actually made you feel more interested in them? What made it work?",
    "el": "Σε έκανε μια διαφωνία να ενδιαφερθείς περισσότερο για κάποιον; Τι την έκανε να λειτουργήσει έτσι;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-first-small-conflict",
    "mode": "extreme",
    "type": "truth",
    "en": "What does a first small disagreement tell you about whether you want to see someone again?",
    "el": "Τι σου δείχνει μια πρώτη μικρή διαφωνία για το αν θέλεις να ξαναδείς κάποιον;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-kind-to-other-people",
    "mode": "extreme",
    "type": "truth",
    "en": "What have you noticed about how someone treats other people that changed your attraction to them?",
    "el": "Τι πρόσεξες στον τρόπο που κάποιος φέρεται στους άλλους και σου άλλαξε την έλξη γι’ αυτόν;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-after-date-message",
    "mode": "extreme",
    "type": "truth",
    "en": "What sort of message after a date makes you smile instead of overthink?",
    "el": "Τι είδους μήνυμα μετά από ραντεβού σε κάνει να χαμογελάς αντί να το υπεραναλύεις;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-ending-bad-date",
    "mode": "extreme",
    "type": "truth",
    "en": "When a date is not going well, do you usually become quieter, funnier or more direct?",
    "el": "Όταν ένα ραντεβού δεν πηγαίνει καλά, συνήθως γίνεσαι πιο ήσυχος, πιο αστείος ή πιο άμεσος;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-harmless-profile-polish",
    "mode": "extreme",
    "type": "truth",
    "en": "What harmless detail about yourself have you ever polished a little when meeting someone new?",
    "el": "Ποια αθώα λεπτομέρεια για τον εαυτό σου έχεις ωραιοποιήσει λίγο όταν γνωρίζεις καινούριο άτομο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-dated-friend-circle",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you dated someone from a shared friend circle, and did it make the beginning easier or more awkward?",
    "el": "Έχεις βγει με άτομο από κοινή παρέα και έκανε αυτό την αρχή πιο εύκολη ή πιο αμήχανη;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-unexpected-openness",
    "mode": "extreme",
    "type": "truth",
    "en": "When has someone being unexpectedly honest made a conversation suddenly feel more intimate?",
    "el": "Πότε η απρόσμενη ειλικρίνεια κάποιου έκανε ξαφνικά μια κουβέντα να μοιάζει πιο προσωπική;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-different-flirting-styles",
    "mode": "extreme",
    "type": "truth",
    "en": "How different is the way you flirt in person from the way you flirt through messages?",
    "el": "Πόσο διαφορετικός είναι ο τρόπος που φλερτάρεις από κοντά σε σχέση με τα μηνύματα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-noticed-new-confidence",
    "mode": "extreme",
    "type": "truth",
    "en": "What change in your own confidence have other people noticed before you did?",
    "el": "Ποια αλλαγή στην αυτοπεποίθησή σου πρόσεξαν οι άλλοι πριν την προσέξεις εσύ;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-comfort-or-adventure",
    "mode": "extreme",
    "type": "truth",
    "en": "When you like someone, are you drawn first to feeling comfortable or to feeling a little out of your routine?",
    "el": "Όταν σου αρέσει κάποιος, σε τραβά πρώτα η άνεση ή το να νιώθεις λίγο έξω από τη ρουτίνα σου;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-almost-recommended-song",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you nearly sent someone a song because it said more than you were ready to say yourself?",
    "el": "Έχεις σκεφτεί να στείλεις σε κάποιον τραγούδι επειδή έλεγε περισσότερα απ’ όσα ήσουν έτοιμος να πεις εσύ;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-saying-the-name",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you noticed that you say someone’s name differently when you like them?",
    "el": "Έχεις προσέξει ότι λες διαφορετικά το όνομα κάποιου όταν σου αρέσει;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-better-than-the-plan",
    "mode": "extreme",
    "type": "truth",
    "en": "What unplanned change during a date ended up being the best part?",
    "el": "Ποια απρόβλεπτη αλλαγή σε ραντεβού κατέληξε να είναι το καλύτερο σημείο του;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-remembering-the-walk",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you remembered the walk after a date more clearly than the actual place you went?",
    "el": "Έχεις θυμηθεί πιο έντονα τη βόλτα μετά από ραντεβού παρά το ίδιο το μέρος όπου πήγατε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-calm-advice",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would stop you from sending an overcomplicated message and tell you to keep it simple?",
    "el": "Ποιος από την παρέα θα σε σταματούσε από ένα υπερβολικά περίπλοκο μήνυμα και θα σου έλεγε να το πεις απλά;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-long-goodbye",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would take the longest to say goodbye to someone they like?",
    "el": "Ποιος από την παρέα θα αργούσε περισσότερο να αποχαιρετήσει κάποιον που του αρέσει;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-notice-details",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here is most likely to notice a small change in someone they like before anyone else does?",
    "el": "Ποιος από την παρέα είναι πιο πιθανό να προσέξει μια μικρή αλλαγή σε κάποιον που του αρέσει πριν από όλους τους άλλους;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-wrong-assumption",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here seems hardest to read when they first meet someone?",
    "el": "Ποιος από την παρέα φαίνεται πιο δύσκολος να τον καταλάβεις όταν γνωρίζει κάποιον για πρώτη φορά;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-everyday-charm",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here becomes more charming through ordinary conversation rather than an obvious flirting move?",
    "el": "Ποιος από την παρέα γίνεται πιο γοητευτικός μέσα από μια απλή κουβέντα παρά από μια εμφανή κίνηση φλερτ;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-ordinary-reassurance",
    "mode": "extreme",
    "type": "truth",
    "en": "What ordinary thing does {target} do that makes you feel you are on the same side?",
    "el": "Ποιο απλό πράγμα κάνει το άτομο {target} και νιώθεις ότι είστε στην ίδια πλευρά;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What ordinary thing does the person opposite you do that makes you feel you are on the same side?",
        "el": "Ποιο απλό πράγμα κάνει το άτομο απέναντί σου και νιώθεις ότι είστε στην ίδια πλευρά;"
      }
    }
  },
  {
    "id": "extra19-partner-unexpected-strength",
    "mode": "extreme",
    "type": "truth",
    "en": "What strength of {target} did you only discover after getting to know them properly?",
    "el": "Ποιο δυνατό σημείο του ατόμου {target} ανακάλυψες μόνο αφού το γνώρισες πραγματικά;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What strength of the person opposite you did you discover only after getting to know them properly?",
        "el": "Ποιο δυνατό σημείο του ατόμου απέναντί σου ανακάλυψες μόνο αφού το γνώρισες πραγματικά;"
      }
    }
  },
  {
    "id": "extra19-partner-your-small-signal",
    "mode": "extreme",
    "type": "truth",
    "en": "What small signal do you give {target} when you want a little more of their attention?",
    "el": "Ποιο μικρό σημάδι δίνεις στο άτομο {target} όταν θέλεις λίγη περισσότερη προσοχή του;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What small signal do you give the person opposite you when you want more of their attention?",
        "el": "Ποιο μικρό σημάδι δίνεις στο άτομο απέναντί σου όταν θέλεις λίγη περισσότερη προσοχή του;"
      }
    }
  },
  {
    "id": "extra19-partner-repeat-a-day",
    "mode": "extreme",
    "type": "truth",
    "en": "Which ordinary day with {target} would you happily repeat exactly as it happened?",
    "el": "Ποια συνηθισμένη μέρα με το άτομο {target} θα επαναλάμβανες ευχαρίστως ακριβώς όπως έγινε;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Which ordinary day together would you happily repeat exactly as it happened?",
        "el": "Ποια συνηθισμένη μέρα οι δυο σας θα επαναλάμβανες ευχαρίστως ακριβώς όπως έγινε;"
      }
    }
  },
  {
    "id": "extra19-partner-changed-routine",
    "mode": "extreme",
    "type": "truth",
    "en": "What tiny part of your routine has changed because of {target}, in a way you actually like?",
    "el": "Ποιο μικρό κομμάτι της ρουτίνας σου άλλαξε εξαιτίας του ατόμου {target} με τρόπο που πραγματικά σου αρέσει;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What little part of your routine changed because of the person opposite you in a way you genuinely like?",
        "el": "Ποιο μικρό κομμάτι της ρουτίνας σου άλλαξε εξαιτίας του ατόμου απέναντί σου με τρόπο που πραγματικά σου αρέσει;"
      }
    }
  },
  {
    "id": "extra19-repeat-a-date",
    "mode": "extreme",
    "type": "truth",
    "en": "What date would you repeat without trying to improve a single part of it?",
    "el": "Ποιο ραντεβού θα επαναλάμβανες χωρίς να προσπαθήσεις να βελτιώσεις ούτε ένα σημείο του;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-flirt-without-adjectives",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform a short invitation without using a single adjective. You get one attempt and fifteen seconds.",
    "el": "Κάνε μια μικρή πρόσκληση χωρίς να χρησιμοποιήσεις ούτε ένα επίθετο. Έχεις μία προσπάθεια και δεκαπέντε δευτερόλεπτα.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-confident-small-talk",
    "mode": "extreme",
    "type": "dare",
    "en": "Turn a dull comment about the weather into a confident start to a conversation, without mentioning romance directly.",
    "el": "Μετέτρεψε ένα βαρετό σχόλιο για τον καιρό σε ξεκίνημα κουβέντας με αυτοπεποίθηση, χωρίς να αναφέρεις άμεσα φλερτ.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-wrong-volume",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform asking for a second date first as if the room were very loud, then as if you had to be almost silent.",
    "el": "Παίξε ότι ζητάς δεύτερο ραντεβού πρώτα σαν το δωμάτιο να έχει πολλή φασαρία και μετά σαν να πρέπει σχεδόν να σωπάσεις.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-two-reactions-one-message",
    "mode": "extreme",
    "type": "dare",
    "en": "The others invent a harmless invitation. Show the reaction you would try to display and the reaction you might have inside.",
    "el": "Οι υπόλοιποι επινοούν μια αθώα πρόσκληση. Δείξε την αντίδραση που θα προσπαθούσες να φανεί και αυτή που μπορεί να είχες μέσα σου.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player invents a harmless invitation. Show your outward reaction, then your imaginary inner reaction.",
        "el": "Το άλλο άτομο επινοεί μια αθώα πρόσκληση. Δείξε την εξωτερική σου αντίδραση και μετά τη φανταστική εσωτερική."
      }
    }
  },
  {
    "id": "extra19-no-word-thanks-date",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out thanking an imaginary date for a wonderful evening using only your face and one hand gesture.",
    "el": "Παίξε ότι ευχαριστείς ένα φανταστικό ραντεβού για ένα πολύ ωραίο βράδυ μόνο με το πρόσωπο και μία κίνηση χεριού.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-rehearsal-fix",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform a five-second first greeting. The group may change just one thing; repeat it with that change.",
    "el": "Παίξε έναν πρώτο χαιρετισμό πέντε δευτερολέπτων. Η παρέα αλλάζει μόνο ένα πράγμα και τον ξανακάνεις με αυτή την αλλαγή.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-harmless-word-ban",
    "mode": "extreme",
    "type": "dare",
    "en": "The group bans three common harmless words. Perform inviting someone for a coffee without using any of them.",
    "el": "Η παρέα απαγορεύει τρεις συνηθισμένες αθώες λέξεις. Παίξε ότι καλείς κάποιον για καφέ χωρίς να χρησιμοποιήσεις καμία τους.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-shared-gesture-memory",
    "mode": "extreme",
    "type": "dare",
    "en": "Ask {target} for one harmless gesture from a shared memory. Copy it and try to name the memory in one sentence.",
    "el": "Ζήτησε από το άτομο {target} μία αθώα κίνηση από κοινή σας ανάμνηση. Μιμήσου την και προσπάθησε να πεις την ανάμνηση με μία πρόταση.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "The other player gives one harmless gesture from a shared memory. Copy it and try to name the memory in one sentence.",
        "el": "Το άλλο άτομο δίνει μία αθώα κίνηση από κοινή σας ανάμνηση. Μιμήσου την και προσπάθησε να πεις την ανάμνηση με μία πρόταση."
      }
    }
  },
  {
    "id": "extra19-partner-two-person-trailer",
    "mode": "extreme",
    "type": "dare",
    "en": "With {target}, make a ten-second silent trailer for an imaginary date. Each of you must have one dramatic entrance.",
    "el": "Με το άτομο {target}, φτιάξτε ένα σιωπηλό τρέιλερ δέκα δευτερολέπτων για φανταστικό ραντεβού. Ο καθένας κάνει μία δραματική είσοδο.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Make a ten-second silent trailer for an imaginary date together. Each of you gets one dramatic entrance.",
        "el": "Φτιάξτε μαζί ένα σιωπηλό τρέιλερ δέκα δευτερολέπτων για φανταστικό ραντεβού. Ο καθένας κάνει μία δραματική είσοδο."
      }
    }
  },
  {
    "id": "extra19-partner-perfect-timing",
    "mode": "extreme",
    "type": "dare",
    "en": "Face {target} and try to say the same simple greeting at exactly the same time without counting aloud. You get three tries.",
    "el": "Στάσου απέναντι από το άτομο {target} και προσπαθήστε να πείτε τον ίδιο απλό χαιρετισμό ακριβώς μαζί, χωρίς φωναχτό μέτρημα. Έχετε τρεις προσπάθειες.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Face the other player and try to say the same simple greeting at exactly the same time without counting aloud. You get three tries.",
        "el": "Στάσου απέναντι από το άλλο άτομο και προσπαθήστε να πείτε τον ίδιο απλό χαιρετισμό ακριβώς μαζί, χωρίς φωναχτό μέτρημα. Έχετε τρεις προσπάθειες."
      }
    }
  },
  {
    "id": "extra19-fake-understood-rules",
    "mode": "casual",
    "type": "truth",
    "en": "Have you started a game claiming you understood the rules and then tried to learn them by watching everyone else?",
    "el": "Έχεις ξεκινήσει παιχνίδι λέγοντας ότι κατάλαβες τους κανόνες και μετά προσπαθούσες να τους μάθεις κοιτώντας τους άλλους;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-misplaced-phone",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever searched for your phone while holding it, talking on it or using its torch?",
    "el": "Έχεις ψάξει το κινητό σου ενώ το κρατούσες, μιλούσες σ’ αυτό ή χρησιμοποιούσες τον φακό του;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-unexpected-generosity",
    "mode": "casual",
    "type": "truth",
    "en": "What small kind thing from a stranger do you still remember?",
    "el": "Ποια μικρή καλοσύνη από άγνωστο θυμάσαι ακόμα;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-unnecessary-competition",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever turned an ordinary task into a competition without telling the other person?",
    "el": "Έχεις μετατρέψει μια απλή δουλειά σε διαγωνισμό χωρίς να το πεις στο άλλο άτομο;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-never-finishes-story",
    "mode": "casual",
    "type": "truth",
    "en": "Who here starts a short story and somehow turns it into a full-length film?",
    "el": "Ποιος από την παρέα ξεκινά μια μικρή ιστορία και κάπως την κάνει ταινία μεγάλου μήκους;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-five-claps",
    "mode": "casual",
    "type": "dare",
    "en": "Invent five different ways to clap without standing up. The others copy the last one.",
    "el": "Βρες πέντε διαφορετικούς τρόπους να χειροκροτήσεις χωρίς να σηκωθείς. Οι υπόλοιποι αντιγράφουν τον τελευταίο.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "Invent five different ways to clap without standing up. The other player copies the last one.",
        "el": "Βρες πέντε διαφορετικούς τρόπους να χειροκροτήσεις χωρίς να σηκωθείς. Το άλλο άτομο αντιγράφει τον τελευταίο."
      }
    }
  },
  {
    "id": "extra19-shapes-around-you",
    "mode": "casual",
    "type": "dare",
    "en": "Without leaving your seat, point out something round, something square and something triangular in the room.",
    "el": "Χωρίς να φύγεις από τη θέση σου, δείξε κάτι στρογγυλό, κάτι τετράγωνο και κάτι τριγωνικό μέσα στο δωμάτιο.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-left-right-mix",
    "mode": "casual",
    "type": "dare",
    "en": "Copy the others’ simple hand movements, but always use the opposite hand. Keep it going for ten seconds.",
    "el": "Αντέγραψε απλές κινήσεις χεριών των υπολοίπων, χρησιμοποιώντας πάντα το αντίθετο χέρι. Συνέχισε για δέκα δευτερόλεπτα.",
    "adult": false,
    "pair": false,
    "variants": {
      "two": {
        "en": "Copy the other player’s simple hand movements using the opposite hand for ten seconds.",
        "el": "Αντέγραψε απλές κινήσεις χεριών του άλλου ατόμου χρησιμοποιώντας το αντίθετο χέρι για δέκα δευτερόλεπτα."
      }
    }
  },
  {
    "id": "extra19-name-rhyme",
    "mode": "casual",
    "type": "dare",
    "en": "Make a four-line rhyme using your first name once. Perform it as if it were a serious announcement.",
    "el": "Φτιάξε τέσσερις στίχους με ομοιοκαταληξία χρησιμοποιώντας μία φορά το μικρό σου όνομα. Πες τους σαν σοβαρή ανακοίνωση.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra19-group-silent-order",
    "mode": "casual",
    "type": "dare",
    "en": "With the group, work out your order by birth month without anyone saying the name or number of a month.",
    "el": "Με την παρέα, βρείτε τη σειρά σας ανά μήνα γέννησης χωρίς κανείς να πει όνομα ή αριθμό μήνα.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-deleted-the-app",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever stopped using a dating app because of one promising person before knowing whether it would last?",
    "el": "Έχεις σταματήσει μια εφαρμογή γνωριμιών για χάρη ενός πολλά υποσχόμενου ατόμου πριν μάθεις αν θα κρατούσε;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-too-soon-exclusive",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever realised you were acting as if something was exclusive before you had actually discussed it?",
    "el": "Έχεις καταλάβει ότι φερόσουν σαν να υπήρχε αποκλειστικότητα πριν το έχετε συζητήσει πραγματικά;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-distance-chance",
    "mode": "extreme",
    "type": "truth",
    "en": "What would make you give a long-distance connection a real chance instead of dismissing it immediately?",
    "el": "Τι θα σε έκανε να δώσεις πραγματική ευκαιρία σε μια γνωριμία από απόσταση αντί να την απορρίψεις αμέσως;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-friends-before-label",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you introduced someone to friends before you had decided what you were to each other?",
    "el": "Έχεις συστήσει κάποιον σε φίλους πριν αποφασίσετε τι είστε μεταξύ σας;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-private-online",
    "mode": "extreme",
    "type": "truth",
    "en": "How private do you like to keep a new connection online before you know where it is going?",
    "el": "Πόσο ιδιωτική θέλεις να κρατάς μια καινούρια γνωριμία στα social πριν δεις πού πάει;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-different-reply-pace",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you liked someone whose pace of replying was completely different from yours? How did you read it?",
    "el": "Σου άρεσε κάποιος που απαντούσε με τελείως διαφορετικό ρυθμό από εσένα; Πώς το ερμήνευες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-unexpected-first-meeting",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you unexpectedly met someone’s close friends or family much earlier than you were ready for?",
    "el": "Έχεις γνωρίσει απρόσμενα κοντινούς φίλους ή την οικογένεια κάποιου πολύ νωρίτερα απ’ όσο περίμενες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-small-public-sign",
    "mode": "extreme",
    "type": "truth",
    "en": "What small public gesture makes you feel acknowledged without feeling put on display?",
    "el": "Ποια μικρή κίνηση μπροστά σε κόσμο σε κάνει να νιώθεις ότι σε αναγνωρίζουν χωρίς να νιώθεις ότι σε εκθέτουν;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-private-couple-humour",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever envied a couple’s private sense of humour more than their grand romantic gestures?",
    "el": "Έχεις ζηλέψει το δικό τους χιούμορ σε ένα ζευγάρι περισσότερο από τις μεγάλες ρομαντικές κινήσεις του;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-unexpected-effort-for-you",
    "mode": "extreme",
    "type": "truth",
    "en": "What effort has someone made to understand your interests that genuinely touched you?",
    "el": "Ποια προσπάθεια έκανε κάποιος για να καταλάβει τα ενδιαφέροντά σου και σε άγγιξε πραγματικά;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-careful-with-friends",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you held back on telling friends about a promising date because you wanted to enjoy it quietly first?",
    "el": "Έχεις αποφύγει να πεις στους φίλους σου για ένα ωραίο ραντεβού επειδή ήθελες πρώτα να το χαρείς ήσυχα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-no-big-spark",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever grown attracted to someone slowly, without one obvious big spark?",
    "el": "Έχεις αρχίσει να ελκύεσαι από κάποιον σιγά σιγά, χωρίς μία συγκεκριμένη μεγάλη σπίθα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-proud-to-be-introduced",
    "mode": "extreme",
    "type": "truth",
    "en": "What sort of introduction from someone you like would make you feel genuinely good?",
    "el": "Πώς θα ήθελες να σε συστήσει κάποιος που σου αρέσει ώστε να νιώσεις πραγματικά όμορφα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-keeping-a-small-promise",
    "mode": "extreme",
    "type": "truth",
    "en": "Has someone keeping a very small promise mattered more to you than an impressive speech?",
    "el": "Σου έχει μετρήσει περισσότερο το να κρατήσει κάποιος μια πολύ μικρή υπόσχεση από έναν εντυπωσιακό λόγο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-noticing-the-change",
    "mode": "extreme",
    "type": "truth",
    "en": "How do you usually realise a connection has become more than a casual conversation?",
    "el": "Πώς καταλαβαίνεις συνήθως ότι μια γνωριμία έχει γίνει κάτι περισσότερο από μια απλή κουβέντα;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-learn-a-phrase",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would learn a phrase in another language just to impress someone they liked?",
    "el": "Ποιος από την παρέα θα μάθαινε μια φράση σε άλλη γλώσσα μόνο για να εντυπωσιάσει κάποιον που του αρέσει;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-blind-date-introduction",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would you trust to introduce you to someone without overselling either of you?",
    "el": "Ποιον από την παρέα θα εμπιστευόσουν να σε γνωρίσει σε κάποιον χωρίς να υπερβάλει για κανέναν σας;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-show-your-world",
    "mode": "extreme",
    "type": "truth",
    "en": "What part of {target}’s everyday world would you like them to show you more of?",
    "el": "Ποιο κομμάτι της καθημερινότητας του ατόμου {target} θα ήθελες να σου δείξει περισσότερο;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What part of the other player’s everyday world would you like them to show you more of?",
        "el": "Ποιο κομμάτι της καθημερινότητας του άλλου ατόμου θα ήθελες να σου δείξει περισσότερο;"
      }
    }
  },
  {
    "id": "extra19-partner-miss-you-style",
    "mode": "extreme",
    "type": "truth",
    "en": "How can you tell {target} misses you even before they say it directly?",
    "el": "Πώς καταλαβαίνεις ότι λείπεις στο άτομο {target} πριν σου το πει ευθέως;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "How can you tell the person opposite you misses you before they say it directly?",
        "el": "Πώς καταλαβαίνεις ότι λείπεις στο άτομο απέναντί σου πριν σου το πει ευθέως;"
      }
    }
  },
  {
    "id": "extra19-partner-still-surprises",
    "mode": "extreme",
    "type": "truth",
    "en": "What about {target} can still surprise you, even though you know them well?",
    "el": "Τι στο άτομο {target} μπορεί ακόμα να σε εκπλήσσει παρότι το ξέρεις καλά;",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "What can still surprise you about the person opposite you, even though you know them well?",
        "el": "Τι στο άτομο απέναντί σου μπορεί ακόμα να σε εκπλήσσει παρότι το ξέρεις καλά;"
      }
    }
  },
  {
    "id": "extra19-humble-confident-intro",
    "mode": "extreme",
    "type": "dare",
    "en": "Introduce yourself to an imaginary date first with exaggerated modesty, then with exaggerated confidence.",
    "el": "Συστήσου σε ένα φανταστικό ραντεβού πρώτα με υπερβολική μετριοφροσύνη και μετά με υπερβολική αυτοπεποίθηση.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-two-topic-chat",
    "mode": "extreme",
    "type": "dare",
    "en": "The others choose two harmless topics. Switch between them naturally during a twenty-second imaginary date conversation.",
    "el": "Οι υπόλοιποι διαλέγουν δύο αθώα θέματα. Πέρασε φυσικά από το ένα στο άλλο σε μια φανταστική κουβέντα ραντεβού είκοσι δευτερολέπτων.",
    "adult": true,
    "pair": false,
    "variants": {
      "two": {
        "en": "The other player chooses two harmless topics. Switch naturally between them in a twenty-second imaginary date conversation.",
        "el": "Το άλλο άτομο διαλέγει δύο αθώα θέματα. Πέρασε φυσικά από το ένα στο άλλο σε μια φανταστική κουβέντα ραντεβού είκοσι δευτερολέπτων."
      }
    }
  },
  {
    "id": "extra19-tiny-grand-invite",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform inviting someone for a five-minute walk as if it were the biggest romantic plan of the year.",
    "el": "Παίξε ότι καλείς κάποιον για μια βόλτα πέντε λεπτών σαν να είναι το μεγαλύτερο ρομαντικό σχέδιο της χρονιάς.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-wrong-coffee-name",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out hearing an imaginary café order called under a romantic nickname you did not expect.",
    "el": "Παίξε ότι ακούς να φωνάζουν μια φανταστική παραγγελία σε καφέ με ένα ρομαντικό παρατσούκλι που δεν περίμενες.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-calm-after-good-reply",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform trying to continue an ordinary conversation immediately after receiving a reply you are secretly thrilled about.",
    "el": "Παίξε ότι προσπαθείς να συνεχίσεις μια απλή κουβέντα μόλις έλαβες μια απάντηση που σε έχει ενθουσιάσει κρυφά.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra19-group-conversation-save",
    "mode": "extreme",
    "type": "dare",
    "en": "Ask the group for a harmless awkward silence scenario, then perform a ten-second attempt to save the conversation.",
    "el": "Ζήτησε από την παρέα ένα αθώο σενάριο αμήχανης σιωπής και παίξε για δέκα δευτερόλεπτα την προσπάθειά σου να σώσεις την κουβέντα.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-group-one-look-round",
    "mode": "extreme",
    "type": "dare",
    "en": "Let each willing player give you one dramatic glance. Copy it back without laughing.",
    "el": "Άσε κάθε πρόθυμο παίκτη της παρέας να σου δώσει ένα δραματικό βλέμμα. Αντέγραψέ το χωρίς να γελάσεις.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra19-partner-describe-by-mime",
    "mode": "extreme",
    "type": "dare",
    "en": "With {target}, mime three ordinary things you would pack for a day together. Try to agree without speaking.",
    "el": "Με το άτομο {target}, δείξτε με παντομίμα τρία καθημερινά πράγματα που θα παίρνατε για μια μέρα μαζί. Προσπαθήστε να συμφωνήσετε χωρίς λόγια.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Mime three ordinary things you would pack for a day together and try to agree without speaking.",
        "el": "Δείξτε με παντομίμα τρία καθημερινά πράγματα που θα παίρνατε για μια μέρα μαζί και προσπαθήστε να συμφωνήσετε χωρίς λόγια."
      }
    }
  },
  {
    "id": "extra19-partner-opposite-mood",
    "mode": "extreme",
    "type": "dare",
    "en": "Let {target} choose a harmless mood for you. Perform an ordinary greeting in that mood while they perform the opposite.",
    "el": "Άσε το άτομο {target} να διαλέξει μια αθώα διάθεση για σένα. Παίξε έναν απλό χαιρετισμό μ’ αυτήν, ενώ εκείνο παίζει την αντίθετη.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "The other player chooses a harmless mood for you. Perform an ordinary greeting in that mood while they perform the opposite.",
        "el": "Το άλλο άτομο διαλέγει μια αθώα διάθεση για σένα. Παίξε έναν απλό χαιρετισμό μ’ αυτήν, ενώ εκείνο παίζει την αντίθετη."
      }
    }
  },
  {
    "id": "extra19-partner-small-finale",
    "mode": "extreme",
    "type": "dare",
    "en": "With {target}, create a five-second closing scene for an imaginary romantic comedy, without touching or using words.",
    "el": "Με το άτομο {target}, φτιάξτε μια τελική σκηνή πέντε δευτερολέπτων για φανταστική ρομαντική κωμωδία, χωρίς άγγιγμα ή λόγια.",
    "adult": true,
    "pair": true,
    "partnerOnly": true,
    "variants": {
      "two": {
        "en": "Create a five-second closing scene for an imaginary romantic comedy together, without touching or speaking.",
        "el": "Φτιάξτε μαζί μια τελική σκηνή πέντε δευτερολέπτων για φανταστική ρομαντική κωμωδία, χωρίς άγγιγμα ή λόγια."
      }
    }
  }
];
// END EXTRA_CARDS_19
// BEGIN EXTRA_CARDS_20
const EXTRA_CARDS_20 = [
  {
    "id": "extra20-delivery-performance",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever practised how to answer the door before a delivery arrived?",
    "el": "Έχεις κάνει πρόβα πώς θα ανοίξεις την πόρτα πριν φτάσει μια παραγγελία;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-borrowed-opinion",
    "mode": "casual",
    "type": "truth",
    "en": "Which opinion did you borrow from someone else before actually trying the thing yourself?",
    "el": "Ποια άποψη υιοθέτησες από κάποιον άλλον πριν δοκιμάσεις το πράγμα ο ίδιος;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-family-recipe",
    "mode": "casual",
    "type": "truth",
    "en": "Which food do you only like when one particular person makes it?",
    "el": "Ποιο φαγητό σου αρέσει μόνο όταν το φτιάχνει ένα συγκεκριμένο άτομο;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-unearned-tour-guide",
    "mode": "casual",
    "type": "truth",
    "en": "Have you ever given someone directions confidently and realised afterwards that you had no idea?",
    "el": "Έχεις δώσει οδηγίες με αυτοπεποίθηση και μετά κατάλαβες ότι δεν είχες ιδέα πού τους έστειλες;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-school-shortcut",
    "mode": "casual",
    "type": "truth",
    "en": "What shortcut did you use at school that you thought no teacher had noticed?",
    "el": "Ποια πονηριά έκανες στο σχολείο και νόμιζες ότι δεν την είχε προσέξει κανένας καθηγητής;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-wrong-souvenir",
    "mode": "casual",
    "type": "truth",
    "en": "What souvenir did you buy on holiday and regret as soon as you got home?",
    "el": "Ποιο αναμνηστικό αγόρασες σε διακοπές και μετάνιωσες μόλις γύρισες σπίτι;",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-group-instructions-skipper",
    "mode": "casual",
    "type": "truth",
    "en": "Who here would build furniture first and open the instructions only when a piece was left over?",
    "el": "Ποιος από την παρέα θα έστηνε ένα έπιπλο και θα άνοιγε τις οδηγίες μόνο όταν περίσσευε ένα κομμάτι;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra20-group-receipt-keeper",
    "mode": "casual",
    "type": "truth",
    "en": "Who here would still have the receipt for something they bought five years ago?",
    "el": "Ποιος από την παρέα θα είχε ακόμα την απόδειξη για κάτι που αγόρασε πριν πέντε χρόνια;",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra20-lift-operator",
    "mode": "casual",
    "type": "dare",
    "en": "Give a ten-second lift announcement for a building with three completely imaginary floors.",
    "el": "Κάνε μια ανακοίνωση ασανσέρ δέκα δευτερολέπτων για ένα κτίριο με τρεις εντελώς φανταστικούς ορόφους.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-weather-inside-shoe",
    "mode": "casual",
    "type": "dare",
    "en": "Present the weather forecast for the inside of a shoe after a very long walk.",
    "el": "Παρουσίασε το δελτίο καιρού για το εσωτερικό ενός παπουτσιού μετά από μια πολύ μεγάλη βόλτα.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-museum-spoon",
    "mode": "casual",
    "type": "dare",
    "en": "Invent a complaint letter from a spoon that is tired of being used to stir coffee. Read it aloud.",
    "el": "Γράψε προφορικά μια επιστολή διαμαρτυρίας από ένα κουτάλι που βαρέθηκε να ανακατεύει καφέ. Διάβασέ την δυνατά.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-alphabet-breakfast",
    "mode": "casual",
    "type": "dare",
    "en": "Name five breakfast foods in alphabetical order. You have twenty seconds.",
    "el": "Πες πέντε φαγητά πρωινού με αλφαβητική σειρά. Έχεις είκοσι δευτερόλεπτα.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-reverse-pet-interview",
    "mode": "casual",
    "type": "dare",
    "en": "Pretend a cat is interviewing you for permission to live in its house. Answer three imaginary questions.",
    "el": "Παίξε ότι μια γάτα σου παίρνει συνέντευξη για να σε αφήσει να μείνεις στο σπίτι της. Απάντησε σε τρεις φανταστικές ερωτήσεις.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-silent-lemon",
    "mode": "casual",
    "type": "dare",
    "en": "Mime peeling a lemon, tasting it and trying to convince someone it was sweet.",
    "el": "Δείξε με παντομίμα ότι καθαρίζεις ένα λεμόνι, το δοκιμάζεις και προσπαθείς να πείσεις κάποιον ότι ήταν γλυκό.",
    "adult": false,
    "pair": false
  },
  {
    "id": "extra20-group-human-loading",
    "mode": "casual",
    "type": "dare",
    "en": "The group names three imaginary shops. Invent an absurd opening-hours announcement for each one.",
    "el": "Η παρέα ονομάζει τρία φανταστικά καταστήματα. Φτιάξε μια παράλογη ανακοίνωση ωραρίου για το καθένα.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra20-group-restaurant-chaos",
    "mode": "casual",
    "type": "dare",
    "en": "You are a waiter. Each other player invents a ridiculous dish; repeat the entire order from memory.",
    "el": "Είσαι σερβιτόρος. Κάθε άλλο άτομο επινοεί ένα γελοίο πιάτο· επανάλαβε ολόκληρη την παραγγελία από μνήμης.",
    "adult": false,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra20-post-date-debrief",
    "mode": "extreme",
    "type": "truth",
    "en": "What detail from a date have you exaggerated when telling a friend about it afterwards?",
    "el": "Ποια λεπτομέρεια από ραντεβού έχεις φουσκώσει όταν το περιέγραφες μετά σε φίλο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-saved-seat",
    "mode": "extreme",
    "type": "truth",
    "en": "Has someone ever brought a friend along to what you thought was a date? How did you handle it?",
    "el": "Έχει φέρει ποτέ κάποιος φίλο μαζί σε μια έξοδο που εσύ νόμιζες ότι ήταν ραντεβού; Πώς το αντιμετώπισες;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-crush-playlist-code",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever added a song to a shared playlist hoping one particular person would understand the message?",
    "el": "Έχεις βάλει τραγούδι σε κοινή λίστα ελπίζοντας ότι ένα συγκεκριμένο άτομο θα πιάσει το υπονοούμενο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-romantic-competition",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever tried harder to impress someone only after realising another person liked them too?",
    "el": "Έχεις προσπαθήσει περισσότερο να εντυπωσιάσεις κάποιον μόλις κατάλαβες ότι άρεσε και σε άλλο άτομο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-morning-after-message",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever read a message you sent the night before and wished you could edit just one sentence? Which sentence?",
    "el": "Έχεις διαβάσει το πρωί μήνυμα που έστειλες το προηγούμενο βράδυ και ευχήθηκες να μπορούσες να αλλάξεις μία πρόταση; Ποια;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-fake-accidental-meeting",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever called a meeting accidental even though you knew exactly where the person would be?",
    "el": "Έχεις παρουσιάσει μια συνάντηση ως τυχαία ενώ ήξερες ακριβώς πού θα βρισκόταν το άλλο άτομο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-wrong-name-date",
    "mode": "extreme",
    "type": "truth",
    "en": "Has a date ever called you by the wrong name, or have you done it to them? What happened next?",
    "el": "Σε έχει πει ποτέ ένα ραντεβού με λάθος όνομα ή το έχεις κάνει εσύ; Τι έγινε μετά;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-almost-introduction",
    "mode": "extreme",
    "type": "truth",
    "en": "Who almost became your partner but never actually went on a first date with you?",
    "el": "Ποιο άτομο έφτασε κοντά στο να γίνει σύντροφός σου, αλλά τελικά δεν βγήκατε ούτε πρώτο ραντεβού;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-compliment-rehearsal",
    "mode": "extreme",
    "type": "truth",
    "en": "Have you ever discovered on a date that you had previously argued with that person online?",
    "el": "Έχεις ανακαλύψει σε ραντεβού ότι είχες τσακωθεί παλιότερα με αυτό το άτομο στο διαδίκτυο;",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-group-vacation-flirt",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here would return from a weekend away with a love story that lasted longer than the holiday?",
    "el": "Ποιος από την παρέα θα γύριζε από διήμερο με μια ερωτική ιστορία που κράτησε περισσότερο από τις διακοπές;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra20-group-chat-detective",
    "mode": "extreme",
    "type": "truth",
    "en": "Who here could work out that two people are dating just from the way they behave in a group chat?",
    "el": "Ποιος από την παρέα θα καταλάβαινε ότι δύο άτομα βγαίνουν μόνο από τον τρόπο που φέρονται σε μια ομαδική συνομιλία;",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra20-group-secret-matchmaker",
    "mode": "extreme",
    "type": "truth",
    "en": "Which two fictional characters would you cast as the romantic leads if this group became a film? Explain your casting.",
    "el": "Ποιους δύο φανταστικούς χαρακτήρες θα έβαζες στους ρομαντικούς πρωταγωνιστικούς ρόλους αν αυτή η παρέα γινόταν ταινία; Εξήγησε την επιλογή σου.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra20-date-receipt-review",
    "mode": "extreme",
    "type": "dare",
    "en": "Give a dramatic review of an imaginary disastrous date as though you were reviewing a restaurant.",
    "el": "Κάνε μια δραματική κριτική για ένα φανταστικό καταστροφικό ραντεβού σαν να αξιολογείς εστιατόριο.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-stolen-jacket-case",
    "mode": "extreme",
    "type": "dare",
    "en": "Defend yourself in an imaginary court for borrowing a date’s jacket and secretly wanting to keep it.",
    "el": "Υπερασπίσου τον εαυτό σου σε φανταστικό δικαστήριο επειδή δανείστηκες το μπουφάν ενός ραντεβού και κρυφά θέλεις να το κρατήσεις.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-doorbell-date",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out the ten seconds between hearing the doorbell and opening the door for a date you really like.",
    "el": "Παίξε τα δέκα δευτερόλεπτα ανάμεσα στο κουδούνι και στο άνοιγμα της πόρτας για ένα ραντεβού που σου αρέσει πολύ.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-flirt-tech-support",
    "mode": "extreme",
    "type": "dare",
    "en": "Perform a flirting attempt using only phrases that sound like technical support.",
    "el": "Κάνε μια απόπειρα φλερτ χρησιμοποιώντας μόνο φράσεις που θυμίζουν τεχνική υποστήριξη.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-romantic-lost-luggage",
    "mode": "extreme",
    "type": "dare",
    "en": "Act out declaring your feelings while an imaginary airport keeps announcing your lost luggage.",
    "el": "Παίξε ότι εξομολογείσαι τα αισθήματά σου ενώ ένα φανταστικό αεροδρόμιο κάνει συνέχεια ανακοινώσεις για τη χαμένη βαλίτσα σου.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-group-love-song-jury",
    "mode": "extreme",
    "type": "dare",
    "en": "The group gives you three unrelated words. Make them the chorus of an imaginary love song.",
    "el": "Η παρέα σού δίνει τρεις άσχετες λέξεις. Κάν’ τες ρεφρέν ενός φανταστικού ερωτικού τραγουδιού.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra20-group-romantic-press",
    "mode": "extreme",
    "type": "dare",
    "en": "Give a press conference about an imaginary first date. Each other player asks you one question.",
    "el": "Δώσε συνέντευξη Τύπου για ένα φανταστικό πρώτο ραντεβού. Κάθε άλλο άτομο σου κάνει μία ερώτηση.",
    "adult": true,
    "pair": false,
    "minPlayers": 3
  },
  {
    "id": "extra20-flirty-menu",
    "mode": "extreme",
    "type": "dare",
    "en": "Describe three ordinary café orders as though each one were a different style of flirting.",
    "el": "Περίγραψε τρεις απλές παραγγελίες σε καφέ σαν να είναι τρεις διαφορετικοί τρόποι φλερτ.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-sip-toast-own",
    "mode": "extreme",
    "type": "dare",
    "en": "Raise your drink, make a toast to your worst flirting attempt and take one small sip.",
    "el": "Σήκωσε το ποτό σου, κάνε πρόποση στη χειρότερη απόπειρά σου για φλερτ και πάρε μια μικρή γουλιά.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-sip-film-trailer",
    "mode": "extreme",
    "type": "dare",
    "en": "Announce your next small sip like the narrator of an overly dramatic film trailer, then take it.",
    "el": "Ανακοίνωσε την επόμενη μικρή γουλιά σου σαν αφηγητής υπερβολικά δραματικού τρέιλερ και μετά πιες την.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-sip-dating-award",
    "mode": "extreme",
    "type": "dare",
    "en": "Accept an imaginary award for the most awkward first-date greeting, then celebrate with one small sip.",
    "el": "Παρέλαβε ένα φανταστικό βραβείο για τον πιο αμήχανο χαιρετισμό πρώτου ραντεβού και γιόρτασέ το με μια μικρή γουλιά.",
    "adult": true,
    "pair": false
  },
  {
    "id": "extra20-sip-future-self",
    "mode": "extreme",
    "type": "dare",
    "en": "Invent a ridiculous name for your drink, design its imaginary logo in the air and take one small sip.",
    "el": "Δώσε ένα γελοίο όνομα στο ποτό σου, σχεδίασε το φανταστικό λογότυπό του στον αέρα και πάρε μια μικρή γουλιά.",
    "adult": true,
    "pair": false
  }
];
// END EXTRA_CARDS_20
const LEGACY_CARDS = [...Object.entries(decks).flatMap(([mode,types])=>Object.entries(types).flatMap(([type,rows])=>rows.map(([en,el,pair=false],i)=>({id:`${mode}-${type}-${i+1}`,mode,type,en,el,pair})))),...SUPPLIED_CARDS,...PHOTO_QUESTIONS,...EXTRA_PHOTO_QUESTIONS,...RESEARCH_CARDS_18,...EXTRA_CARDS_19,...EXTRA_CARDS_20].map(card=>({...card,...(ANSWER_ONLY_IDS.has(card.id)?{type:'truth'}:{}),...(GROUP_QUESTION_IDS.has(card.id)?{minPlayers:3}:{})})).map(card=>({...card,variants:TWO_PLAYER_WORDING[card.id]?{two:TWO_PLAYER_WORDING[card.id]}:card.variants,...(card.id==='supplied-dare-32'?{minTargets:0,variants:{two:TWO_PLAYER_WORDING[card.id],group:{en:'Give a very deliberate wink to each of the other players.',el:'Κλείσε επιτηδευμένα το μάτι σε καθένα από τα υπόλοιπα άτομα της παρέας.'}}}:{})}));
// Old mild Extreme cards are retired, not copied into the all-ages Casual pool.
// Keep the existing penalty record addressable by the existing pass flow only.
export const CARDS = [...LEGACY_CARDS.filter(c=>c.mode==='casual'),
 ...LEGACY_CARDS.filter(c=>c.id==='supplied-dare-3').map(c=>({...c,penaltyOnly:true})),...BOLD_CARDS];
export function cardWording(card,language,playerCount,player={}){
 const context=playerCount===2?card.variants?.two:card.variants?.group;
 return context?.genderWording?.[player.gender]?.[language]||context?.[language]||card.genderWording?.[player.gender]?.[language]||card[language];
}
