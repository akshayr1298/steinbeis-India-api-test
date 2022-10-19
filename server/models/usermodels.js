import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  product: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
      product_name: { type: String },
      price: { type: Number },
      qty: { type: Number },
    },
  ],
});

export default mongoose.model("Users", userSchema);
