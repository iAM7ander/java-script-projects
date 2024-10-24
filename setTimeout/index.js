// setTimeout() - function in js that allows you to schedule the execution of a function after an amount of time (milliseconds)
// times are approximate (varies based on the workload of the js runtime env.)
// setTimeout(callback, delay);
// --- Ex.1 ---
//function sayHello() {
//    window.alert("Hello");
//}
//
//setTimeout(sayHello, 3000);
//
// --- Ex.2 ---
//setTimeout(function(){window.alert("Hello")}, 3000);
//
// --- Ex.3 ---
let timeoutId;

function startTimer(){
    setTimeout(() => window.alert("Hello"), 3000);
    console.log("starter");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("cleared");
}