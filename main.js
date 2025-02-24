let projects = [
    {
        link:"projects_page/rat/found_the_rat.html",
        titre: "FOUND THE MOUSE",
        desc: "Dans ce jeu, vous incarnez un assistant d’un chef et une souris s’est infiltrée dans sa cuisine ! Attrapez la souris avant qu’elle ne s’enfuie!",
        chips: ["javascript", "css", "html"],
        img: `img/rat_mort.png`,
        video:''
    },
    {   
        link:"projects_page/balloon/FLYING_IN_THE_SKY.html",
        titre: "Flying to the sky",
        desc: "Sois le premier à toucher les étoiles dans ce jeu de spamming grâce à ta montgolfière. Appuie le plus vite possible pour aller le plus haut!",
        chips: ["javascript", "css", "html"],
        img: `img/balloon.png`,
        video: "balloon_video.mp4"
    },
    {   
        link:"projects_page/quizz/QlturG.html",
        titre: "Qltur G",
        desc: "Avez-vous assez de connaissances pour répondre à toutes les questions de ce quiz ? Venez essayer de répondre aux questions de culture générale et montrez que vous en avez dans la tête !",
        chips: ["javascript", "css", "html"],
        img: `img/quizz.png`,
        video: ''
    },
]

localStorage.setItem("projects", JSON.stringify(projects))

let nbr_project = 2
let show_project = false
let affichage = false

setInterval(()=>{
    affichage = !affichage
    if(affichage === true){
        document.querySelector("span").textContent= "|"
    }else{
        document.querySelector("span").textContent=""
    }
},1000)


function card(img, Titre, description, chips_tab, id) {

    // -----creation de l'espace pour la card--------//
    const cards = document.createElement("div")
    cards.id = id
    cards.classList.add("cards_project")
    document.getElementById("my_projects").appendChild(cards)

    //------------creation de l'espace de la description-------//
    const space_image = document.createElement("div")
    space_image.classList.add("picture_present")
    cards.appendChild(space_image)

    const image =document.createElement("img")
    image.src = img
    space_image.appendChild(image)

    const info_proj = document.createElement("div")
    info_proj.classList.add("describe")
    cards.appendChild(info_proj)

    const titleProj = document.createElement("div")
    titleProj.classList.add("title_project")
    titleProj.innerHTML = Titre
    info_proj.appendChild(titleProj)

    const desc = document.createElement("div")
    desc.classList.add("describe_project")
    desc.innerHTML = description
    info_proj.appendChild(desc)

    const chips_placement = document.createElement("div")
    chips_placement.classList.add("chips_project")
    info_proj.appendChild(chips_placement)

    for(let i = 0 ; i< chips_tab.length; i++){
        const simple_chips = document.createElement("div")
        simple_chips.classList.add("chips")
        simple_chips.innerHTML = chips_tab[i]
        chips_placement.appendChild(simple_chips)
    }

    const more = document.createElement("div")
    more.classList.add("page_project")
    cards.appendChild(more)
}



for(let i = 0 ; i <nbr_project; i++ ){
    card(projects[i].img, projects[i].titre, projects[i].desc, projects[i].chips, i)
    document.getElementById(i).addEventListener('mouseover', () => {
        console.log()
        document.querySelectorAll(`.page_project`)[i].style.borderLeft = "solid 1px";
        document.querySelectorAll(`.page_project`)[i].innerHTML = "en savoir plus?"
    });
    document.getElementById(i).addEventListener('mouseout', () => {
        document.querySelectorAll(`.page_project`)[i].style.borderLeft = "none ";
document.querySelectorAll(`.page_project`)[i].textContent = ""
    });
    document.querySelectorAll(".cards_project")[i].addEventListener('click', () => {
        window.location.href = projects[i].link
    })
}

document.getElementById("other_project").addEventListener('click',()=>{
    let all_cards = document.querySelectorAll(".cards_project")
    for(let i = 0; i< all_cards.length; i++){
        all_cards[i].remove()
    }
    show_project = !show_project
    if (show_project === true){
        nbr_project = projects.length
        
        document.getElementById("other_project").style.transform = "rotate(180deg)";
    }else{
        nbr_project = 2
        document.getElementById("other_project").style.transform = "rotate(0deg)";
    }
    for (let i = 0; i < nbr_project; i++) {
        card(projects[i].img, projects[i].titre, projects[i].desc, projects[i].chips, i);
        document.getElementById(i).addEventListener('mouseover', () => {
            
            document.querySelectorAll(`.page_project`)[i].style.borderLeft = "solid 1px";
            document.querySelectorAll(`.page_project`)[i].innerHTML = "en savoir plus?"
        });
        document.getElementById(i).addEventListener('mouseout', () => {
            
            document.querySelectorAll(`.page_project`)[i].style.borderLeft = "none ";
            document.querySelectorAll(`.page_project`)[i].textContent = ""
        });
        document.querySelectorAll(".cards_project")[i].addEventListener('click', () => {
            window.location.href = projects[i].link
        })
    }
})


