import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define Task schema
const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  steps: [{
    type: String,
    required: true
  }],
  description: {
    type: String,
    required: true
  }
});

// Export Task model
export default mongoose.model('Task', taskSchema);
