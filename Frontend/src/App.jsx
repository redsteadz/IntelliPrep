import './App.css'
import DemoComp from './components/Demo'

function AnotherCompinent(){
  return (
  <>
      <h1>Hello</h1>
      <h1>world</h1>
  </>
  )
}

function App() {
  return (
    <>
    <div className=''>
      This is a component
      </div>
      <AnotherCompinent />
      <DemoComp/>
    </>
  )
}


export default App
