import express from "express";
import multer from "multer";
import shortid from "shortid";
import path from "path"
import { adminMiddleware, requireLogin } from "../../common-middleware/RequireLogin.js";
import { addCategory, getCategories } from "../../controllers/category/category_controller.js";


const router = express.Router();


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join("./src/", "uploads"))
    },
    filename: function(req, file, cb){

        cb(null, shortid.generate() + '-' +  file.originalname)
    }
})

const upload=multer({storage});

router.post("/categories/create", requireLogin, adminMiddleware, upload.single("categoryImg"), addCategory );
router.get("/categories/getCategories", getCategories)

export default router;



