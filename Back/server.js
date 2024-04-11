import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL);

app.get("/tasks", (req, res) => {
  try {
      res.send("Hello World!");
  } catch (err ) {
    res.status(500).send(err);
  }
});

app.listen(3100, () => {
  console.log("Server started on 3100");
});
