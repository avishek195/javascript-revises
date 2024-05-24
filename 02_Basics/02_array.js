// let myArr = [2, 5, 8, 9, 0];
// let nameArr = ["Avi", "Neel", "Sandip", "Surajit"];

//01 Concat() -

// const newArr = myArr.concat(nameArr);
// console.log(newArr); // [ 2, 5, 8, 9, 0, 'Avi', 'Neel', 'Sandip', 'Surajit' ]

//02 Spread Oparator -

// const newArr = [...myArr, ...nameArr];
// console.log(newArr); // [ 2, 5, 8, 9, 0, 'Avi', 'Neel', 'Sandip', 'Surajit' ]

//03 flat() -

// let bigArr = [2, 4, 6, [5, 7, 8], 6, 7, [5, 7, [8, 9, 0]]]; // highest depth 3

// let convert_single_Array = bigArr.flat(Infinity); // convert a single array with infinite Depth.

// console.log(convert_single_Array);
// [
//     2, 4, 6, 5, 7, 8,
//     6, 7, 5, 7, 8, 9,
//     0
//   ]

//isArray() -

// console.log(Array.isArray("Avishek")); // false
// console.log(Array.from("Avishek"));
/* 
[
  'A', 'v', 'i',
  's', 'h', 'e',
  'k'
]
*/
// console.log(Array.from({ name: "Avishek" })); // []

// Create Array with variables

// let a = 12;
// let b = 20;
// let c = 30;

// console.log(Array.of(a, b, c)); // [ 12, 20, 30 ]
