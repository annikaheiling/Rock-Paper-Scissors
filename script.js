function computerPlay() {
    let int = Math.floor(Math.random()*3);
    if (int===0) {
        return("Rock");
    } else if (int===1) {
        return("Paper");
    } else {
        return("Scissors");
    }
}
//test:
//console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    //INPUT SANITIZATION: move this once input func is created?
    let player=capitalize(playerSelection);
    let comp=computerSelection;
    let win= "You Win! "+player+" beats "+comp;
    let lose= "You lose. "+comp+" beats "+player;
    let tie= "Tie. You both chose "+player;
    //Tie:  Taken care of.
    //Win:  Rock>Scissors, Scissors>Paper, Paper>Rock.
    //Lose: Scissors<Rock, Paper<Scissors, Rock<Paper.
    console.log("Player: "+player+"\nComputer: "+comp); //DEBUG
    if (player===comp) {
        return(tie);
    } else if (player==="Rock" && comp==="Scissors" 
            || player==="Scissors" && comp==="Paper" 
            || player==="Paper" && comp==="Rock") {
        return(win);
    } else {
        return(lose);
    }
}
function capitalize(str) {
    let stri = str.toLowerCase();
    let first = str.charAt(0).toUpperCase();
    return(first+stri.substring(1));
}
//test:
//const playerSelection="rock";
//const computerSelection=computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game() {
    //Use playRound() in here to play 5 round game, report winner at end
    let playerWins = 0;
    let computerWins = 0;

    for(let i=1; i<=5; i++) {
        //BUG: catch null/invalid inputs & ask user for correction
        let input = prompt("Enter your move: Rock, Paper, or Scissors");
        let round = playRound(input, computerPlay());
        console.log(typeof round);//DEBUG
        //BUG: Super clunky, find better way to extract round winner
        if (round.includes("Win")) {
            playerWins++;
        } else if (round.includes("lose")) {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log("You've won the game against the computer!");
    } else if (computerWins > playerWins) {
        console.log("You lost the game against the computer.");
    } else {
        console.log("You tied the computer.");
    }
}
game();