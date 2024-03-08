// Primitive Data Types

// 7 types : String, Numner, Boolean, Null, Undefined, Symbol, BigInt

const score = 400;
const scorevalue = 100.3

const isLoggedIn = true;
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 1234567890123456789012345678901234567890n


//Reference (Non-Primitive) Data Types

// Arrays, Object Literals, Functions, Dates, Anything else...

const heroes = ["shakatiman", "naagraj", "doga", ]

let myObj = {
    name: "Ashish",
    age : 24,
}


const myFunction = function(){
    console.log("This is my function")
}

 myFunction()