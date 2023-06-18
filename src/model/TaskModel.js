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

// Delete One Task

export const deleteTaskByID = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};

// Delete Many Tasks
// ids should be an array
export const deleteManyTasks = (ids) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
