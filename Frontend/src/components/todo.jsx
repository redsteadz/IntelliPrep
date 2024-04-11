import { GiArtificialIntelligence } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";
import TodoPP from "./todoTask";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

function TodoStep({ step }) {
  return (
    <li className="flex items-center gap-2">
      <FaRegCheckCircle />
      <h4>{step}</h4>
    </li>
  );
}

function Todo({ tasks }) {
  return (
    <div className="w-[100%] h-[100%] bg-gray-800 my-4">
      <div className="ml-3">
        <h1 className="text-2xl relative font-bold after:absolute after:bottom-0 
        after:left-0 after:w-72 after:h-[3px] after:bg-yellow-500">
          {tasks.title}
        </h1>
        <div>
          <ul>
            {tasks.steps.map((step) => <TodoStep step={step} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TodoList({ jsonState }) {
  return (
    <div className="w-[75vw] mt-10">
      <h1 className="text-4xl relative font-bold after:absolute after:bottom-0 
        after:left-0 after:w-[100%] after:h-[3px] after:bg-blue-500">
        Today
      </h1>
      {jsonState !== null
        ? (
          jsonState.map((tasks) => (
            <div>
              {tasks.name}
            </div>
          ))
          // console.log(jsonState)
        )
        : <p>Such empty</p>}
    </div>
  );
}

function TodoInput({ input, setInput, addTask }) {
  const [toggleAI, setToggleAI] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.target.value = "";
      addTask(input);
    }
  };

  return (
    <div className="mt-12 flex flex-row items-center gap-1">
      <div className="rounded-lg min-w-72 bg-gray-700">
        <input
          className="w-full p-2 rounded-md bg-transparent text-gray-50 placeholder:text-gray-500"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter Task"
        />
      </div>
      <button>
        <FaPlusCircle className="text-blue-100" size={24} />
      </button>
      <button onClick={() => setToggleAI(!toggleAI)}>
        <GiArtificialIntelligence
          className={`${toggleAI ? "text-yellow-500" : "text-gray-500"}`}
          size={24}
        />
      </button>
    </div>
  );
}

function TodoPage() {
  const { isAuthenticated, isLoading,user } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/" />;
  const [input, setInput] = useState("");
  const [jsonState, setJsonState] = useState(null);
  const [text, setText] = useState("");
  const fetchAndUpdateState = async () => {
    try {
      const json = await axios.get("http://localhost:3100/tasks", {
        headers: {
          Authorization: user.sub,
        },
      });
      try {
        const jsonObject = json.data;
        console.log("JSON data:", jsonObject);
        setJsonState(jsonObject);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addTask = async (input) => {
    try {
      await axios.post("http://localhost:3100/tasks", {
        prompt: input,
      }, {
        headers: {
          Authorization: user.sub,
        },
      });
      // Wait 3 seconds before fetching updated data
      setTimeout(fetchAndUpdateState, 1000);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  useEffect(() => {
    fetchAndUpdateState();
  }, []);

  return (
    isAuthenticated &&
    (
      <div className="text-white flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center align-center">
          <TodoInput
            input={input}
            setInput={setInput}
            addTask={addTask}
          />
        </div>
        {jsonState
          ? jsonState.map((val) => <TodoPP json={val} input={val.prompt} />)
          : <p>WOW Such empty</p>}
      </div>
    )
  );
}

export default TodoPage;
