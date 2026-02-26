import express from "express"
import userRouter from "./users/index.js"
import postRouter from "./posts/index.js"

const router = express.Router()
// router.use('/', (req, res) => {
//     res.send("api req")
// })
// router.get('/users', getUser)
// router.post('/users', postUser)
// router.use('/posts', postRouter)
router.use('/users', userRouter)

export default router