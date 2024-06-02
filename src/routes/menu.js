const express = require('express')
const menuController = require('../controllers/menu')

const router = express.Router()

router.get('/', menuController.get)

router.post('/', menuController.create)

router.delete('/:id', menuController.remove)

module.exports = router