const { time } = require('console');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//template for TICKET information
const ticketSchema = new Schema({
   userName: {
        type: String
   },
   flightNumber:{
        type: String
   },
   airport:{
        type: String
   },
   destiny:{
        type: String
   },
   timeflight:{
        takeOff:{
            type: String
        },
        arrival:{
            type: String
        }
   },
   seatNumber:{
        type: Number
   }
});

module.exports = mongoose.model('ticket', ticketSchema);  //Declaras para que es el modelo y luego el modelo a exportar
                        // Para que es || el model a exportar
