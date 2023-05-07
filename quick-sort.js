function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [5, 2, 7, 1, 9, 6];
console.log(arr);
const sortedArr = quickSort(arr);
console.log(sortedArr); // [1, 2, 5, 6, 7, 9]

/*
The quickSort function selects a pivot element (in this implementation, the first element) and partitions the array into 

two subarrays: one containing all elements smaller than the pivot and one containing all elements greater than or equal to the pivot.

It then recursively sorts the two subarrays using the same quicksort algorithm and concatenates the sorted subarrays with the pivot 

element in the middle.

This implementation is not guaranteed to be efficient for all inputs, as it may exhibit poor performance for certain pivot selections

(e.g., if the input array is already sorted). However, it is generally considered to be one of the most efficient sorting algorithms

with an average time complexity of O(n log n).
*/
