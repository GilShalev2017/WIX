function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

const result = sum.apply(null, numbers);

console.log(result); // Output: 6

const result2 = sum.apply(null, [4, 5, 6]);

console.log(result2); // Output: 15
