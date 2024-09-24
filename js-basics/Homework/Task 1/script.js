// Data Types:
// 1.Create a string, number, boolean, undefined, null, symbol, and bigint variable.
// 2.Print each variable type using typeof.

let str = "Hi guys";
console.log(typeof str);

let num = 27
console.log(typeof num);

let sabir = true;
console.log(typeof sabir);

let nll = null

console.log(typeof nll);

let Davud
console.log(typeof Davud);

let sym = Symbol ("Zdrasti")
console.log(sym);

let bnum = 12121213244343434n
console.log(bnum);

//Keywords
// 3.Use let, const, and var to declare variables and explain their differences with examples.

let workplace = "DSX";
workplace = "CA"; // it allows reassignment
console.log(workplace); //The output will be CA

const planet = "Earth" 
//planet = Mars Reassignment is not allowed with const
console.log(planet);


var position = "Officer"
position = "SOC manager"
console.log(position);

// let - block-scoped, can be reassigned.
// const - block-scoped, cannot be reassigned.
// var - function-scoped, allows reassignment and has hoisting behavior.


// Backticks (Template Literals):
// 4.Use backticks to create a dynamic message that includes (firstName,lastName,age,country,hobby,occupation) variables.

let name1 = "Sabir"
let middlename = "Sasha"
let age = "32"
let city = "Zagatala"
let interest = "hiking"

console.log(`Hi,there i'm ${name1} ${middlename}. I'm ${age} and I live in ${city}. I've interested in ${interest}`);

// Operators:
// 5. Use arithmetic operators (+, -, *, /, %).

let x = 8;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x % y);

// 6.Use comparison operators (==, ===, >, <, etc.)

console.log(x = y); 
console.log(x == y);// comparison based on value
console.log(x === y);//strict comparison based on value and type
console.log(x > y);
console.log(x < 9);



// 7.Use logical operators (&&, ||, !).

let isAdmin = true
let hasID = false

console.log(isAdmin && hasID);
console.log(isAdmin || hasID);
console.log(!isAdmin);


