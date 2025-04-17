import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      connectTimeoutMS: 90000, // Set connection timeout to 30 seconds
      socketTimeoutMS: 45000, // Set socket timeout to 45 seconds
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the application on connection failure
  }
};
