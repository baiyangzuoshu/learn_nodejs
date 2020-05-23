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

function test_create() { 
    Kitten.create({ name: "maomao" }, (err, data) => { 
        if (err) { 
            console.log("test_create failed" + err);
            return;
        }
        console.info("test_create successed:"+data);
    })    
}

function test_find() { 
    Kitten.find((err, datas) => { 
        if (err) console.info("find failed " + err);
        console.log(datas);
    })    
}

function test_findOne() { 
    Kitten.find({ name: "Felyne" }, (err, data) => { 
        if (err) console.log("findOne failed " + err);
        else console.log("findOne successed "+data);
    })
}

function test_remove() { 
    Kitten.deleteOne({ name: "maomao" }, (err, content) => { 
        if (err) { 
            console.info("test_remove failed ", err);
            return;
        }
        console.info("test_remove successed ",content);
    })
}

function test_updateOne() { 
    Kitten.updateOne({ name: "maomao" }, { age: 11 }, (err, content) => { 
        if (err) { 
            console.info("test_update failed:",err);
            return;
        }
        console.info("test_update successed:",content);
    })
}

function test_findById() { 
    Kitten.findById("5ec8639f5ed9f0b02ecf2fc1", (err, data) => { 
        if (err) { 
            console.info("test_findById failed:",err);
            return;
        }
        console.log("test_findById:", data);
        data.age = 1;
        data.save((err, content) => { 
            if (err) { 
                console.info("test_findById save failed:",err);
                return;
            }
            console.info("test_findById save successed", content);
        })
    })
}

function query_count() { 
    Kitten.estimatedDocumentCount().exec((err, total) => { 
        if (err) { 
            console.info("query_count failed "+err);
            return;
        }
        console.info("query_count successed:",total);
    })
}

module.exports = {
    test_findById
}