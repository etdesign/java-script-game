  function computerPlay() {
      const options = ["Rock", "Paper", "Scissors"];
      const randomIndex = Math.floor(Math.random() * options.length);
      return options[randomIndex];
    }

  function capitalize(userInput) {
    return userInput.charAt(0).toUpperCase() + userInput.slice(1);
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    switch (playerSelection) {
      case "rock":
        if (computerSelection.toLowerCase() === "scissors") {
          return `You Win! ${this.capitalize(playerSelection)} beats ${computerSelection}.`;
        } else if (computerSelection.toLowerCase() === "paper") {
          return `You Lose! ${computerSelection} beats ${this.capitalize(playerSelection)}.`;
        } else {
          return "It's a tie!";
        }
      case "paper":
        if (computerSelection.toLowerCase() === "rock") {
          return `You Win! ${this.capitalize(playerSelection)} beats ${computerSelection}.`;
        } else if (computerSelection.toLowerCase() === "scissors") {
          return `You Lose! ${computerSelection} beats ${this.capitalize(playerSelection)}.`;
        } else {
          return "It's a tie!";
        }
      case "scissors":
        if (computerSelection.toLowerCase() === "paper") {
          return `You Win! ${this.capitalize(playerSelection)} beats ${computerSelection}.`;
        } else if (computerSelection.toLowerCase() === "rock") {
          return `You Lose! ${computerSelection} beats ${this.capitalize(playerSelection)}.`;
        } else {
          return "It's a tie!";
        }
      default:
        return "Invalid selection. Please choose rock, paper, or scissors.";
    }
  }
  
  function game(numRounds) {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= numRounds; i++) {
      let playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);
      while (!["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
        playerSelection = prompt(`Invalid selection. Please choose Rock, Paper, or Scissors`);
      }
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
  
  let numRounds;

  while (true) {
    numRounds = prompt("How many rounds do you want to play?");
  
    if (isNaN(numRounds)) {
      console.log("Please enter a valid number.");
    } else {
      break;
    }
  }
  console.log(`Paper➡️Rock⬇️ \n ⬆️Scissors⬅️`);
  game(numRounds);