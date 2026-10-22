"use strict";

// Game debut years and platforms released in that debut year; later ports are excluded.
// Greek lines are translations of the short original-language excerpts.
const GM_CHARACTERS = [
  {id:'lara',platform:["Sega Saturn", "PS1", "PC"],name:'Lara Croft',aliases:['lara','λάρα','λαρα κροφτ'],gender:'female',series:'Tomb Raider',genre:'adventure',year:1996,weapon:'pistols',quote:['I make my own luck.','Δημιουργώ τη δική μου τύχη.'],game:'Tomb Raider: The Last Revelation',source:'https://tombraiderhorizons.com/2014/07/20/in-the-spotlight-stella/'},
  {id:'jill',platform:["PS1"],name:'Jill Valentine',aliases:['jill','τζιλ','τζιλ βαλενταιν'],gender:'female',series:'Resident Evil',genre:'horror',year:1996,weapon:'handgun',quote:["You want S.T.A.R.S.? I'll give you stars!",'Θέλεις S.T.A.R.S.; Θα σου δώσω αστέρια!'],game:'Resident Evil 3',source:'https://www.starburstmagazine.com/features/nicole-tompkins-resident-evil-3/'},
  {id:'chun-li',platform:["Arcade"],name:'Chun-Li',aliases:['chun li','chunli','τσουν λι'],gender:'female',series:'Street Fighter',genre:'fighting',year:1991,weapon:'kicks',quote:["I'm the strongest woman in the world!",'Είμαι η δυνατότερη γυναίκα στον κόσμο!'],game:'Street Fighter II',source:'https://streetfighter.fandom.com/wiki/Chun-Li/Quotes'},
  {id:'aloy',platform:["PS4"],name:'Aloy',aliases:['έιλοϊ','αλοι'],gender:'female',series:'Horizon',genre:'adventure',year:2017,weapon:'bow',quote:["I'm not your Anointed!",'Δεν είμαι η Εκλεκτή σας!'],game:'Horizon Zero Dawn',source:'https://game-scripts-wiki.blogspot.com/2018/10/horizon-zero-dawn-full-transcript.html'},
  {id:'bayonetta',platform:["PS3", "Xbox 360"],name:'Bayonetta',aliases:['cereza','μπαγιονετα','μπαγιονέτα'],gender:'female',series:'Bayonetta',genre:'action',year:2009,weapon:'gun-heels',quote:["As long as there's music, I'll keep on dancing.",'Όσο υπάρχει μουσική, θα συνεχίζω να χορεύω.'],game:'Bayonetta',source:'https://bayonetta.fandom.com/wiki/Bayonetta_%28character%29/Quotes'},
  {id:'kratos',platform:["PS2"],name:'Kratos',aliases:['κράτος','κρατος'],gender:'male',series:'God of War',genre:'adventure',year:2005,weapon:'blades',quote:['Do not be sorry. Be better.','Μη ζητάς συγγνώμη. Γίνε καλύτερος.'],game:'God of War (2018)',source:'https://en.wikiquote.org/wiki/God_of_War_%282018_video_game%29'},
  {id:'geralt',platform:["PC"],name:'Geralt of Rivia',aliases:['geralt','γκεραλτ','γκέραλτ'],gender:'male',series:'The Witcher',genre:'rpg',year:2007,weapon:'swords',quote:["Wind's howling.",'Ο άνεμος ουρλιάζει.'],game:'The Witcher 3: Wild Hunt',source:'https://www.transcript-publishing.com/media/pdf/0b/2f/6e/oa9783839462645x3KFvT1HsQjWN.pdf'},
  {id:'arthur',platform:["PS4", "Xbox One"],name:'Arthur Morgan',aliases:['arthur','άρθουρ','αρθουρ μοργκαν'],gender:'male',series:'Red Dead Redemption',genre:'adventure',year:2018,weapon:'revolver',quote:['I gave you all I had.','Σου έδωσα ό,τι είχα.'],game:'Red Dead Redemption 2',source:'https://reddead.fandom.com/wiki/Arthur_Morgan/Quotes'},
  {id:'chief',platform:["Xbox"],name:'Master Chief',aliases:['chief','john','john-117','john 117','μαστερ τσιφ'],gender:'male',series:'Halo',genre:'fps',year:2001,weapon:'rifle',quote:['Wake me when you need me.','Ξύπνα με όταν με χρειαστείς.'],game:'Halo 3',source:'https://www.halopedia.org/Wake_Me_When_You_Need_Me'},
  {id:'ezio',platform:["PS3", "Xbox 360"],name:'Ezio Auditore',aliases:['ezio','ezio auditore da firenze','έτσιο','ετσιο'],gender:'male',series:"Assassin's Creed",genre:'adventure',year:2009,weapon:'hidden-blade',quote:['Requiescat in pace.','Αναπαύσου εν ειρήνη.'],game:"Assassin's Creed II",source:'https://www.imdb.com/title/tt1201133/quotes/'},
  {"id": "leon",platform:["PS1"], "name": "Leon S. Kennedy", "aliases": ["leon", "leon kennedy", "λεον", "λέον κένεντι"], "gender": "male", "series": "Resident Evil", "genre": "horror", "year": 1998, "weapon": "handgun", "quote": ["Where's everyone going? Bingo?", "Πού πάνε όλοι; Για μπίνγκο;"], "game": "Resident Evil 4", "source": "https://cogconnected.com/2023/03/secret-weapon-resident-evil-4-chainsaw-demo/"},
  {"id": "dante",platform:["PS2"], "name": "Dante", "aliases": ["ντάντε", "νταντε"], "gender": "male", "series": "Devil May Cry", "genre": "action", "year": 2001, "weapon": "sword-pistols", "quote": ["Devils never cry.", "Οι δαίμονες δεν κλαίνε."], "game": "Devil May Cry", "source": "https://en.wikiquote.org/wiki/Devil_May_Cry"},
  {"id": "cloud",platform:["PS1"], "name": "Cloud Strife", "aliases": ["cloud", "κλαουντ", "κλάουντ στράιφ"], "gender": "male", "series": "Final Fantasy", "genre": "rpg", "year": 1997, "weapon": "buster-sword", "quote": ["Alright everybody, let's mosey!", "Εντάξει παιδιά, πάμε!"], "game": "Final Fantasy VII", "source": "https://en.wikiquote.org/wiki/Final_Fantasy_VII"},
  {"id": "duke",platform:["PC"], "name": "Duke Nukem", "aliases": ["duke", "ντιουκ", "ντιουκ νουκεμ"], "gender": "male", "series": "Duke Nukem", "genre": "fps", "year": 1991, "weapon": "rifle", "quote": ["Hail to the king, baby!", "Υποκλιθείτε στον βασιλιά, μωρό μου!"], "game": "Duke Nukem 3D", "source": "https://en.wikiquote.org/wiki/Duke_Nukem"},
  {"id": "scorpion",platform:["Arcade"], "name": "Scorpion", "aliases": ["hanzo", "hanzo hasashi", "σκορπιον", "σκόρπιον"], "gender": "male", "series": "Mortal Kombat", "genre": "fighting", "year": 1992, "weapon": "kunai", "quote": ["Get over here!", "Έλα εδώ!"], "game": "Mortal Kombat (1992)", "source": "https://en.wikiquote.org/wiki/Mortal_Kombat_%281992_video_game%29"},
  {"id": "ada",platform:["PS1"], "name": "Ada Wong", "aliases": ["ada", "άντα", "αντα γουονγκ"], "gender": "female", "series": "Resident Evil", "genre": "horror", "year": 1998, "weapon": "grapple", "quote": ["It's secret weapon time.", "Ώρα για το μυστικό όπλο."], "game": "Resident Evil 2 (2019)", "source": "https://residentevil.fandom.com/wiki/Ada_Wong/quotes"},
  {"id": "tifa",platform:["PS1"], "name": "Tifa Lockhart", "aliases": ["tifa", "τίφα", "τιφα λοκχαρτ"], "gender": "female", "series": "Final Fantasy", "genre": "rpg", "year": 1997, "weapon": "kicks", "quote": ["Words aren't the only way to tell someone how you feel.", "Οι λέξεις δεν είναι ο μόνος τρόπος να δείξεις σε κάποιον πώς νιώθεις."], "game": "Final Fantasy VII", "source": "https://en.wikiquote.org/wiki/Final_Fantasy_VII"},
  {"id": "lightning",platform:["PS3"], "name": "Lightning", "aliases": ["claire farron", "lightning farron", "λάιτνινγκ", "λαιτνινγκ"], "gender": "female", "series": "Final Fantasy", "genre": "rpg", "year": 2009, "weapon": "gunblade", "quote": ["Worst birthday ever.", "Τα χειρότερα γενέθλια που είχα ποτέ."], "game": "Final Fantasy XIII", "source": "https://en.wikiquote.org/wiki/Final_Fantasy_XIII"},
  {"id": "peach",platform:["Nintendo NES / Famicom"], "name": "Princess Peach", "aliases": ["peach", "toadstool", "princess toadstool", "πιτς", "πριγκίπισσα πιτς"], "gender": "female", "series": "Super Mario", "genre": "platform", "year": 1985, "weapon": "parasol", "quote": ["I've baked a cake for you.", "Έψησα ένα κέικ για σένα."], "game": "Super Mario 64", "source": "https://www.mariowiki.com/List_of_Super_Mario_64_and_Super_Mario_64_DS_quotes"},
  {"id": "cortana",platform:["Xbox"], "name": "Cortana", "aliases": ["κορτάνα", "κορτανα"], "gender": "female", "series": "Halo", "genre": "fps", "year": 2001, "weapon": "ai", "quote": ["Don't make a girl a promise if you know you can't keep it.", "Μην υπόσχεσαι κάτι σε μια κοπέλα αν ξέρεις ότι δεν μπορείς να το τηρήσεις."], "game": "Halo 3 (Halo 2 recollection)", "source": "https://en.wikiquote.org/wiki/Halo_3"},
  {"id": "ryu",platform:["Arcade"], "name": "Ryu", "aliases": ["ριου", "ρύου"], "gender": "male", "series": "Street Fighter", "genre": "fighting", "year": 1987, "weapon": "kicks", "quote": ["The answer lies in the heart of battle.", "Η απάντηση βρίσκεται στην καρδιά της μάχης."], "game": "Street Fighter IV", "source": "https://streetfighter.fandom.com/wiki/Ryu/Quotes"},
  {"id": "nathan",platform:["PS3"], "name": "Nathan Drake", "aliases": ["nathan", "drake", "νέιθαν ντρέικ"], "gender": "male", "series": "Uncharted", "genre": "adventure", "year": 2007, "weapon": "handgun", "quote": ["Sic parvis magna.", "Το μεγαλείο ξεκινά από μικρά πράγματα."], "game": "Uncharted 4: A Thief's End", "source": "https://uncharted.fandom.com/wiki/A_Thief%27s_End_script"},
  {"id": "maxpayne",platform:["PC", "PS2", "Xbox"], "name": "Max Payne", "aliases": ["max", "μαξ πέιν", "μαξ πειν"], "gender": "male", "series": "Max Payne", "genre": "action", "year": 2001, "weapon": "pistols", "quote": ["They were all dead.", "Ήταν όλοι νεκροί."], "game": "Max Payne", "source": "https://en.wikiquote.org/wiki/Max_Payne"},
  {"id": "joel",platform:["PS3"], "name": "Joel Miller", "aliases": ["joel", "τζόελ", "τζοελ μιλερ"], "gender": "male", "series": "The Last of Us", "genre": "horror", "year": 2013, "weapon": "revolver", "quote": ["You have no idea what loss is.", "Δεν έχεις ιδέα τι θα πει απώλεια."], "game": "The Last of Us", "source": "https://en.wikiquote.org/wiki/The_Last_of_Us"},
  {"id": "snake",platform:["MSX2"], "name": "Solid Snake", "aliases": ["snake", "old snake", "david", "σόλιντ σνέικ"], "gender": "male", "series": "Metal Gear", "genre": "stealth", "year": 1987, "weapon": "silenced-handgun", "quote": ["War has changed.", "Ο πόλεμος έχει αλλάξει."], "game": "Metal Gear Solid 4: Guns of the Patriots", "source": "https://www.imdb.com/title/tt0462423/quotes/"},
  {"id": "samus",platform:["Nintendo Famicom Disk System"], "name": "Samus Aran", "aliases": ["samus", "σάμους", "σαμους αραν"], "gender": "female", "series": "Metroid", "genre": "metroidvania", "year": 1986, "weapon": "arm-cannon", "quote": ["Any objections, Adam?", "Καμία αντίρρηση, Άνταμ;"], "game": "Metroid: Other M", "source": "https://metroid.retropixel.net/games/metroidom/transcript.php"},
  {"id": "ellie",platform:["PS3"], "name": "Ellie Williams", "aliases": ["ellie", "έλι", "ελι γουιλιαμς"], "gender": "female", "series": "The Last of Us", "genre": "horror", "year": 2013, "weapon": "bow", "quote": ["Everyone I have cared for has either died or left me.", "Όλοι όσους νοιάστηκα είτε πέθαναν είτε με εγκατέλειψαν."], "game": "The Last of Us", "source": "https://en.wikiquote.org/wiki/The_Last_of_Us"},
  {"id": "lady",platform:["PS2"], "name": "Lady", "aliases": ["mary", "λέιντι", "λειντι"], "gender": "female", "series": "Devil May Cry", "genre": "action", "year": 2005, "weapon": "rocket-launcher", "quote": ["Even a devil may cry when he loses a loved one.", "Ακόμα κι ένας δαίμονας μπορεί να κλάψει όταν χάσει κάποιον που αγαπά."], "game": "Devil May Cry 3: Dante's Awakening", "source": "https://devilmaycry.fandom.com/wiki/Dante"},
  {"id": "kitana",platform:["Arcade"], "name": "Kitana", "aliases": ["κιτάνα", "κιτανα"], "gender": "female", "series": "Mortal Kombat", "genre": "fighting", "year": 1993, "weapon": "steel-fans", "quote": ["You will learn respect!", "Θα μάθεις να δείχνεις σεβασμό!"], "game": "Mortal Kombat (2011)", "source": "https://mortalkombat.fandom.com/wiki/Kitana"},
  {"id": "glados",platform:["PC", "Xbox 360", "PS3"], "name": "GLaDOS", "aliases": ["glados", "γκλάντος", "γκλαντος"], "gender": "female", "series": "Portal", "genre": "puzzle", "year": 2007, "weapon": "ai", "quote": ["You are a horrible person.", "Είσαι απαίσιος άνθρωπος."], "game": "Portal 2", "source": "https://theportalwiki.com/wiki/Template:Dictionary/voice_lines/GLaDOS/sp_laser_powered_lift_completion01"},
  {"id": "wheatley",platform:["PC", "PS3", "Xbox 360"], "name": "Wheatley", "aliases": ["wheatley", "γουίτλι", "γουιτλι"], "gender": "male", "series": "Portal", "genre": "puzzle", "year": 2011, "weapon": "ai", "quote": ["I am not a moron!", "Δεν είμαι ηλίθιος!"], "game": "Portal 2", "source": "https://theportalwiki.com/wiki/Wheatley_voice_lines"},
  {"id": "mario",platform:["Arcade"], "name": "Mario", "aliases": ["μάριο", "μαριο", "super mario"], "gender": "male", "series": "Super Mario", "genre": "platform", "year": 1981, "weapon": "fireball", "quote": ["It's-a me, Mario!", "Είμαι εγώ, ο Μάριο!"], "game": "Super Mario 64", "source": "https://www.mariowiki.com/List_of_Super_Mario_64_and_Super_Mario_64_DS_quotes"},
  {"id": "sonic",platform:["Sega Mega Drive / Genesis"], "name": "Sonic the Hedgehog", "aliases": ["sonic", "σόνικ", "σονικ"], "gender": "male", "series": "Sonic the Hedgehog", "genre": "platform", "year": 1991, "weapon": "spin", "quote": ["You're too slow!", "Είσαι πολύ αργός!"], "game": "Super Smash Bros. Brawl", "source": "https://www.smashwiki.com/Sonic_(SSBB)"},
  {"id": "john-marston",platform:["PS3", "Xbox 360"], "name": "John Marston", "aliases": ["john", "marston", "τζον μαρστον", "τζον μάρστον"], "gender": "male", "series": "Red Dead Redemption", "genre": "adventure", "year": 2010, "weapon": "revolver", "quote": ["People don't forget. Nothing gets forgiven.", "Οι άνθρωποι δεν ξεχνούν. Τίποτα δεν συγχωρείται."], "game": "Red Dead Redemption", "source": "https://gameinformer.com/2018/10/24/remembering-the-mundane-greatness-of-john-marston"},
  {"id": "andrew-ryan",platform:["PC", "Xbox 360"], "name": "Andrew Ryan", "aliases": ["ryan", "άντριου ράιαν", "αντριου ραιαν"], "gender": "male", "series": "BioShock", "genre": "fps", "year": 2007, "weapon": "golf-club", "quote": ["A man chooses. A slave obeys.", "Ο άνθρωπος επιλέγει. Ο σκλάβος υπακούει."], "game": "BioShock", "source": "https://bioshock.fandom.com/wiki/A_man_chooses%2C_a_slave_obeys"},
  {"id": "vaas",platform:["PC", "PS3", "Xbox 360"], "name": "Vaas Montenegro", "aliases": ["vaas", "βας", "βάας", "vaas montenegro"], "gender": "male", "series": "Far Cry", "genre": "fps", "year": 2012, "weapon": "rifle", "quote": ["Did I ever tell you what the definition of insanity is?", "Σου είπα ποτέ ποιος είναι ο ορισμός της παραφροσύνης;"], "game": "Far Cry 3", "source": "https://en.wikiquote.org/wiki/Far_Cry_3"},
  {"id": "tracer",platform:["PC", "PS4", "Xbox One"], "name": "Tracer", "aliases": ["lena oxton", "τρέισερ", "τρεισερ"], "gender": "female", "series": "Overwatch", "genre": "fps", "year": 2016, "weapon": "pistols", "quote": ["Cheers, love! The cavalry's here!", "Γεια σου, αγάπη! Το ιππικό έφτασε!"], "game": "Overwatch", "source": "https://overwatch.fandom.com/wiki/Tracer/Quotes"},
  {"id": "mercy",platform:["PC", "PS4", "Xbox One"], "name": "Mercy", "aliases": ["angela ziegler", "μέρσι", "μερσι"], "gender": "female", "series": "Overwatch", "genre": "fps", "year": 2016, "weapon": "staff", "quote": ["Heroes never die!", "Οι ήρωες δεν πεθαίνουν ποτέ!"], "game": "Overwatch", "source": "https://overwatch.fandom.com/wiki/Mercy/Quotes"},
  {"id": "elizabeth",platform:["PC", "PS3", "Xbox 360"], "name": "Elizabeth", "aliases": ["elizabeth comstock", "ελίζαμπεθ", "ελιζαμπεθ"], "gender": "female", "series": "BioShock", "genre": "fps", "year": 2013, "weapon": "tears", "quote": ["Booker, are you afraid of God?", "Μπούκερ, φοβάσαι τον Θεό;"], "game": "BioShock Infinite", "source": "https://www.sidequesting.com/2014/01/sidequestings-best-of-2013-5-bioshock-infinite/"},
  {"id": "liara",platform:["Xbox 360"], "name": "Liara T’Soni", "aliases": ["liara", "liara tsoni", "liara t'soni", "λιάρα", "λιαρα"], "gender": "female", "series": "Mass Effect", "genre": "rpg", "year": 2007, "weapon": "biotics", "quote": ["By the Goddess!", "Μα τη Θεά!"], "game": "Mass Effect", "source": "https://masseffect.fandom.com/wiki/Liara_T%27Soni"},
  {"id": "kerrigan",platform:["PC"], "name": "Sarah Kerrigan", "aliases": ["kerrigan", "queen of blades", "σάρα κέριγκαν", "κεριγκαν"], "gender": "female", "series": "StarCraft", "genre": "strategy", "year": 1998, "weapon": "claws", "quote": ["I am the Swarm.", "Είμαι το Σμήνος."], "game": "StarCraft II: Heart of the Swarm", "source": "https://www.youtube.com/watch?v=Sm3Xl-h3iK4"},
{"id": "crash", "name": "Crash Bandicoot", "aliases": ["crash", "κρας μπαντικουτ"], "gender": "male", "series": "Crash Bandicoot", "genre": "platform", "year": 1996, "platform": ["PS1"], "game": "Crash Bandicoot", "source": "https://blog.playstation.com/archive/2010/06/03/playstation-at-e3-1996/", "classicOnly": true},
{"id": "ratchet", "name": "Ratchet", "aliases": ["ρατσετ"], "gender": "male", "series": "Ratchet & Clank", "genre": "platform", "year": 2002, "platform": ["PS2"], "game": "Ratchet & Clank", "source": "https://blog.playstation.com/?p=371717", "classicOnly": true},
{"id": "jak", "name": "Jak", "aliases": ["τζακ"], "gender": "male", "series": "Jak and Daxter", "genre": "platform", "year": 2001, "platform": ["PS2"], "game": "Jak and Daxter: The Precursor Legacy", "source": "https://blog.playstation.com/2012/08/24/behind-the-classics-jak-daxter/", "classicOnly": true},
{"id": "spyro", "name": "Spyro", "aliases": ["spyro the dragon", "σπαιρο"], "gender": "male", "series": "Spyro", "genre": "platform", "year": 1998, "platform": ["PS1"], "game": "Spyro the Dragon", "source": "https://blog.playstation.com/?p=384113", "classicOnly": true},
{"id": "kirby", "name": "Kirby", "aliases": ["κιρμπι"], "gender": "male", "series": "Kirby", "genre": "platform", "year": 1992, "platform": ["Game Boy"], "game": "Kirby’s Dream Land", "source": "https://kirby.nintendo.com/about/", "classicOnly": true},
{"id": "link", "name": "Link", "aliases": ["λινκ"], "gender": "male", "series": "The Legend of Zelda", "genre": "adventure", "year": 1986, "platform": ["Famicom Disk System"], "game": "The Legend of Zelda", "source": "https://www.nintendo.com/hk/character/zelda/history/index.html", "classicOnly": true},
{"id": "zelda", "name": "Princess Zelda", "aliases": ["zelda", "ζελντα"], "gender": "female", "series": "The Legend of Zelda", "genre": "adventure", "year": 1986, "platform": ["Famicom Disk System"], "game": "The Legend of Zelda", "source": "https://www.nintendo.com/hk/character/zelda/history/index.html", "classicOnly": true},
{"id": "donkey-kong", "name": "Donkey Kong", "aliases": ["dk", "ντονκι κονγκ"], "gender": "male", "series": "Donkey Kong", "genre": "platform", "year": 1981, "platform": ["Arcade"], "game": "Donkey Kong", "source": "https://www.nintendo.com/en-gb/Hardware/Nintendo-History/Nintendo-History-625945.html", "classicOnly": true},
{"id": "daisy", "name": "Princess Daisy", "aliases": ["daisy", "ντειζι"], "gender": "female", "series": "Super Mario", "genre": "platform", "year": 1989, "platform": ["Game Boy"], "game": "Super Mario Land", "source": "https://mario.nintendo.com/characters/", "classicOnly": true},
{"id": "pac-man", "name": "Pac-Man", "aliases": ["pacman", "πακ μαν"], "gender": "male", "series": "Pac-Man", "genre": "maze", "year": 1980, "platform": ["Arcade"], "game": "Pac-Man", "source": "https://www.bandainamcoent.com/pac-man-45th-anniversary", "classicOnly": true}
];
// Additional quote speakers do not change the Classic roster.
GM_CHARACTERS.push(...[
  {
    "id": "gman",
    "name": "G-Man",
    "aliases": [
      "g man",
      "gman",
      "τζι μαν"
    ],
    "quote": [
      "Rise and shine, Mr. Freeman.",
      "Ξυπνήστε, κύριε Φρίμαν."
    ],
    "game": "Half-Life 2",
    "source": "https://en.wikiquote.org/wiki/Half-Life#G-Man_2",
    "quoteOnly": true
  },
  {
    "id": "solaire",
    "name": "Solaire of Astora",
    "aliases": [
      "solaire",
      "σολερ",
      "σολαιρ"
    ],
    "quote": [
      "If only I could be so grossly incandescent!",
      "Μακάρι να μπορούσα κι εγώ να λάμπω τόσο εκτυφλωτικά!"
    ],
    "game": "Dark Souls",
    "source": "https://en.wikiquote.org/wiki/Dark_Souls#Solaire_of_Astora",
    "quoteOnly": true
  },
  {
    "id": "dva",
    "name": "D.Va",
    "aliases": [
      "dva",
      "d va",
      "hana song",
      "ντι βα"
    ],
    "quote": [
      "Nerf this!",
      "Αποδυναμώστε αυτό!"
    ],
    "game": "Overwatch",
    "source": "https://en.wikiquote.org/wiki/Overwatch#D.Va",
    "quoteOnly": true
  },
  {
    "id": "soldier76",
    "name": "Soldier: 76",
    "aliases": [
      "soldier 76",
      "soldier",
      "jack morrison",
      "σολτζερ 76"
    ],
    "quote": [
      "I’ve got you in my sights!",
      "Σας έχω στο στόχαστρο!"
    ],
    "game": "Overwatch",
    "source": "https://en.wikiquote.org/wiki/Overwatch#Soldier:_76",
    "quoteOnly": true
  },
  {
    "id": "reaper",
    "name": "Reaper",
    "aliases": [
      "gabriel reyes",
      "ριπερ"
    ],
    "quote": [
      "Die, die, DIE!",
      "Πέθανε, πέθανε, ΠΕΘΑΝΕ!"
    ],
    "game": "Overwatch",
    "source": "https://en.wikiquote.org/wiki/Overwatch#Reaper",
    "quoteOnly": true
  },
  {
    "id": "reinhardt",
    "name": "Reinhardt",
    "aliases": [
      "reinhardt wilhelm",
      "ραινχαρντ"
    ],
    "quote": [
      "Hammer down!",
      "Κάτω το σφυρί!"
    ],
    "game": "Overwatch",
    "source": "https://en.wikiquote.org/wiki/Overwatch#Reinhardt",
    "quoteOnly": true
  },
  {
    "id": "zenyatta",
    "name": "Zenyatta",
    "aliases": [
      "tekhartha zenyatta",
      "ζενιατα"
    ],
    "quote": [
      "Experience tranquility.",
      "Νιώσε τη γαλήνη."
    ],
    "game": "Overwatch",
    "source": "https://en.wikiquote.org/wiki/Overwatch#Zennyata",
    "quoteOnly": true
  },
  {
    "id": "lucio",
    "name": "Lúcio",
    "aliases": [
      "lucio",
      "λουσιο"
    ],
    "quote": [
      "Oh, let’s break it down!",
      "Πάμε να τα δώσουμε όλα!"
    ],
    "game": "Overwatch",
    "source": "https://en.wikiquote.org/wiki/Overwatch#L%C3%BAcio",
    "quoteOnly": true
  },
  {
    "id": "zarya",
    "name": "Zarya",
    "aliases": [
      "aleksandra zaryanova",
      "ζαρια"
    ],
    "quote": [
      "Fire at will!",
      "Πυρ κατά βούληση!"
    ],
    "game": "Overwatch",
    "source": "https://en.wikiquote.org/wiki/Overwatch#Zarya",
    "quoteOnly": true
  }
]);
// Nine existing quote speakers now join Classic with their debut platforms.
const GM_CLASSIC_EXPANSION={"gman": {"gender": "male", "series": "Half-Life", "genre": "fps", "year": 1998, "platform": ["PC"]}, "solaire": {"gender": "male", "series": "Dark Souls", "genre": "rpg", "year": 2011, "platform": ["PS3", "Xbox 360"]}, "dva": {"gender": "female", "series": "Overwatch", "genre": "fps", "year": 2016, "platform": ["PC", "PS4", "Xbox One"]}, "soldier76": {"gender": "male", "series": "Overwatch", "genre": "fps", "year": 2016, "platform": ["PC", "PS4", "Xbox One"]}, "reaper": {"gender": "male", "series": "Overwatch", "genre": "fps", "year": 2016, "platform": ["PC", "PS4", "Xbox One"]}, "reinhardt": {"gender": "male", "series": "Overwatch", "genre": "fps", "year": 2016, "platform": ["PC", "PS4", "Xbox One"]}, "zenyatta": {"gender": "male", "series": "Overwatch", "genre": "fps", "year": 2016, "platform": ["PC", "PS4", "Xbox One"]}, "lucio": {"gender": "male", "series": "Overwatch", "genre": "fps", "year": 2016, "platform": ["PC", "PS4", "Xbox One"]}, "zarya": {"gender": "female", "series": "Overwatch", "genre": "fps", "year": 2016, "platform": ["PC", "PS4", "Xbox One"]}};
for(const c of GM_CHARACTERS){if(GM_CLASSIC_EXPANSION[c.id]){Object.assign(c,GM_CLASSIC_EXPANSION[c.id]);delete c.quoteOnly;}}
GM_CHARACTERS.push(...[
  {
    "id": "atlas",
    "name": "Atlas",
    "aliases": [
      "frank fontaine",
      "ατλας"
    ],
    "quote": [
      "Would you kindly?",
      "Θα είχες την καλοσύνη;"
    ],
    "game": "BioShock",
    "source": "https://en.wikiquote.org/wiki/BioShock#Atlas",
    "quoteOnly": true
  },
  {
    "id": "cavejohnson",
    "name": "Cave Johnson",
    "aliases": [
      "cave",
      "κειβ τζονσον"
    ],
    "quote": [
      "When life gives you lemons, don’t make lemonade.",
      "Όταν η ζωή σού δίνει λεμόνια, μη φτιάχνεις λεμονάδα."
    ],
    "game": "Portal 2",
    "source": "https://en.wikiquote.org/wiki/Portal_2#Cave_Johnson",
    "quoteOnly": true
  },
  {
    "id": "mordin",
    "name": "Mordin Solus",
    "aliases": [
      "mordin",
      "μορντιν σολους"
    ],
    "quote": [
      "Had to be me. Someone else might have gotten it wrong.",
      "Έπρεπε να το κάνω εγώ. Κάποιος άλλος μπορεί να έκανε λάθος."
    ],
    "game": "Mass Effect 3",
    "source": "https://en.wikiquote.org/wiki/Mass_Effect_3#Mordin_Solus",
    "quoteOnly": true
  },
  {
    "id": "garrus",
    "name": "Garrus Vakarian",
    "aliases": [
      "garrus",
      "γκαρους βακαριαν"
    ],
    "quote": [
      "I’m in the middle of some calibrations.",
      "Είμαι στη μέση κάποιων ρυθμίσεων."
    ],
    "game": "Mass Effect 2",
    "source": "https://en.wikiquote.org/wiki/Mass_Effect_2#Garrus_Vakarian",
    "quoteOnly": true
  },
  {
    "id": "papyrus",
    "name": "Papyrus",
    "aliases": [
      "the great papyrus",
      "παπυρους"
    ],
    "quote": [
      "Nyeh heh heh!",
      "Νιε χε χε!"
    ],
    "game": "Undertale",
    "source": "https://en.wikiquote.org/wiki/Undertale#Papyrus",
    "quoteOnly": true
  },
  {
    "id": "flowey",
    "name": "Flowey",
    "aliases": [
      "flowey the flower",
      "φλαουι"
    ],
    "quote": [
      "In this world, it’s kill or be killed.",
      "Σε αυτόν τον κόσμο, σκοτώνεις ή σκοτώνεσαι."
    ],
    "game": "Undertale",
    "source": "https://en.wikiquote.org/wiki/Undertale#Flowey",
    "quoteOnly": true
  },
  {
    "id": "toriel",
    "name": "Toriel",
    "aliases": [
      "τοριελ"
    ],
    "quote": [
      "Every human that falls down here meets the same fate.",
      "Κάθε άνθρωπος που πέφτει εδώ κάτω έχει την ίδια μοίρα."
    ],
    "game": "Undertale",
    "source": "https://en.wikiquote.org/wiki/Undertale#Toriel",
    "quoteOnly": true
  },
  {
    "id": "handsomejack",
    "name": "Handsome Jack",
    "aliases": [
      "jack",
      "χαντσομ τζακ"
    ],
    "quote": [
      "These pretzels suck.",
      "Αυτά τα πρέτσελ είναι χάλια."
    ],
    "game": "Borderlands 2",
    "source": "https://borderlands.fandom.com/wiki/Handsome_Jack/Quotes",
    "quoteOnly": true
  },
  {
    "id": "claptrap",
    "name": "Claptrap",
    "aliases": [
      "cl4p-tp",
      "κλαπτραπ"
    ],
    "quote": [
      "Stairs?!",
      "Σκάλες;!"
    ],
    "game": "Borderlands 2",
    "source": "https://borderlands.fandom.com/wiki/Claptrap/Quotes",
    "quoteOnly": true
  },
  {
    "id": "bigsmoke",
    "name": "Big Smoke",
    "aliases": [
      "melvin harris",
      "μπιγκ σμοουκ"
    ],
    "quote": [
      "All we had to do was follow the damn train, CJ!",
      "Το μόνο που έπρεπε να κάνουμε ήταν να ακολουθήσουμε το αναθεματισμένο τρένο, CJ!"
    ],
    "game": "Grand Theft Auto: San Andreas",
    "source": "https://en.wikiquote.org/wiki/Grand_Theft_Auto:_San_Andreas#Big_Smoke",
    "quoteOnly": true
  }
]);
// Familiar characters; Classic traits use each character’s first game appearance.
const GM_EXPANSION80={
  "garrus": {
    "gender": "male",
    "series": "Mass Effect",
    "genre": "rpg",
    "year": 2007,
    "platform": [
      "Xbox 360"
    ]
  },
  "handsomejack": {
    "gender": "male",
    "series": "Borderlands",
    "genre": "fps",
    "year": 2012,
    "platform": [
      "PC",
      "PS3",
      "Xbox 360"
    ]
  },
  "claptrap": {
    "gender": "male",
    "series": "Borderlands",
    "genre": "fps",
    "year": 2009,
    "platform": [
      "PC",
      "PS3",
      "Xbox 360"
    ]
  },
  "bigsmoke": {
    "gender": "male",
    "series": "Grand Theft Auto",
    "genre": "adventure",
    "year": 2004,
    "platform": [
      "PS2"
    ]
  }
};
for(const c of GM_CHARACTERS){if(GM_EXPANSION80[c.id]){Object.assign(c,GM_EXPANSION80[c.id]);delete c.quoteOnly;}}
const GM_QUOTES80={
  "jak": {
    "quote": [
      "I'm gonna kill Praxis!",
      "Θα σκοτώσω τον Πράξις!"
    ],
    "game": "Jak II",
    "source": "https://en.wikiquote.org/wiki/Jak_II#Jak"
  },
  "ratchet": {
    "quote": [
      "This isn't the real Captain Qwark, you numskull. It's a robot!",
      "Δεν είναι ο αληθινός Κάπτεν Κουόρκ, κουτοκέφαλε. Είναι ρομπότ!"
    ],
    "game": "Ratchet & Clank (2002)",
    "source": "https://en.wikiquote.org/wiki/Ratchet_%26_Clank_series"
  },
  "spyro": {
    "quote": [
      "Bring him on! I think I smell a barbecue!",
      "Ας έρθει! Νομίζω ότι μυρίζω μπάρμπεκιου!"
    ],
    "game": "Spyro the Dragon",
    "source": "https://en.wikiquote.org/wiki/Spyro_the_Dragon#Toasty"
  },
  "zelda": {
    "quote": [
      "But courage need not be remembered... For it is never forgotten.",
      "Το θάρρος δεν χρειάζεται να το θυμηθείς… γιατί δεν ξεχνιέται ποτέ."
    ],
    "game": "The Legend of Zelda: Breath of the Wild",
    "source": "https://en.wikiquote.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild#Zelda"
  }
};
for(const c of GM_CHARACTERS){if(GM_QUOTES80[c.id]){Object.assign(c,GM_QUOTES80[c.id]);delete c.classicOnly;}}
GM_CHARACTERS.push(...[
  {
    "id": "cj",
    "name": "Carl “CJ” Johnson",
    "aliases": [
      "cj",
      "carl johnson",
      "carl cj johnson",
      "καρλ τζονσον"
    ],
    "gender": "male",
    "series": "Grand Theft Auto",
    "genre": "adventure",
    "year": 2004,
    "platform": [
      "PS2"
    ],
    "quote": [
      "Ah shit, here we go again.",
      "Γαμώτο, πάλι τα ίδια."
    ],
    "game": "Grand Theft Auto: San Andreas",
    "source": "https://en.wikiquote.org/wiki/Grand_Theft_Auto:_San_Andreas"
  },
  {
    "id": "trevor",
    "name": "Trevor Philips",
    "aliases": [
      "trevor",
      "τρέβορ",
      "τρεβορ"
    ],
    "gender": "male",
    "series": "Grand Theft Auto",
    "genre": "adventure",
    "year": 2013,
    "platform": [
      "PS3",
      "Xbox 360"
    ],
    "quote": [
      "Let’s party, gentlemen!",
      "Ας αρχίσει το πάρτι, κύριοι!"
    ],
    "game": "Grand Theft Auto V",
    "source": "https://en.wikiquote.org/wiki/Grand_Theft_Auto_V#Trevor_Philips"
  },
  {
    "id": "michael",
    "name": "Michael De Santa",
    "aliases": [
      "michael",
      "michael townley",
      "μαικλ ντε σαντα"
    ],
    "gender": "male",
    "series": "Grand Theft Auto",
    "genre": "adventure",
    "year": 2013,
    "platform": [
      "PS3",
      "Xbox 360"
    ],
    "quote": [
      "You forget a thousand things every day, pal.",
      "Ξεχνάς χίλια πράγματα κάθε μέρα, φίλε."
    ],
    "game": "Grand Theft Auto V",
    "source": "https://en.wikiquote.org/wiki/Grand_Theft_Auto_V#Michael_De_Santa"
  },
  {
    "id": "franklin",
    "name": "Franklin Clinton",
    "aliases": [
      "franklin",
      "φρανκλιν"
    ],
    "gender": "male",
    "series": "Grand Theft Auto",
    "genre": "adventure",
    "year": 2013,
    "platform": [
      "PS3",
      "Xbox 360"
    ],
    "quote": [
      "You two motherfuckers terrify me of that middle age.",
      "Εσείς οι δυο με κάνετε να τρέμω τη μέση ηλικία."
    ],
    "game": "Grand Theft Auto V",
    "source": "https://en.wikiquote.org/wiki/Grand_Theft_Auto_V#Franklin_Clinton"
  },
  {
    "id": "niko",
    "name": "Niko Bellic",
    "aliases": [
      "niko",
      "νικο μπελιτς"
    ],
    "gender": "male",
    "series": "Grand Theft Auto",
    "genre": "adventure",
    "year": 2008,
    "platform": [
      "PS3",
      "Xbox 360",
      "PC"
    ],
    "quote": [
      "War is where the young and stupid are tricked by the old and bitter into killing each other.",
      "Πόλεμος είναι όταν οι γέροι και πικραμένοι ξεγελούν τους νέους και αφελείς για να σκοτώνουν ο ένας τον άλλον."
    ],
    "game": "Grand Theft Auto IV",
    "source": "https://en.wikiquote.org/wiki/Grand_Theft_Auto_IV#Niko_Bellic"
  },
  {
    "id": "agent47",
    "name": "Agent 47",
    "aliases": [
      "47",
      "agent forty seven",
      "πρακτορας 47"
    ],
    "gender": "male",
    "series": "Hitman",
    "genre": "stealth",
    "year": 2000,
    "platform": [
      "PC"
    ],
    "quote": [
      "Names are for friends...so I don't need one.",
      "Τα ονόματα είναι για τους φίλους… άρα δεν χρειάζομαι ένα."
    ],
    "game": "Hitman: Blood Money",
    "source": "https://en.wikiquote.org/wiki/Hitman:_Blood_Money"
  },
  {
    "id": "shepard",
    "name": "Commander Shepard",
    "aliases": [
      "shepard",
      "commander shepherd",
      "σεπαρντ"
    ],
    "gender": "player",
    "series": "Mass Effect",
    "genre": "rpg",
    "year": 2007,
    "platform": [
      "Xbox 360"
    ],
    "quote": [
      "I should go.",
      "Πρέπει να φύγω."
    ],
    "game": "Mass Effect",
    "source": "https://en.wikiquote.org/wiki/Mass_Effect#Commander_Shepard"
  },
  {
    "id": "marcus",
    "name": "Marcus Fenix",
    "aliases": [
      "marcus",
      "μαρκους φινιξ"
    ],
    "gender": "male",
    "series": "Gears of War",
    "genre": "action",
    "year": 2006,
    "platform": [
      "Xbox 360"
    ],
    "quote": [
      "They're sinking cities with a giant worm!",
      "Βυθίζουν πόλεις με ένα γιγάντιο σκουλήκι!"
    ],
    "game": "Gears of War 2",
    "source": "https://gearsofwar.fandom.com/wiki/Marcus_Michael_Fenix"
  },
  {
    "id": "price",
    "name": "Captain Price",
    "aliases": [
      "price",
      "john price",
      "captain john price",
      "καπτεν πραϊς"
    ],
    "gender": "male",
    "series": "Call of Duty",
    "genre": "fps",
    "year": 2007,
    "platform": [
      "PC",
      "PS3",
      "Xbox 360"
    ],
    "quote": [
      "Just another day at the office.",
      "Άλλη μια μέρα στο γραφείο."
    ],
    "game": "Call of Duty 4: Modern Warfare",
    "source": "https://en.wikiquote.org/wiki/Call_of_Duty_(series)#Call_of_Duty_4:_Modern_Warfare"
  },
  {
    "id": "ghost",
    "name": "Ghost",
    "aliases": [
      "simon riley",
      "simon ghost riley",
      "γκoστ",
      "γκοστ"
    ],
    "gender": "male",
    "series": "Call of Duty",
    "genre": "fps",
    "year": 2009,
    "platform": [
      "PC",
      "PS3",
      "Xbox 360"
    ],
    "quote": [
      "Be careful who you trust, Sergeant. People you know can hurt you the most.",
      "Πρόσεχε ποιον εμπιστεύεσαι, λοχία. Οι γνωστοί σου μπορούν να σε πληγώσουν περισσότερο."
    ],
    "game": "Call of Duty: Modern Warfare II (2022)",
    "source": "https://www.youtube.com/watch?v=aBKyyg9ZEtg"
  },
  {
    "id": "akuma",
    "name": "Akuma",
    "aliases": [
      "gouki",
      "ακουμα"
    ],
    "gender": "male",
    "series": "Street Fighter",
    "genre": "fighting",
    "year": 1994,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "Die one thousand deaths!",
      "Πέθανε χίλιους θανάτους!"
    ],
    "game": "Street Fighter IV",
    "source": "https://streetfighter.fandom.com/wiki/Akuma/Quotes"
  },
  {
    "id": "subzero",
    "name": "Sub-Zero",
    "aliases": [
      "sub zero",
      "subzero",
      "kuai liang",
      "σαμπ ζιρο"
    ],
    "gender": "male",
    "series": "Mortal Kombat",
    "genre": "fighting",
    "year": 1993,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "My blood runs cold.",
      "Το αίμα μου είναι παγωμένο."
    ],
    "game": "Mortal Kombat 11",
    "source": "https://en.wikiquote.org/wiki/Mortal_Kombat_11"
  },
  {
    "id": "raiden",
    "name": "Raiden",
    "aliases": [
      "ραιντεν",
      "ράιντεν"
    ],
    "gender": "male",
    "series": "Mortal Kombat",
    "genre": "fighting",
    "year": 1992,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "There are fates worse than death.",
      "Υπάρχουν μοίρες χειρότερες από τον θάνατο."
    ],
    "game": "Mortal Kombat X",
    "source": "https://en.wikiquote.org/wiki/Mortal_Kombat_X"
  },
  {
    "id": "liukang",
    "name": "Liu Kang",
    "aliases": [
      "liu",
      "liu kang",
      "λιου κανγκ"
    ],
    "gender": "male",
    "series": "Mortal Kombat",
    "genre": "fighting",
    "year": 1992,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "What does it mean to wield the Sands of Time?",
      "Τι σημαίνει να εξουσιάζεις την Άμμο του Χρόνου;"
    ],
    "game": "Mortal Kombat 11",
    "source": "https://en.wikiquote.org/wiki/Mortal_Kombat_11"
  },
  {
    "id": "bowser",
    "name": "Bowser",
    "aliases": [
      "king koopa",
      "κουπα",
      "μπαουζερ"
    ],
    "gender": "male",
    "series": "Super Mario",
    "genre": "platform",
    "year": 1985,
    "platform": [
      "Nintendo NES / Famicom"
    ],
    "quote": [
      "Welcome. No one's home! Now scram—and don't come back!",
      "Καλώς ήρθες. Κανείς δεν είναι σπίτι! Φύγε και μην ξανάρθεις!"
    ],
    "game": "Super Mario 64",
    "source": "https://en.wikiquote.org/wiki/Super_Mario_64#Bowser"
  },
  {
    "id": "sephiroth",
    "name": "Sephiroth",
    "aliases": [
      "σεφιροθ",
      "σεφιροτ"
    ],
    "gender": "male",
    "series": "Final Fantasy",
    "genre": "rpg",
    "year": 1997,
    "platform": [
      "PS1"
    ],
    "quote": [
      "Seven seconds till the end. Time enough for you. Perhaps.",
      "Επτά δευτερόλεπτα ως το τέλος. Αρκετός χρόνος για σένα. Ίσως."
    ],
    "game": "Final Fantasy VII Remake",
    "source": "https://en.wikiquote.org/wiki/Final_Fantasy_VII_Remake#Sephiroth"
  }
]);

// Familiar franchise leads and rivals; short in-game lines in English and Greek.
const GM_EXPANSION100=[
  {
    "id": "ken",
    "name": "Ken Masters",
    "aliases": [
      "ken",
      "κεν",
      "κεν μαστερς"
    ],
    "gender": "male",
    "series": "Street Fighter",
    "genre": "fighting",
    "year": 1987,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "Attack me if you dare, I will crush you!",
      "Τόλμησε να μου επιτεθείς και θα σε συντρίψω!"
    ],
    "game": "Street Fighter II",
    "source": "https://streetfighter.fandom.com/wiki/Ken_Masters/Quotes"
  },
  {
    "id": "guile",
    "name": "Guile",
    "aliases": [
      "γκάιλ",
      "γκαιλ"
    ],
    "gender": "male",
    "series": "Street Fighter",
    "genre": "fighting",
    "year": 1991,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "Go home and be a family man.",
      "Γύρνα σπίτι και γίνε οικογενειάρχης."
    ],
    "game": "Street Fighter II (console versions)",
    "source": "https://streetfighter.fandom.com/wiki/Guile/Quotes"
  },
  {
    "id": "cammy",
    "name": "Cammy",
    "aliases": [
      "cammy white",
      "κάμι",
      "καμι"
    ],
    "gender": "female",
    "series": "Street Fighter",
    "genre": "fighting",
    "year": 1993,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "Target acquired... Beginning mission!",
      "Στόχος εντοπίστηκε… Έναρξη αποστολής!"
    ],
    "game": "Street Fighter IV",
    "source": "https://streetfighter.fandom.com/wiki/Cammy/Quotes"
  },
  {
    "id": "mbison",
    "name": "M. Bison",
    "aliases": [
      "bison",
      "m bison",
      "vega dictator",
      "μπαϊσον"
    ],
    "gender": "male",
    "series": "Street Fighter",
    "genre": "fighting",
    "year": 1991,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "Anyone who opposes me will be destroyed!",
      "Όποιος μου αντισταθεί θα καταστραφεί!"
    ],
    "game": "Street Fighter II",
    "source": "https://streetfighter.fandom.com/wiki/M._Bison/Quotes"
  },
  {
    "id": "shaokahn",
    "name": "Shao Kahn",
    "aliases": [
      "shao kahn",
      "shao khan",
      "σαο καν"
    ],
    "gender": "male",
    "series": "Mortal Kombat",
    "genre": "fighting",
    "year": 1993,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "You suck!",
      "Είσαι άχρηστος!"
    ],
    "game": "Mortal Kombat II",
    "source": "https://icemantraveler.github.io/mkksg/mk2/default.htm"
  },
  {
    "id": "johnnycage",
    "name": "Johnny Cage",
    "aliases": [
      "johnny",
      "τζονι κειτζ"
    ],
    "gender": "male",
    "series": "Mortal Kombat",
    "genre": "fighting",
    "year": 1992,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "Whoa! Hold the phone. Rehab?",
      "Ώπα! Για στάσου. Αποτοξίνωση;"
    ],
    "game": "Mortal Kombat 11",
    "source": "https://en.wikiquote.org/wiki/Mortal_Kombat_11"
  },
  {
    "id": "sonya",
    "name": "Sonya Blade",
    "aliases": [
      "sonya",
      "σονια μπλειντ"
    ],
    "gender": "female",
    "series": "Mortal Kombat",
    "genre": "fighting",
    "year": 1992,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "Your Empire picked the wrong fight.",
      "Η Αυτοκρατορία σου διάλεξε λάθος αντίπαλο."
    ],
    "game": "Mortal Kombat 11",
    "source": "https://en.wikiquote.org/wiki/Mortal_Kombat_11"
  },
  {
    "id": "kazuya",
    "name": "Kazuya Mishima",
    "aliases": [
      "kazuya",
      "καζουγια μισιμα"
    ],
    "gender": "male",
    "series": "Tekken",
    "genre": "fighting",
    "year": 1994,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "Enough of this farce.",
      "Αρκετά με αυτή τη φάρσα."
    ],
    "game": "Tekken 8",
    "source": "https://en.wikiquote.org/wiki/Tekken#Kazuya_Mishima"
  },
  {
    "id": "jin",
    "name": "Jin Kazama",
    "aliases": [
      "jin",
      "τζιν καζαμα"
    ],
    "gender": "male",
    "series": "Tekken",
    "genre": "fighting",
    "year": 1997,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "The Mishima bloodline ends here.",
      "Η γενιά των Μισίμα τελειώνει εδώ."
    ],
    "game": "Tekken 4",
    "source": "https://en.wikiquote.org/wiki/Tekken#Jin_Kazama"
  },
  {
    "id": "heihachi",
    "name": "Heihachi Mishima",
    "aliases": [
      "heihachi",
      "χειχατσι μισιμα"
    ],
    "gender": "male",
    "series": "Tekken",
    "genre": "fighting",
    "year": 1994,
    "platform": [
      "Arcade"
    ],
    "quote": [
      "Come back when you're ready to fight!",
      "Έλα πάλι όταν είσαι έτοιμος να πολεμήσεις!"
    ],
    "game": "Tekken 4",
    "source": "https://en.wikiquote.org/wiki/Tekken#Heihachi_Mishima"
  },
  {
    "id": "luigi",
    "name": "Luigi",
    "aliases": [
      "λουιτζι",
      "λουίτζι"
    ],
    "gender": "male",
    "series": "Super Mario",
    "genre": "platform",
    "year": 1983,
    "platform": [
      "Game & Watch",
      "Arcade"
    ],
    "quote": [
      "A ghost! Eeeeek!",
      "Ένα φάντασμα! Αααα!"
    ],
    "game": "Super Mario Galaxy",
    "source": "https://www.mariowiki.com/List_of_Luigi_quotes"
  },
  {
    "id": "wario",
    "name": "Wario",
    "aliases": [
      "γουαριο",
      "ουαριο"
    ],
    "gender": "male",
    "series": "Super Mario",
    "genre": "platform",
    "year": 1992,
    "platform": [
      "Game Boy"
    ],
    "quote": [
      "I lost! To a buncha' losers!",
      "Έχασα! Από ένα τσούρμο χαμένους!"
    ],
    "game": "Mario Kart: Double Dash!!",
    "source": "https://www.mariowiki.com/List_of_Wario_quotes"
  },
  {
    "id": "waluigi",
    "name": "Waluigi",
    "aliases": [
      "γουαλουιτζι",
      "ουαλουιτζι"
    ],
    "gender": "male",
    "series": "Super Mario",
    "genre": "sports",
    "year": 2000,
    "platform": [
      "Nintendo 64",
      "Game Boy Color"
    ],
    "quote": [
      "We're gonna settle this like men!...With baseball!",
      "Θα το λύσουμε σαν άντρες!… Με μπέιζμπολ!"
    ],
    "game": "Mario Super Sluggers",
    "source": "https://www.mariowiki.com/List_of_Waluigi_quotes"
  },
  {
    "id": "tails",
    "name": "Miles “Tails” Prower",
    "aliases": [
      "tails",
      "miles prower",
      "miles tails prower",
      "τειλς"
    ],
    "gender": "male",
    "series": "Sonic the Hedgehog",
    "genre": "platform",
    "year": 1992,
    "platform": [
      "Game Gear",
      "Sega Mega Drive / Genesis"
    ],
    "quote": [
      "Tornado Transformation!",
      "Μεταμόρφωση Τορνέιντο!"
    ],
    "game": "Sonic Adventure 2",
    "source": "https://en.wikiquote.org/wiki/Sonic_Adventure_2"
  },
  {
    "id": "knuckles",
    "name": "Knuckles the Echidna",
    "aliases": [
      "knuckles",
      "νακλς"
    ],
    "gender": "male",
    "series": "Sonic the Hedgehog",
    "genre": "platform",
    "year": 1994,
    "platform": [
      "Sega Mega Drive / Genesis"
    ],
    "quote": [
      "Look who's calling who a thief.",
      "Κοίτα ποιος αποκαλεί ποιον κλέφτη."
    ],
    "game": "Sonic Adventure 2",
    "source": "https://en.wikiquote.org/wiki/Sonic_Adventure_2"
  },
  {
    "id": "shadow",
    "name": "Shadow the Hedgehog",
    "aliases": [
      "shadow",
      "σαντοου"
    ],
    "gender": "male",
    "series": "Sonic the Hedgehog",
    "genre": "platform",
    "year": 2001,
    "platform": [
      "Sega Dreamcast"
    ],
    "quote": [
      "Behold the true power I possess!",
      "Δες την αληθινή δύναμη που διαθέτω!"
    ],
    "game": "Sonic Adventure 2",
    "source": "https://en.wikiquote.org/wiki/Sonic_Adventure_2"
  },
  {
    "id": "eggman",
    "name": "Dr. Eggman",
    "aliases": [
      "eggman",
      "doctor eggman",
      "dr robotnik",
      "doctor robotnik",
      "robotnik",
      "εγκμαν",
      "ρομποτνικ"
    ],
    "gender": "male",
    "series": "Sonic the Hedgehog",
    "genre": "platform",
    "year": 1991,
    "platform": [
      "Sega Mega Drive / Genesis",
      "Master System",
      "Game Gear"
    ],
    "quote": [
      "Because you just told me, fox boy!",
      "Επειδή μόλις μου το είπες, αλεπουδάκι!"
    ],
    "game": "Sonic Adventure 2",
    "source": "https://en.wikiquote.org/wiki/Sonic_Adventure_2"
  },
  {
    "id": "chris",
    "name": "Chris Redfield",
    "aliases": [
      "chris",
      "κρυς ρεντφιλντ",
      "κρις ρεντφιλντ"
    ],
    "gender": "male",
    "series": "Resident Evil",
    "genre": "horror",
    "year": 1996,
    "platform": [
      "PS1"
    ],
    "quote": [
      "For a future without fear... Yeah, it's worth it.",
      "Για ένα μέλλον χωρίς φόβο… Ναι, αξίζει."
    ],
    "game": "Resident Evil 5",
    "source": "https://en.wikiquote.org/wiki/Resident_Evil_5"
  },
  {
    "id": "wesker",
    "name": "Albert Wesker",
    "aliases": [
      "wesker",
      "αλμπερτ γουεσκερ",
      "γουεσκερ"
    ],
    "gender": "male",
    "series": "Resident Evil",
    "genre": "horror",
    "year": 1996,
    "platform": [
      "PS1"
    ],
    "quote": [
      "Seven minutes. Seven minutes is all I can spare to play with you.",
      "Επτά λεπτά. Μόνο επτά λεπτά μπορώ να διαθέσω για να παίξω μαζί σου."
    ],
    "game": "Resident Evil 5",
    "source": "https://en.wikiquote.org/wiki/Resident_Evil_5"
  },
  {
    "id": "isaac",
    "name": "Isaac Clarke",
    "aliases": [
      "isaac",
      "αιζακ κλαρκ"
    ],
    "gender": "male",
    "series": "Dead Space",
    "genre": "horror",
    "year": 2008,
    "platform": [
      "PC",
      "PS3",
      "Xbox 360"
    ],
    "quote": [
      "You mean the Marker? Do you know where the Marker is, Stross?",
      "Εννοείς τον Μάρκερ; Ξέρεις πού βρίσκεται ο Μάρκερ, Στρος;"
    ],
    "game": "Dead Space 2",
    "source": "https://en.wikiquote.org/wiki/Dead_Space_2"
  }
];
GM_CHARACTERS.push(...GM_EXPANSION100);

const GM_LEGACY_IDS=GM_CHARACTERS.slice(0,10).map(c=>c.id);
const GM_BY_ID=new Map(GM_CHARACTERS.map(c=>[c.id,c]));
const GM_LABELS={sports:["Sports","Αθλητικά"],player:["Player choice","Επιλογή παίκτη"],maze:["Maze chase","Λαβύρινθος"],"fireball":["Fireballs / jumps", "Πύρινες μπάλες / άλματα"],"spin":["Spin attack", "Περιστροφική επίθεση"],"golf-club":["Golf club", "Μπαστούνι γκολφ"],"staff":["Caduceus Staff", "Ράβδος Caduceus"],"tears":["Dimensional tears", "Διαστατικά ρήγματα"],"biotics":["Biotics", "Βιοτικές δυνάμεις"],"claws":["Claws / psionics", "Νύχια / ψιονικές δυνάμεις"],"strategy":["Strategy", "Στρατηγική"],"stealth":["Stealth", "Μυστικότητα"],"metroidvania":["Metroidvania", "Metroidvania"],"puzzle":["Puzzle", "Γρίφοι"],"silenced-handgun":["Silenced handgun", "Πιστόλι με σιγαστήρα"],"arm-cannon":["Arm cannon", "Κανόνι βραχίονα"],"rocket-launcher":["Rocket launcher", "Εκτοξευτής ρουκετών"],"steel-fans":["Steel fans", "Ατσάλινες βεντάλιες"],'platform':['Platformer','Πλατφόρμας'],'sword-pistols':['Sword / dual pistols','Σπαθί / δύο πιστόλια'],'buster-sword':['Buster Sword','Buster Sword'],'kunai':['Kunai / hellfire','Kunai / φωτιά'],'grapple':['Grappling gun','Όπλο γάντζου'],'gunblade':['Gunblade','Gunblade'],'parasol':['Parasol','Ομπρέλα'],'ai':['AI / hacking','AI / hacking'],male:['Male','Άνδρας'],female:['Female','Γυναίκα'],adventure:['Action adventure','Δράση / περιπέτεια'],horror:['Survival horror','Τρόμος / επιβίωση'],fighting:['Fighting','Μάχες'],action:['Action','Δράση'],rpg:['RPG','RPG'],fps:['FPS','FPS'],pistols:['Dual pistols','Δύο πιστόλια'],handgun:['Handgun','Πιστόλι'],kicks:['Martial arts / kicks','Πολεμικές τέχνες / κλωτσιές'],bow:['Bow','Τόξο'],'gun-heels':['Guns / gun heels','Όπλα / ένοπλα τακούνια'],blades:['Blades of Chaos','Λεπίδες του Χάους'],swords:['Steel / silver swords','Ατσάλινο / ασημένιο σπαθί'],revolver:['Revolver','Περίστροφο'],rifle:['Assault rifle','Τυφέκιο εφόδου'],'hidden-blade':['Hidden blade','Κρυφή λεπίδα']};
function gmNormalize(value){return (window.GMPNames?.fold(value)??value.normalize('NFD').replace(/\p{M}/gu,'').toLowerCase()).replace(/[.\s_-]+/g,' ').trim();}
function gmValue(c,key){if(key==='platform')return c.platform.join(' / ');return GM_LABELS[c[key]]?T(...GM_LABELS[c[key]]):String(c[key]);}
function gmMax(mode){return mode==='classic'?6:5;}
let gmMode='classic',gmRounds={classic:null,quote:null},gmReturnFocus=null;
try{const saved=JSON.parse(read('GMP_GAMING_V1','null'));if(saved&&typeof saved==='object')gmRounds={classic:saved.classic,quote:saved.quote};}catch{/* Invalid saves are replaced. */}
function gmSave(){write('GMP_GAMING_V1',JSON.stringify(gmRounds));}
function gmValidRound(round,mode){
  if(!round||!GM_BY_ID.has(round.target)||typeof round.ended!=='boolean'||!Array.isArray(round.guesses)||round.guesses.length>gmMax(mode)||new Set(round.guesses).size!==round.guesses.length||round.guesses.some(id=>!GM_BY_ID.has(id)))return false;
  if(!Array.isArray(round.deck)||new Set(round.deck).size!==round.deck.length||round.deck.some(id=>id===round.target||!GM_BY_ID.has(id)))return false;
  const hit=round.guesses.indexOf(round.target);
  if(hit!==-1&&(hit!==round.guesses.length-1||!round.ended))return false;
  return round.guesses.length!==gmMax(mode)||round.ended;
}
function gmPool(mode){return GM_CHARACTERS.filter(c=>mode==='quote'?Array.isArray(c.quote):!c.quoteOnly);}
function gmCandidates(mode){return GM_CHARACTERS.filter(c=>mode==='quote'||!c.quoteOnly);}
function gmExpandRoster(round,mode=gmMode){
  const pool=gmPool(mode);
  const known=Array.isArray(round.roster)?round.roster:GM_LEGACY_IDS;
  const added=pool.map(c=>c.id).filter(id=>!known.includes(id)&&id!==round.target&&!round.guesses.includes(id)&&!round.deck.includes(id));
  if(added.length){round.deck.push(...added);for(let i=round.deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[round.deck[i],round.deck[j]]=[round.deck[j],round.deck[i]];}}
  const changed=added.length>0||!Array.isArray(round.roster)||round.roster.length!==pool.length;
  round.roster=pool.map(c=>c.id);return changed;
}
function gmNewRound(mode){
  const old=gmRounds[mode];if(gmValidRound(old,mode))gmExpandRoster(old,mode);let deck=gmValidRound(old,mode)?[...old.deck]:[];
  if(!deck.length){deck=gmPool(mode).map(c=>c.id);for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}if(deck.length>1&&deck.at(-1)===old?.target)[deck[0],deck[deck.length-1]]=[deck.at(-1),deck[0]];}
  gmRounds[mode]={number:gmpNextRoundNumber('gaming',mode),target:deck.pop(),deck,roster:gmPool(mode).map(c=>c.id),guesses:[],ended:false};gmSave();return gmRounds[mode];
}
function gmRound(){const round=gmValidRound(gmRounds[gmMode],gmMode)?gmRounds[gmMode]:gmNewRound(gmMode);const expanded=gmExpandRoster(round);if(gmpEnsureRoundNumber('gaming',gmMode,round)||expanded)gmSave();return round;}
function gmGuess(value){
  const round=gmRound();if(round.ended)return 'ended';
  const character=window.GMPNames.resolve(value,gmCandidates(gmMode));
  if(!character)return 'invalid';if(round.guesses.includes(character.id))return 'duplicate';
  round.guesses.push(character.id);if(character.id===round.target||round.guesses.length===gmMax(gmMode))round.ended=true;
  gmSave();if(character.id===round.target)window.GMPProgress?.award({game:'gaming',mode:gmMode,round:round.number,attempt:round.guesses.length}).catch(console.error);return character.id===round.target?'won':'miss';
}
const gmDialog=document.createElement('dialog');gmDialog.id='gamingDialog';gmDialog.className='op-dialog gm-dialog';gmDialog.setAttribute('aria-labelledby','gmTitle');document.body.append(gmDialog);
function openGamingGame(){gmReturnFocus=document.activeElement;gmRender();if(!gmDialog.open)gmDialog.showModal();gmpFocusRound(gmDialog);}
function gmRender(){
  const round=gmRound(),target=GM_BY_ID.get(round.target),won=round.guesses.includes(target.id);
  const columns=[['name',T('Character','Χαρακτήρας')],['gender',T('Gender','Φύλο')],['series',T('Franchise','Σειρά')],['genre',T('Genre','Είδος')],['year',T('Game debut','Πρώτη εμφάνιση σε παιχνίδι')],['platform',T('Platform','Πλατφόρμα')]];
  gmDialog.innerHTML=`<div class="dialog-top"><div><p class="eyebrow">GAMING · ${gmMode==='classic'?'CLASSIC':'QUOTES'}</p><h2 id="gmTitle">${gmMode==='classic'?T('Guess the character','Μάντεψε τον χαρακτήρα'):T('Who said it?','Ποιος το είπε;')}</h2></div><button class="close" type="button" data-gm-close aria-label="${T('Close','Κλείσιμο')}">×</button></div>
    ${gmpRoundLabel(round.number)}
    ${gmpModeTabs('gaming',gmMode)}
${gmMode==='quote'?`<blockquote class="op-quote">“${esc(T(...target.quote))}”</blockquote>`:''}
    ${gmMode==='classic'?`<p class="gmp-start-hint">💡 ${T('Starting clue','Αρχικό στοιχείο')} · ${T('Genre','Είδος')}: <strong>${esc(gmValue(target,'genre'))}</strong></p>`:''}
    ${!round.ended?`<form class="op-form"><label for="gmGuess">${T('Choose or type a character','Διάλεξε ή γράψε χαρακτήρα')}</label><div class="guess-row"><input id="gmGuess" list="gmChoices" autocomplete="off" maxlength="80" required placeholder="${T('e.g. Lara Croft','π.χ. Lara Croft')}"><button class="button lime" type="submit">${T('Guess →','Απάντηση →')}</button></div><datalist id="gmChoices">${[...gmCandidates(gmMode)].sort((a,b)=>a.name.localeCompare(b.name)).map(c=>`<option value="${esc(c.name)}" data-aliases="${esc((c.aliases||[]).join(' | '))}"></option>`).join('')}</datalist></form>`:''}
    <p data-correct-answer="${won?esc(target.name):''}" class="op-message ${won?'op-won':''}" role="status" aria-live="polite">${won?T('Correct!','Σωστά!'):round.ended?T('Round ended.','Ο γύρος τελείωσε.'):T(`${gmMax(gmMode)-round.guesses.length} guesses remaining.`,`${gmMax(gmMode)-round.guesses.length} προσπάθειες απομένουν.`)}</p>
    ${gmMode==='classic'&&round.guesses.length?`<div class="op-table-scroll" tabindex="0" role="region" aria-label="${T('Guess comparisons, scroll horizontally','Συγκρίσεις απαντήσεων, κύλιση οριζόντια')}"><table class="op-table"><caption>${T('Your guesses · newest first','Προσπάθειες · πιο πρόσφατη πρώτη')}</caption><thead><tr>${columns.map(([,label])=>`<th scope="col">${label}</th>`).join('')}</tr></thead><tbody>${[...round.guesses].reverse().map(id=>{const c=GM_BY_ID.get(id);return `<tr>${columns.map(([key])=>{const match=key==='platform'?c.platform.length===target.platform.length&&c.platform.every(p=>target.platform.includes(p)):c[key]===target[key],partial=key==='platform'&&!match&&c.platform.some(p=>target.platform.includes(p)),symbol=match?'✓':partial?'≈':key==='year'?(target.year>c.year?'↑':'↓'):'×';return `<td class="${match?'op-match':partial?'op-partial':'op-miss'}">${esc(gmValue(c,key))}<span class="op-symbol">${symbol}</span></td>`;}).join('')}</tr>`;}).join('')}</tbody></table></div>`:''}
    ${gmMode==='quote'&&round.guesses.length?`<ul class="op-quote-guesses">${round.guesses.map(id=>`<li>${id===target.id?'✓':'✕'} ${esc(GM_BY_ID.get(id).name)}</li>`).join('')}</ul>`:''}
    ${round.ended?`<div class="op-quote-answer"><strong>${esc(target.name)}</strong><p>${esc(gmMode==='quote'?target.game:target.series)}${gmMode==='quote'?` · <a href="${esc(target.source)}" target="_blank" rel="noopener noreferrer">${T('Quote reference','Πηγή ατάκας')}</a>`:''}</p></div>`:`<button class="text-button" type="button" data-gm-reveal>${T('Reveal & end round','Δείξε απάντηση & τέλος γύρου')}</button>`}
    <button class="button lime op-next" type="button" data-gm-next>${T('New round →','Νέος γύρος →')}</button><details class="gmp-game-info"><summary>${T("More information","Περισσότερες πληροφορίες")}</summary><p class="op-footer">${T(`Progress is saved on this device. Wins award leaderboard points when you are logged in. Quotes can contain story spoilers; Greek text is translated.`,`Η πρόοδος αποθηκεύεται σε αυτή τη συσκευή. Οι νίκες δίνουν πόντους κατάταξης όταν είσαι συνδεδεμένος. Οι ατάκες μπορεί να περιέχουν spoilers· το ελληνικό κείμενο είναι μετάφραση.`)}</p></details>`;
}
gmDialog.addEventListener('submit',event=>{event.preventDefault();const input=gmDialog.querySelector('#gmGuess');if(!input)return;const result=gmGuess(input.value);if(result==='invalid'||result==='duplicate'){gmDialog.querySelector('.op-message').textContent=result==='invalid'?T('Choose a character from the list.','Διάλεξε έναν χαρακτήρα από τη λίστα.'):T('You already tried this character.','Έχεις ήδη δοκιμάσει αυτόν τον χαρακτήρα.');input.focus();return;}gmRender();gmDialog.querySelector(gmRound().ended?'[data-gm-next]':'#gmGuess')?.focus();});
gmDialog.addEventListener('click',event=>{if(event.target.closest('[data-gm-close]')){gmDialog.close();return;}const mode=event.target.closest('[data-gm-mode]');if(mode){gmMode=mode.dataset.gmMode==='quote'?'quote':'classic';gmRender();gmpFocusRound(gmDialog);return;}if(event.target.closest('[data-gm-reveal]')){gmRound().ended=true;gmSave();gmRender();gmDialog.querySelector('[data-gm-next]')?.focus();return;}if(event.target.closest('[data-gm-next]')){gmNewRound(gmMode);gmRender();gmpFocusRound(gmDialog);}});
gmDialog.addEventListener('close',()=>{if(gmReturnFocus?.isConnected)gmReturnFocus.focus();else document.querySelector('[data-game="gaming"]')?.focus();});
window.addEventListener('gmp-language-change',()=>{if(gmDialog.open)gmRender();});
