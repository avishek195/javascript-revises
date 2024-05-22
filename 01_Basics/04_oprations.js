// console.log("1" + 2); // 12
// console.log(2 + "1"); // 21
// console.log("1" + 2 + 2); // 122
// console.log(2 + 2 + "1"); // 41

//confusion code
// console.log(+true); // 1
// console.log(true+); // error
// console.log(+""); // 0
// let x = 10;
// console.log(++(++x)); //error - invalid expression

// let x2 = 3n; // 3n -> BigInt(datatype)
// const y2 = x2++;
// console.log(typeof x2); // BigInt
// console.log(typeof y2); //BigInt
// console.log(x2); // 4n
// console.log(y2); // 3n

// let x = 3;
// const y = x++;
// x is 4; y is 3

// let x = 3;
// const y = ++x;
// x is 4; y is 4

//Avoid these conditions

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0);// true
// console.log(null === 0); // false

// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined === 0); // false
