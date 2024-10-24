// sync - executes code line by line consecutively in a sequential manner code that waits for an operation to complete.

// async - allows multiple operations to be performed concurrently without waiting, does not block the execution flow and allows the program to continue (I/O operations, network requests, fetching data) handled with callback, promises and async/await

function func1(callback){setTimeout(() => {console.log("Task1");
                                            callback()}, 3000)
}

function func2(){
    console.log("Task2");
    console.log("Task3");
    console.log("Task4");
}

func1(func2);