"use strict";
//--------------------------------------- Passing argument to a function
// const greetUser = (name: string) => {
//     console.log(`Hello ${name}`);
// }
// const myName: string = 'Akash';
// const myNumber: number = 45;
// greetUser(myName);
//--------------------------------------- Setting return type of a function
// const sum = (a: number, b: number): number => {
//     return a + b;
// };
// console.log(sum(1, 10));
//--------------------------------------- Type of a function
const delayedCall = (fn) => {
    setTimeout(fn, 1000);
};
delayedCall(function () {
    console.log("hi there");
});
