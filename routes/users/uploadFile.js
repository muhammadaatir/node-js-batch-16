import User from "../../model/index.js";

const uploadFile = async (req, res) => {
    try {
        console.log(req.body.name, req.files, "test response");
        const user = await User.create({
            username: req.body.name,
            password: "123",
            email: "aatir@gmail.com",
            image: req.files[0].path
        })
        res.send({ status: 200, message: "File uploaded" })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err })
    }

}

export default uploadFile