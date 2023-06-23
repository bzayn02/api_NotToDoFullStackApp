import mongoose from 'mongoose';

export const mongoConnect = async () => {
  try {
    const con = await mongoose.connect('mongodb://localhost:27017/tasklists');
    // console.log(con);
    con && console.log('Mongo database is connected!');
  } catch (error) {
    console.log(error.message);
  }
};
