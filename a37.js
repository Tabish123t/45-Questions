// LARGE SHIRTS
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("The size is ".concat(size, ", and message is \"").concat(message, "\"."));
}
// CALLING FUNCTION WITH GIVEN INSTRUCTION
make_shirt();
// CALLING FUNCTION WITH MEDIUM SIZE
make_shirt("Medium");
// CALLING FUNCTION WITH SMALL SIZE
make_shirt("small", "Typescript is Love!");
