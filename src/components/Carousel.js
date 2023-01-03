import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardDataArray from "./CardData";
import { images } from "./CardData";
import "../styles/Carousel.css";

function Carousel() {
  const [allCards, setAllCards] = useState(cardDataArray);

  const [currentCards, setCurrentCards] = useState(allCards);


  const generateRandomIndex = () => {
    const randomIndex = Math.random() * (currentCards.length - 0) + 0;
    return parseInt(randomIndex);
  };

  return (
    <div className="Carousel">
      {currentCards.map((card) => {
        return <Card src={images[card.name]} id={card.id}/>;
      })}
    </div>
  );
}

export default Carousel;
