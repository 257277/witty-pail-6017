const express = require("express");
require('dotenv').config();
const { ClothModel } = require("../model/clothingModel");
const clothRouter = express.Router();

clothRouter.get("/", async (req, res) => {
    let obj = {};
    if (req.headers.size != undefined && req.headers.size != "") {
        obj.size = req.headers.size;
    }
    if (req.headers.clothing != undefined && req.headers.clothing != "") {
        obj.category = req.headers.clothing;
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
            let user = await ClothModel.find(obj);
            res.send(user);
        }
        else {
            let user = await ClothModel.find(obj).sort(pricefltr);
            res.send(user);
        }

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