import Product from "../models/productmodels.js";

const createProduct = async (req, res, next) => {
  try {
    const { product_name, price, stock } = req.body;
    const product = await Product.create({ product_name, price, stock });
    if (product) {
      res.status(200).json({ message: "Product create successfully" });
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};




export {createProduct}
