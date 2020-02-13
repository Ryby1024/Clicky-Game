import React from "react";
import "./style.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="img-container text-center">
        <img onClick={() => props.imageClick(props.id, props.name)}  src={props.image} alt={props.name} key={props.id}/>
        </div>
        </div>
    )
}

export default Card;