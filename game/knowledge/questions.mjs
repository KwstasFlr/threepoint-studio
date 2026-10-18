// Original bilingual questions. The first answer in each source row is correct;
// the game shuffles all four choices independently of the question order.
const rows = `
History~Ιστορία|In which year did World War II begin?|Ποια χρονιά ξεκίνησε ο Β΄ Παγκόσμιος Πόλεμος;|1939|1938|1940|1941
History~Ιστορία|In which year did World War II end?|Ποια χρονιά τελείωσε ο Β΄ Παγκόσμιος Πόλεμος;|1945|1943|1944|1946
History~Ιστορία|In which year did World War I begin?|Ποια χρονιά ξεκίνησε ο Α΄ Παγκόσμιος Πόλεμος;|1914|1912|1913|1915
History~Ιστορία|In which year did World War I end?|Ποια χρονιά τελείωσε ο Α΄ Παγκόσμιος Πόλεμος;|1918|1916|1917|1919
History~Ιστορία|In which year did the Berlin Wall fall?|Ποια χρονιά έπεσε το Τείχος του Βερολίνου;|1989|1987|1988|1991
History~Ιστορία|In which year did humans first land on the Moon?|Ποια χρονιά πάτησε για πρώτη φορά άνθρωπος στη Σελήνη;|1969|1967|1968|1971
History~Ιστορία|In which year did the Greek War of Independence begin?|Ποια χρονιά ξεκίνησε η Ελληνική Επανάσταση;|1821|1820|1822|1827
History~Ιστορία|In which year did the French Revolution begin?|Ποια χρονιά ξεκίνησε η Γαλλική Επανάσταση;|1789|1776|1787|1792
History~Ιστορία|In which year did Constantinople fall to the Ottomans?|Ποια χρονιά έπεσε η Κωνσταντινούπολη στους Οθωμανούς;|1453|1451|1456|1461
History~Ιστορία|In which year did the Titanic sink?|Ποια χρονιά βυθίστηκε ο Τιτανικός;|1912|1910|1911|1914
History~Ιστορία|In which year were the first modern Olympic Games held in Athens?|Ποια χρονιά έγιναν στην Αθήνα οι πρώτοι σύγχρονοι Ολυμπιακοί Αγώνες;|1896|1892|1900|1904
History~Ιστορία|In which year did Athens host the Summer Olympics for the second time?|Ποια χρονιά φιλοξένησε η Αθήνα για δεύτερη φορά τους Θερινούς Ολυμπιακούς Αγώνες;|2004|2000|2008|1996
History~Ιστορία|Who was the first president of the United States?|Ποιος ήταν ο πρώτος πρόεδρος των ΗΠΑ;|George Washington~Τζορτζ Ουάσινγκτον|Thomas Jefferson~Τόμας Τζέφερσον|John Adams~Τζον Άνταμς|James Madison~Τζέιμς Μάντισον
History~Ιστορία|Which ancient Greek city-state is associated with King Leonidas?|Με ποια αρχαία ελληνική πόλη-κράτος συνδέεται ο βασιλιάς Λεωνίδας;|Sparta~Σπάρτη|Athens~Αθήνα|Thebes~Θήβα|Corinth~Κόρινθος
History~Ιστορία|At which battle was Napoleon finally defeated in 1815?|Σε ποια μάχη ηττήθηκε οριστικά ο Ναπολέων το 1815;|Waterloo~Βατερλώ|Austerlitz~Άουστερλιτς|Trafalgar~Τραφάλγκαρ|Borodino~Μποροντίνο
History~Ιστορία|Which civilization built Machu Picchu?|Ποιος πολιτισμός έχτισε το Μάτσου Πίτσου;|Inca~Ίνκας|Maya~Μάγια|Aztec~Αζτέκοι|Olmec~Ολμέκοι
Geography~Γεωγραφία|What is the capital of Australia?|Ποια είναι η πρωτεύουσα της Αυστραλίας;|Canberra~Καμπέρα|Sydney~Σίδνεϊ|Melbourne~Μελβούρνη|Perth~Περθ
Geography~Γεωγραφία|What is the capital of Canada?|Ποια είναι η πρωτεύουσα του Καναδά;|Ottawa~Οτάβα|Toronto~Τορόντο|Montreal~Μόντρεαλ|Vancouver~Βανκούβερ
Geography~Γεωγραφία|What is the capital of Brazil?|Ποια είναι η πρωτεύουσα της Βραζιλίας;|Brasília~Μπραζίλια|Rio de Janeiro~Ρίο ντε Τζανέιρο|São Paulo~Σάο Πάολο|Salvador~Σαλβαδόρ
Geography~Γεωγραφία|What is the capital of Switzerland?|Ποια πόλη είναι η ομοσπονδιακή πρωτεύουσα της Ελβετίας;|Bern~Βέρνη|Geneva~Γενεύη|Zurich~Ζυρίχη|Basel~Βασιλεία
Geography~Γεωγραφία|What is the capital of Türkiye?|Ποια είναι η πρωτεύουσα της Τουρκίας;|Ankara~Άγκυρα|Istanbul~Κωνσταντινούπολη|Izmir~Σμύρνη|Bursa~Προύσα
Geography~Γεωγραφία|What is the capital of Portugal?|Ποια είναι η πρωτεύουσα της Πορτογαλίας;|Lisbon~Λισαβόνα|Porto~Πόρτο|Braga~Μπράγκα|Coimbra~Κοΐμπρα
Geography~Γεωγραφία|Which country contains the city of Kyoto?|Σε ποια χώρα βρίσκεται το Κιότο;|Japan~Ιαπωνία|South Korea~Νότια Κορέα|China~Κίνα|Vietnam~Βιετνάμ
Geography~Γεωγραφία|Which river flows through Budapest?|Ποιος ποταμός διασχίζει τη Βουδαπέστη;|Danube~Δούναβης|Rhine~Ρήνος|Elbe~Έλβας|Vistula~Βιστούλας
Geography~Γεωγραφία|Which river flows through Paris?|Ποιος ποταμός διασχίζει το Παρίσι;|Seine~Σηκουάνας|Loire~Λίγηρας|Rhône~Ροδανός|Garonne~Γαρούνας
Geography~Γεωγραφία|Which is the largest Greek island by area?|Ποιο είναι το μεγαλύτερο ελληνικό νησί σε έκταση;|Crete~Κρήτη|Euboea~Εύβοια|Lesbos~Λέσβος|Rhodes~Ρόδος
Geography~Γεωγραφία|Which is the highest mountain in Greece?|Ποιο είναι το ψηλότερο βουνό της Ελλάδας;|Olympus~Όλυμπος|Smolikas~Σμόλικας|Gramos~Γράμμος|Giona~Γκιώνα
Geography~Γεωγραφία|Which ocean is the largest by surface area?|Ποιος ωκεανός έχει τη μεγαλύτερη επιφάνεια;|Pacific~Ειρηνικός|Atlantic~Ατλαντικός|Indian~Ινδικός|Arctic~Αρκτικός
Geography~Γεωγραφία|Which country contains the ancient city of Petra?|Σε ποια χώρα βρίσκεται η αρχαία πόλη Πέτρα;|Jordan~Ιορδανία|Egypt~Αίγυπτος|Lebanon~Λίβανος|Syria~Συρία
Geography~Γεωγραφία|Which country has the city of Marrakech?|Σε ποια χώρα βρίσκεται το Μαρακές;|Morocco~Μαρόκο|Tunisia~Τυνησία|Algeria~Αλγερία|Egypt~Αίγυπτος
Geography~Γεωγραφία|Which sea lies between Italy and Croatia?|Ποια θάλασσα βρίσκεται ανάμεσα στην Ιταλία και την Κροατία;|Adriatic~Αδριατική|Ionian~Ιόνιο|Tyrrhenian~Τυρρηνική|Aegean~Αιγαίο
Geography~Γεωγραφία|Which of these countries does NOT border Greece?|Ποια από αυτές τις χώρες ΔΕΝ συνορεύει με την Ελλάδα;|Serbia~Σερβία|Bulgaria~Βουλγαρία|Albania~Αλβανία|North Macedonia~Βόρεια Μακεδονία
Science~Επιστήμη|Which chemical element has the symbol Na?|Ποιο χημικό στοιχείο έχει σύμβολο Na;|Sodium~Νάτριο|Nitrogen~Άζωτο|Neon~Νέον|Nickel~Νικέλιο
Science~Επιστήμη|Which chemical element has the symbol K?|Ποιο χημικό στοιχείο έχει σύμβολο K;|Potassium~Κάλιο|Calcium~Ασβέστιο|Krypton~Κρυπτόν|Cobalt~Κοβάλτιο
Science~Επιστήμη|Which chemical element has the symbol Fe?|Ποιο χημικό στοιχείο έχει σύμβολο Fe;|Iron~Σίδηρος|Fluorine~Φθόριο|Copper~Χαλκός|Lead~Μόλυβδος
Science~Επιστήμη|Which chemical element has the symbol Ag?|Ποιο χημικό στοιχείο έχει σύμβολο Ag;|Silver~Άργυρος|Gold~Χρυσός|Argon~Αργό|Aluminium~Αλουμίνιο
Science~Επιστήμη|Which gas makes up most of Earth's atmosphere?|Ποιο αέριο αποτελεί το μεγαλύτερο μέρος της γήινης ατμόσφαιρας;|Nitrogen~Άζωτο|Oxygen~Οξυγόνο|Carbon dioxide~Διοξείδιο του άνθρακα|Argon~Αργό
Science~Επιστήμη|Which planet is closest to the Sun?|Ποιος πλανήτης βρίσκεται πιο κοντά στον Ήλιο;|Mercury~Ερμής|Venus~Αφροδίτη|Earth~Γη|Mars~Άρης
Science~Επιστήμη|Which planet has the highest average surface temperature?|Ποιος πλανήτης έχει την υψηλότερη μέση θερμοκρασία επιφάνειας;|Venus~Αφροδίτη|Mercury~Ερμής|Mars~Άρης|Jupiter~Δίας
Science~Επιστήμη|Which planet is the largest in our solar system?|Ποιος είναι ο μεγαλύτερος πλανήτης του ηλιακού μας συστήματος;|Jupiter~Δίας|Saturn~Κρόνος|Neptune~Ποσειδώνας|Uranus~Ουρανός
Science~Επιστήμη|What is the SI unit of electrical resistance?|Ποια είναι η μονάδα ηλεκτρικής αντίστασης στο SI;|Ohm~Ωμ|Volt~Βολτ|Ampere~Αμπέρ|Watt~Βατ
Science~Επιστήμη|What is the SI unit of force?|Ποια είναι η μονάδα δύναμης στο SI;|Newton~Νιούτον|Joule~Τζάουλ|Pascal~Πασκάλ|Watt~Βατ
Science~Επιστήμη|At standard atmospheric pressure, at what temperature does pure water boil?|Σε κανονική ατμοσφαιρική πίεση, σε ποια θερμοκρασία βράζει το καθαρό νερό;|100 °C|90 °C|95 °C|110 °C
Science~Επιστήμη|How many bones are typically in an adult human skeleton?|Πόσα οστά έχει συνήθως ο σκελετός ενός ενήλικου ανθρώπου;|206|196|216|226
Science~Επιστήμη|Which organ produces insulin?|Ποιο όργανο παράγει ινσουλίνη;|Pancreas~Πάγκρεας|Liver~Ήπαρ|Spleen~Σπλήνας|Kidney~Νεφρός
Science~Επιστήμη|Which blood cells mainly carry oxygen?|Ποια κύτταρα του αίματος μεταφέρουν κυρίως οξυγόνο;|Red blood cells~Ερυθρά αιμοσφαίρια|White blood cells~Λευκά αιμοσφαίρια|Platelets~Αιμοπετάλια|Lymphocytes~Λεμφοκύτταρα
Nature~Φύση|Which of these animals is a mammal?|Ποιο από αυτά τα ζώα είναι θηλαστικό;|Dolphin~Δελφίνι|Shark~Καρχαρίας|Tuna~Τόνος|Swordfish~Ξιφίας
Nature~Φύση|Which bird is the largest living bird by height and mass?|Ποιο είναι το μεγαλύτερο ζωντανό πτηνό σε ύψος και βάρος;|Ostrich~Στρουθοκάμηλος|Emu~Εμού|Cassowary~Κασουάριος|Rhea~Ναντού
Nature~Φύση|Which is the fastest land animal over short distances?|Ποιο είναι το ταχύτερο χερσαίο ζώο σε μικρές αποστάσεις;|Cheetah~Γατόπαρδος|Leopard~Λεοπάρδαλη|Lion~Λιοντάρι|Jaguar~Ιαγουάρος
Nature~Φύση|Which animal is the largest living species on Earth?|Ποιο ζώο είναι το μεγαλύτερο ζωντανό είδος στη Γη;|Blue whale~Γαλάζια φάλαινα|Fin whale~Πτεροφάλαινα|Sperm whale~Φυσητήρας|Whale shark~Φαλαινοκαρχαρίας
Nature~Φύση|Which of these trees is a conifer?|Ποιο από αυτά τα δέντρα είναι κωνοφόρο;|Pine~Πεύκο|Oak~Βελανιδιά|Olive~Ελιά|Plane tree~Πλάτανος
Nature~Φύση|Which vitamin can human skin produce with sunlight exposure?|Ποια βιταμίνη μπορεί να παράγει το ανθρώπινο δέρμα με την έκθεση στον ήλιο;|Vitamin D~Βιταμίνη D|Vitamin C~Βιταμίνη C|Vitamin B12~Βιταμίνη B12|Vitamin K~Βιταμίνη K
Arts~Τέχνες|Who painted The Persistence of Memory with its melting clocks?|Ποιος ζωγράφισε την «Εμμονή της Μνήμης» με τα λιωμένα ρολόγια;|Salvador Dalí~Σαλβαδόρ Νταλί|René Magritte~Ρενέ Μαγκρίτ|Joan Miró~Ζουάν Μιρό|Pablo Picasso~Πάμπλο Πικάσο
Arts~Τέχνες|Who painted Guernica?|Ποιος ζωγράφισε την «Γκερνίκα»;|Pablo Picasso~Πάμπλο Πικάσο|Salvador Dalí~Σαλβαδόρ Νταλί|Diego Rivera~Ντιέγκο Ριβέρα|Francisco Goya~Φρανθίσκο Γκόγια
Arts~Τέχνες|Who painted The Starry Night in 1889?|Ποιος ζωγράφισε την «Έναστρη Νύχτα» το 1889;|Vincent van Gogh~Βίνσεντ βαν Γκογκ|Claude Monet~Κλοντ Μονέ|Paul Cézanne~Πολ Σεζάν|Paul Gauguin~Πολ Γκογκέν
Arts~Τέχνες|Who composed The Four Seasons?|Ποιος συνέθεσε τις «Τέσσερις Εποχές»;|Antonio Vivaldi~Αντόνιο Βιβάλντι|Johann Sebastian Bach~Γιόχαν Σεμπάστιαν Μπαχ|George Frideric Handel~Γκέοργκ Φρίντριχ Χέντελ|Arcangelo Corelli~Αρκάντζελο Κορέλι
Arts~Τέχνες|Who composed The Magic Flute?|Ποιος συνέθεσε τον «Μαγικό Αυλό»;|Wolfgang Amadeus Mozart~Βόλφγκανγκ Αμαντέους Μότσαρτ|Ludwig van Beethoven~Λούντβιχ βαν Μπετόβεν|Franz Schubert~Φραντς Σούμπερτ|Joseph Haydn~Γιόζεφ Χάιντν
Literature~Λογοτεχνία|Who wrote the novel 1984?|Ποιος έγραψε το μυθιστόρημα «1984»;|George Orwell~Τζορτζ Όργουελ|Aldous Huxley~Άλντους Χάξλεϊ|Ray Bradbury~Ρέι Μπράντμπερι|H. G. Wells~Χ. Τζ. Γουέλς
Literature~Λογοτεχνία|Who wrote The Little Prince?|Ποιος έγραψε τον «Μικρό Πρίγκιπα»;|Antoine de Saint-Exupéry~Αντουάν ντε Σαιντ-Εξυπερύ|Jules Verne~Ιούλιος Βερν|Victor Hugo~Βίκτωρ Ουγκώ|Albert Camus~Αλμπέρ Καμύ
Literature~Λογοτεχνία|Who wrote Pride and Prejudice?|Ποια έγραψε το «Περηφάνια και Προκατάληψη»;|Jane Austen~Τζέιν Όστεν|Charlotte Brontë~Σαρλότ Μπροντέ|Emily Brontë~Έμιλι Μπροντέ|Virginia Woolf~Βιρτζίνια Γουλφ
Literature~Λογοτεχνία|Which Greek poet received the Nobel Prize in Literature in 1963?|Ποιος Έλληνας ποιητής πήρε το Νόμπελ Λογοτεχνίας το 1963;|Giorgos Seferis~Γιώργος Σεφέρης|Odysseas Elytis~Οδυσσέας Ελύτης|Yannis Ritsos~Γιάννης Ρίτσος|Kostas Varnalis~Κώστας Βάρναλης
Literature~Λογοτεχνία|Which Greek poet received the Nobel Prize in Literature in 1979?|Ποιος Έλληνας ποιητής πήρε το Νόμπελ Λογοτεχνίας το 1979;|Odysseas Elytis~Οδυσσέας Ελύτης|Giorgos Seferis~Γιώργος Σεφέρης|Yannis Ritsos~Γιάννης Ρίτσος|Nikos Gatsos~Νίκος Γκάτσος
Sport~Αθλητισμός|In which year did Greece win the men's UEFA European Championship?|Ποια χρονιά κατέκτησε η Ελλάδα το Ευρωπαϊκό Πρωτάθλημα ποδοσφαίρου ανδρών;|2004|2000|2008|2012
Sport~Αθλητισμός|Which country won the men's football World Cup in 2010?|Ποια χώρα κατέκτησε το Μουντιάλ ανδρών το 2010;|Spain~Ισπανία|Netherlands~Ολλανδία|Germany~Γερμανία|Italy~Ιταλία
Sport~Αθλητισμός|Which country won the men's football World Cup in 2006?|Ποια χώρα κατέκτησε το Μουντιάλ ανδρών το 2006;|Italy~Ιταλία|France~Γαλλία|Germany~Γερμανία|Brazil~Βραζιλία
Sport~Αθλητισμός|How many players per team are on court in standard basketball?|Πόσοι παίκτες κάθε ομάδας βρίσκονται στο παρκέ στο κλασικό μπάσκετ;|5|4|6|7
Sport~Αθλητισμός|How many players per team are on court in indoor volleyball?|Πόσοι παίκτες κάθε ομάδας βρίσκονται στο γήπεδο στο βόλεϊ σάλας;|6|5|7|8
Sport~Αθλητισμός|Which tennis Grand Slam is played on grass?|Ποιο Grand Slam του τένις διεξάγεται σε χόρτο;|Wimbledon~Γουίμπλεντον|Roland-Garros~Ρολάν Γκαρός|US Open|Australian Open
Sport~Αθλητισμός|How long is an official marathon?|Ποια είναι η επίσημη απόσταση του μαραθωνίου;|42.195 km~42,195 χλμ.|42 km~42 χλμ.|41.195 km~41,195 χλμ.|42.5 km~42,5 χλμ.
Maths~Μαθηματικά|What is the sum of the interior angles of a triangle in Euclidean geometry?|Πόσο είναι το άθροισμα των εσωτερικών γωνιών ενός τριγώνου στην ευκλείδεια γεωμετρία;|180°|160°|200°|360°
Maths~Μαθηματικά|Which of these numbers is prime?|Ποιος από αυτούς τους αριθμούς είναι πρώτος;|29|27|33|39
Maths~Μαθηματικά|What is the square root of 144?|Ποια είναι η τετραγωνική ρίζα του 144;|12|11|13|14
Maths~Μαθηματικά|How many sides does a hexagon have?|Πόσες πλευρές έχει ένα εξάγωνο;|6|5|7|8
Technology~Τεχνολογία|What does the H in HTML stand for?|Τι σημαίνει το H στο HTML;|HyperText~Υπερκείμενο|High~Υψηλό|Hybrid~Υβριδικό|Hosted~Φιλοξενούμενο
Technology~Τεχνολογία|Which company originally released the PlayStation console?|Ποια εταιρεία κυκλοφόρησε την πρώτη κονσόλα PlayStation;|Sony|Sega|Nintendo|Microsoft
Technology~Τεχνολογία|Which company created the Game Boy?|Ποια εταιρεία δημιούργησε το Game Boy;|Nintendo|Sega|Sony|Atari
Technology~Τεχνολογία|Which of these is an operating system rather than a web browser?|Ποιο από αυτά είναι λειτουργικό σύστημα και όχι browser;|Ubuntu|Firefox|Opera|Safari
Food~Γεύσεις|Which cheese is traditionally used in a classic Greek village salad?|Ποιο τυρί χρησιμοποιείται παραδοσιακά στην κλασική χωριάτικη σαλάτα;|Feta~Φέτα|Manouri~Μανούρι|Graviera~Γραβιέρα|Kasseri~Κασέρι
Food~Γεύσεις|Which nut is the traditional base of marzipan?|Ποιος ξηρός καρπός είναι η παραδοσιακή βάση του μάρτσιπαν;|Almond~Αμύγδαλο|Hazelnut~Φουντούκι|Walnut~Καρύδι|Pistachio~Φιστίκι Αιγίνης
Food~Γεύσεις|Which spice comes from the dried stigmas of a crocus flower?|Ποιο μπαχαρικό προέρχεται από τα αποξηραμένα στίγματα άνθους κρόκου;|Saffron~Σαφράν|Turmeric~Κουρκουμάς|Cardamom~Κάρδαμο|Cumin~Κύμινο
History~Ιστορία|In which year was Magna Carta first issued?|Ποια χρονιά εκδόθηκε για πρώτη φορά η Μάγκνα Κάρτα;|1215|1205|1225|1235
History~Ιστορία|In which year did Columbus first reach the Americas?|Ποια χρονιά έφτασε για πρώτη φορά ο Κολόμβος στην Αμερική;|1492|1482|1502|1512
History~Ιστορία|In which year was the United States Declaration of Independence adopted?|Ποια χρονιά υιοθετήθηκε η Διακήρυξη της Ανεξαρτησίας των ΗΠΑ;|1776|1766|1786|1789
History~Ιστορία|Who was the first Roman emperor?|Ποιος ήταν ο πρώτος Ρωμαίος αυτοκράτορας;|Augustus~Αύγουστος|Julius Caesar~Ιούλιος Καίσαρας|Nero~Νέρων|Trajan~Τραϊανός
History~Ιστορία|Which philosopher was a tutor to Alexander the Great?|Ποιος φιλόσοφος υπήρξε δάσκαλος του Μεγάλου Αλεξάνδρου;|Aristotle~Αριστοτέλης|Socrates~Σωκράτης|Plato~Πλάτων|Epicurus~Επίκουρος
History~Ιστορία|Who was the first person to walk on the Moon?|Ποιος ήταν ο πρώτος άνθρωπος που περπάτησε στη Σελήνη;|Neil Armstrong~Νιλ Άρμστρονγκ|Buzz Aldrin~Μπαζ Όλντριν|Yuri Gagarin~Γιούρι Γκαγκάριν|Michael Collins~Μάικλ Κόλινς
History~Ιστορία|In which country were the pyramids of Giza built?|Σε ποια χώρα χτίστηκαν οι πυραμίδες της Γκίζας;|Egypt~Αίγυπτος|Sudan~Σουδάν|Iraq~Ιράκ|Mexico~Μεξικό
History~Ιστορία|Which city hosted the congress that reorganized Europe in 1814–1815?|Ποια πόλη φιλοξένησε το συνέδριο που αναδιοργάνωσε την Ευρώπη το 1814–1815;|Vienna~Βιέννη|Paris~Παρίσι|Berlin~Βερολίνο|Prague~Πράγα
History~Ιστορία|Who is associated with the movable-type printing press in 15th-century Europe?|Ποιος συνδέεται με το τυπογραφικό πιεστήριο κινητών στοιχείων στην Ευρώπη του 15ου αιώνα;|Johannes Gutenberg~Γιοχάνες Γουτεμβέργιος|Galileo Galilei~Γαλιλαίος Γαλιλέι|Leonardo da Vinci~Λεονάρντο ντα Βίντσι|Nicolaus Copernicus~Νικόλαος Κοπέρνικος
History~Ιστορία|Where were the ancient Olympic Games held?|Πού διεξάγονταν οι αρχαίοι Ολυμπιακοί Αγώνες;|Olympia~Ολυμπία|Athens~Αθήνα|Delphi~Δελφοί|Sparta~Σπάρτη
Geography~Γεωγραφία|In which country is the Taj Mahal?|Σε ποια χώρα βρίσκεται το Ταζ Μαχάλ;|India~Ινδία|Pakistan~Πακιστάν|Bangladesh~Μπανγκλαντές|Nepal~Νεπάλ
Geography~Γεωγραφία|In which country is the Great Wall?|Σε ποια χώρα βρίσκεται το Σινικό Τείχος;|China~Κίνα|Japan~Ιαπωνία|Mongolia~Μογγολία|South Korea~Νότια Κορέα
Geography~Γεωγραφία|What is the capital of Italy?|Ποια είναι η πρωτεύουσα της Ιταλίας;|Rome~Ρώμη|Milan~Μιλάνο|Florence~Φλωρεντία|Naples~Νάπολη
Geography~Γεωγραφία|What is the capital of France?|Ποια είναι η πρωτεύουσα της Γαλλίας;|Paris~Παρίσι|Lyon~Λυών|Marseille~Μασσαλία|Bordeaux~Μπορντό
Geography~Γεωγραφία|What is the capital of Germany?|Ποια είναι η πρωτεύουσα της Γερμανίας;|Berlin~Βερολίνο|Munich~Μόναχο|Hamburg~Αμβούργο|Frankfurt~Φρανκφούρτη
Geography~Γεωγραφία|What is the capital of Egypt?|Ποια είναι η πρωτεύουσα της Αιγύπτου;|Cairo~Κάιρο|Alexandria~Αλεξάνδρεια|Luxor~Λούξορ|Aswan~Ασουάν
Geography~Γεωγραφία|On which continent are the Andes?|Σε ποια ήπειρο βρίσκονται οι Άνδεις;|South America~Νότια Αμερική|North America~Βόρεια Αμερική|Asia~Ασία|Europe~Ευρώπη
Geography~Γεωγραφία|On which continent is the Sahara Desert?|Σε ποια ήπειρο βρίσκεται η έρημος Σαχάρα;|Africa~Αφρική|Asia~Ασία|Australia~Αυστραλία|South America~Νότια Αμερική
Geography~Γεωγραφία|On which continent is Mount Everest?|Σε ποια ήπειρο βρίσκεται το Έβερεστ;|Asia~Ασία|Europe~Ευρώπη|Africa~Αφρική|South America~Νότια Αμερική
Geography~Γεωγραφία|Which sea lies between mainland Greece and western Türkiye?|Ποιο πέλαγος βρίσκεται ανάμεσα στην ηπειρωτική Ελλάδα και τη δυτική Τουρκία;|Aegean~Αιγαίο|Ionian~Ιόνιο|Adriatic~Αδριατική|Tyrrhenian~Τυρρηνική
Science~Επιστήμη|What is the chemical formula of water?|Ποιος είναι ο χημικός τύπος του νερού;|H₂O|CO₂|H₂O₂|O₂
Science~Επιστήμη|What is the chemical symbol for gold?|Ποιο είναι το χημικό σύμβολο του χρυσού;|Au|Ag|Cu|Fe
Science~Επιστήμη|How many planets are in our solar system?|Πόσοι πλανήτες υπάρχουν στο ηλιακό μας σύστημα;|8|7|9|10
Science~Επιστήμη|Which planet is known as the Red Planet?|Ποιος πλανήτης είναι γνωστός ως Κόκκινος Πλανήτης;|Mars~Άρης|Venus~Αφροδίτη|Mercury~Ερμής|Jupiter~Δίας
Science~Επιστήμη|What is Earth's natural satellite called?|Πώς ονομάζεται ο φυσικός δορυφόρος της Γης;|The Moon~Σελήνη|Titan~Τιτάνας|Europa~Ευρώπη|Phobos~Φόβος
Science~Επιστήμη|Which gas do plants absorb from the air during photosynthesis?|Ποιο αέριο απορροφούν τα φυτά από τον αέρα κατά τη φωτοσύνθεση;|Carbon dioxide~Διοξείδιο του άνθρακα|Oxygen~Οξυγόνο|Nitrogen~Άζωτο|Helium~Ήλιο
Science~Επιστήμη|Which organ pumps blood around the human body?|Ποιο όργανο αντλεί αίμα σε όλο το ανθρώπινο σώμα;|Heart~Καρδιά|Liver~Ήπαρ|Lung~Πνεύμονας|Stomach~Στομάχι
Science~Επιστήμη|Which is the largest organ of the human body?|Ποιο είναι το μεγαλύτερο όργανο του ανθρώπινου σώματος;|Skin~Δέρμα|Liver~Ήπαρ|Brain~Εγκέφαλος|Heart~Καρδιά
Science~Επιστήμη|What electrical charge does an electron carry?|Τι ηλεκτρικό φορτίο έχει ένα ηλεκτρόνιο;|Negative~Αρνητικό|Positive~Θετικό|Zero~Μηδενικό|Alternating~Εναλλασσόμενο
Science~Επιστήμη|Approximately how fast does light travel in a vacuum?|Περίπου πόσο γρήγορα ταξιδεύει το φως στο κενό;|300,000 km/s~300.000 χλμ./δευτ.|30,000 km/s~30.000 χλμ./δευτ.|150,000 km/s~150.000 χλμ./δευτ.|450,000 km/s~450.000 χλμ./δευτ.
Arts~Τέχνες|Who painted the Mona Lisa?|Ποιος ζωγράφισε τη «Μόνα Λίζα»;|Leonardo da Vinci~Λεονάρντο ντα Βίντσι|Michelangelo~Μιχαήλ Άγγελος|Raphael~Ραφαήλ|Sandro Botticelli~Σάντρο Μποτιτσέλι
Arts~Τέχνες|Who painted the ceiling of the Sistine Chapel?|Ποιος ζωγράφισε την οροφή της Καπέλα Σιξτίνα;|Michelangelo~Μιχαήλ Άγγελος|Leonardo da Vinci~Λεονάρντο ντα Βίντσι|Raphael~Ραφαήλ|Caravaggio~Καραβάτζιο
Literature~Λογοτεχνία|Who wrote Hamlet?|Ποιος έγραψε τον «Άμλετ»;|William Shakespeare~Ουίλιαμ Σαίξπηρ|Charles Dickens~Τσαρλς Ντίκενς|Oscar Wilde~Όσκαρ Ουάιλντ|George Bernard Shaw~Τζορτζ Μπέρναρντ Σο
Literature~Λογοτεχνία|To which ancient poet is the Odyssey traditionally attributed?|Σε ποιον αρχαίο ποιητή αποδίδεται παραδοσιακά η «Οδύσσεια»;|Homer~Όμηρος|Hesiod~Ησίοδος|Sophocles~Σοφοκλής|Euripides~Ευριπίδης
Literature~Λογοτεχνία|Who wrote Don Quixote?|Ποιος έγραψε τον «Δον Κιχώτη»;|Miguel de Cervantes~Μιγκέλ ντε Θερβάντες|Federico García Lorca~Φεντερίκο Γκαρθία Λόρκα|Gabriel García Márquez~Γκαμπριέλ Γκαρθία Μάρκες|Pablo Neruda~Πάμπλο Νερούδα
Literature~Λογοτεχνία|Who wrote the Harry Potter novels?|Ποια έγραψε τα μυθιστορήματα του Χάρι Πότερ;|J. K. Rowling~Τζ. Κ. Ρόουλινγκ|Suzanne Collins~Σούζαν Κόλινς|Stephenie Meyer~Στέφενι Μάιερ|Agatha Christie~Άγκαθα Κρίστι
Arts~Τέχνες|Who composed Swan Lake?|Ποιος συνέθεσε τη «Λίμνη των Κύκνων»;|Pyotr Ilyich Tchaikovsky~Πιοτρ Ίλιτς Τσαϊκόφσκι|Igor Stravinsky~Ίγκορ Στραβίνσκι|Sergei Prokofiev~Σεργκέι Προκόφιεφ|Sergei Rachmaninoff~Σεργκέι Ραχμάνινοφ
Arts~Τέχνες|How many keys does a standard full-size modern piano have?|Πόσα πλήκτρα έχει ένα σύγχρονο πιάνο τυπικού πλήρους μεγέθους;|88|76|84|96
Arts~Τέχνες|Which composer's Ninth Symphony includes the Ode to Joy?|Ποιου συνθέτη η Ενάτη Συμφωνία περιλαμβάνει την «Ωδή στη Χαρά»;|Ludwig van Beethoven~Λούντβιχ βαν Μπετόβεν|Wolfgang Amadeus Mozart~Βόλφγκανγκ Αμαντέους Μότσαρτ|Joseph Haydn~Γιόζεφ Χάιντν|Franz Schubert~Φραντς Σούμπερτ
Arts~Τέχνες|Who sculpted the marble David displayed in Florence's Accademia?|Ποιος φιλοτέχνησε τον μαρμάρινο «Δαβίδ» που εκτίθεται στην Ακαδημία της Φλωρεντίας;|Michelangelo~Μιχαήλ Άγγελος|Donatello~Ντονατέλο|Gian Lorenzo Bernini~Τζαν Λορέντσο Μπερνίνι|Auguste Rodin~Ογκίστ Ροντέν
Sport~Αθλητισμός|How many players does a football team start with on the pitch, including the goalkeeper?|Με πόσους παίκτες ξεκινά μια ομάδα ποδοσφαίρου στο γήπεδο, μαζί με τον τερματοφύλακα;|11|10|12|9
Sport~Αθλητισμός|How long is a standard football match, excluding stoppage time and extra time?|Πόσο διαρκεί ένας κανονικός αγώνας ποδοσφαίρου, χωρίς καθυστερήσεις και παράταση;|90 minutes~90 λεπτά|80 minutes~80 λεπτά|100 minutes~100 λεπτά|120 minutes~120 λεπτά
Sport~Αθλητισμός|How many rings are in the Olympic symbol?|Πόσοι κύκλοι υπάρχουν στο Ολυμπιακό σύμβολο;|5|4|6|7
Sport~Αθλητισμός|Which country won the men's football World Cup in 2002?|Ποια χώρα κατέκτησε το Μουντιάλ ανδρών το 2002;|Brazil~Βραζιλία|Germany~Γερμανία|France~Γαλλία|Argentina~Αργεντινή
Sport~Αθλητισμός|Which country won the men's football World Cup in 2022?|Ποια χώρα κατέκτησε το Μουντιάλ ανδρών το 2022;|Argentina~Αργεντινή|France~Γαλλία|Brazil~Βραζιλία|Croatia~Κροατία
Sport~Αθλητισμός|Which country won the men's football World Cup in 2014?|Ποια χώρα κατέκτησε το Μουντιάλ ανδρών το 2014;|Germany~Γερμανία|Argentina~Αργεντινή|Brazil~Βραζιλία|Netherlands~Ολλανδία
Sport~Αθλητισμός|Which country won the men's UEFA European Championship in 2016?|Ποια χώρα κατέκτησε το Ευρωπαϊκό Πρωτάθλημα ποδοσφαίρου ανδρών το 2016;|Portugal~Πορτογαλία|France~Γαλλία|Spain~Ισπανία|Germany~Γερμανία
Sport~Αθλητισμός|In which sport did Michael Phelps win his Olympic medals?|Σε ποιο άθλημα κέρδισε τα Ολυμπιακά του μετάλλια ο Μάικλ Φελπς;|Swimming~Κολύμβηση|Athletics~Στίβος|Rowing~Κωπηλασία|Diving~Καταδύσεις
Sport~Αθλητισμός|In which sport did Michael Jordan become a global star?|Σε ποιο άθλημα έγινε παγκόσμιος σταρ ο Μάικλ Τζόρνταν;|Basketball~Μπάσκετ|Baseball~Μπέιζμπολ|American football~Αμερικανικό ποδόσφαιρο|Ice hockey~Χόκεϊ επί πάγου
Sport~Αθλητισμός|Which country did Usain Bolt represent at the Olympics?|Ποια χώρα εκπροσώπησε ο Γιουσέιν Μπολτ στους Ολυμπιακούς Αγώνες;|Jamaica~Τζαμάικα|United States~ΗΠΑ|Trinidad and Tobago~Τρινιντάντ και Τομπάγκο|Bahamas~Μπαχάμες
Culture~Πολιτισμός|Who was the king of the Olympian gods in Greek mythology?|Ποιος ήταν ο βασιλιάς των θεών του Ολύμπου στην ελληνική μυθολογία;|Zeus~Δίας|Poseidon~Ποσειδώνας|Hades~Άδης|Apollo~Απόλλωνας
Culture~Πολιτισμός|Who was the god of the sea in Greek mythology?|Ποιος ήταν ο θεός της θάλασσας στην ελληνική μυθολογία;|Poseidon~Ποσειδώνας|Zeus~Δίας|Hermes~Ερμής|Ares~Άρης
Culture~Πολιτισμός|Which Greek goddess was associated with wisdom?|Ποια ελληνική θεά συνδεόταν με τη σοφία;|Athena~Αθηνά|Aphrodite~Αφροδίτη|Artemis~Άρτεμη|Demeter~Δήμητρα
Culture~Πολιτισμός|Which Greek god was known as the messenger of the gods?|Ποιος Έλληνας θεός ήταν γνωστός ως αγγελιοφόρος των θεών;|Hermes~Ερμής|Hephaestus~Ήφαιστος|Ares~Άρης|Dionysus~Διόνυσος
Culture~Πολιτισμός|Which Norse god is associated with the hammer Mjölnir?|Ποιος θεός της σκανδιναβικής μυθολογίας συνδέεται με το σφυρί Μιόλνιρ;|Thor~Θορ|Odin~Όντιν|Loki~Λόκι|Tyr~Τιρ
Culture~Πολιτισμός|How many signs are in the traditional Western zodiac?|Πόσα ζώδια έχει ο παραδοσιακός δυτικός ζωδιακός κύκλος;|12|10|11|13
Arts~Τέχνες|How many strings does a standard classical guitar have?|Πόσες χορδές έχει μια τυπική κλασική κιθάρα;|6|4|5|7
Arts~Τέχνες|In which English city were the Beatles formed?|Σε ποια αγγλική πόλη σχηματίστηκαν οι Beatles;|Liverpool~Λίβερπουλ|Manchester~Μάντσεστερ|London~Λονδίνο|Birmingham~Μπέρμιγχαμ
Arts~Τέχνες|Which band had Freddie Mercury as its lead singer?|Ποιο συγκρότημα είχε βασικό τραγουδιστή τον Φρέντι Μέρκιουρι;|Queen|Led Zeppelin|Pink Floyd|The Rolling Stones
Arts~Τέχνες|Which artist released the album Thriller in 1982?|Ποιος καλλιτέχνης κυκλοφόρησε το άλμπουμ «Thriller» το 1982;|Michael Jackson~Μάικλ Τζάκσον|Prince~Πρινς|Stevie Wonder~Στίβι Γουόντερ|Lionel Richie~Λάιονελ Ρίτσι
Maths~Μαθηματικά|What is 15% of 200?|Πόσο είναι το 15% του 200;|30|20|25|35
Maths~Μαθηματικά|Which number does the Roman numeral X represent?|Ποιον αριθμό συμβολίζει το λατινικό X;|10|5|50|100
Maths~Μαθηματικά|What is 7 multiplied by 8?|Πόσο κάνει 7 επί 8;|56|48|54|64
Maths~Μαθηματικά|How many sides does an octagon have?|Πόσες πλευρές έχει ένα οκτάγωνο;|8|6|7|9
Maths~Μαθηματικά|How many metres are in one kilometre?|Πόσα μέτρα έχει ένα χιλιόμετρο;|1,000~1.000|100|10,000~10.000|100,000~100.000
Technology~Τεχνολογία|What base does the binary number system use?|Ποια βάση χρησιμοποιεί το δυαδικό αριθμητικό σύστημα;|2|8|10|16
Technology~Τεχνολογία|What does the P in CPU stand for?|Τι σημαίνει το P στο CPU;|Processing~Επεξεργασία|Programming~Προγραμματισμός|Power~Ισχύς|Peripheral~Περιφερειακό
Technology~Τεχνολογία|What does the U in USB stand for?|Τι σημαίνει το U στο USB;|Universal~Καθολικό|Unified~Ενοποιημένο|Unique~Μοναδικό|User~Χρήστης
Technology~Τεχνολογία|What does WWW stand for?|Τι σημαίνουν τα αρχικά WWW;|World Wide Web~Παγκόσμιος Ιστός|World Web Window~Παγκόσμιο Διαδικτυακό Παράθυρο|Wide World Wireless~Παγκόσμιο Ασύρματο Δίκτυο|Web Wide World~Διαδικτυακός Ευρύς Κόσμος
Technology~Τεχνολογία|Which of these is an image file format?|Ποιο από αυτά είναι μορφή αρχείου εικόνας;|JPEG|MP3|WAV|AAC
`;
const pair=value=>value.includes('~')?value.split('~'):[value,value];
export const questions=rows.trim().split('\n').map((line,index)=>{
 const [topic,en,el,...options]=line.split('|');
 return {id:`gk-${index+1}`,topic:pair(topic),question:[en,el],options:options.map(pair),correct:0};
});
