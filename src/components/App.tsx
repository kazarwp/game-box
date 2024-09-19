import { useState } from "react";

import { Header } from "./Header";
import { StartGameButton } from "./StartGameButton";
import { Board } from "./Board";

function App() {
  const [showStartButton, setShowStartButton] = useState(true)
  return (
    <>
      <Header />
      {showStartButton && <StartGameButton setShowStartButton={setShowStartButton}/>}
      {!showStartButton && <Board/>}
    </>
  );
}

export default App;
