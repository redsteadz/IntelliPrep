import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginOut from './components/LoginOut' 
import './App.css'


function App() { 
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <h2>SUP BOIII</h2>
        <LoginOut/>
      </div>
    </>
  )
}

export default App
