// ALBUM
function make_album(artist_name, album_title, tracks) {
    var album = { artist: artist_name, title: album_title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating album objects
var album1 = make_album("Atif Aslam", "Doorie");
var album2 = make_album("Ali Zafar", "Jhoom", 9);
var album3 = make_album("Shahzad Roy", "Teri Soorat");
// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);
