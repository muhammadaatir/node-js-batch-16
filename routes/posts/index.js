import express from "express"
import getPost from "./get.js";

const postRouter = express.Router();

postRouter.get("/", getPost)

export default postRouter