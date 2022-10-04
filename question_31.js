/******************************** Javascript Assignment ******************************************/

/**
 * Q 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
    
    • If the list is empty, print the message We need to find some users!
    • Remove all of the usernames from your array, and make sure the correct message is printed.
 */

// 1 solution
var user_Names = ["umair", "ali"];

if (user_Names.length === 0) {
  console.log("We need to find some users!");
} else {
  user_Names.pop();
  user_Names.pop();
  console.log("We need to find some users!");
}

// 2 solution
var usernames = [];

if (usernames.length) {
  for (var i = 0; i < usernames.length; i++) {
    if (names[i] === "umair") {
      console.log("Hello ali, would you like to come with me?");
    }
  }
} else {
  console.log("We need to find some users!");
}

/**
 * A31: We need to find some users!
        We need to find some users!
 */

/* *********************************************************************************************** */
