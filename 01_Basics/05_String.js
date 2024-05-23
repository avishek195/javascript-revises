// let userName = "Avishek";
// let sameName = userName;
// let anotherName = new String("Avishek"); // check this into windows console for better understanding.
// let sameAnotherName = anotherName;

// console.log(userName === sameName); //true
// console.log(sameAnotherName === anotherName); //true

// console.log(typeof sameName); // string
// console.log(typeof sameAnotherName); // object
// console.log(sameName); // "Avishek"
// console.log(sameAnotherName); // [String : "Avishek"]

// sameName = "Avi";
// sameAnotherName = "Avi";

// console.log(userName === sameName); //false
// console.log(sameAnotherName === anotherName); //false

// console.log(userName); // "Avishek"
// console.log(anotherName); // [String : "Avishek"]

// console.log(anotherName.__proto__); // {} .So check this into window console for better understanding.

//To study about string methods, the best practice is mdn docs.

// console.log("2" > 2); // false
// console.log("2" >= 2); // true
// console.log("2" == 2); // true
// console.log("2" === 2); // false

/*   ---------------------------------------------------------------   */

// Strings Methods...

//1 substring
// let userName = "Avishek";
// console.log(userName.substring(0, 7)); // negative value is not allowed

//2 slice
// let userName = "Avishek";
// console.log(userName.slice(-100, 7)); // negative value is allowed

//3 includes

// let username = "Avishek";

// console.log(username.includes("Avi"));// true;

//4 etc.
