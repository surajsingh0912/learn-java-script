// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol(used to make any value unique), BigInt

// const score = 100
// const scorevalue =100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log( id === anotherId);

// const bigNumber = 336465462131654613134692532134n // n is used to make it bigint
// console.log(typeof bigNumber);

// Reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name: "suraj",
    age: 22,
}

console.log(heros);
console.log(myobj);

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof heros);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// https://262.ecma-international.org/5.1/#sec-11.4.3


//***************************************************** */

// Stack (Primitive), Heap (non Primitive)

let myname = "Suraj"

let anothername = myname
anothername = "golu"

console.log(myname);
console.log(anothername);

let userone = {
    email: "surajsingh@gmail.com",
    upi: "suraj@ybl"
}

let usertwo = userone

usertwo.email = "xyz@gmail.com"

console.log(userone.email);
console.log(usertwo.email);


