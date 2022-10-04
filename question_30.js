/******************************** Javascript Assignment ******************************************/

/**
 * Q30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
 *      Imagine you are writing code that will print a greeting to each user after they 
 *      log in to a website. Loop through the array, and print a greeting to each user:

      • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
      • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 */

var usernames = ["umair", "rana", "kami", "hani", "admin", "ali"];

for (let index = 0; index < usernames.length; index++) {
  if (usernames[index] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${usernames[index]} thank you for logging in again.`);
  }
}

/**
 * A30: Hello umair thank you for logging in again.
        Hello rana thank you for logging in again.
        Hello kami thank you for logging in again.
        Hello hani thank you for logging in again.
        Hello admin, would you like to see a status report?
        Hello ali thank you for logging in again.
 */

/* *********************************************************************************************** */
