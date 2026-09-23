import React from 'react'

function App () {
function addToCart(){
var Input = document.getElementById("Inputid")
  Input = Input.value;
  console.log(Input);
  var cart = document.getElementById("Cart");
  cart.append(Input);
}
  return (
    <div id='Add'>
      <h1>Add to cart</h1>
      <input id='Inputid' type="text" />
      <button onClick={addToCart}>Add</button>
       <ul id='Cart'></ul> 
    </div>
  )
}
export default App
