/**
 * Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
 */

let books = ["bengali", "english", "history", "math", "biology", "javaScript"];

console.log(books.includes("javaScript"));

if (books.includes("javaScript")) {
    console.log("The element is present in the array")
} else {
    console.log("The element is present not array");
}