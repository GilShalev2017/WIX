// This implementation defines a TestRunner class with three methods: addTest, runTests, and printSummary.

// The addTest method takes two arguments: the name of the test and the test function. The test function

// should throw an error if the test fails.

// The runTests method iterates over all added tests and calls each test function

// using the await keyword to handle asynchronous tests. If a test passes, it logs a green checkmark and the test name

// to the console. If a test fails, it logs a red cross and the test name and error message to the console.

// Finally, it logs the number of passed tests and the total number of tests.
class TestRunner {
  constructor() {
    this.tests = [];
  }

  addTest(name, fn) {
    this.tests.push({ name, fn });
  }

  async runTests() {
    let numPassed = 0;
    for (let test of this.tests) {
      try {
        await test.fn();
        console.log(`✓ ${test.name}`);
        numPassed++;
      } catch (error) {
        console.error(`✕ ${test.name}`);
        console.error(error);
      }
    }
    console.log(`${numPassed} / ${this.tests.length} tests passed`);
  }
}

const testRunner = new TestRunner();

testRunner.addTest('Example Test 1', async () => {
  const result = await someAsyncFunction();
  if (result !== 'expected value') {
    throw new Error('Test failed');
  }
});

testRunner.addTest('Example Test 2', () => {
  const result = someSyncFunction();
  if (result !== 'expected value') {
    throw new Error('Test failed');
  }
});

testRunner.runTests();

// In this example, we create a new TestRunner instance and add two tests using the addTest method.

//The first test is an asynchronous test that calls someAsyncFunction and checks if the result is equal to "expected value".

//The second test is a synchronous test that calls someSyncFunction and checks if the result is equal to "expected value".

// Finally, we call the runTests method on the testRunner instance to run all added tests and print the test results to the console.
