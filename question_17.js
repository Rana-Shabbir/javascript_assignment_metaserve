/******************************** Javascript Assignment ******************************************/

/**
 * Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive 
 * in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying
  that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. 
  Each time you pop a name from your list, print a message to that person letting them know 
  you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
  actually have an empty list at the end of your program.
 */

var peopleInvite = ["Umair", "Hadi", "zain"];

if (peopleInvite[1] === "Hadi") {
  console.log(peopleInvite[1] + " not able to join");
  peopleInvite.splice(peopleInvite.indexOf("Hadi"), 1);

  peopleInvite.splice(0, 0, "ali");
  peopleInvite.splice(2, 0, "uzair");

  while (peopleInvite.length > 2) {
    console.log(
      "Dear friends so sorry invitation is cancel due to heavy rain :- " +
        peopleInvite.pop()
    );
  }

  for (let index = 0; index < peopleInvite.length; index++) {
    console.log(
      "Dear friends you are invite for dinner :- " + peopleInvite[index]
    );
  }

  peopleInvite.pop();
  peopleInvite.pop();
  console.log(peopleInvite);
}

/**
 * A17:  Hadi not able to join
         Dear friends so sorry invitation is cancel due to heavy rain :- zain
         Dear friends so sorry invitation is cancel due to heavy rain :- uzair
         Dear friends you are invite for dinner :- ali
         Dear friends you are invite for dinner :- Umair
         []
 */

/* ********************************************************************************************** */
