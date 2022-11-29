const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//template for USER information
const userSchema = new Schema({
    ID: ObjectId,
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        match: /[a-z]@[a-z].[a-z]/, 
        required: true 
    }, //email regex expression
    password: { 
        type: Number, 
        min: 0, 
        max: 99, 
        required: true 
    },
});

module.exports = mongoose.model('user',    userSchema);  //Declaras para que es el modelo y luego el modelo a exportar
                        // Para que es || el model a exportar