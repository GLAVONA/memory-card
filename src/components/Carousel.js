import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardDataArray from "./CardData";
import { images } from "./CardData";
import "../styles/Carousel.css";

function Carousel(props) {
  const [allCards, setAllCards] = useState(cardDataArray);
  const [currentCards, setCurrentCards] = useState(allCards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [level, setCurrentLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  function shuffleCurrent() {
    const shuffled = currentCards.sort(() => 0.5 - Math.random());
    return shuffled;
  }

  async function addNewCurrentCards() {
    const newCards = allCards.filter(
      (o1) => !currentCards.some((o2) => o1.id === o2.id)
    );
    const newCurr = getMultipleRandom(newCards, 2);
    setCurrentCards((prev) => prev.concat(newCurr));
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

  function resetGame() {
    setSelectedCards([]);
    setCurrentCards(getMultipleRandom(allCards, getNumberOfCards()));
    setCurrentLevel(0);
    setCurrentLevel(1);
  }

  function nextLevel() {
    setCurrentLevel(level + 1);
    addNewCurrentCards();
    shuffleCurrent();
  }
  function pickCard(e) {
    console.log(e.target.id);
    setSelectedCards((selectedCards) => selectedCards.concat(e.target.id));
    shuffleCurrent();
    if (selectedCards.some((item) => item === e.target.id)) {
      alert("OOOOPS!");
      resetGame();
    }
  }

  useEffect(() => {
    if (gameOver) {
      setGameOver(false);
    } else {
      setCurrentCards(getMultipleRandom(currentCards, getNumberOfCards()));
    }
  }, [level]);

  return (
    <div className="Carousel">
      {currentCards.map((card) => {
        return (
          <Card src={images[card.name]} id={card.id} targetId={pickCard} />
        );
      })}
      <button onClick={nextLevel}>Next level</button>
    </div>
  );
}

export default Carousel;
