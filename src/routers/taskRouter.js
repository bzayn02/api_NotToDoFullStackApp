import express from 'express';
const router = express.Router();

const fakeDB = [];
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
  console.log(req.body);
  fakeDB.push(req.body);
  res.json({
    message: 'New task has been added successfully.',
  });
});

// Update record in database based on the info received
router.put('/', (req, res) => {
  res.json({
    message: 'To Do Put Method',
  });
});

// Delete one or many records from  data database based on info received
router.delete('/', (req, res) => {
  res.json({
    message: 'To Do Delete Method',
  });
});

export default router;
