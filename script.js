let computerPlay = [ 'rock', 'paper', 'scissors'];




function getComputerChoice (){
        let random = Math.floor(Math.random()* computerPlay.length);
        return computerPlay[random];
}


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
    playerScore = playerScore ;
    computerScore = computerScore;
    return " Its a tie! You both chose Rock"
   }//
   else if ( playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
    playerScore += 1
    return " You Win! Paper beats Rock"
   }
   else if ( playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper'){
    playerScore = playerScore ;
    computerScore = computerScore;
    return " Its a tie! You both chose Paper"
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
    playerScore = playerScore ;
    computerScore = computerScore;
    return " Its a tie! You both chose Scissors"
   }
}


/* function playGame() {

    

   /* let i = 0;
    while(i < 5){
        let computerSelection = getComputerChoice();
        let  playerSelection =  prompt("Pick: Rock, Paper or Scissors");
        if( playerSelection != 'rock' && playerSelection != 'paper' & playerSelection != 'scissors'){
            playerSelection = prompt("invalid input, Pick Rock, or Paper, or Scissors")
        }
       console.log(`you chose ${playerSelection}`);
       console.log(`computer chose ${computerSelection}`);
       console.log(playRound(playerSelection, computerSelection))
       console.log(` player: ${ playerScore} pc: ${ computerScore}`)
       console.log( ' ')
       i++;
    }*/
       
    
   /* if ( playerScore > computerScore){
        console.log(`You win with ${playerScore} points`)
    }else {
        console.log(`Computer wins with ${ computerScore} points`)
    }

   
    
  
} */ 



/*playGame()*/


let rockBtn = document.getElementById('rockBtn');
let scissorBtn = document.getElementById('scissorsBtn');
let paperBtn = document.getElementById( 'paperBtn');

rockBtn.addEventListener( 'click', () => {
    console.log('player chose rock')
});

scissorsBtn.addEventListener('click', ()=>{
    console.log('player chose scissor')
});

paperBtn.addEventListener('click', ()=>{
    console.log('player chose paper')
})