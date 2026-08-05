// ============================================================================
//                         OBJECTS IN JAVASCRIPT
// ============================================================================
//
// An Object is a non-primitive data type used to store data in the form of
// key-value pairs.
//
// Example:
// {
//     name: "Govind",
//     age: 19
// }
//
// Here:
// name -> key
// "Govind" -> value
//
// ----------------------------------------------------------------------------
// IMPORTANT POINTS ABOUT OBJECTS
// ----------------------------------------------------------------------------
//
// 1. Objects store data in key-value pairs.
//
// 2. Every key uniquely identifies a property inside the object.
//
// 3. Objects are dynamic data structures.
//    We can add, update, or delete properties after creating the object.
//
// 4. Objects are mutable.
//    Their values can be changed after creation.
//
// 5. Objects can store different types of data:
//      - Primitive values
//      - Arrays
//      - Other objects
//      - Functions
//
// 6. A function stored inside an object is called a METHOD.
//
// 7. Objects are non-primitive / reference data types.
//
// 8. Non-primitive values such as objects are handled through references.
//    The actual object data is generally associated with heap memory.
//
// 9. JavaScript objects look similar to JSON, but JavaScript Object and
//    JSON are not exactly the same thing.
//
// 10. Object properties should not be treated as a positional list.
//     We normally access values using their keys.
//
// ============================================================================



// ============================================================================
// 1. BASIC OBJECT
// ============================================================================

let student = {
    name: "Govind",
    age: 19,
    course: "MERN"
};

console.log(student);



// ============================================================================
// 2. OBJECT REFERENCE
// ============================================================================
//
// Objects are reference types.
//
// When we assign one object variable to another variable:
//
// obj2 = obj1
//
// JavaScript does NOT create an independent copy of the object.
// Both variables refer to the same object.
//
// Therefore, changing the object using obj2 will also be visible through obj1.
//
// This is an important interview concept.
// ============================================================================

let obj1 = {
    name: "Govind"
};

let obj2 = obj1;

obj2.name = "Aman";

console.log(obj2); // { name: "Aman" }

console.log(obj1); // { name: "Aman" }


// Both obj1 and obj2 are referring to the same object.



// ============================================================================
// 3. ADD, EDIT AND DELETE PROPERTIES
// ============================================================================

let user1 = {
    firstname: "Govind",
    age: 19,
    course: "MERN"
};

console.log("Original Object:");

console.log(user1);


// ----------------------------------------------------------------------------
// ADD A NEW PROPERTY
// ----------------------------------------------------------------------------

user1.city = "Jaipur";

console.log("After Adding City:");

console.log(user1);


// ----------------------------------------------------------------------------
// EDIT / UPDATE AN EXISTING PROPERTY
// ----------------------------------------------------------------------------

user1.firstname = "Aman";

console.log("After Updating Firstname:");

console.log(user1);


// ----------------------------------------------------------------------------
// DELETE A PROPERTY
// ----------------------------------------------------------------------------

delete user1.age;

console.log("After Deleting Age:");

console.log(user1);



// ============================================================================
// 4. OBJECT WITH DIFFERENT TYPES OF VALUES
// ============================================================================
//
// An object can contain:
//
// String  -> firstname, course
// Number  -> age
// Array   -> lastlogin
// Object  -> address
// Function -> greet
//
// When a function is stored inside an object, it is called a METHOD.
// ============================================================================

let user = {

    firstname: "Govind",

    age: 19,

    course: "MERN",

    lastlogin: ["Saturday", "Sunday"],

    address: {
        city: "Jaipur",
        state: "Rajasthan"
    },

    greet: function () {
        return My name is ${this.firstname};
    }

};

console.log(user);



// ============================================================================
// 5. ACCESSING OBJECT PROPERTIES
// ============================================================================
//
// There are mainly two common ways to access object properties:
//
// 1. Dot Notation
// 2. Bracket Notation
// ============================================================================


// Dot Notation

console.log(user.firstname);

console.log(user.age);

console.log(user.course);


// Bracket Notation

console.log(user["firstname"]);

console.log(user["course"]);



// ============================================================================
// 6. WHY BRACKET NOTATION IS IMPORTANT
// ============================================================================
//
// Bracket notation is useful when the property name contains spaces or
// special characters.
// ============================================================================

let person = {
    "first name": "Govind",
    "last name": "Jangid"
};

console.log(person["first name"]);

console.log(person["last name"]);


// person.first name      ❌ Invalid
// person["first name"]   ✅ Valid



// ============================================================================
// 7. ACCESSING ARRAY INSIDE OBJECT
// ============================================================================

console.log(user.lastlogin);

console.log(user.lastlogin[0]); // Saturday

console.log(user.lastlogin[1]); // Sunday



// ============================================================================
// 8. ACCESSING NESTED OBJECT
// ============================================================================

console.log(user.address);

console.log(user.address.city);  // Jaipur

console.log(user.address.state); // Rajasthan



// ============================================================================
// 9. FUNCTION INSIDE OBJECT
// ============================================================================
//
// A function stored as a property of an object is called a METHOD.
//
// Here:
//
// greet -> key/property
// function -> value
//
// greet is therefore a method of the user object.
// ============================================================================

console.log(user.greet());



// ============================================================================
// 10. ANONYMOUS FUNCTION
// ============================================================================
//
// An anonymous function is a function written without an explicit function
// name.
//
// Example:
//
// function () {
//     return "Hello";
// }
//
// In our object:
//
// greet: function () {
//     return My name is ${this.firstname};
// }
//
// The function expression itself has no explicit name and is assigned to
// the "greet" property.
// ============================================================================



// ============================================================================
// 11. this KEYWORD
// ============================================================================
//
// this refers to a context determined by how a function is called.
//
// In this example:
//
// user.greet()
//
// this refers to user.
//
// Therefore:
//
// this.firstname
//
// becomes:
//
// user.firstname
//
// which gives:
//
// "Govind"
// ============================================================================

console.log(user.greet());

// Output:
// My name is Govind



// ============================================================================
// 12. OBJECT.FREEZE()
// ============================================================================
//
// Object.freeze() is used to freeze an object.
//
// After freezing an object:
//
// ❌ Existing properties cannot be changed
// ❌ New properties cannot be added
// ❌ Existing properties cannot be deleted
//
// NOTE:
// Object.freeze() is shallow.
// ============================================================================

Object.freeze(user);


// Trying to update age

user.age = 12;


// Trying to add a property

user.city = "Jaipur";


// Trying to delete a property

delete user.course;


console.log(user);


// The top-level structure remains unchanged because the object is frozen.



// ============================================================================
// 13. CALL(), APPLY() AND BIND()
// ============================================================================
//
// call(), apply(), and bind() are Function methods.
//
// They are commonly used to control the value of this while working
// with functions.
//
// ----------------------------------------------------------------------------
// call()
// ----------------------------------------------------------------------------
//
// Calls the function immediately.
//
// Arguments are passed separately.
//
// function.call(thisValue, arg1, arg2, ...)
//
//
// ----------------------------------------------------------------------------
// apply()
// ----------------------------------------------------------------------------
//
// Calls the function immediately.
//
// Arguments are passed inside an array.
//
// function.apply(thisValue, [arg1, arg2, ...])
//
//
// ----------------------------------------------------------------------------
// bind()
// ----------------------------------------------------------------------------
//
// Does NOT call the function immediately.
//
// It returns a new function with this bound to the provided object.
//
// let newFunction = function.bind(thisValue);
//
// newFunction();
// ============================================================================



// ============================================================================
// 14. CALL() EXAMPLE
// ============================================================================

let user2 = {
    firstname: "Aman"
};

function introduce(city, course) {

    console.log(
        My name is ${this.firstname}, I live in ${city} and I am learning ${course}
    );

}


// Using call()

introduce.call(user2, "Jaipur", "MERN");



// ============================================================================
// 15. APPLY() EXAMPLE
// ============================================================================
//
// Difference from call():
//
// call()  -> arguments separately
// apply() -> arguments inside an array
// ============================================================================

introduce.apply(user2, ["Jaipur", "MERN"]);



// ============================================================================
// 16. BIND() EXAMPLE
// ============================================================================
//
// bind() does not execute the function immediately.
//
// It creates and returns a new function.
// ============================================================================

let boundFunction = introduce.bind(
    user2,
    "Jaipur",
    "MERN"
);


// Execute later

boundFunction();



// ============================================================================
//                     CALL vs APPLY vs BIND
// ============================================================================
//
// call()
//
// -> Executes immediately
// -> Arguments passed separately
//
// Example:
// introduce.call(user2, "Jaipur", "MERN");
//
//
// apply()
//
// -> Executes immediately
// -> Arguments passed as an array
//
// Example:
// introduce.apply(user2, ["Jaipur", "MERN"]);
//
//
// bind()
//
// -> Does NOT execute immediately
// -> Returns a new function
//
// Example:
// let fn = introduce.bind(user2, "Jaipur", "MERN");
// fn();
//
// ============================================================================



// ============================================================================
//                           QUICK REVISION
// ============================================================================
//
// Object
//      -> Key-value pairs
//
// Key
//      -> Uniquely identifies a property
//
// Object
//      -> Non-primitive / reference data type
//
// Dynamic
//      -> Properties can be added, modified and deleted
//
// Mutable
//      -> Existing object properties can be changed
//
// Nested Object
//      -> Object inside another object
//
// Method
//      -> Function stored inside an object
//
// this
//      -> Depends on how the function is called
//      -> In user.greet(), this refers to user
//
// Object.freeze()
//      -> Prevents top-level add, update and delete operations
//
// call()
//      -> Calls immediately
//      -> Arguments separately
//
// apply()
//      -> Calls immediately
//      -> Arguments in an array
//
// bind()
//      -> Returns a new function
//      -> Can be executed later
//
// ============================================================================