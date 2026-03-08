import express from "express"
import postUser from "./post.js";
import getUser from "./get.js";
import deleteUser from "./delete.js";
import updateUser from "./update.js";
import loginUser from "./login.js";
import tokenVerification from "../../config/tokenVerification.js";
import accessVerification from "./accessVerification.js";
import refresh from "./refresh.js";

const userRouter = express.Router();

userRouter.get("/", tokenVerification, getUser)
userRouter.post("/", postUser)
userRouter.post("/token-verify", tokenVerification, accessVerification)
userRouter.post("/login", loginUser)
userRouter.post("/refresh", refresh)
userRouter.delete("/:id", deleteUser)
userRouter.put("/:id", updateUser)

export default userRouter