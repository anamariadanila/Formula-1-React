import React, { useState } from "react";
import Flag from "react-world-flags";
import "./Card.css";

export default function Card({ racer, index }) {
  const [score, setScore] = useState(racer.points);
  const [hovered, setHovered] = useState(false);

  const handleScoreInc = () => {
    setScore(score + 1);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div
        className={`custom-border container ${
          index < 3 ? "top-player" : "bottom-player"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={hovered ? { borderColor: racer.hex } : { borderColor: "black" }}
      >
        <div className="general-info line">
          <div className="rank">{index + 1}</div>
          <button className="btn" onClick={handleScoreInc}>
            +
          </button>
          <div className="points">
            <div className="number-points">{score}</div>
            <div className="pts">PTS</div>
          </div>
        </div>
        <div className="pilot-info line">
          <div className="name">
            <div
              className="vertical-line"
              style={{ backgroundColor: racer.hex }}
            ></div>
            <span className="first-name">{racer.firstName}</span>
            <span className="last-name">{racer.lastName}</span>
          </div>
          {/* <img className="flag" src={racer.flag} alt="flag" /> */}
          <Flag className="flag" code={racer.country} alt="flag" />
        </div>
        <p className="team">{racer.team}</p>

        <div className="driver-info">
          <img className="driver-picture" src={racer.image} alt="profile" />
          <img className="driver-number" src={racer.img} alt="driver number" />
        </div>
      </div>
    </>
  );
}

//TODO: responsive
