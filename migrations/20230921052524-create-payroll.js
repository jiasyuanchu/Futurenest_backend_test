'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payrolls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      title: {
        type: Sequelize.STRING
      },
      baseSalary: {
        type: Sequelize.DECIMAL
      },
      allowance: {
        type: Sequelize.DECIMAL
      },
      overtimePay: {
        type: Sequelize.DECIMAL
      },
      bonus: {
        type: Sequelize.DECIMAL
      },
      deductions: {
        type: Sequelize.DECIMAL
      },
      insuranceDeduction: {
        type: Sequelize.DECIMAL
      },
      healthInsurance: {
        type: Sequelize.DECIMAL
      },
      netPay: {
        type: Sequelize.DECIMAL
      },
      notes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Payrolls');
  }
};