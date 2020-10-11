/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let salary = 0;
  for (let key in salaries) {
    if (typeof (salaries[key]) == "number") {
      salary += salaries[key]
    }
  }
  return salary
}

