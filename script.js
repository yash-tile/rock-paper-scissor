// to get computer's choice
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length); //trick to get random array element.
    return choices[randomIndex];
}

// to play a single round, returns 1 if player wins the round, 0 if computer wins.
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    console.log("-----------------------------");
    console.log(`player: ${playerSelection}, computer: ${computerSelection}`);
    let result = -1;
    if (playerSelection === computerSelection) {
        console.log("It's a tie round!");
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        result = 1;
    } 
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        result = 0;
    }
    return result;
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
