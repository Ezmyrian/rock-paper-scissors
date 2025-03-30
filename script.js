/*
Create function getComputerChoice that randomly picks a number between 0 and 2
    Initialize variable randomNum of type number and assign a value
        between 0 and 2.
    Create logic block to assign rock, paper, or scissors based on 
        randomNum and return the value.
*/

function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}

/*
Create function getHumanChoice that prompts user for choice of rock, paper, or scissors.
Return value of users choice.
*/

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice;
}

/*
Move playRound function and score variables into a playGame function 
and call playRound five times
*/
function playGame() {

//Create two variables in global scope to track human and computer scores

let humanScore = 0;
let computerScore = 0;

/*
Create function playRound which accepts two parameters, computerChoice and humanChoice.
    Make humanChoice case insensitive
    Compare choices to determine the winner
    Console log the winner
    Increment human or computer score as appropriate
*/

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
