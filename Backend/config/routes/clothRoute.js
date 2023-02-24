const express = require("express");
require('dotenv').config();
const { ClothModel } = require("../model/clothingModel");
const clothRouter = express.Router();

clothRouter.get("/", async (req, res) => {
    try {
        let user = await ClothModel.find();
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
})

clothRouter.post("/add", async (req, res) => {
    let data = req.body;
    try {
        await ClothModel.insertMany(data);
        res.send("Cloth uploaded");
    }
    catch (err) {
        res.send(err);
    }
})

module.exports = {
    clothRouter
}