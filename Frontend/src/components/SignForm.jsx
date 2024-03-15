import React, { useState } from 'react';
import { SignIn, SignUp } from "./SignUpIn";

function SignForm() {
  const [activeTab, setActiveTab] = useState('signIn');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="text-white w-fit">
        <div className="flex justify-center items-center gap-1">
          <button
            onClick={() => handleTabChange('signIn')}
            className={` shadow-sky-800 font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline italic ${
              activeTab === 'signIn' ? 'bg-blue-700 text-white' : 'bg-blue-200  text-black'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => handleTabChange('signUp')}
            className={` shadow-sky-800 font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline italic ${
              activeTab === 'signUp' ? 'bg-blue-700 text-white' : 'bg-blue-200 text-black '
            }`}
          >
            Register
          </button>
        </div>
        {activeTab === 'signIn' ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}

export default SignForm;
