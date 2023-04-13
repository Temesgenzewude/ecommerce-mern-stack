import express from "express";
import { requireLogin } from "../../common-middleware/RequireLogin.js";

//import { signup, login, requireLogin } from "../../controllers/auth/auth_controller.js";

import {
  signup,
  login,
  logout,
  
} from "../../controllers/admin/auth_controller.js";
import {
  isRequestValidated,
  validateLoginRequest,
  validateSignupRequest,
} from "../../validators/auth_validator.js";

const router = express.Router();

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);

router.post("/admin/login", validateLoginRequest, isRequestValidated, login);

router.post("/admin/logout", logout);

// router.post("/profile",requireLogin, (req, res)=>{
//     res.status(200).json({user: "profile"})
// })

export default router;
