import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardDataArray from "./CardData";
import { images } from "./CardData";
import "../styles/Carousel.css";
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";

function Carousel(props) {
  const [allCards, setAllCards] = useState(cardDataArray);
  const [currentCards, setCurrentCards] = useState(allCards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [level, setCurrentLevel] = useState(1);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  function shuffleCurrent() {
    const curr = currentCards;
    const shuffled = curr.sort(() => 0.5 - Math.random());
    setCurrentCards(shuffled);
  }

  async function addNewCurrentCards() {
    const newCards = allCards.filter(
      (o1) => !currentCards.some((o2) => o1.id === o2.id)
    );
    const newCurr = getMultipleRandom(newCards, 2);
    setCurrentCards((currentCards) => currentCards.concat(newCurr));
  }

  function getNumberOfCards() {
    switch (level) {
      case 1:
        return 5;
      case 2:
        return 7;
      case 3:
        return 9;
      case 4:
        return 11;
      default:
        break;
    }
  }

  function nextLevel() {
    setCurrentLevel(level + 1);
    addNewCurrentCards();
    shuffleCurrent();
  }
  function getTargetID(e) {
    console.log(e.target.id);
    shuffleCurrent();
    setSelectedCards((selectedCards) => selectedCards.concat(e.target.id));
  }

  useEffect(() => {
    setCurrentCards(getMultipleRandom(allCards, getNumberOfCards()));
  }, []);

  return (
    <div className="Carousel">
      {currentCards.map((card) => {
        return (
          <Card src={images[card.name]} id={card.id} targetId={getTargetID} />
        );
      })}
      <button onClick={nextLevel}>Next level</button>
    </div>
  );
}

export default Carousel;
