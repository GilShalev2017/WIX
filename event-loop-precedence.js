/*
When you call Promise and setTimeout multiple times in your code, the tasks are added to different parts of the event loop and 

are executed in a specific order of precedence.

Here is the order of precedence of tasks on the event loop:

Microtasks queue: When a promise is resolved or rejected, the corresponding callbacks are added to the microtasks queue.

These callbacks are executed before any other tasks in the event loop, even if they were added after other tasks.

This means that microtasks have higher priority than other tasks in the event loop.

Macrotasks queue: Tasks added using setTimeout, setInterval, and other similar functions are added to the macrotasks queue.

These tasks are executed after all the tasks in the microtasks queue have been executed.

Rendering: If there are any pending rendering tasks, such as updating the DOM or painting the screen, they are executed after

all the tasks in the microtasks and macrotasks queues have been executed.

I/O events: Tasks related to I/O operations, such as network requests or file system operations, are executed after all

the rendering tasks.

To illustrate the order of precedence, consider the following code:
*/

Promise.resolve().then(() => console.log('microtask 1'));
Promise.resolve().then(() => console.log('microtask 2'));

setTimeout(() => console.log('macrotask 1'), 0);
setTimeout(() => console.log('macrotask 2'), 0);
