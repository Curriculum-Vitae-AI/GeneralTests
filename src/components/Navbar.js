import "../styles/components/Navbar.css";
import Logo from "../assets/Logo.svg";

function Navbar(){
    return(
        <div className="Navbar">
            <button className="Logo"> <img src={Logo} /> </button>
            <div className="Botoes">
                <button id="btn" className="btnRoadmap">ROADMAP</button>
                <button id="btn" className="Carta">CARTA DE MOTIVAÇÃO</button>
                <button id="btn" className="Vagas">VAGAS</button>
                <button id="btn" className="Sobre">SOBRE NÓS</button>
            </div>
        </div>
    );
}

export default Navbar;