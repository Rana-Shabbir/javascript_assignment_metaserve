/******************************** Javascript Assignment ******************************************/

/**
 * Q 40: Album: Write a function called make_album() that builds a Object describing a music album.
 *       The function should take in an artist name and an album title, and it should return a Object
 *       containing these two pieces of information. Use the function to make three dictionaries representing
 *       different albums. Print each return value to show that Objects are storing the album information
 *       correctly. Add an optional parameter to make_album() that allows you to store the number of tracks
 *       on an album. If the calling line includes a value for the number of tracks, add that value to the
 *       album’s Object. Make at least one new function call that includes the number of tracks on an album.
 */

function make_album(artist_Name, album_title, tracks = 0) {
  var data = {
    artist_Name,
    album_title,
  };
  if (tracks) {
    data.tracks = tracks;
  }
  return data;
}

console.log(make_album("rana", "abc"));
console.log(make_album("umair", "abc_music"));
console.log(make_album("hani", "cda_music"));
console.log(make_album("shan", "tu hi hai", 2));

/**
 * A40: { artist_Name: 'rana', album_title: 'abc' }
        { artist_Name: 'umair', album_title: 'abc_music' }
        { artist_Name: 'hani', album_title: 'cda_music' }
        { artist_Name: 'shan', album_title: 'tu hi hai', tracks: 2 }
 */

/* *********************************************************************************************** */
