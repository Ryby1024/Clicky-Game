import React from "react";

const Card = (props) => {
    return (
        <img onClick={() => props.imageClick(props.id)}  src={props.image} alt={props.name} key={props.id}/>

    )
}

export default Card;