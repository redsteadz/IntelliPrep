import { GiArtificialIntelligence } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

import TodoPP from "./todoTask";
import { useEffect, useState } from "react";
// import  generateTaskJson from "./generateTaskJSON";

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
            {
              tasks.steps.map((step) => <TodoStep step={step} />)
            }
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
      {
        jsonState !== null ? (
          jsonState.tasks.map((tasks) => <Todo tasks={tasks} />)
          // console.log(jsonState)
        ): <p>Such empty</p>
      }
    </div>
  );
}

function TodoInput({ input, setInput, setJsonState, fetchAndUpdateState }) {
  const [toggleAI, setToggleAI] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.target.value = "";
      fetchAndUpdateState(input);
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
  function generateTaskJson(userInput) {
    const template = `
You will only make JSON, No other text surrounding it is acceptable in anyway THIS IS CRITICAL 
The text will compose of a break down of a task given by a user.

The format is; {
  "tasks": [
    {
      "title": ##TITLE,
      "steps": [
        ##STRING_OF_STEPS
      ]
   },
    {
      "title": ##TITLE,
      "steps": [
        ##STRING OF STEPS
      ]
   }
    ...
  ]
}
No other format is accepted, Only this format is accepted.
`;

    // const apiUrl = "http://localhost:11434/api/generate";
    const apiUrl = "http://localhost:3000/test";
    const data = {
      model: "orca-mini",
      prompt: template + "\nuser_input:" + userInput,
    };

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    };

    return new Promise((resolve, reject) => {
      fetch(apiUrl, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((data) => {
          // Split the response string into an array of JSON strings
          // const jsonStrings = data.trim().split("\n");
          //
          // // Parse each JSON string individually
          // const parsedData = jsonStrings.map((jsonString) =>
          //   JSON.parse(jsonString)
          // );
          // const json = parsedData.map((e) => e.response).join("");

          // resolve(json);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  const [input, setInput] = useState("");
  const [jsonState, setJsonState] = useState(null);
  const [text, setText] = useState("");
  const fetchAndUpdateState = async (userInput) => {
    try {
      const json = await generateTaskJson(userInput);
      try {
        const jsonObject = JSON.parse(json);
        setText(userInput);
        setJsonState(jsonObject);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="text-white flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center align-center">
        <TodoInput
          input={input}
          setInput={setInput}
          setJsonState={setJsonState}
          fetchAndUpdateState={fetchAndUpdateState}
        />
      </div>
      {jsonState ? <TodoPP json={jsonState} input={text}/> : <p> WOW Such empty </p>}
    </div>
  );
}

export default TodoPage;
