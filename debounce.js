//debounce method
function debounce(func, delay) {
  let timerId;
  return function () {
    // const context = this;
    clearTimeout(timerId);
    // timerId = setTimeout(() => func.apply(context, args), delay);
    timerId = setTimeout(() => func.apply(null, arguments), delay);
  };
}

// var sw = true;
function handleInput(input) {
  console.log(input);
}

const debouncedHandleInput = debounce(handleInput, 3000);
debouncedHandleInput('START');
debouncedHandleInput('END');
debouncedHandleInput('XXX');
