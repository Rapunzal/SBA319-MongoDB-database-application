import Product from "../models/product.js";

export async function getProducts(req, res) {
  const listProduct = await Product.find({});
  console.log(listProduct);
  res.status(200).json({ message: "Success", data: { listProduct } });
}

export async function addProduct(req, res) {
  try {
    const newProduct = new Product({
      productName: req.body.productName,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      quantity: req.body.quantity,
    });
    await newProduct.save();
    console.log(newProduct);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
  res.send("product added");
}

export async function updateProduct(req, res) {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json("updated successfully");
  } catch (e) {
    console.log(e);
  }
}

export async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    console.log("deleted successfully");
    res.json("deleted successfully");
  } catch (e) {
    console.log(e);
  }
}
