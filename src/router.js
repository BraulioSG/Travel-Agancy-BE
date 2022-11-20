/**
 * CONTROLS ALL THE ROUTES OF THE BACKEND
 */
const express = require('express');
const router = express.Router();

const handlers = require('./handlers'); //HANDLERS FOR THE ROUTES

//Middleware
router.use((req, _res, next) => {
    console.log(`petition at: http://localhost${req.url} at ${new Date()}`);
    next();
});

//HOME PATH
router.get('/', (_req, res) => {
    res.send('hello world');
    handlers.greeting();
});

//QUERY ROUTE
router.get('/query', (req, res) => {
    /**
     * Gets the parameters from the URL
     * /test?key=value&key=value...
     */
    res.send(req.query);
});

//PARAMS ROUTE
router.get('/params/:param1/:param2', (req, res) => {
    const { param1, param2 } = req.params;
    res.send([param1, param2]);
});

//PAGE NOT FOUND ROUTE
router.get('*', (_req, res) => {
    res.send('ERROR 404');
});

module.exports = router;
