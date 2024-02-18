import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiCollapseVertical } from "react-icons/bi";
import { BiCollapseAlt } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

function Step({ step, checked }) {
  const [check, setCheck] = useState(false);

  return (
    <motion.li
      onClick={() => setCheck(!check)}
      className={`rounded-lg p-1 border-white border text-sm ${
        (check || checked) ? "bg-blue-500 text-black" : ""
      }`}
      whileTap={{ scale: 0.95 }}
      style={{ cursor: "pointer" }}
      whileHover={{ scale: 1.05 }}
    >
      {step}
    </motion.li>
  );
}

function TodoStep({ task }) {
  const [check, setCheck] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className={`my-4 p-3 rounded-lg ${check ? "line-through" : ""}`}
      style={{ backgroundColor: check ? "#000" : "rgb(21,94,117)" }}
      animate={{ backgroundColor: check ? "#000" : "rgb(21,94,117)" }}
      initial={{ backgroundColor: "#000" }} // Set initial color
      transition={{ duration: 0.2 }} // Set the duration of the transition
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <div>
        <div className="flex gap-3 justify-stretch">
          <div onClick={()=>{setCheck(!check)}} style={{ cursor: "pointer" }}>
            {check
              ? <IoMdCheckmarkCircle size={24} />
              : <IoMdCheckmarkCircleOutline size={24} />}
          </div>
          <div className={` cursor-pointer `}>
            <h3 onClick={() => setCheck(!check)} className="text-sm font-bold">
              {task.title}
            </h3>
            <ul className="ml-4 space-y-2">
              {task.steps?.map((step) => <Step step={step} checked={check} />)}
            </ul>
          </div>
          <motion.div
            className="ml-auto"
            whileHover={{ scale: 1.1, opacity: 0.8 }}
          >
            {hover ? <FaEdit /> : ""}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function TodoTasks({ tasks, title }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="p-3 min-h-fit border-b-white border rounded-lg w-[75vw] mt-10">
      <div
        className="flex items-center gap-3 "
        onClick={() => setCollapse(!collapse)}
      >
        {collapse ? <BiCollapseVertical /> : <BiCollapseAlt />}
        <h1 className="text-md font-bold">
          {title}
        </h1>
      </div>
      <AnimatePresence>
        {collapse && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            {tasks.map((task) => <TodoStep task={task} />)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TodoPP({ json, input }) {
  return (
    <div className="text-white flex flex-col justify-center items-center ">
      <TodoTasks tasks={json.tasks} title={input} />
    </div>
  );
}

export default TodoPP;
