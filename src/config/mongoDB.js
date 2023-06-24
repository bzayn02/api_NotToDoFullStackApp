import mongoose from 'mongoose';

export const mongoConnect = async () => {
  try {
    const dbLink =
      process.env.NODE_ENV !== 'production'
        ? 'mongodb://localhost:27017/TaskManager'
        : process.env.MONGO_CLIENT;

    return mongoose.connect(dbLink);
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};
