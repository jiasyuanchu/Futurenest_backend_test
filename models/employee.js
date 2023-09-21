'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    mobile: DataTypes.STRING,
    seniority: DataTypes.STRING,
    department: DataTypes.STRING,
    employeesNumber: DataTypes.STRING,
    education: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};