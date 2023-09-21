'use strict';
module.exports = (sequelize, DataTypes) => {
  const MonthSummary = sequelize.define('MonthSummary', {
    month: DataTypes.DATE,
    totalHoursWorked: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'Employees'
  });
  MonthSummary.associate = function(models) {
    MonthSummary.belongsTo(models.Employee, { foreignKey: 'employeeId' })
  };
  return MonthSummary;
};