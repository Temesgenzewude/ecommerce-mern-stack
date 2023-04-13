import Product from "../../models/product/product_model.js";
import Category from "../../models/category/category.js";

const initialData = async (req, res) => {
  const categories = await Category.find({}).exec();
  const products = await Product.find({})
    .select("_id name price quantity slug description category productPictures")
    .exec();

  res.status(200).json({
    categories,
    products,
  });
};

export default initialData;
