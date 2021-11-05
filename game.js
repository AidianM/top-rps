
function RPSgame (){
    let playerScore = 0;
    let computerScore = 0;
    game();

function playRound(playerSelection, computerSelection) {    // plays a single round and updates score
    console.log("What is your choice?")
    console.log(" ");
    console.log("Player selects " + playerSelection)
    console.log("Computer selects " + computerSelection)
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    console.log("Tie")
                    break;
                case "paper":
                    console.log("Computer wins round");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("Player wins round");
                    playerScore++;
                    break;
                }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    console.log("Player wins round")
                    playerScore++
                    break;
                case "paper":
                    console.log("Tie");
                    break;
                case "scissors":
                    console.log("Computer wins round");
                    computerScore++;
                    break;
            }    
        break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                    console.log("Computer wins round.")
                    computerScore++;
                    break;
                case "paper":
                    console.log("Player wins round.");
                    playerScore++;
                    break;
                case "scissors":
                    console.log("Tie.");
                    break;
            }
        break;
    }
    console.log (" ");
    console.log("Computer score " + computerScore);
    console.log("Player score " + playerScore);
    console.log(" ");
}


function computerPlay() {  // computer selects rock, paper or scissors at random  
    let max = 4;
    let min = 1;
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    switch(randomNumber){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        }
}

function game() {  // main game function plays 5 rounds and returns winner 
    for(let i = 1; i <= 5; i++) {
        console.log("Round #" + i)
        const playerSelection = prompt("What is your choice?").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

    console.log(" ");
    console.log("Game over")
    if(playerScore > computerScore) {
        console.log("Player Wins")
    } else if (playerScore == computerScore) {
        console.log("Tie")
    } else {
        console.log("Computer Wins");
    }
}
}
RPSgame();
