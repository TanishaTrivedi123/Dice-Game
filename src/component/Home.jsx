import React from "react";

const Home = ({ setShowGame }) => {
  return (
    <div className="container">
      {/* image */}
      <div className="left">
        <img src="/dices 1.png" alt="Dice" />
      </div>

      {/* for text */}
      <div className="right">
        <h1>DICE GAME</h1>
        <button onClick={() => setShowGame("Game")}>Play Now</button>
      </div>
    </div>
  );
};

export default Home;
