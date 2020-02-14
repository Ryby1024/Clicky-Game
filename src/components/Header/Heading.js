import React from "react";
import "./style.css"


const Heading = (props) => {
    return (

        <div className="jumbotron-fluid">
            <div className="heading">
                <h1>{props.children}</h1>
                
                
            </div>

        </div>
    )
}
export default Heading;