// let number : Number;

// number = 5;

// let number2 = 4; 
let id: number = 5;
let firstname: string = "danny";
let hasDog: boolean = true;

let unit: number; //Declare variable without assigning a value
unit = 5; 

interface Person {
    name: string;
    age: number;
}

let person: {name: string; age: number} = {name: "John", age: 30};
let user: Person = {name: "Alice", age: 25};

let personInfo: [string, number] = ["John Doe", 30]; //Tuple: can hold fixed number of elements with different types

//Typescript Types
interface Cat {
    meow(): void;
}

interface Dog {
    bark(): void;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return "meow" in animal;
}


let pet: Cat | Dog = {
    meow: () => {
        console.log("Meow!")
    },
    bark: () => {
        console.log("Woof")
    }
};

if (isCat(pet)) {
    pet.meow();
} else {
    pet.bark();
}