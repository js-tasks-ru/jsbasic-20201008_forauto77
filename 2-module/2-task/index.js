/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let keys = 0;
  for (let key in obj) {
    keys += 1;
  };
  if (keys > 0) {
    return false
  };
  return true
};

