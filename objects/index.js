// object - a collection of related properties and or methods
// an object can represent real world objects (people, products, places)
// object = {key:value,
//           function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! Im Spongebob!")},
    sayBye: function(){console.log("Goodbye!")}
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 35,
    isEmployed: false,
    sayHello: function(){console.log("Heeeeyy, Im Patrick!")},
    sayBye: function(){console.log("Goodbye!")},
    eat: () => console.log("I'm eating a crabby patty.")
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.eat();