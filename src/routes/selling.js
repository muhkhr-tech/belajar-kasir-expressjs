const express = require('express')
const sellingController = require('../controllers/selling')

const router = express.Router()

router.get('/', sellingController.get)

module.exports = router