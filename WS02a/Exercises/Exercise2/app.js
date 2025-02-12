const {addition, subtraction} = require('../Exercise3/math.js');
const {uppercase, reverse} = require('../Exercise3/stringUtils.js'); 
const {date, date2} = require('../Exercise3/dateUtils.js');

console.log("Hello, Node.js!");
console.log('Addition: ', addition (5, 3));
console.log('Substraction: ', subtraction(5 ,2));
console.log('Uppercase: ', uppercase("Hello"));
console.log('Reverse: ', reverse("Hello"));
console.log('Current date: ', date());
console.log('Current date: ', date2());