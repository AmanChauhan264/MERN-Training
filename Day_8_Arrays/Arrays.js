// Arrays in JavaScript
// Arrays are ordered and mutable.
// Index remains the same, but values can be changed.

// let arr1 = ["govind", 43, true, undefined];

// arr1[0] = "Jangid";

// console.table(arr1);


// Array can store different data types
// let data = [
//   "govind",
//   21,
//   true,
//   undefined,
//   { city: "Jaipur" },
//   ["JavaScript", "React"]
// ];

// console.table(data);


// Object - key value pair
// let student = {
//   name: "Govind",
//   age: 21,
//   course: "CSE"
// };

// console.table(student);


//  --------------------------------------------------
//  Basic Array Methods
//  --------------------------------------------------

let numbers = [120, 200, 30, 40, 50, 60, 70];


//  push() - add element at the end
// numbers.push("govind");

// console.table(numbers);


// unshift() - add element at the beginning
// numbers.unshift("aman");

// console.table(numbers);


// pop() - remove last element
// numbers.pop();

// console.table(numbers);


// shift() - remove first element
// numbers.shift();

// console.table(numbers);


// --------------------------------------------------
// concat()
// --------------------------------------------------

// let arr2 = ["govind", "aman", "amay"];

// let res1 = numbers.concat(arr2);
// let res2 = arr2.concat(numbers);

// console.table(res1);
// console.table(res2);


// --------------------------------------------------
//  join()
// --------------------------------------------------

// let res3 = res2.join("/");

// console.table([res3]);


// --------------------------------------------------
// indexOf() and lastIndexOf()
// --------------------------------------------------

// let values = [120, 20, 30, 120, 50, 120];

// let first = values.indexOf(120);
// let last = values.lastIndexOf(120);

// console.table([first]);
// console.table([last]);


// --------------------------------------------------
// reverse()
// --------------------------------------------------

// let names = ["govind", "aman", "amay"];

// names.reverse();

// console.table(names);


// --------------------------------------------------
// sort()
// --------------------------------------------------

// let marks = [120, 200, 30, 40, 50, 60, 70];

// marks.sort((a, b) => a - b);

// console.table(marks);


// --------------------------------------------------
// slice()
// --------------------------------------------------

// slice(start, end)
// End index is not included.
// It does not change the original array.

// let arr3 = [10, 20, 30, 40, 50, 60, 70];

// let sliced = arr3.slice(2, 6);

// console.table(sliced);
// console.table(arr3);


// --------------------------------------------------
// splice()
// --------------------------------------------------

// splice(start, deleteCount, item)
// It changes the original array.

// let students = ["govind", "aman", "amay", "aditya"];

// Insert
// students.splice(2, 0, "kapil");

// console.table(students);  

// Remove
// students.splice(2, 1);

// console.table(students);

// Replace
// students.splice(1, 1, "rahul");

// console.table(students);


// --------------------------------------------------
// forEach()
// --------------------------------------------------

// forEach does not return a new array.

// let arr4 = [10, 20, 30, 40, 50];

//let arr =  arr4.forEach((item) => {
//   console.log(item);
// });


// --------------------------------------------------
// map()
// --------------------------------------------------

// map returns a new array.

// let mappedArray = arr4.map((item) => {
//   return item * 2;
// });

// console.table(mappedArray);


// --------------------------------------------------
// filter()
// --------------------------------------------------

// let ages = [12, 13, 43, 24, 21];

// let adults = ages.filter((item) => {
//   return item >= 18;
// });

// console.table(adults);


// --------------------------------------------------
// every()
// --------------------------------------------------

// Checks if every element satisfies the condition.

// let allAdults = ages.every((item) => {
//   return item >= 18;
// });

// console.table([allAdults]);


// --------------------------------------------------
// reduce()
// --------------------------------------------------

// let arr5 = [10, 20, 30, 40, 50];

// let total = arr5.reduce((sum, item) => {
//   return sum + item;
// }, 0);

// console.table([total]);


// Same sum using normal for loop

// let sum = 0;

// for (let i = 0; i < arr5.length; i++) {
//   sum += arr5[i];
// }

// console.table([sum]);