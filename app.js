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
  

  console.log(playRound("rock", computerPlay())); 
  console.log(playRound("paper", computerPlay())); 
  console.log(playRound("scissors", computerPlay())); 
  