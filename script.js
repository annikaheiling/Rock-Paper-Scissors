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
    //each Selection is Rock, Paper, or Scissors.
    //Rock>Scissors, Scissors>Paper, Paper>Rock.
    //I ~could~ j write a shit ton of 'if' statements but that's gross.
    console.log(player+comp); //DEBUG
    if (player===comp) {
        return(tie);
    } else {
        return("Not yet");
    }
}
function capitalize(str) {
    let stri = str.toLowerCase();
    let first = str.charAt(0).toUpperCase();
    return(first+stri.substring(1));
}
//test:
const playerSelection="rock";
const computerSelection=computerPlay();
console.log(playRound(playerSelection, computerSelection));