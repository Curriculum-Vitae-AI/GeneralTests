import "../styles/pages/SobreNos.css";
import ImgSobreNos from "../assets/ImgSobreNos.svg"

function SobreNos(){
    return(
        <div className="sobreNos">
            <div className="titulo">
                <h1>
                    Conquiste seu futuro profissional: o caminho, a motivação e a oportunidade em um só lugar.
                </h1>
            </div>
            <div className="cardSobreNos">
                <div className="esquerdaSobreNos">
                    <p className="texto">
                        Em um mundo cada vez mais conectado, a tecnologia está presente em todos os aspectos da 
                        nossa vida. No Curriculum AI, acreditamos que a tecnologia pode auxiliar no nosso desempenho, 
                        nos estudos. Facilitando nossa trilha de aprendizagem, independentemente do seu conhecimento 
                        técnico. Nossa missão é oferecer ferramentas e recursos para que você possa adquirir conhecimento 
                        de forma mais fácil e eficiente. Se você é um estudante buscando aprimorar suas habilidades para 
                        ingressar no mercado de trabalho, um profissional em busca de novas oportunidades de carreira, 
                        aqui você encontrará tudo o que precisa para estar sempre com todo conhecimento em dia.
                    </p>
                    <p className="texto">
                        Nosso objetivo é:
                    </p>
                    <ul>
                        <li>Simplificar a vida: Oferecendo soluções tecnológicas para acelerar sua aprendizagem.</li>
                        <li>Inspirar: Compartilhando conhecimento e promovendo a inovação.</li>
                        <li>Conectar: Criando uma comunidade de pessoas apaixonadas por aprender.</li>
                    </ul>
                    <p className="texto">
                        Site desenvolvido por estudantes de sistemas da informação com o intuito 
                        de facilitar sua jornada de estudos, encurtando e direcionando as pessoas 
                        direto aos conhecimentos necessarios de suas areas desejadas de trabalho.
                    </p>
                </div>
                <div className="direitaSobreNos">
                    <img className="imgSobreNos" src={ImgSobreNos} />
                </div>
            </div>
        </div>
    );
}

export default SobreNos;