const mongoose = require("mongoose");

const accessoriesSchema = mongoose.Schema(
    {
        "image": String,
        "name": String,
        "subname": String,
        "size": [String],
        "price": Number,
        "newArrival": Boolean,
        "newSeason": Boolean,
        "color": String,
        "category": String
    }
)

const AccessoriesModel = mongoose.model("Accessories", accessoriesSchema);

module.exports = {
    AccessoriesModel
}