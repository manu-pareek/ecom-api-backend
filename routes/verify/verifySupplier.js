const express = require("express");
const jwt = require("jsonwebtoken");
const { verifySupplier } = require("../../controllers/verifySupplier");
const { authVerify } = require("../../middleware/authVerify");
const router = express.Router();
router.get("/supplier/:id", authVerify, verifySupplier);
module.exports = router;
