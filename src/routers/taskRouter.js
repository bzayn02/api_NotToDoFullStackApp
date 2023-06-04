import express from 'express';
const router = express.Router();

let fakeDB = [
  {
    task: 'Coding',
    hr: '33',
    _id: 'asdf',
    type: 'entry',
  },
  {
    task: 'Reading',
    hr: '33',
    _id: 'asdfg',
    type: 'entry',
  },
  {
    task: 'Cooking',
    hr: '33',
    _id: 'asdfga',
    type: 'entry',
  },
  {
    task: 'Youtube',
    hr: '33',
    _id: 'asdfgh',
    type: 'entry',
  },
];

// Read data from database and return to the client
router.get('/', (req, res) => {
  res.json({
    message: 'Here are the lists of tasks.',
    data: fakeDB,
  });
});

// Receive data from client and create new record in database
router.post('/', (req, res) => {
  console.log('got hit');
  fakeDB.push(req.body);
  res.json({
    message: 'New task has been added successfully.',
  });
});

// Update record in database based on the info received
router.put('/', (req, res) => {
  const { _id } = req.body;
  console.log(_id);
  res.json({
    message: 'To Do Put Method',
  });
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

export default router;
