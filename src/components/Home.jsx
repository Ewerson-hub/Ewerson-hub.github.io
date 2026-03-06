import '../styles/home.css'
import {useState} from 'react';
import {ReactTyped} from 'react-typed'



function Home (){
    const [showSecondText, setShowSecondText] = useState(false);

    return (<>
        <div id="home" className="topic full-screen color-primary">
            <h1 id="apresentation">
                    <ReactTyped strings={[
                        "Olá, Sou Ewerson Lucas, estudante de Ciências da Computação e Desenvolvedor de Software !",
                    ]} showCursor={false} typeSpeed={50} onComplete={() => {
                            setShowSecondText(true);
                        }}/>
            </h1>  
            <h2 id="apresentation-2">
                {showSecondText && (
                    <ReactTyped strings={[
                        "Bem vindo ao meu Portifolio !"
                    ]} showCursor={false} typeSpeed={50} onComplete={() => {
                        document.getElementById('image-content-down-arrow').animate([
                            {transform: 'translateY(0)'},
                            {transition: 'all .1s ease-in-out'},
                            {transform: 'translateY(8px)'},
                            {transform: 'translateY(-8px)'}
                            
                        ], {duration: 400, iterations: 5})
                    }}/>
                )}
            
            </h2>
            <span id="image-content-down-arrow">
                <a href="#about"> <img id="down-arrow" src="/imgs/arrow-down-2.svg" alt="down page" /> </a>
            </span>
        </div>
    </>)
}

export default Home