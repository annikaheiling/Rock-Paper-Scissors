let playerWins=2;
let computerWins=3;

if (playerWins > computerWins) {
    console.log("You've won the game against the computer!");
} else if (computerWins > playerWins) {
    console.log("You lost the game against the computer.");
} else {
    console.log("You tied the computer.");
}