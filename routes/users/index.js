import express from "express"
import postUser from "./post.js";
import getUser from "./get.js";

const userRouter = express.Router();

userRouter.get("/", getUser)
userRouter.post("/", postUser)

export default userRouter