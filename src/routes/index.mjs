import { Router } from "express";
import authRouter from "../modules/auth/router.mjs";

const router = Router();

router.use('/auth', authRouter);

export default router