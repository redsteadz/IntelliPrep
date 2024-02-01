import { useState } from 'react'
import MainPromo from './components/mainPage'
import Navbar from './components/NavBar' 
import './App.css'


function App() { 
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='font-primary max-h-[100vh]'>
        <Navbar/>
        <MainPromo/>
      </div>
    </>
  )
}

export default App
