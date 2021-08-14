import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import "./App.scss";
import fetchWords from "./data/fetchWords";

const App = () => {
  const [cards, setCards] = useState([]);
  const [reviewed, setReviewed] = useState([]);
  const [remainingCount, setRemainingCount] = useState(1);
  const [currentCard, setCurrentCard] = useState({
    en: "Dog",
    translation: "der Hund",
  });

  const [color, setColor] = useState("pink");
  const [show, setShow] = useState(false);

  const getRandomCard = () => {
    let reviewedCards = reviewed;
    reviewedCards.push(currentCard.en);
    setReviewed(reviewedCards);
    if (remainingCount !== 0) {
      setRemainingCount(remainingCount - 1);
    }
    let randomIndex = Math.floor(Math.random() * cards.length);
    let randomCard = cards[randomIndex];
    if (randomCard === currentCard || reviewed.includes(randomCard.en)) {
      if (remainingCount === 0) {
        setCurrentCard({
          en: "You've reached the end of this deck.",
          translation: "🎉",
        });
      } else {
        getRandomCard(cards);
      }
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
    fetchWords().then((res) => {
      console.log(res);
      setCards(res);
      setRemainingCount(res.length);
    });
  }, []);

  return (
    <div className="app">
      <NavBar />
      {/* {remainingCount} */}
      {!currentCard ? (
        "loading"
      ) : (
        <Card
          en={currentCard.en}
          translation={currentCard.translation}
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
