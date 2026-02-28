import User from "../../model/index.js"

const postUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.send({status: 200, message: "User successfully added", user: user})
    } catch (err) {
        res.status(500).send({error: err})
    }
}

export default postUser