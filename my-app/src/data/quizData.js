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
  ]
};

export default quizData;
