/******************************** Javascript Assignment ******************************************/

/**
 * Q 32: Checking Usernames: Do the following to create a program that simulates how websites 
 *      ensure that everyone has a unique username.

    • Make a list of five or more usernames called current_users.
    • Make another list of five usernames called new_users. Make sure one or two of the 
      new usernames are also in the current_users list.
    • Loop through the new_users list to see if each new username has already been used. 
      If it has, print a message that the person will need to enter a new username. If a 
      username has not been used, print a message saying that the username is available.
    • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */

var current_users = ["ali", "umair", "rana", "hani", "kami"];
var new_users = ["ali", "umair", "Rana", "anwar", "mehroz", "khurram"];

for (let index = 0; index < new_users.length; index++) {
  if (
    current_users.includes(
      new_users[index] &&
        new_users[index].toUpperCase() &&
        new_users[index].toLowerCase()
    )
  ) {
    console.log(
      `${new_users[index]} is already exist please, enter a new username.`
    );
  } else {
    console.log(`${new_users[index]}  username is available.`);
  }
}

/**
 * A32: ali is already exist please, enter a new username.
        umair is already exist please, enter a new username.
        Rana is already exist please, enter a new username.
        anwar  username is available.
        mehroz  username is available.
        khurram  username is available.
 */

/* *********************************************************************************************** */
