// function = a section of reuseable code.
// declare the code once, use it whenever you want.
// we call the function to execute that code.

//function happyBirthday(username, age){
//    console.log("Happy birthday to you!");
//    console.log("Happy birthday to you!");
//    console.log("Happy birthday to you!");
//    console.log(`Happy birthday dear ${username}!`);
//    console.log("Happy birthday to you!");
//    console.log(`You are ${age} years old`);
//}

//happyBirthday("iAM7ander", 35);

//function add(x, y){
//    let result = x + y;
//    return result;
//}
//
//let answer = add(2,3);

//console.log(answer);

//function add(x, y){
//  let result = x + y;
//  return result;
//}
//
//console.log(add(2, 3));

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("iAM7ander@outlook.com"));
console.log(isValidEmail("xander.com"));