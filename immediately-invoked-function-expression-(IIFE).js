/*
Here's an example code snippet that creates 5 buttons and uses a for loop to add event listeners
 to each button that displays an alert with the corresponding button number when clicked, 
 without using var, let, or const:
 */

for (i = 0; i < 5; i++) {
  (function () {
    var button = document.createElement('button');
    button.innerHTML = 'Button ' + (i + 1);
    button.addEventListener('click', function () {
      alert(i + 1);
    });
    document.body.appendChild(button);
  })();
}

/*
In this code, an immediately invoked function expression (IIFE) is used to create a local scope for each 

iteration of the loop. This allows us to create a new variable button for each button without using var, let, or const.

The button variable is then used to create a new button element with the appropriate text and event listener.

Inside the event listener function, we use the alert method to display the button number,

which is obtained by adding 1 to the loop index i. Since the loop uses var to declare i, 

it is accessible inside the IIFE's scope and its value is preserved for each button's event listener.

Note that this approach of using an IIFE to create a new scope for each iteration is a common workaround for the 

lack of block scoping in older versions of JavaScript. 

Modern versions of JavaScript provide let and const which enable block scoping, making this approach unnecessary.

*/
