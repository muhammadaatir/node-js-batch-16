import express from "express"
import postUser from "./post.js";
import getUser from "./get.js";
import deleteUser from "./delete.js";
import updateUser from "./update.js";
import loginUser from "./login.js";

const userRouter = express.Router();

userRouter.get("/", getUser)
userRouter.post("/", postUser)
userRouter.post("/login", loginUser)
userRouter.delete("/:id", deleteUser)
userRouter.put("/:id", updateUser)

export default userRouter