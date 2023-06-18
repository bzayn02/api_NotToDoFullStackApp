import { Schema, model } from 'mongoose';

// Schema creates table
const taskSchema = new Schema({
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

export default model('Task', taskSchema);
