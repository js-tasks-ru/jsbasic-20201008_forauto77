/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let range = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] <= b && arr[i] >= a) {
      range.push(arr[i]);
    };
  };
  return range;
}
