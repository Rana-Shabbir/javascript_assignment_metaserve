/******************************** Javascript Assignment ******************************************/

/**
 * Q 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 *       with a copy of the array of magicians’ names. Because the original array will be unchanged,
 *       return the new array and store it in a separate array. Call show_magicians() with each array
 *       to show that you have one array of the original names and one array with the Great added to each
 *       magician’s name.
 */

var magician_Names = ["atif", "arjit", "sonu", "bilal saeed"];

function show_magicians(name) {
  for (var index = 0; index < name.length; index++) {
    console.log(name[index]);
  }
}
show_magicians(magician_Names);

function make_great(name) {
  var great_names = [];
  for (var index = 0; index < name.length; index++) {
    great_names[index] = "Great " + magician_Names[index];
  }
  return great_names;
}
show_magicians(make_great(magician_Names));

/**
 * A43: atif
        arjit
        sonu
        bilal saeed
        Great atif
        Great arjit
        Great sonu
        Great bilal saeed
 */

/* *********************************************************************************************** */
