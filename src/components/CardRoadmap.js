import imgRoadmap from "../assets/Home/imgRoadmap.svg"
import { useNavigate } from 'react-router-dom';
import "../styles/components/Card.css"

function CardRoadmap(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Roadmap');
    };

    return(
        <div className="card">
            <div className="esquerda">
                <h1 id="item" className="titulo">ROADMAP</h1>
                <p id="item" className="texto">
                    Com nosso gerador de roadmaps
                    você somente precisa indicar a sua
                    vaga desejada e ele irá montar um
                    plano de estudos para que você
                    possa focar somente no aprendizado.
                </p>
                <button id="item" onClick={handleClick} className="btnGerar">GERAR</button>
            </div>
            <div className="direita">
                <img src={imgRoadmap} className="img" alt="Imagem de Roadmap" style={{ width: '75%' }}/>
            </div>
        </div>
    );
}

export default CardRoadmap;