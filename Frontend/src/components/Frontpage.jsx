import React from "react";
import Lottie from "react-lottie";
import banner from "../components/Animation - 1707147425041.json";
import Navbar from "./Navbar";
import "./frontpagestyles.css";

function HomeContent() {
  return (
    <div className="content">
      <h4 className="text">
        Meet Intelliprep: where AI transforms your learning journey. Instant
        answers, personalized tips, and a virtual study partner—all in one app.
        Experience the future of learning with AI as your ultimate companion.
      </h4>
      <button className="home-button hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
}

// HomeText component
function HomeText() {
  return (
    <div className="home-text">
      <h1 className="heading">
        Study Smarter with AI insight!
      </h1>
      <div className="hidden md:block">
        <HomeContent />
      </div>
    </div>
  );
}

// HomeImage component
function HomeImage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: banner,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "lottie-svg-class",
      id: "lottie-svg-id",
    },
  };

  return (
    <div className="home-image">
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        className={"lottie-svg-class"}
      />
    </div>
  );
}

// Front component combining Navbar, HomeText, and HomeImage
function Front() {
  return (
    <>
      <div className="home-container">
        <HomeText />
        <HomeImage />
        <div className="sm:block md:hidden">
          <HomeContent/>
        </div>
      </div>
    </>
  );
}

export default Front;
