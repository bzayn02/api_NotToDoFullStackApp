import express from 'express';

import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

import path from 'path';

const __dirname = path.resolve();
// console.log(__dirname);
// console.log(process.env);

// Connecting Mongo database

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/build'));

// API endpoints
// Task Router
import taskRouter from './src/routers/taskRouter.js';
import mongoose from 'mongoose';

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

const dbLink =
  process.env.NODE_ENV !== 'production'
    ? 'mongodb://localhost:27017/TaskManager'
    : process.env.MONGO_CLIENT;

// Server listening the port
mongoose
  .connect(dbLink)
  .then(() => {
    console.log('MongoDB is connected');
    app.listen(PORT, (error) => {
      error
        ? console.log(error.message)
        : console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
