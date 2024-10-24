// promises - an object that manages asynchronous operations.
// wrap a promise object around {asynchronous code}
// "promise to return a value"
// pending -> resolved or rejected
// new Promise((resolve, reject) => {asynchronous code})

// Do these chores in order
// walk the dog
// clean the kitchen
// take out the trash


function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve("You walked the dog 🐶");
            }
            else{
                reject("You DIDN'T walk the dog!");
            }
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const cleanedKitchen = true;

            if(cleanedKitchen){
                resolve("You cleaned the kitchen 🧹");
            }
            else{
                reject("You DIDN'T clean the kitchen!");
            }   
        }, 2500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const tookOutTrash = true;

            if(tookOutTrash){
                resolve("You took out the trash 🚮");
            }
            else{
                reject("You DIDN'T take out the trash!");
            }
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You finished all the chores!")})
        .catch(error => console.error(error));