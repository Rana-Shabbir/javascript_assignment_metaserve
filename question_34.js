/******************************** Javascript Assignment ******************************************/

/**
 * Q 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
 *       and then use a for loop to print the name of each pizza.

    • Modify your for loop to print a sentence using the name of the pizza instead of printing just 
      the name of the pizza. For each pizza you should have one line of output containing a simple 
      statement like I like pepperoni pizza.
    • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
      The output should consist of three or more lines about the kinds of pizza you like and then an 
      additional sentence, such as I really love pizza!
 */

favourite_pizzas = ["broadway_pizza", "newyork_pizza", "pizza_hut"];

for (let index = 0; index < favourite_pizzas.length; index++) {
  console.log(`${favourite_pizzas[index]}`);
  console.log(`I like ${favourite_pizzas[index]}`);
}
console.log(
  `Pizza is the only food make love between your partner that why I really love pizza  `
);

/**
 * A34: broadway_pizza
        I like broadway_pizza
        newyork_pizza
        I like newyork_pizza
        pizza_hut
        I like pizza_hut
        Pizza is the only food make love between your partner that why I really love pizza  
 */

/* *********************************************************************************************** */
