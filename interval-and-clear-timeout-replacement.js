function setInterval(callback, interval) {
  let intervalId = {
    id: null,
  };

  function repeat() {
    callback();
    intervalId.id = setTimeout(repeat, interval);
  }

  intervalId.id = setTimeout(repeat, interval);
  return intervalId;
}

function clearInterval(intervalId) {
  clearTimeout(intervalId.id);
}

const print = (input) => {
  console.log(input);
};

const intervaleId = setInterval(() => print.call(null, 'gil'), 1000);

setTimeout(() => {
  clearInterval(intervaleId);
}, 5500);
