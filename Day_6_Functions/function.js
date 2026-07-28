// --------- Functions ------------->

// Reusable Block of code that performs a perticular task.
// Takes input, performs action and return output.

// Syntax

// function function_name (parameters){  
// 
// }
// function_name() function call

// function one(){
//     console.log("One")
// }
// one();     invoke function
// one        reference  (no output and no error)

//  function one(fname, iname){
    // console.log("My name is:" , fname + " " + iname)
    // console.log(`Hello my name is ${fname} ${iname}`)
// }
// one("Aman", "Chauhan");

// function one(num1, num2){
//     console.log(num1+num2)
//     console.log(num1-num2)
//     console.log(num1*num2)
//     console.log(num1/num2)
// }
// one(100, 200)
// one(10, 20)

// function one(num1, num2){
//    console.log(num1+num2)     // 30
//    return num1+num2
//    console.log("Hello")    // will not execute 
// }
// const result = one(10, 20)
// console.log(result)      // undefined   // 30

// function aadhar(req, res, next){
//    if(req.session.isAuth){
//     next()
//    }else{
//     res.redirect("/Login")            // middleware - checks authority 
//    }
// }
// aadhar()

// router.post("/register",aadhar,  (req, res)=>{
//     res.render("Home.ejs")
// })

// function one(){
//    var a = 10
//    console.log(a)
// }
// one()
// console.log(a)  // error

// {
//     var a = 10
//     console.log(a)       // 10
// }
// console.log(a)   //  10    only in var

// ----------------------------------->

// console.log(a)        // hoisting
// var a = 10        // undefined

// one()
// function one(){         // function expression did not hoist
//    console.log("Hello")       // Hello
// }

// one()
// var one = function(){        // function declaration gets hoist
//     console.log("Hello")          // Error
// }

// Arrow function does not gets hoist 

// function one(num1){
//     console.log(num1)        // 1
// }
// one(1, 2, 3, 4)

// function one(...num1){       // ... rest operator
//     console.log(num1)           // [ 1, 2, 3, 4 ]
// }
// one(1, 2, 3, 4)

// function one(fname, iname){
// console.log(fname + " " + iname)     // undefined
// }
// one()

// function one(fname="login", iname="user"){
// console.log(fname + " " + iname)        // login user
// }
// one()