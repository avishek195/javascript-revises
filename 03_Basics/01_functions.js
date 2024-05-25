// function myfunc() {
//   console.log("Hello world");
// }

// myfunc(); // function execution or function call
// myfunc; // function reference

function twoNumbers(num1, num2) {
  // num1 and num2 are parameters
  console.log(num1 + num2);
}

// twoNumbers(2,4);// 2 and 3 is arguments
// twoNumbers(2, 4); // 6
// twoNumbers(); // NaN
// twoNumbers(2, "4"); // 24 (String)
// twoNumbers(2, undefined); // NaN
// twoNumbers(2, null); // 2

// function prize(prize) {
//   console.log(prize);
// }

// prize(100, 300, 400, 567); // 100 - It takes first value

//Rest Oparator

// 01 case
// function prize(...prize) {
//   // ...prize is a rest oparator
//   console.log(prize);
// }

// prize(100, 300, 400, 567); // [ 100, 300, 400, 567 ]

//02 case
// function prize(num1, num2, num3, ...prize) {
//   // ...prize is a rest oparator
//   console.log(prize);
// }

// prize(100, 300, 400, 567); // [ 567 ]

//03 case
// function prize(num1, num2, num3, num4, ...prize) {
//   // ...prize is a rest oparator
//   console.log(prize);
// }

// prize(100, 300, 400, 567); // []

// let value = 200;
// let arrvalue = [2, 3, 54, 6, 7];

// function arrays(arr) {
//   console.log(arr[10]);
// }

// arrays(value); // undefined
// arrays(arrvalue); // undefined

// addone(2); // 3
// function addone(num) {
//   console.log(num + 1);
// }
// addone(4); // 5

// addone(2); // error
// const addone = function (num) {
//   console.log(num + 1);
// };
// addone(4); // 5
