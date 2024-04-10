import { useState } from "react";
// import MainPromo from "./components/mainPage";
import Front from "./components/Frontpage";
import Navbar from "./components/NavBar";
import TodoPage from "./components/todo";
import SignForm from "./components/SignForm.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="font-primary max-h-[100vh] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/signup" element={<SignForm  state="signUp" />}/>
          <Route path="/signin" element={<SignForm  state="signIn" />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
