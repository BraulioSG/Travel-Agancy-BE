const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//template for PLACE information
const Place = new Schema({
    ID: ObjectId,
    city: { type: String, match: /[a-z]/, required: true }, //[a-z] regex expression to match only letters
    country: { type: String, match: /[a-z]/, required: true },
    price: { type: Number, min: 0, max: 99, required: false },
});

module.exports = User;
