/******************************** Javascript Assignment ******************************************/

/**
 * Q 35: Animals: Think of at least three different animals that have a common characteristic.
 *       Store the names of these animals in a list, and then use a for loop to print out the
 *       name of each animal. • Modify your program to print a statement about each animal,
 *       such as A dog would make a great pet. • Add a line at the end of your program stating
 *       what these animals have in common. You could print a sentence such as Any of these
 *       animals would make a great pet!
 */

var common_animals = ["Horses", "Donkeys", "Zebras"];

for (let index = 0; index < common_animals.length; index++) {
  console.log(`${common_animals[index]}`);
  if (common_animals[index] === "Horses") {
    console.log(`${common_animals[index]} is very fast, I love to ride on it`);
  } else if (common_animals[index] === "Donkeys") {
    console.log(
      `${common_animals[index]} is very usefull, people use it for migrating their goods`
    );
  } else if (common_animals[index] === "Zebras") {
    console.log(`${common_animals[index]} is very delicious animal for lions`);
  }
}
console.log(
  `They all animals ${common_animals} are mostly same according to their body`
);

/**
 * A35: Horses
        Horses is very fast, I love to ride on it
        Donkeys
        Donkeys is very usefull, people use it for migrating their goods
        Zebras
        Zebras is very delicious animal for lions
        They all animals Horses,Donkeys,Zebras are mostly same according to their body
 */

/* *********************************************************************************************** */
