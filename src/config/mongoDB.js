import mongoose from 'mongoose';

export const mongoConnect = async () => {
  try {
    const con = await mongoose.connect(
      'mongodb+srv://nagarkotibezay02:yKwPwgWY9PzRkCQb@cluster0.or26tsp.mongodb.net/'
    );
    // console.log(con);
    con && console.log('Mongo database is connected!');
  } catch (error) {
    console.log(error.message);
  }
};
