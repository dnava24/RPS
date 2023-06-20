let playerScore = 0;
let computerScore = 0;
let round = 0;
const totalRound = 5;
const playButton = document.querySelectorAll(".play-button");


// Function to handle play button click or touch events
function handlePlayButtonClick(event) {
  const playerSelection = event.target.id;
  playRound(playerSelection);
}

// Add click and touch event listeners to play buttons
playButton.forEach(button => {
  button.addEventListener('click', handlePlayButtonClick);
  button.addEventListener('touchend', handlePlayButtonClick);
});

// Get the computer's choice

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	return choices[Math.floor(Math.random() * choices.length)];
}

function disablePlayButton(){
    playButton.forEach(button =>{
        button.disabled = true;
    })
}

function enablePlayButton(){
    playButton.forEach(button =>{
        button.disabled = false;
    })
}

// play round function
function playRound(playerSelection) {
	const computerSelection = getComputerChoice();
	let roundResult;

	if (playerSelection === computerSelection) {
		roundResult = `Try again, its a TIEEEE!`;
	} else if (
		(playerSelection === `Rock` && computerSelection === `Scissors`) ||
		(playerSelection === `Paper` && computerSelection === `Rock`) ||
		(playerSelection === `Scissors` && computerSelection === `Paper`)
	) {
		roundResult = `${playerSelection} beats ${computerSelection}! Player wins!`;
		playerScore++;
	} else {
		roundResult = `${computerSelection} beats ${playerSelection}! Computer wins!`;
		computerScore++;
	}
	round++;
	//update score
	document.getElementById("player-score").textContent = playerScore;
	document.getElementById("computer-score").textContent = computerScore;
	//display round results
	const roundResultElement = document.createElement("p");
	roundResultElement.textContent = roundResult;
	document.getElementById("round-result").textContent = "";
	document.getElementById("round-result").appendChild(roundResultElement);

	//check if total round have been played
	if ((playerScore + computerScore) === totalRound) {
		endGame();
        disablePlayButton();
	}
	return roundResult;
}
//end game function

function endGame() {
	let winner;
	if (playerScore > computerScore) {
		winner = "Player";
	} else if (computerScore > playerScore) {
		winner = "Computer";
    } 


	// Show button #play-again
	document.getElementById("play-again").style.display = "inline-block";
	// Show end game message
	const endGameElement = document.createElement("h2");
	endGameElement.textContent = `${winner} Wins!`;
	document.getElementById("round-result").textContent = "";
	document.getElementById("round-result").appendChild(endGameElement);
   
}

function restartGame() {
	playerScore = 0;
	computerScore = 0;
	round = 0;
	document.getElementById("player-score").textContent = 0;
	document.getElementById("computer-score").textContent = 0;
	document.getElementById("round-result").innerHTML = "";
	document.getElementById("play-again").style.display = "none";
    enablePlayButton();
}
document.getElementById("play-again").addEventListener("click", restartGame);
