import imgVagas from "../assets/Home/imgVagas.svg"
import { useNavigate } from 'react-router-dom';
import "../styles/components/CardVagas.css"

function CardVagas(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Vagas');
    };
    
    return(
        <div className="cardVagas">
            <div className="esquerda">
                <h1>VAGAS</h1>
                <p className="textVagas">
                    Utilizando conexão com o Chat GPT você pode informar 
                    a área que você quer trabalhar, sua experiência e ele 
                    indicará para você as melhores vagas que se encaixam para você.
                </p>
                <button onClick={handleClick} className="btnGerar">GERAR</button>
            </div>
                <div className="direita">
                    <img src={imgVagas} className="imgVagas" alt="Imagem de vagas"/>
            </div>
        </div>
    );
}

export default CardVagas;