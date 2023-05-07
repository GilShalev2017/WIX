const cache = {};

function expensiveCalculation() {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  return sum;
}

function expensiveFunction(input) {
  if (cache[input]) {
    console.log('Cache hit!');
    return cache[input];
  } else {
    console.log('Cache miss!');
    const result = expensiveCalculation(); // do expensive calculation
    cache[input] = result;
    return result;
  }
}

// Example usage
expensiveFunction('foo'); // Cache miss!
expensiveFunction('foo'); // Cache hit!

// Memoization is a technique that can be used to optimize the performance of a function by caching the results of
//expensive function calls and returning the cached result when the same inputs occur again.
// In this example, we declare a cache object outside of the expensiveFunction function, which will be used to store the results
// of expensive function calls. When expensiveFunction is called with an input, it first checks if the input is in the cache. If it is, the cached result is returned and a
//message is printed to the console indicating a cache hit. If the input is not in the cache, the function performs the expensive calculation,
//stores the result in the cache, and returns the result, while printing a message indicating a cache miss.
// By caching the results of expensive calculations, we avoid the need to re-calculate them every time the
// function is called with the same input, which can significantly improve the performance of the function.
// However, it's important to be mindful of the memory usage of the cache, and to periodically clear or resize the cache if necessary.
