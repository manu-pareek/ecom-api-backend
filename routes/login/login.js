const express = require("express");
const {
  userLogin,
  supplierLogin,
  adminLogin,
} = require("../../controllers/loginController");
const router = express.Router();
router.get("/user", userLogin);
router.get("/supplier", supplierLogin);
router.get("/admin", adminLogin);
module.exports = router;
