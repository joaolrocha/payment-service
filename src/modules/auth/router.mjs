import { Router } from "express";
import signup from "./controllers/signup.mjs";

const authRouter = Router();

authRouter.post('/signup', signup)

export default authRouter