let humanScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll("button")
const body = document.querySelector("body")


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

function getHumanChoice(callback)
{
    let humanChoice;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            humanChoice = button.textContent.toLowerCase();
            callback(humanChoice)
        })
    })

}

function play5Round(humanChoice)
{
    compChoice = getComputerChoice()
    console.log(`Human: ${humanChoice} Computer: ${compChoice}`)
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

    if(humanScore==5 || compScore==5)
    {
        let winner;

        buttons.forEach(button => {
            button.remove();
        });

        if(humanScore == 5)
        {
            winner = "YOU"
        }
        else{
            winner = "THE COMPUTER"
        }
        const finishText = document.createElement("h1")
        finishText.textContent = `${winner} WON`
        body.appendChild(finishText)

    }

    console.log(`Your Score: ${humanScore} \n Computer Score: ${compScore}`)

}




function playGame()
{
    getHumanChoice(play5Round)
}

playGame()