import React from "react";

function Scoreboard(props){

    return(
        <div className="Scoreboard">
            <div className="score">
                <div>Score: {props.score}</div>
                <div>High Score: {props.highscore}</div>
            </div>
            <button onClick={props.clearHighScore}>Reset Highscore</button>
        </div>
    )

}

export default Scoreboard;