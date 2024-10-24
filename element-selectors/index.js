// element selectors - methods used to target and manipulate HTML elements
//  they allow you to select one or multiple HTML elements from the DOM (Document Object Model)
//
// document.getELementById() - element or null
//document.getElementsClassName() - HTML Collection
//document.geElementsByTagName() - HTML collection
//document.querySelector() - element or null
//document.querySelectorAll() - nodelist


//const myHeading = document.getElementById("my-heading");
// camelCase naming convention for js properties
//myHeading.style.backgroundColor = "yellow";
//myHeading.style.textAlign = "center";

//console.log(myHeading);

//const fruits = document.getElementsByClassName("fruits");

//for(let fruit of fruits){
//    fruit.style.backgroundColor = "yellow";
//}

//Array.from(fruits).forEach(fruit => {
//    fruit.style.backgroundColor = "yellow";
//});
//const h4Elements = document.getElementsByTagName("h4");
//const liElements = document.getElementsByTagName("li");

//for(let h4Element of h4Elements){
//    h4Element.style.backgroundColor = "yellow";
//}
//
//for(let liElement of liElements){
//    liElement.style.backgroundColor = "lightgreen";
//}

//Array.from(h4Elements).forEach(h4Element => {
//    h4Element.style.backgroundColor = "yellow";
//});
//
//Array.from(liElements).forEach(liElement => {
//    liElement.style.backgroundColor = "lightgreen";
//});
//
// Ex.4 --- querySelector() ---
//const element = document.querySelector("ul");
//
//element.style.backgroundColor = "yellow";
//
// Ex. 5 --- querySelectorAll() ---

const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});