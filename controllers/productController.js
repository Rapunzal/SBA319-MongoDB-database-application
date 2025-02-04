import Product from "../models/product.js";

//Get list of products
export async function getProducts(req, res, next) {
  const listProduct = await Product.find({});
  console.log(listProduct);
  if (listProduct.length > 0) {
    res.status(200).json({ message: "Success", data: { listProduct } });
  } else {
    // next("No data")
    res.send("No data found");
  }
}

//get products by id
export async function getProductById(req, res, next) {
  console.log(req.params.id);
  const product = await Product.findById(req.params.id);
  console.log(product);
  if (product) {
    res.status(200).json({ message: "Success", data: { product } });
  } else {
    // next("No data")
    res.send("No data found");
  }
}

//search product by name
export async function searchProductByName(req, res) {
  console.log(req.query.productName);
  const listProduct = await Product.find({
    productName: req.query.productName,
  });
  console.log(listProduct);
  res.status(200).json({ message: "Success", data: { listProduct } });
}

//Add Product POST Rrequest
export async function addProduct(req, res, next) {
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
    res.send("product added successfully");
  } catch (e) {
    console.log(e);
    next(e);
  }
}

//Update product
export async function updateProduct(req, res, next) {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json("updated successfully");
  } catch (e) {
    console.log(e);
    next(e);
  }
}

//Delete product
export async function deleteProduct(req, res, next) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    console.log("deleted successfully");
    res.json("deleted successfully");
  } catch (e) {
    console.log(e);
    next(e);
  }
}

//To display all the indexes on Product
export async function getIndexes() {
  try {
    const indexes = await Product.collection.getIndexes();
    console.log(indexes);
  } catch (err) {
    console.error(err);
  }
}
