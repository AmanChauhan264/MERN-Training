// ============================================================
//                  TYPESCRIPT BASICS
// ============================================================

// TypeScript JavaScript ka superset hai.
//
// TypeScript JavaScript me static typing add karta hai.
//
// TypeScript code ko directly browser normally execute nahi karta.
// Pehle TypeScript ko JavaScript me compile/transpile kiya jata hai.
//
// TypeScript file ka extension:
// .ts


console.log("===== TYPESCRIPT BASICS =====\n");


// ------------------------------------------------------------
// 1. Basic Types
// ------------------------------------------------------------

// TypeScript me variable ka type specify kar sakte hain.
//
// Common types:
//
// string
// number
// boolean
// any
// unknown
// null
// undefined


let userName: string = "Aman";
let age: number = 21;
let isStudent: boolean = true;


console.log("Name:", userName);
console.log("Age:", age);
console.log("Student:", isStudent);


// ------------------------------------------------------------
// 2. Type Inference
// ------------------------------------------------------------

// TypeScript automatically bhi type identify kar sakta hai.
//
// Isko Type Inference kehte hain.


let language = "TypeScript";

let marks = 85;

let passed = true;


// language = 100;
// Error because language string hai.


// ------------------------------------------------------------
// 3. Arrays
// ------------------------------------------------------------

// Array ka type define karne ke do common ways:
//
// type[]
// Array<type>


let numbers: number[] = [10, 20, 30, 40];

let names: string[] = [
    "Aman",
    "Rahul",
    "Govind"
];

let scores: Array<number> = [80, 90, 75];


console.log("Numbers:", numbers);
console.log("Names:", names);


// ------------------------------------------------------------
// 4. Tuple
// ------------------------------------------------------------

// Tuple me fixed number of values aur
// fixed types define kar sakte hain.


let student: [string, number] = [
    "Aman",
    21
];


console.log("Student:", student);


// ------------------------------------------------------------
// 5. Object Types
// ------------------------------------------------------------

// Object ke properties ke types define kar sakte hain.


let person: {
    name: string;
    age: number;
} = {
    name: "Aman",
    age: 21
};


console.log("Person:", person);


// ------------------------------------------------------------
// 6. Optional Properties
// ------------------------------------------------------------

// ? ka use optional property ke liye hota hai.


let employee: {
    name: string;
    salary?: number;
} = {
    name: "Aman"
};


console.log("Employee:", employee);


// ------------------------------------------------------------
// 7. Function Parameters
// ------------------------------------------------------------

// Function parameters ka type define kar sakte hain.


function add(a: number, b: number) {

    return a + b;

}


console.log("Sum:", add(10, 20));


// ------------------------------------------------------------
// 8. Function Return Type
// ------------------------------------------------------------

// Function kya return karega,
// uska type bhi specify kar sakte hain.


function greet(name: string): string {

    return "Hello " + name;

}


console.log(greet("Aman"));


// ------------------------------------------------------------
// 9. void
// ------------------------------------------------------------

// void ka use un functions ke liye hota hai
// jo koi value return nahi karte.


function printMessage(message: string): void {

    console.log(message);

}


printMessage("Learning TypeScript");


// ------------------------------------------------------------
// 10. any
// ------------------------------------------------------------

// any type TypeScript ki type checking ko mostly disable
// kar deta hai.
//
// Isliye any ko carefully use karna chahiye.


let data: any = "Hello";

data = 100;

data = true;


console.log("Any:", data);


// ------------------------------------------------------------
// 11. unknown
// ------------------------------------------------------------

// unknown any se safer hota hai.
//
// Unknown value ko use karne se pehle
// type check karna padta hai.


let value: unknown = "TypeScript";


if (typeof value === "string") {

    console.log(value.toUpperCase());

}


// ------------------------------------------------------------
// 12. Union Types
// ------------------------------------------------------------

// Union type me variable multiple types accept kar sakta hai.
//
// | operator use hota hai.


let id: string | number;

id = 101;

id = "A101";


console.log("ID:", id);


// ------------------------------------------------------------
// 13. Literal Types
// ------------------------------------------------------------

// Literal type me sirf specified values allowed hoti hain.


let direction: "left" | "right" | "center";


direction = "left";


// direction = "up";
// Error


console.log("Direction:", direction);


// ------------------------------------------------------------
// 14. Type Alias
// ------------------------------------------------------------

// type keyword se custom type create kar sakte hain.


type User = {

    name: string;
    age: number;

};


let user: User = {

    name: "Aman",
    age: 21

};


console.log("User:", user);


// ------------------------------------------------------------
// 15. Interface
// ------------------------------------------------------------

// Interface object ka structure define karne ke liye
// commonly use hota hai.


interface Product {

    name: string;
    price: number;

}


let product: Product = {

    name: "Laptop",
    price: 50000

};


console.log("Product:", product);


// ------------------------------------------------------------
// 16. Interface with Optional Property
// ------------------------------------------------------------


interface Car {

    brand: string;
    model: string;
    year?: number;

}


let car: Car = {

    brand: "Toyota",
    model: "Camry"

};


console.log("Car:", car);


// ------------------------------------------------------------
// 17. Enum
// ------------------------------------------------------------

// Enum related named constants define karne ke liye use hota hai.


enum Direction {

    Up,
    Down,
    Left,
    Right

}


let move: Direction = Direction.Up;


console.log("Direction:", move);


// ------------------------------------------------------------
// 18. Type Assertion
// ------------------------------------------------------------

// Type assertion se TypeScript ko bata sakte hain
// ki hume kisi value ka specific type pata hai.
//
// Do common syntaxes:
//
// value as string
// <string>value


let someValue: unknown = "Hello TypeScript";

let stringValue = someValue as string;


console.log("String:", stringValue);


// ------------------------------------------------------------
// 19. Classes
// ------------------------------------------------------------

// TypeScript classes JavaScript classes ke similar hoti hain.
// Properties aur methods ke types define kar sakte hain.


class Student {

    name: string;
    age: number;

    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;

    }

    display(): void {

        console.log(
            this.name,
            this.age
        );

    }

}


let studentOne = new Student("Aman", 21);

studentOne.display();


// ------------------------------------------------------------
// 20. Access Modifiers
// ------------------------------------------------------------

// TypeScript me commonly:
//
// public
// private
// protected
//
// use hote hain.
//
// public -> kahin se access
// private -> sirf class ke andar
// protected -> class aur child classes


class Account {

    public name: string;

    private balance: number;

    constructor(name: string, balance: number) {

        this.name = name;
        this.balance = balance;

    }

    getBalance(): number {

        return this.balance;

    }

}


let account = new Account(
    "Aman",
    5000
);


console.log(account.name);
console.log(account.getBalance());


// ------------------------------------------------------------
// 21. Inheritance
// ------------------------------------------------------------

// extends keyword se ek class doosri class ko inherit kar sakti hai.


class Animal {

    move(): void {

        console.log("Animal is moving");

    }

}


class Dog extends Animal {

    bark(): void {

        console.log("Dog is barking");

    }

}


let dog = new Dog();

dog.move();

dog.bark();


// ------------------------------------------------------------
// 22. Generics
// ------------------------------------------------------------

// Generics reusable aur type-safe code banane ke liye
// use hote hain.


function identity<T>(value: T): T {

    return value;

}


console.log(identity<string>("Hello"));

console.log(identity<number>(100));


// ------------------------------------------------------------
// 23. Generic Array
// ------------------------------------------------------------


function getFirst<T>(items: T[]): T {

    return items[0];

}


console.log(
    getFirst<number>([10, 20, 30])
);

console.log(
    getFirst<string>(["A", "B", "C"])
);


// ------------------------------------------------------------
// 24. Type Narrowing
// ------------------------------------------------------------

// Union type ke saath actual type check karna
// Type Narrowing kehlata hai.


function printValue(value: string | number): void {

    if (typeof value === "string") {

        console.log("String:", value.toUpperCase());

    }
    else {

        console.log("Number:", value.toFixed(2));

    }

}


printValue("hello");

printValue(100);


// ------------------------------------------------------------
// 25. null and undefined
// ------------------------------------------------------------


let emptyValue: null = null;

let notAssigned: undefined = undefined;


console.log("Null:", emptyValue);

console.log("Undefined:", notAssigned);


// ------------------------------------------------------------
// 26. TypeScript with Promise
// ------------------------------------------------------------

// Promise ka return type bhi specify kar sakte hain.


function getData(): Promise<string> {

    return new Promise(function(resolve) {

        resolve("Data received");

    });

}


getData().then(function(result) {

    console.log("Promise:", result);

});


// ------------------------------------------------------------
// 27. async/await with TypeScript
// ------------------------------------------------------------


async function fetchData(): Promise<string> {

    return "Data fetched";

}


async function showData(): Promise<void> {

    let result: string = await fetchData();

    console.log(result);

}


showData();


// ------------------------------------------------------------
// 28. TypeScript Important Keywords
// ------------------------------------------------------------

// let
// const
// type
// interface
// enum
// class
// public
// private
// protected
// readonly
// extends
// implements
// generics


// ------------------------------------------------------------
// 29. readonly
// ------------------------------------------------------------

// readonly property ko initialization ke baad
// normally change nahi kar sakte.


interface StudentInfo {

    readonly id: number;
    name: string;

}


let studentInfo: StudentInfo = {

    id: 101,
    name: "Aman"

};


// studentInfo.id = 102;
// Error


console.log(studentInfo);


// ------------------------------------------------------------
// 30. Important Points to Remember
// ------------------------------------------------------------

// 1. TypeScript JavaScript ka superset hai.
//
// 2. TypeScript static typing provide karta hai.
//
// 3. TypeScript files ka extension .ts hota hai.
//
// 4. string, number, boolean common types hain.
//
// 5. Type inference automatically type identify karta hai.
//
// 6. Union type | operator use karta hai.
//
// 7. type aur interface custom structures banane ke liye
//    useful hain.
//
// 8. Generics reusable type-safe code ke liye useful hain.
//
// 9. TypeScript code ko JavaScript me compile kiya jata hai.
//
// 10. TypeScript development ke time errors identify
//     karne me help karta hai.


// ============================================================
//                 END OF TYPESCRIPT
// ============================================================