const getUserChoice = function(userInput){
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors' || userInput === 'bomb'){
    return userInput} 
    else {
      console.log('Error, please type rock,paper or scissors!')
    };
 };
 
 const getComputerChoice = function(){
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
     return 'scissors';    
  };
 };
 
 const determineWinner = function(userChoice, computerChoice){
   if (userChoice === computerChoice){
     return 'This game is a tie!';
   };
   if (userChoice === 'rock'){
     if (computerChoice === 'paper'){
       return 'Sorry, Computer has won!';
     } else {
       return 'Congratulations you have won!';
     }
   };
   if (userChoice === 'paper'){
     if (computerChoice === 'scissors'){
       return 'Sorry Computer has won!';
     } else {
       return 'Congratulations you have won!';
     }
   };
   if (userChoice === 'scissors'){
     if (computerChoice === 'rock'){
       return 'Sorry Computer has won!';
     } else {
       return 'Congratulations you have won!';
     }
   }
   if (userChoice === 'bomb'){
     return 'Congratulations you have won!'
   }
 }; 
 
 const playGame = function(){
   const userChoice = getUserChoice('bomb');
   const computerChoice = getComputerChoice();
   console.log( 'You threw: ' + userChoice);
   console.log( 'The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
 };
 
 playGame()