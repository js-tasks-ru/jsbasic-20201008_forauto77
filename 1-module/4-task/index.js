/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  str = str.toLowerCase();
  if (str.indexOf('xxx') >= 0 || str.indexOf('1xbet') >= 0) {
    return true
  }
  return false
}


