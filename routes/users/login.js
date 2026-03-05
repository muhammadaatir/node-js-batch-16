import User from "../../model/index.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(user) {
            const checkPassword = bcrypt.compareSync(password, user.password);
            if(checkPassword) {
                const token = jwt.sign({email: user.email}, process.env.JWT_SECRET)
                res.send({ status: 200, message: "User logged in succesfully", token })
            } else {
                res.send({ status: 401, message: "Incorrect password" })
            }
        } else {
            res.status(404).send({ error: "User not found" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err })
    }
}

export default loginUser