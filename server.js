import express from 'express';

const app = express();
const PORT = 8000;

// API endpoints
import taskRouter from './src/routers/taskRouter.js';

app.use('/api/v1/task', taskRouter);

// Should be at the bottom
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Server running as normal.',
  });
});

// Server listening the port
app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
