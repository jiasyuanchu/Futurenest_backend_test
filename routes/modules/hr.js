const express = require('express')
const router = express.Router()

const hrController = require('../../controllers/hr-controller')

router.get('/salary-calculations', hrController.getSalaryCalculations)

module.exports = router
