import React from 'react';
import './StyleHomePage.css'
import { NavLink } from "react-router-dom";

function HomePageStatement() {
  return (
    <>
      <section id="homePage-six">
        <h5>BOOKS LOVERS</h5>
        <h1>"Many pens make for a richer story,
          as every writer lends a unique stroke to the canvas of collective imagination.</h1>
        <button className='homePage-btn w-btn'>
          <NavLink id="link" to="/OurAuthors" style={({ isActive }) => ({ color: isActive ? '#0D98A0' : '#FAAE3E' })}>Go Our Author</NavLink>
        </button>
      </section>
    </>
  );
}

export default HomePageStatement;