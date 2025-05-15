const container = document.querySelector(".container")
const button = document.querySelector("button")
let newGridSize = -1;

createGrid(16)
drawing()
changeGrid()

// create grid function
function createGrid(rowSize)
{
    let squareSize = 800 / rowSize
    for(let x = 0; x < rowSize * rowSize; x++)
    {
        const square = document.createElement("div")
        square.setAttribute("id", "square")
        square.style["width"] = squareSize + "px"
        square.style["height"] = squareSize + "px"
        container.appendChild(square)
    }
}

// random color function
function getRandomColor()
{
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
}


function changeGrid()
{
    button.addEventListener("click", () => {
    console.log(newGridSize)
    do
    {
        newGridSize = prompt("Grid Sizing")
    } while(newGridSize < 0 || newGridSize > 100)
    document.querySelectorAll(".container #square").forEach(square => {
        square.remove() 
    })
    createGrid(newGridSize)
    drawing()
})
}


function drawing()
{
    const squares = document.querySelectorAll(".container #square")
    squares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {
            if(event.buttons == 1)
            {
                square.style.backgroundColor = getRandomColor()
            }
            else if(event.buttons == 4)
            {
                square.style.backgroundColor = "white"
            }
        })
    })
}