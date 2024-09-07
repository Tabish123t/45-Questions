// MORE GUESTS LIST
var Guests = ["Aqib", "Farhan", "Ilyas", "Samir", "Usama"];
//FOR THE BEGINING NAME IN THE ARRAY
Guests.unshift("Fahad");
//FOR THE MIDDLE NAME OF THE ARRAY
var MiddleGuest = "Pops";
Guests.splice(2, 0, MiddleGuest);
// FOR THE END NAME OF THE ARRAY
Guests.push("Hammad");
//GUEST WHO CAN'T MAKE IT
var GuestWhoCantMakeIt = "Aqib";
//console.log(`Mr.${GuestWhoCantMakeIt} will not come today`);
// MODIFICATION IN THE LIST
var NewGuest = "Ahsan Bhaye";
var index = Guests.indexOf(GuestWhoCantMakeIt);
if (index !== -1) {
    Guests[index] = NewGuest;
}
//INVITATION
Guests.forEach(function (Guests) {
    console.log("Mr.".concat(Guests, " I have found a bigger dinner table Please join us in tonights party!"));
});
