const mongoose = require("mongoose");
const schde = mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    time: {type:TimeRanges}
})