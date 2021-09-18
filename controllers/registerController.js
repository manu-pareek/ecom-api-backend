const { Admin, User, Supplier } = require("../modals/modal");
const bcrypt = require("bcryptjs");
module.exports.adminRegister = async (req, res) => {
  try {
    let data = req.body;
    const admin = await Admin.find({ email: data.email });
    if (admin.length > 0)
      res.status(500).json({ message: "User Already Exists!" });
    else {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);
      data = await Admin.create({ ...req.body, password: password });
      res.status(200).json({
        message: "User created Successfully!",
        data: data,
      });
    }
  } catch (err) {
    if (err) res.status(500).json(err);
  }
};
module.exports.supplierRegister = async (req, res) => {
  try {
    let data = req.body;
    const supplier = await Supplier.find({ email: data.email });
    if (supplier.length > 0)
      res.status(500).json({ message: "User Already Exists!" });
    else {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);
      data = await Supplier.create({ ...req.body, password: password });
      res.status(200).json({
        message: "User created Successfully!",
        data: data,
      });
    }
  } catch (err) {
    if (err) res.status(500).json(err);
  }
};
module.exports.userRegister = async (req, res) => {
  try {
    let data = req.body;
    const user = await User.find({ email: data.email });
    if (user.length > 0)
      res.status(500).json({ message: "User Already Exists!" });
    else {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);
      data = await User.create({ ...req.body, password: password });
      res.status(200).json({
        message: "User created Successfully!",
        data: data,
      });
    }
  } catch (err) {
    if (err) res.status(500).json(err);
  }
};
