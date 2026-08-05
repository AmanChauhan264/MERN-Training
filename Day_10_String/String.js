// ============================================================
//                    STRINGS IN JAVASCRIPT
// ============================================================

// String basically characters/text ka collection hota hai.
// JavaScript me strings ko single quotes, double quotes
// ya backticks ke andar likh sakte hain.

console.log("===== STRINGS IN JAVASCRIPT =====\n");


// ------------------------------------------------------------
// 1. Creating Strings
// ------------------------------------------------------------

// JavaScript me string create karne ke 3 common ways hain:
// " "  -> Double Quotes
// ' '  -> Single Quotes
// ` `  -> Backticks / Template Literals

let firstName = "Govind";
let lastName = 'Jangid';
// let fullName = Govind Jangid;

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Full Name:", fullName);


// ------------------------------------------------------------
// 2. String Constructor
// ------------------------------------------------------------

// new String() se bhi string create kar sakte hain.
// Lekin ye primitive string nahi, ek String Object banata hai.
// Normally direct "text" wali string use karna better hota hai.

let user = new String("Govind Jangid");

console.log("\nString Object:", user);
console.log("Type:", typeof user);


// ------------------------------------------------------------
// 3. Template Literals
// ------------------------------------------------------------

// Template Literals backticks (` `) use karte hain.
// ${variable} ki help se string ke andar variable directly
// insert kar sakte hain.

let channel = "Chai aur Code";

// let message = I am learning JavaScript from ${channel};

console.log("\nTemplate Literal:", message);


// ------------------------------------------------------------
// 4. Multiline String
// ------------------------------------------------------------

// Backticks ka use karke multiline string easily bana sakte hain.
// Hume \n manually lagane ki zarurat nahi hoti.

let paragraph = `
JavaScript is a programming language.
It is used for web development.
It can run in browser as well as server.
`;

console.log("\nMultiline String:");
console.log(paragraph);


// ------------------------------------------------------------
// 5. length
// ------------------------------------------------------------

// length property string me total characters count karti hai.
// Spaces bhi characters me count hote hain.
// Note: length property hai, method nahi.
// Isliye .length likhenge, .length() nahi.

let course = "JavaScript";

console.log("String:", course);
console.log("Length:", course.length);


// ------------------------------------------------------------
// 6. Accessing Characters
// ------------------------------------------------------------

// String ke characters ko index ki help se access kar sakte hain.
// Indexing 0 se start hoti hai.
//
// [index]   -> character access karta hai
// charAt()  -> given index ka character return karta hai
// at()      -> positive aur negative dono index support karta hai

console.log("\n===== Accessing Characters =====");

console.log("course[0]:", course[0]); // J
console.log("course[4]:", course[4]); // S

console.log("charAt(0):", course.charAt(0)); // J
console.log("charAt(4):", course.charAt(4)); // S

console.log("at(0):", course.at(0));   // J
console.log("at(-1):", course.at(-1)); // t


// ------------------------------------------------------------
// 7. charCodeAt()
// ------------------------------------------------------------

// charCodeAt() given index ke character ka UTF-16 code return karta hai.

console.log("\n===== charCodeAt() =====");

console.log("Character code of J:", course.charCodeAt(0));
console.log("Character code of A:", "A".charCodeAt(0));


// ------------------------------------------------------------
// 8. String Concatenation using +
// ------------------------------------------------------------

// Concatenation ka matlab strings ko join karna hota hai.
// + operator ki help se multiple strings ko combine kar sakte hain.

console.log("\n===== Concatenation using + =====");

let frontend = "JavaScript";
let backend = "Node.js";

console.log(frontend + " + " + backend);


// ------------------------------------------------------------
// 9. concat()
// ------------------------------------------------------------

// concat() do ya usse zyada strings ko join karta hai.
// Ye original strings ko change nahi karta.
// Ek new joined string return hoti hai.

console.log("\n===== concat() =====");

let html = "HTML";
let css = "CSS";
let javascript = "JavaScript";

let webStack = html.concat(" + ", css, " + ", javascript);

console.log(webStack);
// HTML + CSS + JavaScript


// Multiple strings bhi concat kar sakte hain.

let word1 = "Full";
let word2 = "Stack";
let word3 = "Development";

let development = word1.concat(" ", word2, " ", word3);

console.log(development);
// Full Stack Development


// ------------------------------------------------------------
// 10. toUpperCase()
// ------------------------------------------------------------

// toUpperCase() string ke saare letters ko uppercase me
// convert karke new string return karta hai.

console.log("\n===== toUpperCase() =====");

let lowerCaseText = "javascript";

console.log("Original:", lowerCaseText);
console.log("Uppercase:", lowerCaseText.toUpperCase());


// ------------------------------------------------------------
// 11. toLowerCase()
// ------------------------------------------------------------

// toLowerCase() string ke saare letters ko lowercase me
// convert karta hai.

console.log("\n===== toLowerCase() =====");

let upperCaseText = "JAVASCRIPT";

console.log("Original:", upperCaseText);
console.log("Lowercase:", upperCaseText.toLowerCase());


// ------------------------------------------------------------
// 12. trim()
// ------------------------------------------------------------

// trim() string ke starting aur ending ke extra spaces
// remove karta hai.
// Beech ke spaces remove nahi hote.

console.log("\n===== trim() =====");

let student = "     Govind Jangid     ";

console.log("Original:", "${student}");
console.log("trim():", "${student.trim()}");


// ------------------------------------------------------------
// 13. trimStart()
// ------------------------------------------------------------

// trimStart() sirf string ke starting wale extra spaces
// remove karta hai.

console.log("\n===== trimStart() =====");

let startSpace = "     JavaScript";

console.log("Original:", "${startSpace}");
console.log("trimStart():", "${startSpace.trimStart()}");


// ------------------------------------------------------------
// 14. trimEnd()
// ------------------------------------------------------------

// trimEnd() sirf string ke end wale extra spaces remove karta hai.

console.log("\n===== trimEnd() =====");

let endSpace = "JavaScript     ";

console.log("Original:", "${endSpace}");
console.log("trimEnd():", "${endSpace.trimEnd()}");


// ------------------------------------------------------------
// 15. indexOf()
// ------------------------------------------------------------

// indexOf() kisi character ya word ki first occurrence ka
// index return karta hai.
// Agar value nahi milti to -1 return hota hai.

console.log("\n===== indexOf() =====");

let subject = "JavaScript";

console.log("Java:", subject.indexOf("Java"));       // 0
console.log("Script:", subject.indexOf("Script"));   // 4
console.log("a:", subject.indexOf("a"));             // 1
console.log("Python:", subject.indexOf("Python"));   // -1


// ------------------------------------------------------------
// 16. lastIndexOf()
// ------------------------------------------------------------

// lastIndexOf() value ki last occurrence ka index return karta hai.
// Agar value multiple times present ho to last wali position milegi.

console.log("\n===== lastIndexOf() =====");

let sentence = "JavaScript is JavaScript";

console.log(
    "Last JavaScript:",
    sentence.lastIndexOf("JavaScript")
);


// ------------------------------------------------------------
// 17. includes()
// ------------------------------------------------------------

// includes() check karta hai ki given text string ke andar
// present hai ya nahi.
//
// Present -> true
// Not Present -> false
//
// Ye case-sensitive hota hai.

console.log("\n===== includes() =====");

let description = "I am learning JavaScript";

console.log(
    "Contains JavaScript:",
    description.includes("JavaScript")
); // true

console.log(
    "Contains Python:",
    description.includes("Python")
); // false


// ------------------------------------------------------------
// 18. startsWith()
// ------------------------------------------------------------

// startsWith() check karta hai ki string kisi specific
// text se start ho rahi hai ya nahi.
// Boolean value true/false return karta hai.

console.log("\n===== startsWith() =====");

let githubURL = "https://github.com";

console.log(
    "Starts with https:",
    githubURL.startsWith("https://")
); // true

console.log(
    "Starts with www:",
    githubURL.startsWith("www")
); // false


// ------------------------------------------------------------
// 19. endsWith()
// ------------------------------------------------------------

// endsWith() check karta hai ki string kisi particular
// value se end ho rahi hai ya nahi.
//
// File extension check karne me kaafi useful hai.

console.log("\n===== endsWith() =====");

let fileName = "strings.js";

console.log(
    "Ends with .js:",
    fileName.endsWith(".js")
); // true

console.log(
    "Ends with .py:",
    fileName.endsWith(".py")
); // false


// ------------------------------------------------------------
// 20. slice()
// ------------------------------------------------------------

// slice() string ka specific part extract karta hai.
//
// Syntax:
// string.slice(startIndex, endIndex)
//
// endIndex include nahi hota.
// Negative indexes bhi use kar sakte hain.

console.log("\n===== slice() =====");

let technology = "JavaScript";

console.log("slice(0, 4):", technology.slice(0, 4)); // Java
console.log("slice(4):", technology.slice(4));       // Script

// Negative index end se count karta hai.

console.log("slice(-6):", technology.slice(-6)); // Script
console.log("slice(-3):", technology.slice(-3)); // ipt


// ------------------------------------------------------------
// 21. substring()
// ------------------------------------------------------------

// substring() bhi string ka ek part extract karta hai.
//
// Syntax:
// substring(startIndex, endIndex)
//
// Difference:
// substring() negative indexes ko properly support nahi karta.
// Negative value ko 0 treat kiya jata hai.

console.log("\n===== substring() =====");

console.log(
    "substring(0, 4):",
    technology.substring(0, 4)
); // Java

console.log(
    "substring(4):",
    technology.substring(4)
); // Script


// ------------------------------------------------------------
// 22. replace()
// ------------------------------------------------------------

// replace() matching text ko kisi new text se replace karta hai.
// String value ke saath normally first match replace hota hai.
// Original string change nahi hoti.

console.log("\n===== replace() =====");

let oldText = "I like Java";

let replacedText = oldText.replace(
    "Java",
    "JavaScript"
);

console.log("Original:", oldText);
console.log("After replace:", replacedText);


// ------------------------------------------------------------
// 23. replaceAll()
// ------------------------------------------------------------

// replaceAll() string ke andar present saare matching values
// ko replace karta hai.

console.log("\n===== replaceAll() =====");

let repeatedLanguage = "Java Java Java";

let replacedLanguages = repeatedLanguage.replaceAll(
    "Java",
    "JavaScript"
);

console.log("Original:", repeatedLanguage);
console.log("After replaceAll:", replacedLanguages);


// ------------------------------------------------------------
// 24. split()
// ------------------------------------------------------------

// split() string ko parts me divide karke array banata hai.
// Kis character par split karna hai wo argument me dete hain.

console.log("\n===== split() =====");

let fruits = "Apple,Banana,Mango,Orange";

let fruitArray = fruits.split(",");

console.log("Original:", fruits);
console.log("Array:", fruitArray);


// Space ke basis par split

let personName = "Govind Jangid";

console.log(
    "Split Name:",
    personName.split(" ")
);


// Har character ko alag karna

console.log(
    "Characters:",
    "Hello".split("")
);


// ------------------------------------------------------------
// 25. repeat()
// ------------------------------------------------------------

// repeat() same string ko specified number of times repeat karta hai.

console.log("\n===== repeat() =====");

let hello = "Hello ";

console.log(hello.repeat(3));


// ------------------------------------------------------------
// 26. padStart()
// ------------------------------------------------------------

// padStart() string ke beginning me characters add karta hai
// jab tak required total length achieve na ho jaye.
//
// Syntax:
// string.padStart(targetLength, padString)

console.log("\n===== padStart() =====");

let number = "5";

console.log(
    "padStart:",
    number.padStart(3, "0")
);
// 005


let cardNumber = "1234";

console.log(
    "Card:",
    cardNumber.padStart(16, "*")
);
// ******1234


// ------------------------------------------------------------
// 27. padEnd()
// ------------------------------------------------------------

// padEnd() string ke end me characters add karta hai
// jab tak required length achieve nahi ho jati.

console.log("\n===== padEnd() =====");

let amount = "500";

console.log(
    "padEnd:",
    amount.padEnd(6, "0")
);
// 500000


// ------------------------------------------------------------
// 28. search()
// ------------------------------------------------------------

// search() kisi text ya Regular Expression ko search karta hai.
// Match milne par starting index return karta hai.
// Match nahi mila to -1 return karta hai.

console.log("\n===== search() =====");

let searchText = "I am learning JavaScript";

console.log(
    "JavaScript index:",
    searchText.search("JavaScript")
);

console.log(
    "Python index:",
    searchText.search("Python")
);


// Regular Expression ke saath case-insensitive search.
// /i ka meaning case-insensitive hai.

console.log(
    "Case-insensitive:",
    searchText.search(/javascript/i)
);


// ------------------------------------------------------------
// 29. match()
// ------------------------------------------------------------

// match() mostly Regular Expression ke saath use hota hai.
// Ye matching values ko find karke result return karta hai.
//
// \d -> digit
// +  -> one or more
// g  -> globally/all matches

console.log("\n===== match() =====");

let data = "HTML 10 CSS 20 JavaScript 30";

let numbers = data.match(/\d+/g);

console.log("Numbers:", numbers);
// [ '10', '20', '30' ]


// ------------------------------------------------------------
// 30. matchAll()
// ------------------------------------------------------------

// matchAll() string ke saare regex matches return karta hai.
// Ye iterator return karta hai, isliye for...of se iterate
// kar sakte hain.

console.log("\n===== matchAll() =====");

let repeatedText = "Java Java Java";

let allMatches = repeatedText.matchAll(/Java/g);

for (let match of allMatches) {
    console.log(
        "Found:",
        match[0],
        "at index:",
        match.index
    );
}


// ------------------------------------------------------------
// 31. localeCompare()
// ------------------------------------------------------------

// localeCompare() do strings ko locale-aware alphabetical
// ordering ke according compare karta hai.
//
// Negative -> first string pehle aati hai
// 0        -> strings equivalent hain
// Positive -> first string baad me aati hai
//
// Exact negative/positive number environment ke according
// different ho sakta hai, sign important hai.

console.log("\n===== localeCompare() =====");

console.log(
    "apple vs banana:",
    "apple".localeCompare("banana")
);

console.log(
    "apple vs apple:",
    "apple".localeCompare("apple")
);

console.log(
    "banana vs apple:",
    "banana".localeCompare("apple")
);


// ------------------------------------------------------------
// 32. Primitive String vs String Object
// ------------------------------------------------------------

// "Govind" ek primitive string hai.
//
// new String("Govind") ek object create karta hai.
//
// Normal JavaScript code me primitive string prefer karni chahiye.

console.log("\n===== Primitive vs Object =====");

let primitiveString = "Govind";
let objectString = new String("Govind");

console.log(
    "Primitive type:",
    typeof primitiveString
); // string

console.log(
    "Object type:",
    typeof objectString
); // object


// == type conversion kar sakta hai.

console.log(
    "Using == :",
    primitiveString == objectString
); // true


// === value ke saath type bhi check karta hai.

console.log(
    "Using === :",
    primitiveString === objectString
); // false


// ------------------------------------------------------------
// 33. valueOf()
// ------------------------------------------------------------

// valueOf() String Object ke andar stored primitive
// string value return karta hai.

console.log("\n===== valueOf() =====");

let stringObject = new String("JavaScript");

console.log(
    "Object:",
    stringObject
);

console.log(
    "Primitive Value:",
    stringObject.valueOf()
);

console.log(
    "Type:",
    typeof stringObject.valueOf()
);


// ------------------------------------------------------------
// 34. toString()
// ------------------------------------------------------------

// toString() value ka string representation return karta hai.

console.log("\n===== toString() =====");

let nodeString = new String("Node.js");

console.log(
    nodeString.toString()
);


// ------------------------------------------------------------
// 35. Strings are Immutable
// ------------------------------------------------------------

// JavaScript strings immutable hoti hain.
// Iska matlab existing string ke individual characters ko
// directly modify nahi kar sakte.

console.log("\n===== String Immutability =====");

let greeting = "hello";

console.log("Before:", greeting);

greeting[0] = "H";

console.log("After changing index:", greeting);

// Output abhi bhi:
// hello


// Agar change chahiye to new string create karni padegi.

greeting = "H" + greeting.slice(1);

console.log("New String:", greeting);
// Hello


// ------------------------------------------------------------
// 36. Escape Characters
// ------------------------------------------------------------

// Escape characters special formatting ke liye use hote hain.
//
// \"  -> Double Quote
// \'  -> Single Quote
// \n  -> New Line
// \t  -> Tab
// \\  -> Backslash

console.log("\n===== Escape Characters =====");

let quote = "He said \"Hello\"";
console.log(quote);


let apostrophe = 'It\'s JavaScript';
console.log(apostrophe);


let newLine = "JavaScript\nTypeScript";
console.log(newLine);


let tab = "Name:\tGovind";
console.log(tab);


let windowsPath = "C:\\Users\\Govind";
console.log(windowsPath);


// ------------------------------------------------------------
// 37. Case-Insensitive Comparison
// ------------------------------------------------------------

// JavaScript string comparison normally case-sensitive hoti hai.
//
// Agar case ignore karke compare karna hai to dono strings
// ko lowercase ya uppercase me convert karke compare kar sakte hain.

console.log("\n===== Case-Insensitive Comparison =====");