const jwt = require("jsonwebtoken");
module.exports.authVerify = (req, res, next) => {
  if (req.headers.authorization) {
    const data = jwt.verify(req.headers.authorization, "random");

    if (data.role !== "admin") {
      return res
        .status(500)
        .json({ message: "Only Admin can Verify Supplier!" });
    }
    req.user = data;
    next();
  } else {
    res.status(500).json({ message: "Token is Required!" });
  }
};
