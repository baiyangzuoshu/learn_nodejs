const mongoose = require("mongoose");
const thing = mongoose.Schema({
    name: String,
    total: { type: Number, min: 1, max: 10 },
    time: { type: Date, default: Date.now },
    buf: Buffer,
    arr: Array,
    b: Boolean,
    oId: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model("Thing", thing);