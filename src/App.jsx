import Game from "./component/Game";
import Home from "./component/Home";
import { useState } from "react";

function App() {
  const [showGame, setShowGame] = useState("home");

  return (
    <>{showGame === "home" ? <Home setShowGame={setShowGame} /> : <Game />}</>
  );
}

export default App;
