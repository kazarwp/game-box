export const StartGameButton = ({setShowStartButton}) => {
  return (
    <div className="start-game">
      <button className="start-game-button" onClick={() => setShowStartButton(false)}>
        Начать игру
      </button>
    </div>
  );
};
