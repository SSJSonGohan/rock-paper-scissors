
function getPlayerChoice(){
    let playerChoice = prompt("Choose: rock, paper, or scissors");
    return playerChoice;
}

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 4);

    if(compChoice == 0){
        return "rock";
    }

    if(compChoice == 1){
        return "paper";
    }

    return "scissors";
}

function checkWinner(player, computer){

    if(player == computer){
        return "tie";
    }

    if(player == "rock" && computer == "scissors"){
        return "player";
    }

    if(player == "paper" && computer == "rock"){
        return "player";
    }

    if(player == "scissors" && computer == "paper"){
        return "player";
    }

    if(computer == "rock" && player == "scissors"){
        return "computer";
    }

    if(computer == "paper" && player == "rock"){
        return "computer";
    }

    if(computer == "scissors" && player == "paper"){
        return "computer";
    }


}

function displayWinner(winner){
    if(winner == "player"){
        console.log("You won!");
    }

    if(winner=="computer"){
        console.log("You lost, computer won!");
    }

    if(winner=="tie"){
        console.log("Tie game!");
    }
}

function playGame(){

    game: while(true){

        let playGame = prompt("Play game of rock paper scissors? (yes/no)");

        if(playGame !== "yes"){

            if(playGame=="no"){
                break game;
            }

            continue;

        }

        let playerChoice = getPlayerChoice();

        let compChoice = getComputerChoice();

        let winner = checkWinner(playerChoice, compChoice);

        displayWinner(winner);

    }
}

playGame();