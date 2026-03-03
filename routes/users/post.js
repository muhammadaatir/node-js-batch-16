import User from "../../model/index.js"
import bcrypt from "bcrypt"

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
        res.send({status: 200, message: "User successfully added", user: data})
    } catch (err) {
        res.status(500).send({error: err})
    }
}

export default postUser