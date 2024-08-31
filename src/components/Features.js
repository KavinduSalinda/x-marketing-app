import React from "react";
import Card from "./Card";
import "../styles/Section.css";
import cardImage1 from "../assets/xmm-icon1.png";
import cardImage2 from "../assets/xmm-icon2.png";
import cardImage3 from "../assets/xmm-icon3.png";

const cardData = [
  {
    number: "01",
    title: "Market Making",
    image: cardImage1,
    description:
      "XMM empowers businesses to create dynamic content targeting specific markets.",
  },
  {
    number: "02",
    title: "Volume Marketing",

    image: cardImage2,
    description:
      "XMM empowers businesses to create dynamic content targeting specific markets.",
  },
  {
    number: "03",
    title: "Market Making",

    image: cardImage3,
    description:
      "XMM empowers businesses to create dynamic content targeting specific markets.",
  },
];

function Features() {
  return (
    <section className="features-container">
      <div className="feature-left-side">
        <div className="features-content content-container">
          <h4 className="section-subtitle">FEATURES</h4>
          <h1 className="section-title">Features of X MARKET MAKER</h1>
        </div>
        <div>
          <p className="section-description">
            The main advantage of supporting $XMM is that the project is focused
            on creating Volume and Market Marketing. XMM empowers businesses to
            create dynamic content targeting specific markets.
          </p>
        </div>
      </div>

      <div className="feature-right-side">
        {cardData.map((card, index) => (
          <Card
            key={index}
            number={card.number}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
