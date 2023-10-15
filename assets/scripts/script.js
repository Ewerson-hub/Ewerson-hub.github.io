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