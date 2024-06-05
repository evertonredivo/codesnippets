// return
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

// Conditional (ternary) operator inside Template literals (Template strings)
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${ playerScore === 3 ? "Player" : "Computer" } has won the game!`; // see placeholder here
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

};
