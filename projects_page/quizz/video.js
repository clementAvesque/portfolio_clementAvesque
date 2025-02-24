projects = JSON.parse(localStorage.getItem("projects"))
let start_stop = true
let doc_name = document.getElementsByTagName("h1")[0].innerText.toLowerCase()




document.getElementById("video_dimention").addEventListener('click', () => {
    document.body.style.overflow = "hidden"
    document.getElementById("video_dimention").style.position = "fixed"
    document.getElementById("video_dimention").style.top = "10vh"
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    if (start_stop === true) {
        document.querySelector("video").pause()
        start_stop = !start_stop

    } else {
        document.querySelector("video").play()
        start_stop = !start_stop
    }

})

for (let i = 0; i < projects.length; i++) {
    if (doc_name === projects[i].titre.toLowerCase()) {
        for (let z = 0; z < projects[i].chips.length; z++) {
            let chips = document.createElement("div")
            chips.textContent = projects[i].chips[z]
            chips.classList.add("chips_desc")
            document.getElementById("langage").appendChild(chips)

        }
    } else {

    }
}

document.body.addEventListener('keyup', (e) => {
    console.log(e.key)
    if (e.key === "Escape") {
        console.log("test")
        document.getElementById("video_dimention").style.position = "relative"
        document.getElementById("video_dimention").style.top = "none"
        document.body.style.justifyContent = 'flex-start';
        document.body.style.alignItems = 'flex-start';
        document.body.style.overflow = "auto"
    }
});




for (let i = 0; i < projects.length; i++) {
    console.log(projects[i].titre.toLowerCase())
    if (doc_name.toLowerCase() === projects[i].titre.toLowerCase()) {

        console.log("false");
    } else {
        const cards = document.createElement("div");
        cards.id = i;
        cards.classList.add("another_project");
        document.getElementsByTagName("footer")[0].appendChild(cards);

        const picture = document.createElement("img");
        picture.src = `../../${projects[i].img}`;
        cards.appendChild(picture);

        document.getElementById(i).addEventListener('click', () => {
            location.href = `../../${projects[i].link}`;
        });


    }
}