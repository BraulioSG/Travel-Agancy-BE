// Todo ENDPOINT de Place
const express = require('express');
const router = express.Router();
const {getPlaces, getPlace, createPlace, updatePlace, deletePlace} = require('../controllers/place')

router.get('/', getPlaces);
router.get('/', getPlace);
router.post('/', createPlace);
router.put('/', updatePlace);
router.delete('/', deletePlace);

module.exports = router;