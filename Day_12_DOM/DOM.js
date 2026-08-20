// ============================================================
//                    DOM IN JAVASCRIPT
// ============================================================

// DOM ka full form hai:
// Document Object Model
//
// Browser jab HTML page ko load karta hai,
// to HTML document ko ek tree-like structure me convert karta hai.
//
// JavaScript ki help se hum DOM ko:
// - Access
// - Modify
// - Create
// - Delete
// - Style
// - Events handle
// kar sakte hain.
//
// DOM mainly browser environment me use hota hai.

console.log("===== DOM IN JAVASCRIPT =====\n");


// ------------------------------------------------------------
// 1. What is DOM?
// ------------------------------------------------------------

// DOM HTML document ka programming representation hai.
//
// Example HTML:
//
// <h1>Hello</h1>
// <p>JavaScript</p>
//
// Browser is HTML ko DOM tree me convert karta hai.
//
// JavaScript DOM ki help se HTML elements ko access
// aur change kar sakti hai.


// ------------------------------------------------------------
// 2. window Object
// ------------------------------------------------------------

// window browser ka global object hai.
//
// Browser ke andar bahut saari information aur functionality
// window object ke through available hoti hai.
//
// Examples:
//
// window.innerWidth
// window.innerHeight
// window.alert()
// window.console
// window.document


console.log("\n===== window Object =====");

console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);


// ------------------------------------------------------------
// 3. document Object
// ------------------------------------------------------------

// document object current HTML page ko represent karta hai.
//
// DOM manipulation mostly document object ke through hoti hai.


console.log("\n===== document Object =====");

console.log("Document:", document);

console.log("Document Title:", document.title);


// ------------------------------------------------------------
// 4. document.title
// ------------------------------------------------------------

// document.title current webpage ka title access karta hai.
//
// Isko change bhi kar sakte hain.


console.log("\n===== document.title =====");

console.log("Old Title:", document.title);

document.title = "DOM Learning";

console.log("New Title:", document.title);


// ------------------------------------------------------------
// 5. getElementById()
// ------------------------------------------------------------

// getElementById() kisi element ko uski id ke through
// select karta hai.
//
// Syntax:
//
// document.getElementById("id");


// Example HTML:
//
// <h1 id="heading">Hello JavaScript</h1>


console.log("\n===== getElementById() =====");

let heading = document.getElementById("heading");

console.log("Heading:", heading);


// ------------------------------------------------------------
// 6. getElementsByClassName()
// ------------------------------------------------------------

// getElementsByClassName() same class wale multiple elements
// ko select karta hai.
//
// Ye HTMLCollection return karta hai.
//
// Example:
//
// <p class="text">One</p>
// <p class="text">Two</p>


console.log("\n===== getElementsByClassName() =====");

let textElements = document.getElementsByClassName("text");

console.log("Elements:", textElements);
console.log("Number of Elements:", textElements.length);


// ------------------------------------------------------------
// 7. getElementsByTagName()
// ------------------------------------------------------------

// getElementsByTagName() tag name ke basis par elements
// select karta hai.
//
// Example:
//
// document.getElementsByTagName("p");


console.log("\n===== getElementsByTagName() =====");

let paragraphs = document.getElementsByTagName("p");

console.log("Paragraphs:", paragraphs);
console.log("Number of Paragraphs:", paragraphs.length);


// ------------------------------------------------------------
// 8. querySelector()
// ------------------------------------------------------------

// querySelector() first matching element return karta hai.
//
// CSS selector ki tarah selector likhte hain.
//
// ID:
// #heading
//
// Class:
// .text
//
// Tag:
// p


console.log("\n===== querySelector() =====");

let firstParagraph = document.querySelector("p");

console.log("First Paragraph:", firstParagraph);


// ------------------------------------------------------------
// 9. querySelector() with ID
// ------------------------------------------------------------


let selectedHeading = document.querySelector("#heading");

console.log("Selected Heading:", selectedHeading);


// ------------------------------------------------------------
// 10. querySelector() with Class
// ------------------------------------------------------------


let selectedText = document.querySelector(".text");

console.log("Selected Text:", selectedText);


// ------------------------------------------------------------
// 11. querySelectorAll()
// ------------------------------------------------------------

// querySelectorAll() saare matching elements return karta hai.
//
// Ye NodeList return karta hai.


console.log("\n===== querySelectorAll() =====");

let allParagraphs = document.querySelectorAll("p");

console.log("All Paragraphs:", allParagraphs);
console.log("Count:", allParagraphs.length);


// ------------------------------------------------------------
// 12. Difference: querySelector() vs querySelectorAll()
// ------------------------------------------------------------

// querySelector()
//
// -> First matching element return karta hai.
//
// querySelectorAll()
//
// -> Saare matching elements return karta hai.


// ------------------------------------------------------------
// 13. innerHTML
// ------------------------------------------------------------

// innerHTML element ke andar ka HTML content access karta hai.
//
// Iske through HTML content change bhi kar sakte hain.


console.log("\n===== innerHTML =====");

if (heading) {

    console.log("Old HTML:", heading.innerHTML);

    heading.innerHTML = "Hello <span>JavaScript</span>";

    console.log("New HTML:", heading.innerHTML);

}


// ------------------------------------------------------------
// 14. innerText
// ------------------------------------------------------------

// innerText visible text ko access karta hai.
//
// Ye rendered/visible text ko consider karta hai.


console.log("\n===== innerText =====");

if (heading) {

    console.log("Heading Text:", heading.innerText);

}


// ------------------------------------------------------------
// 15. textContent
// ------------------------------------------------------------

// textContent element ke andar ka text content return karta hai.
//
// Ye hidden text ko bhi include kar sakta hai.


console.log("\n===== textContent =====");

if (heading) {

    console.log("Text Content:", heading.textContent);

}


// ------------------------------------------------------------
// 16. innerHTML vs innerText vs textContent
// ------------------------------------------------------------

// innerHTML
// -> HTML content ke saath kaam karta hai.
//
// innerText
// -> Visible text return karta hai.
//
// textContent
// -> Text content return karta hai.


// ------------------------------------------------------------
// 17. Changing Text Content
// ------------------------------------------------------------

// textContent ka use karke element ka text change kar sakte hain.


console.log("\n===== Changing Text =====");


if (heading) {

    heading.textContent = "DOM is Easy";

    console.log(heading.textContent);

}


// ------------------------------------------------------------
// 18. Changing HTML Content
// ------------------------------------------------------------


if (heading) {

    heading.innerHTML = "<strong>DOM is Powerful</strong>";

}


// ------------------------------------------------------------
// 19. getAttribute()
// ------------------------------------------------------------

// getAttribute() kisi element ka attribute value return karta hai.
//
// Example:
//
// id
// class
// href
// src
// title


console.log("\n===== getAttribute() =====");


let link = document.querySelector("a");

if (link) {

    console.log("Href:", link.getAttribute("href"));

}


// ------------------------------------------------------------
// 20. setAttribute()
// ------------------------------------------------------------

// setAttribute() kisi attribute ko add ya modify karta hai.
//
// Syntax:
//
// element.setAttribute("attribute", "value");


console.log("\n===== setAttribute() =====");


if (link) {

    link.setAttribute("target", "_blank");

    console.log(
        "Target:",
        link.getAttribute("target")
    );

}


// ------------------------------------------------------------
// 21. removeAttribute()
// ------------------------------------------------------------

// removeAttribute() kisi attribute ko remove karta hai.


console.log("\n===== removeAttribute() =====");


if (link) {

    link.removeAttribute("target");

    console.log(
        "Target:",
        link.getAttribute("target")
    );

}


// ------------------------------------------------------------
// 22. Checking Attribute
// ------------------------------------------------------------

// hasAttribute() check karta hai ki attribute present hai ya nahi.
//
// true -> present
// false -> not present


console.log("\n===== hasAttribute() =====");


if (link) {

    console.log(
        "Has href:",
        link.hasAttribute("href")
    );

}


// ------------------------------------------------------------
// 23. Changing CSS using style
// ------------------------------------------------------------

// JavaScript se element ki CSS change kar sakte hain.
//
// Syntax:
//
// element.style.property = "value";


console.log("\n===== Changing CSS =====");


if (heading) {

    heading.style.color = "blue";
    heading.style.backgroundColor = "lightgray";
    heading.style.padding = "10px";

}


// ------------------------------------------------------------
// 24. Multiple CSS Properties
// ------------------------------------------------------------


if (heading) {

    heading.style.fontSize = "30px";
    heading.style.textAlign = "center";
    heading.style.border = "2px solid black";

}


// ------------------------------------------------------------
// 25. className
// ------------------------------------------------------------

// className element ki class ko access/change karta hai.


console.log("\n===== className =====");


if (heading) {

    console.log("Current Class:", heading.className);

    heading.className = "main-heading";

    console.log("New Class:", heading.className);

}


// ------------------------------------------------------------
// 26. classList
// ------------------------------------------------------------

// classList classes ke saath kaam karne ke liye useful hai.
//
// Important methods:
//
// add()
// remove()
// toggle()
// contains()
// replace()


console.log("\n===== classList =====");


if (heading) {

    heading.classList.add("active");

    console.log("Class Added");

}


// ------------------------------------------------------------
// 27. classList.add()
// ------------------------------------------------------------


if (heading) {

    heading.classList.add("highlight");

}


// ------------------------------------------------------------
// 28. classList.remove()
// ------------------------------------------------------------


if (heading) {

    heading.classList.remove("highlight");

}


// ------------------------------------------------------------
// 29. classList.contains()
// ------------------------------------------------------------


if (heading) {

    console.log(
        "Has active class:",
        heading.classList.contains("active")
    );

}


// ------------------------------------------------------------
// 30. classList.toggle()
// ------------------------------------------------------------

// toggle() class present hone par remove karta hai.
// Class absent hone par add karta hai.


if (heading) {

    heading.classList.toggle("dark");

}


// ------------------------------------------------------------
// 31. classList.replace()
// ------------------------------------------------------------


if (heading) {

    heading.classList.replace(
        "active",
        "completed"
    );

}


// ------------------------------------------------------------
// 32. Creating an Element
// ------------------------------------------------------------

// document.createElement() new HTML element create karta hai.


console.log("\n===== createElement() =====");


let newParagraph = document.createElement("p");

console.log("New Element:", newParagraph);


// ------------------------------------------------------------
// 33. Adding Text to New Element
// ------------------------------------------------------------


newParagraph.textContent = "This paragraph was created using JavaScript";


// ------------------------------------------------------------
// 34. append()
// ------------------------------------------------------------

// append() element ke end me content add karta hai.


console.log("\n===== append() =====");


document.body.append(newParagraph);


// ------------------------------------------------------------
// 35. prepend()
// ------------------------------------------------------------

// prepend() element ke beginning me content add karta hai.


let firstMessage = document.createElement("p");

firstMessage.textContent = "This is the first message";

document.body.prepend(firstMessage);


// ------------------------------------------------------------
// 36. appendChild()
// ------------------------------------------------------------

// appendChild() bhi child element add karta hai.
//
// Ye specifically Node ko append karta hai.


let childParagraph = document.createElement("p");

childParagraph.textContent = "Added using appendChild()";

document.body.appendChild(childParagraph);


// ------------------------------------------------------------
// 37. remove()
// ------------------------------------------------------------

// remove() element ko DOM se remove karta hai.


console.log("\n===== remove() =====");


let removeElement = document.createElement("p");

removeElement.textContent = "This will be removed";

document.body.append(removeElement);

removeElement.remove();


// ------------------------------------------------------------
// 38. removeChild()
// ------------------------------------------------------------

// Parent element ke through child ko remove kar sakte hain.


let oldElement = document.createElement("p");

oldElement.textContent = "Temporary Element";

document.body.append(oldElement);

document.body.removeChild(oldElement);


// ------------------------------------------------------------
// 39. Creating HTML Structure
// ------------------------------------------------------------


console.log("\n===== Creating HTML Structure =====");


let box = document.createElement("div");

let boxTitle = document.createElement("h2");

let boxText = document.createElement("p");


boxTitle.textContent = "DOM Example";

boxText.textContent = "This content was created using JavaScript";


box.append(boxTitle);

box.append(boxText);

document.body.append(box);


// ------------------------------------------------------------
// 40. Event Handling
// ------------------------------------------------------------

// Event ka matlab browser me hone wali koi action.
//
// Examples:
//
// click
// mouseover
// mouseout
// keydown
// keyup
// submit
// change
// input


// ------------------------------------------------------------
// 41. onclick
// ------------------------------------------------------------

// onclick event click hone par execute hota hai.


console.log("\n===== onclick =====");


let button = document.querySelector("button");


if (button) {

    button.onclick = function() {

        console.log("Button clicked");

    };

}


// ------------------------------------------------------------
// 42. addEventListener()
// ------------------------------------------------------------

// addEventListener() event handle karne ka modern method hai.
//
// Syntax:
//
// element.addEventListener("event", function() {
//     // code
// });


console.log("\n===== addEventListener() =====");


if (button) {

    button.addEventListener("click", function() {

        console.log("Button clicked using addEventListener");

    });

}


// ------------------------------------------------------------
// 43. Click Event
// ------------------------------------------------------------


if (button) {

    button.addEventListener("click", function() {

        alert("Button was clicked");

    });

}


// ------------------------------------------------------------
// 44. Mouse Events
// ------------------------------------------------------------

// Common mouse events:
//
// click
// dblclick
// mousedown
// mouseup
// mouseenter
// mouseleave
// mousemove


console.log("\n===== Mouse Events =====");


if (heading) {

    heading.addEventListener("mouseenter", function() {

        console.log("Mouse entered heading");

    });


    heading.addEventListener("mouseleave", function() {

        console.log("Mouse left heading");

    });

}


// ------------------------------------------------------------
// 45. Keyboard Events
// ------------------------------------------------------------

// Common keyboard events:
//
// keydown
// keyup
//
// keypress old approach hai aur generally avoid kiya jata hai.


console.log("\n===== Keyboard Events =====");


document.addEventListener("keydown", function(event) {

    console.log("Key pressed:", event.key);

});


// ------------------------------------------------------------
// 46. Event Object
// ------------------------------------------------------------

// Event listener ke callback me event object milta hai.
//
// Isme event ke baare me information hoti hai.


if (button) {

    button.addEventListener("click", function(event) {

        console.log("Event:", event);

        console.log("Event Type:", event.type);

        console.log("Target:", event.target);

    });

}


// ------------------------------------------------------------
// 47. preventDefault()
// ------------------------------------------------------------

// preventDefault() browser ke default behavior ko stop karta hai.
//
// Example:
// Link click karne par page navigate na ho.
// Form submit hone par page reload na ho.


console.log("\n===== preventDefault() =====");


if (link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        console.log("Default link behavior stopped");

    });

}


// ------------------------------------------------------------
// 48. Form Handling
// ------------------------------------------------------------

// Form submit event ko addEventListener() se handle kar sakte hain.


console.log("\n===== Form Handling =====");


let form = document.querySelector("form");


if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        console.log("Form submitted");

    });

}


// ------------------------------------------------------------
// 49. Input Event
// ------------------------------------------------------------

// input event tab execute hota hai jab input ki value change hoti hai.


console.log("\n===== Input Event =====");


let input = document.querySelector("input");


if (input) {

    input.addEventListener("input", function(event) {

        console.log(
            "Current Value:",
            event.target.value
        );

    });

}


// ------------------------------------------------------------
// 50. change Event
// ------------------------------------------------------------

// change event generally tab trigger hota hai jab
// input/select ki value change karke focus leave karte hain.


if (input) {

    input.addEventListener("change", function(event) {

        console.log(
            "Changed Value:",
            event.target.value
        );

    });

}


// ------------------------------------------------------------
// 51. DOM Traversal
// ------------------------------------------------------------

// DOM Traversal ka matlab DOM tree me
// parent, child aur sibling elements ke through move karna.


console.log("\n===== DOM Traversal =====");


// ------------------------------------------------------------
// 52. parentElement
// ------------------------------------------------------------

// parentElement current element ka parent return karta hai.


if (heading) {

    console.log(
        "Parent:",
        heading.parentElement
    );

}


// ------------------------------------------------------------
// 53. children
// ------------------------------------------------------------

// children parent element ke direct child elements return karta hai.


let bodyChildren = document.body.children;

console.log("Body Children:", bodyChildren);


// ------------------------------------------------------------
// 54. firstElementChild
// ------------------------------------------------------------

// Parent ka first child element.


console.log(
    "First Body Child:",
    document.body.firstElementChild
);


// ------------------------------------------------------------
// 55. lastElementChild
// ------------------------------------------------------------


console.log(
    "Last Body Child:",
    document.body.lastElementChild
);


// ------------------------------------------------------------
// 56. nextElementSibling
// ------------------------------------------------------------

// Current element ke baad wala sibling element.


if (heading) {

    console.log(
        "Next Sibling:",
        heading.nextElementSibling
    );

}


// ------------------------------------------------------------
// 57. previousElementSibling
// ------------------------------------------------------------

// Current element se pehle wala sibling element.


if (heading) {

    console.log(
        "Previous Sibling:",
        heading.previousElementSibling
    );

}


// ------------------------------------------------------------
// 58. closest()
// ------------------------------------------------------------

// closest() nearest matching ancestor element return karta hai.
//
// CSS selector use hota hai.


if (heading) {

    console.log(
        "Closest Div:",
        heading.closest("div")
    );

}


// ------------------------------------------------------------
// 59. matches()
// ------------------------------------------------------------

// matches() check karta hai ki element given CSS selector
// ko match karta hai ya nahi.


if (heading) {

    console.log(
        "Matches h1:",
        heading.matches("h1")
    );

}


// ------------------------------------------------------------
// 60. contains()
// ------------------------------------------------------------

// contains() check karta hai ki ek element ke andar
// doosra element present hai ya nahi.


console.log("\n===== contains() =====");


console.log(
    "Body contains heading:",
    document.body.contains(heading)
);


// ------------------------------------------------------------
// 61. Creating Attributes
// ------------------------------------------------------------


console.log("\n===== Creating Attributes =====");


let image = document.createElement("img");

image.setAttribute(
    "src",
    "https://via.placeholder.com/150"
);

image.setAttribute(
    "alt",
    "Placeholder Image"
);

document.body.append(image);


// ------------------------------------------------------------
// 62. Creating Links
// ------------------------------------------------------------


let newLink = document.createElement("a");

newLink.textContent = "Visit GitHub";

newLink.href = "https://github.com";

newLink.target = "_blank";

document.body.append(newLink);


// ------------------------------------------------------------
// 63. Dataset
// ------------------------------------------------------------

// data-* attributes ke saath dataset property use hoti hai.
//
// HTML:
//
// <div data-id="101"></div>


let dataBox = document.createElement("div");

dataBox.dataset.id = "101";

dataBox.dataset.username = "Aman";

document.body.append(dataBox);


console.log("\n===== dataset =====");

console.log("ID:", dataBox.dataset.id);

console.log(
    "Username:",
    dataBox.dataset.username
);


// ------------------------------------------------------------
// 64. innerHTML vs createElement()
// ------------------------------------------------------------

// innerHTML se HTML quickly create kar sakte hain.
//
// createElement() se individual elements
// programmatically create kar sakte hain.
//
// Dynamic/user-generated content ke case me
// createElement/textContent safer approach ho sakta hai.


// ------------------------------------------------------------
// 65. insertAdjacentHTML()
// ------------------------------------------------------------

// insertAdjacentHTML() kisi element ke relative position par
// HTML insert karta hai.
//
// Positions:
//
// beforebegin
// afterbegin
// beforeend
// afterend


console.log("\n===== insertAdjacentHTML() =====");


if (heading) {

    heading.insertAdjacentHTML(
        "afterend",
        "<p>Inserted using JavaScript</p>"
    );

}


// ------------------------------------------------------------
// 66. insertAdjacentElement()
// ------------------------------------------------------------


let adjacentParagraph = document.createElement("p");

adjacentParagraph.textContent =
    "Adjacent Element";


if (heading) {

    heading.insertAdjacentElement(
        "afterend",
        adjacentParagraph
    );

}


// ------------------------------------------------------------
// 67. insertAdjacentText()
// ------------------------------------------------------------


if (heading) {

    heading.insertAdjacentText(
        "afterend",
        " Extra text added."
    );

}


// ------------------------------------------------------------
// 68. Document Fragment
// ------------------------------------------------------------

// DocumentFragment temporary container ki tarah kaam karta hai.
//
// Multiple elements create karke ek saath DOM me add
// karne ke liye useful hai.


console.log("\n===== DocumentFragment =====");


let fragment = document.createDocumentFragment();


for (let i = 1; i <= 3; i++) {

    let item = document.createElement("p");

    item.textContent = "Item " + i;

    fragment.append(item);

}


document.body.append(fragment);


// ------------------------------------------------------------
// 69. Event Bubbling
// ------------------------------------------------------------

// Jab child element par event hota hai,
// to event parent elements ki taraf bubble kar sakta hai.
//
// Example:
//
// button
//   ↓
// div
//   ↓
// body


console.log("\n===== Event Bubbling =====");


let bubbleDiv = document.createElement("div");

let bubbleButton = document.createElement("button");


bubbleButton.textContent = "Bubble Button";


bubbleDiv.append(bubbleButton);

document.body.append(bubbleDiv);


bubbleButton.addEventListener("click", function() {

    console.log("Button clicked");

});


bubbleDiv.addEventListener("click", function() {

    console.log("Div clicked");

});


// ------------------------------------------------------------
// 70. stopPropagation()
// ------------------------------------------------------------

// stopPropagation() event ko parent elements tak bubble
// hone se rok sakta hai.


bubbleButton.addEventListener("click", function(event) {

    event.stopPropagation();

    console.log("Propagation stopped");

});


// ------------------------------------------------------------
// 71. Event Delegation
// ------------------------------------------------------------

// Event delegation me parent element par ek event listener
// lagakar child elements ke events handle karte hain.
//
// Ye dynamic elements ke liye useful hai.


console.log("\n===== Event Delegation =====");


let list = document.createElement("ul");


for (let i = 1; i <= 3; i++) {

    let item = document.createElement("li");

    item.textContent = "Item " + i;

    list.append(item);

}


document.body.append(list);


list.addEventListener("click", function(event) {

    if (event.target.tagName === "LI") {

        console.log(
            "Clicked:",
            event.target.textContent
        );

    }

});


// ------------------------------------------------------------
// 72. DOMContentLoaded
// ------------------------------------------------------------

// DOMContentLoaded event tab execute hota hai
// jab HTML document completely parse ho jata hai.
//
// Ye ensure karta hai ki DOM elements available hain.


console.log("\n===== DOMContentLoaded =====");


document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log("DOM is fully loaded");

    }
);


// ------------------------------------------------------------
// 73. Window Load Event
// ------------------------------------------------------------

// load event tab execute hota hai jab page aur
// dependent resources bhi load ho jayein.
//
// Example:
// Images
// CSS
// External resources


window.addEventListener("load", function() {

    console.log("Complete page loaded");

});


// ------------------------------------------------------------
// 74. Scroll Event
// ------------------------------------------------------------


window.addEventListener("scroll", function() {

    console.log("Page scrolled");

});


// ------------------------------------------------------------
// 75. Resize Event
// ------------------------------------------------------------


window.addEventListener("resize", function() {

    console.log(
        "Window width:",
        window.innerWidth
    );

});


// ------------------------------------------------------------
// 76. Focus Event
// ------------------------------------------------------------


if (input) {

    input.addEventListener("focus", function() {

        console.log("Input focused");

    });

}


// ------------------------------------------------------------
// 77. Blur Event
// ------------------------------------------------------------


if (input) {

    input.addEventListener("blur", function() {

        console.log("Input lost focus");

    });

}


// ------------------------------------------------------------
// 78. Creating a Button Dynamically
// ------------------------------------------------------------


console.log("\n===== Dynamic Button =====");


let dynamicButton = document.createElement("button");

dynamicButton.textContent = "Click Me";


dynamicButton.addEventListener("click", function() {

    console.log("Dynamic button clicked");

    dynamicButton.textContent = "Clicked!";

});


document.body.append(dynamicButton);


// ------------------------------------------------------------
// 79. Toggle Text
// ------------------------------------------------------------


let toggleButton = document.createElement("button");

toggleButton.textContent = "Toggle Message";


let toggleMessage = document.createElement("p");

toggleMessage.textContent = "Hello from DOM";


document.body.append(toggleButton);

document.body.append(toggleMessage);


toggleButton.addEventListener("click", function() {

    if (toggleMessage.style.display === "none") {

        toggleMessage.style.display = "block";

    }
    else {

        toggleMessage.style.display = "none";

    }

});


// ------------------------------------------------------------
// 80. Simple Counter using DOM
// ------------------------------------------------------------


console.log("\n===== DOM Counter =====");


let counter = 0;


let counterDisplay = document.createElement("h2");

counterDisplay.textContent = "Count: 0";


let increaseButton = document.createElement("button");

increaseButton.textContent = "Increase";


let decreaseButton = document.createElement("button");

decreaseButton.textContent = "Decrease";


document.body.append(counterDisplay);

document.body.append(increaseButton);

document.body.append(decreaseButton);


increaseButton.addEventListener("click", function() {

    counter++;

    counterDisplay.textContent =
        "Count: " + counter;

});


decreaseButton.addEventListener("click", function() {

    counter--;

    counterDisplay.textContent =
        "Count: " + counter;

});


// ------------------------------------------------------------
// 81. Simple Input Example
// ------------------------------------------------------------


console.log("\n===== DOM Input Example =====");


let nameInput = document.createElement("input");

nameInput.placeholder = "Enter your name";


let nameButton = document.createElement("button");

nameButton.textContent = "Show Name";


let nameOutput = document.createElement("p");


document.body.append(nameInput);

document.body.append(nameButton);

document.body.append(nameOutput);


nameButton.addEventListener("click", function() {

    nameOutput.textContent =
        "Hello " + nameInput.value;

});


// ------------------------------------------------------------
// 82. Simple List Example
// ------------------------------------------------------------


console.log("\n===== DOM List Example =====");


let listInput = document.createElement("input");

listInput.placeholder = "Enter item";


let addButton = document.createElement("button");

addButton.textContent = "Add Item";


let itemList = document.createElement("ul");


document.body.append(listInput);

document.body.append(addButton);

document.body.append(itemList);


addButton.addEventListener("click", function() {

    if (listInput.value.trim() === "") {

        return;

    }


    let newItem = document.createElement("li");

    newItem.textContent = listInput.value;


    itemList.append(newItem);


    listInput.value = "";

});


// ------------------------------------------------------------
// 83. Removing Dynamic List Items
// ------------------------------------------------------------


itemList.addEventListener("click", function(event) {

    if (event.target.tagName === "LI") {

        event.target.remove();

    }

});


// ------------------------------------------------------------
// 84. DOM Traversal Summary
// ------------------------------------------------------------

// parentElement
// -> Parent element
//
// children
// -> All child elements
//
// firstElementChild
// -> First child
//
// lastElementChild
// -> Last child
//
// nextElementSibling
// -> Next sibling
//
// previousElementSibling
// -> Previous sibling
//
// closest()
// -> Nearest matching ancestor
//
// contains()
// -> Check whether element exists inside another element


// ------------------------------------------------------------
// 85. DOM Selection Summary
// ------------------------------------------------------------

// getElementById()
// -> One element by ID
//
// getElementsByClassName()
// -> Multiple elements by class
//
// getElementsByTagName()
// -> Multiple elements by tag
//
// querySelector()
// -> First matching CSS selector
//
// querySelectorAll()
// -> All matching CSS selectors


// ------------------------------------------------------------
// 86. DOM Modification Summary
// ------------------------------------------------------------

// innerHTML
// -> HTML content
//
// innerText
// -> Visible text
//
// textContent
// -> Text content
//
// style
// -> CSS modify
//
// classList
// -> Classes manage
//
// setAttribute()
// -> Add/change attribute
//
// removeAttribute()
// -> Remove attribute
//
// createElement()
// -> Create new element
//
// append()
// -> Add at end
//
// prepend()
// -> Add at beginning
//
// remove()
// -> Remove element


// ------------------------------------------------------------
// 87. Event Summary
// ------------------------------------------------------------

// click
// -> Mouse click
//
// dblclick
// -> Double click
//
// mouseenter
// -> Mouse enters element
//
// mouseleave
// -> Mouse leaves element
//
// keydown
// -> Key pressed
//
// keyup
// -> Key released
//
// input
// -> Input value changes
//
// change
// -> Value changed
//
// submit
// -> Form submitted
//
// focus
// -> Element gets focus
//
// blur
// -> Element loses focus
//
// scroll
// -> Page scrolls
//
// resize
// -> Window size changes


// ------------------------------------------------------------
// 88. Important DOM Points to Remember
// ------------------------------------------------------------

// 1. DOM ka full form Document Object Model hai.
//
// 2. document current HTML page ko represent karta hai.
//
// 3. getElementById() ID ke through element select karta hai.
//
// 4. querySelector() first matching element return karta hai.
//
// 5. querySelectorAll() saare matching elements return karta hai.
//
// 6. innerHTML HTML content ke liye use hota hai.
//
// 7. textContent text ke liye useful hai.
//
// 8. classList classes manage karne ke liye useful hai.
//
// 9. createElement() new element create karta hai.
//
// 10. append() element ko DOM me add karta hai.
//
// 11. remove() element ko DOM se remove karta hai.
//
// 12. addEventListener() events handle karne ka modern
//     aur flexible method hai.
//
// 13. preventDefault() default browser behavior ko rokta hai.
//
// 14. stopPropagation() event propagation ko rokta hai.
//
// 15. Event delegation parent element par event listener
//     laga kar child events handle karta hai.
//
// 16. DOM manipulation browser environment me hoti hai.


// ============================================================
//                    END OF DOM
// ============================================================