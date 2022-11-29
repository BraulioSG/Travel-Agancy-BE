const express = require('express');
const app = express();
require('dotenv').config(); //sets up the environment variables
const port = process.env.PORT || 3000;

const router = require('./src/router');

//Creas las variables de las rutas de los EndPoints
const usersRoute = require('./src/routes/users')
const ticketRoute = require('./src/routes/ticket') // No entiendo porque no funcionan :((
const placeRoute = require('./src/routes/place')


//assign the router module to express
app.use('/', router);

// Asignas los endpoints 
app.use('/users', usersRoute);
app.use('/ticket', ticketRoute);  // No entiendo porque no funcionan :((
app.use('/place', placeRoute);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
