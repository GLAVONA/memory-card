import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardDataArray from "./CardData";
import { images } from "./CardData";

function Carousel(props) {
  const [currentCards, setCurrentCards] = useState(cardDataArray);

  return (
    <div className="Carousel">
      {currentCards.map((card) => {
        return <Card src={images[card.name]} />;
      })}
    </div>
  );
}

export default Carousel;
