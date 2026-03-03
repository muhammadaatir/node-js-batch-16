import User from "../../model/index.js"

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const users = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.send({ status: 200, message: "User updated successfully", users })

    } catch (err) {
        res.status(500).send({ error: err })
    }
}

export default updateUser