import React from 'react';
import './StyleHomePage.css'
import { NavLink } from "react-router-dom";

function HomePageBooks() {
    return (
        <>
            <section id="homePage-seven" className="homePage-goblack">
                <div className="homePage-heading ">
                    <h1>Take a look of our books</h1>
                    <p className="homePage-lightblack">This is just a sample of the world of books created here!!✌️</p>
                </div>
                <div className="homePage4-container container__bg goblack">
                    <div className="homePage4-info goblack">
                        <span><img src="src\assets\images\image (21).png" alt="" /></span>
                        <div className="homePage4-info__text">
                           
                            <h1>Royal👑 Masquerade</h1>
                            <NavLink id="link" to="/mainBooks" style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}>read more</NavLink>
                        </div>
                    </div>
                    <div className="homePage4-info">
                        <span><img src="src\assets\images\image (22).png" alt="" /></span>
                        <div className="homePage4-info__text">

                            <h1>Beneath the Silver Moon!</h1>
                            <NavLink id="link" to="/mainBooks" style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}>read more</NavLink>
                        </div>
                    </div>
                    <div className="homePage4-info">
                        <span><img src="src\assets\images\image (23).png" alt="" /></span>
                        <div className="homePage4-info__text">

                            <h1>The millionaire's guide</h1>
                            <NavLink id="link" to="/mainBooks" style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}>read more</NavLink>
                        </div>
                    </div>
                    <div className="homePage4-info">
                        <span><img src="src\assets\images\image (24).png" alt="" /></span>
                        <div className="homePage4-info__text">

                            <h1>Fading Shadows</h1>
                            <NavLink id="link" to="/mainBooks" style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}>read more</NavLink>
                        </div>
                    </div>
                    <div className="homePage4-info goblack">
                        <span><img src="src\assets\images\image (25).png" alt="" /></span>
                        <div className="homePage4-info__text">

                            <h1>Threads of Destiny</h1>
                            <NavLink id="link" to="/mainBooks" style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}>read more</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePageBooks;