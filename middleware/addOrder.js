const jwt = require("jsonwebtoken");
module.exports.addOrder = (req, res, next) => {
  if (req.headers.authorization) {
    const data = jwt.verify(req.headers.authorization, "random");
    if (data.role === "user") {
      req.user = data;
      next();
    } else {
      res.status(500).json({
        message: "Error! Only User can Place Orders!",
      });
    }
  }
};
