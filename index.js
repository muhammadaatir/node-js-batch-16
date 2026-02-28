import express from "express";
import { dataSchema } from "./schema/index.js";
import router from "./routes/index.js";
import mongoose from "./db/index.js";

const app = express();
app.use(express.json());
app.use("/api", router)

mongoose.connection.on("open", () => {
    console.log("DB connected")
})

mongoose.connection.on("error", (err) => {
    console.log("DB error occured", err)
})

// app.use("/user-update", (req, res, next) => {
//     console.log("Middleware");
//     if(req.body[0].id){
//         next()
//     }
//     res.status(401).send({message: "user is not authnticated"})
// })
// let data = [];
// console.log("testing");

// app.get("/", (req, res) => {
//     res.send(new Date().toString())
// })

// app.get("/users", (req, res) => {
//     try {
//         res.send(data)
//     } catch (err) {
//         res.status(400).send({ error: err })
//     }
// })

// app.post("/data", async (req, res) => {
//     try {
//         await dataSchema.validateAsync(req.body[0])
//         const id = Date.now().toString(36)
//         data.push({ ...req.body[0], id: id })
//         res.status(200).send({ user: { ...req.body[0], id: id }, message: "User Successfully added"})
//     } catch (err) {
//         console.error(err);
//         res.status(400).send(err.details || "Something went wrong")
//     }
// })

// app.delete("/user/:id", (req, res) => {
//     console.log(req.params.id);
//     const { id } = req.params
//     data = data.filter(obj => obj.id !== id)
//     console.log(data);
//     res.send({ message: "User deleted successfully" })
// })

// app.put('/user-update/:id', (req, res) => {
//     const { id } = req.params;
//     const index = data.findIndex(obj => obj.id === id)
//     data.splice(index, 1, { ...req.body[0], id })
//     res.send({ user: req.body[0], message: "User succesfully updated" })
// })

app.listen(3000, () => {
    console.log("Test");
    console.log("Server is running on 3000");
})