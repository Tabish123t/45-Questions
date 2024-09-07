// ANIMALS
var Animals = ["Dog", "Cat", "Mouse"];
Animals.forEach(function (Animals) {
    console.log(Animals);
});
for (var _i = 0, Animals_1 = Animals; _i < Animals_1.length; _i++) {
    var Animal = Animals_1[_i];
    if (Animal === "Dog") {
        console.log("A ".concat(Animal, " would make a great pet!"));
    }
    else if (Animal === "Cat") {
        console.log("A ".concat(Animal, " is preety animal"));
    }
    else if (Animal === "Mouse") {
        console.log("A ".concat(Animal, " is a very bad animal"));
    }
}
console.log("A common things between ".concat(Animals, " is that they are easily found at home & also there is cartoon made out of these animals called \"TOM & JERRY\""));
