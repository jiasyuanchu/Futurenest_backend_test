const express = require('express')
const router = express.Router()

const hrController = require('../../controllers/hr-controller')

router.get('/salary-calculations', hrController.getSalaryCalculations)
router.get('/employee-details/:employeeId', hrController.getEmployeeDetails)


module.exports = router
