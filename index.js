"use strict";
// let number : Number;
// number = 5;
// let number2 = 4; 
let id = 5;
let firstname = "danny";
let hasDog = true;
let unit; //Declare variable without assigning a value
unit = 5;
let person = { name: "John", age: 30 };
let user = { name: "Alice", age: 25 };
let personInfo = ["John Doe", 30]; //Tuple: can hold fixed number of elements with different types
function isCat(animal) {
    return "meow" in animal;
}
let pet = {
    meow: () => {
        console.log("Meow!");
    },
    bark: () => {
        console.log("Woof");
    }
};
if (isCat(pet)) {
    pet.meow();
}
else {
    pet.bark();
}
