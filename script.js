console.log("Hello World")

const choice = ["rock", "paper", "scissors"];

function getComputerChoice(choice) {
    return(choice[Math.floor(Math.random()*choice.length)])
}


function getHumanChoice(choice) {
    let playerChoice = prompt("what will you choose?", "Pssst... choose rock")
    
    return playerChoice.toLowerCase()
}

function playGame() {

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

    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice(choice)
        const computerSelection = getComputerChoice(choice)
        
        playRound(humanSelection, computerSelection)
        console.log("Player Score: " + humanScore)
        console.log("Computer Score: " + computerScore)

    }
}

console.log(playGame())