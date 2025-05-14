let humanScore = 0;
let compScore = 0;

function getComputerChoice()
{
    let randNum = Math.random();
    let compChoice;

    if(randNum < 0.33){
        compChoice = "Rock";
    }
    else if(randNum > 0.33 && randNum < 0.66){
        compChoice = "Paper";
    }
    else{
        compChoice = "Scissors";
    }

    return compChoice.toLowerCase();
}

function getHumanChoice()
{
    humanChoice = prompt("Enter your guess");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, compChoice)
{
    if(humanChoice == compChoice){
        console.log("DRAW")
    }
    else if(humanChoice == "paper" && compChoice == "rock"){
        console.log("YOU WON")
        humanScore += 1;
    }
    else if(humanChoice == "rock" && compChoice == "scissors"){
        console.log("YOU WON");
        humanScore += 1;
    }
    else if(humanChoice == "scissors" && compChoice == "paper"){
        console.log("YOU WON");
        humanScore += 1;
    }
    else {
        console.log("YOU LOST");
        compScore += 1;
    }

}



function playGame()
{
    while(humanScore != 5 && compScore != 5)
    {
        humanChoice = getHumanChoice()
        compChoice = getComputerChoice()

        console.log(`Your choice: ${humanChoice} Computer choice: ${compChoice}`)

        playRound(humanChoice, compChoice)

        console.log(`Your Score: ${humanScore} \n Computer Score: ${compScore}`)
    }
}

playGame()