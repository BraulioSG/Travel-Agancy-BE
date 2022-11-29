//Base de datos en Mongoose

const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI;   //Variable de entorno

function connect() {
    mongoose
        .connect(DB_URI)
        .then(() => {
            //console.log('connection to DB: success');
            return true;
        })
        .catch(err => {
            //console.log('connect to DB: error');
            return false;
        });
}

function closeConnection() {
    mongoose.connection.close();
    return true;
}

function sayHi() {
    return 'hi';
}

module.exports = {
    sayHi,
    connect,
    closeConnection,
};
