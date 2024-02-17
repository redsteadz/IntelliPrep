import React from "react";
import Navbar from "./Navbar";
import "./frontpagestyles.css"
import img from "./Animation - 1707147425041.svg";

function Front() {
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
         <img src={img} alt="svg-img" />
        </div>
     </div>
    </>
};

export default Front
