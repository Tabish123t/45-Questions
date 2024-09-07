"use strict";
// MORE GUESTS LIST
Object.defineProperty(exports, "__esModule", { value: true });
let Guests = ["Aqib", "Farhan", "Ilyas", "Samir", "Usama"];
//FOR THE BEGINING NAME IN THE ARRAY
Guests.unshift("Fahad");
//FOR THE MIDDLE NAME OF THE ARRAY
let MiddleGuest = "Pops";
Guests.splice(2, 0, MiddleGuest);
// FOR THE END NAME OF THE ARRAY
Guests.push("Hammad");
//GUEST WHO CAN'T MAKE IT
const GuestWhoCantMakeIt = "Aqib";
//console.log(`Mr.${GuestWhoCantMakeIt} will not come today`);
// MODIFICATION IN THE LIST
let NewGuest = "Ahsan Bhaye";
let index = Guests.indexOf(GuestWhoCantMakeIt);
if (index !== -1) {
    Guests[index] = NewGuest;
}
//INVITATION
Guests.forEach(Guests => {
    console.log(`Mr.${Guests} I have found a bigger dinner table Please join us in tonights party!`);
});
