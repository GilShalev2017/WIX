const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

// const greeting = function (message) {
//   console.log(message + ', ' + this.fullName());
// };

function greeting(message) {
  console.log(message + ', ' + this.fullName());
}

// Bind the 'person' object to the 'greeting' function
const boundGreeting = greeting.bind(person); //here we set the this!

// Call the bound function with a custom message
//here we use the new function that was created from the greeting function and we supply our input!
boundGreeting('Hello'); // Output: "Hello, John Doe"

/*
In this example, we first define an object person with a fullName method that returns the person's full name by 

concatenating their firstName and lastName properties. We also define a greeting function that takes a message as an argument 

and logs a greeting with the person's full name.

We then use the bind() method to create a new function boundGreeting that is bound to the person object as its this value.

This means that when boundGreeting is called, the this keyword inside the greeting function will refer to the person object.

Finally, we call the boundGreeting function with the message "Hello", 

which results in the output "Hello, John Doe" being logged to the console.

*/
