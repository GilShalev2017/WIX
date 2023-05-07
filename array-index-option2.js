function findRange(arr, target) {
  let sum = 0;
  let left = 0;
  let right = 0;
  while (right < arr.length) {
    sum += arr[right];
    right++;
    while (right - left > 0 && sum / (right - left) > target) {
      sum -= arr[left];
      left++;
    }
    if (right - left > 0 && sum / (right - left) === target) {
      return [left, right - 1];
    }
  }
  return [-1, -1];
}

//In this function, we use two pointers, left and right, to create a sliding window. We start by initializing both pointers to 0,
// and we keep a running sum of the elements inside the window. We move the right pointer to the right until the sum of elements
// inside the window is greater than or equal to the target. Then, we move the left pointer to the right until the average of the elements
//inside the window is less than or equal to the target. If the average is equal to the target, we return the range of indexes.

//Here's an example usage:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
let range = findRange(arr, target);
console.log(range); // Output: [0, 8]

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
target = 3.5;
range = findRange(arr, target);
console.log(range); // Output: [0, 5]
