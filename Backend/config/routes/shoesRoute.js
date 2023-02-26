const express = require("express");
require('dotenv').config();
const { ShoesModel } = require("../model/shoesModel");
const shoesRouter = express.Router();

shoesRouter.get("/", async (req, res) => {
    let obj = {};
    if (req.headers.size != undefined && req.headers.size != "") {
        obj.size = req.headers.size;
    }
    if (req.headers.shoes != undefined && req.headers.shoes != "") {
        obj.category = req.headers.shoes;
    }
    if (req.headers.color != undefined && req.headers.color != "") {
        obj.color = req.headers.color;
    }
    pricefltr = {};
    if (req.headers.price != undefined && req.headers.price != "") {
        if (req.headers.price == "Dec") {
            pricefltr.price = -1;
        }
        else {
            pricefltr.price = 1;
        }
    }

    try {
        if (pricefltr.price == undefined) {
            let user = await ShoesModel.find(obj);
            res.send(user);
        }
        else {
            let user = await ShoesModel.find(obj).sort(pricefltr);
            res.send(user);
        }
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