import React from 'react';
import './StyleHomePage.css'
import { NavLink } from "react-router-dom";
function HomePageWhatWeDo() {
  return (
    <>
      <section id="homePage-two">
        <div className="homePage-heading">
          <h1>How It Works</h1>
          <p className="homePage-lightblack">
            Discover the magic of collaborative storytelling on our platform. Here's how it unfolds:
          </p>
        </div>

        <div className="homePage-container">
          <div className="homePage-info">
            <span>
              <img src="src\assets\images\readingBook.png" alt="" style={{ height: '220px' }} />
            </span>
            <div className="homePage-info__text">
              <h1>Read a Book</h1>
              <p>Explore captivating stories submitted by our community. Immerse yourself in diverse narratives.</p>
              <h5 className="homePage-" style={{ color: " #FAAE3E" }}>step 1</h5>
            </div>
          </div>


          <div className="homePage-info">
            <span>
              <img src="src\assets\images\writeOffer.png" alt="" />
            </span>
            <div className="homePage-info__text">
              <h1>Write Offer</h1>
              <p>Unleash your creativity by proposing chapters for the ongoing stories. Shape the narrative with your unique ideas.</p>
              <h5 className="homePage-" style={{ color: " #FAAE3E" }}>step 2</h5>
            </div>
          </div>

          <div className="homePage-info">
            <span>
              <img src="src\assets\images\sendComment.png" alt="" style={{ height: '200px' }} />
            </span>
            <div className="homePage-info__text">
              <h1>Tag and Collaborate</h1>
              <p>Tag proposals from fellow contributors and collaboratively weave a tapestry of unexpected twists and turns.</p>
              <h5 className="homePage-" style={{ color: " #FAAE3E" }}>step 3</h5>
              <NavLink id="link" to="/mainBooks" style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}>let's start</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePageWhatWeDo;