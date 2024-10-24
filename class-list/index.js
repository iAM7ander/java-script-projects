const myButton = document.getElementById("myButton");

//myButton.classList.add("enabled");
//myButton.classList.remove("enabled");

//myButton.addEventListener("mouseover", event => {
//    event.target.classList.toggle("hover");
//});
//
//myButton.addEventListener("mouseout", event => {
//    event.target.classList.toggle("hover");
//});


const myH1 = document.getElementById("myH1");
myButton.classList.add("enabled");

myH1.classList.add("enabled");
myH1.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😘";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }

    event.target.classList.replace("enabled", "disabled");
});