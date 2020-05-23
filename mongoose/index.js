const mongoose = require("mongoose");
const { test_findById } =require("./test/kitten_test");
const { test_validate } = require("./test/subdocument_test");
const { test } = require("./test/validation_test");

mongoose.connect("mongodb+srv://test:test1234@cluster0-lzkfi.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive:true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error."));
db.once("open", () => { 
    console.info("mongodb open!");

    test();
    // db.close((err) => { 
    //     if (err) console.log("db close failed!!!");
    //     else console.info("db close successed!");
    // })
});
