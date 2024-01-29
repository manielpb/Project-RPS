let options = [ 'rock', 'paper', 'scissors']

let random = Math.floor(Math.random()* options.length)


function getComputerChoice (){
    return options[random]
}


function playRound(playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
    return " You Win! Rock beats Scissors "
   }
   else if( playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
    return " You Lose! Paper beats Rock "
   }
   else if ( playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
    return " Its a tie"
   }
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

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log( computerSelection);
console.log(playRound(playerSelection, computerSelection))