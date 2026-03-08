const accessVerification = async (req, res) => {
    try {
        res.send({ status: 200, message: "Token is valid" })
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err })
    }
}

export default accessVerification