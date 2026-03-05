import User from "../../model/index.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"

const postUser = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10);
        console.log(password)
        const user = await User.create({
            ...req.body,
            password
        })
        const data = user.toObject();
        delete data.password;
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET)
        res.send({ status: 200, message: "User successfully added", user: data, token })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

export default postUser