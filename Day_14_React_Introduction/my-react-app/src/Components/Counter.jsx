import React, { useState } from 'react'

const Counter = () => {
   const [counter , setCounter] =  useState(10)

   function handleinc(){
    setCounter(counter+1)
   }

   function handledec(){
    setCounter(counter-1)
   }
  return (
    <div id="counterparent">
        <div id="counterchild">
            <p id="counterheading">Counter Application</p>
            <p id="zerovalue">{counter}</p>
            <button onClick={handleinc} id="buttoninc">Increment</button>
            <button onClick={handledec} id="buttondec">Decrement</button>
        </div>
    </div>
  )
}

export default Counter