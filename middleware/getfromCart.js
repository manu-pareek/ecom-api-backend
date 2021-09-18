const jwt = require("jsonwebtoken");

module.exports.get_cart = (req, res, next) => {
  if (req.headers.authorization) {
    const data = jwt.verify(req.headers.authorization, "random");
    if (data.role === "admin" || data.role === "user") {
      req.user = data;
      next();
    } else {
      res.status(500).json({
        message: "Error!",
        error: "Only User/Admin can View Cart!",
      });
    }
  }
};
