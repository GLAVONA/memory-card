import { useEffect, useState } from "react";
import "./styles/App.css";
import Carousel from './components/Carousel';

function App() {

  return (
    <div>
    <div className="header">
      <h1>Chikn Memory Game</h1>
    </div>
    <Carousel />    
    </div>
  );
}

export default App;
