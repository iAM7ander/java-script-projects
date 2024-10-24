// error - an object that is created to represent a problem that occurs
// *will occur often with user input or establishing a connection
//
// try { } - encloses code that might potentially cause an error
// catch { } - catch and handle any thrown Errors from try { }
// finally { } - always executes, used mostly for clean up
// ex. close files, close connection, release resources
//import { } from './error.js'

//try{
//    console.log("Hello");
    //network errors
    //promise rejection
    //security errors
//}
//catch(error){
//    console.error(error);
//}
//finally{
    //close files
    //close connections
    //release resources
//    console.log("This always executes");
//}
//
//console.log("You have reached the end!");

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    if(divisor == 0){
        throw new Error("You can't divide by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");