// ANIMALS

let Animals: string[] = ["Dog", "Cat", "Mouse"];

Animals.forEach(Animals => {
    console.log(Animals)
});

for (let Animal of Animals) {
    if (Animal === "Dog") {
        console.log(`A ${Animal} would make a great pet!`);
    }

    else if (Animal === "Cat") {
        console.log(`A ${Animal} is preety animal`);
    }

    else if (Animal === "Mouse") {
        console.log(`A ${Animal} is a very bad animal`);
    }
}

console.log(`A common things between ${Animals} is that they are easily found at home & also there is cartoon made out of these animals called "TOM & JERRY"`);