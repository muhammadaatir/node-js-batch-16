import express from "express"
import postUser from "./post.js";
import getUser from "./get.js";
import deleteUser from "./delete.js";
import updateUser from "./update.js";
import loginUser from "./login.js";
import tokenVerification from "../../config/tokenVerification.js";
import accessVerification from "./accessVerification.js";
import refresh from "./refresh.js";
import uploadFile from "./uploadFile.js";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary'


const userRouter = express.Router();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'upload',
    allowed_formats: ["jpeg", "jpg", "png"]
  },
});
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, "user " + file.originalname);
//     }
// })
const upload = multer({ storage: storage });
userRouter.post("/upload", upload.array("files"), uploadFile)

userRouter.get("/", tokenVerification, getUser)
userRouter.post("/", postUser)
userRouter.post("/token-verify", tokenVerification, accessVerification)
userRouter.post("/login", loginUser)
userRouter.post("/refresh", refresh)
userRouter.delete("/:id", deleteUser)
userRouter.put("/:id", updateUser)

export default userRouter