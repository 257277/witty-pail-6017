const mongoose = require("mongoose");
const clothSchema = mongoose.Schema(
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
const ClothModel = mongoose.model("Cloth", clothSchema);

module.exports = {
    ClothModel
}