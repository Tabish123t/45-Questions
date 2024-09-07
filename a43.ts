// UNCHANGED MAGICIANS

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Function to display magician names
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician names
let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Create a copy of the original magician names array
let originalMagicians: string[] = [...magicianNames];

// Adding "the Great" to magician names in a new array
let greatMagicians: string[] = make_great([...magicianNames]);

// Displaying the original list of magicians
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Displaying the modified list of magicians
console.log("\nModified Magicians:");
show_magicians(greatMagicians);