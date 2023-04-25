//Exercise

const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

// Print the value of the city attribute ('London').
console.log(person.address.city);
// console.log(person.address['city']);
// console.log(person['address']['city']);

//Print the value of the second hobbies value ('tennis').
console.log(person.hobbies[1]);


// Challenge

const cohort = {
  name: 'March2023',
  id: 3456,
  studentNames: ['Sunny', 'Oana', 'Ana', 'Matt']
};

const printCohort = (object) => {
  console.log(object.id + ' - ' + object.name + ' - ' + cohort.studentNames.length + ' students in this cohort');
};

module.exports = {
  printCohort: printCohort,
  cohort: cohort
};
// To call:
// const objects = require('./objects');
// objects.printCohort(objects.cohort);




