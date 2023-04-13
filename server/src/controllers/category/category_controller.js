import slugify from "slugify";

import Category from "../../models/category/category.js";

function createCategories(categories, parentId = null) {
  const categoryList = [];

  let category;

  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      parentId: cate.parentId,
      slug: cate.slug,
      children: createCategories(categories, cate._id),
    });
  }

  return categoryList;
}

export const addCategory = (req, res, next) => {
  const category = {
    name: req.body.name,

    slug: slugify(req.body.name),
  };

  if (req.file) {
    category.categoryImg = process.env.API + "/public/" + req.file.filename;
  }

  if (req.body.parentId) {
    category.parentId = req.body.parentId;
  }

  const newCat = new Category(category);

  newCat.save((error, cat) => {
    if (error) {
      return res.status(400).json({ error });
    }

    if (cat) {
      return res.status(201).json({ cat });
    }
  });
};

export const getCategories = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) {
      return res.status(400).json(error);
    }

    if (categories) {
      const categoryList = createCategories(categories);
      return res.status(200).json({ categoryList });
    }
  });
};
