const express = require('express');
const app = express();
require('dotenv').config(); //sets up the environment variables
const port = process.env.PORT || 3000;

const router = require('./src/router');

//assign the router module to express
app.use('/', router);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
