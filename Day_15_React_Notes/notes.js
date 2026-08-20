// ============================================================
//                     REACT.JS
// ============================================================

// React ek JavaScript library hai jo user interfaces
// banane ke liye use hoti hai.
//
// React me UI ko reusable Components me divide karte hain.
//
// Important concepts:
//
// Components
// JSX
// Props
// State
// Events
// Hooks
// Conditional Rendering
// Lists
// Forms
// API calls


console.log("===== REACT.JS =====\n");


// ------------------------------------------------------------
// 1. What is React?
// ------------------------------------------------------------

// React ek JavaScript library hai.
//
// React ka use mainly:
// - User Interface banane
// - Single Page Applications
// - Reusable Components
// ke liye hota hai.
//
// React ko Meta (Facebook) ne develop kiya tha.


// ------------------------------------------------------------
// 2. React Component
// ------------------------------------------------------------

// Component UI ka reusable piece hota hai.
//
// React me components generally functions hote hain.


function Welcome() {

    return "Hello React";

}


console.log(Welcome());


// ------------------------------------------------------------
// 3. JSX
// ------------------------------------------------------------

// JSX ka full form hai:
// JavaScript XML
//
// JSX JavaScript ke andar HTML-like syntax likhne deta hai.
//
// Example:
//
// function App() {
//     return <h1>Hello React</h1>;
// }
//
// JSX browser directly understand nahi karta.
// Build tools JSX ko JavaScript me convert karte hain.


// ------------------------------------------------------------
// 4. Component with JSX
// ------------------------------------------------------------


function App() {

    return (
        <div>
            <h1>Hello React</h1>
            <p>Learning React</p>
        </div>
    );

}


// ------------------------------------------------------------
// 5. Rendering Component
// ------------------------------------------------------------

// React application ka main component usually
// root element par render kiya jata hai.
//
// Example:
//
// import { createRoot } from "react-dom/client";
//
// createRoot(document.getElementById("root"))
//     .render(<App />);


// ------------------------------------------------------------
// 6. React Fragment
// ------------------------------------------------------------

// Fragment multiple elements ko ek extra HTML element
// create kiye bina return karne deta hai.
//
// Syntax:
//
// <>
//     <h1>Hello</h1>
//     <p>React</p>
// </>


// ------------------------------------------------------------
// 7. JavaScript inside JSX
// ------------------------------------------------------------

// JSX ke andar JavaScript expressions
// curly braces {} ke andar likhte hain.
//
// Example:
//
// let name = "Aman";
//
// return <h1>Hello {name}</h1>;


// ------------------------------------------------------------
// 8. Props
// ------------------------------------------------------------

// Props ka use parent component se child component
// ko data pass karne ke liye hota hai.


function User(props) {

    return <h2>Hello {props.name}</h2>;

}


// Example:
//
// <User name="Aman" />


// ------------------------------------------------------------
// 9. Destructuring Props
// ------------------------------------------------------------

// Props ko directly destructure kar sakte hain.


function Student({ name, age }) {

    return (
        <p>
            {name} - {age}
        </p>
    );

}


// Example:
//
// <Student name="Aman" age={21} />


// ------------------------------------------------------------
// 10. Props are Readonly
// ------------------------------------------------------------

// Child component ko props ko directly modify nahi karna chahiye.
//
// Props parent se child ki taraf data flow karte hain.
//
// Is concept ko:
// One-way data flow
// kehte hain.


// ------------------------------------------------------------
// 11. useState()
// ------------------------------------------------------------

// useState() React ka important Hook hai.
//
// State component ke data ko store karta hai.
//
// Syntax:
//
// const [state, setState] = useState(value);


import { useState } from "react";


function Counter() {

    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );

}


// ------------------------------------------------------------
// 12. State
// ------------------------------------------------------------

// State change hone par React component ko
// re-render karta hai.
//
// Example:
//
// count = 0
//
// setCount(1)
//
// Component dobara render hoga.


// ------------------------------------------------------------
// 13. Event Handling
// ------------------------------------------------------------

// React me events camelCase me likhe jate hain.
//
// onclick ❌
// onClick ✅
//
// onchange ❌
// onChange ✅
//
// Example:
//
// <button onClick={handleClick}>
//     Click
// </button>


function handleClick() {

    console.log("Button clicked");

}


// ------------------------------------------------------------
// 14. Conditional Rendering
// ------------------------------------------------------------

// Condition ke basis par different UI show kar sakte hain.


function LoginStatus({ isLoggedIn }) {

    return (
        <h2>
            {isLoggedIn
                ? "Welcome User"
                : "Please Login"}
        </h2>
    );

}


// ------------------------------------------------------------
// 15. Lists
// ------------------------------------------------------------

// Arrays ko map() ke through render kar sakte hain.


function Skills() {

    const skills = [
        "C++",
        "JavaScript",
        "React"
    ];

    return (
        <ul>

            {skills.map((skill) => (
                <li key={skill}>
                    {skill}
                </li>
            ))}

        </ul>
    );

}


// ------------------------------------------------------------
// 16. key in Lists
// ------------------------------------------------------------

// React list items ko identify karne ke liye
// key prop use karta hai.
//
// Key unique honi chahiye.
//
// Example:
//
// <li key={user.id}>
//     {user.name}
// </li>


// ------------------------------------------------------------
// 17. Forms
// ------------------------------------------------------------

// React me form input ko state ke saath
// control kar sakte hain.


function LoginForm() {

    const [username, setUsername] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        console.log(username);

    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                value={username}
                onChange={(event) =>
                    setUsername(event.target.value)
                }
            />

            <button type="submit">
                Login
            </button>

        </form>
    );

}


// ------------------------------------------------------------
// 18. Controlled Component
// ------------------------------------------------------------

// Jab input ki value React state se control hoti hai,
// use Controlled Component kehte hain.
//
// Example:
//
// value={username}
// onChange={...}


// ------------------------------------------------------------
// 19. useEffect()
// ------------------------------------------------------------

// useEffect() side effects handle karne ke liye use hota hai.
//
// Examples:
//
// API calls
// Timers
// Event listeners
// DOM related work


import { useEffect } from "react";


function Example() {

    useEffect(() => {

        console.log("Component rendered");

    }, []);

    return <h1>Hello</h1>;

}


// ------------------------------------------------------------
// 20. useEffect Dependency Array
// ------------------------------------------------------------

// Empty array:
//
// useEffect(() => {}, []);
//
// Usually initial render ke baad execute hota hai.
//
// Dependency:
//
// useEffect(() => {}, [count]);
//
// count change hone par effect execute hota hai.
//
// Dependency array omit karne par:
//
// useEffect(() => {});
//
// Effect har render ke baad run hota hai.


// ------------------------------------------------------------
// 21. Cleanup Function
// ------------------------------------------------------------

// useEffect ke andar cleanup function return kar sakte hain.
//
// Ye timers aur event listeners jaise resources
// clean karne ke liye useful hai.


useEffect(() => {

    const timer = setInterval(() => {

        console.log("Running");

    }, 1000);

    return () => {

        clearInterval(timer);

    };

}, []);


// ------------------------------------------------------------
// 22. useRef()
// ------------------------------------------------------------

// useRef() ek value ko renders ke beech preserve kar sakta hai.
//
// DOM element ko directly access karne ke liye bhi use hota hai.


import { useRef } from "react";


function InputFocus() {

    const inputRef = useRef(null);

    function focusInput() {

        inputRef.current.focus();

    }

    return (
        <>
            <input ref={inputRef} />

            <button onClick={focusInput}>
                Focus
            </button>
        </>
    );

}


// ------------------------------------------------------------
// 23. Lifting State Up
// ------------------------------------------------------------

// Jab do child components ko same data chahiye,
// state ko common parent component me move kar sakte hain.
//
// Isko Lifting State Up kehte hain.


// ------------------------------------------------------------
// 24. API Calls
// ------------------------------------------------------------

// React me API call commonly useEffect() ke andar
// fetch() ke saath ki ja sakti hai.


function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://example.com/users")

            .then((response) => response.json())

            .then((data) => {

                setUsers(data);

            })

            .catch((error) => {

                console.log(error);

            });

    }, []);

    return <div>Users</div>;

}


// ------------------------------------------------------------
// 25. React Important Concepts
// ------------------------------------------------------------

// Component
// -> Reusable UI piece.
//
// JSX
// -> HTML-like syntax inside JavaScript.
//
// Props
// -> Parent se child ko data.
//
// State
// -> Component ka changing data.
//
// useState()
// -> State manage karta hai.
//
// useEffect()
// -> Side effects handle karta hai.
//
// useRef()
// -> Value preserve / DOM reference.
//
// Event
// -> User interaction handle karta hai.
//
// Conditional Rendering
// -> Condition ke according UI.
//
// map()
// -> Lists render karne ke liye.
//
// key
// -> List items ko uniquely identify karta hai.
//
// Controlled Component
// -> Input state ke through controlled.
//
// Lifting State Up
// -> Shared state ko parent me move karna.


// ============================================================
//                    END OF REACT.JS
// ============================================================