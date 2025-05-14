const container = document.querySelector(".container")

function getRandomColor()
{
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
}


for(let x = 0; x < 256 ; x++)
{
    const elem = document.createElement("div")
    elem.className = `elem elem-${x}`
    container.appendChild(elem)
}

const elems = document.querySelectorAll(".container .elem")

elems.forEach((elem) => {
    elem.addEventListener("mouseover", (event) => {
        if(event.buttons == 1)
        {
            elem.style.backgroundColor = getRandomColor()
        }
        else if(event.buttons == 4)
        {
            elem.style.backgroundColor = "white"
        }
    })
})