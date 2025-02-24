

let currentQuest = 0


let album = [
    {
        src: "image/album/1.adele.jpg",
        ans: ["Adele", "Mylène Farmer", "AURORA", "P!nk"],
        goodAns: "Adele"
    },
    {
        src: "image/album/2.amy winehouse.png",
        ans: ["Rihanna", "Edith Piaf", "Amy Winehouse", "Amy Grant"],
        goodAns: "Amy Winehouse"
    },
    {
        src: "image/album/moche.jpg",
        ans: ["Ariana Grande", "Beyoncé", "Madonna", "Mariah Carey"],
        goodAns: "Beyoncé"
    },
    {
        src: "image/album/6.david bowie.png",
        ans: ["David Bowie", "Neil Young", "John Lenon", "Elvis Presley"],
        goodAns: "David Bowie"
    },
    {
        src: "image/album/7.bruno mars.jpg",
        ans: ["The Weeknd", "Black Atlas", "Kayne West", "Bruno Mars"],
        goodAns: "Bruno Mars"
    },
    {
        src: "image/album/8.bigflo et oli.png",
        ans: ["Roméo Elvis", "Bigflo et Oli", "Stromae", "Orelsan"],
        goodAns: "Bigflo et Oli"
    },
    {
        src: "image/album/9.linkin park.png",
        ans: ["Gorillaz", "The Offspring", "Linkin Park", "Systeme Of A Down"],
        goodAns: "Linkin Park"
    },
    {
        src: "image/album/10.maneskin.png",
        ans: ["The Neighborhoods", "Måneskin", "Artic Monkey", "One Direction"],
        goodAns: "Måneskin"
    },
    {
        src: "image/album/11.micheal jackson.png",
        ans: ["Michael Jackson", "Elton John", "Jackson 5", "Bob Marley"],
        goodAns: "Michael Jackson"
    },
    {
        src: "image/album/5.beatles.jpg",
        ans: ["Beatles", "Guns N'Roses", "Black Sabbath", "Aérosmith"],
        goodAns: "Beatles"
    },

    {
        src: "image/album/16.ninho.png",
        ans: ["Gazo", "Ninho", "Niska", "Karis"],
        goodAns: "Ninho"
    },
    {
        src: "image/album/4.aznavour.png",
        ans: ["renaud", "claude françois", "charles aznavour", "george brassens"],
        goodAns: "charles aznavour"
    },
    {
        src: "image/album/12.mika.jpg",
        ans: ["Pan!c at the Disco", "Loïc Nottet", "BB Brunes", "MIKA"],
        goodAns: "MIKA"
    },
    {
        src: "image/album/13.plk.jpg",
        ans: ["PLK", "Tiakola", "Damso", "Zola"],
        goodAns: "PLK"
    },
    {
        src: "image/album/14.pink floyd.jpg",
        ans: ["Metallica", "Daft Punk", "Pink Floyd", "Oasis"],
        goodAns: "Pink Floyd"
    },
    {
        src: "image/album/15.nirvana.png",
        ans: ["My Chemical Romance", "Rammstein", "Deftones", "Nirvana"],
        goodAns: "Nirvana"
    },
    {
        src: "image/album/17.pnl.jpg",
        ans: ["Ziak", "Nekfeu", "PNL", "Jok'air"],
        goodAns: "PNL"
    },
    {
        src: "image/album/18.queen.jpeg",
        ans: ["Foo Fighters", "Queen", "Radiohead", "Kiss"],
        goodAns: "Queen"
    },
    {
        src: "image/album/19.rolling stones.jpeg",
        ans: ["The Rolling Stones", "The Eagles", "The Whites Stripes", "The Kinks"],
        goodAns: "The Rolling Stones"
    },
    {
        src: "image/album/20.yame.jpg",
        ans: ["Luidji", "Tayc", "Yamê", "Luther"],
        goodAns: "Yamê"
    }
]

let animaux = [
    {
        src: "image/animaux/1.aigle.jpeg",
        ans: ["Faucon", "Vautour", "Milan royal", "Aigle"],
        goodAns: "Aigle"
    },
    {
        src: "image/animaux/2.beluga.jpg",
        ans: ["Dauphin", "Requin", "Beluga", "Baleine",],
        goodAns: "Beluga"
    },
    {
        src: "image/animaux/3.capybara.jpeg",
        ans: ["Mara", "Cochon dinde", "Hamster", "Capybara"],
        goodAns: "Capybara"
    },
    {
        src: "image/animaux/4.chamoix.jpg",
        ans: ["Chamoix", "Chèvre", "Bouc", "Isard"],
        goodAns: "Chamoix"
    },
    {
        src: "image/animaux/5.chat.jpeg",
        ans: ["Serval", "Chat", "Rat", "Lynx"],
        goodAns: "Chat"
    },
    {
        src: "image/animaux/6.chien.jpg",
        ans: ["loup", "Chacal", "Coyotte", "Chien"],
        goodAns: "Chien"
    },
    {
        src: "image/animaux/7.elan.jpeg",
        ans: ["Cerf", "Caribou", "Elan", "Rennes"],
        goodAns: "Elan",
    },
    {
        src: "image/animaux/8.grenouille.jpg",
        ans: ["Grenouille", "Crapeau", "Axolotl", "Salamandre"],
        goodAns: "Grenouille"
    },
    {
        src: "image/animaux/9.lapin.jpg",
        ans: ["Lièvres", "Ecureuils", "Lapin", "Marmottes"],
        goodAns: "Lapin"
    },
    {
        src: "image/animaux/10.lion.jpg",
        ans: ["Yenne", "Lion", "Tigre", "Panthère"],
        goodAns: "Lion"
    },
    {
        src: "image/animaux/11.loup.jpg",
        ans: ["Loup", "Loutre", "Renard", "Chien-loup", "Loup"],
        goodAns: "Loup"
    },
    {
        src: "image/animaux/12.lynx.jpeg",
        ans: ["Caracal", "Linx", "Lynx", "Renard"],
        goodAns: "Lynx"
    },
    {
        src: "image/animaux/13.meduse.jpeg",
        ans: ["Anemone de mer", "Méduse", "Corail", "Hydroïde"],
        goodAns: "Méduse"
    },
    {
        src: "image/animaux/14.paresseux.jpg",
        ans: ["Paresseux", "Fourmilier", "Koala", "Echidné"],
        goodAns: "Paresseux"
    },
    {
        src: "image/animaux/15.poisson lion.jpeg",
        ans: ["Blobfish", "Poisson-lune", "Poisson rouge", "Poisson-lion"],
        goodAns: "Poisson-lion"
    },
    {
        src: "image/animaux/16.poulpe.jpeg",
        ans: ["Calmar", "Pieuvre", "Poulpe", "Seiche"],
        goodAns: "Poulpe"
    },
    {
        src: "image/animaux/17.raie menta.jpeg",
        ans: ["Requin", "Chimère", "Raie menta", "Pastenague"],
        goodAns: "Raie menta"
    },
    {
        src: "image/animaux/18.renard.jpeg",
        ans: ["Renard", "Chacal", "Chien", "Dhole"],
        goodAns: "Renard"
    },
    {
        src: "image/animaux/19.requin.jpg",
        ans: ["Poisson-scie", "Requin", "Raie", "Chimère"],
        goodAns: "Requin"
    },
    {
        src: "image/animaux/20.serpent.jpeg",
        ans: ["Serpent", "Orvet", "Lezard", "Serpent"],
        goodAns: "Serpent"
    }
]

let flag = [
    {
        src: "image/drapeaux/1.afrique du sud.png",
        ans: ["Arménie", "Bolivie", "Afrique du Sud", "Bostwana"],
        goodAns: "Afrique du Sud"
    },
    {
        src: "image/drapeaux/2.angleterre.png",
        ans: ["Royaume-Unis", "Angleterre", "Cuba", "Croatie"],
        goodAns: "Royaume-Unis"
    },
    {
        src: "image/drapeaux/3.argentine.png",
        ans: ["Guatemala", "Fidji", "Costa Rica", "Argentine"],
        goodAns: "Argentine"
    },
    {
        src: "image/drapeaux/4.bangladesh.png",
        ans: ["Burkina Faso", "Bangladesh", "Cote d'Ivoire", "Haïti"],
        goodAns: "Bangladesh"
    },
    {
        src: "image/drapeaux/5.bulgarie.png",
        ans: ["Bulgarie", "Mali", "Burundie", "Namibie"],
        goodAns: "Bulgarie"
    },
    {
        src: "image/drapeaux/7.france.png",
        ans: ["Moldavie", "Pays-Bas", "Roumanie", "France"],
        goodAns: "France"
    },
    {
        src: "image/drapeaux/6.canada.png",
        ans: ["Singapour", "Pérou", "Norvège", "Canada"],
        goodAns: "Canada"
    },
    {
        src: "image/drapeaux/8.grece.png",
        ans: ["Guatemala", "Islande", "Grèce", "Honduras"],
        goodAns: "Grèce"
    },
    {
        src: "image/drapeaux/9.inde.png",
        ans: ["Inde", "Lituanie", "Mongolie", "Ouganda"],
        goodAns: "Inde"
    },
    {
        src: "image/drapeaux/10.irlande.png",
        ans: ["Panama", "Mauritanie", "Irlande", "Mexique"],
        goodAns: "Irlande"
    },
    {
        src: "image/drapeaux/11.jamaique.png",
        ans: ["Seychelles", "Indonésie", "Jordanie", "Jamaïque"],
        goodAns: "Jamaïque"
    },
    {
        src: "image/drapeaux/12.kenya.png",
        ans: ["Kirghizistan", "Kenya", "Kowet", "Kiribati"],
        goodAns: "Kenya"
    },
    {
        src: "image/drapeaux/13.liban.png",
        ans: ["Liban", "Malawi", "Nigeria", "Ouganda"],
        goodAns: "Liban"
    },
    {
        src: "image/drapeaux/14.madagascar.png",
        ans: ["Indonésie", "Guinée", "Equateur", "Madagascar"],
        goodAns: "Madagascar"
    },
    {
        src: "image/drapeaux/15.nepal.png",
        ans: ["Pakistan", "Quatar", "Népal", "Salvador"],
        goodAns: "Népal"
    },
    {
        src: "image/drapeaux/16.philipines.png",
        ans: ["Philipines", "Nicaragua", "Maroc", "Lettonie"],
        goodAns: "Philipines"
    },
    {
        src: "image/drapeaux/17.russie.png",
        ans: ["Russie", "Gabon", "Croatie", "Tchéquie"],
        goodAns: "Russie"
    },
    {
        src: "image/drapeaux/18.sri lanka.png",
        ans: ["Monténégro", "Serbie", "Tanzanie", "Sri Lanka"],
        goodAns: "Sri Lanka"
    },
    {
        src: "image/drapeaux/19.us.png",
        ans: ["Nouvelle-Zélande", "Etats-Unis", "Australie", "Îles Cook"],
        goodAns: "Etats-Unis"
    },
    {
        src: "image/drapeaux/20.zimbabwe.png",
        ans: ["Brunei", "Zimbabwe", "Comores", "Biélorussie"],
        goodAns: "Zimbabwe"
    },
];

let brand = [
    {
        src: "image/vetement/1.adidas.png",
        ans: ["Adidas", "Nike", "Fusalp", "The North Face"],
        goodAns: "Adidas"
    },
    {
        src: "image/vetement/2.calvin klein.png",
        ans: ["Chanel", "Gucci", "Calvin Klein", "Versace"],
        goodAns: "Calvin Klein"
    },
    {
        src: "image/vetement/3.carhartt.webp",
        ans: ["Fendi", "Carhartt", "Converse", "Guess"],
        goodAns: "Carhartt"
    },
    {
        src: "image/vetement/4.chanel.png",
        ans: ["Chanel", "Gucci", "Burton", "Dior"],
        goodAns: "Chanel"
    },
    {
        src: "image/vetement/5.coverse.png",
        ans: ["Burburry", "Giorgio Armani", "Versace", "Converse"],
        goodAns: "Converse"
    },
    {
        src: "image/vetement/6.dickies.png",
        ans: ["Fila", "Dickies", "Superdry", "Catimini"],
        goodAns: "Dickies"
    },
    {
        src: "image/vetement/7.dolce gabana.jpg",
        ans: ["Yves Saint Laurent", "H&M", "Dolce Gabana", "Columbia"],
        goodAns: "Dolce Gabana"
    },
    {
        src: "image/vetement/8.hermes.png",
        ans: ["Moncler", "Boss", "Versace", "Hermes"],
        goodAns: "Hermes"
    },
    {
        src: "image/vetement/9.karl lagarfeld.png",
        ans: ["Fendi", "Karl Lagarfeld", "Prada", "Burburry"],
        goodAns: "Karl Lagarfeld"
    },
    {
        src: "image/vetement/10.lacoste.png",
        ans: ["Lacoste", "Crocs", "Tom Ford", "Givenchy"],
        goodAns: "Lacoste"
    },
    {
        src: "image/vetement/11.levis.png",
        ans: ["Guess", "Champion", "Levi's", "Tommy Hilfiger"],
        goodAns: "Levi's"
    },
    {
        src: "image/vetement/12.louis vuitton.png",
        ans: ["Louis Vuitton", "Marc Jacobs", "Balenciaga", "Yves Saint Laurent"],
        goodAns: "Louis Vuitton"
    },
    {
        src: "image/vetement/13.moncler.png",
        ans: ["Mugler", "Lancel", "Longchamp", "Moncler"],
        goodAns: "Moncler"
    },
    {
        src: "image/vetement/14.new balance.png",
        ans: ["Vince", "New Balance", "Chloé", "Giorgio Armani"],
        goodAns: "New Balance"
    },
    {
        src: "image/vetement/20.nike.webp",
        ans: ["Guess", "Prada", "Nike", "Boss"],
        goodAns: "Nike"
    },
    {
        src: "image/vetement/15.petit bateau.png",
        ans: ["Givenchy", "Lanvin", "Petit Bateau", "Tom Ford"],
        goodAns: "Petit Bateau"
    },
    {
        src: "image/vetement/16.puma.jpg",
        ans: ["Puma", "Bally", "Chanel", "Chloé"],
        goodAns: "Puma"
    },
    {
        src: "image/vetement/17.ralph lauren.webp",
        ans: ["Cartier", "Michael Kors", "Ralph Lauren", "Hermes"],
        goodAns: "Ralph Lauren"
    },
    {
        src: "image/vetement/18.reebook.png",
        ans: ["Moschino", "Miu Miu", "Jimmy Choo", "Reebook"],
        goodAns: "Reebook"
    },
    {
        src: "image/vetement/19.timberland.png",
        ans: ["Gucci", "Dior", "Timberland", "Dolce & Gabana"],
        goodAns: "Timberland"
    }
];

let monument = [
    {
        src: "image/monument/1.alhambra.jpg",
        ans: ["Alcaza d'Almeria", "Alhambra", "Alcazar Royal", "Mosquée Cathédrale"],
        goodAns: "Alhambra"
    },
    {
        src: "image/monument/2.christ redempteur.jpg",
        ans: ["Christ Roi", "Venus de Milo", "Statue de la Liberté", "Christ Redempteur"],
        goodAns: "Christ Redempteur"
    },
    {
        src: "image/monument/3.golden gate bridge.jpeg",
        ans: ["Golden  Gate Bridge", "Viaduc de Millau", "Pont de Brooklyn", "Pont du Gard"],
        goodAns: "Golden Gate Bridge"
    },
    {
        src: "image/monument/4.grande muraille.jpeg",
        ans: ["Muraille de Constantinople", "Mur de Berlin", "Grande Muraille de Chine", "Muraille de Séoule"],
        goodAns: "Grande Muraille de Chine"
    },
    {
        src: "image/monument/5.mach picchu.jpg",
        ans: ["Kuelac", "Pisac, Vallée Sacrée", "Plateforme Agricole d'Ollantaytambo", "Machu Picchu"],
        goodAns: "Machu Picchu"
    },
    {
        src: "image/monument/6.memorial 11 sept.jpg",
        ans: ["Mémorial du Martyr", "Mémorial du 11 Septembre", "Parc du Mémorial de la Paix", "Musée National D'auschwitz"],
        goodAns: "Mémorial du 11 Septembre"
    },
    {
        src: "image/monument/7.mosquée sheikh.jpg",
        ans: ["Mosquée Hassan-2", "Mosquée Al-Asqua", "Mosquée Skeikh", "Mosquée Bleue"],
        goodAns: "Mosquée Skeikh"
    },
    {
        src: "image/monument/8.mosquée ste sophie.jpg",
        ans: ["Mosquée Sainte Sophie", "Mosqué Nasir-ol-Malk", "Mosquée Istiqlal", "Mosquée Faisal"],
        goodAns: "Mosquée Sainte Sophie"
    },
    {
        src: "image/monument/9.mt st michel.jpg",
        ans: ["Mortain-Bocage", "Notre-Dame de Paris", "Sanctuaire de Notre-Dame de Lourdes", "Mont Saint Michel"],
        goodAns: "Mont Saint Michel"
    },
    {
        src: "image/monument/10.notrev dame de paris.jpg",
        ans: ["Notre-Dame de Reims", "Abbaye de Fontfroide", "Notre-Dame de Paris", "Eglise Sainte Catherine"],
        goodAns: "Notre-Dame de Paris"
    },
    {
        src: "image/monument/11.opera sydney.jpg",
        ans: ["Opéra Garnier", "Opéra de Sydney", "Opéra Semperoper", "Opéra d'Etat de Viennes"],
        goodAns: "Opéra de Sydney"
    },
    {
        src: "image/monument/12.sagrada familia.avif",
        ans: ["Sagrada Familia", "Alhambra", "Cathédrale de Burges", "Cathédrale de Palme"],
        goodAns: "Sagrada Familia"
    },
    {
        src: "image/monument/14.taj mahal.jpg",
        ans: ["Bibi Ka Maqbara", "Taj Mahal", "Qutub Minar", "Temple d'or"],
        goodAns: "Taj Mahal"
    },
    {
        src: "image/monument/13.statue de la liberte.webp",
        ans: ["Christ Redempteur", "Venus de Milo", "Statue de la Mère-Patrie", "Statue de la Libertée"],
        goodAns: "Statue de la Libertée"
    },
    {
        src: "image/monument/15.temple abou simbel.jpg",
        ans: ["Temple Louxor", "Temple Kom Ombo", "Temple d'Abou Simbel", "Temple d'Hatchepsout"],
        goodAns: "Temple d'Abou Simbel"
    },
    {
        src: "image/monument/16.temple d'angkor.jpg",
        ans: ["Temple Beng Mealea", "Temple d'Angkar Wat", "Temple Preach Vihear", "Le fort de Derawat"],
        goodAns: "Temple d'Angkar Wat"
    },
    {
        src: "image/monument/17temple wat pho.jpg",
        ans: ["Grand Palais", "Temple Wat Arun", "Bangla Road", "Temple Wat Pho"],
        goodAns: "Temple Wat Pho"
    },
    {
        src: "image/monument/18.tour de pise.jpeg",
        ans: ["Tour de Pise", "BigBen", "Tour Petronas", "Batiment Lloyd"],
        goodAns: "Tour de Pise"
    },
    {
        src: "image/monument/19.tour eiffel.jpg",
        ans: ["Batiment Flaitron", "Tour de Canton", "Burj Khalifa", "Tour Eiffel"],
        goodAns: "Tour Eiffel"
    },
    {
        src: "image/monument/20.ville maya.jpg",
        ans: ["Tulum", "Cobà", "Ancienne Ville Maya", "Calakmul"],
        goodAns: "Ancienne Ville Maya"
    }
];

let serie = [
    {
        src: "image/serie/13.mercredi.jpg",
        ans: ["La famille Adams", "Mercredi", "Sabrina", "Shadow and Bones"],
        goodAns: "Mercredi"
    },
    {
        src: "image/serie/6.friends.png",
        ans: ["Friends", "How I Met Your Mother", "This is us", "Cougar Town"],
        goodAns: "Friends"
    },
    {
        src: "image/serie/20.the walking dead.webp",
        ans: ["Daybreak", "The Last of Us", "Black Summer", "The Walking Dead"],
        goodAns: "The Walking Dead"
    },
    {
        src: "image/serie/5.elite.jpg",
        ans: ["Après toi le chaos", "Elite", "L'Age de la Colère", "Toy Boy"],
        goodAns: "Elite"
    },
    {
        src: "image/serie/19.the originels.jpg",
        ans: ["Legacies", "The Originels", "Vampires Diarries", "Charmed"],
        goodAns: "The Originels"
    },
    {
        src: "image/serie/12.lupin.jpg",
        ans: ["Kaléidoscope", "Braqueurs", "Furies", "Lupin"],
        goodAns: "Lupin"
    },
    {
        src: "image/serie/11.lost.jpg",
        ans: ["Lost", "Fringe", "Manifest", "La Brea"],
        goodAns: "Lost"
    },
    {
        src: "image/serie/18.the 100.png",
        ans: ["Silo", "The Rain", "The 100", "The Expense"],
        goodAns: "The 100"
    },
    {
        src: "image/serie/4.casa de papel.jpg",
        ans: ["Ozark", "Money Host: Korea", "Berlin", "Casa De Papel"],
        goodAns: "Casa De Papel"
    },
    {
        src: "image/serie/10.hazbin hotel.png",
        ans: ["Désenchantée", "Luz à Osville", "Helluva Boss", "Hazbin Hotel"],
        goodAns: "Hazbin Hotel"
    },
    {
        src: "image/serie/17.teen wolf.jpg",
        ans: ["Wolf Pack", "Teen Wolf", "Legacies", "Shadowhunters"],
        goodAns: "Teen Wolf"
    },
    {
        src: "image/serie/3.breaking bad.png",
        ans: ["Barry", "Les Sopranos", "Breaking Bad", "Narcos"],
        goodAns: "Breaking Bad"
    },
    {
        src: "image/serie/9.gossip girl.png",
        ans: ["Gossip Girl", "Riverdale", "Glimore Girls", "Dynastie"],
        goodAns: "Gossip Girl"
    },
    {
        src: "image/serie/16.strangee things.webp",
        ans: ["The Order", "Lock and Key", "Umbrella Academy", "Stranger Things"],
        goodAns: "Stranger Things"
    },
    {
        src: "image/serie/2.american nightmare.jpg",
        ans: ["American Nightmare", "Scream", "Freakish", "Slasher"],
        goodAns: "American Nightmare"
    },
    {
        src: "image/serie/15.prison break.webp",
        ans: ["Sons of Anarchy", "Breakour Kings", "Prison Break", "24 heures chrono"],
        goodAns: "Prison Break"
    },
    {
        src: "image/serie/14.peaky blinders.webp",
        ans: ["Better Call Saul", "Peaky Blinders", "The Last Kingdom", "Vicking"],
        goodAns: "Peaky Blinders"
    },
    {
        src: "image/serie/1.american god.jpeg",
        ans: ["The Magicians", "Preacher", "Sandman", "American Gods"],
        goodAns: "American Gods"
    },
    {
        src: "image/serie/7.game of throne.jpg",
        ans: ["Game Of Thrones", "The Witchers", "Shadow and Bones", "His dark materials"],
        goodAns: "Game Of Thrones"
    },
    {
        src: "image/serie/8.good omens.webp",
        ans: ["Good Omens", "Umbrella Academy", "Staged", "Supernatural"],
        goodAns: "Good Omens"
    }
];

let quest = []

let choice = localStorage.getItem('choix')

let def = document.querySelector('p')
let img = document.querySelector('#img_select')

console.log(choice)
if (choice == 1) {
    let text = "quel est cette série?"
    def.innerText = text
    quest = serie
}
if (choice == 2) {
    let text = "quel est cette album?"
    def.innerText = text
    quest = album
}
if (choice == 3) {
    let text = "quel est cette animal?"
    def.innerText = text
    quest = animaux

}
if (choice == 4) {
    let text = "quel est cette marque?"
    def.innerText = text
    quest = brand
}
if (choice == 5) {
    let text = "quel est ce monument?"
    def.innerText = text
    quest = monument
}
if (choice == 6) {
    let text = "quel est ce drapeau?"
    def.innerText = text
    quest = flag
}

let reponses = document.querySelector('#reponses')

// const button = document.createElement("button");
// button.id = "rep1"
// button.innerText = "ergeh";
// reponses.appendChild(button);


// const button_next = document.querySelector('#passe')
// button_next.addEventListener('click', () => {

// })

// for(let run=0;run<quest.length;run++){
//     let current_item= quest[run]
//     console.log(current_item.src)
//     img.src = quest[run].src

// }

// console.log(quest[0].src)
// console.log(quest[0].ans)

let ans = quest[currentQuest].ans
let point = 0
img.src = quest[currentQuest].src
const button_next = document.querySelector('#btn')
const audio_false = new Audio('sound_effect/false.mp3');
const audio_true = new Audio('sound_effect/true.mp3');


for (let i = 0; i < ans.length; i++) {
    const button = document.createElement("button");
    button.addEventListener('click', () => {
        let goodans = quest[currentQuest].goodAns
        if (button.innerText == goodans) {
            audio_true.play()
            point++

            localStorage.setItem("result", point)
        } else { audio_false.play(); }
        console.log(point)
        console.log(currentQuest)
        nextquestion()
    })

    button.id = "rep" + i
    button.innerText = ans[i];
    reponses.appendChild(button);

}


button_next.addEventListener('click', () => {
    nextquestion()
})




function nextquestion() {
    if (1 + currentQuest >= quest.length) {


        window.location.href = "page_de_base/resultat.html";
    }
    currentQuest = currentQuest + 1
    img.src = quest[currentQuest].src

    // console.log(currentQuest)
    // console.log(quest.length)



    for (let check = 0; check < ans.length; check++) {
        let ans = quest[currentQuest].ans

        let CheckAns = document.querySelector('#rep' + check)
        CheckAns.innerText = ans[check];
    }
}


let timer = 60;

function Timer() {
    
    setInterval(() => {
        timer--;
        let chrono = document.querySelector('#titleChrono')
        chrono.innerText = timer;
        if (timer < 0) {
            window.location.href = "page_de_base/resultat.html"
        }
        console.log(timer)
    }, 1000);

}

Timer();


