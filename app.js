let playerScore = 0;
let computerScore = 0;
let round = 0;
const totalRound = 5;

// Get the computer's choice

function getComputerChoice(){
    const choices = ['rock', 'paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// play round function

function playRound(playerSelection){
    computerSelection = getComputerChoice();
    let result;

    if(playerSelection === computerSelection){
        return `Try again, its a TIEEEE!`
}
    else if(
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)){
        return `${playerSelection} wins!`
    }
    else {
         `${computerSelection} wins!`
        computerScore++;
        round++;}
}

//function to handle button click for rock, paper, or scissors and pass the result to the playRound function






//display results





// keep round count max of 5







// hide play agin button