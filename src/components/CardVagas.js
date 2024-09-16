import imgRoadmap from "../assets/Home/imgRoadmap.svg"
import { useNavigate } from 'react-router-dom';
import "../styles/components/CardRoadmap.css"

function CardVagas(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Roadmap');
    };
    return(
        <div className="">
            <div className="cardRoadmap">
            <div className="esquerda">
                    <h1>VAGAS</h1>
                    <p className="textHome">Com nosso gerador de roadmaps
                        você somente precisa indicar a sua
                        vaga desejada e ele irá montar um
                        plano de estudos para que você
                        possa focar somente no aprendizado.
                    </p>
                    <button onClick={handleClick} className="btnGerar">GERAR</button>
                </div>
                <div className="direita">
                    <img src={imgRoadmap} className="imgRoadmap" />
                </div>
            </div>
        </div>
    );
}

export default CardVagas;