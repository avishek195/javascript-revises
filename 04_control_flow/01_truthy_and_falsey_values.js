/* 
 Falsy values-
 false, 0, -0, BigInt-> 0n, null,"", undefined, NaN
 * /



/*

Truthy values
 "0", 'false', " ", [], {}, function(){}

 */

// find a object is empty or not.
// const obj = {};
// console.log(Object.keys(obj).length);

//find an array is empty or not
// const arr = [];
// console.log(arr.length);

// Nullish coalescing operator (??): null undefined

// let val;
// val = null ?? 10;
// console.log(val);// 10

// val = undefined ?? 20;
// console.log(val); // 20

// Another way
// let val;
// val = null || 10;
// console.log(val); // 10

// val = undefined || 20;
// console.log(val); // 20
