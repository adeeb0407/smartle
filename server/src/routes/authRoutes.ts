import express from "express";
import {
  signUp,
  login,
  confrimCode,
  getAllUsers,
  resendCode,
  rememberDevice,
  passwordLessLogin,
} from "../controller/authController";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/code", confrimCode);
router.post("/getUser", getAllUsers);
router.post("/resendcode", resendCode);
router.post("/rememberme", rememberDevice);
router.post("/loginwithoutpass", passwordLessLogin);

export default router;
