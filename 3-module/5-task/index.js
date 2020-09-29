/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split('');
  let resultArr = [];
  let minMax = {
    min: 0,
    max: 0
  }
  
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == ' ') {
        arr[i] = ','
      }
    };
  arr = arr.join('');
  arr = arr.split(',');
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) {
        resultArr.push(arr[i]);
      }    
    };
  
  for (let i = 0; i < resultArr.length; i++) {
    if (+resultArr[i] < minMax.min) {
      minMax.min = +resultArr[i];
    };
    if (+resultArr[i] > minMax.max) {
      minMax.max = +resultArr[i];
    };
  };  
  return minMax;
};
