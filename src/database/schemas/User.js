const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//template for USER information
const User = new Schema({
    ID: ObjectId,
    name: { type: String, match: /[a-z]/, required: true }, //[a-z] regex expression to match only letters
    lastName: { type: String, match: /[a-z]/, required: true },
    age: { type: Number, min: 0, max: 99, required: true },
});

module.exports = User;
