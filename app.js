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
    const computerSelection = getComputerChoice();
    let roundResult;

    if(playerSelection === computerSelection){
        roundResult = (`Try again, its a TIEEEE!`);
}
    else if(
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)){
        roundResult = (`${playerSelection} wins!`);
        playerScore++;
        round++;
    }
    else {
        roundResult = (`${computerSelection} wins!`);
        computerScore++;
        round++;}

//display round results
const roundResultElement = document.createElement('p');
roundResultElement.textContent = " You chose " + playerSelection + " and the computer chose " + computerSelection;
document.getElementById('round-result').textContent = "";
document.getElementById('round-result').appendChild(roundResultElement);


//update score
document.getElementById('player-score').textContent = playerScore;
document.getElementById('computer-score').textContent = computerScore;
//check if total round have been played
if(round === totalRound){
    endGame();
}
return roundResult;

}

//end game function 

function endGame(){
    //hide result
    document.getElementById('result').style.display = 'none';
    //show button #play-again
    document.getElementById('play-again').style.display = 'inline-block';
   //show end game message
    const endGameElement = document.createElement('h2');
    endGameElement.textContent = "Congratulations! You won the game!";
    document.getElementById('result').textContent='';
    document.getElementById('result').appendChild(endGameElement);
}
// keep round count max of 5

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById('player-score').textContent = 0;
    document.getElementById('computer-score').textContent = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('play-again').style.display = 'none';
//hide button #play-again
document.getElementById('play-again').style.display = 'none';
}
