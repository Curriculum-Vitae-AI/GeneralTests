import "../styles/components/Navbar.css";
import Logo from "../assets/Logo.svg";
import MenuFechado from "../assets/menuFechado.svg"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Navbar(){
    const location = useLocation();
    const [isResponsive, setIsResponsive] = useState(false);

    const toggleResponsive = () => {
        setIsResponsive(!isResponsive);
      };

    return(
        <div className="Navbar">
            <button className="Logo"> 
                <Link to="/DevopsTesting"><img src={Logo} alt="Logo"/></Link>
            </button>
            <div className={`Botoes ${isResponsive ? 'responsive' : ''}`}>
                <button className="icon" onClick={toggleResponsive}> <img src={MenuFechado} /> </button>
                <button className={`btn ${location.pathname === '/Roadmap' ? 'active' : ''}`}>
                    <Link id="link" to="/Roadmap">ROADMAP</Link>
                </button>
                <button className={`btn ${location.pathname === '/CartaDeMotivacao' ? 'active' : ''}`}>
                    <Link id="link" to="/CartaDeMotivacao">CARTA DE MOTIVAÇÃO</Link>
                </button>
                <button className={`btn ${location.pathname === '/Vagas' ? 'active' : ''}`}>
                    <Link id="link" to="/Vagas">VAGAS</Link> 
                </button>
                <button className={`btn ${location.pathname === '/SobreNos' ? 'active' : ''}`}>
                    <Link id="link" to="/SobreNos">SOBRE NÓS</Link> 
                </button>
                
            </div>
        </div>
    );
}

export default Navbar;