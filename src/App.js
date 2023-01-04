import { useEffect, useState } from "react";
import "./styles/App.css";
import Carousel from "./components/Carousel";
import Scoreboard from "./components/Scoreboard";

function App(props) {
  const [score, setScore] = useState(0);
  const [highscore, setHighScore] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <Scoreboard score={score} highscore={highscore} />
        <h1>Chikn Memory Game</h1>
      </div>
      <Carousel
        setScore={(e) => setScore(e)}
        score={score}
        highscore={highscore}
        setHighScore={(e) => setHighScore(e)}
      />
    </div>
  );
}

export default App;
