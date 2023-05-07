// given array of integers and number find the range of indexes in the array that the
// average of them form the given number.
// To find the range of indexes in an array of integers where the average of the values in that range is equal to a given number,
// we can use a sliding window approach. Here's an example implementation in JavaScript:
function findAverageRange(arr, avg) {
  let leftIndex = 0;
  let rightIndex = 0;
  let currentSum = 0;
  let varNum = 0;
  let currentAvg = 0;

  for (let i = 0; i < arr.length; i++) {
    currentAvg = 0;
    currentSum = 0;
    varNum = 1;
    leftIndex = i;
    for (let j = i; j < arr.length; j++) {
      // if (arr[j] == avg) return [j, j];
      currentSum += arr[j];
      currentAvg = currentSum / varNum;
      if (currentAvg == avg) {
        return [leftIndex, j];
      }
      varNum++;
    }
  }
  return null; //in case we don't find
  // return [-1,-1]; //another option
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
let range2 = findAverageRange(arr2, target);
console.log(range2); // Output: [0, 8]

arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
target = 3.5;
range2 = findAverageRange(arr2, target);
console.log(range2); // Output: [0, 5]
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
console.log(range);
arr = [1, 2, 3, 4, 5];
avg = 3;
range = findAverageRange(arr, avg);
console.log(range);
arr = [1, 2, 3, 4, 5];
avg = 2.5;
range = findAverageRange(arr, avg);
console.log(range);
arr = [1, 2, 3, 4, 5, 16];
avg = 6;
range = findAverageRange(arr, avg);
console.log(range);
