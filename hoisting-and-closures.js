// Sure, here are a few examples of JavaScript programs and their expected output, related to hoisting and closures:

// Example related to hoisting:
function foo() {
  console.log(a);
  var a = 1;
}
foo();

// Expected output: undefined

// Explanation: Even though the variable a is declared after the console.log() statement, it is still hoisted to the top of the function.
// Therefore, the console.log() statement runs before the a variable is assigned a value, resulting in undefined.

// Example related to closures:
function foo() {
  var a = 1;
  function bar() {
    console.log(a);
  }
  return bar;
}
var baz = foo();
baz();

// Expected output: 1
// Explanation: The foo() function returns the bar() function, which has access to the a variable in the parent scope.
// When baz() is called, it executes the bar() function and logs the value of a, which is 1.

// Example related to hoisting and closures:
function foo() {
  var a = 1;
  function bar() {
    console.log(a);
  }
  a = 2;
  return bar;
}
var baz = foo();
baz();
// Expected output: 2
// Explanation: The foo() function returns the bar() function, which has access to the a variable in the parent scope.
// Before returning the bar() function, the value of a is changed to 2. When baz() is called, it executes the bar() function and
// logs the value of a, which is now 2.
