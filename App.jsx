


import { useState } from 'react'

import './App.css'
import CourseList from './CourseList'

function App() {

  const [count,setCount] = useState(0);
  const [name,setName] = useState("");

  const handleIncrement = () => {
    setCount(count + 5);
  }

  const handleDecrement = () => {
    setCount(count - 5);
  }

  return (
    <div className="course-container">

      <h1>HOOKS</h1>

      <h2>Name : {name}</h2>

      <p>Count : {count}</p>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <button onClick={handleDecrement}>
        Decrement
      </button>

      <input
        placeholder="Please enter the name"
        onChange={(e)=>setName(e.target.value)}
      />

{/* <CourseList/> */}
    </div>
  )
}

export default App

