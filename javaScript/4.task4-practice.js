/*=======================================
4. Checking if it's an Array
Instructions:

1. Create different variables, each containing either an array or a non-array value.

2 .Now use isArray to check if each variable is an array.

3.  Print a message to the console indicating whether each variable is an array or not.
 ======================================== */

let marks = [23, 45, 56, 89, 67];

let age = 67;

let str = "bmw";


if (Array.isArray(age)) {
    console.log("This variable is an array");
} else {
    console.log("This variable is not array");
}

console.log(Array.isArray(str));
console.log(Array.isArray(marks));