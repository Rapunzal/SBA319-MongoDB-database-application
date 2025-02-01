import Order from "../models/order.js";

export async function getOrders(req, res) {
  const listOrder = await Order.find({});
  console.log(listOrder);
  res.status(200).json({ message: "Success", data: { listOrder } });
}

//addOrder
export async function addOrder(req, res) {
  try {
    const newOrder = new Order({
      orderId: req.body.orderId,
    });
    await newOrder.save();
    console.log(newOrder);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
  res.send("Order placed succesfully");
}

export async function updateOrder(req, res) {
  try {
    await Order.findByIdAndUpdate(req.params.id, req.body);
    res.json("order updated successfully");
  } catch (e) {
    console.log(e);
  }
}

export async function deleteOrder(req, res) {
  try {
    await Order.findByIdAndDelete(req.params.id);
    console.log("order deleted successfully");
    res.json("Order deleted successfully");
  } catch (e) {
    console.log(e);
  }
}
