import '../styles/header.css';
import {useEffect, useState} from 'react';

function Header () {

    const [enableDropDownList, setEnableDropDownList] = useState(false);

    useEffect(() => {   
        if(enableDropDownList){
            document.getElementById("bars-icon").src = "/imgs/close-icon.svg"
        }else{
            document.getElementById("bars-icon").src = "/imgs/bars-icon.svg"
        }
    }, [enableDropDownList])

    function handleUpdateDropDownListState(){
        setEnableDropDownList(!enableDropDownList);
    }

    return (<>
        <header id="header" className="color-primary">
            <span id="span-logo">
                <img id="atom-icon" src="/imgs/atom_icon3.svg" alt="Atom Icon" />
                Ewerson
            </span>
            <nav className={enableDropDownList? "nav drop-down" : "nav"} id='nav'>
                <label htmlFor="bars-icon">
                    <img id='bars-icon' src="/imgs/bars-icon.svg" alt="bars-icon" onClick={handleUpdateDropDownListState} />
                </label>    

                <ul className={enableDropDownList? "nav-list drop-down": "nav-list"} id="nav-list">
                    <li><a className="nav-list-li color-primary" href="#home" onClick={enableDropDownList? handleUpdateDropDownListState:null} >Home</a></li>
                    <li><a className="nav-list-li color-primary" href="#about" onClick={enableDropDownList? handleUpdateDropDownListState:null}  >Sobre Mim</a></li>
                    <li><a className="nav-list-li color-primary" href="#projects"onClick={enableDropDownList? handleUpdateDropDownListState:null} >Projetos</a></li>
                    <li><a className="nav-list-li color-primary" href="#contact" onClick={enableDropDownList? handleUpdateDropDownListState:null} >Contato</a></li>
                </ul>
            </nav>
        </header>
        
    </>)
}

export default Header
