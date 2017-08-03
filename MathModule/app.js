var math = require('./mathlib')();
num1 = 3;
num2 = 6;
console.log('The sum of ' + num1 + ' + ' + num2 + ' = ' + math.add(num1,num2));
console.log('The product of ' + num1 + ' + ' + num2 + ' = ' + math.multiply(num1,num2));
console.log(num1 + ' squared is ' + math.square(num1));
console.log('The quotient of ' + num2 + ' % ' + num1 + ' = ' + math.random(num2,num1));