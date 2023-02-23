const express = require("express");
require('dotenv').config()
const { connection } = require("./config/db");
const cors = require('cors')
const app = express();
const { userRoute } = require("./config/routes/userRoute");
app.use(express.json());
app.use(cors())
app.use("/user", userRoute);




app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Successfully connected to Database")
    }
    catch (err) {
        console.log(err);
    }
    console.log(`Server is running on ${process.env.port}`);
})