'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payroll = sequelize.define('Payroll', {
    date: DataTypes.DATE,
    title: DataTypes.STRING,
    baseSalary: DataTypes.DECIMAL,
    allowance: DataTypes.DECIMAL,
    overtimePay: DataTypes.DECIMAL,
    bonus: DataTypes.DECIMAL,
    deductions: DataTypes.DECIMAL,
    insuranceDeduction: DataTypes.DECIMAL,
    healthInsurance: DataTypes.DECIMAL,
    netPay: DataTypes.DECIMAL,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'Employees'
  });
  Payroll.associate = function(models) {
    Payroll.belongsTo(models.Employee, { foreignKey: 'employeeId' })
  };
  return Payroll;
};