const jwt = require("jsonwebtoken");
module.exports.add_to_cart = (req, res, next) => {
  if (req.headers.authorization) {
    const data = jwt.verify(req.headers.authorization, "random");
    if (data.role === "user") {
      req.user = data;
      next();
    } else {
      res
        .status(500)
        .json({ message: "Only User can add Product to their Cart!" });
    }
  } else {
    res.status(500).json({
      message: "Error!",
      error: "Token is Required!",
    });
  }
};
