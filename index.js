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
mongoose
  .connect(connectionString)
  .then(() => {
    console.log(`Mongo db connected`);
  })
  .catch((e) => {
    console.log(`${e}`);
  });

app.use(router);
app.use("/products", product);
app.use("/users", user);
app.use("/order", order);

app.all("*", (req, res, next) => {
  const err = new Error(`can't find ${req.originalUrl} on the server`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  res
    .status(error.statusCode)
    .json({ status: error.status, message: error.message });
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
