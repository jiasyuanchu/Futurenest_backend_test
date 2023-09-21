// 計算正職員工的薪資
function calculateRegularSalary(hoursWorked, hourlyRate) {
  // 根據正職工時和時薪計算薪資
  const regularSalary = hoursWorked * hourlyRate;
  return regularSalary
}

// 計算時薪員工的薪資
function calculateHourlySalary(hoursWorked, hourlyRate) {
  // 根據時薪工時和時薪計算薪資
  const hourlySalary = hoursWorked * hourlyRate;
  return hourlySalary
}

module.exports = {
  calculateRegularSalary,
  calculateHourlySalary
}
