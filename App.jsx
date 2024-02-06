import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  // let counter =15
  const addvalue = () => {
    console.log("clicked", counter);
    //  counter = counter +  1
    setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

 

  return (
    <>
     <h2>Counter Start</h2>
     <h3>Counter value : {counter}</h3>
     <button onClick = {addvalue}>Add value {counter}</button>
     <br />
     <br />
     <button onClick={removeValue}>remove value {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App
