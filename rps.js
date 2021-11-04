const textArray = [
    "rock",
    "paper",
    "scissors"
];
const userPick = (prompt("What would you like to play?").toLowerCase());
const compPick = Math.floor(Math.random()*textArray.length);

function userPlay(){

    console.log(`You picked ${userPick}.`);
}
userPlay();





//this works!
function computerPlay() {
    
    if (compPick==0) {
      console.log("Computer picks rock.");
   } else if (compPick==1) {
      console.log("Computer picks paper.");
  } else {
      console.log("Computer picks scissors.");
     }
};

console.log (computerPlay());


function game(){
    if (userPick=="rock" && compPick==(0)) {
       return (console.log ("It's a tie!"));
    } else if(userPick=="rock" && compPick==(1)){
        return (console.log("You lose. Better luck next time."));
    } else if(userPick=="rock" && compPick==(2)) {
        return (console.log("You win!"));
    } else {
       return (console.log("We aren't there yet."));
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
