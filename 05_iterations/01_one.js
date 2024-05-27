// for loop
// let element = 0;
// for (let index = 0; index < 10; index++) {
//   element += index;
// }

// console.log(element);

//for of loop (based for array)
// const arr = [2, 4, 5, 6, 78, 89, 0];
// for (const i of arr) {
//   console.log(i);
// }

// Object Itrations

// const obj = {
//   name: "Avishek",
//   roll: 13,
//   year: "3rd",
//   branch: "CSE",
// };

// Object in not iterable in for of loop
// for (const i of obj) {
//   console.log(i);
// }

// for in loop

// for (const i in obj) {
//   console.log(i);
/* 
  name
 roll
 year
 branch

// all keys are printed
//   */
// }

// for (const i in obj) {
//   console.log(obj[i]);
/* 
 Avishek
13
3rd
CSE

all values are printed
  */
//}

//Map Iteration....

// const map = new Map();

// map.set("name", "Avishek");
// map.set("roll", 13);
// map.set("year", "3rd");
// map.set("sec", "B");

// console.log(map);
/*
Map(4) {
  'name' => 'Avishek',
  'roll' => 13,
  'year' => '3rd',
  'sec' => 'B'
}

*/

//Iteartion with for of loop

// for (const i of map) {
//   console.log(i);
// }
/*
[ 'name', 'Avishek' ]
[ 'roll', 13 ]
[ 'year', '3rd' ]
[ 'sec', 'B' ]
*/

// for (const [key, value] of map) {
//   console.log(`${key} => ${value}`);
// }
/*
name => Avishek
roll => 13
year => 3rd
sec => B
*/

//Iteartion with for in loop is not possible

//ForEach loop

const arr = [2, 4, 5, 6, 7, 8, 8];

// arr.forEach((item) => {
//   console.log(item);
// });
/*
2
4
5
6
7
8
8
*/
//forEach looop does not return values
