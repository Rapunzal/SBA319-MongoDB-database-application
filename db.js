import mongoose from "mongoose";
import "dotenv/config";

const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString).then(() => {
  console.log(`Mongo db connected`);
});

export default db;
