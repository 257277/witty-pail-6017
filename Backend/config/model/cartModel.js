const mongoose = require("mongoose");
const cartSchema = mongoose.Schema(
    {
        "image": String,
        "name": String,
        "size": [String],
        "price": Number,
        "userId": String
    }
)
const CartModel = mongoose.model("Cart", cartSchema);

module.exports = {
    CartModel
}