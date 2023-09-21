'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employees = []
    // 一位Employee
    employees.push({
      name: '張佩怡',
      gender: '女',
      mobile: '0912345678',
      seniority: '3年2個月',
      department: 'HR',
      employeesNumber: 'EMP123',
      education: '工業大學貓咪系',
      email: 'chang@example.com',
      address: '高雄市岡山區本洲路170巷27號',
      status: '正職人員',
      createdAt: new Date(),
      updatedAt: new Date()
    })

    await queryInterface.bulkInsert('Employees', employees)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Employees', {})
  }
}
