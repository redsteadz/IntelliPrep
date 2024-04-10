import Button from './template'
import Lottie from 'lottie-react'
import animationData from '../assets/promo.json'
function AnimatedPromo(){
  return(
    <div className=''>
    <Lottie animationData={animationData} />
    </div>
  )
}

function Informational(){
  return(
    <div className="flex flex-col gap-10 font-primary justify-center">
      <h1 className="text-4xl font-bold">
Study Smarter
with AI insight!
      </h1>
      <p className="text-2xl">
Meet Intelliprep :  where AI transforms your learning journey. Instant answers, personalized tips, and a virtual study partner—all in one app. Experience the future of learning with AI as your ultimate companion.
      </p>
      <Button content="Get Started"/>
    </div>
  )
}


function MainPromo(){
  return ( 
    <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] text-white  p-8'>
      <Informational />
      <AnimatedPromo/>
    </div>
  )
}


export default MainPromo
