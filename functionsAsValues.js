/*
// Creating a function
const aFunction = () => {
  return 123;
}

// Functions can be referenced as values, without the brackets ()
// here we are essentially assigning the exact same function to a new name.
const anotherFunction = aFunction;

// When using the brackets (), we're *calling* the function
// so we'll get the value returned by it.
const returnValue = anotherFunction();

const uppercaseMessage = (message) => {
  return message.toUpperCase();
}

// This function accepts as arguments a string message, and a function.
// It then calls the given function to do its job.
const transform = (message, transformFunction) => {
  return transformFunction(message);
}

transform("hello", uppercaseMessage);
*/

//Exercise
const lowerCaseMessage = ( message) => {
  return message.toLowerCase();
};

const transform = (message, transformFunction) => {
  return transformFunction(message);
};

console.log(transform('WHY ARE YOU SHOUTING?', lowerCaseMessage));

//Challenge: 

const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
};

const notifyByText = (phone) => {
  return `Text sent to: ${phone}`;
};

const notifyFunction = (emailOrPhone, notifyFunction) => {
  return notifyFunction(emailOrPhone);
};

console.log(notifyFunction('hello@makers.tech.test', notifyByEmail));
console.log(notifyFunction('+10000000000', notifyByText));