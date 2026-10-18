"use strict";

// Bounties and fruit names are frozen at the end of Wano.
// Source: https://one-piece.com/character/
const OP_CHARACTERS = [
  {id:"luffy",name:"Monkey D. Luffy",aliases:["luffy","λουφι","λούφι"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Hito Hito no Mi: Nika",fruitType:"Mythical Zoan",bounty:3000000000,arc:"East Blue"},
  {id:"zoro",name:"Roronoa Zoro",aliases:["zoro","ζορο","ζόρο"],gender:"male",form:"human",role:["Swordsman","Ξιφομάχος"],fruit:null,fruitType:null,bounty:1111000000,arc:"East Blue"},
  {id:"nami",name:"Nami",aliases:["νάμι","ναμι"],gender:"female",form:"human",role:["Navigator","Πλοηγός"],fruit:null,fruitType:null,bounty:366000000,arc:"East Blue"},
  {id:"chopper",name:"Tony Tony Chopper",aliases:["chopper","τσοπερ","τσόπερ"],gender:"male",form:"reindeer",role:["Doctor","Γιατρός"],fruit:"Hito Hito no Mi",fruitType:"Zoan",bounty:1000,arc:"Drum Island"},
  {id:"robin",name:"Nico Robin",aliases:["robin","ρομπιν","ρόμπιν"],gender:"female",form:"human",role:["Archaeologist","Αρχαιολόγος"],fruit:"Hana Hana no Mi",fruitType:"Paramecia",bounty:930000000,arc:"Alabasta"},
  {id:"shanks",name:"Shanks",aliases:["σανκς","σάνκς"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:4048900000,arc:"East Blue"},
  {id:"ace",name:"Portgas D. Ace",aliases:["ace","έις","εις"],gender:"male",form:"human",role:["Commander","Διοικητής"],fruit:"Mera Mera no Mi",fruitType:"Logia",bounty:550000000,arc:"Alabasta"},
  {id:"law",name:"Trafalgar Law",aliases:["law","trafalgar d water law","λο","λοου"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Ope Ope no Mi",fruitType:"Paramecia",bounty:3000000000,arc:"Sabaody"},
  {id:"hancock",name:"Boa Hancock",aliases:["hancock","χανκοκ","χάνκοκ"],gender:"female",form:"human",role:["Captain","Καπετάνιος"],fruit:"Mero Mero no Mi",fruitType:"Paramecia",bounty:1659000000,arc:"Amazon Lily"},
  {id:"buggy",name:"Buggy",aliases:["μπαγκι","μπάγκι"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Bara Bara no Mi",fruitType:"Paramecia",bounty:3189000000,arc:"East Blue"},
  {id:"bellamy",name:"Bellamy",aliases:["μπελαμι","μπέλαμι"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Bane Bane no Mi",fruitType:"Paramecia",bounty:195000000,arc:"Jaya"},
  {id:"foxy",name:"Foxy",aliases:["φοξι","φόξι"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Noro Noro no Mi",fruitType:"Paramecia",bounty:24000000,arc:"Long Ring Long Land"},
  {id:"galdino",name:"Galdino (Mr. 3)",aliases:["galdino","mr 3","mr3","γκαλντινο","γκαλντίνο"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Doru Doru no Mi",fruitType:"Paramecia",bounty:24000000,arc:"Little Garden"},
  {id:"daz",name:"Daz Bones (Mr. 1)",aliases:["daz bones","daz bonez","mr 1","mr1","νταζ μποουνς"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Supa Supa no Mi",fruitType:"Paramecia",bounty:75000000,arc:"Alabasta"},
  {id:"bonclay",name:"Bentham (Bon Clay)",aliases:["bentham","bon clay","bonclay","mr 2","mr2","μπον κλει","μπον κλέι"],gender:"male",form:"human",role:["Leader","Ηγέτης"],fruit:"Mane Mane no Mi",fruitType:"Paramecia",bounty:32000000,arc:"Alabasta"},
  {id:"perona",name:"Perona",aliases:["περονα","περόνα"],gender:"female",form:"human",role:["Commander","Διοικητής"],fruit:"Horo Horo no Mi",fruitType:"Paramecia",bounty:null,arc:"Thriller Bark"},
  {id:"blueno",name:"Blueno",aliases:["μπλουενο","μπλουένο"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Doa Doa no Mi",fruitType:"Paramecia",bounty:null,arc:"Water 7"},
  {id:"kalifa",name:"Kalifa",aliases:["καλιφα","καλίφα"],gender:"female",form:"human",role:["Agent","Πράκτορας"],fruit:"Awa Awa no Mi",fruitType:"Paramecia",bounty:null,arc:"Water 7"},
  {id:"jabra",name:"Jabra",aliases:["jabura","τζαμπρα","τζάμπρα"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Inu Inu no Mi: Wolf",fruitType:"Zoan",bounty:null,arc:"Enies Lobby"},
  {id:"caribou",name:"Caribou",aliases:["καριμπου","καριμπού"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:"Numa Numa no Mi",fruitType:"Logia",bounty:210000000,arc:"Return to Sabaody"},
  {id:"kaku",name:"Kaku",aliases:["κακου","κάκου"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Ushi Ushi no Mi: Giraffe",fruitType:"Zoan",bounty:null,arc:"Water 7"},
  {id:"kumadori",name:"Kumadori",aliases:["κουμαντορι","κουμαντόρι"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:null,fruitType:null,bounty:null,arc:"Enies Lobby"},
  {id:"fukuro",name:"Fukuro",aliases:["fukurou","φουκουρο","φουκούρο"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:null,fruitType:null,bounty:null,arc:"Enies Lobby"},
  {id:"spandam",name:"Spandam",aliases:["σπανταμ","σπάνταμ"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:null,fruitType:null,bounty:null,arc:"Water 7"},
  {id:"hina",name:"Hina",aliases:["χινα","χίνα"],gender:"female",form:"human",role:["Marine","Πεζοναύτης"],fruit:"Ori Ori no Mi",fruitType:"Paramecia",bounty:null,arc:"Alabasta"},
  {id:"tashigi",name:"Tashigi",aliases:["τασιγκι","τασίγκι"],gender:"female",form:"human",role:["Marine","Πεζοναύτης"],fruit:null,fruitType:null,bounty:null,arc:"East Blue"},
  {id:"wapol",name:"Wapol",aliases:["γουαπολ","γουάπολ"],gender:"male",form:"human",role:["King","Βασιλιάς"],fruit:"Baku Baku no Mi",fruitType:"Paramecia",bounty:null,arc:"Drum Island"},
  {id:"dalton",name:"Dalton",aliases:["νταλτον","ντάλτον"],gender:"male",form:"human",role:["King","Βασιλιάς"],fruit:"Ushi Ushi no Mi: Bison",fruitType:"Zoan",bounty:null,arc:"Drum Island"},
  {id:"pell",name:"Pell",aliases:["πελ"],gender:"male",form:"human",role:["Royal guard","Βασιλικός φρουρός"],fruit:"Tori Tori no Mi: Falcon",fruitType:"Zoan",bounty:null,arc:"Alabasta"},
  {id:"chaka",name:"Chaka",aliases:["τσακα","τσάκα"],gender:"male",form:"human",role:["Royal guard","Βασιλικός φρουρός"],fruit:"Inu Inu no Mi: Jackal",fruitType:"Zoan",bounty:null,arc:"Alabasta"},
  {id:"arlong",name:"Arlong",aliases:["αρλονγκ","άρλονγκ"],gender:"male",form:"fishman",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:20000000,arc:"East Blue"},
  {id:"kuro",name:"Kuro",aliases:["captain kuro","κουρο","κούρο"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:16000000,arc:"East Blue"},
  {id:"krieg",name:"Don Krieg",aliases:["krieg","don krieg","κριγκ"],gender:"male",form:"human",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:17000000,arc:"East Blue"},
  {id:"gin",name:"Gin",aliases:["γκιν"],gender:"male",form:"human",role:["Commander","Διοικητής"],fruit:null,fruitType:null,bounty:12000000,arc:"East Blue"},
  {id:"alvida",name:"Alvida",aliases:["αλβιντα","αλβίντα"],gender:"female",form:"human",role:["Captain","Καπετάνιος"],fruit:"Sube Sube no Mi",fruitType:"Paramecia",bounty:5000000,arc:"East Blue"},
  {id:"smoker",name:"Smoker",aliases:["σμοκερ","σμόκερ"],gender:"male",form:"human",role:["Marine","Πεζοναύτης"],fruit:"Moku Moku no Mi",fruitType:"Logia",bounty:null,arc:"East Blue"},
  {id:"crocus",name:"Crocus",aliases:["κροκους","κρόκους"],gender:"male",form:"human",role:["Doctor","Γιατρός"],fruit:null,fruitType:null,bounty:null,arc:"Reverse Mountain"},
  {id:"laboon",name:"Laboon",aliases:["λαμπουν","λαμπούν"],gender:"male",form:"whale",role:["Companion","Σύντροφος"],fruit:null,fruitType:null,bounty:null,arc:"Reverse Mountain"},
  {id:"dorry",name:"Dorry",aliases:["ντορι","ντόρι"],gender:"male",form:"giant",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:100000000,arc:"Little Garden"},
  {id:"brogy",name:"Brogy",aliases:["broggy","μπρογκι","μπρόγκι"],gender:"male",form:"giant",role:["Captain","Καπετάνιος"],fruit:null,fruitType:null,bounty:100000000,arc:"Little Garden"},
  {id:"mr5",name:"Gem (Mr. 5)",aliases:["gem","mr 5","mr5","τζεμ"],gender:"male",form:"human",role:["Agent","Πράκτορας"],fruit:"Bomu Bomu no Mi",fruitType:"Paramecia",bounty:10000000,arc:"Whisky Peak"},
  {id:"missvalentine",name:"Mikita (Miss Valentine)",aliases:["mikita","miss valentine","μικιτα","μίκιτα"],gender:"female",form:"human",role:["Agent","Πράκτορας"],fruit:"Kilo Kilo no Mi",fruitType:"Paramecia",bounty:7500000,arc:"Whisky Peak"},
  {id:"missgoldenweek",name:"Marianne (Miss Goldenweek)",aliases:["marianne","miss goldenweek","miss golden week","μαριαν","μαριάν"],gender:"female",form:"human",role:["Artist","Καλλιτέχνης"],fruit:null,fruitType:null,bounty:29000000,arc:"Little Garden"},
  {id:"chess",name:"Chess",aliases:["τσεσ"],gender:"male",form:"human",role:["Advisor","Σύμβουλος"],fruit:null,fruitType:null,bounty:null,arc:"Drum Island"},
  {id:"kuromarimo",name:"Kuromarimo",aliases:["κουρομαριμο","κουρομαρίμο"],gender:"male",form:"human",role:["Officer","Αξιωματικός"],fruit:null,fruitType:null,bounty:null,arc:"Drum Island"},
  {id:"kureha",name:"Dr. Kureha",aliases:["kureha","doctor kureha","κουρεχα","κουρέχα"],gender:"female",form:"human",role:["Doctor","Γιατρός"],fruit:null,fruitType:null,bounty:null,arc:"Drum Island"},
  {id:"hiluluk",name:"Dr. Hiriluk",aliases:["hiriluk","hiluluk","dr hiluluk","χιρουλουκ","χιριλουκ"],gender:"male",form:"human",role:["Doctor","Γιατρός"],fruit:null,fruitType:null,bounty:null,arc:"Drum Island"},
  {id:"hatchan",name:"Hatchan",aliases:["hachi","χατσαν","χάτσαν"],gender:"male",form:"fishman",role:["Officer","Αξιωματικός"],fruit:null,fruitType:null,bounty:8000000,arc:"East Blue"},
  {id:"chew",name:"Chew",aliases:["choo","chu","τσου"],gender:"male",form:"fishman",role:["Officer","Αξιωματικός"],fruit:null,fruitType:null,bounty:5500000,arc:"East Blue"},
  {id:"kuroobi",name:"Kuroobi",aliases:["kuroobi","κουροομπι","κουροόμπι"],gender:"male",form:"fishman",role:["Officer","Αξιωματικός"],fruit:null,fruitType:null,bounty:9000000,arc:"East Blue"},
{"id":"usopp","name":"Usopp","aliases":["usopp","ουσοπ"],"gender":"male","form":"human","role":["Sniper","Ελεύθερος σκοπευτής"],"fruit":null,"fruitType":null,"bounty":500000000,"arc":"East Blue","firstEpisode":9},
{"id":"sanji","name":"Vinsmoke Sanji","aliases":["sanji","σαντζι","sanji"],"gender":"male","form":"human","role":["Cook","Μάγειρας"],"fruit":null,"fruitType":null,"bounty":1032000000,"arc":"East Blue","firstEpisode":20},
{"id":"franky","name":"Franky","aliases":["franky","φρανκι"],"gender":"male","form":"cyborg","role":["Shipwright","Ναυπηγός"],"fruit":null,"fruitType":null,"bounty":394000000,"arc":"Water 7","firstEpisode":233},
{"id":"brook","name":"Brook","aliases":["brook","μπρουκ"],"gender":"male","form":"skeleton","role":["Musician","Μουσικός"],"fruit":"Yomi Yomi no Mi","fruitType":"Paramecia","bounty":383000000,"arc":"Thriller Bark","firstEpisode":337},
{"id":"jinbe","name":"Jinbe","aliases":["jinbe","τζινμπε","jinbei","jimbei"],"gender":"male","form":"fishman","role":["Helmsman","Πηδαλιούχος"],"fruit":null,"fruitType":null,"bounty":1100000000,"arc":"Impel Down","firstEpisode":430},
{"id":"crocodile","name":"Crocodile","aliases":["crocodile","κροκονταϊλ"],"gender":"male","form":"human","role":["Leader","Ηγέτης"],"fruit":"Suna Suna no Mi","fruitType":"Logia","bounty":1965000000,"arc":"Little Garden","firstEpisode":76},
{"id":"enel","name":"Enel","aliases":["enel","ενελ"],"gender":"male","form":"human","role":["Ruler","Κυβερνήτης"],"fruit":"Goro Goro no Mi","fruitType":"Logia","bounty":null,"arc":"Skypiea","firstEpisode":167},
{"id":"lucci","name":"Rob Lucci","aliases":["lucci","λουτσι"],"gender":"male","form":"human","role":["Agent","Πράκτορας"],"fruit":"Neko Neko no Mi: Leopard","fruitType":"Zoan","bounty":null,"arc":"Water 7","firstEpisode":230},
{"id":"doflamingo","name":"Donquixote Doflamingo","aliases":["doflamingo","ντοφλαμινγκο"],"gender":"male","form":"human","role":["Captain","Καπετάνιος"],"fruit":"Ito Ito no Mi","fruitType":"Paramecia","bounty":340000000,"arc":"Jaya","firstEpisode":151},
{"id":"kaido","name":"Kaido","aliases":["kaido","καιντο"],"gender":"male","form":"human","role":["Captain","Καπετάνιος"],"fruit":"Uo Uo no Mi: Seiryu","fruitType":"Mythical Zoan","bounty":4611100000,"arc":"Dressrosa","firstEpisode":739},
{"id":"bigmom","name":"Charlotte Linlin","aliases":["bigmom","μπιγκ μαμ","big mom","bigmom"],"gender":"female","form":"human","role":["Captain","Καπετάνιος"],"fruit":"Soru Soru no Mi","fruitType":"Paramecia","bounty":4388000000,"arc":"Fish-Man Island","firstEpisode":571},
{"id":"king","name":"King","aliases":["king","κινγκ"],"gender":"male","form":"lunarian","role":["Commander","Διοικητής"],"fruit":"Ryu Ryu no Mi: Pteranodon","fruitType":"Ancient Zoan","bounty":1390000000,"arc":"Wano","firstEpisode":918},
{"id":"queen","name":"Queen","aliases":["queen","κουιν"],"gender":"male","form":"cyborg","role":["Commander","Διοικητής"],"fruit":"Ryu Ryu no Mi: Brachiosaurus","fruitType":"Ancient Zoan","bounty":1320000000,"arc":"Wano","firstEpisode":910},
{"id":"jack","name":"Jack","aliases":["jack","τζακ"],"gender":"male","form":"fishman","role":["Commander","Διοικητής"],"fruit":"Zou Zou no Mi: Mammoth","fruitType":"Ancient Zoan","bounty":1000000000,"arc":"Zou","firstEpisode":746},
{"id":"katakuri","name":"Charlotte Katakuri","aliases":["katakuri","κατακουρι"],"gender":"male","form":"human","role":["Commander","Διοικητής"],"fruit":"Mochi Mochi no Mi","fruitType":"Special Paramecia","bounty":1057000000,"arc":"Whole Cake Island","firstEpisode":825},
{"id":"kid","name":"Eustass Kid","aliases":["kid","κιντ"],"gender":"male","form":"human","role":["Captain","Καπετάνιος"],"fruit":"Jiki Jiki no Mi","fruitType":"Paramecia","bounty":3000000000,"arc":"Sabaody","firstEpisode":392},
{"id":"killer","name":"Killer","aliases":["killer","κιλερ"],"gender":"male","form":"human","role":["Fighter","Μαχητής"],"fruit":"SMILE (failed)","fruitType":"Artificial Zoan","bounty":200000000,"arc":"Sabaody","firstEpisode":392},
{"id":"marco","name":"Marco","aliases":["marco","μαρκο"],"gender":"male","form":"human","role":["Commander","Διοικητής"],"fruit":"Tori Tori no Mi: Phoenix","fruitType":"Mythical Zoan","bounty":1374000000,"arc":"Jaya","firstEpisode":151},
{"id":"whitebeard","name":"Edward Newgate","aliases":["whitebeard","γουαιτμπιρντ"],"gender":"male","form":"human","role":["Captain","Καπετάνιος"],"fruit":"Gura Gura no Mi","fruitType":"Paramecia","bounty":5046000000,"arc":"Jaya","firstEpisode":151},
{"id":"blackbeard","name":"Marshall D. Teach","aliases":["blackbeard","μπλακμπιρντ"],"gender":"male","form":"human","role":["Captain","Καπετάνιος"],"fruit":"Yami Yami no Mi / Gura Gura no Mi","fruitType":"Logia / Paramecia","bounty":2247600000,"arc":"Jaya","firstEpisode":146},
{"id":"mihawk","name":"Dracule Mihawk","aliases":["mihawk","μιχοκ"],"gender":"male","form":"human","role":["Swordsman","Ξιφομάχος"],"fruit":null,"fruitType":null,"bounty":3590000000,"arc":"East Blue","firstEpisode":23},
{"id":"kuma","name":"Bartholomew Kuma","aliases":["kuma","κουμα"],"gender":"male","form":"cyborg","role":["Revolutionary","Επαναστάτης"],"fruit":"Nikyu Nikyu no Mi","fruitType":"Paramecia","bounty":296000000,"arc":"Jaya","firstEpisode":151},
{"id":"moria","name":"Gecko Moria","aliases":["moria","μορια"],"gender":"male","form":"human","role":["Captain","Καπετάνιος"],"fruit":"Kage Kage no Mi","fruitType":"Paramecia","bounty":320000000,"arc":"Thriller Bark","firstEpisode":343},
{"id":"sengoku","name":"Sengoku","aliases":["sengoku","σενγκοκου"],"gender":"male","form":"human","role":["Marine","Πεζοναύτης"],"fruit":"Hito Hito no Mi: Daibutsu","fruitType":"Mythical Zoan","bounty":null,"arc":"Jaya","firstEpisode":151},
{"id":"garp","name":"Monkey D. Garp","aliases":["garp","γκαρπ"],"gender":"male","form":"human","role":["Marine","Πεζοναύτης"],"fruit":null,"fruitType":null,"bounty":null,"arc":"East Blue","firstEpisode":68},
{"id":"paulie","name":"Paulie","aliases":["paulie","πολι"],"gender":"male","form":"human","role":["Shipwright","Ναυπηγός"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Water 7","firstEpisode":230,"firstChapter":323,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Paulie"},
{"id":"iceberg","name":"Iceberg","aliases":["iceberg","αισμπεργκ","iceburg"],"gender":"male","form":"human","role":["Mayor","Δήμαρχος"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Water 7","firstEpisode":230,"firstChapter":323,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Iceburg"},
{"id":"wyper","name":"Wyper","aliases":["wyper","γουαιπερ"],"gender":"male","form":"human","role":["Warrior","Πολεμιστής"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Skypiea","firstEpisode":153,"firstChapter":237,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Wyper"},
{"id":"ganfall","name":"Gan Fall","aliases":["ganfall","γκαν φολ","ganfor","gan fall"],"gender":"male","form":"human","role":["Ruler","Κυβερνήτης"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Skypiea","firstEpisode":153,"firstChapter":237,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Gan_Fall"},
{"id":"ohm","name":"Ohm","aliases":["ohm","ομ"],"gender":"male","form":"human","role":["Priest","Ιερέας"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Skypiea","firstEpisode":155,"firstChapter":241,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Ohm"},
{"id":"gedatsu","name":"Gedatsu","aliases":["gedatsu","γκεντατσου"],"gender":"male","form":"human","role":["Priest","Ιερέας"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Skypiea","firstEpisode":155,"firstChapter":241,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Gedatsu"},
{"id":"satori","name":"Satori","aliases":["satori","σατορι"],"gender":"male","form":"human","role":["Priest","Ιερέας"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Skypiea","firstEpisode":155,"firstChapter":241,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Satori"},
{"id":"shura","name":"Shura","aliases":["shura","σουρα"],"gender":"male","form":"human","role":["Priest","Ιερέας"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Skypiea","firstEpisode":155,"firstChapter":241,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Shura"},
{"id":"conis","name":"Conis","aliases":["conis","κονις"],"gender":"female","form":"human","role":["Civilian","Πολίτης"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Skypiea","firstEpisode":154,"firstChapter":239,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Conis"},
{"id":"pagaya","name":"Pagaya","aliases":["pagaya","παγκαγια"],"gender":"male","form":"human","role":["Engineer","Μηχανικός"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Skypiea","firstEpisode":154,"firstChapter":239,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Pagaya"},
{"id":"cricket","name":"Mont Blanc Cricket","aliases":["cricket","κρικετ","cricket","montblanc cricket"],"gender":"male","form":"human","role":["Leader","Ηγέτης"],"fruit":null,"fruitType":null,"bounty":25000000,"arc":"Jaya","firstEpisode":148,"firstChapter":227,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Mont_Blanc_Cricket"},
{"id":"masira","name":"Masira","aliases":["masira","μασιρα"],"gender":"male","form":"human","role":["Captain","Καπετάνιος"],"fruit":null,"fruitType":null,"bounty":23000000,"arc":"Jaya","firstEpisode":144,"firstChapter":219,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Masira"},
{"id":"shoujou","name":"Shoujou","aliases":["shoujou","σοτζο"],"gender":"male","form":"human","role":["Captain","Καπετάνιος"],"fruit":null,"fruitType":null,"bounty":36000000,"arc":"Jaya","firstEpisode":147,"firstChapter":226,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Shoujou"},
{"id":"duval","name":"Duval","aliases":["duval","ντουβαλ"],"gender":"male","form":"human","role":["Leader","Ηγέτης"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Sabaody","firstEpisode":386,"firstChapter":491,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Duval"},
{"id":"laog","name":"Lao G","aliases":["laog","λαο τζι","lao g"],"gender":"male","form":"human","role":["Officer","Αξιωματικός"],"fruit":null,"fruitType":null,"bounty":61000000,"arc":"Punk Hazard","firstEpisode":608,"firstChapter":682,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Lao_G"},
{"id":"senorpink","name":"Señor Pink","aliases":["senorpink","σενιορ πινκ","senor pink"],"gender":"male","form":"human","role":["Officer","Αξιωματικός"],"fruit":"Sui Sui no Mi","fruitType":"Paramecia","bounty":58000000,"arc":"Dressrosa","firstEpisode":632,"firstChapter":702,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Senor_Pink"},
{"id":"gladius","name":"Gladius","aliases":["gladius","γκλαντιους"],"gender":"male","form":"human","role":["Officer","Αξιωματικός"],"fruit":"Pamu Pamu no Mi","fruitType":"Paramecia","bounty":31000000,"arc":"Punk Hazard","firstEpisode":608,"firstChapter":682,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Gladius"},
{"id":"machvise","name":"Machvise","aliases":["machvise","μαχβαις"],"gender":"male","form":"human","role":["Officer","Αξιωματικός"],"fruit":"Ton Ton no Mi","fruitType":"Paramecia","bounty":11000000,"arc":"Punk Hazard","firstEpisode":608,"firstChapter":682,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Machvise"},
{"id":"buffalo","name":"Buffalo","aliases":["buffalo","μπαφαλο"],"gender":"male","form":"human","role":["Officer","Αξιωματικός"],"fruit":"Guru Guru no Mi","fruitType":"Paramecia","bounty":null,"arc":"Punk Hazard","firstEpisode":608,"firstChapter":682,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Buffalo"},
{"id":"baby5","name":"Baby 5","aliases":["baby5","μπειμπι 5","baby five","baby 5"],"gender":"female","form":"human","role":["Assassin","Δολοφόνος"],"fruit":"Buki Buki no Mi","fruitType":"Paramecia","bounty":null,"arc":"Punk Hazard","firstEpisode":608,"firstChapter":682,"source":"https://one-piece.com/character/","debutSource":"https://onepiece.fandom.com/wiki/Baby_5"},
{"id": "vivi", "name": "Nefertari Vivi", "aliases": ["vivi", "nefertari vivi", "βιβι", "βίβι"], "gender": "female", "form": "human", "role": ["Princess", "Πριγκίπισσα"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Reverse Mountain", "firstEpisode": 62, "firstChapter": 103, "source": "https://one-piece.com/character/Nefeltari_Vivi/index.html"},
{"id": "koby", "name": "Koby", "aliases": ["coby", "κομπι", "κόμπι"], "gender": "male", "form": "human", "role": ["Marine", "Πεζοναύτης"], "fruit": null, "fruitType": null, "bounty": null, "arc": "East Blue", "firstEpisode": 1, "firstChapter": 2, "source": "https://one-piece.com/character/koby/index.html", "debutSource": "https://onepiece.fandom.com/wiki/Koby"},
{"id": "helmeppo", "name": "Helmeppo", "aliases": ["χελμεπο", "χέλμεπο"], "gender": "male", "form": "human", "role": ["Marine", "Πεζοναύτης"], "fruit": null, "fruitType": null, "bounty": null, "arc": "East Blue", "firstEpisode": 2, "firstChapter": 3, "source": "https://one-piece.com/character/helmeppo/index.html", "debutSource": "https://onepiece.fandom.com/wiki/Helmeppo"},
{"id": "rayleigh", "name": "Silvers Rayleigh", "aliases": ["rayleigh", "σιλβερς ρειλι", "ρέιλι"], "gender": "male", "form": "human", "role": ["First mate", "Υποπλοίαρχος"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Sabaody", "firstEpisode": 394, "firstChapter": 500, "source": "https://one-piece.com/character/Silvers_Rayleigh/index.html", "debutSource": "https://onepiece.fandom.com/wiki/Silvers_Rayleigh", "unlockNote": "Unlocks at his named introduction, excluding the earlier unnamed Roger flashback."},
{"id": "kuzan", "name": "Kuzan", "aliases": ["aokiji", "αοκιτζι", "κουζαν"], "gender": "male", "form": "human", "role": ["Former Marine", "Πρώην πεζοναύτης"], "fruit": "Hie Hie no Mi", "fruitType": "Logia", "bounty": null, "arc": "Long Ring Long Land", "firstEpisode": 225, "firstChapter": 303, "source": "https://one-piece.com/character/kuzan/index.html", "debutSource": "https://onepiece.fandom.com/wiki/Kuzan"},
{"id": "borsalino", "name": "Borsalino", "aliases": ["kizaru", "κιζαρου", "μπορσαλινο"], "gender": "male", "form": "human", "role": ["Marine", "Πεζοναύτης"], "fruit": "Pika Pika no Mi", "fruitType": "Logia", "bounty": null, "arc": "Sabaody", "firstEpisode": 398, "firstChapter": 504, "source": "https://one-piece.com/character/borsalino/index.html", "debutSource": "https://onepiece.fandom.com/wiki/Borsalino"},
{"id": "sakazuki", "name": "Sakazuki", "aliases": ["akainu", "ακαϊνου", "ακαινου", "σακαζουκι"], "gender": "male", "form": "human", "role": ["Marine", "Πεζοναύτης"], "fruit": "Magu Magu no Mi", "fruitType": "Logia", "bounty": null, "arc": "Enies Lobby", "firstEpisode": 278, "firstChapter": 397, "source": "https://one-piece.com/character/sakazuki/index.html", "debutSource": "https://onepiece.fandom.com/wiki/Sakazuki"},
{"id": "bonney", "name": "Jewelry Bonney", "aliases": ["bonney", "jewelry bonney", "τζουελρι μπονι", "μπονι"], "gender": "female", "form": "human", "role": ["Captain", "Καπετάνιος"], "fruit": "Unnamed age-manipulating fruit", "fruitType": "Paramecia", "bounty": 140000000, "arc": "Sabaody", "firstEpisode": 392, "firstChapter": 498, "source": "https://one-piece.com/character/jewelry_bonney/index.html", "debutSource": "https://onepiece.fandom.com/wiki/Jewelry_Bonney"},
{"id": "sabo", "name": "Sabo", "aliases": ["σαμπο", "σάμπο"], "gender": "male", "form": "human", "role": ["Revolutionary", "Επαναστάτης"], "fruit": "Mera Mera no Mi", "fruitType": "Logia", "bounty": 602000000, "arc": "Dressrosa", "firstEpisode": 679, "firstChapter": 744, "source": "https://one-piece.com/character/sabo/index.html", "debutSource": "https://onepiece.fandom.com/wiki/Sabo", "unlockNote": "Unlocks after the Mera Mera fruit reveal; his childhood debut is chapter 583 / episode 494."},
{"id": "rosinante", "name": "Donquixote Rosinante", "aliases": ["rosinante", "corazon", "corazón", "κοραζον", "ροσιναντε"], "gender": "male", "form": "human", "role": ["Marine", "Πεζοναύτης"], "fruit": "Nagi Nagi no Mi", "fruitType": "Paramecia", "bounty": null, "arc": "Dressrosa", "firstEpisode": 704, "firstChapter": 766, "source": "https://one-piece.com/character/Corazon/index.html", "debutSource": "https://onepiece.fandom.com/wiki/Donquixote_Rosinante", "unlockNote": "Unlocks after his Marine identity and Devil Fruit are revealed, after the chapter 761 / episode 700 debut."},
{"id": "bepo", "name": "Bepo", "aliases": ["μπεπο", "μπέπο"], "gender": "male", "form": "mink", "role": ["Navigator", "Πλοηγός"], "fruit": null, "fruitType": null, "bounty": 500, "arc": "Sabaody", "firstEpisode": 394, "firstChapter": 498, "source": "https://one-piece.com/character/bepo/index.html", "debutSource": "https://onepiece.fandom.com/wiki/Bepo"},
{"id":"roger","name":"Gol D. Roger","aliases":["roger","gold roger","gol d roger","ρότζερ","ροτζερ"],"gender":"male","form":"human","role":["Captain","Καπετάνιος"],"fruit":null,"fruitType":null,"bounty":5564800000,"arc":"East Blue","firstEpisode":1085,"firstChapter":1058,"source":"https://one-piece.com/character/Gold_Roger/index.html","debutSource":"https://one-piece.com/comics/o95/index.html","unlockNote":"Debuts in chapter 1 / episode 1; conservatively unlocks at the end of Wano because the frozen bounty and no-Devil-Fruit clues are later revelations."},
{"id":"dragon","name":"Monkey D. Dragon","aliases":["dragon","monkey d dragon","ντράγκον","ντραγκον","δράγκον","δρακον"],"gender":"male","form":"human","role":["Leader","Ηγέτης"],"fruit":null,"fruitType":null,"fruitUnknown":true,"bounty":null,"arc":"East Blue","firstEpisode":314,"firstChapter":432,"source":"https://one-piece.com/character/Monkey_D_Dragon/index.html","debutSource":"https://onepiece.fandom.com/wiki/Monkey_D._Dragon","unlockNote":"Debuts in chapter 100 / episode 52; unlocks after his Revolutionary Army identity is revealed. Devil Fruit and bounty remain undisclosed in the end-of-Wano snapshot."},
{"id":"oden","name":"Kozuki Oden","aliases":["oden","kozuki oden","kouzuki oden","kōzuki oden","όντεν","οντεν","κοζούκι όντεν"],"gender":"male","form":"human","role":["Samurai","Σαμουράι"],"fruit":null,"fruitType":null,"bounty":null,"arc":"Wano","firstEpisode":960,"firstChapter":960,"source":"https://one-piece.com/character/Kozuki_Oden/index.html","debutSource":"https://one-piece.com/comics/o95/index.html","unlockNote":"Uses the full Wano flashback introduction, rather than earlier silhouettes. No canon bounty is supplied."},
{"id":"fujitora","name":"Issho","aliases":["fujitora","issho","isshō","φουτζιτόρα","φουτζιτορα","ίσσο","ισσο"],"gender":"male","form":"human","role":["Marine","Πεζοναύτης"],"fruit":"Zushi Zushi no Mi","fruitType":"Paramecia","bounty":null,"arc":"Dressrosa","firstEpisode":746,"firstChapter":801,"source":"https://one-piece.com/character/fujitora/index.html","debutSource":"https://onepiece.fandom.com/wiki/Issho","unlockNote":"Debuts in chapter 701 / episode 630; conservatively unlocks at the end of Dressrosa after the admiral identity and fruit information."},
{"id":"pudding","name":"Charlotte Pudding","aliases":["pudding","charlotte pudding","πουτίγκ","πουντινγκ","πούτινγκ","σαρλότ πουτίγκ"],"gender":"female","form":"human","role":["Chocolatier","Σοκολατοποιός"],"fruit":"Memo Memo no Mi","fruitType":"Paramecia","bounty":null,"arc":"Whole Cake Island","firstEpisode":817,"firstChapter":851,"source":"https://one-piece.com/anime/o4577/index.html","debutSource":"https://onepiece.fandom.com/wiki/Charlotte_Pudding","fruitSource":"https://baseshop.onepiece-base.com/item/vbjqc56az5a7","unlockNote":"Unlocks after her Memo Memo ability is revealed, rather than her earlier cover or story debut."},
{"id": "bellemere", "name": "Bell-mère", "aliases": ["Belle Mere", "Bellemere", "μπελμέρ", "μπελμερ"], "gender": "female", "form": "human", "role": ["Former Marine", "Πρώην πεζοναύτης"], "fruit": null, "fruitType": null, "bounty": null, "arc": "East Blue", "firstEpisode": 61, "firstChapter": 100, "source": "https://one-piece.com/character/Belle_Mere/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "nojiko", "name": "Nojiko", "aliases": ["νοτζίκο", "νοτζικο"], "gender": "female", "form": "human", "role": ["Civilian", "Πολίτης"], "fruit": null, "fruitType": null, "bounty": null, "arc": "East Blue", "firstEpisode": 61, "firstChapter": 100, "source": "https://one-piece.com/character/Nojiko/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "kaya", "name": "Kaya", "aliases": ["κάγια", "καγια"], "gender": "female", "form": "human", "role": ["Medical student", "Φοιτήτρια ιατρικής"], "fruit": null, "fruitType": null, "bounty": null, "arc": "East Blue", "firstEpisode": 61, "firstChapter": 100, "source": "https://one-piece.com/character/Kaya/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "makino", "name": "Makino", "aliases": ["μακίνο", "μακινο"], "gender": "female", "form": "human", "role": ["Bartender", "Μπαργούμαν"], "fruit": null, "fruitType": null, "bounty": null, "arc": "East Blue", "firstEpisode": 61, "firstChapter": 100, "source": "https://one-piece.com/character/Makino/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "zeff", "name": "Zeff", "aliases": ["Red Leg Zeff", "ζεφ"], "gender": "male", "form": "human", "role": ["Chef", "Μάγειρας"], "fruit": null, "fruitType": null, "bounty": null, "arc": "East Blue", "firstEpisode": 61, "firstChapter": 100, "source": "https://one-piece.com/character/Zeff/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "morgan", "name": "Morgan", "aliases": ["Axe-Hand Morgan", "μοργκαν", "μόργκαν"], "gender": "male", "form": "human", "role": ["Former Marine", "Πρώην πεζοναύτης"], "fruit": null, "fruitType": null, "bounty": null, "arc": "East Blue", "firstEpisode": 61, "firstChapter": 100, "source": "https://one-piece.com/character/Morgan/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "jango", "name": "Jango", "aliases": ["Django", "τζάνγκο", "τζανγκο"], "gender": "male", "form": "human", "role": ["Marine", "Πεζοναύτης"], "fruit": null, "fruitType": null, "bounty": null, "arc": "East Blue", "firstEpisode": 130, "firstChapter": 217, "source": "https://one-piece.com/character/Django/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "fullbody", "name": "Fullbody", "aliases": ["φουλμπόντι", "φουλμποντι"], "gender": "male", "form": "human", "role": ["Marine", "Πεζοναύτης"], "fruit": null, "fruitType": null, "bounty": null, "arc": "East Blue", "firstEpisode": 130, "firstChapter": 217, "source": "https://one-piece.com/character/Fullbody/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "bege", "name": "Capone Bege", "aliases": ["Capone Gang Bege", "Gang Bege", "μπέγκε", "μπεγκε", "καπόνε μπέγκε"], "gender": "male", "form": "human", "role": ["Captain", "Καπετάνιος"], "fruit": "Shiro Shiro no Mi", "fruitType": "Paramecia", "bounty": 350000000, "arc": "Sabaody", "firstEpisode": 1085, "firstChapter": 1058, "source": "https://one-piece.com/character/Capone_Bege/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountySource": "https://onepiece.fandom.com/wiki/Capone_Bege", "bountyNote": "350,000,000 after Whole Cake Island; the official profile retains the older 300,000,000 amount."},
{"id": "hawkins", "name": "Basil Hawkins", "aliases": ["Hawkins", "χόκινς", "χοκινς"], "gender": "male", "form": "human", "role": ["Captain", "Καπετάνιος"], "fruit": "Wara Wara no Mi", "fruitType": "Paramecia", "bounty": 320000000, "arc": "Sabaody", "firstEpisode": 1085, "firstChapter": 1058, "source": "https://one-piece.com/character/hawkins/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "apoo", "name": "Scratchmen Apoo", "aliases": ["Apoo", "απού", "απου"], "gender": "male", "form": "longarm", "role": ["Captain", "Καπετάνιος"], "fruit": "Oto Oto no Mi", "fruitType": "Paramecia", "bounty": 350000000, "arc": "Sabaody", "firstEpisode": 1085, "firstChapter": 1058, "source": "https://one-piece.com/character/apoo/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "drake", "name": "X Drake", "aliases": ["X. Drake", "Diez Drake", "ντρέικ", "ντρεικ"], "gender": "male", "form": "human", "role": ["Marine", "Πεζοναύτης"], "fruit": "Ryu Ryu no Mi: Allosaurus", "fruitType": "Ancient Zoan", "bounty": 222000000, "arc": "Sabaody", "firstEpisode": 1085, "firstChapter": 1058, "source": "https://one-piece.com/character/X_Drake/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "urouge", "name": "Urouge", "aliases": ["Mad Monk", "ουρούτζ", "ουρουτζ"], "gender": "male", "form": "skyislander", "role": ["Captain", "Καπετάνιος"], "fruit": null, "fruitType": null, "bounty": 108000000, "arc": "Sabaody", "firstEpisode": 405, "firstChapter": 513, "source": "https://one-piece.com/character/Urouge/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "fruitUnknown": true},
{"id": "cobra", "name": "Nefertari Cobra", "aliases": ["Nefeltari Cobra", "Cobra", "κόμπρα", "κομπρα"], "gender": "male", "form": "human", "role": ["King", "Βασιλιάς"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Alabasta", "firstEpisode": 130, "firstChapter": 217, "source": "https://one-piece.com/character/Nefeltari_Cobra/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "koza", "name": "Koza", "aliases": ["Kohza", "κόζα", "κοζα"], "gender": "male", "form": "human", "role": ["Rebel leader", "Αρχηγός ανταρτών"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Alabasta", "firstEpisode": 130, "firstChapter": 217, "source": "https://one-piece.com/character/Koza/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "doublefinger", "name": "Zala (Miss Doublefinger)", "aliases": ["Miss Doublefinger", "Miss Double Finger", "Zala", "Paula", "μις νταμπλφινγκερ"], "gender": "female", "form": "human", "role": ["Agent", "Πράκτορας"], "fruit": "Toge Toge no Mi", "fruitType": "Paramecia", "bounty": 35000000, "arc": "Alabasta", "firstEpisode": 130, "firstChapter": 217, "source": "https://one-piece.com/character/Ms_Doublefinger/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "mr4", "name": "Babe (Mr. 4)", "aliases": ["Mr 4", "Mr.4", "Babe", "Bebu", "μιστερ 4"], "gender": "male", "form": "human", "role": ["Agent", "Πράκτορας"], "fruit": null, "fruitType": null, "bounty": 3200000, "arc": "Alabasta", "firstEpisode": 130, "firstChapter": 217, "source": "https://one-piece.com/character/Mr_4/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "merrychristmas", "name": "Drophy (Miss Merry Christmas)", "aliases": ["Miss Merry Christmas", "Drophy", "Dorophy", "μις μερι κριστμας"], "gender": "female", "form": "human", "role": ["Agent", "Πράκτορας"], "fruit": "Mogu Mogu no Mi", "fruitType": "Zoan", "bounty": 14000000, "arc": "Alabasta", "firstEpisode": 130, "firstChapter": 217, "source": "https://one-piece.com/character/Ms_Merry_Christmas/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "trebol", "name": "Trebol", "aliases": ["τρέμπολ", "τρεμπολ"], "gender": "male", "form": "human", "role": ["Officer", "Αξιωματικός"], "fruit": "Beta Beta no Mi", "fruitType": "Paramecia", "bounty": 99000000, "arc": "Dressrosa", "firstEpisode": 746, "firstChapter": 801, "source": "https://one-piece.com/character/trebol/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "diamante", "name": "Diamante", "aliases": ["ντιαμάντε", "ντιαμαντε"], "gender": "male", "form": "human", "role": ["Officer", "Αξιωματικός"], "fruit": "Hira Hira no Mi", "fruitType": "Paramecia", "bounty": 99000000, "arc": "Dressrosa", "firstEpisode": 746, "firstChapter": 801, "source": "https://one-piece.com/character/diamante/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "pica", "name": "Pica", "aliases": ["πίκα", "πικα"], "gender": "male", "form": "human", "role": ["Officer", "Αξιωματικός"], "fruit": "Ishi Ishi no Mi", "fruitType": "Paramecia", "bounty": 99000000, "arc": "Dressrosa", "firstEpisode": 746, "firstChapter": 801, "source": "https://one-piece.com/character/Pica/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "sugar", "name": "Sugar", "aliases": ["σούγκαρ", "σουγκαρ", "σούγκερ"], "gender": "female", "form": "human", "role": ["Officer", "Αξιωματικός"], "fruit": "Hobi Hobi no Mi", "fruitType": "Paramecia", "bounty": null, "arc": "Dressrosa", "firstEpisode": 746, "firstChapter": 801, "source": "https://one-piece.com/character/sugar/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "vergo", "name": "Vergo", "aliases": ["Demon Bamboo Vergo", "βέργκο", "βεργκο"], "gender": "male", "form": "human", "role": ["Officer", "Αξιωματικός"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Punk Hazard", "firstEpisode": 628, "firstChapter": 700, "source": "https://one-piece.com/character/vergo/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "monet", "name": "Monet", "aliases": ["μονέ", "μονε"], "gender": "female", "form": "human", "role": ["Officer", "Αξιωματικός"], "fruit": "Yuki Yuki no Mi", "fruitType": "Logia", "bounty": null, "arc": "Punk Hazard", "firstEpisode": 628, "firstChapter": 700, "source": "https://one-piece.com/character/monet/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "caesar", "name": "Caesar Clown", "aliases": ["Caesar", "Gastino", "σίσαρ", "σιζαρ", "καίσαρας"], "gender": "male", "form": "human", "role": ["Scientist", "Επιστήμονας"], "fruit": "Gasu Gasu no Mi", "fruitType": "Logia", "bounty": 300000000, "arc": "Punk Hazard", "firstEpisode": 628, "firstChapter": 700, "source": "https://one-piece.com/character/caesar/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "kinemon", "name": "Kin'emon", "aliases": ["Kinemon", "Kin’emon", "κινεμον", "κινέμον"], "gender": "male", "form": "human", "role": ["Samurai", "Σαμουράι"], "fruit": "Fuku Fuku no Mi", "fruitType": "Paramecia", "bounty": null, "arc": "Punk Hazard", "firstEpisode": 1085, "firstChapter": 1058, "source": "https://one-piece.com/character/kinemon/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "kanjuro", "name": "Kurozumi Kanjuro", "aliases": ["Kanjuro", "Kanjūrō", "καντζούρο", "καντζουρο"], "gender": "male", "form": "human", "role": ["Samurai", "Σαμουράι"], "fruit": "Fude Fude no Mi", "fruitType": "Paramecia", "bounty": null, "arc": "Dressrosa", "firstEpisode": 1085, "firstChapter": 1058, "source": "https://one-piece.com/character/kurozumi_kanjuro/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "raizo", "name": "Raizo", "aliases": ["Raizō", "ραϊζο", "ραΐζο", "ραιζο"], "gender": "male", "form": "human", "role": ["Ninja", "Νίντζα"], "fruit": "Maki Maki no Mi", "fruitType": "Paramecia", "bounty": null, "arc": "Zou", "firstEpisode": 1085, "firstChapter": 1058, "source": "https://one-piece.com/character/Raizo/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "momonosuke", "name": "Kozuki Momonosuke", "aliases": ["Momonosuke", "Momo", "Kouduki Momonosuke", "μομονοσούκε", "μομονοσουκε"], "gender": "male", "form": "human", "role": ["Shogun", "Σογκούν"], "fruit": "Artificial dragon fruit", "fruitType": "Artificial Zoan", "bounty": null, "arc": "Punk Hazard", "firstEpisode": 1085, "firstChapter": 1058, "source": "https://one-piece.com/character/Kouduki_momonosuke/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "yamato", "name": "Yamato", "aliases": ["γιαμάτο", "γιαματο"], "gender": "male", "form": "human", "role": ["Fighter", "Μαχητής"], "fruit": "Inu Inu no Mi: Okuchi no Makami", "fruitType": "Mythical Zoan", "bounty": null, "arc": "Wano", "firstEpisode": 1085, "firstChapter": 1058, "source": "https://one-piece.com/character/YAMATO/", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "inuarashi", "name": "Inuarashi", "aliases": ["Duke Inuarashi", "Dogstorm", "ινουαράσι", "ινουαρασι"], "gender": "male", "form": "mink", "role": ["Leader", "Ηγέτης"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Zou", "firstEpisode": 779, "firstChapter": 822, "source": "https://one-piece.com/character/Duke_Inuarashi/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "nekomamushi", "name": "Nekomamushi", "aliases": ["Cat Viper", "νεκομαμούσι", "νεκομαμουσι"], "gender": "male", "form": "mink", "role": ["Leader", "Ηγέτης"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Zou", "firstEpisode": 779, "firstChapter": 822, "source": "https://one-piece.com/character/Master_Nekomamushi/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "carrot", "name": "Carrot", "aliases": ["κάροτ", "καροτ"], "gender": "female", "form": "mink", "role": ["Fighter", "Μαχήτρια"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Zou", "firstEpisode": 779, "firstChapter": 822, "source": "https://one-piece.com/character/carrot/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "pedro", "name": "Pedro", "aliases": ["πέδρο", "πεδρο"], "gender": "male", "form": "mink", "role": ["Captain", "Καπετάνιος"], "fruit": null, "fruitType": null, "bounty": 382000000, "arc": "Zou", "firstEpisode": 877, "firstChapter": 902, "source": "https://one-piece.com/character/Pedro/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "wanda", "name": "Wanda", "aliases": ["γουάντα", "γουαντα"], "gender": "female", "form": "mink", "role": ["Fighter", "Μαχήτρια"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Zou", "firstEpisode": 779, "firstChapter": 822, "source": "https://one-piece.com/character/wanda/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "shirahoshi", "name": "Shirahoshi", "aliases": ["Princess Shirahoshi", "σιραχόσι", "σιραχοσι"], "gender": "female", "form": "mermaid", "role": ["Princess", "Πριγκίπισσα"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Fish-Man Island", "firstEpisode": 574, "firstChapter": 653, "source": "https://one-piece.com/character/Princess_Shirahoshi/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "hody", "name": "Hody Jones", "aliases": ["Hordy Jones", "Hody", "χόντι τζόουνς", "χοντι"], "gender": "male", "form": "fishman", "role": ["Captain", "Καπετάνιος"], "fruit": null, "fruitType": null, "bounty": null, "arc": "Fish-Man Island", "firstEpisode": 574, "firstChapter": 653, "source": "https://one-piece.com/character/Hordy_Jones/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."},
{"id": "magellan", "name": "Magellan", "aliases": ["μαγγελάν", "μαγκελαν", "μαγκελλαν"], "gender": "male", "form": "human", "role": ["Prison officer", "Αξιωματικός φυλακής"], "fruit": "Doku Doku no Mi", "fruitType": "Paramecia", "bounty": null, "arc": "Impel Down", "firstEpisode": 458, "firstChapter": 549, "source": "https://one-piece.com/character/Magellan/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim.", "bountyNone": true},
{"id": "ivankov", "name": "Emporio Ivankov", "aliases": ["Ivankov", "Iva", "Iva-chan", "ιβάνκοφ", "ιβανκοφ"], "gender": "male", "form": "human", "role": ["Revolutionary", "Επαναστάτης"], "fruit": "Horu Horu no Mi", "fruitType": "Paramecia", "bounty": null, "arc": "Impel Down", "firstEpisode": 458, "firstChapter": 549, "source": "https://one-piece.com/character/Emporio_Ivankov/index.html", "unlockNote": "Conservative arc-end gate for the frozen end-of-Wano traits, not an exact debut claim."}
];

const OP_ARC_EPISODES={"East Blue":61,"Reverse Mountain":63,"Whisky Peak":67,"Little Garden":77,"Drum Island":91,"Alabasta":130,"Jaya":152,"Skypiea":195,"Long Ring Long Land":219,"Water 7":263,"Enies Lobby":312,"Thriller Bark":381,"Sabaody":405,"Amazon Lily":421,"Impel Down":452,"Return to Sabaody":522};
// Government-issued bounties only; Cross Guild rewards are not part of this snapshot.
const OP_NO_BOUNTY_IDS = new Set(["koby", "helmeppo", "smoker", "tashigi", "hina", "borsalino", "sakazuki", "sengoku", "garp", "fujitora", "rosinante"]);
for (const character of OP_CHARACTERS) if (OP_NO_BOUNTY_IDS.has(character.id) && character.bounty === null) character.bountyNone = true;

const OP_EARLY_EPISODES={luffy:1,zoro:2,nami:1,chopper:81,robin:67,shanks:4};
for(const character of OP_CHARACTERS) character.firstEpisode ??= OP_EARLY_EPISODES[character.id] ?? OP_ARC_EPISODES[character.arc] ?? 1085;
const OP_CHAPTERS={"luffy":1,"zoro":3,"nami":8,"chopper":134,"robin":114,"usopp":23,"sanji":43,"franky":329,"brook":442,"jinbe":528,"crocodile":126,"enel":254,"lucci":323,"doflamingo":233,"kaido":795,"bigmom":651,"king":925,"queen":925,"jack":808,"katakuri":860,"kid":498,"killer":498,"marco":234,"whitebeard":234,"blackbeard":223,"mihawk":49,"kuma":233,"moria":449,"sengoku":234,"garp":92,"shanks":1};
const OP_ARC_CHAPTERS={"East Blue":100,"Reverse Mountain":105,"Whisky Peak":114,"Little Garden":129,"Drum Island":154,"Alabasta":217,"Jaya":236,"Skypiea":302,"Long Ring Long Land":321,"Water 7":374,"Enies Lobby":430,"Thriller Bark":489,"Sabaody":513,"Amazon Lily":524,"Impel Down":549,"Return to Sabaody":602};
for(const character of OP_CHARACTERS) character.firstChapter ??= OP_CHAPTERS[character.id] ?? OP_ARC_CHAPTERS[character.arc] ?? 1058;
let opMedium=read('GMP_ONE_PIECE_MEDIUM','anime')==='manga'?'manga':'anime';
let opEpisodeLimit=Number(read('GMP_ONE_PIECE_'+opMedium+'_LIMIT',opMedium==='manga'?'1058':'1085'));
function opMaxProgress(){return opMedium==='manga'?1058:1085;}
if(!Number.isInteger(opEpisodeLimit)||opEpisodeLimit<1||opEpisodeLimit>opMaxProgress())opEpisodeLimit=opMaxProgress();
function opRoster(){return OP_CHARACTERS.filter(character=>(opMedium==='manga'?character.firstChapter:character.firstEpisode)<=opEpisodeLimit);}
function opVisible(id){return OP_BY_ID.has(id)&&(opMedium==='manga'?OP_BY_ID.get(id).firstChapter:OP_BY_ID.get(id).firstEpisode)<=opEpisodeLimit;}

const OP_BY_ID = new Map(OP_CHARACTERS.map(character=>[character.id,character]));
const OP_STORAGE_KEY = "GMP_ONE_PIECE_V1";
const OP_GUESS_LIMIT = 10;
let opAdBusy = false;
let opMode = "unlimited";
let opRounds = {daily:null,unlimited:null};
let opReturnFocus = null;

function opDay(){
  const parts = new Intl.DateTimeFormat("en-US",{timeZone:"Europe/Athens",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
  const get = type=>parts.find(part=>part.type===type).value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function opDailyId(day){
  const days=Math.floor(Date.parse(day+'T00:00:00Z')/86400000);
  const pool=opRoster().filter(c=>day<'2026-10-09'?c.id!=='vivi':true);
  if(opMedium==='anime' && opEpisodeLimit===1085 && day<'2026-10-06')return OP_CHARACTERS[((days*7+3)%30+30)%30].id;
  return pool[((days*7+3)%pool.length+pool.length)%pool.length].id;
}

function opNewRound(mode,previousId){
  const day = opDay();
  const dailyId = opDailyId(day);
  const pool = opRoster().filter(character=>character.id!==previousId && (mode!=="unlimited" || character.id!==dailyId));
  return {number:gmpNextRoundNumber('onepiece',mode),day,medium:opMedium,episodeLimit:opEpisodeLimit,target:mode==="daily"?opDailyId(day):(pool[Math.floor(Math.random()*pool.length)] || OP_BY_ID.get(dailyId)).id,guesses:[],extra:false,ended:false};
}

function opValidRound(value,mode){
  return value && opVisible(value.target) && (value.medium ?? "anime")===opMedium && (value.episodeLimit ?? 1085)===opEpisodeLimit && Array.isArray(value.guesses)
    && (value.extra===undefined || typeof value.extra==="boolean")
    && (value.ended===undefined || typeof value.ended==="boolean")
    && value.guesses.length<=OP_GUESS_LIMIT+(value.extra?1:0)
    && new Set(value.guesses).size===value.guesses.length
    && value.guesses.every(id=>opVisible(id))
    && (mode!=="daily" || (value.day===opDay() && value.target===opDailyId(value.day)))
    && (mode!=="unlimited" || opRoster().length===1 || value.target!==opDailyId(opDay()))
    && (value.guesses.indexOf(value.target)===-1 || value.guesses.at(-1)===value.target);
}

try{
  const saved = JSON.parse(read(OP_STORAGE_KEY,"null"));
  if(saved) for(const mode of ["daily","unlimited"]){
    if(opValidRound(saved[mode],mode)) opRounds[mode]=saved[mode];
  }
}catch{ /* A damaged save starts a fresh round. */ }

function opSave(){write(OP_STORAGE_KEY,JSON.stringify(opRounds));}
function opRound(){
  if(!opValidRound(opRounds[opMode],opMode)){
    opRounds[opMode]=opNewRound(opMode);
    opSave();
  }
  if(gmpEnsureRoundNumber('onepiece',opMode,opRounds[opMode]))opSave();
  const round=opRounds[opMode];
  // A Daily finished elsewhere, or before changing the progress setting, stays finished.
  if(opMode==='daily'&&!round.marked&&!opDone(round)&&window.GMPDaily?.done('onepiece',round.day)){round.ended=true;round.elsewhere=true;opSave();}
  // A Daily finished here before it was recorded still counts.
  if(opMode==='daily'&&!round.marked&&!round.elsewhere&&opDone(round)){opTrackDaily(round);opSave();}
  return round;
}
function opTrackDaily(round){
  if(opMode!=='daily'||!(opDone(round)||round.guesses.length>=OP_GUESS_LIMIT))return;
  round.marked=true;window.GMPDaily?.mark('onepiece',round.day,opWon(round));window.GMPScoreAdapter?.sync();
}
function opWon(round){return round.guesses.includes(round.target);}
function opGuessLimit(round){return OP_GUESS_LIMIT+(round.extra?1:0);}
function opDone(round){return opWon(round) || !!round.ended || (!!round.extra && round.guesses.length>=opGuessLimit(round));}
function opCanGuess(round){return !opDone(round) && round.guesses.length<opGuessLimit(round) && !opAdBusy;}
function opCanReward(round){return !opDone(round) && !round.extra && round.guesses.length===OP_GUESS_LIMIT;}
function opNormalize(value){return (window.GMPNames?.fold(value)??value.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase()).replace(/[.\s]+/g," ").trim();}

function opCompare(guess,target,key){
  if(guess.id===target.id) return {kind:"match",symbol:"✓"};
  if(key==="fruit"){
    if(guess.fruitUnknown || target.fruitUnknown) return {kind:"unknown",symbol:"?"};
    if(guess.fruitType===target.fruitType) return {kind:"match",symbol:"✓"};
    if(guess.fruitType?.includes("Zoan") && target.fruitType?.includes("Zoan")) return {kind:"partial",symbol:"≈"};
    return {kind:"miss",symbol:"×"};
  }
  if(key==="bounty"){
    if((guess.bounty===null && !guess.bountyNone) || (target.bounty===null && !target.bountyNone)) return {kind:"unknown",symbol:"?"};
    if(guess.bountyNone || target.bountyNone) return guess.bountyNone && target.bountyNone ? {kind:"match",symbol:"✓"} : {kind:"miss",symbol:"×"};
  }
  if(key==="role" && guess.role[0]===target.role[0]) return {kind:"match",symbol:"✓"};
  if(guess[key]===target[key]) return {kind:"match",symbol:"✓"};
  return {kind:"miss",symbol:key==="bounty"?(guess.bounty<target.bounty?"↑":"↓"):"×"};
}

function opValue(character,key){
  if(key==="name") return character.name;
  if(key==="gender") return character.gender==="male"?T("Male","Άνδρας"):T("Female","Γυναίκα");
  if(key==="form"){
    const forms={human:["Human","Άνθρωπος"],reindeer:["Reindeer","Τάρανδος"],cyborg:["Human / cyborg","Άνθρωπος / cyborg"],skeleton:["Human / skeleton","Άνθρωπος / σκελετός"],fishman:["Fish-man","Ψαράνθρωπος"]};
    forms.lunarian=["Lunarian","Λουνάριος"];
    forms.giant=["Giant","Γίγαντας"];
    forms.whale=["Whale","Φάλαινα"];
    forms.mink=["Mink","Μινκ"];
    forms.longarm=["Longarm","Μακρυχέρης"];
    forms.skyislander=["Sky islander","Κάτοικος ουράνιου νησιού"];
    forms.mermaid=["Mermaid","Γοργόνα"];
    return T(...forms[character.form]);
  }
  if(key==="role") return T(...character.role);
  if(key==="fruit" && character.fruitUnknown) return T("Not revealed by the end of Wano","Δεν έχει αποκαλυφθεί έως το τέλος του Wano");
  if(key==="fruit" && character.id==="bonney") return T("Paramecia — unnamed age-manipulating fruit","Paramecia — ανώνυμο φρούτο αλλαγής ηλικίας");
  if(key==="fruit") return character.fruitType?`${character.fruitType} — ${character.fruit}`:T("No Devil Fruit","Χωρίς Devil Fruit");
  if(key==="bounty" && character.bountyNone) return T("None","Καμία");
  if(key==="bounty") return character.bounty===null?T("Undisclosed","Μη γνωστή"):new Intl.NumberFormat(lang==="el"?"el-GR":"en-US").format(character.bounty)+" ฿";
  return character[key];
}

const opDialog = document.createElement("dialog");
opDialog.id="onePieceDialog";
opDialog.className="op-dialog";
opDialog.setAttribute("aria-labelledby","opTitle");
document.body.append(opDialog);

function openOnePieceGame(){
  opReturnFocus=document.activeElement;
  opRender();
  if(!opDialog.open) opDialog.showModal();
  gmpFocusRound(opDialog);
}

function opRender(){
  if(opMode==="quote"){opRenderQuote();return;}
  const round=opRound();
  const target=OP_BY_ID.get(round.target);
  const won=opWon(round);
  const done=opDone(round);
  const canReward=opCanReward(round);
  const adConfigured=!!window.GMPRewardedAds?.configured();
  const available=opRoster();
  const columns=[
    ["name",T("Character","Χαρακτήρας")],["gender",T("Gender","Φύλο")],
    ["form",T("Species / form","Είδος / μορφή")],["role",T("Crew role","Ρόλος")],
    ["fruit",T("Devil Fruit · type & name","Devil Fruit · τύπος & όνομα")],["bounty",T("Bounty","Επικήρυξη")],
    ["arc",T("First appearance arc","Πρώτη εμφάνιση")]
  ];
  const status=won?T(`Found it: ${target.name}! ${round.guesses.length} guesses.`,`Το βρήκες: ${target.name}! ${round.guesses.length} προσπάθειες.`)
    :round.elsewhere?T("You already finished today’s Daily. Come back tomorrow.","Έχεις ήδη ολοκληρώσει το σημερινό Daily. Έλα ξανά αύριο.")
    :done?T(`The character was ${target.name}.`,`Ο χαρακτήρας ήταν ${target.name}.`)
    :canReward?T("10 / 10 guesses used. Watch an ad for one extra guess, or reveal the answer.","10 / 10 προσπάθειες. Δες διαφήμιση για μία έξτρα προσπάθεια ή εμφάνισε την απάντηση.")
    :T(`${round.guesses.length} / ${opGuessLimit(round)} guesses.`,`${round.guesses.length} / ${opGuessLimit(round)} προσπάθειες.`);
  opDialog.innerHTML=`
    <div class="dialog-top"><div><span class="eyebrow">ONE PIECE · CLASSIC</span><h2 id="opTitle">${T("GUESS THE CHARACTER","ΜΑΝΤΕΨΕ ΤΟΝ ΧΑΡΑΚΤΗΡΑ")}</h2></div>
      <button class="close" type="button" data-op-close aria-label="${T("Close","Κλείσιμο")}">×</button></div>
    ${gmpRoundLabel(round.number)}
    ${gmpModeTabs('onepiece',opMode)}
    <form class="op-episodes"><label for="opMedium">${T("Following","Παρακολουθώ / διαβάζω")}</label><select id="opMedium"><option value="anime" ${opMedium==='anime'?'selected':''}>Anime</option><option value="manga" ${opMedium==='manga'?'selected':''}>Manga</option></select><label for="opEpisode">${opMedium==='manga'?T("Which chapter have you read?","Μέχρι ποιο κεφάλαιο έχεις διαβάσει;"):T("Which episode have you watched?","Μέχρι ποιο επεισόδιο έχεις δει;")}</label><div class="guess-row"><input id="opEpisode" type="number" min="1" max="${opMaxProgress()}" step="1" required value="${opEpisodeLimit}"><button class="button lime" type="submit">${T("Apply","Εφαρμογή")}</button></div></form>

    <p class="gmp-start-hint">💡 ${T("Starting clue","Αρχικό στοιχείο")} · ${T("First appearance arc","Πρώτη εμφάνιση")}: <strong>${esc(opValue(target,"arc"))}</strong></p>
    <form class="op-form" ${!opCanGuess(round)?"hidden":""}>
      <label for="opGuess">${T("Choose or type a character","Διάλεξε ή γράψε χαρακτήρα")}</label>
      <div class="guess-row"><input id="opGuess" list="opChoices" autocomplete="off" maxlength="80" required placeholder="${T("e.g. Luffy","π.χ. Luffy")}"><button class="button lime" type="submit">${T("Guess →","Απάντηση →")}</button></div>
      <datalist id="opChoices">${available.map(character=>`<option value="${esc(character.name)}" data-aliases="${esc((character.aliases||[]).join(' | '))}"></option>`).join("")}</datalist>
    </form>
    <p data-correct-answer="${won?esc(target.name):''}" class="op-message ${won?"op-won":""}" role="status" aria-live="polite">${esc(status)}</p>
    ${canReward?`<div class="op-reward"><button class="button lime" type="button" data-op-ad ${opAdBusy||!adConfigured?"disabled":""}>${T("Watch ad · +1 guess","Δες διαφήμιση · +1 προσπάθεια")}</button>
      <button class="text-button" type="button" data-op-reveal ${opAdBusy?"disabled":""}>${T("Reveal & end round","Δείξε απάντηση & τέλος γύρου")}</button>
      ${!adConfigured?`<p class="muted">${T("Rewarded ads are not configured yet.","Οι διαφημίσεις για έξτρα προσπάθεια δεν έχουν συνδεθεί ακόμη.")}</p>`:""}</div>`:""}
    ${round.guesses.length?`<div class="op-table-scroll" tabindex="0" role="region" aria-label="${T("Guess comparisons, scroll horizontally","Συγκρίσεις απαντήσεων, κύλιση οριζόντια")}"><table class="op-table"><caption>${T("Your guesses · newest first","Οι προσπάθειές σου · πιο πρόσφατη πρώτη")}</caption><thead><tr>${columns.map(([,label])=>`<th scope="col">${label}</th>`).join("")}</tr></thead><tbody>
      ${[...round.guesses].reverse().map(id=>{const character=OP_BY_ID.get(id);return `<tr>${columns.map(([key])=>{const comparison=opCompare(character,target,key);return `<td class="op-${comparison.kind}">${esc(opValue(character,key))}<span class="op-symbol">${comparison.symbol}</span></td>`;}).join("")}</tr>`;}).join("")}
    </tbody></table></div>`:""}
    ${opMode==="unlimited"?`<button class="button lime op-next" type="button" data-op-next ${opAdBusy?"disabled":""}>${T("New round →","Νέος γύρος →")}</button>`:""}
    <details class="gmp-game-info"><summary>${T("More information","Περισσότερες πληροφορίες")}</summary><p class="op-footer">${T("Contains spoilers through the end of Wano. Government-issued bounties use that snapshot; Cross Guild rewards are excluded. None means no active government bounty; Undisclosed means the amount is unknown. Progress is saved on this device.","Περιέχει spoilers έως το τέλος του Wano. Μετρούν οι κρατικές επικηρύξεις εκείνης της περιόδου, χωρίς αμοιβές του Cross Guild. Καμία σημαίνει χωρίς ενεργή κρατική επικήρυξη· Μη γνωστή σημαίνει άγνωστο ποσό. Η πρόοδος αποθηκεύεται σε αυτή τη συσκευή.")}<br>
    <a href="https://one-piece.com/character/" target="_blank" rel="noopener noreferrer">${T("Official character reference","Επίσημη αναφορά χαρακτήρων")}</a></p></details>`;
}


opDialog.addEventListener('change',event=>{
  if(event.target.id!=='opMedium'||opAdBusy)return;
  const oldField=opDialog.querySelector('#opEpisode');
  if(oldField.checkValidity())write('GMP_ONE_PIECE_'+opMedium+'_LIMIT',oldField.value);
  opMedium=event.target.value==='manga'?'manga':'anime';write('GMP_ONE_PIECE_MEDIUM',opMedium);
  opEpisodeLimit=Number(read('GMP_ONE_PIECE_'+opMedium+'_LIMIT',String(opMaxProgress())));
  if(!Number.isInteger(opEpisodeLimit)||opEpisodeLimit<1||opEpisodeLimit>opMaxProgress())opEpisodeLimit=opMaxProgress();
  opRounds={daily:null,unlimited:null};opSave();opRender();opDialog.querySelector('#opEpisode')?.focus();
});

opDialog.addEventListener("click",event=>{
  if(event.target.closest("[data-op-close]")){opDialog.close();return;}
  if(opAdBusy)return;
  if(event.target.closest("[data-op-quote-next]")){opNextQuote();opRender();gmpFocusRound(opDialog);return;}
  if(event.target.closest("[data-op-quote-reveal]")){const round=opQuoteRound();if(round){round.ended=true;opSaveQuote();opRender();}return;}
  if(event.target.closest("[data-op-ad]")){opWatchAd();return;}
  if(event.target.closest("[data-op-reveal]")){
    const round=opRound();
    if(opCanReward(round)){round.ended=true;opTrackDaily(round);opSave();opRender();}
    return;
  }
  const mode=event.target.closest("[data-op-mode]");
  if(mode){opMode=mode.dataset.opMode;opRender();gmpFocusRound(opDialog);return;}
  if(event.target.closest("[data-op-next]")){
    opRounds.unlimited=opNewRound("unlimited",opRound().target);
    opSave();opRender();gmpFocusRound(opDialog);
  }
});

opDialog.addEventListener("submit",event=>{
  event.preventDefault();
  if(event.target.matches('.op-episodes')){
    if(opAdBusy)return;
    const field=opDialog.querySelector('#opEpisode');
    if(!field.reportValidity())return;
    opEpisodeLimit=Number(field.value);write('GMP_ONE_PIECE_'+opMedium+'_LIMIT',String(opEpisodeLimit));
    opRounds={daily:null,unlimited:null};opSave();opRender();opDialog.querySelector('#opGuess')?.focus();return;
  }
  if(opMode==="quote"){opSubmitQuote();return;}
  const round=opRound();
  if(!opCanGuess(round)) return;
  const input=opDialog.querySelector("#opGuess");
  const value=opNormalize(input.value);
  const character=window.GMPNames.resolve(input.value,opRoster());
  const message=opDialog.querySelector(".op-message");
  if(!character){message.textContent=T("Choose a character from the list.","Διάλεξε έναν χαρακτήρα από τη λίστα.");input.focus();return;}
  if(round.guesses.includes(character.id)){message.textContent=T("You already tried this character.","Έχεις ήδη δοκιμάσει αυτόν τον χαρακτήρα.");input.focus();return;}
  round.guesses.push(character.id);
  opTrackDaily(round);
  if(opWon(round))window.GMPProgress?.award({game:'onepiece',mode:opMode,round:round.number,day:round.day,attempt:round.guesses.length,extra:round.guesses.length>OP_GUESS_LIMIT}).catch(console.error);
  opSave();opRender();
  if(opWon(round)) opDialog.querySelector("[data-op-next], [data-op-close]")?.focus();
  else opDialog.querySelector("#opGuess")?.focus();
});

opDialog.addEventListener("close",()=>{
  if(opReturnFocus?.isConnected) opReturnFocus.focus();
  else document.querySelector('[data-game="one-piece"]')?.focus();
});

window.addEventListener("gmp-language-change",()=>{if(opDialog.open)opRender();});
window.addEventListener("gmp-daily-change",()=>{if(opDialog.open)opRender();});

async function opWatchAd(){
  const selectedMode=opMode;
  const round=opRound();
  if(opAdBusy || !opCanReward(round) || !window.GMPRewardedAds?.configured())return;
  opAdBusy=true;
  // Rewarded ads need to appear above the page rather than behind a native dialog.
  opDialog.close();
  let granted=false;
  try{granted=await window.GMPRewardedAds.show();}catch{ /* No ad means no reward. */ }
  opAdBusy=false;
  const stillCurrent=opRounds[selectedMode]===round && opValidRound(round,selectedMode);
  if(granted && stillCurrent && opCanReward(round)){
    round.extra=true;
    opSave();
  }
  opMode=selectedMode;
  openOnePieceGame();
  if(!granted)opDialog.querySelector(".op-message").textContent=T("No reward was granted. You can retry when an ad is available.","Δεν δόθηκε έξτρα προσπάθεια. Μπορείς να δοκιμάσεις ξανά όταν υπάρχει διαθέσιμη διαφήμιση.");
}
