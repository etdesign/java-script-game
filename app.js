function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    } 
    else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) 
    {
      return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } 
    else {
      return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      const playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.startsWith("You Win!")) {
        playerScore++;
      } else if (result.startsWith("You Lose!")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log(`You won the game! (${playerScore} - ${computerScore})`);
    } else if (computerScore > playerScore) {
      console.log(`You lost the game. (${playerScore} - ${computerScore})`);
    } else {
      console.log(`It's a tie game. (${playerScore} - ${computerScore})`);
    }
  }
  
/*
  console.log(playRound("rock", computerPlay())); 
  console.log(playRound("paper", computerPlay())); 
  console.log(playRound("scissors", computerPlay())); 
  */

game();