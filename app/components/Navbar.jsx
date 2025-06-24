import React from "react";
import "@/styles/navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="__blank__"></div>
                <ul className='nav-links'>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
                <div className="__blank__"></div>
            </nav>
        </>
    )
}

export default Navbar;
