// Doing queries in model

import TaskSchema from './TaskSchema.js';

// Create / Insert Data in DB

export const createTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

// Read Data From DB

export const readTasks = () => {
  return TaskSchema.find();
};

// Update Data Type

export const switchTask = (_id, type) => {
  // Everything should be passed as object
  return TaskSchema.findByIdAndUpdate(_id, { type });
};
