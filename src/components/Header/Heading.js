import React from "react";

const Heading = (props) => {
    return (

        <div className="container">
            <div className="jumbotron text-center">
                <h1>Clicky Game!</h1>
                <p>Click on an image to earn points, but do not click on an image more than once!</p>
                <p>{props.children}</p>
            </div>

        </div>
    )
}
export default Heading;