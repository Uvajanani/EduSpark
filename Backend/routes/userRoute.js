import express from "express"
import {getUserProfile, loginUser, registerUser, updateScore} from "../controllers/userController.js"
import  authMiddleware from "../middleware/auth.js";

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/update-score", authMiddleware, updateScore);
userRouter.get("/profile/:userId", authMiddleware, getUserProfile); // ✅ Route should exist





export default userRouter