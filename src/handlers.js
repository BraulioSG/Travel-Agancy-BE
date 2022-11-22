const db = require('./database/database');

function greeting() {
    //return db.sayHi();
    return 'bye';
}

module.exports = {
    greeting,
};
