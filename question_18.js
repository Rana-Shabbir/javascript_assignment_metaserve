/******************************** Javascript Assignment ******************************************/

/**
 * Q18: Seeing the World: Think of at least five places in the world you’d like to visit.

    • Store the locations in a array. Make sure the array is not in alphabetical order.
    • Print your array in its original order.
    • Print your array in alphabetical order without modifying the actual list.
    • Show that your array is still in its original order by printing it.
    • Print your array in reverse alphabetical order without changing the order of the original list.
    • Show that your array is still in its original order by printing it again.
    • Reverse the order of your list. Print the array to show that its order has changed.
    • Reverse the order of your list again. Print the list to show it’s back to its original order.
    • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
    • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 */

var myPlaces = ["karachi", "mary", "islamabad", "new york", "canada", "africa"];

console.log("places original order ", myPlaces);
console.log("places alphabetical order ", [...myPlaces].sort());
console.log("places original order ", myPlaces);
console.log("places reverse alphabetical order ", [...myPlaces].reverse());
console.log("places original order ", myPlaces);
console.log("places reverse alphabetical order ", [...myPlaces].reverse());
console.log("places reverse alphabetical order ", [...myPlaces].reverse());
console.log("places alphabetical order ", [...myPlaces].sort().reverse());
console.log("places alphabetical order ", myPlaces);

/**
 * A18:  places original order  [ 'karachi', 'mary', 'islamabad', 'new york', 'canada', 'africa' ]
         places alphabetical order  [ 'africa', 'canada', 'islamabad', 'karachi', 'mary', 'new york' ]
         places original order  [ 'karachi', 'mary', 'islamabad', 'new york', 'canada', 'africa' ]
         places reverse alphabetical order  [ 'africa', 'canada', 'new york', 'islamabad', 'mary', 'karachi' ]
         places original order  [ 'karachi', 'mary', 'islamabad', 'new york', 'canada', 'africa' ]
         places reverse alphabetical order  [ 'africa', 'canada', 'new york', 'islamabad', 'mary', 'karachi' ]
         places reverse alphabetical order  [ 'africa', 'canada', 'new york', 'islamabad', 'mary', 'karachi' ]
         places alphabetical order  [ 'new york', 'mary', 'karachi', 'islamabad', 'canada', 'africa' ]
         places alphabetical order  [ 'karachi', 'mary', 'islamabad', 'new york', 'canada', 'africa' ]
 */

/* *********************************************************************************************** */
