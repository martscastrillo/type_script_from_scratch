const prices: (number | string)[] = [1,3,2,2,2,'as'];
prices.push(1);
prices.push('1');

/* Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos. Para hacer una tupla lo hacemos de la siguiente manera */

let user: [string, number, boolean];
/* user = ['martcast', 15];
user = ['12', 15];

user = [];
user = ['mart'];
user = ['mart', 12]; */
user = ['mart', 12, true];
const [username, age] = user; // destructuring de una tupla, ignora el tercer valor
console.log(username);
console.log(age);