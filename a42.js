// GREAT MAGICIANS
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Function to display magician names
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of magician names
var magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Adding "the Great" to magician names
var greatMagicians = make_great(magicianNames);
// Displaying the modified list of magicians
show_magicians(greatMagicians);
