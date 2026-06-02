const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 10 Kategoriya və hər birində 10 sual olan Data mətni
const quizData = {
    general_knowledge: [
        { id: 1, question: "Dünyanın ən böyük ölkəsi hansıdır?", options: ["Çin", "Rusiya", "ABŞ", "Kanada"], correctAnswer: 1 },
        { id: 2, question: "Hansı planet Günəşə ən yaxın olanıdır?", options: ["Venera", "Mars", "Merkuri", "Yupiter"], correctAnswer: 2 },
        { id: 3, question: "İnsan bədənində neçə sümük var?", options: ["206", "208", "210", "212"], correctAnswer: 0 },
        { id: 4, question: "Hansı dəniz dünyanın ən duzlu dənizidir?", options: ["Qara Dəniz", "Kaspian Dənizi", "Ölü Dəniz", "Aral Dənizi"], correctAnswer: 2 },
        { id: 5, question: "Hansı heyvan ən sürətli qaçan heyvandır?", options: ["Çita", "At", "Aslan", "Qartal"], correctAnswer: 0 },
        { id: 6, question: "Hansı ölkə ən çox rəsmi dilə sahibdir?", options: ["Hindistan", "Cənubi Afrika", "Belçika", "İsveç"], correctAnswer: 0 },
        { id: 7, question: "Dünyanın ən yüksək dağı hansı dağdır?", options: ["K2", "Everest", "Kangchenjunga", "Lhotse"], correctAnswer: 1 },
        { id: 8, question: "Hansı dəniz dünyanın ən dərin dənizidir?", options: ["Qara Dəniz", "Kaspian Dənizi", "Ölü Dəniz", "Mariana Dənizi"], correctAnswer: 3 },
        { id: 9, question: "Hansı ölkə ən çox əhalisi olan ölkədir?", options: ["Çin", "Hindistan", "ABŞ", "Endoneziya"], correctAnswer: 0 },
        { id: 10, question: "Hansı dəniz dünyanın ən böyük dənizidir?", options: ["Qara Dəniz", "Kaspian Dənizi", "Ölü Dəniz", "Filippin Dənizi"], correctAnswer: 3 }
    ],
    javascript: [
        { id: 1, question: "JavaScript-də dəyişən elan etmək üçün hansı açar sözdən istifadə olunmur?", options: ["let", "const", "var", "define"], correctAnswer: 3 },
        { id: 2, question: "Hansı metod massivin sonuna yeni element əlavə edir?", options: ["pop()", "push()", "shift()", "unshift()"], correctAnswer: 1 },
        { id: 3, question: "NaN nə deməkdir?", options: ["Not a Number", "Null and Null", "New Node", "Next Action"], correctAnswer: 0 },
        { id: 4, question: "Dəyərin həm tipini, həm də özünü müqayisə etmək üçün hansı operatordan istifadə olunur?", options: ["==", "===", "=", "!="], correctAnswer: 1 },
        { id: 5, question: "JavaScript-də hansı məlumat tipi yoxdur?", options: ["string", "boolean", "float", "undefined"], correctAnswer: 2 },
        { id: 6, question: "Massivin uzunluğunu tapmaq üçün hansı xassədən istifadə olunur?", options: ["length", "size", "count", "index"], correctAnswer: 0 },
        { id: 7, question: "JSON-u JavaScript obyektinə çevirmək üçün hansı metod istifadə olunur?", options: ["JSON.stringify()", "JSON.object()", "JSON.parse()", "JSON.toObject()"], correctAnswer: 2 },
        { id: 8, question: "Sətri tam ədədə çevirən funksiya hansıdır?", options: ["parseInt()", "parseFloat()", "Number.isInteger()", "toString()"], correctAnswer: 0 },
        { id: 9, question: "Dövrü dayandırmaq üçün hansı açar söz istifadə olunur?", options: ["stop", "break", "exit", "return"], correctAnswer: 1 },
        { id: 10, question: "JavaScript hansı il yaradılıb?", options: ["1991", "1995", "2000", "2005"], correctAnswer: 1 }
    ],
    football: [
        { id: 1, question: "Hansı futbolçu hamıdan çox Ballon d'Or (Qızıl Top) qazanıb?", options: ["Cristiano Ronaldo", "Lionel Messi", "Zinedine Zidane", "Ronaldinho"], correctAnswer: 1 },
        { id: 2, question: "Dünya Kubokunu ən çox qazanan ölkə hansıdır?", options: ["Almaniya", "İtaliya", "Argentina", "Braziliya"], correctAnswer: 3 },
        { id: 3, question: "İngiltərənin 'Arsenal' klubunun ləqəbi nədir?", options: ["The Blues", "The Gunners", "The Red Devils", "The Citizens"], correctAnswer: 1 },
        { id: 4, question: "Çempionlar Liqasını ən çox qazanan klub hansıdır?", options: ["AC Milan", "FC Barcelona", "Real Madrid", "Liverpool"], correctAnswer: 2 },
        { id: 5, question: "Futbol matçının əsas vaxtı neçə dəqiqədir?", options: ["80", "90", "100", "120"], correctAnswer: 1 },
        { id: 6, question: "2022-ci il Dünya Çempionatı harada keçirilib?", options: ["Qətər", "Braziliya", "Rusiya", "Fransa"], correctAnswer: 0 },
        { id: 7, question: "Bir oyunda 3 qol vuran futbolçunun etdiyi uğur necə adlanır?", options: ["Double", "Poker", "Hat-trick", "Assist"], correctAnswer: 2 },
        { id: 8, question: "Hansı klub 'El Clasico' rəqabətinin bir tərəfidir?", options: ["Atletico Madrid", "Real Madrid", "Valencia", "Sevilla"], correctAnswer: 1 },
        { id: 9, question: "Futbolda qapıçının topa əllə toxunması qadağan olunan sahə haradır?", options: ["Cərimə meydançası xaricində", "Qapı xəttində", "Mərkəz dairəsində", "Penalti nöqtəsində"], correctAnswer: 0 },
        { id: 10, question: "Kylian Mbappe hal-hazırda hansı ölkənin millisində oynayır?", options: ["Kamerun", "Fransa", "Belçika", "Cezayir"], correctAnswer: 1 }
    ],
    geography: [
        { id: 1, question: "Dünyanın ən böyük okeanı hansıdır?", options: ["Atlantik", "Hind", "Sakit", "Şimal Buzlu"], correctAnswer: 2 },
        { id: 2, question: "Azərbaycanın ən böyük gölü hansıdır?", options: ["Göy-göl", "Murov gölü", "Sarısu", "Ceyranbatan"], correctAnswer: 2 },
        { id: 3, question: "İtaliyanın paytaxtı haradır?", options: ["Paris", "Madrid", "Milan", "Roma"], correctAnswer: 3 },
        { id: 4, question: "Yaponiyanın digər adı nədir?", options: ["Gündoğan ölkə", "Gecəyarısı günəşi", "Ağ fil ölkəsi", "Mavi sular"], correctAnswer: 0 },
        { id: 5, question: "Dünyanın ən uzun çayı hansıdır?", options: ["Amazon", "Nil", "Volqa", "Yantsı"], correctAnswer: 1 },
        { id: 6, question: "Misir piramidaları hansı qitədə yerləşir?", options: ["Asiya", "Avropa", "Afrika", "Amerika"], correctAnswer: 2 },
        { id: 7, question: "Fransa ilə Böyük Britaniyanı ayıran boğaz hansıdır?", options: ["Cəbəllüttariq", "Bosfor", "Lamanş", "Berinq"], correctAnswer: 2 },
        { id: 8, question: "Dünyanın ən yüksək zirvəsi (Everest) hansı dağ silsiləsindədir?", options: ["And", "Alp", "Qafqaz", "Himalay"], correctAnswer: 3 },
        { id: 9, question: "Avstraliyanın paytaxtı haradır?", options: ["Sidney", "Melburn", "Kanberra", "Brisben"], correctAnswer: 2 },
        { id: 10, question: "Hansı ölkə həm Avropada, həm də Asiyada yerləşir?", options: ["Türkiyə", "İran", "Ukrayna", "Yunanıstan"], correctAnswer: 0 }
    ],
    history: [
        { id: 1, question: "Birinci Dünya Müharibəsi hansı illərdə baş verib?", options: ["1914-1918", "1939-1945", "1905-1912", "1917-1921"], correctAnswer: 0 },
        { id: 2, question: "Azərbaycan Xalq Cümhuriyyəti (AXC) nə vaxt yaradılıb?", options: ["1920", "1918", "1991", "1905"], correctAnswer: 1 },
        { id: 3, question: "Amerika Birləşmiş Ştatlarının ilk prezidenti kim olub?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Kennedy"], correctAnswer: 2 },
        { id: 4, question: "Qədim Roma imperiyasının ilk imperatoru kim olub?", options: ["Yuli Sezar", "Oktavian Avqust", "Neron", "Trajan"], correctAnswer: 1 },
        { id: 5, question: "Osmanlı İmperiyası neçənci ildə süqut edib?", options: ["1923", "1453", "1918", "1299"], correctAnswer: 0 },
        { id: 6, question: "Şah İsmayıl Xətai hansı dövlətin əsasını qoyub?", options: ["Səlcuqlu", "Səfəvilər", "Atabəylər", "Qaraqoyunlular"], correctAnswer: 1 },
        { id: 7, question: "Fransız İnqilabı neçənci ildə başlayıb?", options: ["1789", "1815", "1689", "1901"], correctAnswer: 0 },
        { id: 8, question: "Makedoniyalı İsgəndər hansı məşhur filosofun tələbəsi olub?", options: ["Sokrat", "Platon", "Aristotel", "Pifaqor"], correctAnswer: 2 },
        { id: 9, question: "Gəncə zəlzələsi zamanı Göy-göl neçənci ildə yaranıb?", options: ["1139", "1239", "1039", "1339"], correctAnswer: 0 },
        { id: 10, question: "SSRİ neçənci ildə dağılıb?", options: ["1989", "1991", "1993", "1985"], correctAnswer: 1 }
    ],
    movies: [
        { id: 1, question: "Uzüklərin Rəbbində (LOTR) tək üzüyü məhv edən hobbit kimdir?", options: ["Frodo Baggins", "Samwise Gamgee", "Bilbo Baggins", "Aragorn"], correctAnswer: 0 },
        { id: 2, question: "Marvel Kinomatoqrafiya Kainatında (MCU) ilk film hansıdır?", options: ["Captain America", "Thor", "Iron Man", "The Avengers"], correctAnswer: 2 },
        { id: 3, question: "Titanik filmində baş rolu (Cek) kim canlandırıb?", options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"], correctAnswer: 1 },
        { id: 4, question: "The Witcher serialında Geralt personajını ilk mövsümlərdə kim oynayıb?", options: ["Henry Cavill", "Liam Hemsworth", "Chris Hemsworth", "Ben Affleck"], correctAnswer: 0 },
        { id: 5, question: "Oskar mükafatını ən çox qazanan animasiya studiyası hansıdır?", options: ["DreamWorks", "Pixar", "Warner Bros", "Ghibli"], correctAnswer: 1 },
        { id: 6, question: "Matrix filmində Neo personajı hansı rəngli həbi seçir?", options: ["Mavi", "Sarı", "Qırmızı", "Yaşıl"], correctAnswer: 2 },
        { id: 7, question: "Avatar filminin rejissoru kimdir?", options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"], correctAnswer: 2 },
        { id: 8, question: "Inception (Başlanğıc) filminin əsas mövzusu nədir?", options: ["Kosmosa səyahət", "Yuxular və şüuraltı", "Süni intellekt", "Zaman səyahəti"], correctAnswer: 1 },
        { id: 9, question: "Hansı personaj Marvel-ə aid deyil?", options: ["Batman", "Spider-Man", "Hulk", "Thor"], correctAnswer: 0 },
        { id: 10, question: "Harry Potter-in sehrli çubuğu hansı heyvanın tükünü ehtiva edirdi?", options: ["Əjdaha", "Simurq quşu (Phoenix)", "Böyük canavar", "Unicorn"], correctAnswer: 1 }
    ],
    science: [
        { id: 1, question: "Suyun kimyəvi formulu hansıdır?", options: ["CO2", "H2O", "NaCl", "O2"], correctAnswer: 1 },
        { id: 2, question: "İnsan bədənində ən böyük orqan hansıdır?", options: ["Qaraciyər", "Beyin", "Dəri", "Ağciyər"], correctAnswer: 2 },
        { id: 3, question: "Nisbilik nəzəriyyəsinin müəllifi kimdir?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"], correctAnswer: 1 },
        { id: 4, question: "Günəş sistemində ən böyük planet hansıdır?", options: ["Mars", "Saturn", "Yupiter", "Neptun"], correctAnswer: 2 },
        { id: 5, question: "İşıq sürəti təxminən saniyədə neçə kilometrdir?", options: ["150,000 km/s", "300,000 km/s", "500,000 km/s", "1,000,000 km/s"], correctAnswer: 1 },
        { id: 6, question: "DNT-nin açılışı nədir?", options: ["Dezoksiribonuklein turşusu", "Ribonuklein turşusu", "Dinamik Neyron Transformasiyası", "Rəqəmsal Şəbəkə"], correctAnswer: 0 },
        { id: 7, question: "Hansı element dövri cədvəldə 'H' hərfi ilə işarə olunub?", options: ["Helyum", "Hidrogen", "Civə", "Dəmir"], correctAnswer: 1 },
        { id: 8, question: "Yer kürəsinin cazibə qüvvəsi sabitini (g) kim kəşf edib?", options: ["Galileo Galilei", "Isaac Newton", "Kepler", "Copernicus"], correctAnswer: 1 },
        { id: 9, question: "Bitkilərin günəş işığından enerji istehsal etməsi prosesi necə adlanır?", options: ["Respirasiya", "Fotosintez", "Fermentasiya", "Oksidləşmə"], correctAnswer: 1 },
        { id: 10, question: "Dövri cədvəldə neçə təbii element var?", options: ["92", "118", "56", "84"], correctAnswer: 0 }
    ],
    automotive: [
        { id: 1, question: "Hyundai Santa Fe 2016-cı il modelində adətən hansı dizel mühərrik həcmi geniş yayılıb?", options: ["1.6 CRDi", "2.0 CRDi / 2.2 CRDi", "3.0 V6", "1.4 MPI"], correctAnswer: 1 },
        { id: 2, question: "At gücü (Horsepower) nəyi ifadə edir?", options: ["Mühərrikin gücünü", "Maşının çəkisini", "Maksimum sürəti", "Yanacaq çəninin həcmini"], correctAnswer: 0 },
        { id: 3, question: "Avtomobillərdə 'ABS' sisteminin əsas funksiyası nədir?", options: ["Sürəti artırmaq", "Əyləcləmə zamanı təkərlərin kilidlənməsini önləmək", "Yanacağa qənaət", "Kondisioneri idarə etmək"], correctAnswer: 1 },
        { id: 4, question: "Elektrikli avtomobil istehsalçısı Tesla-nın qurucusu kimdir?", options: ["Elon Musk", "Henry Ford", "Enzo Ferrari", "Bill Gates"], correctAnswer: 0 },
        { id: 5, question: "Formula 1 yarışlarında 'Skuderiya' adı ilə tanınan komanda hansıdır?", options: ["Mercedes", "McLaren", "Ferrari", "Red Bull"], correctAnswer: 2 },
        { id: 6, question: "Daxili yanma mühərriklərində alışmanı təmin edən hissə hansıdır?", options: ["Karbürator", "Şam (Spark plug)", "Radiator", "Karter"], correctAnswer: 1 },
        { id: 7, question: "Baku City Circuit hansı idman növünə ev sahibliyi edir?", options: ["Futbol", "Formula 1", "Tennis", "Velosiped"], correctAnswer: 1 },
        { id: 8, question: "Avtomobildə mühərrikin dövrlər sayını (RPM) göstərən cihaz necə adlanır?", options: ["Spidometr", "Taxometr", "Odometrir", "Barometr"], correctAnswer: 1 },
        { id: 9, question: "Hansı marka Almaniyaya məxsus deyil?", options: ["BMW", "Audi", "Hyundai", "Porsche"], correctAnswer: 2 },
        { id: 10, question: "Avtomobildə fırlanma anını təkərlərə ötürən sistem nədir?", options: ["Transmissiya (Sürətlər qutusu)", "Asqı sistemi", "Sükan mexanizmi", "Əyləc kaliperi"], correctAnswer: 0 }
    ],
    anime: [
        { id: 1, question: "'Naruto' animesində baş qəhrəmanın ən böyük xəyalı nədir?", options: ["Hokage olmaq", "Zəngin olmaq", "Dünyanı gəzmək", "Samuray olmaq"], correctAnswer: 0 },
        { id: 2, question: "Death Note animesində ölüm dəftərinin əsl sahibi olan ölüm mələyi (Shinigami) kimdir?", options: ["Ryuk", "Rem", "L", "Light"], correctAnswer: 0 },
        { id: 3, question: "Attack on Titan-da baş qəhrəman Eren Yeager hansı titana çevrilə bilir?", options: ["Armored Titan", "Colossal Titan", "Attack Titan", "Beast Titan"], correctAnswer: 2 },
        { id: 4, question: "One Piece-də Luffy-nin yediyi şeytan meyvəsi ona hansı xüsusiyyəti verir?", options: ["Od çıxarmaq", "Rezin bədən", "Görünməzlik", "Uçmaq"], correctAnswer: 1 },
        { id: 5, question: "Demon Slayer animesində Tanjironun bacısının adı nədir?", options: ["Nezuko", "Sakura", "Hinata", "Mikasa"], correctAnswer: 0 },
        { id: 6, question: "Oskar mükafatı qazanmış yeganə anime hansıdır?", options: ["Spirited Away", "Your Name", "A Silent Voice", "Princess Mononoke"], correctAnswer: 0 },
        { id: 7, question: "Fullmetal Alchemist-də Edvurd və Alfons qardaşları nəyi geri qaytarmağa çalışırlar?", options: ["Bədənlərini", "İtmiş qılınclarını", "Krallıqlarını", "Atalarını"], correctAnswer: 0 },
        { id: 8, question: "Jujutsu Kaisen animesində 'Ən güclü şaman' kim qəbul edilir?", options: ["Yuji Itadori", "Megumi Fushiguro", "Satoru Gojo", "Sukuna"], correctAnswer: 2 },
        { id: 9, question: "Dragon Ball seriyasının baş qəhrəmanı kimdir?", options: ["Vegeta", "Goku", "Gohan", "Piccolo"], correctAnswer: 1 },
        { id: 10, question: "Bleach animesində İchigo Kurosakinin silahı (Zanpakuto) nə adlanır?", options: ["Zangetsu", "Muramasa", "Samehada", "Excalibur"], correctAnswer: 0 }
    ],
    gaming: [
        { id: 1, question: "PUBG Mobile oyununda xəritəyə enərkən maksimum neçə nəfər bir matçda iştirak edir?", options: ["50", "60", "100", "150"], correctAnswer: 2 },
        { id: 2, question: "Minecraft-da hansı materialla portal düzəldib 'Nether' (Cəhənnəm) dünyasına getmək olar?", options: ["Diamond", "Obsidian", "Bedrock", "Iron"], correctAnswer: 1 },
        { id: 3, question: "The Witcher 3: Wild Hunt oyununda Geraltın övladlığı kimi gördüyü qız kimdir?", options: ["Yennefer", "Triss", "Ciri", "Shani"], correctAnswer: 2 },
        { id: 4, question: "GTA V oyununda neçə əsas idarə olunan personaj var?", options: ["1", "2", "3", "4"], correctAnswer: 2 },
        { id: 5, question: "Counter-Strike oyununda bombanı quran tərəf hansıdır?", options: ["Terrorists (T)", "Counter-Terrorists (CT)", "Hostages", "Spectators"], correctAnswer: 0 },
        { id: 6, question: "League of Legends (LoL) oyununda əsas məqsəd rəqibin hansı tikilisini dağıtmaqdır?", options: ["Tower", "Inhibitor", "Nexus", "Baron"], correctAnswer: 2 },
        { id: 7, question: "God of War (2018) oyununda Kratos hansı mifologiyaya keçid edir?", options: ["Yunan", "Misir", "Skandinaviya (Norse)", "Roma"], correctAnswer: 2 },
        { id: 8, question: "Dota 2 oyununda hər il keçirilən ən böyük turnir necə adlanır?", options: ["The International", "Worlds", "Major", "Intel Extreme Masters"], correctAnswer: 0 },
        { id: 9, question: "Cyberpunk 2077 oyununda Conni Silverhend (Johnny Silverhand) personajını hansı aktyor canlandırıb?", options: ["Keanu Reeves", "Idris Elba", "Tom Hardy", "Brad Pitt"], correctAnswer: 0 },
        { id: 10, question: "Elden Ring oyununun janrı hansıdır?", options: ["FPS", "Action RPG (Soulslike)", "RTS", "Sport"], correctAnswer: 1 }
    ]
};

// 1. Bütün kategoriyaların siyahısını götürmək üçün endpoint
app.get('/api/categories', (req, res) => {
    const categories = Object.keys(quizData).map(key => ({
        slug: key,
        name: key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')
    }));
    res.json(categories);
});

// 2. Seçilən kategoriyaya görə 10 sualı gətirən endpoint
app.get('/api/quiz/:category', (req, res) => {
    const category = req.params.category.toLowerCase();

    if (quizData[category]) {
        res.json(quizData[category]);
    } else {
        res.status(404).json({ error: "Kategoriya tapılmadı!" });
    }
});

// Serveri işə salmaq
app.listen(PORT, () => {
    console.log(`Serverimiz ${PORT} portunda uğurla işləyir...`);
});