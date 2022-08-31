var playerWin = 0;
var compWin = 0;
var gameCancel = 0;
var draw = 0;
let message = "";
const button = document.getElementById("scriptRun")
const playerButtons = document.querySelectorAll('.playerButton');
const playerMove = document.querySelector('.playerMove');
const compMove = document.querySelector('.compMove');
const gameResult = document.querySelector(".gameResult");
const currentScore = document.querySelector('.currentScore');

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

/**function getPlayerChoice(){
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
**/

function winState(pWin,cWin){

    if (pWin === 5){
        gameResult.innerHTML = "Congrats, you win! Select a move to start a new round!";
        compWin = 0;
        playerWin = 0;

    }
    else if (cWin === 5){
        gameResult.innerHTML = "Sorry, you lose! Select a move to start a new round!";
        compWin = 0;
        playerWin = 0;
    }
    else{
        return
    }
}
function gameRound(playerChoice,compChoice){

    if ((playerChoice === "rock" & compChoice === "paper")||
        (playerChoice === "scissors" & compChoice === "rock")||
        (playerChoice === "paper" & compChoice === "scissors")){
        gameResult.innerHTML = "";
        playerMove.innerHTML = `You chose ${playerChoice}`
        compMove.innerHTML = `The computer chose ${compChoice}`;
        ++compWin
        currentScore.innerHTML = `The current score is You: ${playerWin} & Computer: ${compWin}`
        winState(playerWin,compWin);
        }

    else if ((playerChoice === "paper" & compChoice === "rock")||
            (playerChoice === "rock" & compChoice === "scissors")||
            (playerChoice === "scissors" & compChoice === "paper")) {
            gameResult.innerHTML = "";
            playerMove.innerHTML = `You chose ${playerChoice}`
            compMove.innerHTML = `The computer chose ${compChoice}`;
            ++playerWin
            currentScore.innerHTML = `The current score is You: ${playerWin} & Computer: ${compWin}`
            winState(playerWin,compWin);
            }

    else {
        playerMove.innerHTML = `You chose ${playerChoice}`
        compMove.innerHTML = `The computer chose ${compChoice}`;
        currentScore.innerHTML = `The current score is You: ${playerWin} & Computer: ${compWin}`
        winState(playerWin,compWin)
            }
        
    }

playerButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        playerChoice = button.innerHTML;
        playerChoice = playerChoice.toLowerCase();
        compChoice = getComputerChoice();
        gameRound(playerChoice,compChoice);

    })
})
/** function gameSession(){

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
    pWin = playerWin;
    cWin = compWin;
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
**/
    
    
