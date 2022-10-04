/******************************** Javascript Assignment ******************************************/

/**
 * Q22: Intentional Error: If you haven’t received an array index error in one of your programs yet,
 *      try to make one happen. Change an index in one of your programs to produce an index error.
 *      Make sure you correct the error before closing the program.
 */

var thing = [
  (mountains = ["monthainA", "monthainB", "monthainC"]),
  (place = ["placeA", "placeB", "placeC"]),
  (river = ["riverA", "riverB", "riverC"]),
];

console.log(thing[3]);
thing[3] = classes = ["classs1", "classs2", "classs3"];
console.log(thing[3]);
console.log(thing);

/**
 * A22: undefined
        [ 'classs1', 'classs2', 'classs3' ]
        [
          [ 'monthainA', 'monthainB', 'monthainC' ],
          [ 'placeA', 'placeB', 'placeC' ],
          [ 'riverA', 'riverB', 'riverC' ],
          [ 'classs1', 'classs2', 'classs3' ]
        ]
 */

/* *********************************************************************************************** */
