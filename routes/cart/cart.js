const express = require("express");
const { getCart, addtoCart } = require("../../controllers/cartController");
const { add_to_cart } = require("../../middleware/addtoCart");
const { get_cart } = require("../../middleware/getfromCart");
const router = express.Router();
router.get("/all", get_cart, getCart).post("/add", add_to_cart, addtoCart);
module.exports = router;
