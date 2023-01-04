import React from "react";

function Card(props){


    return(
        <div className="Card">
                <img src={props.src} alt="" id={props.id} />
        </div>
    )
}

export default Card;