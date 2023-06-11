import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;

// Connecting Mongo database
import { mongoConnect } from './src/config/mongoDB.js';
mongoConnect();

// Middleware
app.use(express.json());
app.use(cors());

// API endpoints
// Task Router
import taskRouter from './src/routers/taskRouter.js';

// Routers
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
