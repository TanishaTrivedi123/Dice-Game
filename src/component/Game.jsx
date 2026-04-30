import React, { useReducer, useState } from "react";
import dice1 from "/dice1.png";
import dice2 from "/dice2.webp";
import dice3 from "/dice3.png";
import dice4 from "/dice4.webp";
import dice5 from "/dice5.png";
import dice6 from "/dice6.png";

const showRuleFunction = (state, action) => {
  if (action.type === "show") {
    return !state;
  }
};

const Game = () => {
  const [selected, setSelected] = useState(null);
  const [diceNumber, setDiceNumber] = useState(1);
  const [count, setCount] = useState(0);
  const [showRule, dispatchShowRule] = useReducer(showRuleFunction, false);

  const handleClick = (num) => {
    setSelected(num);
  };

  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);

    if (selected === randomNumber) {
      setCount((prev) => prev + 1);
      alert("You won 🎉");
    }
  };

  const images = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };

  return (
    <div className="game-container">
      <div className="navbar">
        {/* score */}
        <div className="score">
          <h1>{count}</h1>
          <h3>Total Score</h3>
        </div>

        {/* numbers */}
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <span
              className={selected === num ? "active" : ""}
              onClick={() => handleClick(num)}
              key={num}
            >
              {num}
            </span>
          ))}
        </div>
      </div>

      {/* dice section */}
      <div className="dice">
        <img onClick={rollDice} src={images[diceNumber]} alt="dice" />
        <p>Click on Dice to roll</p>

        <div className="buttons">
          <button className="reset" onClick={() => setCount(0)}>
            Reset Score
          </button>

          <button
            className="rules"
            onClick={() => dispatchShowRule({ type: "show" })}
          >
            {showRule ? "Hide Rules" : "Show Rules"}
          </button>
        </div>
      </div>

      {/* rules */}
      {showRule && (
        <div className="rules-box">
          <h3>📜 How to Play</h3>
          <p>1️⃣ Select a number (1 to 6).</p>
          <p>2️⃣ Roll the dice.</p>
          <p>3️⃣ If it matches, you gain points.</p>
          <p>4️⃣ If not, no points 😉</p>
        </div>
      )}
    </div>
  );
};

export default Game;
