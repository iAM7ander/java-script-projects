// async - makes a function return a promise
// await - makes an async function wait for a promise

// this allows you to write async code in a synchronous manner
// async doesn't have resolve or reject parameters, everything after await is placed in an event queue

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = false;

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

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores!");
    }
    catch(error){
        console.error(error);
    }
}

doChores();