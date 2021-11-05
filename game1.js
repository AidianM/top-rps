function game1() {
    let  playerScore=0;
    let computerScore=0;
    game();

    function computerPlay(){
        let max=4;
        let min=1;
        let randomNumber = Math.floor(Math.random() * (max - min) + min);
        switch (randomNumber){
            case 1:
                return ("rock");
            case 2:
                return ("paper");
            case 3:
                return ("scissors");
        }
    }


    function playRound (playerSelection, computerSelection)  {
        console.log("What is your choice?");
        console.log(" ");
        console.log("You picked " + playerSelection+ ".");
        console.log("The computer picked " +computerSelection+".");

        switch  (playerSelection) {
            case "rock":
                switch(computerSelection) {
                    case "rock":
                        console.log ("It's a tie.");
                        break;
                    case "paper":
                        console.log ("Sorry, you lose.");
                        computerScore++;
                        break;
                    case "scissors":
                        console.log ("You win!");
                        playerScore++;
                        break;
                }
                break;
            case "paper":
                switch(computerSelection) {
                    case "rock":
                        console.log ("You win!");
                        playerScore++;
                        break;
                    case "paper":
                        console.log ("It's a tie.");
                        break;
                    case "scissors":
                        console.log ("Sorry, you lose.");
                        computerScore++;
                        break;
                }
                break;
            case "scissors":
                switch (computerSelection){
                    case "rock":
                        console.log ("Sorry, you lose.");
                        computerScore++;
                        break;
                    case "paper":
                        console.log ("You win!");
                        playerScore++;
                        break;
                    case "scissors":
                        console.log ("It's a tie.");
                        break;
                }
             break;
        }
    console.log (" ");
    console.log ("Player score: "+playerScore);
    console.log ("Computer score: "+computerScore);
    }

    function game(){
        for (let i=1; i<=5; i++) {
            console.log(" ");
            console.log("--Round# "+i+"--")
            const playerSelection = prompt("Please pick rock, paper, or scissors.").toLowerCase();
            const computerSelection  = computerPlay();
            playRound (playerSelection, computerSelection);
        }
        console.log(" ");
        console.log("++Game over++");
        if (playerScore>computerScore) {
            console.log("You won the game!");
        } else if (playerScore==computerScore) {
            console.log("The game is a tie.");
        } else {
            console.log("Oof. You lost the game.");
        }
    }

































}
game1();