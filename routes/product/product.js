const express = require("express");
const jwt = require("jsonwebtoken");
const {
  createProduct,
  getProduct,
} = require("../../controllers/productController");
const { create_Product } = require("../../middleware/createProduct");
const { get_Product } = require("../../middleware/getProduct");
const router = express.Router();
router
  .post("/add", create_Product, createProduct)
  .get("/getall", get_Product, getProduct);
module.exports = router;
