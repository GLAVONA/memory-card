import { useEffect, useState } from "react";
import "./styles/App.css";
import Carousel from "./components/Carousel";
import Scoreboard from "./components/Scoreboard";

function App(props) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(parseInt(localStorage.getItem('highScore')) || 0);

  useEffect(()=>{
    localStorage.setItem("highScore", JSON.stringify(highScore));
  },[highScore])

  function clearHighScore(){
    setHighScore(0)
  }

  return (
    <div className="App">
      <div className="header">
        <Scoreboard score={score} highscore={highScore} clearHighScore={()=>clearHighScore()}/>
        <h1>Chikn Memory Game</h1>
      </div>
      <Carousel
        setScore={(e) => setScore(e)}
        score={score}
        highscore={highScore}
        setHighScore={(e) => setHighScore(e)}
      />
    </div>
  );
}

export default App;
