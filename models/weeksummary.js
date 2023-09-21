'use strict';
module.exports = (sequelize, DataTypes) => {
  const WeekSummary = sequelize.define('WeekSummary', {
    weekEndingDate: DataTypes.DATE,
    totalHoursWorked: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'Employees'
  });
  WeekSummary.associate = function(models) {
    WeekSummary.belongsTo(models.Employee, { foreignKey: 'employeeId' })
  };
  return WeekSummary;
};
