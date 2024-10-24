let buttons = document.querySelectorAll(".myButtons");

// remove an element
//buttons.forEach(button => {
//    button.addEventListener("click", event => {
//        event.target.remove();
//        console.log(buttons);
//    });
//});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});

//console.log(buttons);

// add html/css properties

//buttons.forEach(button => {
//    button.style.backgroundColor = "green";
//    button.textContent += "😉";
//});

// click event listener

//buttons.forEach(button =>{
//    button.addEventListener("click", event => {
//        event.target.style.backgroundColor = "tomato";
//    })
//});

// mouseover + mouseout

//buttons.forEach(button => {
//    button.addEventListener("mouseover", event => {
//        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//    });
//});

//buttons.forEach(button => {
//    button.addEventListener("mouseout", event => {
//        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//    });
//});
//
// adding button to the dom
//const newButton = document.createElement("button");
//newButton.textContent = "Button 5";
//newButton.classList = "myButtons";
//document.body.appendChild(newButton);
//
//buttons = document.querySelectorAll(".myButtons");
//
//console.log(buttons);