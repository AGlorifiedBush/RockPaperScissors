console.log("Hello World")


let humanScore = 0
let computerScore = 0

function playGame() {
    
    const choice = ["rock", "paper", "scissors"];

    function getComputerChoice(choice) {
        return(choice[Math.floor(Math.random()*choice.length)])
    }


    function getHumanChoice(choice) {
        let playerChoice = prompt("what will you choose?", "Pssst... choose rock")
        return playerChoice.toLowerCase()
    }


    function playRound(humanChoice, computerChoice){
        console.log(computerChoice)

        if (humanChoice === computerChoice) {
            console.log("Its a Tie!")
        }
       
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("Rock Beats Scissors! YOU WIN!")
                return humanScore++
            }else if (computerChoice === "paper") {
                console.log("Paper Beats Rock! YOU LOSE!")
                return computerScore++
            } 
        }
    
        if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("Paper Beats Rock! YOU WIN!")
                return humanScore++
            }else if (computerChoice === "scissors") {
                console.log("Scissors Beats Paper! YOU LOSE!")
                return computerScore++
            }
        }
    
        if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("Rock Beats Scissors! YOU LOSE!")
                return computerScore++
            }else if (computerChoice === "paper") {
                console.log("Scissors Beats Paper! YOU WIN!")
            }
        }
    }
    
    const humanSelection = getHumanChoice(choice)
    const computerSelection = getComputerChoice(choice)

    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

playGame()