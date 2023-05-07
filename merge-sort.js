function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [5, 2, 7, 1, 9, 6];
console.log(arr);
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [1, 2, 5, 6, 7, 9]

/*
The mergeSort function recursively divides the input array into two halves until the base case is reached 

(when the array has length 1 or 0). Then, it merges the two sorted halves using the merge function.

The merge function creates a new array and repeatedly compares the first elements of the left and right subarrays,

adding the smaller element to the result array until one of the subarrays is empty. Finally, it concatenates any remaining

elements from the non-empty subarray to the result array.
*/