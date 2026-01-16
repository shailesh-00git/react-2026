// operation in js
let salary = 10000;
let bonus = 1000;
const totalsalary = salary + bonus;
console.log(totalsalary);

console.log("add", 2 + 3);
console.log(3 - 2);
console.log(3 * 3);
console.log(10 / 5);
console.log(10 % 2);
console.log("power : ", 2 ** 2);

// incrment and decrement
let age = 20;
age++;
console.log(age);

let id = 23;
id--;
console.log(id);

// comparison operator
let num1 = 1;
let num2 = 2;
/* simply the comparison between to int gives boolean output (true or false) */
console.log(num1 == num2);

// loosly and strict comparison

let num3 = 3;
let num4 = "3";

console.log(num3 == num4); // true because it checks val only not data type
console.log(num3 === num4); // false because it checks datatype also
