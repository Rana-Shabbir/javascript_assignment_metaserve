/******************************** Javascript Assignment ******************************************/

/**
 * Q 45: Cars: Write a function that stores information about a car in a Object.
 *       The function should always receive a manufacturer and a model name.
 *       It should then accept an arbitrary number of keyword arguments. Call the
 *       function with the required information and two other name-value pairs, such as a
 *       color or an optional feature. Print the Object that’s returned to make sure all
 *       the information was stored correctly.
 */

function car(manufacturer, model) {
  return {
    manufacturer,
    model,
    color: "red",
    average: "40 kilometers",
  };
}
console.log(car("Honda", "BRV 2022"));
console.log(car("Toyota", "Yaris"));

/**
 * A45: {
        manufacturer: 'Honda',
        model: 'BRV 2022',
        color: 'red',
        average: '40 kilometers'
        }
        {
        manufacturer: 'Toyota',
        model: 'Yaris',
        color: 'red',
        average: '40 kilometers'
        }
 */

/* *********************************************************************************************** */
