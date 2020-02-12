import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar bg-primary navbar-expand-lg sticky-top">
            Clicky Game

            <ul className="ml-auto">
            Score: {props.score} | 
            
            Top Score: {props.topScore}
            </ul>
        </nav>
    )
}
export default Navbar;
