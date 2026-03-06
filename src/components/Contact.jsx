import '../styles/contact.css'
function Contact() {
    return (
        <>
            <div id="contact" className="topic background-secondary full-screen color-secundary items-centralizer">

                <h1 className="title-section">Contato</h1>

                <div id="contact-content">
                    <div id="form-side" className="items-centralizer">
                        <h1 className="H1-contact-side">Me envie um Email</h1>

                        <form className="items-centralizer" id="form" action="https://formspree.io/f/mgolrzjk" method="post">

                            <input className="space-around" type="text" name="name" id="name" placeholder="Informe seu nome : "
                                required />
                            <input className="space-around" type="email" name="email" id="email" placeholder="Informe seu email : "
                                required />
                            <input className="space-around" type="text" name="subject" id="subject" placeholder="Subject : "
                                hidden />
                            <textarea className="space-around" name="message" id="message" cols="10" rows="5"
                                placeholder="Digite sua mensagem ..." required></textarea>

                            <button type="submit" id="submit" > Enviar </button>
                        </form>
                    </div>

                    <div id="separator"> <h1> Ou </h1> </div>

                    <div id="media-side" className="items-centralizer">
                        <h1 className="H1-contact-side">Me encontre nas Redes Sociais</h1>
                        <ul id="medias-list" className="items-centralizer">
                            <li>
                                <img src="/imgs/linkedin-icon.svg" alt="linkedln icon" />
                                <a href="https://www.linkedin.com/in/ewerson-lucas-311312226/" target="_blank">Linkedln</a>
                            </li>

                            <li>
                                <img src="/imgs/github-icon.svg" alt="Github icon" />
                                <a href="https://github.com/Ewerson-hub" target="_blank">Github</a>
                            </li>

                            <li>
                                <img src="/imgs/freecodecamp-icon.svg" alt="CodeWars icon" />
                                <a href="https://www.freecodecamp.org/Ewerson" target="_blank">FreeCodeCamp</a>
                            </li>
                            <li>
                                <img src="/imgs/codewars-icon.svg" alt="CodeWars icon" />
                                <a href="https://www.codewars.com/users/ewerson" target="_blank">Code Warss</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>)
}

export default Contact