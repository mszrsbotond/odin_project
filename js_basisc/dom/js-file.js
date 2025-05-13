const body = document.querySelector("body")

// make the p
const p = document.createElement("p")
// this adds the class p
//p.classList.add("p")
p.textContent = "Hey I'm red!"
p.style.color = "red"
body.appendChild(p)

//make the h3
const h3 = document.createElement("h3")
h3.textContent = "I'm a blue h3"
h3.style.color = "blue"
body.appendChild(h3)

//make the div
const div = document.createElement("div")
div.style.backgroundColor = "pink"
div.style.borderColor = "black"
// make the h1
const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"
div.appendChild(h1)
// make the p
const pInDiv = document.createElement("p")
pInDiv.textContent = "ME TOO!"
div.appendChild(pInDiv)


body.appendChild(div)


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
  });
});


