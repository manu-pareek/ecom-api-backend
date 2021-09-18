const { Admin, Supplier } = require("../modals/modal");
module.exports.verifySupplier = async (req, res) => {
  try {
    const data = await Supplier.findByIdAndUpdate(
      req.params.id,
      { is_verified: true, verified_by: req.user._id },
      { new: true }
    );
    if (data) {
      res.status(200).json({
        message: "Verified Successfully!",
        data: data,
      });
    } else {
      res.status(500).json("Error Verifying!");
    }
  } catch (err) {
    if (err) res.status(500).json(err);
  }
};
