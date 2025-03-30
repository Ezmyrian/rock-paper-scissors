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

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock") {
            switch (computerChoice) {
                case "rock":
                    return "It's a tie";
                case "paper":
                    computerScore += 1;
                    return "You lose."
                case "scissors":
                    humanScore += 1;
                    return "Tou win!"
            }
        }
        else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "rock":
                    humanScore += 1;
                    return "Tou win!"
                case "paper":
                    return "It's a tie";
                case "scissors":
                    computerScore += 1;
                    return "You lose."
            }
        }
        else if (humanChoice === "scissors") {
            switch (computerChoice) {
                case "rock":
                    computerScore += 1;
                    return "You lose."
                case "paper":
                    humanScore += 1;
                    return "Tou win!"
                case "scissors":
                    return "It's a tie";
            }
        }
        else {
            return console.log("Not a valid player entry");
        }
    }
    for (i = 1; i < 6; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`player score is ${humanScore}`, `computer score is ${computerScore}`)
    }
}

playGame()
