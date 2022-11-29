const {ticketModel} = require('../schemas')

const getTickets = async (req,res)=>{
    const data = await placeModel.find({});
    res.send(data);
}

const getTicket = (req,res) =>{};

const createTicket = async (req,res) =>{
    const {body} = req;
    console.log(body);
    const data = await placeModel.create(body);
    res.send(data)
}

const updateTicket = (req,res) =>{};

const deleteTicket = (req,res) =>{};

module.exports = {getTickets, getTicket, createTicket, updateTicket, deleteTicket}