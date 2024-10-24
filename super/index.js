// super is used in classes to call the constructor or access the properties and methods of a parent (superClass)
// this - this object
//super - the parent

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`);
    }
}
class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} is  running`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} is swimming`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} is flying`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 35);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();