import "../styles/pages/Home.css";
import imgRoadmap from "../assets/Home/imgRoadmap.svg"
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Roadmap');
    };

    return (
        <div className="Home">
            <div className="card">
                <div className="esquerda">
                    <h1>ROADMAP</h1>
                    <p>Com nosso gerador de roadmaps
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

export default Home;