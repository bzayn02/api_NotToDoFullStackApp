import express from 'express';
import { createTask, readTasks, switchTask } from '../model/TaskModel.js';
const router = express.Router();

// Read data from database and return to the client
router.get('/', async (req, res) => {
  // Get data from DB

  const taskList = await readTasks();
  res.json({
    message: 'Here are the lists of tasks.',
    tasks: taskList,
  });
});

// Receive data from client and create new record in database
router.post('/', async (req, res) => {
  try {
    const result = await createTask(req.body);

    result?._id
      ? res.json({
          status: 'Success',
          message: 'New task has been added successfully.',
        })
      : res.json({
          status: 'Error',
          message: 'New task has been added successfully.',
        });
  } catch (error) {
    res.json({
      status: 'Error',
      message: 'New task has been added successfully.',
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
          status: 'Success',
          message: 'Type of data updated',
        })
      : res.json({
          status: 'Error',
          message: 'The task did not switch.',
        });
  } catch (error) {
    res.json({
      status: 'Error',
      message: 'The task did not switch. Something is wrong.',
    });
  }
});

// Delete one or many records from  data database based on info received
router.delete('/', (req, res) => {
  const { _id } = req.body;
  console.log(_id);

  // deleting data from fakedb

  fakeDB = fakeDB.filter((item) => item._id !== _id);

  res.json({
    message: 'The task is deleted successfully.',
    newData: fakeDB,
  });
});

// Router.all
// router.all("/", (req,res)=>{
//   console.log("This router takes all the methods as app.use")
// })

export default router;
