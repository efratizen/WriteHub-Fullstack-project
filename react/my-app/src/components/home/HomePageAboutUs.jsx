import React from 'react';
import About from '../about/About'
import { NavLink } from "react-router-dom";
function HomePageAboutUs() {

  return (
    <>
      <section id="homePage-one-half" className="homePage-goblack" style={{ marginBottom: '0', paddingBottom: '0' }}>
        <span style={{ margin: '0', padding: '0' }}><img src="src\assets\images\1000_F_52130924_ORk5aispmh8x49aLk8Jbdo8bYOLEnO42.jpg" alt="" style={{ height: '50%' }} /></span>

        <div className="homePage-half-content">
          <div className="homePage-half__text">
            <h1>About Us</h1>
            <p>
              <strong>WriteHub  </strong>
              Experience unique and unpredictable plot developments in shared books,
              where everyone can contribute  captivating tales.
            </p>
            <p className='homePage-btnAbout'>  <NavLink id="link" to="/About" style={{ color: "#0D98A0" }}>go about---</NavLink></p>
          </div>


          <div className="homePage-half__boxes">
            <div className="homePage-box">
              <span><i className="homePage-homePage-fas fa-paw logo"></i></span>
              <h2>Our Mission</h2>
              <p> Empowering a global community to collaboratively shape unique narratives.</p>
            </div>
            <div className="homePage-box">
              <span><i className="homePage-fas fa-paw logo"></i></span>
              <h2>Our Vision</h2>
              <p> Cultivating a platform that inspires diverse voices in imaginative storytelling.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePageAboutUs;