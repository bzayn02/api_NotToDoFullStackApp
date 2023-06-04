import express from 'express';
const router = express.Router();

// Read data from database and return to the client
router.get('/', (req, res) => {
  res.json({
    message: 'To Do Get Method',
  });
});

// Receive data from client and create new record in database
router.post('/', (req, res) => {
  res.json({
    message: 'To Do Post Method',
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
