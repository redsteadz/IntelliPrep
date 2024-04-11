import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Testy from "./model/Testy.js";
import bcrypt from "bcrypt";

const app = express();

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL);

app.get('/tasks', async (req, res) => {
  const sub  = req.headers.authorization;
  try {
    console.log(sub); // Changed to id instead of sub
    const tasks = await Testy.find({ sub: sub }); // Changed to use id
    res.status(200).json(tasks);
  } catch (err) {
    console.log("Error", err); // Log the error object
    res.status(500).send(err);
  }
});

app.post("/tasks", async (req, res) => {  
  const { sub, task } = req.body;
  try {
    const newTask = await Testy.create({ sub, task });
    res.status(200).json(newTask);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3100, () => {
  console.log("Server started on 3100");
});
