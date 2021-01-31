import React from "react";
import {
  Link
} from "react-router-dom";

import '../css/NavBar.css';
export function NavigationBar() {
    return(
        <div id="nav-bar">
            <ul id="list-button">
                <li><Link to="/"><button className="nav-btn">HOME</button></Link></li>
                <li><Link to="/programming"><button className="nav-btn">PROGRAMMING</button></Link></li>
                <li><Link to="/maths"><button className="nav-btn">MATHS</button></Link></li>
                <li><Link to="/stories"><button className="nav-btn">STORIES</button></Link></li>
                <li><Link to="/about"><button className="nav-btn">ABOUT ME</button></Link></li>
            </ul>
        </div>
    );
}