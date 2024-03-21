/*
Create function to get computer choice, returning rock, paper, or scissors
  generate random number between 0 and 2 of type integer and assign to variable randomNum
  assign rock, paper, or scissors based on random number generated

Get player input of type string, downcase and assign to variable playerChoice

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

function playRound(computerChoice, playerChoice) {
  if (computerChoice == 'rock' && playerChoice == 'paper') {
    return 'player'
  }
  else if (computerChoice == 'rock' && playerChoice == 'scissors') {
    return 'computer'
  }
  else if (computerChoice == 'paper' && playerChoice == 'scissors') {
    return 'player'
  }
  else if (computerChoice == 'paper' && playerChoice == 'rock') {
    return 'computer'
  }
  else if (computerChoice == 'scissors' && playerChoice == 'rock') {
    return 'player'
  }
  else if (computerChoice == 'scissors' && playerChoice == 'paper') {
    return 'computer'
  }
  else {
    return 'tie'
  }
}

function playGame() {
  let playerWins = 0;
  let computerWins = 0;

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

playGame()
