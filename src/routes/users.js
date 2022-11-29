// Todo ENDPOINT de Users

const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Users endpoint')
});

router.post('/', (req,res)=>{
    res.send('We are creating what you asked')
});

router.put('/', (req,res)=>{
    res.send('We are on our way to update it')
});

router.delete('/', (req,res)=>{
    res.send('Deleting...')
});

module.exports = router;