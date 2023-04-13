import express from "express";
import {
  userMiddleware,
  requireLogin,
} from "../../common-middleware/RequireLogin.js";
import { addItemToCart } from "../../controllers/cart/cart_controller.js";

const router = express.Router();

router.post(
  "/user/cart/addtocart",
  requireLogin,
  userMiddleware,
  addItemToCart
);

export default router;
