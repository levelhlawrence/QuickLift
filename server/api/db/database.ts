import mongoose from "mongoose";

const quickLiftDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_CONNECTION!);
    console.log(`[mongodb] Database connected at ${conn.connection.host}`);
  } catch (err: any) {
    console.log("Error connecting to MongoDB Atlas:", err.message);
  }
};

export default quickLiftDB;
