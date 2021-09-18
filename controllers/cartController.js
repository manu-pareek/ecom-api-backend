const { Cart, Product } = require("../modals/modal");

module.exports.addtoCart = async (req, res) => {
  try {
    const len = req.body.products.length;
    let data = [];
    for (let i = 0; i < len; i++) {
      const temp = await Product.findById(req.body.products[i]);
      data.push(temp);
    }
    let result = [];
    const is_exists = await Cart.findOne({ added_by: req.user._id });
    if (is_exists) {
      let products_updated = [...is_exists.product, ...data];
      result = await Cart.findOneAndUpdate(
        { added_by: req.user._id },
        {
          product: products_updated,
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        message: "Updated Sucessfully!",
        data: result,
      });
    }

    result = await Cart.create({ added_by: req.user._id, product: data });
    return res.status(200).json({
      message: "Success!",
      data: result,
    });
  } catch (err) {
    if (err)
      res.status(500).json({
        message: "error",
        error: err,
      });
    console.log(err);
  }
};
module.exports.getCart = async (req, res) => {
  try {
    if (req.user.role === "user") {
      const data = await Cart.find(req.user._id);
      res.status(200).json({
        message: "Fetch Success!",
        data: data,
      });
    } else if (req.user.role === "admin") {
      const data = await Cart.find({});
      res.status(200).json({
        message: "Fetch Success!",
        data: data,
      });
    }
  } catch (err) {
    if (err)
      res.status(500).json({
        message: "Error!",
        error: err,
      });
  }
};
