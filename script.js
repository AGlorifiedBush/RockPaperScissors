console.log("Hello World");

const choice = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return(choice[Math.floor(Math.random()*choice.length)]);
}

function playRound(humanChoice, computerSelection){
    console.log(computerSelection); 
    

    if (humanChoice === computerSelection) {
        console.log("Its a Tie!");
    }
   
    if (humanChoice === "rock") {
        if (computerSelection === "scissors") {
            console.log("Rock Beats Scissors! YOU WIN!");           
            humanScore++;
        }else if (computerSelection === "paper") {
            console.log("Paper Beats Rock! YOU LOSE!");
            computerScore++;
        } 
    }

    if (humanChoice === "paper") {
        if (computerSelection === "rock") {
            console.log("Paper Beats Rock! YOU WIN!");
            humanScore++;
        }else if (computerSelection === "scissors") {
            console.log("Scissors Beats Paper! YOU LOSE!");
            computerScore++;
        }
    }

    if (humanChoice === "scissors") {
        if (computerSelection === "rock") {
            console.log("Rock Beats Scissors! YOU LOSE!");           
            computerScore++;
        }else if (computerSelection === "paper") {
            console.log("Scissors Beats Paper! YOU WIN!");
            humanScore++;
        }
    }
    updateScore();
    victoryReq();
    return;
}

function updateScore() {
    document.querySelector("#computer-score"). textContent = computerScore; 
    document.querySelector("#player-score").textContent = humanScore;
}

function reset() {
    computerScore = 0;
    humanScore = 0;
    updateScore();
}

function victoryReq() {
    if (computerScore === 5) {
        alert("The Computer has won and you have lost! :'(");
        reset();
    } else if (humanScore === 5) {
        alert("You win! F&^% the computer!");
        reset();
    }
    return;
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    return
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    return
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
    return
});

const scoreBoardPlayer = document.createElement("div");
scoreBoardPlayer.classList.add('scorer');
scoreBoardPlayer.textContent = "Player's Score";
document.body.appendChild(scoreBoardPlayer);

const scoreBoardComputer = document.createElement("div");
scoreBoardComputer.classList.add('scorer');
scoreBoardComputer.textContent = "Computer's Score";
document.body.appendChild(scoreBoardComputer);

const scorePlayer = document.createElement("div");
scorePlayer.classList.add('scores');
scorePlayer.setAttribute("id", "player-score");
scorePlayer.textContent  = humanScore;
document.body.appendChild(scorePlayer);

const scoreComputer = document.createElement("div");
scoreComputer.classList.add('scores');
scoreComputer.setAttribute("id", "computer-score");
scoreComputer.textContent = computerScore;
document.body.appendChild(scoreComputer);