// // Assign them a type and value
// let studentName: string = "Susan";
// let studentId: number = 12345;
// let subjects: string[] = ["Math", "Biology", "German"];
// let major: string | undefined = "Math";
// let isStudying: boolean = true;
// let grade: number = 2;
// let uniqueSymbol: symbol = Symbol("uniqueId");

// console.log(`Student Name: ${studentName}`);
// console.log(`Student ID: ${studentId}`);
// console.log(`Subjects: ${subjects.join(", ")}`);
// console.log(`Major: ${major}`);
// console.log(`Is Studying: ${isStudying}`);
// console.log(`Grade: ${grade}`);
// console.log(`Unique Symbol: ${uniqueSymbol.toString()}`);

// //Task 2: Define Student Type Alias

// type Student = {
//     studentName: string;
//     studentId: number;
//     subjects: string[];
//     major?: string;
//     isStudying: boolean;
//     grade: number;
//     uniqueSymbol: symbol;
// }

// // Create an instance of Student
// let student: Student = {
//     studentName: "Alice in Wonderland",
//     studentId: 123456,
//     subjects: ["Math", "Science", "Art"],
//     major: "Computer Science", // This is optional and can be omitted
//     isStudying: true,
//     grade: 2,
//     uniqueSymbol: Symbol("uniqueId")
// };

// // Log the student object to the console to verify its properties
// console.log(student);

//Global Scope
let globalVariable: string = "I'm global";

function exampleFunction() {
    //local Scope
    let localVariable: string = "I'm local";

    console.log(globalVariable);
    console.log(localVariable);
}

exampleFunction();

console.log(globalVariable); // accessible from anywhere in the code
//console.log(localVariable) => only accesible within the function
