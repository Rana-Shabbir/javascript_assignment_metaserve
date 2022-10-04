/******************************** Javascript Assignment ******************************************/

/**
 * Q 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 *       The function should have one parameter that collects as many items as the function call provides,
 *       and it should print a summary of the sandwich that is being ordered. Call the function three times,
 *       using a different number of arguments each time.
 */

var sandwich_1 = ["tamatos", "meat", "salad", "cheese"];
var sandwich_2 = ["chilli", "chicken", "garlic", "cheese"];
var sandwich_3 = ["tamatos", "patato", "metton", "cheese"];

function items(params) {
  for (let index = 0; index < params.length; index++) {
    console.log(params[index]);
  }
}
items(sandwich_1);
items(sandwich_2);
items(sandwich_3);

/**
 * A44: tamatos
        meat
        salad
        cheese
        chilli
        chicken
        garlic
        cheese
        tamatos
        patato
        metton
        cheese
 */

/* *********************************************************************************************** */
