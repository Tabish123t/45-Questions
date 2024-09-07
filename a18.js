// SEEING THE WORLD 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var WorldPlaces = ["KSA", "UAE", "USA", "Japan", "NZ"];
console.log(WorldPlaces);
// ALPHABETICAL ORDER WORLD PLACES
var AlphabeticalOrderWorldPlaces = __spreadArray([], WorldPlaces, true);
AlphabeticalOrderWorldPlaces.sort();
console.log(AlphabeticalOrderWorldPlaces);
console.log(WorldPlaces);
// REVERSE ALPHABETICAL ORDER WORLD PLACES
var ReverseAlphabeticalOrderWorldPlaces = __spreadArray([], WorldPlaces, true);
ReverseAlphabeticalOrderWorldPlaces.sort(function (a, b) { return b.localeCompare(a); });
console.log(ReverseAlphabeticalOrderWorldPlaces);
console.log(WorldPlaces);
var ReverseOrderWorldPlaces = __spreadArray([], WorldPlaces, true);
ReverseOrderWorldPlaces.reverse();
console.log(ReverseOrderWorldPlaces);
console.log(WorldPlaces);
// SORT ORDER WORLD PLACES
var SortOrder = __spreadArray([], WorldPlaces, true);
SortOrder.sort();
console.log(SortOrder);
// REVERSE SORT ORDER WORLD PLACES
var ReverseSortOrder = __spreadArray([], WorldPlaces, true);
ReverseSortOrder.sort(function (a, b) { return b.localeCompare(a); });
console.log(ReverseSortOrder);
