import imgRoadmap from "../assets/Home/imgRoadmap.svg"
import { useNavigate } from 'react-router-dom';
import "../styles/components/CardRoadmap.css"

function CardRoadmap(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Roadmap');
    };

    return(
        <div className="cardRoadmap">
            <div className="esquerda">
                <h1 className="textTitulo">ROADMAP</h1>
                <p className="textRoadmap">
                    Com nosso gerador de roadmaps
                    você somente precisa indicar a sua
                    vaga desejada e ele irá montar um
                    plano de estudos para que você
                    possa focar somente no aprendizado.
                </p>
                <button onClick={handleClick} className="btnGerar">GERAR</button>
            </div>
            <div className="direita">
                <img src={imgRoadmap} className="imgRoadmap" alt="Imagem de Roadmap"/>
            </div>
        </div>
    );
}

export default CardRoadmap;