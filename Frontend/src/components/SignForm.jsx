import React, { useState } from 'react';
import { SignIn, SignUp } from "./SignUpIn";
import { motion, AnimatePresence} from 'framer-motion';

function SignForm() {
  const [activeTab, setActiveTab] = useState('signIn');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" min-h-80 flex justify-center items-center">
      <div className="text-white w-fit">
        <div className="flex justify-center items-center gap-1">
          <motion.button
            onClick={() => handleTabChange('signIn')}
            whileTap={{scale:0.9}}
            transition={{ duration: 0.2 }}
            className={`shadow-sky-800 font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline italic ${
              activeTab === 'signIn' ? 'bg-blue-700 text-white' : 'bg-blue-200  text-black'
            }`}
          >
            Log In
          </motion.button>
          <motion.button
            onClick={() => handleTabChange('signUp')}
            whileTap={{scale:0.9}}
            transition={{ duration: 0.2 }}
            className={`shadow-sky-800 font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline italic ${
              activeTab === 'signUp' ? 'bg-blue-700 text-white' : 'bg-blue-200 text-black '
            }`}
          >
            Register
          </motion.button>
        </div>
        <motion.div>
          {activeTab === 'signIn' ? <SignIn /> : <SignUp />}
        </motion.div>
      </div>
    </div>
  );
}

export default SignForm;
