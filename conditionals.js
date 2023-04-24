//05 Conditionals

const getNumberSign = (number) => {

if (number > 0) {
  return 'positive'
} else if (number === 0 ) {
  return 'zero'
} else { 
  return 'negative'
};

};




const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length == validLength) {
    return true;
  } else {
    return false;
  }
};


//FizzBuzz Challenge

const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
};

//NOTE: cannot have multiple module.export statements in one file, require will only pull the last statement
//Can use this key-value pair syntax to put multiple functions into one exports statement:

module.exports = {
  isValidLength: isValidLength,
  getNumberSign: getNumberSign,
  fizzBuzz: fizzBuzz
}


//To call these functions from outside:
//const conditionals = require('./conditionals');
//conditionals.isValidLength('00')
//conditionals.getNumberSign(-7)
