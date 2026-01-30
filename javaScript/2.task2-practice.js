/**=================================
 * 2. Add or remove elements
       1. Declare an array of 3 tourist destinations
       2. Add a new tourist destination to your tourist array
       3. Add two more to your array
       4. Remove the last tourist destination you have added
       5. display the final array as output
 *================================= */


// 1. Declare an array of 3 tourist destinations
let tourist = ["goa", "delhi", "digha"];

tourist.push("maldives"); // 2. Add a new tourist destination to your tourist array
console.log(tourist);

tourist.push("india gate", "jama masjid");  //3. Add two more to your array
console.log(tourist);

tourist.pop();  //4. Remove the last tourist destination you have added

console.log(tourist); //5. display the final array as output
