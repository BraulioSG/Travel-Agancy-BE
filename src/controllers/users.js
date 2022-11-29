const {userSchema} = require('../schemas')

const getUsers = async (req,res)=>{
    const data = await userSchema.find({})
    res.send(data)
}

const getUser = (req,res) =>{}

const createUser = async (req,res) =>{
    const {body} =req
    console.log(body)
    const data = await userSchema.create(body)
    res.send(data)
}

const updateUser = (req,res)=>{}

const deleteUser = (req,res)=>{}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser};
