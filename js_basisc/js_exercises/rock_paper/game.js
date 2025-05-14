let humanScore = 0;
let compScore = 0;

const body = document.querySelector("body")
const buttonsClass = document.querySelector(".buttons")
const gameClass = document.querySelector(".game")
const scoreboard = document.querySelector(".scoreboard")
const humanemoji = document.querySelector(".humanemoji")
const compemoji = document.querySelector(".compemoji")


let result = document.createElement("div")
result.className = "result"
let score = document.createElement("div")
score.className = "score"
let humanChoiceEmojiDiv = document.createElement("div")
humanChoiceEmojiDiv.className = "human-choice-emoji"
let compChoiceEmojiDiv = document.createElement("div")
compChoiceEmojiDiv.className = "comp-choice-emoji"

function createButtons()
{
    const rockButton = document.createElement("button")
    rockButton.id = "rockButton"
    rockButton.value = "rock"
    rockButton.textContent = "🪨"
    buttonsClass.appendChild(rockButton)

    const paperButton = document.createElement("button")
    paperButton.id = "paperButton"
    paperButton.value = "paper"
    paperButton.textContent = "📜"
    buttonsClass.appendChild(paperButton)

    const scissorsButton = document.createElement("button")
    scissorsButton.id = "scissorsButton"
    scissorsButton.value = "scissors"
    scissorsButton.textContent = "✂️"
    buttonsClass.appendChild(scissorsButton)
}

createButtons()

function getComputerChoice()
{
    let randNum = Math.random();
    let compChoice;
    let compEmoji = ""

    if(randNum < 0.33){
        compChoice = "Rock";
        compEmoji = "🪨"
    }
    else if(randNum > 0.33 && randNum < 0.66){
        compChoice = "Paper";
        compEmoji = "📜"
    }
    else{
        compChoice = "Scissors";
        compEmoji = "✂️"
    }

    return {
        text: compChoice.toLowerCase(),
        emoji: compEmoji
    };
}

function getHumanChoiceText(callback)
{
    let humanChoice;

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            humanChoice = button;
            callback(humanChoice)
        })
    })

}

function getHumanChoiceEmoji(callback)
{
    let humanChoice;

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            humanChoice = button.textContent;
            callback(humanChoice)
        })
    })

}

function play5Round(humanChoice)
{
    const {text: compChoiceText, emoji:compChoiceEmoji} = getComputerChoice()

    let humanChoiceText = humanChoice.value
    let humanChoiceEmoji = humanChoice.textContent

    humanChoiceEmojiDiv.textContent = humanChoiceEmoji
    compChoiceEmojiDiv.textContent = compChoiceEmoji

    result.textContent = `Your Choice: ${humanChoiceText} Computer: ${compChoiceText}`

    if(humanChoiceText == compChoiceText){
        result.textContent = "DRAW"
    }
    else if(humanChoiceText == "paper" && compChoiceText == "rock"){
        result.textContent = "YOU WON"
        humanScore += 1;
    }
    else if(humanChoiceText == "rock" && compChoiceText == "scissors"){
        result.textContent = "YOU WON";
        humanScore += 1;
    }
    else if(humanChoiceText == "scissors" && compChoiceText == "paper"){
        result.textContent = "YOU WON";
        humanScore += 1;
    }
    else {
        result.textContent = "YOU LOST";
        compScore += 1;
    }

    score.textContent = `Your Score: ${humanScore} \n Computer Score: ${compScore}`
    humanemoji.appendChild(humanChoiceEmojiDiv)
    compemoji.appendChild(compChoiceEmojiDiv)
    scoreboard.appendChild(result)
    scoreboard.appendChild(score)


    if(humanScore==5 || compScore==5)
    {
        let winner;

        document.querySelectorAll("button").forEach(button => {
            button.remove();
        });

        score.remove()
        result.remove()
        humanChoiceEmojiDiv.remove()
        compChoiceEmojiDiv.remove()

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

        const restartButton = document.createElement("button")
        restartButton.id = "restartButton"
        restartButton.textContent = "Restart"
        body.appendChild(restartButton)

        restartButton.addEventListener("click", () => {
            humanScore=0;
            compScore=0;
            restartButton.remove()
            finishText.remove()
            createButtons()
            getHumanChoiceText(play5Round)
        })

    }
}

getHumanChoiceText(play5Round)