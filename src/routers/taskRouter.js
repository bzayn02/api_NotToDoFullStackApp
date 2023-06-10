import express from 'express';
const router = express.Router();

let fakeDB = [
  {
    task: 'Coding',
    hr: '33',
    _id: '123',
    type: 'entry',
  },
  {
    task: 'Reading',
    hr: '33',
    _id: '321',
    type: 'entry',
  },
  {
    task: 'Cooking',
    hr: '33',
    _id: '456',
    type: 'entry',
  },
  {
    task: 'Youtube',
    hr: '33',
    _id: '654',
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
    data: fakeDB,
  });
});

// Update record in database based on the info received
router.patch('/', (req, res) => {
  const { _id, type } = req.body;
  console.log(_id, type);

  const updatedDB = fakeDB.map((item) => {
    if (item._id === _id) {
      item.type = type;
    }
    return item;
  });
  res.json({
    message: 'Data type updated',
    NewData: updatedDB,
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

// Router.all
// router.all("/", (req,res)=>{
//   console.log("This router takes all the methods as app.use")
// })

export default router;
