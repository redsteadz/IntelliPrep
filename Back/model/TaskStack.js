import mongoose from "mongoose";

const { Schema } = mongoose;

// Define Task schema
const taskStack = new Schema({
  sub: {
    type: String,
    required: true,
  },
  prompt: { type: String, required: true },
  tasks: [{
    title: {
      type: String,
      required: true,
    },
    steps: [{
      type: String,
      required: true,
    }],
    description: {
      type: String,
      required: true,
    },
  }],
});

// Export Task model
export default mongoose.model("TaskStack", taskStack);
