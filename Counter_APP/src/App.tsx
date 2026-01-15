import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClickCount = () => {
    setCount((prev)=> prev + 1)
  }

  return (
    <>
      <button onClick={()=> handleClickCount()}>
       You Tap me: {count} times 

      </button>
      
       <div>
      <p>Enabled</p>
      <button >Toggle</button>
    </div>
    </>
  )
}

export default App
