        // ============================================================
//                    PROMISES IN JAVASCRIPT
// ============================================================

// Promise JavaScript ka ek object hai jo kisi asynchronous
// operation ke future result ko represent karta hai.
//
// Promise ke 3 states hoti hain:
//
// 1. Pending   -> operation abhi complete nahi hua
// 2. Fulfilled -> operation successfully complete hua
// 3. Rejected  -> operation fail ho gaya


console.log("===== PROMISES IN JAVASCRIPT =====\n");


// ------------------------------------------------------------
// 1. What is a Promise?
// ------------------------------------------------------------

// Promise ek aisa object hai jo future me milne wale
// result ko represent karta hai.
//
// Example:
// Data server se aa raha hai.
// Jab tak data nahi aata -> Pending
// Data aa gaya -> Fulfilled
// Error aa gaya -> Rejected


let promise = new Promise(function(resolve, reject) {

    // Asynchronous operation yahan ho sakta hai.

    let success = true;

    if (success) {
        resolve("Operation Successful");
    }
    else {
        reject("Operation Failed");
    }
});


console.log("Promise:", promise);


// ------------------------------------------------------------
// 2. Promise States
// ------------------------------------------------------------

// Promise ki 3 states hoti hain:
//
// Pending
// Fulfilled
// Rejected


console.log("\n===== Promise States =====");


let pendingPromise = new Promise(function(resolve, reject) {

    // Abhi resolve ya reject nahi kiya gaya.
    // Isliye promise Pending state me hai.

});


console.log("Pending Promise:", pendingPromise);


// Fulfilled Promise

let fulfilledPromise = new Promise(function(resolve, reject) {

    resolve("Data received successfully");

});

console.log("Fulfilled Promise:", fulfilledPromise);


// Rejected Promise

let rejectedPromise = new Promise(function(resolve, reject) {

    reject("Something went wrong");

});

console.log("Rejected Promise:", rejectedPromise);


// ------------------------------------------------------------
// 3. Creating a Promise
// ------------------------------------------------------------

// Promise constructor me ek function pass karte hain.
//
// Is function ko Executor Function kehte hain.
//
// Iske andar do functions milte hain:
//
// resolve()
// reject()


console.log("\n===== Creating Promise =====");


let myPromise = new Promise(function(resolve, reject) {

    let age = 20;

    if (age >= 18) {
        resolve("You are eligible");
    }
    else {
        reject("You are not eligible");
    }

});

console.log(myPromise);


// ------------------------------------------------------------
// 4. resolve()
// ------------------------------------------------------------

// resolve() promise ko Fulfilled state me change karta hai.
//
// resolve() ke andar jo value dete hain,
// wahi promise ka result ban jati hai.


console.log("\n===== resolve() =====");


let successPromise = new Promise(function(resolve, reject) {

    resolve("Success!");

});


console.log(successPromise);


// ------------------------------------------------------------
// 5. reject()
// ------------------------------------------------------------

// reject() promise ko Rejected state me change karta hai.
//
// Usually reject() ke andar error message ya Error object
// pass kiya jata hai.


console.log("\n===== reject() =====");


let failedPromise = new Promise(function(resolve, reject) {

    reject("Failed!");

});


console.log(failedPromise);


// ------------------------------------------------------------
// 6. then()
// ------------------------------------------------------------

// .then() fulfilled promise ka result handle karta hai.
//
// Syntax:
//
// promise.then(function(result) {
//     // success code
// });


console.log("\n===== then() =====");


let resultPromise = new Promise(function(resolve, reject) {

    resolve("Data loaded");

});


resultPromise.then(function(result) {

    console.log("Result:", result);

});


// ------------------------------------------------------------
// 7. catch()
// ------------------------------------------------------------

// .catch() rejected promise ko handle karta hai.
//
// Agar promise reject hota hai,
// to catch() execute hota hai.


console.log("\n===== catch() =====");


let errorPromise = new Promise(function(resolve, reject) {

    reject("Unable to load data");

});


errorPromise.catch(function(error) {

    console.log("Error:", error);

});


// ------------------------------------------------------------
// 8. finally()
// ------------------------------------------------------------

// .finally() success ya failure dono cases me execute hota hai.
//
// Ye cleanup operations ke liye useful hai.
//
// Example:
// Loading message hide karna
// Connection close karna
// Button enable karna


console.log("\n===== finally() =====");


let finalPromise = new Promise(function(resolve, reject) {

    resolve("Task completed");

});


finalPromise
    .then(function(result) {

        console.log("Result:", result);

    })
    .catch(function(error) {

        console.log("Error:", error);

    })
    .finally(function() {

        console.log("Finally block executed");

    });


// ------------------------------------------------------------
// 9. Promise with setTimeout()
// ------------------------------------------------------------

// Real asynchronous operations me time lag sakta hai.
//
// setTimeout() ka use karke hum asynchronous behavior
// simulate kar sakte hain.


console.log("\n===== Promise with setTimeout() =====");


let asyncPromise = new Promise(function(resolve, reject) {

    setTimeout(function() {

        resolve("Data received after 2 seconds");

    }, 2000);

});


asyncPromise.then(function(result) {

    console.log(result);

});


// ------------------------------------------------------------
// 10. Promise with Success and Failure
// ------------------------------------------------------------


console.log("\n===== Success and Failure =====");


let loginPromise = new Promise(function(resolve, reject) {

    let loginSuccessful = true;

    setTimeout(function() {

        if (loginSuccessful) {

            resolve("Login successful");

        }
        else {

            reject("Invalid username or password");

        }

    }, 1000);

});


loginPromise
    .then(function(result) {

        console.log("Success:", result);

    })
    .catch(function(error) {

        console.log("Error:", error);

    });


// ------------------------------------------------------------
// 11. Promise Chaining
// ------------------------------------------------------------

// Ek .then() ke baad doosra .then() laga sakte hain.
//
// Isko Promise Chaining kehte hain.
//
// Ek operation ka result next operation ko pass kiya
// ja sakta hai.


console.log("\n===== Promise Chaining =====");


let chainPromise = new Promise(function(resolve, reject) {

    resolve(10);

});


chainPromise
    .then(function(number) {

        console.log("First:", number);

        return number * 2;

    })
    .then(function(number) {

        console.log("Second:", number);

        return number * 2;

    })
    .then(function(number) {

        console.log("Third:", number);

    });


// ------------------------------------------------------------
// 12. Returning a Promise from then()
// ------------------------------------------------------------

// .then() ke andar hum ek new Promise return kar sakte hain.
//
// Isse asynchronous operations ko chain karna easy hota hai.


console.log("\n===== Returning Promise from then() =====");


let firstOperation = Promise.resolve("First operation completed");


firstOperation
    .then(function(result) {

        console.log(result);

        return new Promise(function(resolve) {

            setTimeout(function() {

                resolve("Second operation completed");

            }, 1000);

        });

    })
    .then(function(result) {

        console.log(result);

    });


// ------------------------------------------------------------
// 13. Promise.resolve()
// ------------------------------------------------------------

// Promise.resolve() ek fulfilled Promise create karta hai.


console.log("\n===== Promise.resolve() =====");


let resolved = Promise.resolve("Promise resolved");

resolved.then(function(result) {

    console.log(result);

});


// ------------------------------------------------------------
// 14. Promise.reject()
// ------------------------------------------------------------

// Promise.reject() directly rejected Promise create karta hai.


console.log("\n===== Promise.reject() =====");


let rejected = Promise.reject("Promise rejected");


rejected.catch(function(error) {

    console.log("Error:", error);

});


// ------------------------------------------------------------
// 15. Promise.all()
// ------------------------------------------------------------

// Promise.all() multiple promises ko ek saath handle karta hai.
//
// Saare promises successful hone chahiye.
//
// Agar ek bhi promise reject ho gaya,
// to Promise.all() reject ho jayega.


console.log("\n===== Promise.all() =====");


let promise1 = Promise.resolve("HTML");
let promise2 = Promise.resolve("CSS");
let promise3 = Promise.resolve("JavaScript");


Promise.all([promise1, promise2, promise3])
    .then(function(results) {

        console.log("Results:", results);

    })
    .catch(function(error) {

        console.log("Error:", error);

    });


// ------------------------------------------------------------
// 16. Promise.all() with setTimeout()
// ------------------------------------------------------------


console.log("\n===== Promise.all() with Async Operations =====");


let task1 = new Promise(function(resolve) {

    setTimeout(function() {

        resolve("Task 1 completed");

    }, 1000);

});


let task2 = new Promise(function(resolve) {

    setTimeout(function() {

        resolve("Task 2 completed");

    }, 2000);

});


let task3 = new Promise(function(resolve) {

    setTimeout(function() {

        resolve("Task 3 completed");

    }, 1500);

});


Promise.all([task1, task2, task3])
    .then(function(results) {

        console.log("All tasks:", results);

    });


// ------------------------------------------------------------
// 17. Promise.allSettled()
// ------------------------------------------------------------

// Promise.allSettled() saare promises ke complete hone ka
// wait karta hai.
//
// Chahe promise fulfilled ho ya rejected,
// dono ka result return karta hai.


console.log("\n===== Promise.allSettled() =====");


let taskA = Promise.resolve("Task A successful");

let taskB = Promise.reject("Task B failed");

let taskC = Promise.resolve("Task C successful");


Promise.allSettled([taskA, taskB, taskC])
    .then(function(results) {

        console.log("All Results:", results);

    });


// ------------------------------------------------------------
// 18. Promise.race()
// ------------------------------------------------------------

// Promise.race() me jo promise sabse pehle settle hota hai
// uska result milta hai.
//
// Settle means:
// fulfilled OR rejected


console.log("\n===== Promise.race() =====");


let race1 = new Promise(function(resolve) {

    setTimeout(function() {

        resolve("First Promise");

    }, 2000);

});


let race2 = new Promise(function(resolve) {

    setTimeout(function() {

        resolve("Second Promise");

    }, 1000);

});


Promise.race([race1, race2])
    .then(function(result) {

        console.log("Winner:", result);

    });


// ------------------------------------------------------------
// 19. Promise.any()
// ------------------------------------------------------------

// Promise.any() first fulfilled promise ka result return karta hai.
//
// Agar ek promise reject ho jaye to Promise.any()
// immediately reject nahi hota.
//
// Ye kisi ek successful result ka wait karta hai.


console.log("\n===== Promise.any() =====");


let any1 = Promise.reject("Failed 1");

let any2 = new Promise(function(resolve) {

    setTimeout(function() {

        resolve("Success 2");

    }, 2000);

});


let any3 = new Promise(function(resolve) {

    setTimeout(function() {

        resolve("Success 3");

    }, 1000);

});


Promise.any([any1, any2, any3])
    .then(function(result) {

        console.log("First successful result:", result);

    })
    .catch(function(error) {

        console.log("Error:", error);

    });


// ------------------------------------------------------------
// 20. Promise.any() when all fail
// ------------------------------------------------------------

// Agar Promise.any() ke saare promises reject ho jayein,
// to ye AggregateError ke saath reject hota hai.


console.log("\n===== Promise.any() - All Failed =====");


let failed1 = Promise.reject("Error 1");
let failed2 = Promise.reject("Error 2");


Promise.any([failed1, failed2])
    .then(function(result) {

        console.log(result);

    })
    .catch(function(error) {

        console.log("All promises failed");

        console.log("Error:", error);

    });


// ------------------------------------------------------------
// 21. Error Handling in Promise Chain
// ------------------------------------------------------------

// Agar chain ke kisi bhi .then() me error aata hai,
// to uske baad wala catch() us error ko handle kar sakta hai.


console.log("\n===== Error Handling =====");


Promise.resolve(10)

    .then(function(number) {

        console.log("Number:", number);

        throw new Error("Something went wrong");

    })

    .then(function() {

        console.log("This will not execute");

    })

    .catch(function(error) {

        console.log("Caught:", error.message);

    });


// ------------------------------------------------------------
// 22. throw Error inside Promise
// ------------------------------------------------------------

// Promise ke andar throw karne par
// promise automatically rejected ho jata hai.


console.log("\n===== throw Error =====");


let throwPromise = new Promise(function(resolve, reject) {

    throw new Error("Something went wrong");

});


throwPromise.catch(function(error) {

    console.log("Error:", error.message);

});


// ------------------------------------------------------------
// 23. Promise vs Callback
// ------------------------------------------------------------

// Callback approach me callbacks nested ho sakte hain.
//
// Example:
//
// function getData(callback) {
//     callback();
// }
//
// Multiple asynchronous operations ke case me
// code difficult ho sakta hai.
//
// Promises chaining provide karte hain,
// jisse code comparatively cleaner hota hai.


console.log("\n===== Promise vs Callback =====");


function getUser() {

    return Promise.resolve("User data");

}


function getPosts() {

    return Promise.resolve("Posts data");

}


getUser()
    .then(function(user) {

        console.log(user);

        return getPosts();

    })
    .then(function(posts) {

        console.log(posts);

    });


// ------------------------------------------------------------
// 24. Async Function
// ------------------------------------------------------------

// async keyword kisi function ko asynchronous function
// banane ke liye use hota hai.
//
// async function hamesha Promise return karta hai.


console.log("\n===== async Function =====");


async function greet() {

    return "Hello JavaScript";

}


greet().then(function(result) {

    console.log(result);

});


// ------------------------------------------------------------
// 25. await
// ------------------------------------------------------------

// await sirf async function ke andar normally use hota hai.
//
// await Promise ke result ka wait karta hai.
//
// Isse asynchronous code synchronous jaisa readable
// lagta hai.


console.log("\n===== await =====");


function getData() {

    return new Promise(function(resolve) {

        setTimeout(function() {

            resolve("Data received");

        }, 1000);

    });

}


async function showData() {

    let result = await getData();

    console.log(result);

}


showData();


// ------------------------------------------------------------
// 26. async/await with Multiple Promises
// ------------------------------------------------------------


console.log("\n===== Multiple await =====");


function firstTask() {

    return Promise.resolve("First task");

}


function secondTask() {

    return Promise.resolve("Second task");

}


async function runTasks() {

    let result1 = await firstTask();

    console.log(result1);


    let result2 = await secondTask();

    console.log(result2);

}


runTasks();


// ------------------------------------------------------------
// 27. try...catch with async/await
// ------------------------------------------------------------

// async/await ke saath errors handle karne ke liye
// try...catch ka use kar sakte hain.


console.log("\n===== try...catch with async/await =====");


function getErrorData() {

    return Promise.reject("Data loading failed");

}


async function handleError() {

    try {

        let result = await getErrorData();

        console.log(result);

    }
    catch (error) {

        console.log("Caught Error:", error);

    }

}


handleError();


// ------------------------------------------------------------
// 28. finally with async/await
// ------------------------------------------------------------


console.log("\n===== finally with async/await =====");


async function processData() {

    try {

        let result = await Promise.resolve("Data processed");

        console.log(result);

    }
    catch (error) {

        console.log(error);

    }
    finally {

        console.log("Process finished");

    }

}


processData();


// ------------------------------------------------------------
// 29. Sequential vs Parallel Promises
// ------------------------------------------------------------

// Sequential:
//
// Ek promise complete hone ke baad doosra start hota hai.
//
// Parallel:
//
// Multiple promises ek saath start ho sakte hain.
//
// Promise.all() parallel asynchronous operations ke liye
// commonly useful hai.


console.log("\n===== Parallel Promises =====");


function downloadFile(fileName, time) {

    return new Promise(function(resolve) {

        setTimeout(function() {

            resolve(fileName + " downloaded");

        }, time);

    });

}


async function downloadFiles() {

    let results = await Promise.all([

        downloadFile("File 1", 1000),
        downloadFile("File 2", 1000),
        downloadFile("File 3", 1000)

    ]);

    console.log(results);

}


downloadFiles();


// ------------------------------------------------------------
// 30. Promise Microtask Behavior
// ------------------------------------------------------------

// Promise callbacks (.then(), .catch(), .finally())
// microtask queue me execute hote hain.
//
// Synchronous code pehle execute hota hai.


console.log("\n===== Microtask Behavior =====");


console.log("1");


Promise.resolve().then(function() {

    console.log("2");

});


console.log("3");


// Output:
//
// 1
// 3
// 2


// ------------------------------------------------------------
// 31. Promise with setTimeout and then()
// ------------------------------------------------------------

// setTimeout callback aur Promise callback ki queues
// different hoti hain.
//
// Promise microtask generally timer callback se pehle
// execute hota hai jab current synchronous code complete ho.


console.log("\n===== Promise vs setTimeout =====");


console.log("Start");


setTimeout(function() {

    console.log("setTimeout");

}, 0);


Promise.resolve().then(function() {

    console.log("Promise");

});


console.log("End");


// Expected order:
//
// Start
// End
// Promise
// setTimeout


// ------------------------------------------------------------
// 32. Promise Object Type
// ------------------------------------------------------------

// Promise ek object hota hai.


console.log("\n===== Promise Type =====");


let examplePromise = Promise.resolve("Hello");


console.log("Type:", typeof examplePromise);


// Output:
// object


// ------------------------------------------------------------
// 33. Checking Promise Result
// ------------------------------------------------------------

// Promise ka result directly console karne par
// hume Promise object milta hai.
//
// Result ko access karne ke liye .then() use karte hain.


console.log("\n===== Getting Promise Result =====");


let result = Promise.resolve("JavaScript");


console.log("Promise:", result);


result.then(function(value) {

    console.log("Value:", value);

});


// ------------------------------------------------------------
// 34. Promise Chaining with Calculations
// ------------------------------------------------------------


console.log("\n===== Promise Calculation Chain =====");


Promise.resolve(5)

    .then(function(number) {

        return number + 5;

    })

    .then(function(number) {

        return number * 2;

    })

    .then(function(number) {

        return number - 5;

    })

    .then(function(result) {

        console.log("Final Result:", result);

    });


// ------------------------------------------------------------
// 35. Multiple catch() Handling
// ------------------------------------------------------------

// Promise chain me ek catch() error handle kar sakta hai.
//
// Error handle hone ke baad chain continue bhi kar sakti hai.


console.log("\n===== Multiple Error Handling =====");


Promise.resolve("Start")

    .then(function(result) {

        console.log(result);

        throw new Error("Error occurred");

    })

    .catch(function(error) {

        console.log("Caught:", error.message);

        return "Recovered";

    })

    .then(function(result) {

        console.log("After recovery:", result);

    });


// ------------------------------------------------------------
// 36. Promise with Real-Life Example
// ------------------------------------------------------------

// Example:
// User login karta hai.
// Server login request process karta hai.
// Success -> Login successful
// Failure -> Login failed


console.log("\n===== Real Life Login Example =====");


function login(username, password) {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            if (username === "admin" && password === "1234") {

                resolve("Login successful");

            }
            else {

                reject("Invalid credentials");

            }

        }, 1000);

    });

}


login("admin", "1234")

    .then(function(result) {

        console.log(result);

    })

    .catch(function(error) {

        console.log("Error:", error);

    });


// ------------------------------------------------------------
// 37. Promise with API-like Example
// ------------------------------------------------------------

// Real applications me Promise ka use APIs ke saath
// bahut common hai.
//
// fetch() bhi Promise return karta hai.
//
// Example:
//
// fetch(url)
//     .then()
//     .catch()


console.log("\n===== API-like Promise Example =====");


function getUserData() {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            let success = true;

            if (success) {

                resolve({
                    id: 1,
                    name: "Govind"
                });

            }
            else {

                reject("Unable to fetch user");

            }

        }, 1000);

    });

}


getUserData()

    .then(function(user) {

        console.log("User:", user);

    })

    .catch(function(error) {

        console.log("Error:", error);

    });


// ------------------------------------------------------------
// 38. Important Difference: all() vs allSettled()
// ------------------------------------------------------------

// Promise.all()
//
// - Saare promises successful hone chahiye.
// - Ek reject -> complete Promise.all reject.
//
// Promise.allSettled()
//
// - Saare promises ka result deta hai.
// - Fulfilled aur rejected dono results milte hain.


// ------------------------------------------------------------
// 39. Important Difference: race() vs any()
// ------------------------------------------------------------

// Promise.race()
//
// First settled promise ka result.
//
// Settled means:
// fulfilled OR rejected.
//
// Promise.any()
//
// First fulfilled promise ka result.
//
// Rejected promises ko ignore karta hai
// jab tak koi fulfilled promise mil jaye.


// ------------------------------------------------------------
// 40. Important Promise Methods Summary
// ------------------------------------------------------------

// then()
// -> fulfilled result handle karta hai.
//
// catch()
// -> rejected result handle karta hai.
//
// finally()
// -> success ya failure dono me execute hota hai.
//
// Promise.resolve()
// -> fulfilled Promise create karta hai.
//
// Promise.reject()
// -> rejected Promise create karta hai.
//
// Promise.all()
// -> all promises successful hone chahiye.
//
// Promise.allSettled()
// -> sabhi promises ke final results deta hai.
//
// Promise.race()
// -> first settled promise ka result.
//
// Promise.any()
// -> first fulfilled promise ka result.


// ------------------------------------------------------------
// 41. Important Points to Remember
// ------------------------------------------------------------

// 1. Promise asynchronous operations ke liye useful hai.
//
// 2. Promise ki 3 states hoti hain:
//    Pending
//    Fulfilled
//    Rejected
//
// 3. resolve() -> success
//
// 4. reject() -> failure
//
// 5. then() -> success handle karta hai
//
// 6. catch() -> error handle karta hai
//
// 7. finally() -> always execute hota hai
//
// 8. Promise chaining se multiple operations ko
//    sequentially handle kar sakte hain.
//
// 9. async/await Promises ko readable banata hai.
//
// 10. Promise.all() multiple promises ko ek saath
//     handle karne ke liye useful hai.


// ------------------------------------------------------------
// 42. Final Example
// ------------------------------------------------------------


console.log("\n===== FINAL PROMISE EXAMPLE =====");


function orderFood() {

    return new Promise(function(resolve, reject) {

        console.log("Ordering food...");


        setTimeout(function() {

            let restaurantAvailable = true;


            if (restaurantAvailable) {

                resolve("Food order placed");

            }
            else {

                reject("Restaurant unavailable");

            }

        }, 1500);

    });

}


async function placeOrder() {

    try {

        let result = await orderFood();

        console.log(result);

    }
    catch (error) {

        console.log("Error:", error);

    }
    finally {

        console.log("Order process completed");

    }

}
placeOrder();
// ============================================================
//                  END OF PROMISES
// ============================================================