import express from 'express';
import {signUp, login, confrimCode} from '../controller/authController';

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/code", confrimCode);

export default router;