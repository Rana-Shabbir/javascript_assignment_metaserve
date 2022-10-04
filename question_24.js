/******************************** Javascript Assignment ******************************************/

/**
 * Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
 *      If you want to try more comparisons, write more tests. Have at least one True and one 
 *      False result for each of the following:

        • Tests for equality and inequality with strings
        • Tests using the lower case function
        • Numerical tests involving equality and inequality, greater than and less than, greater 
          than or equal to, and less than or equal to
        • Tests using "and" and "or" operators
        • Test whether an item is in a array
        • Test whether an item is not in a array
 */

var nationality = "Pakistani";
var age = 30;
var names = ["Zaka", "Abbas"];

// string
console.log(nationality === "U.S.A"); // false
console.log(nationality === "Pakistani"); // true
console.log(nationality === "pakistani"); // false
console.log(nationality.toLowerCase() === "pakistani"); // true

// number
console.log(age === 30); // true
console.log(age === 40); // false
console.log(age > 40); // false
console.log(age < 40); // true
console.log(age >= 30); // true
console.log(age <= 30); // true

// "and" and "or"
console.log(nationality === "Pakistani" && age > 20); // true
console.log(nationality === "Pakistani" && age > 50); // false

console.log(names.includes("Abbas")); // true
console.log(names.includes("Rana")); // false

/**
 * A24: false
        true
        false
        true
        true
        false
        false
        true
        true
        true
        true
        false
        true
        false
 */

/* *********************************************************************************************** */
