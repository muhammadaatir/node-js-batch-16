import User from "../../model/index.js"

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.send({ status: 200, message: "User data received successfully", user: users })

    } catch (err) {
        res.status(500).send({ error: err })
    }
}

export default getUser