const jwt = require("jsonwebtoken");

module.exports.get_Product = (req, res, next) => {
  if (req.headers.authorization) {
    const data = jwt.verify(req.headers.authorization, "random");
    req.user = data;
    next();
  } else {
    res.status(500).json({ message: "Token is Required!" });
  }
};
