import React from "react";
import "../styles/Card.css";

function Card({
  number,
  title = "card",
  image = "https://via.placeholder.com/150",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur, turpis et auctor efficitur, libero odio facilisis libero, sit amet tincidunt nisl turpis sit amet libero.",
}) {
  return (
    <>
      <div className="left-line"></div>

      <div
        className="card"
        style={{
          background: `radial-gradient(circle at 50% ${
            number % 2 === 0 ? "100" : "0"
          }%, #2c1b61 0%, var(--secondary-color) 100%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <h3>{number}</h3>
            <h3>{title}</h3>
          </div>
        </div>
        <div className="card-content">
          <div className="card-image">
            <img src={image} alt="card" />
          </div>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
