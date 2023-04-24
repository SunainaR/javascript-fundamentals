const hello = require('./hello'); //require refers to file

// need to reassign the imported module to a new constant variable 

hello();

// new const and function could be renamed and this also works
const hello2 = require('./hello'); //require refers to file
hello2();