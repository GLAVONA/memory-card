import React from "react";

function Scoreboard(props){

    return(
        <div className="Scoreboard">
            <h1>Score: {props.score}</h1>
            <h1>High Score: {props.highscore}</h1>
        </div>
    )

}

export default Scoreboard;