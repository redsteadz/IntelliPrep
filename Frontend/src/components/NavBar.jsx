import Button from './template'

function LoginButton(){
  return(
  <div className="align-center gap-4 hidden sm:flex">
    <Button content="Login" />
      
    <Button content="Signup" />
    </div>
  )
}

function Logo(){
  return(
    <div className="flex align-center font-bold text-white text-3xl">
      <h1>
        IntelliPrep
      </h1>
    </div>
  )
}

function Navbar() {
  return(
    <div 
      className="flex align-center justify-between p-4"
    >
      <Logo/>
      <LoginButton />
    </div>
  )
}


export default Navbar
