import React from "react";

function Card(props){


    return(
        <div className="Card" onClick={props.targetId}>
                <img src={props.src} alt="" id={props.id} />
        </div>
    )
}

export default Card;