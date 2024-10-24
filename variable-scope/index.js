// variable scope = when a variable is recognized and accessible (local vs global)

let x = 3;

function1();

function function1(){
    console.log(x);
}

function function2(){
    console.log(x);
}