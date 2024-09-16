import React, { useState } from 'react';
import "../styles/pages/Home.css";
import imgRoadmap from "../assets/Home/imgRoadmap.svg"
import { useNavigate } from 'react-router-dom';
import CardRoadmap from '../components/CardRoadmap';
import CardCarta from '../components/CardCarta';
import CardVagas from '../components/CardVagas';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Roadmap');
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de itens do carrossel (pode ser imagens, textos, etc.)
  const items = [
    { id: 1, content: <CardRoadmap /> },
    { id: 2, content: <CardCarta /> },
    { id: 3, content: <CardVagas /> },
  ];

  // Função para avançar para o próximo item
  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Função para voltar para o item anterior
  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="Home">
      <div className="card">
        <div className="carousel">
          <button onClick={prevItem} className="carousel-button">Anterior</button>

          {/* Exibir o item atual */}
          <div className="carousel-item">
            {items[currentIndex].content}
          </div>

          <button onClick={nextItem} className="carousel-button">Próximo</button>
        </div>
      </div>
    </div>
  );
}

export default Home;