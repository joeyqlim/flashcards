import React from "react";
import "./Card.scss";

const Card = ({ en, de, gender, plural, color, toggleShowAnswer, show }) => {
  let artikel = "";
  if (gender === "m") {
    artikel = "der";
  } else if (gender === "f") {
    artikel = "die";
  } else {
    artikel = "das";
  }
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
          <div className="en">{en}</div>
        </div>
        <div className={`back ${show ? "show-answer" : ""}`}>
          <div className="de">
            <span className="gender">
              <b>{artikel}</b>{" "}
            </span>
            {de} (s)
          </div>
          <div className="plural">
            <b>die</b> {plural} (p)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
