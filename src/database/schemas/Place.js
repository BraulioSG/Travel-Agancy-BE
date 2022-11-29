const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//template for PLACE information
const placeSchema = new Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },


});

module.exports = mongoose.model('place', placeSchema);  //Declaras para que es el modelo y luego el modelo a exportar
                        // Para que es || el model a exportar
