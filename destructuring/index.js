// destructuring - extract values from arrays and objects, then assign them to variables in a convenient way
// [] - to perform array destructuring
// {} - to perform object destructuring

// ----Ex.1----
// swap the value of two variables

//let a = 1;
//let b = 2;

//[a, b,] = [b, a];

//console.log(a);
//console.log(b);

// ----- Ex.2 -----

//const colors = ["red", "green", "blue", "yellow", "purple"];

// ----- Ex.2.b
//[colors[0], colors[4]] = [colors[4], colors[0]];

//console.log(colors);

// ----- Ex. 2.c -----
//const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

//console.log(firstColor);
//console.log(secondColor);
//console.log(thirdColor);
//console.log(extraColors);

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Sqaurepants",
    age: 30,
    job: "Fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 30,
}

displayPerson(person1);

//const {firstName, lastName, age, job="Unemployed" } = person2;

//console.log(firstName);
//console.log(lastName);
//console.log(age);
//console.log(job);