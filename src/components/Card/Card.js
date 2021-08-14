import React from "react";
import "./Card.scss";

const Card = ({ en, translation, color, toggleShowAnswer, show }) => {
  const cardStyle = {
    backgroundColor: `var(--color-${color}-background)`,
  };

  return (
    <div className="card-container">
      <div
        className="card-body"
        style={cardStyle}
        onClick={() => toggleShowAnswer()}
      >
        <div className="front">
          <div className="translation">{translation}</div>
        </div>
        <div className={`back ${show ? "show-answer" : ""}`}>
          <div className="en">{en}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
