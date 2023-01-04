import { useEffect, useState } from "react";
import "./styles/App.css";
import Carousel from "./components/Carousel";
import Scoreboard from "./components/Scoreboard";

function App(props) {

  const [score, setScore] = useState(0);


  function updateScore(e){
    
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Chikn Memory Game</h1>
      </div>
      <Carousel />
      <Scoreboard />
    </div>
  );
}

export default App;
