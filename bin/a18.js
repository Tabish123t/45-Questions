"use strict";
// SEEING THE WORLD 
Object.defineProperty(exports, "__esModule", { value: true });
let WorldPlaces = ["KSA", "UAE", "USA", "Japan", "NZ"];
console.log(WorldPlaces);
// ALPHABETICAL ORDER WORLD PLACES
let AlphabeticalOrderWorldPlaces = [...WorldPlaces];
AlphabeticalOrderWorldPlaces.sort();
console.log(AlphabeticalOrderWorldPlaces);
console.log(WorldPlaces);
// REVERSE ALPHABETICAL ORDER WORLD PLACES
let ReverseAlphabeticalOrderWorldPlaces = [...WorldPlaces];
ReverseAlphabeticalOrderWorldPlaces.sort((a, b) => b.localeCompare(a));
console.log(ReverseAlphabeticalOrderWorldPlaces);
console.log(WorldPlaces);
let ReverseOrderWorldPlaces = [...WorldPlaces];
ReverseOrderWorldPlaces.reverse();
console.log(ReverseOrderWorldPlaces);
console.log(WorldPlaces);
// SORT ORDER WORLD PLACES
let SortOrder = [...WorldPlaces];
SortOrder.sort();
console.log(SortOrder);
// REVERSE SORT ORDER WORLD PLACES
let ReverseSortOrder = [...WorldPlaces];
ReverseSortOrder.sort((a, b) => b.localeCompare(a));
console.log(ReverseSortOrder);
