// 1. Variables
const studentName = "John Doe";
const studentAge = 20;
const isEnrolled = true;

// 2. Functions
function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {
    return a + b;
}

function isEven(number) {
    return number % 2 === 0;
}

// 3. Arrays
const colors = ["red", "green", "blue"];

function getFirstElement(array) {
    return array[0];
}

// 4. Objects
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

module.exports = {
    studentName,
    studentAge,
    isEnrolled,
    greet,
    add,
    isEven,
    colors,
    getFirstElement,
    car,
    getFullName
};
