import '../styles/projects.css'
import {useEffect, useState} from 'react'
function Projects () {

    const [showMoreInfo, setShowMoreInfo] = useState(true);

    function handleShowMoreInfo(){
        setShowMoreInfo(!showMoreInfo)
    }

    const projects = [
        {
            img : "/imgs/projeto-simple-crud].png",
            title: "Simple CRUD",
            description: "Aplicação organizada que se conecta ao MongoDB e execute 4 operações CRUD básicas com uma interface que é atualizada em tempo real."
        },
        {
            img : "/imgs/projeto-mern-stack.png",
            title: "Mearn Stack",
            description: "Aplicativo criado em um curso em vídeo do FreeCodeCamp que se conecta ao MongoDB e realiza 4 operações CRUD básicas com um frontend que atualiza em tempo real com React." 
        },
        {
            img : "/imgs/projetogit-search.png",
            title: "Git Search",
            description: "Um aplicativo simples que consome a API do GitHub e fornece informações dos repositorios do usuario pesquisado." 
        }
    ]
    return (
    <>
        <div id="projects" className="topic full-screen color-primary items-centralizer">
            <h1 className="title-section">Projetos</h1>

            <div id="projects-space">
               {projects.map((e) => (
                    <div key={e.title} className="project-card">
                        <div className="img">
                            <img src={e.img} alt={e.title} /> 
                        </div>
                        <h2 className="project-title">{e.title}</h2>
                        <span className="more-info">Clique para mais Informações</span>  
                        <p className="project-description">{e.description}</p>
                    </div>
                ))}
            </div>

            <a id="more-projects" href="https://github.com/Ewerson-hub" target="_blank">
                <h2>Mais Projetos ...</h2>
            </a>
        </div>
    </>)
}
export default Projects