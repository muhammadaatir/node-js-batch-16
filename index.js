import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/posts", (req, res) => {
    res.send([{name: "Hello World", class: "Smit batch 16"}])
})

app.post("/data", (req, res) => {
    res.send("Post request done")
})

app.listen(3000, () => {
    console.log("Test");
    console.log("Server is running on 3000");
})