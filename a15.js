// CHANGING GUEST LIST
var Guests = ["Aqib", "Farhan", "Ilyas", "Samir", "Usama"];
//GUEST WHO CAN'T MAKE IT
var GuestWhoCantMakeIt = "Aqib";
console.log("Mr.".concat(GuestWhoCantMakeIt, " will not come today"));
// MODIFICATION IN THE LIST
var NewGuest = "Ahsan Bhaye";
var index = Guests.indexOf(GuestWhoCantMakeIt);
if (index !== -1) {
    Guests[index] = NewGuest;
}
//INVITATION
Guests.forEach(function (Guests) {
    console.log("Mr.".concat(Guests, " Please join us in tonights party!"));
});
