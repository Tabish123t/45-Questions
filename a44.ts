// SANDWICHES

function makeSandwich(...ingredients: string[]): void {
    console.log("Sandwich ingredients:");
    ingredients.forEach(item => console.log(`- ${item}`));
    console.log("\n");
}

// CALLING THE FUNCTION

makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana");