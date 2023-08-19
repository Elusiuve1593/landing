import React, { useState } from "react";
import "./BurgerMenu.css";

const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`burger-menu ${menuOpen ? 'open' : ''}`}>
            <button className="menu-button" onClick={toggleMenu}>
                <span className="hamburger-icon"></span>
                <span className="hamburger-icon"></span>
                <span className="hamburger-icon"></span>
            </button>
            <div className="menu-items">
                <div><a href="#">Log In</a></div>
                <div><a href="#">Pages</a></div>
                <div><a href="#">Contact Us</a></div>
                <div><a href="#">Blog</a></div>
                <div><a href="#">Landing</a></div>
            </div>
        </div>
    );
};

export default BurgerMenu;
