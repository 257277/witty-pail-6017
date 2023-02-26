const express = require("express");
require('dotenv').config();
const { BagModel } = require("../model/bagModel");
const bagRouter = express.Router();

bagRouter.get("/", async (req, res) => {
    let obj = {};
    if (req.headers.size != undefined && req.headers.size != "") {
        obj.size = req.headers.size;
    }
    if (req.headers.bags != undefined && req.headers.bags != "") {
        obj.category = req.headers.bags;
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
            let user = await BagModel.find(obj);
            res.send(user);
        }
        else {
            let user = await BagModel.find(obj).sort(pricefltr);
            res.send(user);
        }
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