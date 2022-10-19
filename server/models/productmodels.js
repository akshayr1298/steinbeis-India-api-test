import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: { type: String },
  price: { type: Number },
  stock: { type: Number },
});

export default mongoose.model("Products", productSchema);
