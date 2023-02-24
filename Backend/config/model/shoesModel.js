const mongoose = require("mongoose");
const shoesSchema = mongoose.Schema(
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
const ShoesModel = mongoose.model("Shoes", shoesSchema);

module.exports = {
    ShoesModel
}