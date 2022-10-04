/******************************** Javascript Assignment ******************************************/

/**
 * Q 38: Cities: Write a function called describe_city() that accepts the name of a city and its country.
 *       The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
 *       for the country a default value. Call your function for three different cities, at least one of
 *       which is not in the default country.
 */

function describe_city(name = "Karachi", country = "Pakistan") {
  console.log(`The ${name} is in ${country}`);
}
describe_city();
describe_city("new york", "United State");
describe_city("Dheli", "India");
describe_city("madina", "Saudia Arabia");

/**
 * A38: The Karachi is in Pakistan
        The new york is in United State
        The Dheli is in India
        The madina is in Saudia Arabia
 */

/* *********************************************************************************************** */
