const textApresentation = {
    "h1": "Olá, Sou Ewerson Lucas, estudante de Ciências da Computação e Desenvolvedor de Software !",
    "h2": `Bem vindo ao meu Portifolio !`
}
function onloadPage() {

    writeInScreen("apresentation", textApresentation.h1);
    //o time out espera a função acima ser totalmente executada para assim chamar a segunda.
    setTimeout(() => {
        writeInScreen("apresentation-2", textApresentation.h2);  
    }, 6500);

    setTimeout(() => {
        moveDownArrow()
    }, 8500)

}

function writeInScreen(idElementHtml, text) {
    let element = document.getElementById(idElementHtml);

    text.split("").forEach((letter, index) => {
        setTimeout(() => {
            element.innerHTML += letter
        }, 75 * index)
    })
}

function moveDownArrow (){
    document.getElementById("image-content-down-arrow").animate([
        {transform: 'translateY(0)'},
        {transform: 'translateY(8px)'},
        {transform: 'translateY(-8px)'}
    ], {
        duration: 300,
        iterations: 5
    })
}
//simule the effect of the checkbox in a img tag
let dropDown = false;

function dropdowList(){
    alterBarsIconTo('close');

    dropDown = !dropDown


    if(dropDown){
        document.getElementById('nav-list').style.cssText += `
            margin:0;   

            display:block;
            position:fixed;

            top:20vh;
            left:0;
            right:0;
            bottom:0;

            width:100vw;
            height:100vh;
            
            background-color: #4a3f2b;

            text-align:center; 
            padding-top: 30px;

            font-size:5.5rem;
            z-index: 3;

        `;
        document.getElementById('nav-list').style.cssText += `
            padding-top:10px;
        `;
        for(let i = 0; i < 4; i++){
            document.getElementsByClassName('nav-list-li')[i].addEventListener('click', () => {
                closeDropDownList();
                dropDown = false;
            })
        }
    }else{
        closeDropDownList();  
    }
}

function closeDropDownList(){
    alterBarsIconTo('bars');
    document.getElementById('nav-list').style.display = 'none';
}

function alterBarsIconTo(type){
    let path = "";

    (type == 'close')? path = "assets/imgs/close-icon.svg":path = "assets/imgs/bars-icon.svg";

    document.getElementById('bars-icon').src = path;
}