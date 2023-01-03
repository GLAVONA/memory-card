import React from "react";
import '../styles/Card.css'


function Card(props){


    return(
        <div className="Card">
            <div className="img-div">
                <img src={props.src} alt="" />
            </div>
            <div className="card-name">
                {props.name}
            </div>
        </div>
    )
}

export default Card;