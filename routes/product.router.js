// routes/videoRoutes.js
const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.post("/product", productController.addProduct);
router.get("/product", productController.getAllProducts);
module.exports = router;
