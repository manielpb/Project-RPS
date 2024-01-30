let computerPlay = [ 'rock', 'paper', 'scissors'];




function getComputerChoice (){
        let random = Math.floor(Math.random()* computerPlay.length);
        return computerPlay[random];
}

let  playerSelection = 'rock'
playerScore = 0;
computerScore = 0;


function playRound(playerSelection, computerSelection) {

   if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
    return " You Win! Rock beats Scissors ";

   }
   else if( playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
        computerScore += 1
    return " You Lose! Paper beats Rock "
   }
   else if ( playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
    return " Its a tie"
   }//
   else if ( playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
    playerSelection += 1
    return " You Win! Paper beats Rock"
   }
   else if ( playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper'){
    return " Its a tie"
   }
   else if ( playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
    computerScore += 1
    return " You Lose! Scissors beats Paper"
   }
   else if ( playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock'){
    computerScore += 1
    return " You lose! Rock beats scissors"
   }
   else if ( playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
    playerScore += 1
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
       console.log(` player: ${ playerScore} pc: ${ computerScore}`)
       console.log( ' ')
    }
    if ( playerScore > computerScore){
        console.log(`You win with ${playerScore} points`)
    }else {
        console.log(`Computer wins with ${ computerScore} points`)
    }
    
  
}



playGame()
