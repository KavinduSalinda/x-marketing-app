import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Home.css";
import Button from "../components/Button";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import mainImage from "../assets/xmm-hero.png";
import About from "../components/About";
import Features from "../components/Features";
import arrow from "../assets/arrow.png";

function Home() {
  const userArray = [user1, user2, user3];
  return (
    <>
      <div id="home">
        <NavBar />
        <main className="sizes">
            {/* <div className="title-svg-container">
            <svg
              viewBox="0 0 1518 500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsxlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill="rgba(47, 73, 94, 1)"
                d="M 0 500 L 409 115 L 409 120 L 0 120 Z"
                stroke-width="0"
              ></path>{" "}
              <path
                fill="rgba(47, 73, 94, 1)"
                d="M 1149 122 L 1518 500 L 1518 120 L 1149 120 Z"
                stroke-width="0"
              ></path>
            </svg>
            </div> */}
          <div className="main-tagline">
            <h1 className="primary-text">MARKETING MAKING WITH XMM.</h1>

          </div>
          <div className="main-flex-box">
            <div>
              <div className="main-description">
                <p>XMM empowers business to create dynamic content, target</p>
                <p>
                  specific demographics, and optimize their digital presence
                </p>
              </div>
              <div className="join-button-container">
                <Button text="Join Telegram" />
                <div className="profile-container">
                  {userArray.map((user, index) => {
                    return (
                      <img
                        key={index}
                        style={{ left: `${40 * index + 1}px` }}
                        src={user}
                        alt="telegram"
                      />
                    );
                  })}
                </div>
              </div>

              <div className="happy-customer-container">
                <p className="happy-customer">
                  <strong>OUR HAPPY CUSTOMERS</strong>
                </p>
                <div className="happy-customer-description">
                  <p>Our happy customers are at the heart</p>
                  <p>of everything we do</p>
                </div>
              </div>
            </div>
            <div className="main-image">
              <img src={mainImage} alt="mainImage" />
            </div>
          </div>
        </main>
      </div>

      <section className="about-features-section ">
        {/* SVG Section */}
        <div className="svg-section">
        <svg
            viewBox="0 0 1518 300"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#7248ff" d="M 0 203 C 332.4 203 221.6 202 554 202 L 554 202 L 554 0 L 0 0 Z" />
            <path fill="#7248ff" d="M 553 202 C 661.6 202 625.4 104 734 104 L 734 104 L 734 0 L 553 0 Z" />
            <path fill="#7248ff" d="M 733 104 C 841.6 104 805.4 202 914 202 L 914 202 L 914 0 L 733 0 Z" />
            <path fill="#7248ff" d="M 913 202 C 1276 202 1155 203 1518 203 L 1518 203 L 1518 0 L 913 0 Z" />
            <circle cx="734" cy="192.5" r="70" fill="white" />
            <image
              href={arrow}
              x="682"
              y="142.5"
              width="100"
              height="100"
              clipPath="circle(70px at center)"
            />
          </svg>
        </div>
        <div className="about-features-section sizes">
          <About />
          <Features />
        </div>
      </section>

    </>
  );
}

export default Home;
