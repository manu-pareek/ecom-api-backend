const jwt = require("jsonwebtoken");

module.exports.create_Product = (req, res, next) => {
  if (req.headers.authorization) {
    const data = jwt.verify(req.headers.authorization, "random");

    if (data.role !== "admin" && data.role != "supplier") {
      return res
        .status(500)
        .json({ message: "Only Admin/Supplier can Add Product!" });
    }
    req.user = data;
    next();
  } else {
    res.status(500).json({ message: "Token is Required!" });
  }
};
