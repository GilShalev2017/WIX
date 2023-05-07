const personDetails = {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
};

console.log(personDetails.fullName.call(person1)); // Output: John Doe
console.log(personDetails.fullName.call(person2)); // Output: Jane Doe

/*
Pay attention that personDetails is an object and that person1 & person2 are instances

*/

/*
In this example, we have an object person with a method fullName that concatenates the first and last name

properties of an object. We then create two objects person1 and person2 with their respective first and last names.

To use the fullName method on person1 and person2, we use the call() method and pass in the object we want to use

as this in the method. The call() method executes the fullName method on the specified object and returns the result.

So, person.fullName.call(person1) returns "John Doe" and person.fullName.call(person2) returns "Jane Doe".
*/
