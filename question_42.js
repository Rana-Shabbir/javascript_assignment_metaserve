/******************************** Javascript Assignment ******************************************/

/**
 * Q 42: Great Magicians: Start with a copy of your program from Exercise 39.
 *       Write a function called make_great() that modifies the array of magicians
 *       by adding the phrase the Great to each magician’s name. Call show_magicians()
 *       to see that the list has actually been modified.
 */

var magician_Names = ["atif", "arjit", "sonu", "bilal saeed"];

function show_magicians(name) {
  for (var index = 0; index < name.length; index++) {
    console.log(name[index]);
  }
}

function make_great(name) {
  var great_names = [];
  for (var index = 0; index < name.length; index++) {
    great_names[index] = "Great " + magician_Names[index];
  }
  return great_names;
}
show_magicians(make_great(magician_Names));

/**
 * A42: Great atif
        Great arjit
        Great sonu
        Great bilal saeed
 */

/* *********************************************************************************************** */
