const express = require("express");
const { orderController } = require("../../controllers/orderController");
const { addOrder } = require("../../middleware/addOrder");
const router = express.Router();
router.post("/", addOrder, orderController);

module.exports = router;
