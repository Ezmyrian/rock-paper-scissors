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

//Create two variables in global scope to track human and computer scores

let humanScore = 0;
let computerScore = 0;


