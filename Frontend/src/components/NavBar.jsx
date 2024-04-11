import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./template";


function Profile() {
  const { user, logout } = useAuth0();
  const [logoutButton, setLogoutButton] = useState(false);

  const handleLogout = () => {
    setLogoutButton(false);
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className="flex flex-col gap-4 relative">
      <div
        className="flex justify-center items-center"
        onClick={() => setLogoutButton(!logoutButton)}
      >
        <div className="p-6 max-w-sm mx-auto bg-gray-900 rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0 user-image-placeholder h-8 w-8 rounded-full border-2 border-blue-400">
            <img src={user.picture} alt="" className="rounded-full" />
          </div>
          <div>
            <div className="text-md font-medium text-white">{user.name}</div>
          </div>
        </div>
      </div>
      {logoutButton && (
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component appears
          exit={{ opacity: 0, y: -20 }} // Animation when component exits
          transition={{ duration: 0.3 }} // Animation duration
          className="absolute right-0 top-20"
        >
          <Button
            content="Logout"
            onClick={handleLogout}
          />
        </motion.div>
      )}
    </div>
  );
}
function LoginButton() {
  const { loginWithPopup, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <Button content="Loading..." />;
  }

  return (
    <div className="align-center gap-4 hidden sm:flex">
      {isAuthenticated ? <Profile /> : (
        <div>
          <Button content="Login/SignUp" onClick={() => loginWithPopup()} />
        </div>
      )}
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
