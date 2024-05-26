// Arrow Function.. +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const myFunc = () => {
//   console.log("Hello Avishek");
// };
// console.log(myFunc()); // Hello Avishek

// const myFunc2 = (num1, num2) => num1 + num2;
// console.log(myFunc2(10, 20)); // 30

// const myfunc3 = () => ({ name: "Avishek" });
// console.log(myfunc3()); // {name: "Avishek"}

// This Keyword.. ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const obj = {
//   name: "Avishek",
//   roll: 13,
//   year: "3rd",
//   myfun: function () {
//     console.log(`my name is ${this.name}`);
//   },
//   myfun2: () => {
//     // this.myfun;
//     console.log(`my roll is ${this.roll}`);
//   },
// };

// obj.myfun(); // my name is Avishek
// obj.myfun2(); // my roll is undefined

//Defarance between arrow function and normal function
// const obj = {
//   name: "Avishek",
//   roll: 13,
//   year: "3rd",
//   myfun: function () {
//     console.log(this);
//   },
//   myfun2: () => {
//     console.log(this);
//   },
// };

// obj.myfun();
/*
{
  name: 'Avishek',
  roll: 13,
  year: '3rd',
  myfun: [Function: myfun],
  myfun2: [Function: myfun2]
}

*/
// obj.myfun2(); // {}
