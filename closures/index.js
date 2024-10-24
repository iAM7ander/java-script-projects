// closure - a function defined inside of another function, the inner function has access to the variables and scope of the outer function.
// allows for private variables and state maintenance, used frequently in js frameworks: React, Vue, Angular

//function outer(){
//
//    let message = "Hello";
//
//    function inner(){
//        console.log(message);
//    }
//
//    inner();
//}
//
//outer();
//
// --- counter ---
//function createCounter(){
//    
//    let count = 0;
//
//    function increment(){
//        count++;
//        console.log(`Count increase to ${count}`);
//    }
//
//    function getCount(){
//        return count;
//    }
//
//    return {increment, getCount};
//}
//
//const counter = createCounter();
//
//counter.increment();
//counter.increment();
//counter.increment();
//counter.increment();
//
//console.log(`The current count is ${counter.getCount()}`);
//
// --- score counter ---
function createGame(){
   
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
    
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()}pts`);