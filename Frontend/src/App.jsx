import { useState } from 'react'
import MainPromo from './components/mainPage'
import Navbar from './components/NavBar' 
import TodoPage from './components/todo'
import './App.css'

        // <Navbar/>
        // <MainPromo/>

function App() { 
  return (
    <>
      <div className='font-primary max-h-[100vh] text-white'>
        <TodoPage/>
      </div>
    </>
  )
}

export default App
