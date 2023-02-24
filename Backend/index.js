const express = require("express");
require('dotenv').config()
const { connection } = require("./config/db");
const cors = require('cors')
const app = express();
const { userRoute } = require("./config/routes/userRoute");
const { accessoriesRoute } = require("./config/routes/accessoriesRoutes")
const { clothRouter } = require("./config/routes/clothRoute");
const { shoesRouter } = require("./config/routes/shoesRoute");
const { bagRouter } = require("./config/routes/bagRoutes");
app.use(express.json());
app.use(cors())
app.use("/user", userRoute);
app.use("/accessories", accessoriesRoute);
app.use("/cloth", clothRouter);
app.use("/shoes", shoesRouter);
app.use("/bag", bagRouter)


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
