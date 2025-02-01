import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/product.js";
import product from "./routes/product.js";
import user from "./routes/user.js";
import order from "./routes/order.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

const connectionString = process.env.MONGO_URI;
mongoose.connect(connectionString).then(() => {
  console.log(`Mongo db connected`);
});

app.use(router);
app.use("/products", product);
app.use("/user", user);
app.use("/order", order);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
