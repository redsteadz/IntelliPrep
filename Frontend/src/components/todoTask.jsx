import { useState } from "react";
import { BiCollapseVertical } from "react-icons/bi";
import { BiCollapseAlt } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";

function TodoStep({ task }) {
  const [check, setCheck] = useState(false);
  return (
    <div className="p-3 bg-cyan-700 rounded-lg">
      <div>
        <div
          onClick={() => setCheck(!check)}
          className="flex gap-3"
        >
          {check
            ? <IoMdCheckmarkCircle size={24} />
            : <IoMdCheckmarkCircleOutline size={24} />}
          <div className={` ${check ? "line-through" : ""}`}>
            <h3>
              {task.title}
            </h3>
            <ul className="ml-4 space-y-2">
              {task.steps?.map((step) => (
                <li className="rounded-lg p-1 border-white border">{step}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodoTasks({ task }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="p-3 min-h-fit bg-cyan-600 rounded-lg w-[75vw] mt-10">
      <div
        className="flex items-center gap-3 "
        onClick={() => setCollapse(!collapse)}
      >
        {collapse ? <BiCollapseVertical /> : <BiCollapseAlt />}
        <h1 className="text-xl font-bold">
          ZA TITLE
        </h1>
      </div>
      <div className={`${collapse ? "hidden" : "block"}`}>
        <TodoStep task={task} />
      </div>
    </div>
  );
}

function TodoPP({ json }) {
  return (
    <div className="text-white flex flex-col justify-center items-center ">
      {json.tasks.map((task) => <TodoTasks task={task} />)}
    </div>
  );
}

export default TodoPP;
