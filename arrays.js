// 09 Arrays
// Exercise 1
const names = ['David', 'Ninya', 'Cleo', 'Sunny'];

console.log(names.length);
console.log(names[1]);

const namesExtended = names.concat('James the Cat');
console.log(namesExtended);

// Exercise 2

const numbers = [...Array(10).keys()];

console.log(numbers);
let sum = 0
numbers.forEach((number) => {
  sum += number;
});

console.log(sum);

// Challenge

const addToBatch = (orderIDs, newID) => {
  if (orderIDs.length >=5) {
    return orderIDs;
  } else {
    return orderIDs.concat(newID);
  }
};

module.exports = addToBatch