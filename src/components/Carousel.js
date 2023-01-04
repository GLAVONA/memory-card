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
  const [animate, setAnimate] = useState(false);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  function shuffleCurrent() {
    const shuffled = shuffleArray(currentCards);
    setAnimate((anim) => !anim);
    return shuffled;
  }

  async function addNewCurrentCards() {
    const newCards = allCards.filter(
      (o1) => !currentCards.some((o2) => o1.id === o2.id)
    );
    const newCurr = getMultipleRandom(newCards, 2);
    setCurrentCards((prev) => prev.concat(newCurr));
  }

  function getNumberOfCards(lvl) {
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
    props.setScore(0);
    setCurrentLevel(1);
  }

  function nextLevel() {
    setCurrentLevel(level + 1);
    setSelectedCards([]);   
    addNewCurrentCards();
    shuffleCurrent();
  }
  function pickCard(e) {
    setSelectedCards((selectedCards) => selectedCards.concat(e.target.id));
    shuffleCurrent();
    if (selectedCards.some((item) => item === e.target.id)) {
      alert("OOOOPS!");
      resetGame();
    } else {
      props.setScore(props.score + 1);
      if (props.score >= props.highscore) {
        props.setHighScore(props.score);
      }
    }
  }

  useEffect(() => {
    if (props.score >= props.highscore) {
      props.setHighScore(props.score);
    }
    switch (props.score) {
      case 5:
        nextLevel();
        break;
      case 7:
        nextLevel();
        break;
      case 9:
        nextLevel();
        break;
      case 11:
        nextLevel();
        break;
      default:
        break;
    }
  }, [props.score]);

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
          <Card
            onAnimationEnd={() => setAnimate(false)}
            classname={animate ? "Card animate" : "Card"}
            src={images[card.name]}
            id={card.id}
            targetId={pickCard}
          />
        );
      })}
    </div>
  );
}

export default Carousel;
