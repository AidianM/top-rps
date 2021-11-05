const textArray = [
    "rock",
    "paper",
    "scissors"
];


function userPlay(){
    const userPick = (prompt("What would you like to play?").toLowerCase());
    console.log(userPick);
}
userPlay();





//this works!
function computerPlay() {
    const compPick = Math.floor(Math.random()*textArray.length);
       if (compPick==0) {
         console.log("Computer picks rock.");
      } else if (compPick==1) {
         console.log("Computer picks paper.");
     } else {
         console.log("Computer picks scissors.");
        }
}
computerPlay();
function game(){
    if (userPlay()===computerPlay()) {
        console.log ("It's a tie!");
    } else if(userPlay(userPick)=="rock" && computerPlay=="paper"){
        console.log("You lose. Better luck next time.");
    } else if(userPlay(userPick)=="rock" && computerPlay=="scissors") {
        console.log("You win!")
    } else {
        console.log("We aren't there yet.");
    }
}
game();

//two parameters: playerSelection and computerSelection
//winner delcaration as "You lose! Paper beats Rock"
//make playerSelector case insenstive (rock ROCK rOcK)
//return, not console.log, but test it by console.log


//for below: use prior function inside this one to play a 5 round game that keeps score and reports winner/loser at end
//loops fine, or call playRound function 5x's
//use console.log() to display results of each round and ultimate winner
//use prompt() to get input from user
//function game(){}

const result = playRound (playerChoice, computerChoice);
console.log ("You have picked "+playerChoice);
console.log ("The computer has picked "+computerChoice);
console.log ("Result: "+ result);


playRound(playerChoice, computerChoice);
console.log ("You have picked "+playerChoice);
            console.log ("The computer has picked "+computerChoice);
            console.log ("Result: "+ result);



playRound(playerChoice, computerChoice);
console.log ("You have picked "+playerChoice);
            console.log ("The computer has picked "+computerChoice);
            console.log ("Result: "+ result);

***

} else if  (computerChoice==="paper")  {
    return "Sorry, you lose.";
} else {
    return "It's a tie.";
}
} else if (playerChoice==="paper"){
if (computerChoice==="rock") {
    return "You win!";
} else if (computerChoice==="paper"){
    return "It's a tie!";
} else {
    return "Sorry, you lose.";
}
} else {
if (computerChoice==="rock") {
    return "Sorry, you lose.";
} else if (computerChoice==="paper") {
    return "You win!";
} else {
    return "It's a tie!";
}

}