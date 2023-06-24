import mongoose from 'mongoose';

export const mongoConnect = async () => {
  try {
    const dbLink =
      process.env.NODE_ENV !== 'production'
        ? 'mongodb://localhost:27017/TaskManager'
        : process.env.MONGO_CLIENT;

    const con = await mongoose.connect(dbLink);
    // console.log(con);
    con && console.log('Mongo database is connected!');
  } catch (error) {
    console.log(error.message);
  }
};
