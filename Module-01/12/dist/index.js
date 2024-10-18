"use strict";
// CALLBACK
// function test(a: number, b: number) {
//     return a + b;
// }
// console.log(test(5, 5));
// function callback(cb: (a: number, b: number) => number) {
//     return cb;
// }
// console.log(callback(test(5, 5)))
///////////////
// ASYNCHRONUS
//////////////
console.log(1);
setTimeout(() => {
    console.log("Asynchronus");
}, 0);
console.log(2);
