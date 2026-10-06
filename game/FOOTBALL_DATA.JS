"use strict";
// Highest recorded career market values, not transfer fees. Checked 2026-10-05.
// null means no verified peak is available.
const FB_METADATA = {
  "messi": {
    "name": "Lionel Messi",
    "birthDate": "1987-06-24",
    "highestMarketValue": 180000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3111%2628003/sort/einsatzzeit.desc"
  },
  "ronaldo": {
    "name": "Cristiano Ronaldo",
    "birthDate": "1985-02-05",
    "highestMarketValue": 120000000,
    "status": "active",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/3924%268198"
  },
  "mbappe": {
    "name": "Kylian Mbappé",
    "birthDate": "1998-12-20",
    "highestMarketValue": 200000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/342229%263111"
  },
  "haaland": {
    "name": "Erling Haaland",
    "birthDate": "2000-07-21",
    "highestMarketValue": 200000000,
    "status": "active",
    "source": "https://www.transfermarkt.us/vergleich/spielervergleich/statistik/def/spieler/134425%26418560"
  },
  "modric": {
    "name": "Luka Modrić",
    "birthDate": "1985-09-09",
    "highestMarketValue": 55000000,
    "status": "active",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/32467%2627992"
  },
  "ronaldinho": {
    "name": "Ronaldinho",
    "birthDate": "1980-03-21",
    "highestMarketValue": 80000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3366%263373/sort/wettbewerb.desc",
    "statusSource": "https://inside.fifa.com/en/news/ronaldinho-calls-time-on-mesmerising-career-2926508"
  },
  "zidane": {
    "name": "Zinédine Zidane",
    "birthDate": "1972-06-23",
    "highestMarketValue": 25000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/342229%263111"
  },
  "henry": {
    "name": "Thierry Henry",
    "birthDate": "1977-08-17",
    "highestMarketValue": 50000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/3924%263207"
  },
  "neymar": {
    "name": "Neymar",
    "birthDate": "1992-02-05",
    "highestMarketValue": 180000000,
    "status": "active",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/68290%2625557"
  },
  "suarez": {
    "name": "Luis Suárez",
    "birthDate": "1987-01-24",
    "highestMarketValue": 90000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/44352%263332"
  },
  "lewandowski": {
    "name": "Robert Lewandowski",
    "birthDate": "1988-08-21",
    "highestMarketValue": 90000000,
    "status": "active",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/38253%267980"
  },
  "benzema": {
    "name": "Karim Benzema",
    "birthDate": "1987-12-19",
    "highestMarketValue": 60000000,
    "status": "active",
    "source": "https://www.transfermarkt.us/vergleich/spielervergleich/statistik/def/spieler/3332%2618922"
  },
  "salah": {
    "name": "Mohamed Salah",
    "birthDate": "1992-06-15",
    "highestMarketValue": 150000000,
    "status": "active",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/148455%263924/sort/vorlagen"
  },
  "mane": {
    "name": "Sadio Mané",
    "birthDate": "1992-04-10",
    "highestMarketValue": 150000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/134425%26200512/sort/minuten_pro_tor"
  },
  "debruyne": {
    "name": "Kevin De Bruyne",
    "birthDate": "1991-06-28",
    "highestMarketValue": 150000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/88755%2632467/sort/tore.desc"
  },
  "hazard": {
    "name": "Eden Hazard",
    "birthDate": "1991-01-07",
    "highestMarketValue": 150000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/25557%2650202"
  },
  "bale": {
    "name": "Gareth Bale",
    "birthDate": "1989-07-16",
    "highestMarketValue": 90000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/39381%26192565"
  },
  "ibrahimovic": {
    "name": "Zlatan Ibrahimović",
    "birthDate": "1981-10-03",
    "highestMarketValue": 46000000,
    "status": "retired",
    "source": "https://www.transfermarkt.us/vergleich/spielervergleich/statistik/def/spieler/3455%263332"
  },
  "aguero": {
    "name": "Sergio Agüero",
    "birthDate": "1988-06-02",
    "highestMarketValue": 80000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3410%2626399"
  },
  "torres": {
    "name": "Fernando Torres",
    "birthDate": "1984-03-20",
    "highestMarketValue": 50000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/7767%267980/sort/einsaetze"
  },
  "villa": {
    "name": "David Villa",
    "birthDate": "1981-12-03",
    "highestMarketValue": 50000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/38253%267980"
  },
  "eto": {
    "name": "Samuel Eto'o",
    "birthDate": "1981-03-10",
    "highestMarketValue": 42000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/3924%264257"
  },
  "drogba": {
    "name": "Didier Drogba",
    "birthDate": "1978-03-11",
    "highestMarketValue": 40000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/500689%263924/sort/minuten_pro_tor.desc"
  },
  "kaka": {
    "name": "Kaká",
    "birthDate": "1982-04-22",
    "highestMarketValue": 70000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3366%263139"
  },
  "figo": {
    "name": "Luís Figo",
    "birthDate": "1972-11-04",
    "highestMarketValue": 22000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/148455%263446"
  },
  "rivaldo": {
    "name": "Rivaldo",
    "birthDate": "1972-04-19",
    "highestMarketValue": 6500000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3140%263372/sort/wettbewerb.desc/"
  },
  "beckham": {
    "name": "David Beckham",
    "birthDate": "1975-05-02",
    "highestMarketValue": 40000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3111%263139"
  },
  "lampard": {
    "name": "Frank Lampard",
    "birthDate": "1978-06-20",
    "highestMarketValue": 45000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3163%265817/sort/wettbewerb.desc"
  },
  "rooney": {
    "name": "Wayne Rooney",
    "birthDate": "1985-10-24",
    "highestMarketValue": 65000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3332%2628003"
  },
  "owen": {
    "name": "Michael Owen",
    "birthDate": "1979-12-14",
    "highestMarketValue": 30000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/3332%261397"
  },
  "shearer": {
    "name": "Alan Shearer",
    "birthDate": "1970-08-13",
    "highestMarketValue": 9000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/132098%263110"
  },
  "bergkamp": {
    "name": "Dennis Bergkamp",
    "birthDate": "1969-05-10",
    "highestMarketValue": 3000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/ajax-amsterdam/alumni/verein/610/buchstabe/B/land_id/0/position/alle/detailposition/moulinarumeurs/galerie/1/page/7"
  },
  "vanpersie": {
    "name": "Robin van Persie",
    "birthDate": "1983-08-06",
    "highestMarketValue": 47500000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/4380%26434675/sort/vorlagen.desc"
  },
  "robben": {
    "name": "Arjen Robben",
    "birthDate": "1984-01-23",
    "highestMarketValue": 40000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/4360%268198"
  },
  "sneijder": {
    "name": "Wesley Sneijder",
    "birthDate": "1984-06-09",
    "highestMarketValue": 45000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/3924%264673/sort/einsatzzeit"
  },
  "seedorf": {
    "name": "Clarence Seedorf",
    "birthDate": "1976-04-01",
    "highestMarketValue": 18000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/4168%263455"
  },
  "pirlo": {
    "name": "Andrea Pirlo",
    "birthDate": "1979-05-19",
    "highestMarketValue": 36000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3163%265817/sort/wettbewerb.desc"
  },
  "baggio": {
    "name": "Roberto Baggio",
    "birthDate": "1967-02-18",
    "highestMarketValue": null,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/4153%268198"
  },
  "ronaldonazario": {
    "name": "Ronaldo",
    "birthDate": "1976-09-18",
    "highestMarketValue": 45000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3111%263140/sort/wettbewerb.desc"
  },
  "buffon": {
    "name": "Gianluigi Buffon",
    "birthDate": "1978-01-28",
    "highestMarketValue": 35000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/5023%26315858/sort/kassierte_tore.desc"
  },
  "cech": {
    "name": "Petr Cech",
    "birthDate": "1982-05-20",
    "highestMarketValue": 28500000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/5658%2672476"
  },
  "vandersar": {
    "name": "Edwin van der Sar",
    "birthDate": "1970-10-29",
    "highestMarketValue": 6000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/5658%263516"
  },
  "xabialonso": {
    "name": "Xabi Alonso",
    "birthDate": "1981-11-25",
    "highestMarketValue": 35000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/adam-wharton/news/spieler/744149"
  },
  "rakitic": {
    "name": "Ivan Rakitic",
    "birthDate": "1988-03-10",
    "highestMarketValue": 70000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/32467%2649499"
  },
  "berbatov": {
    "name": "Dimitar Berbatov",
    "birthDate": "1981-01-30",
    "highestMarketValue": 34500000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/as-monaco/alumni/verein/162/buchstabe/B/land_id/0/position/alle/detailposition/moulinarumeurs/galerie/1/page/6"
  },
  "dzeko": {
    "name": "Edin Dzeko",
    "birthDate": "1986-03-17",
    "highestMarketValue": 32000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/as-monaco/alumni/verein/162/buchstabe/B/land_id/0/position/alle/detailposition/moulinarumeurs/galerie/1/page/6"
  },
  "yayatoure": {
    "name": "Yaya Touré",
    "birthDate": "1983-05-13",
    "highestMarketValue": 36500000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/13091%2630739"
  },
  "cambiasso": {
    "name": "Esteban Cambiasso",
    "birthDate": "1980-08-18",
    "status": "retired",
    "highestMarketValue": 31000000,
    "source": "https://www.transfermarkt.com/esteban-cambiasso/transfers/spieler/7520",
    "valueSource": "https://www.transfermarkt.com/club-atletico-river-plate-ii/alumni/verein/14837"
  },
  "kuyt": {
    "name": "Dirk Kuyt",
    "birthDate": "1980-07-22",
    "status": "retired",
    "highestMarketValue": 20000000,
    "source": "https://www.transfermarkt.com/dirk-kuyt/profil/spieler/4010",
    "valueSource": "https://www.transfermarkt.com/fenerbahce-istanbul/alumni/verein/36/page/26/sort/liga_hidden"
  },
  "parkjisung": {
    "name": "Ji-sung Park",
    "birthDate": "1981-02-25",
    "highestMarketValue": 12500000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/4592%2691845/sort/vorlagen.desc/detail/forum/664/"
  },
  "casillas": {
    "name": "Iker Casillas",
    "birthDate": "1981-05-20",
    "highestMarketValue": 35000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/5023%263979"
  },
  "puyol": {
    "name": "Carles Puyol",
    "birthDate": "1978-04-13",
    "highestMarketValue": 30000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/7594%2625557/sort/einsaetze"
  },
  "terry": {
    "name": "John Terry",
    "birthDate": "1980-12-07",
    "highestMarketValue": 35000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/157509%263160"
  },
  "ferdinand": {
    "name": "Rio Ferdinand",
    "birthDate": "1978-11-07",
    "highestMarketValue": 35000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/3235%263160/sort/vorlagen.desc"
  },
  "vidic": {
    "name": "Nemanja Vidic‎",
    "birthDate": "1981-10-21",
    "highestMarketValue": 37000000,
    "status": "retired",
    "source": "https://www.transfermarkt.us/vergleich/spielervergleich/statistik/def/spieler/3160%2619726/sort/minuten_pro_tor.desc"
  },
  "evra": {
    "name": "Patrice Evra",
    "birthDate": "1981-05-15",
    "highestMarketValue": 27000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/3182%265285"
  },
  "ashleycole": {
    "name": "Ashley Cole",
    "birthDate": "1980-12-20",
    "highestMarketValue": 27000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/3182%265285"
  },
  "gerrard": {
    "name": "Steven Gerrard",
    "birthDate": "1980-05-30",
    "highestMarketValue": 50000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3163%263109"
  },
  "scholes": {
    "name": "Paul Scholes",
    "birthDate": "1974-11-16",
    "highestMarketValue": 25000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/3397%263163"
  },
  "totti": {
    "name": "Francesco Totti",
    "birthDate": "1976-09-27",
    "highestMarketValue": 40000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/roma-u20/alumni/verein/11997/buchstabe/T/land_id/0/position/alle/detailposition/alle/galerie/1"
  },
  "deco": {
    "name": "Deco",
    "birthDate": "1977-08-27",
    "status": "retired",
    "highestMarketValue": 25000000,
    "source": "https://www.transfermarkt.com/deco/profil/spieler/8564",
    "valueSource": "https://www.transfermarkt.com/fc-barcelona/alumni/verein/131/aggregate/page/61/sort/max_marktwert.desc/detail/forum/664/"
  },
  "ballack": {
    "name": "Michael Ballack",
    "birthDate": "1976-09-26",
    "highestMarketValue": 35000000,
    "status": "retired",
    "source": "https://www.transfermarkt.us/vergleich/spielervergleich/statistik/def/spieler/5023%2663/sort/minuten_pro_tor.desc"
  },
  "essien": {
    "name": "Michael Essien",
    "birthDate": "1982-12-03",
    "highestMarketValue": 38000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/5588%2613091"
  },
  "makelele": {
    "name": "Claude Makélélé",
    "birthDate": "1973-02-18",
    "status": "retired",
    "highestMarketValue": 18000000,
    "source": "https://www.transfermarkt.com/claude-makelele/transfers/spieler/4182",
    "valueSource": "https://www.transfermarkt.com/real-madrid/alumni/verein/418/page/6"
  },
  "veron": {
    "name": "Juan Sebastián Verón",
    "birthDate": "1975-03-09",
    "status": "retired",
    "highestMarketValue": 16000000,
    "source": "https://www.transfermarkt.co.uk/juan-sebastian-veron/profil/spieler/3143",
    "valueSource": "https://www.transfermarkt.com/club-estudiantes-de-la-plata/alumni/verein/288"
  },
  "crespo": {
    "name": "Hernán Crespo",
    "birthDate": "1975-07-05",
    "highestMarketValue": 16000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3410%265821"
  },
  "shevchenko": {
    "name": "Andriy Shevchenko",
    "birthDate": "1976-09-29",
    "highestMarketValue": 51000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3522%26531",
    "valueSource": "https://www.transfermarkt.us/dynamo-kiew/alumni/verein/338"
  },
  "inzaghi": {
    "name": "Filippo Inzaghi",
    "birthDate": "1973-08-09",
    "highestMarketValue": 10000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3410%265821"
  },
  "delpiero": {
    "name": "Alessandro Del Piero",
    "birthDate": "1974-11-09",
    "highestMarketValue": 22000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/845654%264289/sort/vorlagen"
  },
  "anelka": {
    "name": "Nicolas Anelka",
    "birthDate": "1979-03-14",
    "status": "retired",
    "highestMarketValue": 30000000,
    "source": "https://www.transfermarkt.co.uk/nicolas-anelka/profil/spieler/3226",
    "valueSource": "https://www.transfermarkt.com/shanghai-shenhua/alumni/verein/3183"
  },
  "xavi": {
    "name": "Xavi",
    "birthDate": "1980-01-25",
    "highestMarketValue": 65000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/7607%267594/sort/wettbewerb"
  },
  "iniesta": {
    "name": "Andrés Iniesta",
    "birthDate": "1984-05-11",
    "highestMarketValue": 70000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3111%267600"
  },
  "busquets": {
    "name": "Sergio Busquets",
    "birthDate": "1988-07-16",
    "highestMarketValue": 80000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/7476%2665230"
  },
  "pique": {
    "name": "Gerard Piqué",
    "birthDate": "1987-02-02",
    "highestMarketValue": 50000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/18944%2628003"
  },
  "ramos": {
    "name": "Sergio Ramos",
    "birthDate": "1986-03-30",
    "highestMarketValue": 50000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/25557%263139"
  },
  "marcelo": {
    "name": "Marcelo",
    "birthDate": "1988-05-12",
    "highestMarketValue": 70000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/44501%26374139/sort/wettbewerb.desc"
  },
  "danialves": {
    "name": "Dani Alves",
    "birthDate": "1983-05-06",
    "highestMarketValue": 36000000,
    "status": "retired",
    "source": "https://www.transfermarkt.us/vergleich/spielervergleich/statistik/def/spieler/44501%2615951/sort/einsaetze.desc"
  },
  "robertocarlos": {
    "name": "Roberto Carlos",
    "birthDate": "1973-04-10",
    "highestMarketValue": 30000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/7518%268198"
  },
  "lahm": {
    "name": "Philipp Lahm",
    "birthDate": "1983-11-11",
    "highestMarketValue": 30000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/2219%267476/sort/tore"
  },
  "klose": {
    "name": "Miroslav Klose",
    "birthDate": "1978-06-09",
    "highestMarketValue": 30000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3522%2610/sort/wettbewerb"
  },
  "podolski": {
    "name": "Lukas Podolski",
    "birthDate": "1985-06-04",
    "highestMarketValue": 23000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/15185%2686792/sort/einsatzzeit"
  },
  "schweinsteiger": {
    "name": "Bastian Schweinsteiger",
    "birthDate": "1984-08-01",
    "highestMarketValue": 40000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/2219%262514"
  },
  "ozil": {
    "name": "Mesut Özil",
    "birthDate": "1988-10-15",
    "highestMarketValue": 50000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/35664%2694005/sort/wettbewerb.desc"
  },
  "khedira": {
    "name": "Sami Khedira",
    "birthDate": "1987-04-04",
    "highestMarketValue": 35000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/29401%2659344"
  },
  "mariogomez": {
    "name": "Mario Gómez",
    "birthDate": "1985-07-10",
    "highestMarketValue": 42000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/4380%266288"
  },
  "klinsmann": {
    "name": "Jürgen Klinsmann",
    "birthDate": "1964-07-30",
    "status": "retired",
    "highestMarketValue": null,
    "source": "https://www.transfermarkt.com/jurgen-klinsmann/leistungsdatendetails/spieler/16980"
  },
  "voller": {
    "name": "Rudi Völler",
    "birthDate": "1960-04-13",
    "status": "retired",
    "highestMarketValue": null,
    "source": "https://www.transfermarkt.com/rudi-voller/transfers/spieler/13775"
  },
  "cantona": {
    "name": "Éric Cantona",
    "birthDate": "1966-05-24",
    "highestMarketValue": null,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/1312950%2612000"
  },
  "markhughes": {
    "name": "Mark Hughes",
    "birthDate": "1963-11-01",
    "status": "retired",
    "highestMarketValue": null,
    "source": "https://www.transfermarkt.com/mark-hughes/profil/spieler/8022"
  },
  "yorke": {
    "name": "Dwight Yorke",
    "birthDate": "1971-11-03",
    "status": "retired",
    "highestMarketValue": 4000000,
    "source": "https://www.transfermarkt.co.uk/dwight-yorke/profil/spieler/3223",
    "valueSource": "https://www.transfermarkt.com/afc-sunderland/alumni/verein/289/page/2"
  },
  "andycole": {
    "name": "Andy Cole",
    "birthDate": "1971-10-15",
    "highestMarketValue": 8000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/3238%263110"
  },
  "solskjaer": {
    "name": "Ole Gunnar Solskjær",
    "birthDate": "1973-02-26",
    "status": "retired",
    "highestMarketValue": null,
    "source": "https://www.transfermarkt.co.uk/ole-gunnar-solskjaer/profil/spieler/3394"
  },
  "sheringham": {
    "name": "Teddy Sheringham",
    "birthDate": "1966-04-02",
    "status": "retired",
    "highestMarketValue": 500000,
    "source": "https://www.transfermarkt.co.uk/teddy-sheringham/profil/spieler/3392",
    "valueSource": "https://www.transfermarkt.com/manchester-united/alumni/verein/985/page/21/sort/liga_hidden/detail/forum/664/"
  },
  "fowler": {
    "name": "Robbie Fowler",
    "birthDate": "1975-04-09",
    "highestMarketValue": 6500000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/1397%263225/sort/wettbewerb"
  },
  "mcmanaman": {
    "name": "Steve McManaman",
    "birthDate": "1972-02-11",
    "status": "retired",
    "highestMarketValue": 7000000,
    "source": "https://www.transfermarkt.co.uk/steve-mcmanaman/profil/spieler/3980",
    "valueSource": "https://www.transfermarkt.com/real-madrid/alumni/verein/418/buchstabe/M/land_id/0/position/alle/detailposition/alle"
  },
  "mascherano": {
    "name": "Javier Mascherano",
    "birthDate": "1984-06-08",
    "status": "retired",
    "highestMarketValue": 30000000,
    "source": "https://www.transfermarkt.com/javier-mascherano/profil/trainer/95593",
    "valueSource": "https://www.transfermarkt.com/west-ham-united/alumni/verein/379"
  },
  "tevez": {
    "name": "Carlos Tévez",
    "birthDate": "1984-02-05",
    "highestMarketValue": 40000000,
    "status": "retired",
    "source": "https://www.transfermarkt.us/vergleich/spielervergleich/statistik/def/spieler/4276%264360/sort/vorlagen.desc"
  },
  "higuain": {
    "name": "Gonzalo Higuaín",
    "birthDate": "1987-12-10",
    "highestMarketValue": 75000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3410%2639153"
  },
  "diegomilito": {
    "name": "Diego Milito",
    "birthDate": "1979-06-12",
    "highestMarketValue": 28000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/22202%2628003"
  },
  "zanetti": {
    "name": "Javier Zanetti",
    "birthDate": "1973-08-10",
    "highestMarketValue": 11000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/28003%261161"
  },
  "hleb": {
    "name": "Alexander Hleb",
    "birthDate": "1981-05-01",
    "status": "retired",
    "highestMarketValue": 19000000,
    "source": "https://www.transfermarkt.com/aleksandr-hleb/transfers/spieler/597",
    "valueSource": "https://www.transfermarkt.co.uk/retired-players-in-2020/index/galerie/1408"
  },
  "rosicky": {
    "name": "Tomáš Rosický",
    "birthDate": "1980-10-04",
    "status": "retired",
    "highestMarketValue": 17500000,
    "source": "https://www.transfermarkt.com/tomas-rosicky/leistungsdatendetails/spieler/132",
    "valueSource": "https://www.transfermarkt.com/ac-sparta-prag/alumni/verein/197"
  },
  "benayoun": {
    "name": "Yossi Benayoun",
    "birthDate": "1980-05-05",
    "status": "retired",
    "highestMarketValue": 11000000,
    "source": "https://www.transfermarkt.co.uk/yossi-benayoun/profil/spieler/7858",
    "valueSource": "https://www.transfermarkt.com/ajax-amsterdam/alumni/verein/610/buchstabe/B/land_id/0/position/alle/detailposition/alle"
  },
  "malouda": {
    "name": "Florent Malouda",
    "birthDate": "1980-06-13",
    "status": "retired",
    "highestMarketValue": 20000000,
    "source": "https://www.transfermarkt.co.uk/florent-malouda/profil/spieler/5461",
    "valueSource": "https://www.transfermarkt.com/fc-metz/alumni/verein/347"
  },
  "saha": {
    "name": "Louis Saha",
    "birthDate": "1978-08-08",
    "status": "retired",
    "highestMarketValue": 18000000,
    "source": "https://www.transfermarkt.co.uk/louis-saha/profil/spieler/4015",
    "valueSource": "https://www.transfermarkt.com/afc-sunderland/alumni/verein/289"
  },
  "yakubu": {
    "name": "Yakubu Aiyegbeni",
    "birthDate": "1982-11-22",
    "status": "retired",
    "highestMarketValue": 20000000,
    "source": "https://www.transfermarkt.co.uk/yakubu/profil/spieler/8559",
    "valueSource": "https://www.transfermarkt.com/hapoel-kfar-saba/alumni/verein/7532"
  },
  "kranjcar": {
    "name": "Niko Kranjčar",
    "birthDate": "1984-08-13",
    "status": "retired",
    "highestMarketValue": 13000000,
    "source": "https://www.transfermarkt.com/niko-kranjcar/transfers/spieler/16746",
    "valueSource": "https://www.transfermarkt.co.uk/new-york-cosmos/alumni/verein/4835"
  },
  "dembaba": {
    "name": "Demba Ba",
    "birthDate": "1985-05-25",
    "highestMarketValue": 22000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/40205%26776890"
  },
  "nolan": {
    "name": "Kevin Nolan",
    "birthDate": "1982-06-24",
    "status": "retired",
    "highestMarketValue": 8000000,
    "source": "https://www.transfermarkt.co.uk/kevin-nolan/profil/spieler/3950",
    "valueSource": "https://www.transfermarkt.com/leyton-orient/alumni/verein/1150"
  },
  "tugay": {
    "name": "Tugay Kerimoğlu",
    "birthDate": "1970-08-24",
    "status": "retired",
    "highestMarketValue": 2500000,
    "source": "https://www.transfermarkt.com/tugay-kerimoglu/profil/spieler/3703",
    "valueSource": "https://www.transfermarkt.com/trabzonspor/alumni/verein/449/page/2"
  }
};
const FB_NEW_PLAYERS = [
  {
    "id": "haller",
    "name": "Sébastien Haller",
    "nation": [
      "Ivory Coast",
      "Ακτή Ελεφαντοστού"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "aliases": [
      "Sébastien Haller",
      "Haller"
    ],
    "birthDate": "1994-06-22",
    "highestMarketValue": 45000000,
    "status": "active",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/181375%26418560"
  },
  {
    "id": "sterling",
    "name": "Raheem Sterling",
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "aliases": [
      "Raheem Sterling",
      "Sterling"
    ],
    "birthDate": "1994-12-08",
    "highestMarketValue": 160000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/134425%26171424"
  },
  {
    "id": "vinicius",
    "name": "Vinicius Junior",
    "nation": [
      "Brazil",
      "Βραζιλία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "aliases": [
      "Vinicius Junior",
      "Junior"
    ],
    "birthDate": "2000-07-12",
    "highestMarketValue": 200000000,
    "status": "active",
    "source": "https://www.transfermarkt.co.uk/vergleich/spielervergleich/statistik/def/spieler/371998%26406625"
  },
  {
    "id": "goncaloramos",
    "name": "Gonçalo Ramos",
    "nation": [
      "Portugal",
      "Πορτογαλία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "aliases": [
      "Gonçalo Ramos",
      "Ramos"
    ],
    "birthDate": "2001-06-20",
    "highestMarketValue": 50000000,
    "status": "active",
    "source": "https://www.transfermarkt.us/vergleich/spielervergleich/statistik/def/spieler/550550%268198"
  },
  {
    "id": "milner",
    "name": "James Milner",
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "aliases": [
      "James Milner",
      "Milner"
    ],
    "birthDate": "1986-01-04",
    "highestMarketValue": 21000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3333%262514/sort/wettbewerb",
    "statusSource": "https://www.transfermarkt.com/james-milner/profil/spieler/3333"
  },
  {
    "id": "lallana",
    "name": "Adam Lallana",
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "aliases": [
      "Adam Lallana",
      "Lallana"
    ],
    "birthDate": "1988-05-10",
    "highestMarketValue": 25000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/207929%2643530/sort/tore"
  },
  {
    "id": "klasnic",
    "name": "Ivan Klasnic",
    "nation": [
      "Croatia",
      "Κροατία"
    ],
    "position": [
      "Striker",
      "Σέντερ φορ"
    ],
    "aliases": [
      "Ivan Klasnic",
      "Klasnic"
    ],
    "birthDate": "1980-01-29",
    "highestMarketValue": 12000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/690%263446/sort/minuten_pro_tor.desc"
  },
  {
    "id": "montolivo",
    "name": "Riccardo Montolivo",
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "aliases": [
      "Riccardo Montolivo",
      "Montolivo"
    ],
    "birthDate": "1985-01-18",
    "highestMarketValue": 18500000,
    "status": "retired",
    "source": "https://www.transfermarkt.us/vergleich/spielervergleich/statistik/def/spieler/5817%2619446"
  },
  {
    "id": "perisic",
    "name": "Ivan Perišić",
    "nation": [
      "Croatia",
      "Κροατία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "aliases": [
      "Ivan Perišić",
      "Perišić"
    ],
    "birthDate": "1989-02-02",
    "highestMarketValue": 45000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/75615%2642460"
  },
  {
    "id": "tadic",
    "name": "Dušan Tadić",
    "nation": [
      "Serbia",
      "Σερβία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "aliases": [
      "Dušan Tadić",
      "Tadić"
    ],
    "birthDate": "1988-11-20",
    "highestMarketValue": 25000000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/28396%2636139"
  },
  {
    "id": "ribery",
    "name": "Franck Ribéry",
    "nation": [
      "France",
      "Γαλλία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "aliases": [
      "Franck Ribéry",
      "Ribéry",
      "Franck Ribery"
    ],
    "birthDate": "1983-04-07",
    "highestMarketValue": 50000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/22068%2628003"
  },
  {
    "id": "kroos",
    "name": "Toni Kroos",
    "nation": [
      "Germany",
      "Γερμανία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "aliases": [
      "Toni Kroos",
      "Kroos",
      "Toni Kroos"
    ],
    "birthDate": "1990-01-04",
    "highestMarketValue": 80000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/31909%2628003"
  },
  {
    "id": "nani",
    "name": "Nani",
    "nation": [
      "Portugal",
      "Πορτογαλία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "aliases": [
      "Nani",
      "Nani"
    ],
    "birthDate": "1986-11-17",
    "highestMarketValue": 36500000,
    "status": "active",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/33706%2628003"
  },
  {
    "id": "quaresma",
    "name": "Ricardo Quaresma",
    "nation": [
      "Portugal",
      "Πορτογαλία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "aliases": [
      "Ricardo Quaresma",
      "Quaresma",
      "Ricardo Quaresma"
    ],
    "birthDate": "1983-09-26",
    "highestMarketValue": 25000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/4188%2628003"
  },
  {
    "id": "valdes",
    "name": "Víctor Valdés",
    "nation": [
      "Spain",
      "Ισπανία"
    ],
    "position": [
      "Goalkeeper",
      "Τερματοφύλακας"
    ],
    "aliases": [
      "Víctor Valdés",
      "Valdés",
      "Victor Valdes"
    ],
    "birthDate": "1982-01-14",
    "highestMarketValue": 20000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/7589%2628003"
  },
  {
    "id": "dida",
    "name": "Dida",
    "nation": [
      "Brazil",
      "Βραζιλία"
    ],
    "position": [
      "Goalkeeper",
      "Τερματοφύλακας"
    ],
    "aliases": [
      "Dida",
      "Dida"
    ],
    "birthDate": "1973-10-07",
    "highestMarketValue": 15000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/5800%2628003"
  },
  {
    "id": "juliocesar",
    "name": "Júlio César",
    "nation": [
      "Brazil",
      "Βραζιλία"
    ],
    "position": [
      "Goalkeeper",
      "Τερματοφύλακας"
    ],
    "aliases": [
      "Júlio César",
      "César",
      "Julio Cesar"
    ],
    "birthDate": "1979-09-03",
    "highestMarketValue": 25000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/22412%2628003"
  },
  {
    "id": "lucio",
    "name": "Lúcio",
    "nation": [
      "Brazil",
      "Βραζιλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "aliases": [
      "Lúcio",
      "Lucio"
    ],
    "birthDate": "1978-05-08",
    "highestMarketValue": 24500000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/1034%2628003"
  },
  {
    "id": "maicon",
    "name": "Maicon",
    "nation": [
      "Brazil",
      "Βραζιλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "aliases": [
      "Maicon",
      "Maicon"
    ],
    "birthDate": "1981-07-26",
    "highestMarketValue": 32000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/18301%2628003"
  },
  {
    "id": "gattuso",
    "name": "Gennaro Gattuso",
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "aliases": [
      "Gennaro Gattuso",
      "Gattuso",
      "Gennaro Gattuso"
    ],
    "birthDate": "1978-01-09",
    "highestMarketValue": 25000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/5813%2628003"
  },
  {
    "id": "nesta",
    "name": "Alessandro Nesta",
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "aliases": [
      "Alessandro Nesta",
      "Nesta",
      "Alessandro Nesta"
    ],
    "birthDate": "1976-03-19",
    "highestMarketValue": 35000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/4171%2628003"
  },
  {
    "id": "maldini",
    "name": "Paolo Maldini",
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "aliases": [
      "Paolo Maldini",
      "Maldini",
      "Paolo Maldini"
    ],
    "birthDate": "1968-06-26",
    "highestMarketValue": 3000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/5803%2628003"
  },
  {
    "id": "cannavaro",
    "name": "Fabio Cannavaro",
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "aliases": [
      "Fabio Cannavaro",
      "Cannavaro",
      "Fabio Cannavaro"
    ],
    "birthDate": "1973-09-13",
    "highestMarketValue": 15000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/5775%2628003"
  },
  {
    "id": "zambrotta",
    "name": "Gianluca Zambrotta",
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "aliases": [
      "Gianluca Zambrotta",
      "Zambrotta",
      "Gianluca Zambrotta"
    ],
    "birthDate": "1977-02-19",
    "highestMarketValue": 28000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/5755%2628003"
  },
  {
    "id": "abidal",
    "name": "Éric Abidal",
    "nation": [
      "France",
      "Γαλλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "aliases": [
      "Éric Abidal",
      "Abidal",
      "Eric Abidal"
    ],
    "birthDate": "1979-09-11",
    "highestMarketValue": 20000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/11403%2628003"
  },
  {
    "id": "mexes",
    "name": "Philippe Mexès",
    "nation": [
      "France",
      "Γαλλία"
    ],
    "position": [
      "Defender",
      "Αμυντικός"
    ],
    "aliases": [
      "Philippe Mexès",
      "Mexès",
      "Philippe Mexes"
    ],
    "birthDate": "1982-03-30",
    "highestMarketValue": 20000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/5422%2628003"
  },
  {
    "id": "dinatale",
    "name": "Antonio Di Natale",
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Striker",
      "Επιθετικός"
    ],
    "aliases": [
      "Antonio Di Natale",
      "Di Natale",
      "Antonio Di Natale"
    ],
    "birthDate": "1977-10-13",
    "highestMarketValue": 15000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/6031%2628003"
  },
  {
    "id": "toni",
    "name": "Luca Toni",
    "nation": [
      "Italy",
      "Ιταλία"
    ],
    "position": [
      "Striker",
      "Επιθετικός"
    ],
    "aliases": [
      "Luca Toni",
      "Toni",
      "Luca Toni"
    ],
    "birthDate": "1977-05-26",
    "highestMarketValue": 28500000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/5980%2628003"
  },
  {
    "id": "forlan",
    "name": "Diego Forlán",
    "nation": [
      "Uruguay",
      "Ουρουγουάη"
    ],
    "position": [
      "Striker",
      "Επιθετικός"
    ],
    "aliases": [
      "Diego Forlán",
      "Forlán",
      "Diego Forlan"
    ],
    "birthDate": "1979-05-19",
    "highestMarketValue": 30000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/3408%2628003"
  },
  {
    "id": "arshavin",
    "name": "Andrey Arshavin",
    "nation": [
      "Russia",
      "Ρωσία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "aliases": [
      "Andrey Arshavin",
      "Arshavin",
      "Andrey Arshavin"
    ],
    "birthDate": "1981-05-29",
    "highestMarketValue": 26000000,
    "status": "retired",
    "source": "https://www.transfermarkt.com/vergleich/spielervergleich/statistik/def/spieler/15378%2628003"
  },
  {
    "id": "carrick",
    "name": "Michael Carrick",
    "nation": [
      "England",
      "Αγγλία"
    ],
    "position": [
      "Defensive Midfield",
      "Αμυντικός μέσος"
    ],
    "aliases": [
      "Michael Carrick",
      "Carrick"
    ],
    "birthDate": "1981-07-28",
    "highestMarketValue": 26500000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/michael-carrick/profil/spieler/3878",
    "checkedAt": "2026-10-06"
  },
  {
    "id": "pires",
    "name": "Robert Pirès",
    "nation": [
      "France",
      "Γαλλία"
    ],
    "position": [
      "Midfielder",
      "Μέσος"
    ],
    "aliases": [
      "Robert Pirès",
      "Robert Pires",
      "Pires",
      "Pirès"
    ],
    "birthDate": "1973-10-29",
    "highestMarketValue": 22000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/robert-pires/profil/spieler/3185",
    "checkedAt": "2026-10-06"
  },
  {
    "id": "giuly",
    "name": "Ludovic Giuly",
    "nation": [
      "France",
      "Γαλλία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "aliases": [
      "Ludovic Giuly",
      "Giuly"
    ],
    "birthDate": "1976-07-10",
    "highestMarketValue": 15000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/ludovic-giuly/profil/spieler/5299",
    "checkedAt": "2026-10-06"
  },
  {
    "id": "juninho",
    "name": "Juninho Pernambucano",
    "nation": [
      "Brazil",
      "Βραζιλία"
    ],
    "position": [
      "Attacking Midfield",
      "Επιτελικός μέσος"
    ],
    "aliases": [
      "Juninho Pernambucano",
      "Juninho"
    ],
    "birthDate": "1975-01-30",
    "highestMarketValue": 18000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/juninho-pernambucano/profil/spieler/5354",
    "checkedAt": "2026-10-06"
  },
  {
    "id": "kanoute",
    "name": "Frédéric Kanouté",
    "nation": [
      "Mali",
      "Μάλι"
    ],
    "position": [
      "Striker",
      "Επιθετικός"
    ],
    "aliases": [
      "Frédéric Kanouté",
      "Frederic Kanoute",
      "Kanoute",
      "Kanouté"
    ],
    "birthDate": "1977-09-02",
    "highestMarketValue": 22000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/frederic-kanoute/profil/spieler/3700",
    "checkedAt": "2026-10-06"
  },
  {
    "id": "olic",
    "name": "Ivica Olić",
    "nation": [
      "Croatia",
      "Κροατία"
    ],
    "position": [
      "Striker",
      "Επιθετικός"
    ],
    "aliases": [
      "Ivica Olić",
      "Ivica Olic",
      "Olic",
      "Olić"
    ],
    "birthDate": "1979-09-14",
    "highestMarketValue": 12000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/ivica-olic/profil/spieler/7427",
    "checkedAt": "2026-10-06"
  },
  {
    "id": "saviola",
    "name": "Javier Saviola",
    "nation": [
      "Argentina",
      "Αργεντινή"
    ],
    "position": [
      "Second Striker",
      "Δεύτερος επιθετικός"
    ],
    "aliases": [
      "Javier Saviola",
      "Saviola"
    ],
    "birthDate": "1981-12-11",
    "highestMarketValue": 20000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/javier-saviola/profil/spieler/7611",
    "checkedAt": "2026-10-06"
  },
  {
    "id": "luisgarcia",
    "name": "Luis García",
    "nation": [
      "Spain",
      "Ισπανία"
    ],
    "position": [
      "Winger",
      "Εξτρέμ"
    ],
    "aliases": [
      "Luis García",
      "Luis Garcia",
      "Luis Garcia Sanz",
      "Luis Javier Garcia Sanz"
    ],
    "birthDate": "1978-06-24",
    "highestMarketValue": 13000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/luis-garcia/profil/spieler/7920",
    "checkedAt": "2026-10-06"
  },
  {
    "id": "pizarro",
    "name": "Claudio Pizarro",
    "nation": [
      "Peru",
      "Περού"
    ],
    "position": [
      "Striker",
      "Επιθετικός"
    ],
    "aliases": [
      "Claudio Pizarro",
      "Pizarro"
    ],
    "birthDate": "1978-10-03",
    "highestMarketValue": 12000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/claudio-pizarro/profil/spieler/532",
    "checkedAt": "2026-10-06"
  },
  {
    "id": "hyypia",
    "name": "Sami Hyypiä",
    "nation": [
      "Finland",
      "Φινλανδία"
    ],
    "position": [
      "Centre-Back",
      "Κεντρικός αμυντικός"
    ],
    "aliases": [
      "Sami Hyypiä",
      "Sami Hyypia",
      "Hyypia",
      "Hyypiä"
    ],
    "birthDate": "1973-10-07",
    "highestMarketValue": 9000000,
    "status": "retired",
    "source": "https://www.transfermarkt.co.uk/sami-hyypia/profil/spieler/3470",
    "checkedAt": "2026-10-06"
  }
];
const FB_EXCHANGE = {usdPerEuro:1.1225,date:"2026-10-02",source:"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"};
