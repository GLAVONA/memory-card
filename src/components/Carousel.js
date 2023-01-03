import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardDataArray from "./CardData";
import { images } from "./CardData";
import "../styles/Carousel.css";

function Carousel() {
  const [allCards, setAllCards] = useState(cardDataArray);

  const [currentCards, setCurrentCards] = useState(allCards);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }

  useEffect(()=>{
  setCurrentCards(getMultipleRandom(currentCards,5))

  },[])

  return (
    <div className="Carousel">
      {currentCards.map((card) => {
        return <Card src={images[card.name]} id={card.id}/>;
      })}
    </div>
  );
}

export default Carousel;
