import mongoose from "mongoose";

const { Schema } = mongoose;

// Define Task schema
const taskStack = new Schema({
  prompt: { type: String, required: true },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

// Export Task model
export default mongoose.model("TaskStack", taskStack);
