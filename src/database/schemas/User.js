const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//template for USER information
const User = new Schema({
    ID: ObjectId,
    username: { type: String, required: true },
    email: { type: String, match: /[a-z]@[a-z].[a-z]/, required: true }, //email regex expression
    password: { type: Number, min: 0, max: 99, required: true },
});

module.exports = User;
