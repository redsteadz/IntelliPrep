import mongoose from "mongoose";

const { Schema } = mongoose;

// Define Task schema
const testy = new Schema({
  name: {
    type: String,
    required: true
  },
  sub: {
    type: String,
    required: true
  }
});

// Export Task model
export default mongoose.model("Testy", testy);
