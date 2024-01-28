// select elements needed
const playerChoiceField = document.getElementById("playerChoice");
const computerChoiceField = document.getElementById("computerChoice");
const roundResultField = document.getElementById("roundResult");
const playerScoreField = document.getElementById("playerScore");
const computerScoreField = document.getElementById("computerScore");
const roundNumField = document.getElementById("roundNum");
const gameResultField = document.getElementById("gameResult");

let totalRounds;
let currentRound;

// to reset scores and result
function resetGame(){
    roundResultField.textContent = "";
    playerScoreField.textContent = 0;
    computerScoreField.textContent = 0;
    roundNumField.textContent = 1;
    gameResultField.textContent = null;
    currentRound = 1;
    totalRounds = parseInt(prompt("How many rounds you want to play?"));
}

// to get computer's choice
function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length); //trick to get random array element.
    return choices[randomIndex];
}

// to display result after n rounds based on scores
function getGameResult(){
    let playerScore = parseInt(playerScoreField.textContent);
    let computerScore = parseInt(computerScoreField.textContent);
    let gameResultText;
    if(playerScore === computerScore){
        gameResultText = "Game Tied!";
    }
    else if(playerScore > computerScore){
        gameResultText = "Congrats, You Won!";
    }
    else{
        gameResultText = "You Lost...";
    }
    gameResultField.textContent = gameResultText;
}

// playRound() calls it to update round number and if total rounds are complete then conclude game by showing result.
function updateRound(resultText){
    roundResultField.textContent = resultText;

    // when total rounds given by user are carried out then conclude game.
    if(currentRound === totalRounds){
        getGameResult();
    }
    // update round number
    else{
        currentRound++;
        roundNumField.textContent = currentRound;
    }
}

// to be called when player selects move
function playRound(playerSelection){

    // when clicks on a move, even after game finished then restart new game
    if(gameResultField.textContent){
        console.log('hitt');
        resetGame();
    }

    const computerSelection = getComputerChoice();

    // set choices of player and computer to display
    playerChoiceField.textContent = playerSelection;
    computerChoiceField.textContent = computerSelection;

    let resultText;
    if (playerSelection === computerSelection) {
        resultText = "It's a tie round!";
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissor') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissor' && computerSelection === 'Paper')
    ) {
        resultText = `You win! ${playerSelection} beats ${computerSelection}.`;
        let currentScore = parseInt(playerScoreField.textContent);
        playerScoreField.textContent = ++currentScore;
    } 
    else {
        resultText = `You lose! ${computerSelection} beats ${playerSelection}.`;
        let currentScore = parseInt(computerScoreField.textContent);
        computerScoreField.textContent = ++currentScore;
    }
    updateRound(resultText);
}

// reset values and initiate game
resetGame();