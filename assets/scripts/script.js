const textApresentation = {
    "h1": "Olá, Sou Ewerson Lucas estudante de Ciências da Computação e Desenvolvedor de Software ! Bem vindo ao meu Portifolio"
}
function writeText(){
    let element = document.getElementById("apresentation");
        textApresentation.h1.split("").forEach((letter, index)=> {
            setTimeout(() => {
                element.innerHTML += letter
            }, 100*index); 
        })     
}