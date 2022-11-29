// Todo ENDPOINT de Tickets
const express = require('express');
const router = express.Router();
const {getTickets, getTicket, createTicket, updateTicket, deleteTicket} = require('../controllers/ticket')

router.get('/', getTickets);
router.get('/', getTicket);
router.post('/', createTicket);
router.put('/', updateTicket);
router.delete('/', deleteTicket);


module.exports = router;