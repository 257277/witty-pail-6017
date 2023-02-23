const express = require("express");
require('dotenv').config()
const userRoute = express.Router();
const { UserModel } = require("../model/userModel");
const { hashing } = require("../middleware/bcrypy");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.find({ email });
        console.log(user);
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {

                if (result) {
                    let token = jwt.sign({ userid: user[0]._id }, process.env.privatekey);
                    res.send({ "msg": "Login Successfull", "token": token });
                }
                else {
                    res.send("Wrong Credential");
                }
            });
        }
        else {
            res.send("Wrong Credential");
        }
    }
    catch (err) {
        res.send("Wrong Credential");
    }

})





userRoute.use(hashing);
userRoute.post("/register", async (req, res) => {
    let data = req.body;
    let email = data.email;
    let user = await UserModel.find({ email });
    if (user.length == 0) {
        try {

            await UserModel.insertMany(data);
            res.send("Registration completed!");
        }
        catch (err) {
            res.send(err);
        }
    }
    else {
        res.status(404)
        res.send("Already Registered!")
    }
})

module.exports = {
    userRoute
}