const mongoose = require("mongoose");
const blog = mongoose.Schema({
    time: { type: Date, default: Date.now },
    author: { type: String, default: "YJM" },
    title: String,
    body:String
})

module.exports = mongoose.model("Blog", blog);