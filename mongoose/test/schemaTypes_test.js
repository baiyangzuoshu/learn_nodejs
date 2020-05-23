const Thing = require("../models/schemaTypes");

var thing = new Thing();
thing.name = "thing";
thing.buf = new Buffer(0);
thing.arr.push(1);
thing.b = true;
console.log(thing);