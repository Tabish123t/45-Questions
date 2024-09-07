// SHIRINKING GUESTS LIST

let Guests: string[] = ["Aqib", "Farhan", "Ilyas", "Samir", "Usama"];

//FOR THE BEGINING NAME IN THE ARRAY

Guests.unshift("Fahad");

//FOR THE MIDDLE NAME OF THE ARRAY

let MiddleGuest: string = "Pops"

Guests.splice(2, 0, MiddleGuest);

// FOR THE END NAME OF THE ARRAY

Guests.push("Hammad");

//GUEST WHO CAN'T MAKE IT

const GuestWhoCantMakeIt: string = "Aqib";

//console.log(`Mr.${GuestWhoCantMakeIt} will not come today`);

// MODIFICATION IN THE LIST

let NewGuest: string = "Ahsan Bhaye";

let index = Guests.indexOf(GuestWhoCantMakeIt);
 
if(index !== -1) {
    Guests[index] = NewGuest;
}

/*INVITATION

Guests.forEach(Guests => {
    console.log(`Mr.${Guests} I have found a bigger dinner table Please join us in tonights party!`);
}

);*/

// CANCELLATION IN THE DINNER 

Guests.forEach(Guests => {
    console.log(`Mr.${Guests} Sorry to say that but i can invite only two people at tonights dinner party.`);
});

// FIRST PERSON

let CancellationForDinnerGuests1 = Guests.pop();

console.log(`Sorry ${CancellationForDinnerGuests1} You are not invited for tonights dinner party`);

// SECOND PERSON

let CancellationForDinnerGuests2 = Guests.pop();

console.log(`Sorry ${CancellationForDinnerGuests2} You are not invited for tonights dinner party`);

// THIRD PERSON

let CancellationForDinnerGuests3 = Guests.pop();

console.log(`Sorry ${CancellationForDinnerGuests3} You are not invited for tonights dinner party`);

// FOURTH PERSON

let CancellationForDinnerGuests4 = Guests.pop();

console.log(`Sorry ${CancellationForDinnerGuests4} You are not invited for tonights dinner party`);

// FIFTH PERSON

let CancellationForDinnerGuests5 = Guests.pop();

console.log(`Sorry ${CancellationForDinnerGuests5} You are not invited for tonights dinner party`);

// SIXTH PERSON

let CancellationForDinnerGuests6 = Guests.pop();

console.log(`Sorry ${CancellationForDinnerGuests6} You are not invited for tonights dinner party`);

// INVITED PEOPLE

// FIRST PERSON

let TwoGuestsThatIInvited = Guests.shift();

console.log(`I am glad to said that Mr. ${TwoGuestsThatIInvited} You are invited at tonights dinner party`);

// SECOND PERSON

let TwoGuestsThatIInvited1 = Guests.shift();

console.log(`I am glad to said that Mr. ${TwoGuestsThatIInvited1} You are invited at tonights dinner party`);

//EMPTY LIST

let TwoGuestsThatIInvited2 = Guests.shift();

console.log(`I am glad to said that Mr. ${TwoGuestsThatIInvited2} You are invited at tonights dinner party`);