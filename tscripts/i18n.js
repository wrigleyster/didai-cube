"use strict";
const i18n = {
    "Sanguinary Vambracers": "Blutrünstige Unterarmschienen",
    "Deadly Rebirth": "Tödliche Wiedergeburt",
    "Reaper's Wraps": "Wickeltuch des Seelenernters",
    "Ancient Parthan Defenders": "Uralte parthanische Schützer",
    "Broken Crown": "Zerbrochene Krone",
    "Andariel's Visage": "Andariels Antlitz",
    "Leorics Crown": "Leorics Krone",
    "Gungdo Gear": "Gungdo-Schienen",
    "Deathseer's Cowl": "Gugel des Todessehers",
    "Pride's Fall": "Fall des Hochmuts",
    "Skull of Resonance": "Resonanzschädel",
    "Eye of Peshkov": "Auge von Peshkov",
    "Gyana Na Kashu": "Gyana Na Kashu",
    "Kekegi's Unbreakable Spirit": "Kekegis unbezwingbarer Geist",
    "Madstone": "Irrstein",
    "The Laws of Seph": "Sephs Gesetze",
    "The Mind's Eye": "Das innere Auge",
    "Tzo Krin's Gaze": "Tzo Krins Blick",
    "Carnevil": "Karnevalfratze",
    "Mask of Jeram": "Jerams Maske",
    "Quetzalcoatl": "Quetzalcoatl",
    "The Grin Reaper": "Gevatter Grins",
    "Tiklandian Visage": "Tiklandische Fratze",
    "Visage of Giyua": "Fratze von Giyua",
    "Archmage's Vicalyke": "Kamelaukion des Erzmagiers",
    "Crown of the Primus": "Die Krone des Primus",
    "Dark Mage's Shade": "Schemen des dunklen Magiers",
    "Storm Crow": "Sturmkrähe",
    "The Magistrate": "Der Magistrat",
    "Chaingmail": "Paulus' Kürass",
    "The Swami": "Der Swami",
    "Velvet Camaral": "Samtkalotte",
    "Fury of the Ancients": "Wut der Urahnen",
    "Homing Pads": "Zielsuchplatten",
    "Death Watch Mantle": "Todeswachtmantelung",
    "Pauldrons of the Skeleton King": "Schulterpanzer des Skelettkönigs",
    "Vile Ward": "Abscheuschutz",
    "Armor of the Kind Regent": "Rüstung des gütigen Regenten",
    "Spaulders of Zakara": "Plattenschultern von Zakara",
    "Cindercoat": "Aschemantel",
    "Goldskin": "Goldhaut",
    "Shi Mizu's Haori": "Shi Mizus Haori",
    "Beckon Sail": "Locktuch",
    "Blackfeather": "Schwarzfeder",
    "Cape of the Dark Night": "Cape des Schreckens, der die Nacht durchflattert",
    "The Cloak of the Garwulf": "Der Umhang des Garwulf",
    "Cloak of Deception": "Umhang der Täuschung",
    "Bracers of the First Men": "Armschienen der Ersten Menschen",
    "Coils of the First Spider": "Wickel der Obersten Spinne",
    "Bracers of Destruction": "Armschienen der Zerstörung",
    "Custerian Wristguards": "Custerische Handgelenkschützer",
    "Drakon's Lesson": "Drakons Lektion",
    "Jeram's Bracers": "Jerams Armschienen",
    "Gabriel's Vambraces": "Gabriels Unterarmschienen",
    "Krelm's Buff Bracers": "Krelms Verstärkungsarmschienen",
    "Krelm's Buff Belt": "Krelms Verstärkungsgürtel",
    "Nemesis Bracers": "Armschienen der Nemesis",
    "Promise of Glory": "Verheißung",
    "Ranslor's Folly": "Ranslors Torheit",
    "Spirit Guards": "Geisterschellen",
    "Strongarm Bracers": "Raufboldarmschienen",
    "Trag'Oul Coils": "Wickel des Trag'Oul",
    "Frostburn": "Frostbrand",
    "Warzechian Armguards": "Armschützer der Warzecha",
    "Wraps of Clarity": "Wickel der Klarheit",
    "Gladiator Gauntlets": "Gladiatorenpanzerhandschuhe",
    "Gloves of Worship": "Handschuhe der Huldigung",
    "Tasker and Theo": "Tasker und Theo",
    "Angel Hair Braid": "Engelshaarborte",
    "Belt of the Trove": "Gürtel des geheimen Schatzes",
    "Binding of the Lost": "Gürtelband der Verlorenen",
    "Belt of Transcendence": "Gürtel der Transzendenz",
    "Blessed of Haull": "Haulls Segen",
    "Goldwrap": "Goldträger",
    "Cord of the Sherma": "Band von Sherma",
    "Harrington Waistguard": "Hüftgurt der Harringtons",
    "Fazula's Improbable Chain": "Fazulas unmögliche Kette",
    "Crashing Rain": "Hagelsturm",
    "Haunting Girdle": "Spukgürtel",
    "Hwoj Wrap": "Wickeltuch der Hwoj",
    "Hunter's Wrath": "Zorn des Jägers",
    "Insatiable Belt": "Gürtel der Unersättlichkeit",
    "Omnislash": "Vielschlitzergürtel",
    "Jang's Envelopment": "Jangs Umhüllung",
    "Omryn's Chain": "Omryns Kette",
    "Sacred Harness": "Heiliger Gurt",
    "Sash of Knives": "Messerschärpe",
    "Sebor's Nightmare": "Sebors Alptraum",
    "Razor Strop": "Wetzriemen",
    "Thundergod's Vigor": "Kraft des Donnergotts",
    "Chilanik's Chain": "Chilaniks Kette",
    "Lamentation": "Klagelied",
    "Pride of Cassius": "Stolz von Cassius",
    "The Undisputed Champion": "Der unangefochtene Sieger",
    "Death's Bargain": "Todeshandel",
    "Depth Diggers": "Tiefenwühler",
    "Hexing Pants of Mr. Yan": "Hexenhose von Herrn Yan",
    "Illusory Boots": "Illusorische Stiefel",
    "Pox Faulds": "Pockenpantalons",
    "Boots of Disregard": "Stiefel der Missachtung",
    "Fire Walkers": "Flammengänger",
    "Irontoe Mudsputters": "Schlammspritzer mit Eisenkappe",
    "Lut Socks": "Lut-Socken",
    "Nilfur's Boast": "Nilfurs Stolz",
    "The Crudest Boots": "Die gröbsten Stiefel",
    "Dread Iron": "Schreckenseisen",
    "Genzaniku": "Genzaniku",
    "Hack": "Hacken",
    "Sky Splitter": "Himmelsspalter",
    "The Burning Axe of Sankis": "Die brennende Axt von Sankis",
    "The Butcher's Sickle": "Schlächtersichel",
    "Envious Blade": "Klinge des Neids",
    "Jace's Hammer of Vigilance": "Jaces Hammer der Wachsamkeit",
    "Mad Monarch's Scepter": "Szepter des wahnsinnigen Monarchen",
    "Odyn Son": "Odyns Sohn",
    "Arreat's Law": "Das Gesetz des Arreat",
    "Azurewrath": "Blauzorn",
    "Fulminator": "Donnerkeil",
    "Rimeheart": "Frostherz",
    "Solanium": "Solanium",
    "Sever": "Schnitt",
    "Wizardspike": "Zauberdorn",
    "Shard of Hate": "Splitter des Hasses",
    "Eun-jang-do": "Eun-jang-do",
    "Ice Climbers": "Eiskletterer",
    "St. Archew's Gage": "St. Archews Maß",
    "Skycutter": "Himmelsschlitzer",
    "Starmetal Kukri": "Sternstahlkukri",
    "Sacred Harvester": "Heiliger Ernter",
    "Anessazi Edge": "Anessazi-Stilett",
    "The Dagger of Darts": "Der Dolchpfeil",
    "Rhen'ho Flayer": "Rhen'hos Schinder",
    "Jawbreaker": "Kieferbrecher",
    "The Gidbinn": "Der Gidbinn",
    "The Spider Queen's Grasp": "Die Umklammerung der Spinnenkönigin",
    "The Fist of Az'Turrasq": "Die Faust von Az'Turrasq",
    "Vengeful Wind": "Rachsüchtiger Wind",
    "Darklight": "Dunkellicht",
    "Lion's Claw": "Löwenklaue",
    "Inviolable Faith": "Unerschütterlicher Glaube",
    "Gyrfalcon's Foote": "Gerfalkenfuß",
    "Kassar's Retribution": "Kassars Vergeltung",
    "Justinian's Mercy": "Justinians Gnade",
    "Johanna's Argument": "Johannas Argument",
    "Dishonored Legacy": "Geschändetes Erbe",
    "Swiftmount": "Windreiter",
    "Fjord Cutter": "Fjordspalter",
    "Burst of Wrath": "Ausbruch des Zorns",
    "Schaefer's Hammer": "Schaefers Hammer",
    "Butcher's Carver": "Schlächterschnitzer",
    "Skywarden": "Himmelswächter",
    "Thunderfury, Blessed Blade of the Windseeker": "Donnerzorn, Gesegnete Klinge des Windsuchers",
    "Arthef's Spark of Life": "Arthefs Lebensfunke",
    "Soulsmasher": "Seelenberster",
    "The Furnace": "Der Schmelzofen",
    "Maloth's Focus": "Maloths Fokus",
    "Vigilance": "Wachsamkeit",
    "The Grand Vizier": "Der Großwesir",
    "The Smoldering Core": "Der Schwelende Kern",
    "The Tormentor": "Der Peiniger",
    "Bovine Bardiche": "Rinderbardike",
    "Blade of Prophecy": "Klinge der Verheißung",
    "Valthek's Rebuke": "Valtheks Zurechtweisung",
    "Blood Brother": "Blutsbruder",
    "Wormwood": "Wermut",
    "Maximus": "Maximus",
    "Stalgard's Decimator": "Stalgards Dezimierer",
    "Scourge": "Geißel",
    "Incense Torch of the Grand Temple": "Weihrauchstab des großen Tempels",
    "Cam's Rebuttal": "Cams Erwiderung",
    "The Flow of Eternity": "Der Fluss der Ewigkeit",
    "Flying Dragon": "Fliegender Drache",
    "Baleful Remnant": "Unheilvolles Relikt",
    "Golden Flense": "Goldener Häuter",
    "Fate of the Fell": "Schicksal der Grausamen",
    "Bastion's Revered": "Held der Bastion",
    "Warstaff of General Quang": "Kriegsstab von General Quang",
    "Fury of the Vanished Peak": "Wut des vernichteten Gipfels",
    "The Gavel of Judgment": "Der Hammer des Richtspruchs",
    "Cluckeye": "Hühnerauge",
    "Madawc's Sorrow": "Madawcs Schmerz",
    "Leonine Bow of Hashir": "Löwenbogen von Hashir",
    "Odyssey's End": "Ende der Odyssee",
    "Kridershot": "Kriderschuss",
    "Yang's Recurve": "Yangs Reflexbogen",
    "The Raven's Wing": "Rabenflügel",
    "Demon Machine": "Dämonenmaschine",
    "Pus Spitter": "Eiterspeier",
    "Chanon Bolter": "Chanons Balläster",
    "Hellrack": "Höllenplage",
    "Calamity": "Katastrophe",
    "Wojahnni Assaulter": "Sturm der Wojahnni",
    "Helltrapper": "Höllenjäger",
    "Danetta's Revenge": "Danettas Rache",
    "Danetta's Spite": "Danettas Trotz",
    "The Demon's Demise": "Der Untergang der Dämonen",
    "K'mar Tenclip": "Blankbogen von K'mar",
    "The Mortal Drama": "Tödliches Drama",
    "Gesture of Orpheus": "Orpheus' Wink",
    "Valla's Bequest": "Vallas Vermächtnis",
    "Aether Walker": "Ätherwandler",
    "Wand of Woh": "Zauberstab von Woh",
    "Denial": "Die Verwehrung",
    "Defender of Westmarch": "Verteidiger der Westmark",
    "Coven's Criterion": "Maß des Zirkels",
    "Eberli Charo": "Eberlis Charo",
    "Freeze of Deflection": "Ablenkender Frost",
    "Serpent's Sparker": "Funkenstab der Schlange",
    "Slorak's Madness": "Sloraks Wahnsinn",
    "Vo'Toyias Spiker": "Vo'Toyias' Dornschild",
    "Ivory Tower": "Elfenbeinturm",
    "Guard of Johanna": "Johannas Schutzschild",
    "Hallowed Bulwark": "Geheiligtes Bollwerk",
    "Akarat's Awakening": "Akarats Erwachen",
    "Frydehr's Wrath": "Frydehrs Zorn",
    "Piro Marella": "Piro Marella",
    "Jekangbord": "Jekangbrett",
    "Hellskull": "Höllenschädel",
    "The Final Witness": "Der letzte Zeuge",
    "Salvation": "Erlösung",
    "Unrelenting Phalanx": "Unnachgiebige Phalanx",
    "Sublime Conviction": "Erhabene Überzeugung",
    "Henri's Perquisition": "Henris ewige Jagd",
    "Homunculus": "Homunkulus",
    "Uhkapian Serpent": "Uhkapische Schlange",
    "Light of Grace": "Licht der Gnade",
    "Shukrani's Triumph": "Shukranis Triumph",
    "Myken's Ball of Hate": "Mykens Hasskugel",
    "The Oculus": "Der Oculus",
    "Bombardier's Rucksack": "Rucksack des Bombenschützen",
    "Winter Flurry": "Wintereile",
    "Triumvirate": "Triumvirat",
    "Emimei's Duffel": "Emimeis tiefer Beutel",
    "The Ninth Cirri Satchel": "Neunter Köcher des Cirri",
    "Spines of Seething Hatred": "Dornen des brodelnden Hasses",
    "Scrimshaw": "Walrosszahn",
    "SuWong Diviner": "Wünschelrute von Su Wong",
    "Golden Scourge": "Goldgeißel",
    "Remorseless": "Unbarmherzigkeit",
    "Cinder Switch": "Aschebeil",
    "Sunder": "Zerfetzer",
    "Ahavarion, Spear of Lycander": "Ahavarion, Stab von Lycander",
    "Buriza-Do Kyanon": "Buriza-Do Kyanon",
    "Wall of Man": "Mauer der Menschheit",
    //Jewelry
    "Golden Gorget of Leoric": "Leorics goldenes Gorget",
    "Kymbo's Gold": "Kymbos Gold",
    "Mara's Kaleidoscope": "Maras Kaleidoskop",
    "Moonlight Ward": "Mondlichtschutz",
    "Overwhelming Desire": "Überwältigendes Verlangen",
    "Rakoff's Glass of Life": "Rakoffs Glas des Lebens",
    "Hellfire Ring": "Höllenfeuerring",
    "Talisman of Aranoch": "Talisman von Aranoch",
    "The Ess of Johan": "Johanns Essenz",
    "The Star of Azkaranth": "Der Stern von Azkaranth",
    "Xephirian Amulet": "Xephirisches Amulett",
    "Arcstone": "Arcusstein",
    "Avarice Band": "Band der Habgier",
    "Mirrorball": "Spiegelkugel",
    "Dead Man's Legacy": "Vermächtnis des toten Mannes",
    "Band of Hollow Whispers": "Band des leeren Raunens",
    "Dovu Energy Trap": "Energiefalle von Dovu",
    "Countess Julia's Cameo": "Kamee von Gräfin Julia",
    "Bul'Kathos's Wedding Band": "Bul-Kathos' Hochzeitsring",
    "Halo of Arlyse": "Arlyses Halo",
    "Broken Promises": "Gebrochene Versprechen",
    "Band of the Rue Chambers": "Band der Reuekammern",
    "Haunt of Vaxo": "Vaxos Heimsuchung",
    "Eternal Union": "Ewige Einheit",
    "Nagelring": "Nagelring",
    "Convention of Elements": "Zusammenkunft der Elemente",
    "Oculus Ring": "Oculus-Ring",
    "Krede's Flame": "Kredes Flamme",
    "Pandemonium Loop": "Reif des Wahnsinns",
    "Rechel's Ring of Larceny": "Rechels Ring des Diebstahls",
    "Puzzle Ring": "Flechtring",
    "Obsidian Ring of the Zodiac": "Obsidianring des Tierkreises",
    "Skull Grasp": "Schädelgriff",
    "Ring of Royal Grandeur": "Ring des königlichen Prunks",
    "Rogar's Huge Stone": "Rogars riesiger Stein",
    "Unity": "Einheit",
    "The Short Man's Finger": "Ring des kleinen Mannes",
    "The Tall Man's Finger": "Ring des großen Mannes",
    "In-geom": "In-geom",
    "Cosmic Strand": "Kosmischer Strang",
    "Wyrdward": "Wyrdschutz",
};
const n18i = {};
for (const k in i18n) {
    n18i[i18n[k]] = k;
}