const { Admin, User, Supplier } = require("../modals/modal");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
module.exports.adminLogin = async (req, res) => {
  try {
    const data = await Admin.findOne({ email: req.body.email });
    const password_match = await bcrypt.compare(
      req.body.password,
      data.password
    );

    if (data) {
      if (data.email === req.body.email && password_match) {
        const token = jwt.sign(
          {
            _id: data._id + "",
            role: "admin",
          },
          "random"
        );
        res.status(200).json({ message: "Login Successful!", token });
      } else
        res.status(500).json({
          message: "Login Failed! Pls enter Correct Email/Password ..",
        });
    } else {
      res.status(500).json({ message: "User Does not exist, pls signup!" });
    }
  } catch (err) {
    if (err) res.status(500).json({ message: "error", error: err });
  }
};
module.exports.supplierLogin = async (req, res) => {
  try {
    const data = await Supplier.findOne({ email: req.body.email });
    const password_match = await bcrypt.compare(
      req.body.password,
      data.password
    );

    if (data) {
      if (data.email === req.body.email && password_match) {
        const token = jwt.sign(
          {
            _id: data._id,
            role: "supplier",
          },
          "random"
        );
        res.status(200).json({ message: "Login Successful!", token });
      } else
        res.status(500).json({
          message: "Login Failed! Pls enter Correct Email/Password ..",
        });
    } else {
      res.status(500).json({ message: "User Does not exist, pls signup!" });
    }
  } catch (err) {
    if (err) res.status(500).json({ message: "error", error: err });
  }
};
module.exports.userLogin = async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email });

    const password_match = await bcrypt.compare(
      req.body.password,
      data.password
    );
    console.log(password_match);
    if (data) {
      if (data.email === req.body.email && password_match) {
        const token = jwt.sign(
          {
            _id: data._id,
            role: "user",
          },
          "random"
        );
        res.status(200).json({ message: "Login Successful!", token });
      } else
        res.status(500).json({
          message: "Login Failed! Pls enter Correct Email/Password ..",
        });
    } else {
      res.status(500).json({ message: "User Does not exist, pls signup!" });
    }
  } catch (err) {
    if (err) res.status(500).json({ message: "error", error: err });
  }
};
