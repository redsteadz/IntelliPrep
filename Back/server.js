import express from "express";
import fs from "fs";
import mongoose from "mongoose";
import cors from "cors";
import Testy from "./model/Testy.js";
import TaskStack from "./model/TaskStack.js";
import bcrypt from "bcrypt";

const app = express();

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL);

// To create a TaskStack you must first create tasks and then assign their id's in an array to ['tasks']
// prompt can be chosen by the user

async function getData() {
  return new Promise((resolve, reject) => {
    fs.readFile("sample.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading JSON file:", err);
        reject(err);
        return;
      }
      try {
        data = JSON.parse(data);
        resolve(data);
      } catch (error) {
        console.error("Error parsing JSON data:", error);
        reject(error);
      }
    });
  });
}

async function generateTaskStack(sub, prompt) {
  const data = await getData();
  const tasks = data.tasks;
  const newTaskStack = await TaskStack({ sub, prompt, tasks });
  newTaskStack.save();
  return newTaskStack;
}

// generateTaskStack("sample");

app.get("/tasks", async (req, res) => {
  const sub = req.headers.authorization;
  try {
    const tasks = await TaskStack.find({ sub: sub }); // Changed to use id
    res.status(200).json(tasks);
  } catch (err) {
    console.log("Error", err); // Log the error object
    res.status(500).send(err);
  }
});

app.post("/tasks", async (req, res) => {
  const { prompt } = req.body;
  const sub = req.headers.authorization;

  try {
    // const newTask = await Testy.create({ sub, prompt });
    const newTaskStack = await generateTaskStack(sub, prompt);
    console.log("New task stack created:", newTaskStack);
    res.status(200).json(newTaskStack);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.listen(3100, () => {
  console.log("Server started on 3100");
});
