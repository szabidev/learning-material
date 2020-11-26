// Selecting buttons, input, text that I want to manipulate
const p1Button = document.querySelector("#p1");
const p2Button = document.getElementById("p2");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const numInput = document.querySelector("input"); 
const winningScoreDisplay = document.querySelector("p span")
//Declaring score tracking variable, and gameOver variable that I will use to check if the game is over or not, and winning score variable
//to keep counting the score I have to reach
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;
// add a click event listener to the first button
p1Button.addEventListener("click" , function(){
    //if the game is not ! over - increment p1Score 
    if(!gameOver) {
        p1Score++;
        // if p1Score reaches winning score add the class winner wich will turn the text color to green
        if(p1Score === winningScore) {
            p1Display.classList.add("winner");
            // set the gameOver variable to true so that the game will stop
            gameOver = true;
        }
        // keep changing the text for p1 to p1Score
        p1Display.textContent = p1Score;
    }  
});
// same steps as above but for p2
p2Button.addEventListener("click", function(){
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

// add an event listener to the reset button that invokes the reset() function
resetButton.addEventListener("click", function() {
   reset();
});
// reset function will reset the score variables to 0 , the text content of players to 0, removes the winner class, and sets gameOver to false so that a new game can start
function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
};
// change event occurs anytime the value changes (it doesnt matter if its by click or not)
numInput.addEventListener("change", function() {
    // changing the span in the paragraph to be equal to the winningscore, wich will be updated by the value from the input
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    // resets the game 
    reset();
});
