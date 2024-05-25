// const user = new Object({
//   name: "Avishek",
//   roll: 13,
//   year: "3rd",
//   topic: "Web Development",
// }); // this is a singleton object

const user = {
  name: "Avishek",
  roll: 13,
  year: "3rd",
  topic: "Web Development",
  a: "somthing",
};

const newUser = {
  name: "Neel Akash",
  roll: 25,
  year: "3rd",
  topic: "Web Development",
  b: "somthing",
};

//01 -> Object.assign()
// const mergeObj = Object.assign({}, newUser, user);
// console.log(mergeObj); // the key should be unique.

/* 
{
  name: 'Avishek',
  roll: 13,
  year: '3rd',
  topic: 'Web Development',
  b: 'somthing',
  a: 'somthing'
}
*/

//02 -> spread oprator
// const mergeObj = { ...user, ...newUser };
// console.log(mergeObj);
/*
{
  name: 'Neel Akash',
  roll: 25,
  year: '3rd',
  topic: 'Web Development',
  a: 'somthing',
  b: 'somthing'
}
*/

// Get all keys and value in a object
//keys-
// console.log(Object.keys(user)); // [ 'name', 'roll', 'year', 'topic', 'a' ] it is a form of array

//values-
// console.log(Object.values(user)); // [ 'Avishek', 13, '3rd', 'Web Development', 'somthing' ] it is a form of array

// Object Destructing

// const { name } = user;
// console.log(name); // Avishek

// const { name: username } = user; // we can change the name of the destructing value
// console.log(username); // Avishek
