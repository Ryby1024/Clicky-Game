import React from "react";
import "./style.css";

const Title = (props) => {
    return (
        <div className="header">
            <h3>{props.children}</h3>
        </div>
    )
}
export default Title;