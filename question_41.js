/******************************** Javascript Assignment ******************************************/

/**
 * Q 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 *       which prints the name of each magician in the array.
 */

var magician_Names = ["atif", "arjit", "sonu", "bilal saeed"];

function show_magicians(name) {
  for (var index = 0; index < name.length; index++) {
    console.log(name[index]);
  }
}
show_magicians(magician_Names);

/**
 * A41: atif
        arjit
        sonu
        bilal saeed
 */

/* *********************************************************************************************** */
