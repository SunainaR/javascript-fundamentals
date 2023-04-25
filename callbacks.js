// 08 Callbacks

console.log('1. The program starts');

setTimeout(() => {
  console.log('4. The timer is lapsed, this callback function is now called');
}, 2000); // 2000ms = 2 seconds

console.log('2. The timer has started, and the callback function registered to be called later');

console.log('3. The rest of the program below (immediate tasks) will keep running immediately');

// Exercise 1
const printHello = () => {
  console.log('Hey there!'); 
}

setTimeout(printHello, 3000);

// Exercise 2

const executeAfterDelay = (timeInSecs, printFunction) => {
  return setTimeout(printFunction, timeInSecs * 1000);
} 

executeAfterDelay(5, printHello);