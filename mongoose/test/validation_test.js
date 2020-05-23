const mongoose = require("mongoose");

function test() { 
    var schema = new mongoose.Schema({
        name: {
          type: String,
          required: true
        }
      });
    var Cat = mongoose.model('Cat', schema);

    // This cat has no name :(
    var cat = new Cat();
    cat.save(function(error) {
    assert.equal(error.errors['name'].message,
        'Path `name` is required.');

    error = cat.validateSync();
    assert.equal(error.errors['name'].message,
        'Path `name` is required.');
    });
}

module.exports = {
    test
}