// SHIRINKING GUESTS LIST
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
/*INVITATION

Guests.forEach(Guests => {
    console.log(`Mr.${Guests} I have found a bigger dinner table Please join us in tonights party!`);
}

);*/
// CANCELLATION IN THE DINNER 
Guests.forEach(function (Guests) {
    console.log("Mr.".concat(Guests, " Sorry to say that but i can invite only two people at tonights dinner party."));
});
// FIRST PERSON
var CancellationForDinnerGuests1 = Guests.pop();
console.log("Sorry ".concat(CancellationForDinnerGuests1, " You are not invited for tonights dinner party"));
// SECOND PERSON
var CancellationForDinnerGuests2 = Guests.pop();
console.log("Sorry ".concat(CancellationForDinnerGuests2, " You are not invited for tonights dinner party"));
// THIRD PERSON
var CancellationForDinnerGuests3 = Guests.pop();
console.log("Sorry ".concat(CancellationForDinnerGuests3, " You are not invited for tonights dinner party"));
// FOURTH PERSON
var CancellationForDinnerGuests4 = Guests.pop();
console.log("Sorry ".concat(CancellationForDinnerGuests4, " You are not invited for tonights dinner party"));
// FIFTH PERSON
var CancellationForDinnerGuests5 = Guests.pop();
console.log("Sorry ".concat(CancellationForDinnerGuests5, " You are not invited for tonights dinner party"));
// SIXTH PERSON
var CancellationForDinnerGuests6 = Guests.pop();
console.log("Sorry ".concat(CancellationForDinnerGuests6, " You are not invited for tonights dinner party"));
// INVITED PEOPLE
// FIRST PERSON
var TwoGuestsThatIInvited = Guests.shift();
console.log("I am glad to said that Mr. ".concat(TwoGuestsThatIInvited, " You are invited at tonights dinner party"));
// SECOND PERSON
var TwoGuestsThatIInvited1 = Guests.shift();
console.log("I am glad to said that Mr. ".concat(TwoGuestsThatIInvited1, " You are invited at tonights dinner party"));
//EMPTY LIST
var TwoGuestsThatIInvited2 = Guests.shift();
console.log("I am glad to said that Mr. ".concat(TwoGuestsThatIInvited2, " You are invited at tonights dinner party"));
