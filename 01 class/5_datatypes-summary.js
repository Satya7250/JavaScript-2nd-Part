// Primitive

// 7 types : String, Number, Boolean, null,  undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggendIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.table([score, scoreValue, isLoggendIn, outsideTemp, userEmail, id === anotherId]);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "ironMan", "naagraj", "doga"]
let myObj = {
    name: "satya",
    age: 22,
    email: "satyaprakashdh@gmail.com",
}

const myFunction = function() {
    console.log("Hello world");
}




//************************memory**********************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubbename = "satisfieddotcom"

let anothername = myYoutubbename;
anothername = "chaiaurcode";

// console.log(myYoutubbename);
// console.log(anothername);


let userOne = {
    email: "satya@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "prakash@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);