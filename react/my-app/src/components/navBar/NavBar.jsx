
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './stylesNavBar.css';
import MainForm from "../form/MainForm";



export default function NavBar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`navbar-fixed ${scrolling ? 'scrolling' : ''}`}>
                <div className="navBar">
                    <img className="logo" src="src\assets\images\LOGO.png" alt="Logo"></img>
                    <NavLink id="link" to="/" style={({ isActive }) => ({ color: isActive ? '#FAAE3E' : '#0D98A0' })} >Home </NavLink>
                    <NavLink id="link" to="/About" style={({ isActive }) => ({ color: isActive ? '#FAAE3E' : '#0D98A0' })}>About</NavLink>
                    <NavLink id="link" to="/MainBooks" style={({ isActive }) => ({ color: isActive ? '#FAAE3E' : '#0D98A0' })}>Bookshelf </NavLink>
                    <NavLink id="link" to="/OurAuthors" style={({ isActive }) => ({ color: isActive ? '#FAAE3E' : '#0D98A0' })}>OurAuthors</NavLink>
                    {<MainForm></MainForm>}
                </div>
            </div>
        </>
    );
}
