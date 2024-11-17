// create the element

const newListItem = document.createElement("li");

// add attributes and properties

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// append element to dom
//document.body.append(newListItem);
//document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
//document.getElementById("fruits").prepend(newListItem);

//const apple = document.getElementById("apple");
//document.getElementById("fruits").insertBefore(newListItem, apple);

//const listItems = document.querySelectorAll("#fruits li");
//document.body.insertBefore(newListItem, listItems[4]);

// remove html element
//document.body.removeChild(newLink);
//document.getElementById("box1").removeChild(newLink);
