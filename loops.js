// 06 Loops
//Exercise: Use a for loop to iterate numbers from 1 to 20, 
// and for each of them, print whether the number is even or odd.

for (let i = 1 ; i <=20 ; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`)
  } else {
    console.log(`${i} is odd`)
  }
};

// Challenge: Write a function fizzbuzzUntil that accepts a number. 
// This function should use a loop to loop through all numbers from 1 to the given one, 
// call the fizzBuzz function for the current number and print the result.

const fizzbuzzUntil = (number) => {
  for (let i = 1 ; i <= number ; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
       console.log('Buzz');
    } else console.log(i);
  }
};

module.exports = fizzbuzzUntil