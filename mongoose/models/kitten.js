const mongoose = require("mongoose");
const kitteySchema = mongoose.Schema({
    name: String
});

kitteySchema.methods.speak = function () { 
    console.info("I am "+this.name);
}

module.exports = mongoose.model("Kitten", kitteySchema);