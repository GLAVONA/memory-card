import React from "react";

function Card(props){

    return(
        <div className={props.classname} onClick={props.targetId} onAnimationEnd={props.onAnimationEnd}>
                <img src={props.src} alt="" id={props.id} />
        </div>
    )
}

export default Card;