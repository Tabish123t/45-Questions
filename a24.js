// MORE CONDITIONAL TEST
// EQUALITY & INEQUALITY
var bag = "Leather Bag";
// EQUALITY
console.log("Is bag == 'Leather Bag'? I predict true.");
console.log(bag == 'Leather Bag');
// INEQUALITY
console.log("Is bag != 'Leather Bag'? I predict false");
console.log(bag != "Leather Bag");
// LOWER CASE FUNCTION
// TRUE
var animal = 'Lion';
console.log("Is animal in lowercase == 'lion'? I predict True.");
console.log(animal.toLowerCase() == 'lion');
// FALSE
var birds = 'parrot';
console.log("Is bird in lowercase == 'Parrot'? I predict false");
console.log(birds.toLowerCase() == 'Parrot');
// NUMERICAL TESTS
// EQUALITY IN INTEGERS
var equal_number = 13;
console.log("Is equal_number == '13'? I predict true");
console.log(equal_number == 13);
// INEQUALITY IN INTEGERS
var not_equal_number = 22;
console.log("Is equal_number == '13'? I predict false");
console.log(not_equal_number == 13);
// GREATER THAN 
var number_gt = 99;
console.log("Is number_gt > 90?. I predict true");
console.log(number_gt > 90);
// LESS THAN 
var number_lt = 45;
console.log("Is number_gt < 30?. I predict false");
console.log(number_lt < 30);
// GREATER THAN OR EQUAL TO
var gt_et = 18;
console.log("Is gt_et >= 18? I predict true");
console.log(gt_et >= 18);
// LESS THAN OR EQUAL TO
var lt_et = 100;
console.log("Is lt_et <= 100? I predict false");
console.log(lt_et <= 48);
// AND && OPERATOR
var a = 6;
var b = 6;
console.log("Is a && b == 6? I predict true");
console.log(a && b == 6);
// NOT || OPERATOR
var x = 3;
var y = 8;
console.log("Is y<2 or x>7? I predict false");
console.log(y < 2 || x > 7);
// ARRAY TEST TRUE
var color = ["Red", "Blue", "Green", "Yellow"];
var checkcolor = "Red";
console.log("Is 'Red' is in the array of colors? I predict true");
console.log(color.includes(checkcolor));
// ARRAY TEST FALSE
var colour = ["Red", "Blue", "Green", "Yellow"];
var checkcolur = "Black";
console.log("Is 'Black' is in the array of colour? I predict false");
console.log(colour.includes(checkcolur));
