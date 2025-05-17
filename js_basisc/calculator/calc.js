const screen = document.querySelector(".screen")
const digits = document.querySelectorAll('.digit')
const screenNum = document.querySelector(".screen.num")
const addButton = document.querySelector(".add")
const funcs = document.querySelectorAll(".func")
const equal = document.querySelector("#equal")

let firstDigit = ""
let secondDigit = ""
let isEnteringSecond = false
let operation = ""
let sum;
let lastOperation;

function calc()
{
    addDigitListeners()
    addFunctionListeners()
}

function showOnScreen(number)
{
    screenNum.textContent = number
}

function addDigitListeners(){
    digits.forEach(digit => {
        digit.addEventListener("click", () => {
            console.log(isEnteringSecond)
            let number = digit.textContent
            if(!isEnteringSecond)
            {
                firstDigit += number
                sum = firstDigit
                showOnScreen(firstDigit)
            }
            else
            {
                secondDigit += number
                sum = secondDigit
                showOnScreen(secondDigit)
            }
        })
    })
}


function addFunctionListeners()
{
    funcs.forEach(func => {
        func.addEventListener("click", () => {
            console.log(isEnteringSecond)
            operation = func.textContent
            if(operation == "Clear")
            {
                firstDigit = ""
                secondDigit = ""
                isEnteringSecond = false
                showOnScreen("")
            }
            else if(operation == "Undo")
            {
                if(isEnteringSecond)
                {
                    operation = lastOperation
                    secondDigit = secondDigit.slice(0, -1)
                    showOnScreen(secondDigit)
                }
                else{
                    firstDigit = firstDigit.slice(0, -1)
                    showOnScreen(firstDigit)
                }
            }
            else if(operation == "+/-"){
                operation = lastOperation
                if(isEnteringSecond){
                    secondDigit = secondDigit * -1
                    showOnScreen(secondDigit)
                }
                else{
                    firstDigit = firstDigit * -1
                    showOnScreen(firstDigit)
                }
            }
            else if(operation == ".")
            {
                if(isEnteringSecond)
                {
                    operation = lastOperation
                    secondDigit += "."
                    showOnScreen(secondDigit)
                }
                else{
                    firstDigit += "."
                    showOnScreen(firstDigit)
                }
            }
            else{
                lastOperation = operation
                isEnteringSecond = true
                showOnScreen(operation)
            }
        })
    })

    equal.addEventListener("click", () => {
        let num1 = Number(firstDigit)
        let num2 = Number(secondDigit)
        if(operation == "+")
        {
            sum = num1 + num2
        }
        else if(operation == "-")
        {
            sum = num1 - num2
        }
        else if(operation == "*")
        {
            sum = (num1 * num2).toFixed(2)
        }
        else if(operation == "/")
        {
            sum = (num1 / num2).toFixed(2)
        }
        firstDigit = ""
        secondDigit = ""
        operation = ""
        isEnteringSecond = false
        console.log(operation)
        showOnScreen(sum)
    })
}

calc()