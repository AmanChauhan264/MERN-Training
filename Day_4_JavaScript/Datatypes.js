// ----------- Datatypes --------------->

const { captureOwnerStack } = require("react");

// ----------Primitive datatypes -------->
// Number
// Boolean
// String
// null
// undefined
// Symbol
// BigInt

//--------- Non primitive datatypes -------->

// Array
// object
// function
  
// -------------------------------------->

// let a = 'aman chauhan';
// console.log(a)
// console.log(typeof a)        // string
 
// let isloggedin = true;
// console.log(typeof isloggedin)       // boolean

// let a;
// console.log(typeof a)      // undefined

// let a = null;        // can be used later, currently is empty but not zero 
// console.log(typeof a)         // object

// let a = 10;
// let b = 20;
// console.log(a+b)       // 30

// let a = 15683746574830n;
// let b = 206574839047n;
// let c = a + b
// console.log(typeof a+b)      // bigInt
// console.log(c)           // answer

// let a = Symbol("id1");
// let b = Symbol("id1")
// console.log(a===b)         // false

// let a = 10, true, "hello", undefined, null;
// console.log(a)        // unexpected token 'true'  error

// let a = [10, true, "hello", undefined, null];
// console.table([a])             // table with index
// console.log(a)                // array

// let object = {
//     firstname: "aman",
//     age: 20,
//     email: "aman@google.com",
//     isloggedin: true
// }
// console.log(object)          
// console.log(typeof object)          // object

// object has unordered list
// but 
// array has ordered list
 
// ----------- Diff b/w primitive and non primitive datatypes ----------------->
// let a = 10;
// let b = a;
// b = 90;
// console.log(b)
// console.log(a)


// primitive works on stack 

// let obj1 = { name: "aman"};
// let obj2  = obj1;
// obj2.name = "gorav";
// console.log(obj2);

