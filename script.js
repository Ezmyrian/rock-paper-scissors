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
const reset = document.querySelector("#reset");
let rounds = 0;

selectors.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(getComputerChoice(), button.id);
  });
});

reset.addEventListener('click', () => {
  resetGame()
});

function playRound(computerChoice, playerChoice) {
  wins = document.querySelector("#wins");
  losses = document.querySelector("#losses");
  ties = document.querySelector("#ties");

  if (rounds > 4) {
    resetGame();
  }


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
  rounds = 0;
  document.querySelector("#wins").textContent = 0;
  document.querySelector("#losses").textContent = 0;
  document.querySelector("#ties").textContent = 0;
  document.querySelector("#message").textContent = "Playing game..."
}