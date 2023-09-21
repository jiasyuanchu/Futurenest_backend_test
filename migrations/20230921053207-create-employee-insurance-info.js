'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmployeeInsuranceInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeId: {
        type: Sequelize.INTEGER
      },
      insuranceTier: {
        type: Sequelize.INTEGER
      },
      LaborInsuranceEmployeeShare: {
        type: Sequelize.DECIMAL
      },
      LaborInsuranceCompanyShare: {
        type: Sequelize.DECIMAL
      },
      HealthInsuranceEmployeeShare: {
        type: Sequelize.DECIMAL
      },
      HealthInsuranceCompanyShare: {
        type: Sequelize.DECIMAL
      },
      Retirement: {
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('EmployeeInsuranceInfos');
  }
};