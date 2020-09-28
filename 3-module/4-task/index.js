/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let salaries = '';
  for (let i = 0; i < users.length; i++){
    if (users[i].age <= age) {
      salaries += users[i].name + ', ' + users[i].balance + '\n';
    };
  };
  salaries = salaries.slice(0, -1);
  return salaries
};
  