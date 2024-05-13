/*
Create function to get computer choice, returning rock, paper, or scissors
  generate random number between 0 and 2 of type integer and assign to variable randomNum
  assign rock, paper, or scissors based on random number generated

Get player input from button click of type string and assign to variable playerChoice

Create function that plays a round of rock, paper, scissors
  input computer choice and player choice as parameters to the function
  compare player choice and computer choice to determine a winner for the round

Create function to play game
  create two variables to track how many rounds the player and computer have won
  call play round function and increment the winners counter
  display the round winner to the player
  compare counters to determine if the game has been won
    if the game has been won, exit and announce the winner, otherwise loop
*/

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3)
  switch (computerChoice) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

const selectors = document.querySelectorAll(".selector");
let rounds = 0;

selectors.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(getComputerChoice(), button.id);
  });
});

function playRound(computerChoice, playerChoice) {
  wins = document.querySelector("#wins");
  losses = document.querySelector("#losses");
  ties = document.querySelector("#ties");

  if (computerChoice == 'rock' && playerChoice == 'paper') {
    wins.textContent = 1 + Number(wins.textContent);
    rounds += 1;
    checkWinner(rounds);
  }
  else if (computerChoice == 'scissors' && playerChoice == 'rock') {
    wins.textContent = 1 + Number(wins.textContent);
    rounds += 1;
    checkWinner(rounds);
  }
  else if (computerChoice == 'paper' && playerChoice == 'scissors') {
    wins.textContent = 1 + Number(wins.textContent);
    rounds += 1;
    checkWinner(rounds);
  }
  else if (computerChoice == 'rock' && playerChoice == 'scissors') {
    losses.textContent = 1 + Number(losses.textContent);
    rounds += 1;
    checkWinner(rounds);
  }
  else if (computerChoice == 'paper' && playerChoice == 'rock') {
    losses.textContent = 1 + Number(losses.textContent);
    rounds += 1;
    checkWinner(rounds);
  }
  else if (computerChoice == 'scissors' && playerChoice == 'paper') {
    losses.textContent = 1 + Number(losses.textContent);
    rounds += 1;
    checkWinner(rounds);
  }
  else {
    ties.textContent = 1 + Number(ties.textContent);
    rounds += 1;
    checkWinner(rounds);
  }
}

function checkWinner(rounds) {
  if (rounds < 5) {
    return 
  }
  else {
    message = document.querySelector("#message");
    playerWins = Number(document.querySelector("#wins").textContent);
    computerWins = Number(document.querySelector("#losses").textContent);
    rounds = 0;

    if (playerWins > computerWins) {
      message.textContent = "Player Wins!";
    }
    else if (computerWins > playerWins) {
      message.textContent = "Computer Wins! Better luck next time.";
    }
    else {
      message.textContent = "Tie game, try again."
    }
  }
}

function resetGame() {

}

/*
Display for showing current game wins, losses, and ties
Button for starting new game
Once game is started, display buttons for rock paper scissors that play a round when clicked
Once five rounds are played declare winner and remove rock paper scissors buttons
New game button should use reset function to reset wins, losses, and current display
*/

/*
function getPlayerChoice() {
  let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase()
  switch (playerChoice) {
    case "rock":
    case "paper":
    case "scissors":
      return playerChoice
    default:
      getPlayerChoice()
  } 
}
*/

/*
function newGame() {
  resetGame()
  let playerWins = 0;
  let computerWins = 0;

  const display = document.querySelector("#display")
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
  const selectors = document.querySelectorAll(".selector");

  selectors.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(getComputerChoice(), button.id);
    });
  });

    <--
      for (i = 0; i < 5; i++) {
        let roundWinner = playRound(getComputerChoice(), getPlayerChoice())
        switch (roundWinner) {
          case 'player':
            playerWins += 1
            console.log("Player Wins!")
            break;
          case 'computer':
            computerWins += 1
            console.log("Computer wins")
            break;
          default: 
            console.log('tie')
            continue;
        }
      }
    -->

  if (playerWins > computerWins) {
    console.log("Player wins the game!")
  }
  else if (computerWins > playerWins) {
    console.log("Computer won the game, better luck next time.")
  }
  else {
    console.log("Tie game")
  }
}
*/

/*
function getPlayerChoice() {
  let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase()
  switch (playerChoice) {
    case "rock":
    case "paper":
    case "scissors":
      return playerChoice
    default:
      getPlayerChoice()
  } 
}
*/


/*
  create function to get computer choice of type string
  create display to hold current game stats (wins, losses, ties)
  create 3 buttons for player choice, each should call function playRound with player choice
  playRound function should read current stats, play a round, update stats, 
    and announce winner after 5 rounds
  create reset button to reset the game
  
*/