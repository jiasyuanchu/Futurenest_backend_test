'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TimeSheets', {
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
      hoursWorked: {
        type: Sequelize.INTEGER
      },
      weekEndingDate: {
        type: Sequelize.DATE
      },
      month: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('TimeSheets');
  }
};