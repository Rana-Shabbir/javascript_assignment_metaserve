/******************************** Javascript Assignment ******************************************/

/**
 * Q 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default
 *       with a message that reads I love JavaScript. Make a large shirt and a medium shirt
 *       with the default message, and a shirt of any size with a different message.
 */

function make_shirt(size = "Large", message = "I love Javascript") {
  console.log(`Size of shirt is ${size} and message on shirt is ${message}`);
}
make_shirt();
make_shirt("medium", "make it possible");
make_shirt("small", "Unstopable");

/**
 * A37: Size of shirt is Large and message on shirt is I love Javascript
        Size of shirt is medium and message on shirt is make it possible
        Size of shirt is small and message on shirt is Unstopable
 */

/* *********************************************************************************************** */
