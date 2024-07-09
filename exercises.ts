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

//Task 2: Define Student Type Alias

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
//     studentId: 1234567,
//     subjects: ["Math", "Science", "Art"],
//     major: "Computer Science", // This is optional and can be omitted
//     isStudying: true,
//     grade: 2,
//     uniqueSymbol: Symbol("uniqueId")
// };

// // Log the student object to the console to verify its properties
// console.log(student);

// //Global Scope
// let globalVariable: string = "I'm global";

// function exampleFunction() {
//     //local Scope
//     let localVariable: string = "I'm local";

//     console.log(globalVariable);
//     console.log(localVariable);
// }

// exampleFunction();

// console.log(globalVariable); // accessible from anywhere in the code
// //console.log(localVariable) => only accesible within the function


// 5 Calculate Grades for Students
type Student = {
    studentName: string;
    studentId: number;
    subjects: string[];
    major?: string;
    isStudying: boolean;
    grade: number;
    uniqueSymbol: symbol;
    allScores: number[];
}

function calculateTotalScore(scores: number[]): number {
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i];
    }
    return totalScore;
}

function calculateGrade(student: Student): string {
    const totalScore = calculateTotalScore(student.allScores);
    const averageScore = totalScore / student.allScores.length;

    if (averageScore >= 90) {
        return "A";
    } else if (averageScore >= 80) {
        return "B";
    } else if (averageScore >= 70) {
        return "C";
    } else if (averageScore >= 60) {
        return "D";
    } else {
        return "F"
    }
}

// Beispielstudenten mit Punktzahlen
const student1: Student = {
    studentName: "Ellen",
    studentId: 1,
    subjects: ["Physics", "English", "History"],
    isStudying: true,
    grade: 12,
    uniqueSymbol: Symbol(),
    allScores: [85, 90, 88, 92, 87]
};

const student2: Student = {
    studentName: "Peter",
    studentId: 2,
    subjects: ["Math", "Chemistry", "Biology"],
    isStudying: false,
    grade: 11,
    uniqueSymbol: Symbol(),
    allScores: [70, 65, 68, 72, 60]
};

// Berechne und zeige die Noten an
console.log(`${student1.studentName}'s grade: ${calculateGrade(student1)}`);
console.log(`${student2.studentName}'s grade: ${calculateGrade(student2)}`);
