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


