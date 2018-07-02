import React from "react";

function Navbar(){
    return (
        <div className="navDiv">
            <nav className="navbar">
                <a className="navbar-left">Start Bootstrap</a>
                <div>
                    <ul className="navbarList">
                        <li className="nav-item">
                            <a class="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link">Sample Post</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}




export default Navbar;