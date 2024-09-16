import React, { useState } from 'react';
import CardRoadmap from '../components/CardRoadmap';
import CardCarta from '../components/CardCarta';
import CardVagas from '../components/CardVagas';
import FlechaDireita from '../assets/Home/flechaDireita.svg'
import FlechaEsquerda from '../assets/Home/flechaEsquerda.svg'
import "../styles/pages/Home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, content: <CardRoadmap /> },
    { id: 2, content: <CardCarta /> },
    { id: 3, content: <CardVagas /> },
  ];

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="Home">
      <div className="cardHome">
        <div className="carousel">
          <button onClick={prevItem} className="carouselBtn"><img src={FlechaEsquerda} alt='Botão anterior' /></button>

          <div className="carouselItem">
            {items[currentIndex].content}
          </div>

          <button onClick={nextItem} className="carouselBtn"> <img src={FlechaDireita} alt='Botão próximo'/> </button>
        </div>
      </div>
    </div>
  );
}

export default Home;