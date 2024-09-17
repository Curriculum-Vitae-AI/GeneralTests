import imgCarta from "../assets/Home/imgCarta.svg"
import { useNavigate } from 'react-router-dom';
import "../styles/components/Card.css"

function CardCarta(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/CartaDeMotivacao');
    };

    return(
        <div className="card">
            <div className="esquerda">
                <h1 className="titulo">CARTA DE MOTIVAÇÃO</h1>
                <p className="texto">
                    Com nosso gerador de carta de motivação basta você indicar 
                    suas experiências e a vaga a qual quer se candidatar que o  
                    programa irá gerar uma carta com todas  suas informações e o 
                    porque de você ser o candidato ideal para a vaga!
                </p>
                <button onClick={handleClick} className="btnGerar">GERAR</button>
            </div>
            <div className="direita">
                <img src={imgCarta} className="img" alt="Imagem de Carta de Motivação" style={{ width: '40%' }}/>
            </div>
        </div>
    );
}

export default CardCarta;