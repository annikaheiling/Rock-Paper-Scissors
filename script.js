let playerWins = 0;
let computerWins = 0;

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
const winOrLose = document.querySelector('#winOrLose');
function gameChecker(state) {

    if (playerWins===5 || computerWins===5) {
        if (playerWins > computerWins) {
            winOrLose.textContent = "You've won the game!";
            logContainer.textContent = ('Click the "New Game" button to play again.');
            return true;
        } else {
            winOrLose.textContent = "You lost the game.";
            logContainer.textContent = ('Click the "New Game" button to play again.'); //also make DOM
            return false; //do it rly even need to return?
        } 
    } else {
        if (state === 1) {
        winOrLose.textContent = (`You win this round. Make another move. The score is currently ${playerWins} you, ${computerWins} me.`);
        } else if (state === -1) {
        winOrLose.textContent = (`I win this round. Make another move. The score is currently ${playerWins} you, ${computerWins} me.`);
        } else {
        winOrLose.textContent = (`We tied this round. Make another move. The score is currently ${playerWins} you, ${computerWins} me.`);  
        }
    }
}
const logContainer = document.querySelector('#results');
const loggedMove = document.createElement('div'); 
//loggedMove.classList.add() ///needed or nah?
function playRound(playerSelection, computerSelection) {
    //INPUT SANITIZATION: move this once input func is created?
    let player=capitalize(playerSelection); ///ISSUE: input button id here?
    let comp=computerSelection;
    let win= "You Win! "+player+" beats "+comp; //could make win =1, tie =0, lose =-1 for simpler return
    let lose= "You lose. "+comp+" beats "+player; //&& worry about printing that stuff later on in game()
    let tie= "Tie. You both chose "+player;
    loggedMove.textContent = `Player: ${player} \nComputer: ${comp}`;
    logContainer.appendChild(loggedMove);

    if (player===comp) {
        gameChecker(0);
        return(tie);
    } else if (player==="Rock" && comp==="Scissors" 
            || player==="Scissors" && comp==="Paper" 
            || player==="Paper" && comp==="Rock") {
        playerWins++;
        gameChecker(1);
        return(win);
    } else {
        computerWins++;
        gameChecker(-1);
        return(lose);
    }
}
function capitalize(str) {  ///useless since user stopped being prompted?
    let stri = str.toLowerCase();
    let first = str.charAt(0).toUpperCase();
    return(first+stri.substring(1));
}

function newGame() {
    playerWins=0;
    computerWins=0;
    //ADD: clear the log DOM
    logContainer.textContent = "";
    winOrLose.textContent = "";
}

//IDK where you're supposed to put this... so may have to move BUG
document.getElementById("Rock").addEventListener("click", function() {
    playRound("Rock", computerPlay());
});
document.getElementById("Paper").addEventListener("click", function() {
    playRound("Paper", computerPlay());
});
document.getElementById("Scissors").addEventListener("click", function() {
    playRound("Scissors", computerPlay());
});
document.getElementById("restart").addEventListener("click", function(){
    newGame();
});