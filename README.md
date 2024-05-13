# rock-paper-scissors
3/21/24

In this project I will be building a game of rock, paper, scissors.  The computer will generate a random number between 1 and 3 and assign it's choice based on the number for each round. The player will choose by typing via a text box prompt.  The choices will then be input to a function to play a round.  Each rounds winner will be announced and the result tabulated.  Once either the player or computer have won five rounds, they will be declared the winner.

I will be using a prompt, if-else statements, switch statements, functions, and nesting to make this program work.



5/13/24

As part of a later project I have revisited my rock-paper-scissors project to add a UI.  I began by creating a new branch to work on and switched to it.  I removed the playGame function which originally looped five times while tracking the score to later declare the winner.  In it's place I added a display to the html to display to the user the current score and used this as my input for the current game.  Once the game reaches five rounds a winner is declared and the rounds are reset.  After the game is tallied the score will remain until a new selection is made or the new game button is reset.  A game may be reset partway through by clicking new game.  

I use DOM manipulation to listen for click events on the buttons and feed this input into the appropriate function for player choice or to reset the game.  I then use DOM manipulation to output the current score to the user.  