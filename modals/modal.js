const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Name is Required!"],
  },
  registered_on: {
    type: Date,
    default: Date.now(),
  },
  email: {
    type: String,
    required: [true, "A Email is Required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  role: {
    type: String,
    default: "user",
  },
});
const User = mongoose.model("User", userSchema);

const supplierSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Name is Required!"],
  },
  registered_on: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    default: "supplier",
  },
  email: {
    type: String,
    required: [true, "A Email is Required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  verified_by: {
    type: String,
    default: "",
  },
  verified_on: {
    type: String,
  },
});
const Supplier = mongoose.model("Supplier", supplierSchema);

const adminSchema = mongoose.Schema({
  name: {
    required: [true, "A Name is Required!"],
    type: String,
  },
  registered_on: {
    type: Date,
    default: Date.now(),
  },
  email: {
    type: String,
    required: [true, "A Email is Required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  role: { type: String, default: "admin" },
});
const Admin = mongoose.model("Admin", adminSchema);
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product must have a Name!"],
    },
    price: {
      type: Number,
      required: [true, "Product must have a Price!"],
    },
    description: {
      type: String,
      required: [true, "Product must have a Description!"],
    },
    image: {
      type: String,
      required: [true, "Product must have a Image!"],
    },
    supplier_id: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
const orderSchema = mongoose.Schema({
  order_by: String,
  products: { type: Array, default: [] },
  placed_on: {
    type: Date,
    default: Date.now(),
  },
});
const Order = mongoose.model("Order", orderSchema);
const cartSchema = mongoose.Schema({
  added_by: String,
  product: { type: Array, default: [] },
  added_on: {
    type: Date,
    default: Date.now(),
  },
});
const Cart = mongoose.model("Cart", cartSchema);

module.exports = { User, Supplier, Admin, Product, Order, Cart };
