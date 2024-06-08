const express = require('express')
const sellingController = require('../controllers/selling')

const router = express.Router()

router.get('/', sellingController.get)
router.post('/', sellingController.create)
router.post('/:id/verify', sellingController.verify)
router.post('/:id/unverify', sellingController.unverify)

module.exports = router