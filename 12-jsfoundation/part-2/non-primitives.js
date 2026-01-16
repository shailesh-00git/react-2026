/* 
Non-primitives in js:
 - array
 - object
 */

let user = {
  name: "hitesh",
  isLoggedIn: true,
};

console.log(typeof user); // object
console.log(user);

// cont object can have member changeable
const student = {
  name: "shailesh",
  id: 20,
};

student.name = "raman"; // updating name is valid
console.log(student.name); // . is used to access the member

console.log(student);

// date objects
const today = new Date();
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getTimezoneOffset());
console.log(today.getMonth());
console.log(today.getMinutes());

// arrays
const product = ["shoes", 2300, true, ["leather", "plastic", "caronFiver"]];
console.log(product);
console.log(` product is ${product[0]}`);
console.log(` price is ${product[1]}`);
console.log(` manufactured : ${product[2]}`);
console.log(` materials used: ${product[3]}`);
console.log(` materials used: ${product[3][0]}`);
/* 
 product is shoes
 price is 2300
 manufactured : true
 materials used: leather,plastic,caronFiver
 materials used: leather
*/
