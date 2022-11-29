const {placeModel} = require('../schemas')

const getPlaces = async (req,res)=>{
    const data = await placeModel.find({});
    res.send(data);
}

const getPlace = (req,res) =>{};

const createPlace = async (req,res) =>{
    const {body} = req;
    console.log(body);
    const data = await placeModel.create(body);
    res.send(data)
}

const updatePlace = (req,res) =>{};

const deletePlace = (req,res) =>{};

module.exports = {getPlaces, getPlace, createPlace, updatePlace, deletePlace}