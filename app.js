let playerScore = 0;
let computerScore = 0;
let round = 0;
const totalRound = 5;
const playButton = document.querySelectorAll(".play-button");

// Get the computer's choice

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
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
		(playerSelection === `rock` && computerSelection === `scissors`) ||
		(playerSelection === `paper` && computerSelection === `rock`) ||
		(playerSelection === `scissors` && computerSelection === `paper`)
	) {
		roundResult = `${playerSelection} wins!`;
		playerScore++;
		round++;
	} else {
		roundResult = `${computerSelection} wins!`;
		computerScore++;
		round++;
	}

	//display round results
	const roundResultElement = document.createElement("p");
	roundResultElement.textContent =
		" You chose " +
		playerSelection +
		" and the computer chose " +
		computerSelection +
		". " +
		roundResult;
	document.getElementById("round-result").textContent = "";
	document.getElementById("round-result").appendChild(roundResultElement);

	//update score
	document.getElementById("player-score").textContent = playerScore;
	document.getElementById("computer-score").textContent = computerScore;
	//check if total round have been played
	if (round === totalRound) {
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
	} else if (playerScore < computerScore) {
		winner = "Computer";
	} else {
		winner = "It's a TIE!";
	}

	// Show button #play-again
	document.getElementById("play-again").style.display = "inline-block";
	// Show end game message
	const endGameElement = document.createElement("h2");
	endGameElement.textContent = `Congratulations! ${winner} has won the game!`;
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
