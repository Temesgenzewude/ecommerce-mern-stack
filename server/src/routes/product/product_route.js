
import express from "express";
import multer from "multer";
import shortid from "shortid";
import path from "path"
import { adminMiddleware, requireLogin } from "../../common-middleware/RequireLogin.js";
import { createProduct } from "../../controllers/product/product_controller.js";
//import { addCategory, getCategories } from "../../controllers/category/category_controller.js";


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join("./src/", "uploads"))
    },
    filename: function(req, file, cb){

        cb(null, shortid.generate() + '-' +  file.originalname)
    }
})

const upload=multer({storage});





const router = express.Router();

router.post("/products/create", requireLogin, adminMiddleware, upload.array("productPicture"),  createProduct);
//router.get("/products/getProducts", getCategories)

export default router;