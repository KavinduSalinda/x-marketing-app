import React from "react";
import Button from "./Button";
import Image1 from "../assets/xmm-img1.png";
import "../styles/Section.css";
import tickMark from "../assets/xmm-tick.png";

function About() {
  return (
    <section className="about-us-container">
      <div className="about-us-content content-container">
        <h4 className="section-subtitle">ABOUT US</h4>
        <h1 className="section-title">
          Best Ever Token Designed For Remarkable Success
        </h1>
        <p className="section-description">
          The main advantage of supporting $XMM is that the project is focused
          on creating Volume and Market Marketing. XMM empowers businesses to
          create dynamic content targeting specific markets.
        </p>
        <div className="about-us-list-container">
          <ul className="about-us-list">
            <li className="about-us-list-item"><img src={tickMark} alt="tic-mark"/><div>Market</div></li>
            <li className="about-us-list-item"><img src={tickMark} alt="tic-mark"/><div>Volume</div></li>
            <li className="about-us-list-item"><img src={tickMark} alt="tic-mark"/><div>Trend</div></li>
          </ul>
        </div>
        <div style={{display:"inline-flex"}}><Button text="Read Whitepaper" className="whitepaper-button" /></div>
      </div>
      <div className="about-us-image">
        <img src={Image1} alt="best_token_image" />
      </div>
    </section>
  );
}

export default About;
