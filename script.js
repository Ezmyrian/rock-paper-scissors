let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    let display = document.querySelector(".results");
    let currentScore = document.querySelector(".current-score");
    let computerChoice = getComputerChoice();
    function getComputerChoice() {
        let randomNum = Math.floor(Math.random()*3);  //picks a random number between 0 and 2
        switch (randomNum) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2: 
                return "scissors";
        }
    }

    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                display.textContent = "Tie";
                break;
            case "paper":
                computerScore += 1;
                display.textContent = "You lose";
                break;
            case "scissors":
                humanScore += 1;
                display.textContent = "You win!";
                break;
        }
    }
    else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                humanScore += 1;
                display.textContent = "You win!";
                break;
            case "paper":
                display.textContent = "Tie";
                break;
            case "scissors":
                computerScore += 1;
                display.textContent = "You lose";
                break;
        }
    }
    else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                computerScore += 1;
                display.textContent = "You lose";
                break;
            case "paper":
                humanScore += 1;
                display.textContent = "You win!";
                break;
            case "scissors":
                display.textContent = "Tie";
                break;
        }
    }
    function Score () {
        currentScore.textContent = `Computer Score: ${computerScore} 
                                    Player Score: ${humanScore}`;
    }
    Score();
    if (computerScore == 5) {
        display.textContent = "Game over, Skynet has taken the Earth."
        computerScore = 0;
        humanScore = 0;
        Score();
    }
    else if (humanScore == 5) {
        display.textContent = "You have defeated Skynet!"
        computerScore = 0;
        humanScore = 0;
        Score();
    }
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener('click', (e) => {
    let target = e.target;

    switch (target.id) {
        case 'rock':
            playRound('rock')
            break;
        case 'paper':
            playRound('paper');
            break;
        case 'scissors':
            playRound('scissors')
            break;
    }
});