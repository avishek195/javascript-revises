// [] -> square brackets
// () -> paranthisis
// {} -> curly brackets

//Array

const myArr = [4, 6, 8, 9];
const anotherArray = ["Avishek", "Avi"];
const mixedArray = ["Avishek", 4, true, { name: "Avishek" }];

// Arary Methods ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 01 - push()

// myArr.push(2);
// console.log(myArr); // [ 4, 6, 8, 9, 2 ] Add new data at the end.

// 02 - pop()

// myArr.pop();
// console.log(myArr); // [ 4, 6, 8 ] Remove the last element.

// 03 - unshift()

// myArr.unshift(3);
// console.log(myArr); // [ 3, 4, 6, 8, 9 ] Add elements at the first.

// 04 - shift()

// myArr.shift();
// console.log(myArr); // [ 6, 8, 9 ] Remove elements at the end.

// 05 - includes()

// console.log(myArr.includes(14)); // false.

// 06 - indexOf()

// console.log(myArr.indexOf(23));// -1 if value not present , return -1.
// console.log(myArr.indexOf(9)); // 3 if value present , return the index.

// 07 - join()

// const newArr = myArr.join();
// console.log(newArr); // 4,6,8,9
// console.log(typeof newArr); // string

// const newArr = myArr.join(" ");
// console.log(newArr);// 4 6 8 9

// const newArr = myArr.join("-");
// console.log(newArr); // 4-6-8-9

// 08 - slice()

// console.log("orginal Array ", myArr); // [ 4, 6, 8, 9 ]
// const sliceArr = myArr.slice(2, 4); // Starting index 2 and ending index (4-1) = 3.
// console.log("SliceArr ", sliceArr); // [ 8, 9 ]
// console.log("orginal Array ", myArr); // [ 4, 6, 8, 9 ] No change in orginal Array.

// 09 - splice()

console.log("orginal Array ", myArr); // [ 4, 6, 8, 9 ]
const sliceArr = myArr.splice(2, 4); // Starting index 2 and ending index (4-1) = 3.
console.log("SliceArr ", sliceArr); // [ 8, 9 ]
console.log("orginal Array ", myArr); // [ 4, 6 ] Main Array is changed.
