import React from "react";
import Navbar from "./Navbar";
import "./frontpagestyles.css"
import Lottie from "react-lottie"
import banner from "../components/Animation - 1707147425041.json"

function Front() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: banner,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return <>
     <Navbar />
     <div className="home-container">
        <div className="home-text">
            <h1 className="heading">Study Smarter
with AI insight!</h1>
            <p className="text">
            Meet Intelliprep :  where AI transforms your learning journey. Instant answers, personalized tips, and a virtual study partner—all in one app. Experience the future of learning with AI as your ultimate companion.
            </p>
            <button className="home-button">
                Get Started
            </button>
        </div>
        <div className="home-image">
        <Lottie
          options= {defaultOptions}
          height={400} 
          width={400}
        />
        </div>
     </div>
    </>
};

export default Front
