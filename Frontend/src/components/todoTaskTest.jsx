import { useState } from "react";
import { BiCollapseVertical } from "react-icons/bi";
import { BiCollapseAlt } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";

function TodoStep() {
  const [check, setCheck] = useState(false);
  return (
    <div className="mt-2 p-3 bg-cyan-700 rounded-lg">
      <div>
        <div
          onClick={() => setCheck(!check)}
          className="flex gap-3"
        >
          {check ? <IoMdCheckmarkCircle size={24} /> : <IoMdCheckmarkCircleOutline size={24}/>}
          <div className={` ${check ? "line-through" : ""}`}>
            <h3 >
              This is the subTitle
            </h3>
            <ul className="ml-4 space-y-2">
              <li className="rounded-lg p-1 border-white border">Step 1</li>
              <li className="rounded-lg p-1 border-white border"> Step 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodoTasks() {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="p-3 min-h-fit bg-cyan-600 rounded-lg w-[75vw] mt-10">
      <div
        className="flex items-center gap-3 "
        onClick={() => setCollapse(!collapse)}
      >
        {collapse ? <BiCollapseVertical /> : <BiCollapseAlt />}
        <h1 className="text-xl font-bold">
          This is a title sama
        </h1>
      </div>
      <div className={`${collapse ? "hidden" : "block"}`}>
        <TodoStep />
      </div>
    </div>
  );
}

function TodoPP() {
  return (
    <div className="text-white flex flex-col justify-center items-center ">
      <TodoTasks />
    </div>
  );
}

export default TodoPP;
