// MAGICIANS

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// ARRAY OF MAGICIANS NAMES
let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// CALLING THE FUNCTION
show_magicians(magicianNames);