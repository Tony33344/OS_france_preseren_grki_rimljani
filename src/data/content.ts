export interface TimelineEvent {
  year: string;
  title: string;
  civilization: "greece" | "rome" | "both";
  description: string;
  category: "political" | "social" | "military" | "cultural";
}

export interface ComparisonPoint {
  category: string;
  icon: string;
  greece: {
    title: string;
    description: string;
    keyPoints: string[];
  };
  rome: {
    title: string;
    description: string;
    keyPoints: string[];
  };
}

export interface KeyFigure {
  name: string;
  civilization: "greece" | "rome";
  period: string;
  role: string;
  description: string;
  achievements: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  civilization: "greece" | "rome";
}

export interface Source {
  id: number;
  title: string;
  author?: string;
  year?: string;
  type: "book" | "website" | "primary" | "article";
  url?: string;
  description?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "~800 pr. n. št.",
    title: "Polis v antični Grčiji",
    civilization: "greece",
    description:
      "V Grčiji se oblikujejo neodvisne mestne države (polis) - Atene, Šparta, Korint, Teba. Vsaka ima svojo obliko vladanja.",
    category: "political",
  },
  {
    year: "753 pr. n. št.",
    title: "Ustanovitev Rima",
    civilization: "rome",
    description:
      "Po legendi Romul in Rem ustanovita mesto Rim na bregovih Tibere. Začetek rimske civilizacije.",
    category: "political",
  },
  {
    year: "621 pr. n. št.",
    title: "Drakonove zakoni v Atenah",
    civilization: "greece",
    description:
      "Drakon zapiše prve atenske zakone. So znani po izjemni strogosti (smrt za skoraj vsak prekršek).",
    category: "political",
  },
  {
    year: "509 pr. n. št.",
    title: "Rimska republika",
    civilization: "rome",
    description:
      "Zadnji etruščanski kralj Tarkvinij Ošabni je izgnan. Rim postane republika z dvema konzuloma.",
    category: "political",
  },
  {
    year: "508-507 pr. n. št.",
    title: "Klejstenove reforme",
    civilization: "greece",
    description:
      "Klejsten uvede demokracijo v Atenah. Razdeli prebivalstvo na 10 fil in ustanovi svét petsto (boule).",
    category: "political",
  },
  {
    year: "494 pr. n. št.",
    title: "Tribuni ljudstva (tribuni plebeji)",
    civilization: "rome",
    description:
      "Plebejci dobijo svoje predstavnike - tribune ljudstva, ki ščitijo njihove pravice pred patriciji.",
    category: "political",
  },
  {
    year: "461-429 pr. n. št.",
    title: "Periklejevo 'zlato obdobje'",
    civilization: "greece",
    description:
      "Perikles razširi demokracijo. Plača za javne funkcije omogoči tudi revnim državljanom sodelovanje.",
    category: "political",
  },
  {
    year: "451 pr. n. št.",
    title: "Likurgov zakon XII. plošč",
    civilization: "rome",
    description:
      "Likurg-Stolon sestavi Zakon XII. plošč, prvi pisni rimski zakonik. Pravice zapisane za vse.",
    category: "political",
  },
  {
    year: "443 pr. n. št.",
    title: "Perikles strateg",
    civilization: "greece",
    description:
      "Perikles postane strateg - eno od desetih vodij Aten. Začne se najslavnejše obdobje atenske demokracije.",
    category: "political",
  },
  {
    year: "287 pr. n. št.",
    title: "Hortenzijev zakon",
    civilization: "rome",
    description:
      "Plebisciti (odločitve ljudskih shodov) dobijo veljavo zakona za vse Rimljane, ne le plebejce.",
    category: "political",
  },
  {
    year: "264-241 pr. n. št.",
    title: "Prva punska vojna",
    civilization: "rome",
    description:
      "Rim se spopade s Kartagino za oblast nad Sicilijo. Začetek rimske širitve izven Apeninskega polotoka.",
    category: "military",
  },
  {
    year: "146 pr. n. št.",
    title: "Propad Korinta in Kartagine",
    civilization: "both",
    description:
      "Rim uniči Korint (grško mesto) in Kartagino. Grčija postane rimska provinca. Konec grške neodvisnosti.",
    category: "military",
  },
  {
    year: "133 pr. n. št.",
    title: "Tiberij Grac",
    civilization: "rome",
    description:
      "Tiberij Grac poskuša izvesti kmečko reformo. Ubit - kaže na krizo republike in razredne spopade.",
    category: "social",
  },
  {
    year: "44 pr. n. št.",
    title: "Cezarjev atentat",
    civilization: "rome",
    description:
      "Julij Cezar je ubit na Marsovem polju s strani senatorjev. Konec republike se bliža.",
    category: "political",
  },
  {
    year: "27 pr. n. št.",
    title: "Oktavijan - princps",
    civilization: "rome",
    description:
      "Oktavijan (pozneje Avgust) postane prvi rimski cesar. Začetek rimskega cesarstva (principata).",
    category: "political",
  },
];

export const comparisonPoints: ComparisonPoint[] = [
  {
    category: "Oblika vladavine",
    icon: "Crown",
    greece: {
      title: "Neposredna demokracija (v Atenah)",
      description:
        "Državljani (le moški, rojeni svobodni Atence) so se neposredno udeleževali odločanja na ljudski skupščini - ekleziji.",
      keyPoints: [
        "Neposredno glasovanje o zakonih in vojnah",
        "Ljudska skupščina (eklezija) - vsaj 6000 državljanov",
        "Žrebanje (sorticija) za večino funkcij",
        "Svet 500 (boule) pripravlja predloge",
        "Sodišče - heliaja s 6000 člani",
      ],
    },
    rome: {
      title: "Mešana ustavna republika",
      description:
        "Policija mešanica demokratičnih, oligarhičnih in monarhičnih elementov. Ravnotežje oblasti med različnimi organi.",
      keyPoints: [
        "Dva konzula - najvišja izvršna oblast",
        "Senat (300-600 patricijev) - svetovalni organ",
        "Ljudske skupščine (comitia) - volijo magistrate",
        "Tribuni ljudstva - veto proti konzulom",
        "Cenzorji - nadzor nad moralo in davki",
      ],
    },
  },
  {
    category: "Kdo lahko sodeluje?",
    icon: "Users",
    greece: {
      title: "Ožji krog državljanov",
      description:
        "Le okoli 10-20% prebivalstva Aten je imelo pravico sodelovati v politiki.",
      keyPoints: [
        "Samo prosti odrasli moški z atenskim državljanstvom",
        "Ženske brez političnih pravic",
        "Tujci (metojki) in sužnji izključeni",
        "Državljanstvo le po očetovi liniji",
        "Šparta: omejeno tudi za kmete (perioike in helote)",
      ],
    },
    rome: {
      title: "Postopna razširitev pravic",
      description:
        "Rim se je počasi širil - sprva le patriciji, nato vsi prosti Rimljani (plebejci).",
      keyPoints: [
        "Na začetku le patriciji (plemiči)",
        "Od 494 pr. n. št. tudi plebejci",
        "Ženske sprva brez pravic, pozneje omejene",
        "Provincialni prebivalci postopoma dobivajo pravice",
        "212 - Constitutio Antoniniana: vsi prosti prebivalci cesarstva",
      ],
    },
  },
  {
    category: "Izvršna oblast",
    icon: "Hammer",
    greece: {
      title: "Kolegij 10 strategov",
      description:
        "Deset strategov, izvoljenih vsako leto, je vodilo vojsko in zunanjo politiko. Niso imeli trajne oblasti.",
      keyPoints: [
        "10 strategov (izvoljeni, ne žreb)",
        "Lahko ponovno izvoljeni (Perikles 15x)",
        "Vsak vodi eno vojaško enoto",
        "Skupaj odločajo o vojni",
        "Po Periklovem zgledu: strateg > drugi",
      ],
    },
    rome: {
      title: "Dva konzula s kolegijskim sistemom",
      description:
        "Dva konzula sta si delila oblast - vsak je lahko z vetom blokiral drugega (intercessio).",
      keyPoints: [
        "2 konzula, voljena za 1 leto",
        "Vsak lahko blokira drugega (veto)",
        "V izrednih razmerah: dictator (6 mesecev)",
        "Pomožni magistrate: pretorji, edilji, kvestorji",
        "Za cesarstva: princeps (prvi med enakimi)",
      ],
    },
  },
  {
    category: "Zakonodajna oblast",
    icon: "ScrollText",
    greece: {
      title: "Ljudska skupščina (eklezija)",
      description:
        "Vsi državljani so se zbrali na hribu Pniksu ali v teatru Dioniza in neposredno glasovali.",
      keyPoints: [
        "Eklezija - vsi državljani nad 18 let",
        "Srečanja 3-4x mesečno",
        "Drakont (Demosten) - govornik predlaga zakon",
        "Glasovanje z dvigom rok ali kamenčki",
        "Od 6. stol. pr. n. št.: ostrakizem (izgnanstvo)",
      ],
    },
    rome: {
      title: "Ljudske skupščine in Senat",
      description:
        "Senat je imel dejansko oblast, formalno pa so zakone sprejemale ljudske skupščine.",
      keyPoints: [
        "Comitia Centuriata - po bogastvu",
        "Comitia Tributa - po teritorialnih tribusah",
        "Concilium Plebis - le plebejci",
        "Senat pripravlja predloge (senatus consulta)",
        "Magistrat predlaga, skupščina potrdi",
      ],
    },
  },
  {
    category: "Sodna oblast",
    icon: "Scale",
    greece: {
      title: "Ljudsko sodišče - heliaja",
      description:
        "6.000 državljanov, razdeljenih v 10 sodišč, je odločalo o večini zadev.",
      keyPoints: [
        "Heliaja - 6.000 državljanov (nad 30 let)",
        "501-2.001 sodnikov na posamezen primer",
        "Žreb razdeli primere med sodnike",
        "Obtoženi in tožnik govorita sama",
        "Sodniki glasujejo tajno s kamenčki",
      ],
    },
    rome: {
      title: "Pretor in stalni tribunali",
      description:
        "Pretor je vodil sodstvo, pozneje so se razvili stalni tribunali (quaestiones perpetuae).",
      keyPoints: [
        "Pretor (mestni in peregrinski)",
        "Ius honorarium - pretor prilagaja pravo",
        "Od 2. stol. pr. n. št.: stalni kazenski tribunali",
        "Kaznovanje: multa (globa) ali capitis deminutio",
        "Apelacija na višje instance (v cesarstvu)",
      ],
    },
  },
  {
    category: "Vloga religije",
    icon: "Sun",
    greece: {
      title: "Politeizem in orakli",
      description:
        "Verski obredi so bili del državnega življenja. Oraklji (npr. v Delfih) so svetovali pri odločitvah.",
      keyPoints: [
        "12 olimpijskih bogov",
        "Delfski orakelj - svetuje pri ustanovitvi kolonij",
        "Verski prazniki - državni prazniki",
        "Aretuza: svetišče z daritvami",
        "Religija ločena od politike, a prepletena",
      ],
    },
    rome: {
      title: "Pontifex maximus in auguri",
      description:
        "Religija je bila tesno povezana z državo. Avspiciji (napovedi iz letenja ptic) so bili pogoj za veljavnost odločitev.",
      keyPoints: [
        "Pontifex maximus - verski poglavar (sprva)",
        "Kolegij pontifov in auguriov",
        "Avspiciji - ugotavljanje božje volje",
        "Cesar od Avgusta: pontifex maximus",
        "Versni obredi za uspeh v vojni",
      ],
    },
  },
];

export const keyFigures: KeyFigure[] = [
  {
    name: "Klejsten",
    civilization: "greece",
    period: "6. stol. pr. n. št.",
    role: "Oče atenske demokracije",
    description:
      "Uvedel je reforme, ki so Atene spremenile v demokracijo. Razdelil je Atiko na 10 fil in uvedel svet 500 (boule).",
    achievements: [
      "Ljudska skupščina (eklezija) postane vrhovna oblast",
      "Izgon iz Atike (ostrakis) - še preden je bilo vpeljano ostrakizem",
      "Sistem desetih fil - lokalne enote",
    ],
  },
  {
    name: "Perikles",
    civilization: "greece",
    period: "495-429 pr. n. št.",
    role: "Strateg in voditelj Aten",
    description:
      "Vodil je Atene v 'zlato dobo'. Razširil je demokracijo, da je postala dostopna tudi revnejšim državljanom.",
    achievements: [
      "Plačilo za javne funkcije - demokracija za revne",
      "Zgradil Partenon in Akropolo",
      "Peloponeška vojna - začetek konec atenske prevlade",
    ],
  },
  {
    name: "Solon",
    civilization: "greece",
    period: "~640-~558 pr. n. št.",
    role: "Pravnik in reformator",
    description:
      "Eden od 'sedmih modrih' Grčije. Njegove reforme so omilile socialne razlike in pripravile pot demokraciji.",
    achievements: [
      "Odprava dolžniškega suženjstva (seizachtheia)",
      "Razdelitev državljanov v 4 razrede po premoženju",
      "Heliaja - pritožbeno sodišče",
    ],
  },
  {
    name: "Romul",
    civilization: "rome",
    period: "Legenda: 753 pr. n. št.",
    role: "Legendarni ustanovitelj Rima",
    description:
      "Po legendi je Romul (sin boga Marsa) ustanovil Rim in postal njegov prvi kralj.",
    achievements: [
      "Ustanovitev Rima 21. aprila 753 pr. n. št.",
      "Ugrabitev Sabinjank - žene za Rome",
      "Razdelitev ljudstva na patricije in plebejce",
    ],
  },
  {
    name: "Lucij Junij Brut",
    civilization: "rome",
    period: "6. stol. pr. n. št.",
    role: "Oče rimske republike",
    description:
      "Pobegnil iz sovražnega kraljevega dvora, organiziral upor in strmoglavil zadnjega kralja. Postal prvi konzul.",
    achievements: [
      "Strmoglavljenje kralja Tarkvinija Ošabnega",
      "Prvi konzul rimske republike (509 pr. n. št.)",
      "Uvedba načela: nihče ni nad zakonom",
    ],
  },
  {
    name: "Cicero",
    civilization: "rome",
    period: "106-43 pr. n. št.",
    role: "Govornik, filozof, politik",
    description:
      "Eden najpomembnejših rimskih govornikov in mislecev. Njegova dela so vplivala na zahodno politično misel.",
    achievements: [
      "Konzul 63 pr. n. št. - razkril Katilinovo zaroto",
      "Filozofska dela o republiki in zakonih",
      "Njegova načela so vplivala na očete ustanovitelje ZDA",
    ],
  },
  {
    name: "Julij Cezar",
    civilization: "rome",
    period: "100-44 pr. n. št.",
    role: "General in diktator",
    description:
      "Eden največjih rimskih vojskovodij. Njegova osvojitev Galije in prehod Rubikona sta privedla do konca republike.",
    achievements: [
      "Osvojitev Galije (58-50 pr. n. št.)",
      "Prehod Rubikona - 'Kocka je vržena'",
      "Diktator za življenje - 44 pr. n. št.",
      "Julijanski koledar (sodobni koledar)",
    ],
  },
  {
    name: "Oktavijan / Avgust",
    civilization: "rome",
    period: "63 pr. n. št. - 14 n. št.",
    role: "Prvi rimski cesar",
    description:
      "Prevzel oblast po Cezarjevi smrti. Spretno je uvedel cesarstvo, a ohranil republikanske forme (princp).",
    achievements: [
      "Zmaga v bitki pri Akciju (31 pr. n. št.)",
      "Leta 27 pr. n. št. dobil naziv Augustus",
      "Pax Romana - 200 let miru",
      "Preporod Rima - marmor namesto opeke",
    ],
  },
];

export const sources: Source[] = [
  {
    id: 1,
    title: "Antična grška in rimska politična misel",
    author: "B. Šterbenc (ur.)",
    year: "2018",
    type: "book",
    description:
      "Slovenska monografija o antični politični misli, primerna za srednje šole.",
  },
  {
    id: 2,
    title: "Zgodovina 1 - Od prazgodovine do srednjega veka",
    author: "M. Rajšp (ur.)",
    year: "2017",
    type: "book",
    description:
      "Učbenik za 9. razred osnovne šole - vsebuje poglavja o antični Grčiji in Rimu.",
  },
  {
    id: 3,
    title: "Britannica - Ancient Greek Democracy",
    author: "Encyclopaedia Britannica",
    year: "2024",
    type: "website",
    url: "https://www.britannica.com/topic/democracy/Ancient-Greek-democracy",
    description: "Angleški spletni vir o grški demokraciji, dostopen v slovenščini.",
  },
  {
    id: 4,
    title: "Britannica - Roman Republic",
    author: "Encyclopaedia Britannica",
    year: "2024",
    type: "website",
    url: "https://www.britannica.com/topic/Roman-Republic",
    description: "Podroben pregled rimske republike in njenih institucij.",
  },
  {
    id: 5,
    title: "Enciklopedija - Antični Rim",
    author: "Slovenski spletni portal",
    year: "2023",
    type: "website",
    url: "https://www.enciklopedija.si/",
    description: "Slovenska spletna enciklopedija s članki o antičnem Rimu.",
  },
  {
    id: 6,
    title: "The Histories - Herodot",
    author: "Herodot",
    year: "~440 pr. n. št.",
    type: "primary",
    description:
      "Primarni vir: 'Oče zgodovine' opisuje grško-perzijske vojne in tedanjo družbo.",
  },
  {
    id: 7,
    title: "Ab Urbe Condita - Livij",
    author: "Tit Livij",
    year: "~27 pr. n. št. - 14 n. št.",
    type: "primary",
    description:
      "Rimski zgodovinar, ki opisuje zgodovino Rima od ustanovitve do cesarstva.",
  },
  {
    id: 8,
    title: "Politični govori - Ciceron",
    author: "Marcus Tullius Cicero",
    year: "63 pr. n. št.",
    type: "primary",
    description:
      "Ciceronovi govori, npr. In Catilinam, kažejo delovanje rimske republike v praksi.",
  },
  {
    id: 9,
    title: "Metropolis - Virtualna rekonstrukcija antičnega Rima",
    author: "Različni avtorji",
    year: "2023",
    type: "website",
    url: "https://www.romanoimpero.com/",
    description: "Spletna stran s 3D modeli antičnih zgradb, primerna za učence.",
  },
  {
    id: 10,
    title: "Khan Academy - Greek and Roman Government",
    author: "Khan Academy",
    year: "2024",
    type: "website",
    url: "https://www.khanacademy.org/humanities/ap-art-history/ancient-mediterranean-ap",
    description:
      "Brezplačni video posnetki in članki o antičnih civilizacijah (tudi v slovenščini).",
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Katera oblika vladavine je prevladovala v klasičnih Atenah?",
    options: [
      "Neposredna demokracija",
      "Monarhija",
      "Oligarhija",
      "Tiranija",
    ],
    correct: 0,
    explanation:
      "Atene so bile znane po neposredni demokraciji, kjer so se državljani sami udeleževali ljudskih skupščin in neposredno glasovali o zakonih.",
    civilization: "greece",
  },
  {
    question: "Kdo je izgnan iz Rima leta 509 pr. n. št. in s tem omogočil ustanovitev republike?",
    options: [
      "Romul",
      "Julij Cezar",
      "Tarkvinij Ošabni",
      "Cicero",
    ],
    correct: 2,
    explanation:
      "Zadnji etruščanski kralj Tarkvinij Ošabni je bil izgnan leta 509 pr. n. št., kar je omogočilo nastanek rimske republike.",
    civilization: "rome",
  },
  {
    question: "Koliko strategov je vodilo Atene?",
    options: ["1", "2", "5", "10"],
    correct: 3,
    explanation:
      "Atene so vodili 10 strategov, ki so bili izvoljeni vsako leto. Skupaj so odločali o vojaških in zunanjepolitičnih zadevah.",
    civilization: "greece",
  },
  {
    question: "Kaj je bila naloga rimskih tribunov ljudstva?",
    options: [
      "Vodili so vojsko",
      "Svetovali so cesarju",
      "Ščitili so pravice plebejcev",
      "Bili so sodniki",
    ],
    correct: 2,
    explanation:
      "Tribuni ljudstva (tribuni plebeji) so bili predstavniki plebejcev, ki so lahko z vetom blokirali odločitve konzulov, če so te škodovale ljudstvu.",
    civilization: "rome",
  },
  {
    question: "Katera reforma je omogočila revnejšim državljanom sodelovanje v atenski demokraciji?",
    options: [
      "Drakonov zakonik",
      "Periklejeva uvedba plačil",
      "Klejstenove file",
      "Solonova razdelitev v razrede",
    ],
    correct: 1,
    explanation:
      "Perikles je uvedel plačilo za javne funkcije (mistri in sodelovanje v heliaji), kar je revnejšim državljanom omogočilo sodelovanje, saj jim ni bilo treba izgubljati zaslužka.",
    civilization: "greece",
  },
  {
    question: "Kako sta si konzula delila oblast?",
    options: [
      "Stalno je eden imel večjo oblast",
      "Vsak je lahko blokiral drugega (veto)",
      "Odločala sta skupaj z ljudstvom",
      "Menjala sta se na polovici mandata",
    ],
    correct: 1,
    explanation:
      "Rimski konzuli so imeli kolegijski sistem z vzajemnim vetom (intercessio), kar je preprečevalo, da bi se eden spremenil v kralja.",
    civilization: "rome",
  },
  {
    question: "Kaj je bilo ostrakizem v Atenah?",
    options: [
      "Globe za kriminalce",
      "Postopek izgnanstva z glasovanjem",
      "Vojaški čin",
      "Verski obred",
    ],
    correct: 1,
    explanation:
      "Ostrakizem je bil postopek, kjer so državljani zapisali ime osebe, za katero so menili, da ogroža demokracijo, na lončene črepinje. Oseba z največ glasovi je bila izgnana za 10 let.",
    civilization: "greece",
  },
  {
    question: "Kdo je prvi nosil naziv 'princps' (prvi med enakimi)?",
    options: ["Julij Cezar", "Cicero", "Oktavijan Avgust", "Mark Antonij"],
    correct: 2,
    explanation:
      "Oktavijan je leta 27 pr. n. št. dobil častni naziv 'Augustus' (Vzvišeni) in postal prvi 'princps' (prvi državljan), s čimer se je začela era cesarstva.",
    civilization: "rome",
  },
];
