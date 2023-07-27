const Product = require("../models/product");

exports.addProduct = async (req, res) => {
  const { link, title, price } = req.body;

  try {
    const newProduct = new Product({ link, title, price });
    await newProduct.save();
    res.json({
      message: "Product Added Successfully",
      data: {
        productId: newProduct._id,
        title: newProduct.title,
        price: newProduct.price,
        link: newProduct.link,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: "Success Get All Data", data: products });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
