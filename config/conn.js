const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://random_user:random_password@cluster0.fpits.mongodb.net/ecom-app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const conn = mongoose.connection;
conn.on("open", () => console.log("Connected to Database Successfully!!"));
conn.on("error", () =>
  console.log("Error Connecting to Database Successfully!!")
);

module.exports = conn;
