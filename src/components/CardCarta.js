import imgCarta from "../assets/Home/imgCarta.svg"
import { useNavigate } from 'react-router-dom';
import "../styles/components/CardCarta.css"

function CardCarta(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/CartaDeMotivacao');
    };

    return(
        <div className="cardCarta">
            <div className="esquerdaCarta">
                <h1 className="tituloCarta">CARTA DE MOTIVAÇÃO</h1>
                <p className="textCarta">
                    Com nosso gerador de carta de motivação basta você indicar 
                    suas experiências e a vaga a qual quer se candidatar que o  
                    programa irá gerar uma carta com todas  suas informações e o 
                    porque de você ser o candidato ideal para a vaga!
                </p>
                <button onClick={handleClick} className="btnGerar">GERAR</button>
            </div>
            <div className="direitaCarta">
                <img src={imgCarta} className="imgCarta" alt="Imagem de Carta de Motivação"/>
            </div>
        </div>
    );
}

export default CardCarta;