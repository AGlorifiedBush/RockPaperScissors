console.log("Hello World")

const choice = ["rock", "paper", "scissors"];

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return(choice[Math.floor(Math.random()*choice.length)])
}


function getHumanChoice() {
    let playerChoice = prompt("what will you choose?", "Pssst... choose rock").toLowerCase()
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        let playerChoice = prompt("Try again! What will you choose?", "Pssst... choose rock")
        return playerChoice
    }
    return playerChoice
}

function playRound(humanChoice, computerChoice){
    console.log(computerChoice) 

    if (humanChoice === computerChoice) {
        console.log("Its a Tie!")
    }
   
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("Rock Beats Scissors! YOU WIN!")
            humanScore++
            return
        }else if (computerChoice === "paper") {
            console.log("Paper Beats Rock! YOU LOSE!")
            computerScore++
            return
        } 
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Paper Beats Rock! YOU WIN!")
            humanScore++
            return
        }else if (computerChoice === "scissors") {
            console.log("Scissors Beats Paper! YOU LOSE!")
            computerScore++
            return
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("Rock Beats Scissors! YOU LOSE!")
            computerScore++
            return
        }else if (computerChoice === "paper") {
            console.log("Scissors Beats Paper! YOU WIN!")
            humanScore++
            return 
        }
    }
}



function playGame() {

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice(choice)
        const computerSelection = getComputerChoice(choice)
        
        playRound(humanSelection, computerSelection)
        console.log("Player Score: " + humanScore)
        console.log("Computer Score: " + computerScore)

    }
}

playGame()