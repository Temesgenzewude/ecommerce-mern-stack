import express from "express";

import {
  signup,
  login,
  
} from "../../controllers/auth/auth_controller.js";
import {
  isRequestValidated,
  validateLoginRequest,
  validateSignupRequest,
} from "../../validators/auth_validator.js";

const router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signup);

router.post("/login", validateLoginRequest, isRequestValidated, login);

// router.post("/profile",requireLogin, (req, res)=>{
//     res.status(200).json({user: "profile"})
// })

export default router;
