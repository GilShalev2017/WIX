function sum(x) {
  return function (y) {
    return x + y;
  };
}

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

console.log(`the result of sum(2)(5)=${sum(2)(5)}`);
console.log(`the result of multiply(2)(5)=${multiply(2)(5)}`);
