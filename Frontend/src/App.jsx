import { Route, Routes } from "react-router-dom";
import "./App.css";
import Front from "./components/Frontpage.jsx";
import SignForm from "./components/SignForm.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      <div className="bg-SignInBackground">
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<SignForm/>} />
        <Route path="/" element={<Front/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
