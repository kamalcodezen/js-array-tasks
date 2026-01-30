/*====================================
    3. Checking Array Membership with ‘includes’.

  Instructions:
 1.  Create an array of books containing different book.
   
 2.  Use the includes method to check if the array contains a javascript book.
   
 3.  Print a message to the console indicating whether the element is present in the array or not.
=================================== */

// 1.  Create an array of books containing different book.
let book = ["english", "bengali", "history", "javascript"];


console.log(book.includes("javascript")); // 1st way

if (book.includes("javascript")) {      //2nd way
    console.log("JavaScript book is available");
} else {
    console.log("JavaScript book is not available");
}

console.log(book);
