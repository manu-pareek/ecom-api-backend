const { Order, Product } = require("../modals/modal");

module.exports.orderController = async (req, res) => {
  try {
    const products = req.body.products;
    const len = products.length;
    let data = [];
    for (let i = 0; i < len; i++) {
      const temp = await Product.findById(products[i]);
      data.push(temp);
    }

    const order = Order.create({
      products: data,
      order_by: req.user._id,
    });
    res.status(200).json({
      message: "Order Placed Successfully!",
      data: order,
    });
  } catch (err) {
    if (err)
      res.status(500).json({
        message: "Error",
        error: err,
      });
  }
};
