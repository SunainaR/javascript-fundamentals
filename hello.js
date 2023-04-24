console.log('Hello')

// 03 Variables and Visibility

// Just printing a literal string
console.log('Hello there');

// Declaring a new variable `age`
age = 25;

// We can concatenate strings with variables using the + operator
console.log('I am ' + age + 'years old');

// Assigning a new value
age = 27;
console.log('I am now ' + age + 'years old!');

const name = 'Charlie';

//name = 'Jess'; // will throw 'TypeError: Assignment to constant variable.'

//Exercise
// Need to use console.log in script but not in node - equivalent to irb and puts
a = 4, b = 4;
console.log(a + b)
console.log(a * b)

const greeting = 'Hello ';
const name_org = 'Makers';

// needs brackets
//console.log greeting + name;
console.log(greeting + name);

// 04 Functions
//Exercise 
const returnFour = () => {
  return 4; //need to explicitly use return or will return undefined
};

const something = returnFour; //store the function with name something but doesn't return the result

// file: hello.js

const hello = () => {
  console.log('Hello!');
};

// Add this at the end of the file
module.exports = hello;