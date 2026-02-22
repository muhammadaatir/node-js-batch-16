import express from "express";

const app = express();
app.use(express.json());
let data = [];
console.log("testing");

app.get("/", (req, res) => {
    res.send(new Date().toString())
})

app.get("/users", (req, res) => {
    res.send(data)
})

app.post("/data", (req, res) => {
    try {
        data.push({...req.body[0], id: Date.now().toString(36)})
        console.log(Date.now().toString(36));
        res.send("User Successfully added")
    } catch (err) {
        console.error(err);
    }
})

app.delete("/user/:id", (req, res) => {
    console.log(req.params.id);
    const {id} = req.params
    data = data.filter(obj => obj.id !== id)
    console.log(data);
    
    res.send({message: "User deleted successfully"})
})

app.listen(3000, () => {
    console.log("Test");
    console.log("Server is running on 3000");
})