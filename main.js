 console.log("Hello World"); // test console 

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3); // math.random does 0-1, so * 3 will do : 0 or 1 or 2

    // if randomInt == 0 || 1 || 2 = rock,paper,scissors.
    if(randomInt == 0) { // may have to intialize const rock = "rock" etc.
       return "rock";
    }
    if(randomInt == 1) {
       return "paper";
    }
    if(randomInt == 2) {
      return "scissors"
    }
}
function getHumanChoice() {
    let sign = prompt("Rock, Paper, or Scissors");
    const computerChoice = getComputerChoice();
    const userInput = sign.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        
        return userInput;
    } else {
        console.log("Invalid Answer");
        return;
    }

    // if(userInput == computerChoice) {
    //     console.log("draw!");
    //     return "draw";
    // }

    // if(userInput === "rock") {
    //     if(computerChoice === "paper") {
    //         console.log("Computer Wins, Paper beats Rock");
    //     } else {
    //         console.log("Human wins");
    //     }
    // }

    // if(userInput === "paper") {
    //     if(computerChoice === "scissors") {
    //         console.log("Computer Wins, Scissors beats Paper");
    //     } else {
    //         console.log("Human wins");
    //     }
    // }

    // if(userInput === "scissors") {
    //     if(computerChoice === "rock") {
    //         console.log("Computer Wins, Rock beats Scissors");
    //     } else {
    //         console.log("Human wins");
    //     }
    // }
}

function playRound(humanChoice, computerChoice) {

    if(humanChoice == computerChoice) {
        console.log("Round Draw! Computer: " + computerScore + " Human: " + humanScore);
        return "draw";

    }

    if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            console.log("Computer Wins, Paper beats Rock");
            computerScore++;
            console.log("Computer score is now " + computerScore);
        } else {
            console.log("Human wins, rock beats " + computerChoice);
            humanScore++;
            console.log("Human score is now " + humanScore);
        }
    }

    if(humanChoice === "paper") {
        if(computerChoice === "scissors") {
            console.log("Computer Wins, Scissors beats Paper");
            computerScore++;
            console.log("Computer score is now " + computerScore);
        } else {
            console.log("Human wins, paper beats " + computerChoice);
            humanScore++;
            console.log("Human score is now " + humanScore);
        }
    }

    if(humanChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("Computer Wins, Rock beats Scissors");
            computerScore++;
            console.log("Computer score is now " + computerScore);
        } else {
            console.log("Human wins, scissors beats " + computerChoice);
            humanScore++;
            console.log("Human score is now " + humanScore);
        }
    }
}

function playGame() {
    // calls playRound 5 times, use a for loop
    // let i = 0 for if i < 5 i++ 
    // if computerScore > humanScore result is computer wins blah
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(computerScore === humanScore) {
        console.log("Tied game: " + "\nComputer: " + computerScore + " Human: " + humanScore);
    }
    if(computerScore > humanScore) {
        console.log("Computer wins best of 5," + "\nComputer: " + computerScore + " Human: " + humanScore);
        return;
    } else if (humanScore > computerScore) {
        console.log("Human wins best of 5," + "\nComputer: " + computerScore + " Human: " + humanScore);
    }
}
playGame();
