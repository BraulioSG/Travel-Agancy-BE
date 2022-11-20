const mongoose = require('mongoose');

function connect() {
    mongoose
        .connect('mongodb://localhost:27017/travel')
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
