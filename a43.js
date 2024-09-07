// UNCHANGED MAGICIANS
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// Create a copy of the original magician names array
var originalMagicians = __spreadArray([], magicianNames, true);
// Adding "the Great" to magician names in a new array
var greatMagicians = make_great(__spreadArray([], magicianNames, true));
// Displaying the original list of magicians
console.log("Original Magicians:");
show_magicians(originalMagicians);
// Displaying the modified list of magicians
console.log("\nModified Magicians:");
show_magicians(greatMagicians);
