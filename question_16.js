/******************************** Javascript Assignment ******************************************/

/**
 * Q16: More Guests: You just found a bigger dinner table, so now more space is available. 
 * Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of 
  your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one
  new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

 */

var peopleInvite = ["Umair", "Hadi", "zain"];

if (peopleInvite[1] === "Hadi") {
  console.log(peopleInvite[1] + " not able to join");
  peopleInvite.splice(peopleInvite.indexOf("Hadi"), 1);
  peopleInvite.splice(0, 0, "ali");
  peopleInvite.splice(2, 0, "uzair");
  peopleInvite.push("rana");

  for (let index = 0; index < peopleInvite.length; index++) {
    console.log(
      "Dear friend your are invite for dinner today :- " + peopleInvite[index]
    );
  }
}

/**
 * A16:  Hadi not able to join
         Dear friend your are invite for dinner today :- ali
         Dear friend your are invite for dinner today :- Umair
         Dear friend your are invite for dinner today :- uzair
         Dear friend your are invite for dinner today :- zain
         Dear friend your are invite for dinner today :- rana
 */

/* ********************************************************************************************** */
