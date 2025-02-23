let nbr_click = 0;
let win = Rand(64)
const squares = document.getElementsByClassName("square")
let case_used = document.getElementsByClassName("used")
let game = document.getElementById("game")
let decor = document.getElementById("decor")
let start = document.getElementById("start")
const free_case = [""]
let index = win
let interval;
let time = Rand(10) * 1000
console.log(time)
let click_end = 7
let more_or_less = true
let limited = false
let rat_case = null;
let check_win =false;
let check_loose = false

let button_start = document.createElement("button")
button_start.innerHTML = "commencer"
button_start.id = "start"
game.appendChild(button_start);



function Rand(max) {
    return Math.floor(Math.random() * max);
}

function area() {


    interval = setInterval(() => {
        if (document.querySelector('.rotate') !== null) {
            document.querySelector('.rotate').classList.remove('rotate')
        }

        win = free_case[Rand(free_case.length)]
        rat_case = document.getElementById(win.toString())
        console.log(rat_case)
        console.log(win)
        if(rat_case!=null){
        rat_case.classList.add("rotate")}
    }, 800)

    //------------------crée le titre----------------//
    let titre = document.createElement("p")
    titre.innerHTML = "ATTRAPE LA SOURIS!!!"
    game.appendChild(titre);
    //--------------création de l'espace de jeux-----------------//
    let main = document.createElement("div");


    main.id = "parent";
    game.appendChild(main);
    const parent = document.getElementById("parent");
    //-------------------création du décompte-----------------//
    let count = document.createElement("p")
    count.id = "nbr"
    game.appendChild(count);

    for (let i=0; i < 64; i++) {



        //-------------création des carrés---------------------//
        free_case.push(i)
        let square = document.createElement("button");
        square.classList.add("square");
        square.id = i
        parent.appendChild(square);

        //-------------action quand les boutons sont cliqués-------//
        square.addEventListener("click", ()=>{

            //------------------on vérifie si un élément existe pour pas faire planter le programme-----------------------//
            try {
                let changingText = document.getElementById('boring')
                let text = changingText.nextElementSibling
                //-----------création du décompte avant la fin------------------//
                if (limited === true && check_win!=true) {
                    click_end = click_end - 1
                    text.innerHTML = "TU VAS TOUT DéTRUIRE!!! TU N'AS PLUS QUE " + click_end + " CHANCE!!"
                    if (click_end === 0) { limited = false }
                }
                //-------------si rien n'est trouvé alors --------------//
            } catch (error) {
                console.log("tu as encore t'es chance!!!")
            }
            //---------------on initialise les valeurs pour le jeux-------------//

            index = free_case.length
            free_case.splice(free_case.indexOf(Number(square.id)), 1)
            case_used = document.getElementsByClassName("used")
            if (more_or_less === true) { nbr_click++ }
            //------------------------------compte le nombre de clique--------------//
            document.getElementById("nbr").innerHTML = "tu as utilisé " + nbr_click + " de chance ";
            //--------------------dit que le bouton est cliqué-------------------//
            square.classList.add("used")
            //---------------------si le bouton cliqué est le bouton ou le rat se trouve---------//
            if (i === win && check_loose != true) {
                check_win = true
                //---arreter le compteur----//
                more_or_less = false
                //---appelé la fonction winning---//
                winning(square)

            }
            //---si click_end  est a 0---//
            if (click_end === 0) {
                check_loose = true
                limited = false
                rat_case.classList.add("rat_vivant")
                square.classList.remove("used")
                stop()

                //---supprimé le jeux---//
                setTimeout(() => {
                    game.remove()
                    loose()
                    setTimeout(() => {
                        let looser = document.getElementById("loose")
                        looser.remove()
                        window.location.reload()
                    }, 2000)
                }, 2000)

            }

        })
    }
}

function deadline() {
    setTimeout(() => {
        let limit = document.createElement("div")
        limit.id = "decor"
        game.appendChild(limit)
        document.getElementById("decor").style.width = "300px"
        document.getElementById("decor").style.flexWrap = "wrap-reverse"
        let box_limited = document.getElementById("decor")
        let boring_man = document.createElement("div")
        boring_man.id = "boring"
        box_limited.appendChild(boring_man)
        let explication = document.createElement("p")
        explication.innerHTML = "TU VAS TOUT DéTRUIRE!!! TU N'AS PLUS QUE " + click_end + " CHANCE!!"
        box_limited.appendChild(explication)
        limited = true
    }, time)

}

function loose() {
    if (!document.getElementById('loose')) {
        let end = document.createElement('div');
        end.id = 'loose';
        document.body.appendChild(end);

    }
    let block_loose = document.getElementById("loose")
    if (!document.getElementById('text_end')) {
        let text_end = document.createElement('p');
        text_end.id = "text_end"
        text_end.innerHTML = "TU AS LOUPER LA SOURIS VAS-T'EN!!!"
        block_loose.appendChild(text_end);
    }
    if (!document.getElementById('img_end')) {
        let img_end = document.createElement('div');
        img_end.id = "img_end"
        block_loose.appendChild(img_end);
    }
}

function winning(object_action) {

    //---------arreter le set interval--------//
    stop()
    //--------------retirer les classes des cases et afficher le rat mort-------//
    object_action.classList.add("rat_mort")
    object_action.classList.remove("used")

    //------------------toute les demis seconde le rat change de case----------------//
    setTimeout(() => {
        //--------on crée un élément pour faire apparaitre un block a la fin pour faire comprendre qu'on a eu la souris-----------------//
        let img_win = document.createElement("div")
        img_win.id = "img_win"
        document.body.appendChild(img_win)
        game.remove()

        setTimeout(() => {
            //------------------on recharge la page après 2seconde------------//
            window.location.reload()

        }, 2000)



        win = Rand(64);
    }, 1000)
}

function stop() { clearInterval(interval) }

button_start.addEventListener("click", () => {
    button_start.remove()
    decor.remove()
    area()
    deadline()
})