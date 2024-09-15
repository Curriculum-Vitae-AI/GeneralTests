import "../styles/pages/Home.css";
import imgRoadmap from "../assets/Home/imgRoadmap.svg"

function Home(){
    return(
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
                    <button>GERAR</button>
                </div>
                <div className="direita">
                    <img src={imgRoadmap} className="imgRoadmap"/>
                </div>
            </div>
        </div>
    );
}

export default Home;