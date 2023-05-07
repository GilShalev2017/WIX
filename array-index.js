// given array of integers and number find the range of indexes in the array that the
// average of them form the given number.
// To find the range of indexes in an array of integers where the average of the values in that range is equal to a given number,
// we can use a sliding window approach. Here's an example implementation in JavaScript:
function findAverageRange(arr, avg) {
  let sum = 0;
  let start = 0;
  let end = 0;

  while (end < arr.length) {
    sum += arr[end];
    // [1, 3, 2, 5, 4, 6];
    while ((end - start + 1) * avg < sum) {
      sum -= arr[start];
      start++;
    }

    if ((end - start + 1) * avg === sum) {
      return [start, end];
    }

    end++;
  }

  return null;
}
// The findAverageRange function takes an array arr and a target average value avg as input.
// It initializes a sum variable to keep track of the sum of the
// current range, and start and end variables to keep track of the current range of indices.
// The function uses a while loop to iterate over the array, with the end index increasing by one at each iteration.
// It adds the current element to the sum variable and checks if the current range has an average equal to avg.
// If the current range has an average greater than avg, the function moves the start of the range one index to the right by incrementing start and subtracting the
// removed value from sum. If the current range has an average less than avg, the function continues to expand the range by incrementing end.
// If a range with an average of avg is found, the function returns the [start, end] range of indices. If no such range is found, the function returns null.

//  Here's an example usage of the findAverageRange function:
let arr = [1, 3, 2, 5, 4, 6];
let avg = 3.5;
let range = findAverageRange(arr, avg);
console.log(range); // Output: [0, 5]
// In this example, the function returns the range of indices [0, 5], corresponding to the values [1, 3, 2, 5, 4, 6], which have an average of 3.5.
