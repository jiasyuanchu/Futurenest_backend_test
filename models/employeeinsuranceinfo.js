'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployeeInsuranceInfo = sequelize.define('EmployeeInsuranceInfo', {
    insuranceTier: DataTypes.INTEGER,
    LaborInsuranceEmployeeShare: DataTypes.DECIMAL,
    LaborInsuranceCompanyShare: DataTypes.DECIMAL,
    HealthInsuranceEmployeeShare: DataTypes.DECIMAL,
    HealthInsuranceCompanyShare: DataTypes.DECIMAL,
    Retirement: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'Employees',
  });
  EmployeeInsuranceInfo.associate = function(models) {
    EmployeeInsuranceInfo.belongsTo(models.Employee, {foreignKey: 'employeeId'});
  };
  return EmployeeInsuranceInfo;
};
