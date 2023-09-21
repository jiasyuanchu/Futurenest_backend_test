const express = require('express')
const router = express.Router()

const hr = require('./modules/hr')

router.use('/api/hr', hr)
router.use('/', (req, res) => res.send('This is home page.'))

module.exports = router