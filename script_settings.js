const test = document.getElementById('test');
const chk = document.getElementById('isChecked');
const body = document.getElementById('body');
const btn = document.getElementsByClassName('btn');
const typo_list = ["Courgette", "Pacifico", "Overlock", "Quicksand", "Chilanka", "Kalam", "Livvic", "Modak", "Nunito", "Satisfy", "Atma", "Baloo Bhaijaan", "Bellefair", "Coiny", "Darker Grotesque", "Farsan", "Kavivanar", "Kodchasan", "Mali", "Pangolin"]
const btn_bgImage = document.getElementById('change_bgImage');
const fot_color_ch = document.getElementById('change_font_color')
const btn_bgColor = document.getElementById('change_bgColor')
const derouler = document.getElementById("cacher_test_db");
const btn_deroule = document.getElementById("deroule");
const btn_textShadow = document.getElementById('change_textShadow');
const btn_boxShadow = document.getElementById('change_boxShadow');
const btn_text = document.getElementById('change_text');
const titre_page = document.getElementById('titre_page');
const pupute = document.getElementById('pupute');

bgColor_prompt = "";
bgImage_prompt = "";
random_list = "";
font_color = "";
boxShadow_prompt = "";
textShadow_prompt = "";

// if checkbox = true => changer de couleur de fond (passer en mode nuit)
function change_theme() {
    console.log("Est ce que tu rentres dedans? ")
    if (chk.checked) {
        chk.parentNode.style.color = 'white';
        body.style.backgroundColor = 'black';
        body.style.color="white";
        if (pupute.style.display === "none") {
                    pupute.style.display = "initial";
                } else {
                    pupute.style.display = "none";
                }
        titre_page.style.textShadow="#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #20B2AA 0px 0px 20px, #20B2AA 0px 0px 30px, #20B2AA 0px 0px 40px, #20B2AA 0px 0px 50px, #20B2AA 0px 0px 75px";
        // body.style.backgroundImage = "none";
        body.style.backgroundImage="url('http://www.echoparis3d.com/wp-content/uploads/2018/08/fond-noir-texture.jpg')";
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = "white";
            btn[i].style.color = "black";
            btn[i].style.fontFamily = "'Courgette', cursive";
        }
    } else {
        chk.parentNode.style.color = 'black';
        body.style.backgroundColor = 'white';
        body.style.color="black";
        if (pupute.style.display === "initial") {
            pupute.style.display = "none";
        } else {
            pupute.style.display = "initial";
        }
        titre_page.style.textShadow="none";
        body.style.backgroundImage = "url(' https://xubuntu.org/wp-content/uploads/2018/04/8fbb/40103442821_db033c72a4_o-web.jpg')";
        body.style.backgroundSize = "cover";
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = "white";
            btn[i].style.color = "black";
            btn[i].style.fontFamily = "'Courgette', cursive";
        }
    }
}

// changer couleur de la typo avec un getElementById (var color) et changer
//le style avec cette meme variable
fot_color_ch.addEventListener('click', function change_font_color1() {
    font_color = prompt("Note une couleur en hexadecimal");
    test.style.color = font_color;
})


//change l'ombre du texte
btn_textShadow.addEventListener('click', function change_fontFamily1() {
    textShadow_prompt = prompt("Tape une font" + "\n" + "exemple : 5px 5px 1px #ff0000, 10px 10px 1px #0000ff");
    test.style.textShadow = textShadow_prompt;
})
//Afficher la liste des fonts (pour s'y retrouver)
const btn_seeFont = document.getElementById('seeFont');
const seeList = document.getElementById('liste_font');
btn_seeFont.addEventListener('click', function seeFont1() {
    random_list = typo_list[Math.floor(Math.random() * typo_list.length)]
    seeList.innerHTML = random_list;
})

//Cliquer pour changer la font Family
seeList.addEventListener('click', () => {
    test.style.fontFamily = random_list;
})

//change le background color
btn_bgColor.addEventListener('click', function change_bgColor1() {
    bgColor_prompt = prompt("entre une couleur");
    test.style.backgroundColor = bgColor_prompt;
})

//change l'image bcground de la div 
btn_bgImage.addEventListener('click', function change_bgImage1() {
    bgImage_prompt = prompt('Entrez une url valide');
    let bgImage_url = "url('" + bgImage_prompt + "')";
    test.style.backgroundImage = bgImage_url;
    test.style.backgroundSize = "cover";
})

//changer l'ombre de la div
btn_boxShadow.addEventListener('click', function btn_boxShadow1() {
    boxShadow_prompt = prompt('Changez l\'ombre de votre boite');
    test.style.boxShadow = boxShadow_prompt;
})

//
btn_text.addEventListener('click', function change_text() {
    text_prompt = prompt('Entrez un texte');
    test.innerHTML = "<p>" + text_prompt + "</p>";
})

// //tet pour la db plus tard
// btn_deroule.addEventListener('click', function deroule() {
//     if (derouler.style.display === "none") {
//         derouler.style.display = "block";
//     } else {
//         derouler.style.display = "none";
//     }
// });



setInterval(() => {
    let list_modif = document.getElementById('list_modif')
    list_modif.innerHTML =
        "<p>bg Color: " + bgColor_prompt + "</p>" +
        "<p>url image: " + bgImage_prompt + "</p>" +
        "<p>Font: " + random_list + "</p>" +
        "<p>color: " + font_color + "</p>" +
        "<p> BoxShadow: " + boxShadow_prompt + "</p>" +
        "<p>ombre: " + textShadow_prompt + "</p>";
}, 1000);

