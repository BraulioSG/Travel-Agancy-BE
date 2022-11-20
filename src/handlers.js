const db = require('./database/database');

function greeting() {
    return db.sayHi();
}

module.exports = {
    greeting,
};
