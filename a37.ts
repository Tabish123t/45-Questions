// LARGE SHIRTS

function make_shirt(size:string = "Large", message: string = "I Love Typescript"): void {
    console.log(`The size is ${size}, and message is "${message}".`);
}

// CALLING FUNCTION WITH GIVEN INSTRUCTION

make_shirt();

// CALLING FUNCTION WITH MEDIUM SIZE

make_shirt("Medium");

// CALLING FUNCTION WITH SMALL SIZE

make_shirt("small", "Typescript is Love!");