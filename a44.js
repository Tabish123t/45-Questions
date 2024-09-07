// SANDWICHES
function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Sandwich ingredients:");
    ingredients.forEach(function (item) { return console.log("- ".concat(item)); });
    console.log("\n");
}
// Example calls:
makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana");
