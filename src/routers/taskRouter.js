import express from 'express';
import {
  createTask,
  deleteTaskByID,
  readTasks,
  switchTask,
} from '../model/TaskModel.js';
const router = express.Router();

// Read data from database and return to the client
router.get('/', async (req, res) => {
  // Get data from DB

  const taskList = await readTasks();
  res.json({
    status: 'success',
    message: 'Here are the lists of tasks.',
    taskList,
  });
});

// Receive data from client and create new record in database
router.post('/', async (req, res) => {
  try {
    const result = await createTask(req.body);

    result?._id
      ? res.json({
          status: 'success',
          message: 'New task has been added successfully.',
        })
      : res.json({
          status: 'error',
          message: 'Unable to add the task.',
        });
  } catch (error) {
    res.json({
      status: 'error',
      message: 'Something is wrong, unable to add task.',
    });
  }
});

// Update record in database based on the info received
router.patch('/', async (req, res) => {
  try {
    const { _id, type } = req.body;

    // Update Data in DB
    const result = await switchTask(_id, type);
    console.log(result);

    result?._id
      ? res.json({
          status: 'success',
          message: 'Type of data updated',
        })
      : res.json({
          status: 'error',
          message: 'The task did not switch.',
        });
  } catch (error) {
    res.json({
      status: 'error',
      message: 'The task did not switch. Something is wrong.',
    });
  }
});

// Delete one or many records from  data database based on info received
router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await deleteTaskByID(_id);

    result?._id
      ? res.json({
          status: 'success',
          message: 'The task is deleted successfully.',
        })
      : res.json({
          status: 'error',
          message: 'Unable to delete the task.',
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: 'error',
      message: 'Error deleting task',
    });
  }
});

// Router.all
// router.all("/", (req,res)=>{
//   console.log("This router takes all the methods as app.use")
// })

export default router;
