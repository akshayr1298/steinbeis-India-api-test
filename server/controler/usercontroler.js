import User from "../models/usermodels.js";
import Product from "../models/productmodels.js";

// create user
const createUser = async (req, res, next) => {
  try {
    const { username } = req.body;
    const userexist = await User.findOne({ username });
    if (userexist) {
      return res.status(403).json({ message: "user already exists" });
    }

    const user = await User.create({ username });
    if (user) {
      res.status(200).json({ message: "user created successfully" });
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const purchaseProduct = async (req, res, next) => {
  try {
    const { name, id, quantity } = req.body;
    User.updateOne(
      { username: name },
      { $push: { product: { product_id: id, quantity: quantity } } }
    )
      .then(async () => {
        const productStatus = await Product.updateOne(
          { _id: id },
          { $inc: { stock: -quantity } }
        );

        if (productStatus) {
          res.status(200).json({ message: "purchase successfully" });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};


const purchaseDetail = async(req,res,next)=>{

  try {
    const purchasedetails = await User.find().populate('product.product_id')
    res.status(200).json({purchasedetails})
    
  } catch (error) {
    console.log(error.message);
    next(error)
    
  }
}


export { createUser, purchaseProduct,purchaseDetail};
