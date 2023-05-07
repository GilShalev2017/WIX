/*
Using the flat() method:
The flat() method returns a new array that is a flattened version of the original array up
to the specified depth. To flatten an array completely, you can use the Infinity parameter
*/
const nestedArray = [
  [1, 2],
  [3, [4, 5]],
];
const flattenedArray = nestedArray.flat(Infinity);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]

/*
Using the reduce() method:
The reduce() method can be used to flatten an array recursively by concatenating the current
element to the accumulated result.
*/
const nestedArray2 = [
  [1, 2],
  [3, [4, 5]],
];

const flattenArray = (arr) => {
  return arr.reduce((acc, curr) => {
    return Array.isArray(curr) ? [...acc, ...flattenArray(curr)] : [...acc, curr]; //recurssive call & useage of Array.isArray()
  }, []);
};

const flattenedArray2 = flattenArray(nestedArray2);

console.log(flattenedArray2); // Output: [1, 2, 3, 4, 5]
/*
In this example, the flattenArray() function recursively flattens the array using the reduce() method.
The function checks if the current element is an array, and if so, it recursively calls the flattenArray()
function on the current element. If the current element is not an array, it is concatenated to the accumulated result using 
the spread operator.
*/

const nestedArray3 = [
  [1, 2],
  [3, [4, 5]],
];

let accArray = [];

function MyFlatten(arr) {
  let arrString = arr.toString();
  let result = arrString.split(',');
  let newArray = [];
  result.forEach((element) => {
    newArray.push(+element);
  });
  return newArray;
}
const flattenedArray3 = MyFlatten(nestedArray3);

console.log(flattenedArray3); // Output: [1, 2, 3, 4, 5]
