//In JavaScript, apply, call, and bind are three methods that are used to change the context of a function or to set the
// value of this inside a function. Here are the differences between these methods:

//call: This method is used to invoke a function with a specified this value and with arguments provided individually.
// In other words, call allows you to call a function with a specific object as this, and pass arguments to that function
//one by one. The syntax is as follows:

// function.call(thisArg, arg1, arg2, ...);

//apply: This method is similar to call, but it allows you to pass arguments to the function as an
//array instead of individually. The syntax is as follows:
// function.apply(thisArg, [arg1, arg2, ...]);

//bind: This method is used to create a new function with a specified this value,
//and any number of arguments provided in advance. In other words, bind creates a new function that,
//when called, has this set to the provided value, with a given sequence of arguments preceding any provided
//when the new function is called. The syntax is as follows:

// function.bind(thisArg, arg1, arg2, ...);

// The main difference between call and apply is the way in which arguments are passed to the function.
// call accepts arguments individually, while apply accepts them as an array.
// bind returns a new function with the specified this value and the specified arguments.
// The original function is not executed immediately with bind, but rather a new function is returned with the this value
// and arguments already set.

//Here's an example of how these methods can be used:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

const fullName = person.getFullName.call(person);
console.log(fullName); // Output: John Doe

const fullName2 = person.getFullName.apply(person);
console.log(fullName2); // Output: John Doe

const newFunction = person.getFullName.bind(person);
const fullName3 = newFunction();
console.log(fullName3); // Output: John Doe

//In this example, call and apply are used to call the getFullName function with the person object as this,
// and no arguments passed in.
//bind is used to create a new function that is bound to the person object, which is then called to retrieve the full name.
