const express = require("express");
require('dotenv').config();
const { ShoesModel } = require("../model/shoesModel");
const shoesRouter = express.Router();

shoesRouter.get("/", async (req, res) => {
    try {
        let user = await ShoesModel.find();
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
})

shoesRouter.post("/add", async (req, res) => {
    let data = req.body;
    try {
        await ShoesModel.insertMany(data);
        res.send("Shoes uploaded");
    }
    catch (err) {
        res.send(err);
    }
})

module.exports = {
    shoesRouter
}