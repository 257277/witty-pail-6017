const express = require("express");
require('dotenv').config()
const accessoriesRoute = express.Router();
const { AccessoriesModel } = require("../model/Accessories");

accessoriesRoute.get("/", async (req, res) => {
    let obj = {};
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
            let user = await AccessoriesModel.find(obj);
            res.send(user);
        }
        else {
            let user = await AccessoriesModel.find(obj).sort(pricefltr);
            res.send(user);
        }
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