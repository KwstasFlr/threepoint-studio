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
`;
const pair=value=>value.includes('~')?value.split('~'):[value,value];
export const questions=rows.trim().split('\n').map((line,index)=>{
 const [topic,en,el,...options]=line.split('|');
 return {id:`gk-${index+1}`,topic:pair(topic),question:[en,el],options:options.map(pair),correct:0};
});
