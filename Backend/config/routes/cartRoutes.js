const express = require("express");
require('dotenv').config();
const { CartModel } = require("../model/cartModel");
const cartRouter = express.Router();

const { auth } = require("../middleware/jwt")
cartRouter.use(auth);
cartRouter.get("/", async (req, res) => {
    try {
        let data = await CartModel.find({ userid: req.body.userId });
        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.send("Something went wrong");
    }
})
cartRouter.post("/add", async (req, res) => {
    const { image, name, size, price } = req.body;
    try {
        let data = { image, name, size: size[0], price }
        let user = new CartModel(data);
        await user.save();
        res.send("Successfully added to cart");
    }
    catch (err) {
        console.log(err);
        res.send("Something went wrong");
    }
})
cartRouter.delete("/delete/:id", async (req, res) => {
    let id = req.params.id;

    try {
        await CartModel.findByIdAndDelete({ "_id": id });
        res.send("successfully deleted");
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
})


module.exports = {
    cartRouter
}

