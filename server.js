import express from 'express';

import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();
const PORT = 8000;

import path from 'path';

const __dirname = path.resolve();
// console.log(__dirname);
// console.log(process.env);

// Connecting Mongo database
import { mongoConnect } from './src/config/mongoDB.js';
mongoConnect();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/build'));

// API endpoints
// Task Router
import taskRouter from './src/routers/taskRouter.js';

// Routers
app.use('/api/v1/task', taskRouter);

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

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
