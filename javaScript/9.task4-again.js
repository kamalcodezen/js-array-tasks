/**
 * Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
 */

let num1 = [2, 4, 5, 8, 3, 5];
let num2 = "kamal";


if (Array.isArray(num1)) {
    console.log("num1 variable is an array");
} else {
    console.log("num1 variable is not an array");
}


if (Array.isArray(num2)) {
    console.log("num2 variable is an array");
} else {
    console.log("num2 variable is not an array");
}

