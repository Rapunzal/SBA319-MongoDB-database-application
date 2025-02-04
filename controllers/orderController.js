import Order from "../models/order.js";

//Get orders
export async function getOrders(req, res, next) {
  const listOrder = await Order.find({});
  console.log(listOrder);
  if (listOrder.length > 0) {
    res.status(200).json({ message: "Success", data: { listOrder } });
  } else {
    next();
  }
}

//addOrder POST request
export async function addOrder(req, res, next) {
  try {
    const newOrder = new Order({
      orderId: req.body.orderId,
      user: req.body.user,
      products: req.body.products,
      totalNumber: req.body.totalNumber,
    });
    await newOrder.save();
    console.log(newOrder);
    res.send("Order placed succesfully");
  } catch (e) {
    console.log(e);
    next(e);
    // res.send(e);
  }
}

//UPdate order PATCH
export async function updateOrder(req, res, next) {
  try {
    await Order.findByIdAndUpdate(req.params.id, req.body);
    res.json("order updated successfully");
  } catch (e) {
    console.log(e);
    next(e);
  }
}

//Delete Order
export async function deleteOrder(req, res, next) {
  try {
    await Order.findByIdAndDelete(req.params.id);
    console.log("order deleted successfully");
    res.json("Order deleted successfully");
  } catch (e) {
    console.log(e);
    next(e);
  }
}
