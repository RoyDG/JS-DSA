//checking sum zero - problem 1
//[-5,-4,-3,-2,0,2,4,6,8] >> input
//[-4,4] >> output

function sumPair(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    } //if sum < 0
  }
}
const result = sumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

//by using one loop i converted it to o(n) linear time complexity
