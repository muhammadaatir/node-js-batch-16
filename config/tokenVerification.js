import jwt from "jsonwebtoken"
import "dotenv/config"

const tokenVerification = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1]
            const decoded_token = jwt.verify(token, process.env.JWT_SECRET)
            if (decoded_token) {
                next()
            } else {
                res.status(401).send({ message: "Token Unauthorized" })
            }
        }
        else {
            res.status(401).send({ message: "Token not provided" })
        }
    } catch (err) {
        res.status(401).send({ message: "Unauthorized" })
    }
}

export default tokenVerification