function game(){

    let playerChoice = userPlay();
    let  computerChoice = computerPlay();

    function userPlay(){
        let userPick = prompt("Please choose rock, paper, or scissors.");
        return userPick.toLowerCase();
    }


    function computerPlay() { //computer generates a random answer.
        let random = ["rock", "paper", "scissors"];
        return random[Math.floor(Math.random() * 3)];
    }

    function playGame(playerChoice, computerChoice){
        if (playerChoice==="rock"){
            if (computerChoice==="scissors"){
                return "You win!";
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

}




let result = playGame (playerChoice, computerChoice);
console.log ("You have picked "+playerChoice);
console.log ("The computer has picked "+computerChoice);
console.log ("Result: "+ result);








}
game();