import { Link } from "react-router-dom";
import Button from "./template";

function LoginButton() {
  return (
    <div className="align-center gap-4 hidden sm:flex">
      <Link to="/signin">
        <Button content="Login" />
      </Link>

      <Link to="/signup">
        <Button content="SignUp" />
      </Link>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex align-center font-bold text-white text-3xl">
      <Link to="/">
        <h1>
          IntelliPrep
        </h1>
      </Link>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex align-center justify-between p-4">
      <Logo />
      <LoginButton />
    </div>
  );
}

export default Navbar;
