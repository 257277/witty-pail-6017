const express = require("express");
require('dotenv').config();
const { BagModel } = require("../model/bagModel");
const bagRouter = express.Router();

bagRouter.get("/", async (req, res) => {
    try {
        let user = await BagModel.find();
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
})

bagRouter.post("/add", async (req, res) => {
    let data = req.body;
    try {
        await BagModel.insertMany(data);
        res.send("Bag uploaded");
    }
    catch (err) {
        res.send(err);
    }
})

module.exports = {
    bagRouter
}