const { Employee, TimeSheet } = require('../models')
const { Op } = require('sequelize')
// const sequelize = require('sequelize')

const { calculateHoursAndSalary } = require('../helpers/salaryCalculator')

const hrController = {
  getSalaryCalculations: async (req, res, next) => {
    try {
      // 從前端request中得到日期範圍和部門選擇
      const { startDate, endDate, department } = req.query
      // 設置查詢條件
      const whereCondition = department ? { department } : { department: null }
      
      // 查詢符合日期範圍和部門選擇的員工
      const employees = await Employee.findAll({
        where: whereCondition,
      });
      // 初始化計算結果變數
      let totalRegularHours = 0 // 正職人員總小時數
      let totalHourlyHours = 0 // 時薪人員總小時數
      let totalAllHours = 0 // 正職人員和時薪人員總小時數
      let totalRegularSalary = 0 // 正職人員累計應付薪資數
      let totalHourlySalary = 0 // 時薪人員累計應付薪資數
      let totalAllSalary = 0 // 正職人員和時薪人員累計應付薪資加總數

      // 逐一處理每位員工
      for (const employee of employees) {
        // 查詢該員工在指定日期範圍內的工時記錄
        const timeSheets = await TimeSheet.findAll({
          where: {
            employeeId: employee.id, // 員工 ID
            date: {
              [Op.between]: [startDate, endDate], // 日期範圍
            },
          },
        })

        // 計算每位員工的工時和薪資
        let employeeRegularHours = 0 // 員工的正職工時
        let employeeHourlyHours = 0 // 員工的時薪工時
        let employeeRegularSalary = 0 // 員工的正職應付薪資
        let employeeHourlySalary = 0 // 員工的時薪應付薪資

        // 逐一處理該員工的每日工時記錄
        for (const timeSheet of timeSheets) {
          // 根據公司的業務邏輯，運用函數 calculateHoursAndSalary計算出的工時和薪資
          const { regularHours, hourlyHours, regularSalary, hourlySalary } = calculateHoursAndSalary(timeSheet)

          // 將計算結果累加到員工的工時和薪資中
          employeeRegularHours += regularHours
          employeeHourlyHours += hourlyHours
          employeeRegularSalary += regularSalary
          employeeHourlySalary += hourlySalary
        }

        // 更新總計
        totalRegularHours += employeeRegularHours
        totalHourlyHours += employeeHourlyHours
        totalAllHours += employeeRegularHours + employeeHourlyHours
        totalRegularSalary += employeeRegularSalary
        totalHourlySalary += employeeHourlySalary
        totalAllSalary += employeeRegularSalary + employeeHourlySalary
      }

      const result = {
        totalRegularHours,
        totalHourlyHours,
        totalAllHours,
        totalRegularSalary,
        totalHourlySalary,
        totalAllSalary,
      }
      res.json(result)
    } catch (error) {
      console.error(error)
      next(error)
    }
  },
}

module.exports = hrController
