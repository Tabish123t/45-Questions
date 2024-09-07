// GREAT MAGICIANS

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

// Adding "the Great" to magician names
let greatMagicians: string[] = make_great(magicianNames);

// Displaying the modified list of magicians
show_magicians(greatMagicians);