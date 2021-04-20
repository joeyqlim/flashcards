import React from "react";
import "./Button.scss";

const Button = ({ getRandomCard, hideAnswer }) => {
  return (
    <div className="next-btn-container">
      <button
        className="next-btn"
        onClick={() => {
          getRandomCard();
          hideAnswer();
        }}
      >
        Next Word
      </button>
    </div>
  );
};

export default Button;
