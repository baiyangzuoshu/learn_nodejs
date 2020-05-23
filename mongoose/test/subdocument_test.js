const mongoose = require("mongoose");
const childrenSchema = mongoose.Schema({ name: "string" });
const parentSchema = new mongoose.Schema({
    children: [childrenSchema],
    child:childrenSchema
})
const Parent = mongoose.model("Parent", parentSchema);

function test1() { 
    var parent = new Parent({ children: [{ name: "yjm" }, { name: "YJM" }] });
    parent.save((err, content) => { 
        if (err) { 
            console.info("test1 failed:", err);
            return;
        }
        console.info("test1 successed:",content);
    })
}

function test_children_pre() { 
    childrenSchema.pre("save", function (next) { 
        if ("maomao" == this.name) { 
            return next(new Error("maomao"));
        }
        next();
    })
    var parent = new Parent({ children: [{ name: "maomao1" }, { name: "jl" }] });
    parent.save((err, content) => { 
        if (err) { 
            return console.info("test_children_pre failed", err);
        }
        console.info("test_children_pre:",content);
    })
}

function test_validate() { 
    childrenSchema.pre("save", function (next) { 
        console.log("childrenSchema 1");
        next();
    })
    childrenSchema.pre("validate", function (next) { 
        console.info("childrenSchema 2");
        next();
    })
    parentSchema.pre("save", function (next) { 
        console.log("parentSchema 3");
        next();
    })
    parentSchema.pre("validate", function (next) { 
        console.log("parentSchema 4");
        next();
    })

    var parent = new Parent({ children: [{ name: "validate" }] });
    parent.save();
}

module.exports = {
    test_validate
}
