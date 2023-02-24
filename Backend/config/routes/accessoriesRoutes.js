const express = require("express");
require('dotenv').config()
const accessoriesRoute = express.Router();
const { AccessoriesModel } = require("../model/Accessories");

accessoriesRoute.get("/", async (req, res) => {
    try {
        let user = await AccessoriesModel.find();
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
})

accessoriesRoute.post("/add", async (req, res) => {
    let data = req.body;
    try {
        await AccessoriesModel.insertMany(data);
        res.send("Accessories uploaded");
    }
    catch (err) {
        res.send(err);
    }
})



module.exports = {
    accessoriesRoute
}