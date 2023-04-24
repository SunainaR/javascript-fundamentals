//04 Functions Exercise
/*
const sayHello = () => {
  console.log('Hello');
};

module.exports = sayHello;
*/

// Debugging Question
/*
const sayHello = () => {
  return 'Hello'
};

module.exports = sayHello();
*/
// can export either the block of code (when using ()) 
// or the function object as a whole. 

//Exercise - with a name argument

const sayHello = (name) => {
  return `Hello ${name}`
};

module.exports = sayHello;