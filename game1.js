//to do: cheat codes (Christina/c added as ++ default win), fix console reporting of full choice name with abbreviated inputs

function game1() {
    let  playerScore=0;
    let computerScore=0;
    game();

//randomization for computerPlay:

    function computerPlay(){
        let max=4;
        let min=1;
        let randomNumber = Math.floor(Math.random() * (max - min) + min);   //0.24*(4-1)+1=1.72 floored is 1(rock), 0.88*(4-1)+1=3.64 is 3(scissors) etc
        switch (randomNumber){
            case 1:
                return ("rock");
            case 2:
                return ("paper");
            case 3:
                return ("scissors");
        }
    }

//One round of the game:

    function playRound (playerSelection, computerSelection)  {
        console.log("What is your choice?");
        console.log(" ");
        console.log("You picked " + playerSelection+ ".");
        console.log("The computer picked " +computerSelection+".");

    //playerSelection vs computerSelection compare & score:

        switch  (playerSelection) {
            case "rock":
            case "r":
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
            case "p":
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
            case "s":
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
            case "christina":
            case "c":
                console.log ("Smart. You literally can't lose with Christina.");
                playerScore+= 100;
                break;
            default:
                console.log ("You chose an invalid selection. You forfeit this round.")
                computerScore++;
                break;
        }
    console.log (" ");
    console.log ("Player score: "+playerScore);
    console.log ("Computer score: "+computerScore);
    }


//overall game framework, calling rounds for (i<=rounds) and reporting scores and end result:

    function game(){
        for (let i=1; i<=5; i++) {
            console.log(" ");
            console.log("--Round # "+i+"--");
            const playerSelection = prompt("Please pick rock, paper, or scissors.").toLowerCase(); //modifying this input to reflect "r" as "rock" would be best
            const computerSelection = computerPlay();
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


//attempting the "r = rock" output swap:
/*
let playerInput= prompt("Please pick rock, paper, or scissors.").toLowerCase();
    switch (playerInput){
        case "r":
        case "rock":
            playerInput = "rock";
            break;
        case "p":
        case "paper":
            return "paper";
            break;
        case "s":
        case "scissors":
            return "scissors";
            break;
    }

Another attempt:
Somehow putting this in makes everything come up as "ROCK" regardless of input.
In retrospect I didn't put this inside a function, as my brain is dumb. Next step is to try it with "function choiceConvert(){"

if (playerInput === "r" || "rock"){
    playerSelection = "rock";
} else if (playerInput === "p" || "paper"){
    playerSelection = "paper";
} else if (playerInput === "s" || "scissors"){
    playerSelection = "scissors";
} else if (playerInput === "c" || "christina"){
    playerSelection = christina;
} else {
    playerSelection = "invalid";
}
*/

//putting the above below playerSelection and changing the playRound() switch case did not work. Maybe a full if/else run needed.

//"Which comes up most often?" We could use the Math.random to run and log hundreds of attempts and keep a record as a secondary
//project, could be a fun rework exercise. Same for heads/tails, with the ++ going to counters based on the parameters


























}
game1();