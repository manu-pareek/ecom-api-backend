const jwt = require("jsonwebtoken");
const { Product } = require("../modals/modal");

module.exports.createProduct = async (req, res) => {
  try {
    const data = await Product.create({
      ...req.body,
      supplier_id: req.user._id,
    });
    res.status(200).json({
      message: "Product Created Successfully!",
      data: data,
    });
  } catch (err) {
    if (err)
      res.status(500).json({
        message: "error",
        error: err,
      });
  }
};
module.exports.getProduct = async (req, res) => {
  try {
    switch (req.user.role) {
      case "admin": {
        const data = await Product.find();
        res.status(200).json({
          message: "Product Fetch Successfully!",
          data: data,
        });
      }
      case "supplier": {
        const data = await Product.find({ created_by: req.user._id });
        res.status(200).json({
          message: "Product Fetch Successfully!",
          data: data,
        });
      }
      case "user": {
        const data = await Product.find();
        res.status(200).json({
          message: "Product Fetch Successfully!",
          data: data,
        });
      }
    }
  } catch (err) {
    if (err)
      res.status(500).json({
        message: "error",
        error: err,
      });
  }
};
