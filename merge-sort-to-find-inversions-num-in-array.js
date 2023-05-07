function mergeSort(arr) {
  if (arr.length <= 1) {
    return [arr, 0];
  }

  const mid = Math.floor(arr.length / 2);
  const [leftArr, leftCount] = mergeSort(arr.slice(0, mid));
  const [rightArr, rightCount] = mergeSort(arr.slice(mid));
  const [mergedArr, mergeCount] = merge(leftArr, rightArr);

  return [mergedArr, leftCount + rightCount + mergeCount];
}

function merge(leftArr, rightArr) {
  const mergedArr = [];
  let i = 0,
    j = 0,
    count = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      mergedArr.push(leftArr[i++]);
    } else {
      mergedArr.push(rightArr[j++]);
      count += leftArr.length - i;
    }
  }

  return [mergedArr.concat(leftArr.slice(i)).concat(rightArr.slice(j)), count];
}
/*
Merge sort can be used to find the number of inversions in an array. An inversion occurs when two elements in an array are out of order.

For example, in the array [2, 4, 1, 3, 5], the pairs (2, 1) and (4, 1) are inversions.

The basic idea behind using merge sort to find the number of inversions is to count the number of inversions in the 

left half of the array, count the number of inversions in the right half of the array, and count the number of inversions between

the two halves. We can then add these three counts to get the total number of inversions in the array.

Here is the implementation of using merge sort to find the number of inversions in an array:
*/
/*
The mergeSort function takes an array as input and returns a tuple containing the sorted array and the number of inversions in the array.

The function first checks if the length of the array is less than or equal to 1. If so, it returns the array and 0 inversions.

Otherwise, it recursively calls mergeSort on the left and right halves of the array, and then calls the merge function to merge the

two sorted halves and count the number of inversions between them.

The merge function takes two sorted arrays as input and returns a tuple containing the merged array and 

the number of inversions between the two input arrays. The function initializes i, j, and count to 0, and then iterates 

through the two input arrays, comparing the elements at the current positions. If the element in the left array is less than or equal to the element in the right array, it is added to the mergedArr, and i is incremented. Otherwise, the element in the right array is added to the mergedArr, j is incremented, and count is incremented by the number of elements remaining in the left array. The function returns the merged array and the inversion count.

*/
const arr = [2, 4, 1, 3, 5];

const result = mergeSort(arr);

console.log(result);
