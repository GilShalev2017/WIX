// This implementation defines a TestRunner class with three methods:

// constructor: Creates an empty list of tests.
// addTest: Adds a new test to the list with a given name and test function.
// runTests: Runs all the tests in the list and prints the results to the console.
// Each test function should throw an error if the test fails. The runTests method catches any errors thrown by the test functions and prints the test name and error message to the console.

class TestRunner {
  constructor() {
    this.tests = [];
  }

  addTest(name, fn) {
    this.tests.push({ name, fn });
  }

  runTests() {
    let numTests = 0;
    let numPassed = 0;
    for (const test of this.tests) {
      numTests++;
      try {
        test.fn();
        numPassed++;
        console.log(`✅ ${test.name}`);
      } catch (err) {
        console.error(`❌ ${test.name}: ${err.message}`);
      }
    }
    console.log(`Finished ${numTests} tests. ${numPassed} passed, ${numTests - numPassed} failed.`);
  }
}

const testRunner = new TestRunner();

testRunner.addTest('Test 1', () => {
  const result = 1 + 2;
  if (result !== 3) {
    throw new Error('Expected 1 + 2 to equal 3.');
  }
});

testRunner.addTest('Test 2', () => {
  const result = 3 * 4;
  if (result !== 12) {
    throw new Error('Expected 3 * 4 to equal 12.');
  }
});

testRunner.runTests();

// In this example, we create a new TestRunner object and add two tests to it. Each test function checks a simple
//arithmetic expression and throws an error if the result is incorrect.
// Finally, we call the runTests method to run all the tests and print the results to the console.
// If a test passes, it will print a checkmark (✅) and the test name. If a test fails,
//it will print a cross mark (❌), the test name, and the error message. At the end, it will print a summary of the number of tests passed and failed.
