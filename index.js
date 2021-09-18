const express = require("express");
const mongoose = require("mongoose");
const conn = require("./config/conn");
const app = express();
app.use(express.json());
app.use("/api/register", require("./routes/register/register"));
app.use("/api/login", require("./routes/login/login"));
app.use("/api/verify", require("./routes/verify/verifySupplier"));
app.use("/api/product", require("./routes/product/product"));
app.use("/api/cart", require("./routes/cart/cart"));
app.use("/api/order", require("./routes/order/order"));
app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log("Server Working great!!");
});
