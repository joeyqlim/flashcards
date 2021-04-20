import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import "./App.scss";
import words from "./data/words";

const App = () => {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const [color, setColor] = useState("pink");
  const [show, setShow] = useState(false);

  const getRandomCard = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);
    let randomCard = cards[randomIndex];
    if (randomCard === currentCard) {
      getRandomCard(cards);
    } else {
      setCurrentCard(randomCard);
      setColor(randomColor());
    }
  };

  const hideAnswer = () => {
    setShow(false);
  };

  const toggleShowAnswer = () => {
    setShow(!show);
  };

  const randomColor = () => {
    const colors = [
      "peach",
      "green",
      "blue",
      "purple",
      "pink",
      "steel",
      "coral",
      "gray",
      "yellow",
      "orange",
      "navy",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    setCards(words);
    setCurrentCard(cards[0]);
  }, [cards]);

  return (
    <div className="app">
      <NavBar />
      {!currentCard ? (
        "loading"
      ) : (
        <Card
          en={currentCard.en}
          de={currentCard.de}
          gender={currentCard.gender}
          plural={currentCard.plural}
          color={color}
          toggleShowAnswer={toggleShowAnswer}
          show={show}
        />
      )}
      <Button getRandomCard={getRandomCard} hideAnswer={hideAnswer} />
    </div>
  );
};

export default App;
