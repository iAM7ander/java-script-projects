// eventListener - listens for specific events to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(event, callback, arrow function);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

//myBox.addEventListener("click", function(){
//    event.target.style.backgroundColor = "tomato";
//    event.target.textContent = "OUCH 😢!!!";
//});

// arrow function
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH 😢!!!";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 🤔";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😉";
});