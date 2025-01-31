import mongoose from "mongoose";
import "dotenv/config";

const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString).then(() => {
  console.log(`Mongo db connected`);
});

// let conn;
// try {
//   conn = await client.connect();
//   console.log("Mongo db connected");
// } catch (e) {
//   console.error(e);
// }

// let db = conn.db("inventory");

export default db;
