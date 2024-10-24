// --- Ex.1 <h1></h1> ---

// create the element
const newH1 = document.createElement("h1");

// add attributes and properties
newH1.textContent = "I like pizza";
newH1.id = "myH!";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// append element to dom
//document.body.append(newH1);
//document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
//document.getElementById("box4").prepend(newH1);

//const box2 = document.getElementById("box4");
//document.body.insertBefore(newH1, box2);
// querySelector without id
//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[0]);

// remove html element
document.getElementById("box1").removeChild(newH1);