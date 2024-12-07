const express = require("express");
require("../src/db/conn");

const app = express();
const port = process.env.PORT | 3000;

const userModel = require('./models/usermodel');

app.get("/", async (req, res) => {
    res.send("Hellow from HS");
});

app.get("/create", async (req, res) => {
    let createuser = await userModel.create({
        name: "HS",
        username: "humaidshaykh",
        email: "humaidshaykh@gmail.com"
    });
    res.send(createuser);
});

app.get("/update", async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "humaidshaykh"}, {name: "hash bhaiya"}, {new: true});
    res.send(updateduser);
});

app.get("/read", async (req, res) => {
    let readuser = await userModel.find({username: "humaidshaykh"});
    res.send(readuser);
});

app.get("/delete", async (req, res) => {
    let deleteuser = await userModel.findOneAndDelete({_id: "674df988c31ef8f4d69619d0"});
    res.send(deleteuser);
});

app.listen(port, async () => {
    console.log(`Server run at port no. ${port}`);
});

