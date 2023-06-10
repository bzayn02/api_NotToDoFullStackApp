import mongoose from 'mongoose';

// Schema creates table
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  hour: { type: Number, required: true },
  type: {
    type: String,
    required: true,
    default: 'entry',
  },
});

// Creating table name tasks

export default mongoose.model('Task', taskSchema);
