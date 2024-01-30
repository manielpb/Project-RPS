let computerPlay = [ 'rock', 'paper', 'scissors'];




function getComputerChoice (){
        let random = Math.floor(Math.random()* computerPlay.length);
        return computerPlay[random];
}

const playerSelection = 'Rock';

function playRound(playerSelection, computerSelection) {

   if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
    return " You Win! Rock beats Scissors "

   }
   else if( playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
    return " You Lose! Paper beats Rock "
   }
   else if ( playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
    return " Its a tie"
   }//
   else if ( playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
    return " You Win! Paper beats Rock"
   }
   else if ( playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper'){
    return " Its a tie"
   }
   else if ( playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
    return " You Lose! Scissors beats Paper"
   }
   else if ( playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock'){
    return " You lose! Rock beats scissors"
   }
   else if ( playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
    return " You Win! Scissors beats Paper"
   }
   else if ( playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors'){
    return " Its a tie"
   }
}


function playGame() {
    for (let i = 0; i < 5;i++ ){
       let computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection))
    }

  
}



playGame()
