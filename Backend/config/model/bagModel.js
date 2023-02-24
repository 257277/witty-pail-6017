const mongoose = require("mongoose");
const bagSchema = mongoose.Schema(
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
const BagModel = mongoose.model("Bag", bagSchema);

module.exports = {
    BagModel
}