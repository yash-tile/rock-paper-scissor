const playerChoiceField = document.getElementById("playerChoice");
const computerChoiceField = document.getElementById("computerChoice");
const roundResultField = document.getElementById("roundResult");
const playerScoreField = document.getElementById("playerScore");
const computerScoreField = document.getElementById("computerScore");

// to get computer's choice
function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length); //trick to get random array element.
    return choices[randomIndex];
}


// to be called when player selects move
function playRound(playerSelection){
    const computerSelection = getComputerChoice();

    // set choices of player and computer to display
    playerChoiceField.textContent = playerSelection;
    computerChoiceField.textContent = computerSelection;

    // 
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
    roundResultField.textContent = resultText;
}

// to carry out best of five game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: Rock, Paper or Scissor");
        
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        // Update scores 
        if (roundResult === 1) {
            playerScore++;
        } else if (roundResult === 0) {
            computerScore++;
        }
    }

    // Determine the winner
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game.");
    } else {
        console.log("It's a tie in the overall game.");
    }
}
