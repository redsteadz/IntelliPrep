function generateTaskJson(userInput) {

  const template = `
Only make a JSON file that breaks down the task into smaller and simpler steps, Do not write anything other than the JSON format given, this is made by breaking down the task into more achievable and simpler tasks which include the steps to achieve those tasks. Do not force information and or make guesses. Only make the JSON and nothing else, No code, No extra paragraph. Start with the JSON and end with the JSON.
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

  const apiUrl = "http://localhost:11434/api/generate";
  const data = {
    model: "orca-mini",
    prompt: template + "\nuser_input:" + userInput,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
        const jsonStrings = data.trim().split("\n");

        // Parse each JSON string individually
        const parsedData = jsonStrings.map((jsonString) =>
          JSON.parse(jsonString)
        );
        const json = parsedData.map((e) => e.response).join("");

        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Example usage
// const userInput =
//   "Watch the lecture english miss uploaded and do the assignment";
//
// generateTaskJson(userInput)
//   .then((json) => {
//     console.log("Formatted JSON:", json);
//     // You can use the json data as needed
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

module.exports = generateTaskJson;
