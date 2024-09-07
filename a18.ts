// SEEING THE WORLD 

let WorldPlaces: string[] = ["KSA", "UAE", "USA", "Japan", "NZ"];

console.log(WorldPlaces);

// ALPHABETICAL ORDER WORLD PLACES

let AlphabeticalOrderWorldPlaces: string[] = [...WorldPlaces];

AlphabeticalOrderWorldPlaces.sort();

console.log(AlphabeticalOrderWorldPlaces);

console.log(WorldPlaces);

// REVERSE ALPHABETICAL ORDER WORLD PLACES

let ReverseAlphabeticalOrderWorldPlaces: string [] = [...WorldPlaces];

ReverseAlphabeticalOrderWorldPlaces.sort((a,b) => b.localeCompare(a));

console.log(ReverseAlphabeticalOrderWorldPlaces);

console.log(WorldPlaces);

let ReverseOrderWorldPlaces: string[] = [...WorldPlaces];

ReverseOrderWorldPlaces.reverse();

console.log(ReverseOrderWorldPlaces);

console.log(WorldPlaces);

// SORT ORDER WORLD PLACES

let SortOrder: string[] = [...WorldPlaces];

SortOrder.sort();

console.log(SortOrder);

// REVERSE SORT ORDER WORLD PLACES

let ReverseSortOrder: string [] = [...WorldPlaces];

ReverseSortOrder.sort((a,b) => b.localeCompare(a));

console.log(ReverseSortOrder);
