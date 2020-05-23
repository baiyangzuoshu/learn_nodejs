const mongoose = require("mongoose");
const kitteySchema = mongoose.Schema({
    name: String,
    age: {type:Number,default:10,min:1,max:10}
});

kitteySchema.methods.speak = function () { 
    console.info("I am "+this.name);
}

module.exports = mongoose.model("Kitten", kitteySchema);