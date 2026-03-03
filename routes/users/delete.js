import User from "../../model/index.js"

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const users = await User.findByIdAndDelete(id);
        res.send({ status: 200, message: "User deleted successfully" })

    } catch (err) {
        res.status(500).send({ error: err })
    }
}

export default deleteUser