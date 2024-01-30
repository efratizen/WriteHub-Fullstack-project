import React from 'react';
import './StyleHomePage.css'

function HomePageAdvantages() {
  return (
    <>
      <div className="centered-text">
        <h1 >Advantages of an Open Literature Platform</h1>
      </div>
      <section id="homePage-five" className="homePage-goblack" style={{ marginTop: "0", paddingTop: "0" }} >


        <div style={{ display: 'flex', position: 'center' }}>
          <div className="advantage-container" >

            <div className="advantage-mobile-layout">
              <div className="advantage-notification-header">

                <div className="advantage-necessities">
                  <i className="advantage-fas fa-signal"></i>
                  <i className="advantage-fas fa-wifi"></i>
                  <i className="advantage-fas fa-battery-full"></i>
                </div>
              </div>
              <div className="advantage-actions">
                <i className="advantage-fas fa-chevron-left"></i>
                <i className="advantage-fas fa-bookmark"></i>
              </div>
              <div className="advantage-book-cover">
                <img className="advantage-book-top" src="src\assets\images\ebe45aa4bc532a6dbb9a4cee75f44130.jpg" alt="book-top" />
                <img className="advantage-book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" />
              </div>
              <div className="advantage-preface">
                <div className="advantage-content">
                  <div className="advantage-header">
                    <div className="advantage-title" style={{ paddingBottom: '50%' }}>First advantage</div>
                    <div className="advantage-icon">
                      <i className="advantage-fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="advantage-body">
                    <p>
                      <b> Diverse Perspectives:</b>

                      Advantage: With an open platform, people from various backgrounds can share their stories and perspectives.
                      Explanation: Imagine a library where not only professional authors but also everyday people can contribute. This brings a rich mix of ideas, experiences, and cultures, making the literature more diverse and interesting
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* // 2 */}
          <div className="advantage-container">

            <div className="advantage-mobile-layout">
              <div className="advantage-notification-header">

                <div className="advantage-necessities">
                  <i className="advantage-fas fa-signal"></i>
                  <i className="advantage-fas fa-wifi"></i>
                  <i className="advantage-fas fa-battery-full"></i>
                </div>
              </div>
              <div className="advantage-actions">
                <i className="advantage-fas fa-chevron-left"></i>
                <i className="advantage-fas fa-bookmark"></i>
              </div>
              <div className="advantage-book-cover">
                <img className="advantage-book-top" src="src\assets\images\ebe45aa4bc532a6dbb9a4cee75f44130.jpg" />
                <img className="advantage-book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" />
              </div>
              <div className="advantage-preface">
                <div className="advantage-content">
                  <div className="advantage-header">
                    <div className="advantage-title" style={{ paddingBottom: '50%' }}>Second advantage</div>
                    <div className="advantage-icon">
                      <i className="advantage-fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="advantage-body">
                    <p>
                      <b>Community Engagement:</b>

                      Advantage: Readers can actively engage by adding chapters or providing feedback.
                      Explanation: It's like reading a book and having the power to influence its direction. Readers can become writers, and writers can build a community of loyal readers who eagerly await each new chapter.
                      It's a shared literary journey.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="advantage-container">

            <div className="advantage-mobile-layout">
              <div className="advantage-notification-header">

                <div className="advantage-necessities">
                  <i className="advantage-fas fa-signal"></i>
                  <i className="advantage-fas fa-wifi"></i>
                  <i className="advantage-fas fa-battery-full"></i>
                </div>
              </div>
              <div className="advantage-actions">
                <i className="advantage-fas fa-chevron-left"></i>
                <i className="advantage-fas fa-bookmark"></i>
              </div>
              <div className="advantage-book-cover">
                <img className="advantage-book-top" src="src\assets\images\ebe45aa4bc532a6dbb9a4cee75f44130.jpg" alt="book-top" />
                <img className="advantage-book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" />
              </div>
              <div className="advantage-preface">
                <div className="advantage-content">
                  <div className="advantage-header">
                    <div className="advantage-title" style={{ paddingBottom: '50%' }}>Third advantage</div>
                    <div className="advantage-icon">
                      <i className="advantage-fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="advantage-body">
                    <p>
                      <b>Collaborative Creativity:</b>

                      Advantage: Multiple authors can collaborate on a single book, creating a collaborative masterpiece.
                      Explanation: Picture a story written by different authors, each contributing a unique chapter. This collaborative effort can lead to unexpected plot twists
                      and creative combinations that no single author might have imagined.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePageAdvantages;