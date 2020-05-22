const Kitten = require("../models/kitten");

function test_kitten() { 
    var felyne = new Kitten({ name: "Felyne" });
    felyne.speak();
}

function test_save() { 
    var felyne = new Kitten({ name: "Felyne" });
    felyne.save((err, data) => { 
        if (err) console.info("save failed " + err);
        console.log(data);
    })
}

function test_find() { 
    Kitten.find((err, datas) => { 
        if (err) console.info("find failed " + err);
        console.log(datas);
    })    
}

module.exports = {
    test_kitten,
    test_save,
    test_find
}