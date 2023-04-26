//Exercise - filter phone numbers

const checkLength = (phone) => {
  if (phone.length <= 10) {
    return true;
  }
};

const filterLongNumbers = (array_phone_numbers) => {
  console.log(array_phone_numbers.filter(checkLength));
};

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd'
];


filterLongNumbers(numbers);

filterLongNumbers(['4763687363', '7867867862']);

filterLongNumbers([]);

// Exercise - map personalised messages

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// 'Hi Anna! 50% off our best candies for you today!'

/*
const generateMessages = (array_names) => {
  array_names.forEach((name) => {
    console.log(`Hi ${name}! 50% off our best candies for you today!`)
  });
};
*/

/*
const generateMessages = (array_names) => {
  return array_names.map((name) => {
     return `Hi ${name}! 50% off our best candies for you today!`
});
};

module.exports = {
  generateMessages: generateMessages,
  names: names
};

generateMessages(names);
*/

// Challenge

// An array of objects!
const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];


const generateMessages = (array_names_discounts) => {
  return array_names_discounts.map((name_and_discount) => {
     return `Hi ${name_and_discount.name}! ${name_and_discount.discount}% off our best candies for you today!`
});
};

module.exports = {
  generateMessages: generateMessages,
  namesAndDiscounts: namesAndDiscounts
};