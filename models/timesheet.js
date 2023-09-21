'use strict';
module.exports = (sequelize, DataTypes) => {
  const TimeSheet = sequelize.define('TimeSheet', {
    date: DataTypes.DATE,
    hoursWorked: DataTypes.INTEGER,
    weekEndingDate: DataTypes.DATE,
    month: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'Employees'
  });
  TimeSheet.associate = function(models) {
    TimeSheet.belongsTo(models.Employee, { foreignKey: 'employeeId' })
  };
  return TimeSheet;
};