var playerWin = 0;
var compWin = 0;
let gameCancel = 0;
var draw = 0;
let message = "";
const button = document.getElementById("scriptRun")

function getComputerChoice(){
    choiceNum = Math.floor(Math.random()*3);
    if (choiceNum === 0) {
        return compChoice = "rock";
    }
    else if (choiceNum === 1) {
        return compChoice = "scissors";
    }
    else {
        return compChoice = 'paper';
    }
};

function getPlayerChoice(){
    playerChoice = prompt("Please enter rock, paper, or scissors!");

    if (playerChoice == ("")){

        playerChoice = prompt("Please enter rock, paper, or scissors, you have to pick one!","rock");
        if (playerChoice == ("")){
            alert("Fine, be that way.")
            gameCancel = 1;
            return;
        }
    }
    if (playerChoice == null){
        alert("You don't have to play, it's fine!");
        gameCancel = 1;
        return;
    }
    return playerChoice.toLowerCase();
}

function gameRound(playerChoice,compChoice){

    playerChoice = getPlayerChoice();
    compChoice = getComputerChoice();
    if (gameCancel == 1){
        return;
    }
    else if ((playerChoice === "rock" & compChoice === "paper")||
        (playerChoice === "scissors" & compChoice === "rock")||
        (playerChoice === "paper" & compChoice === "scissors")){
        message = (`You chose ${playerChoice} \nThe computer chose ${compChoice} \n${compChoice} beats ${playerChoice}, you lose this round!`)
        ++compWin
        draw = 0;
        }

    else if ((playerChoice === "paper" & compChoice === "rock")||
            (playerChoice === "rock" & compChoice === "scissors")||
            (playerChoice === "scissors" & compChoice === "paper")) {
            message = (`You chose ${playerChoice} \nThe computer chose ${compChoice} \n${playerChoice} beats ${compChoice}, you win this round!`)
            draw = 0;
            ++playerWin
            }

    else {
        message = (`You chose ${playerChoice} \nThe computer chose ${compChoice} \nIt's a draw!`)
            draw = 1;
             }
        
    }

function gameSession(){

    for (let round = 0; round < 5;){

        gameRound();
        if (gameCancel == 1){
            break;
        }
        alert(message);
        alert((`Your score is ${playerWin} \nThe computer's score is ${compWin} \n`));
        if (draw == 0){
            ++round;
        }
    }

        if (gameCancel == 1){
            console.log("Game has been canceled!")
            return;
        }
        else if (playerWin > compWin){
            alert(`Final Score is Player:${playerWin} Computer:${compWin} \nCongrats, you win the game!`);
        }
        else{
            alert(`Final Score is Player:${playerWin} Computer:${compWin} \nSorry, you lost the game! \n`);
        }
    playerWin = 0;
    compWin = 0;
    gameCancel = 0;
    draw = 0;
    message = "";
    }
    
    
    
button.addEventListener("click", gameSession);
