/******************************** Javascript Assignment ******************************************/

/**
 * Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need
 * to send out a new set of invitations. You’ll have to think of someone else to invite.
 */

// One way
var peopleInvite = ["Umair", "Hadi", "zain"];

for (let index = 0; index < peopleInvite.length; index++) {
  if (peopleInvite[index] === "Umair") {
    console.log(peopleInvite[index] + " not able to join");
    peopleInvite[index] = "ali";
  }
  console.log(
    "Dear friend your are invite for dinner today :- " + peopleInvite[index]
  );
}

// second way
var peopleInvite = ["Umair", "Hadi", "zain"];

if (peopleInvite[1] === "Hadi") {
  console.log(peopleInvite[1] + " not able to join");
  peopleInvite.splice(peopleInvite.indexOf("Hadi"), 1);
  peopleInvite.push("ali");

  for (let index = 0; index < peopleInvite.length; index++) {
    console.log(
      "Dear friend your are invite for dinner today :- " + peopleInvite[index]
    );
  }
}

/**
 * A15:  Umair not able to join
         Dear friend your are invite for dinner today :- ali
         Dear friend your are invite for dinner today :- Hadi
         Dear friend your are invite for dinner today :- zain
 */

/* ********************************************************************************************** */
