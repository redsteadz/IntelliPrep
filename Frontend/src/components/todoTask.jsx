import { useState, useRef } from "react";
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

function TodoStep({ task, params, draggedItem, dragOverItem, setTask, oldTask}) {
  const [check, setCheck] = useState(false);
  const [hover, setHover] = useState(false);
  
  const handeDragStart = (e, params) =>{
    draggedItem.current = params
    dragOverItem.current = e.target 
    dragOverItem.current.addEventListener("dragend", handleDragEnd)
    console.log(params);
  }
  
  const handleDragEnter = (e, id) =>{
    e.preventDefault();
    console.log("over", id);
    if (draggedItem != id){
      setTask(oldTask => {
        let newTask = JSON.parse(JSON.stringify(oldTask));
        console.log(newTask);
        let temp = newTask[draggedItem.current]
        // console.log(temp);
        newTask[draggedItem.current] = newTask[id] 
        newTask[id] = temp
        // newTask[draggedItem].splice(id, 0, taskList[id])
        draggedItem.current = params
        return newTask;
      })
    }
  }

  const handleDragEnd = (e, params) =>{
    dragOverItem.current.removeEventListener("dragend", handleDragEnd)
    dragOverItem.current = null
    draggedItem.current = null
    console.log("over");
  }

  return (
    <motion.div
      draggable
      className={`my-7 p-3 rounded-lg ${check ? "line-through" : ""}`}
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
      onDragStart={(e) => handeDragStart(e, params)}
      onDragEnter={(e) => handleDragEnter(e, params)}
    >
      <div>
        <div className="flex gap-3 justify-stretch">
          <div
            onClick={() => {
              setCheck(!check);
            }}
            style={{ cursor: "pointer" }}
          >
            {check
              ? <IoMdCheckmarkCircle size={24} />
              : <IoMdCheckmarkCircleOutline size={24} />}
          </div>
          <div className={` cursor-pointer `}>
            <h3 onClick={() => setCheck(!check)} className="text-sm font-bold">
              {task.title}
            </h3>
            <ul className="ml-4 space-y-2">
              {task.steps?.map((step, id) => <Step step={step} checked={check} key={id} />)}
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
  const [saveTasks, setSaveTasks] = useState(tasks);
  const draggedItem = useRef();
  const dragOverItem = useRef();

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
            {saveTasks.map((task, id) => <TodoStep  task={task} key={id} params={id} draggedItem={draggedItem} dragOverItem={dragOverItem} setTask={setSaveTasks} oldTask={saveTasks} />)}
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
