// CHANGING GUEST LIST

let Guests: string[] = ["Aqib", "Farhan", "Ilyas", "Samir", "Usama"];

//GUEST WHO CAN'T MAKE IT

const GuestWhoCantMakeIt: string = "Aqib";

console.log(`Mr.${GuestWhoCantMakeIt} will not come today`);

// MODIFICATION IN THE LIST

let NewGuest: string = "Ahsan Bhaye";

let index = Guests.indexOf(GuestWhoCantMakeIt);
 
if(index !== -1) {
    Guests[index] = NewGuest;
}

//INVITATION

Guests.forEach(Guests => {
    console.log(`Mr.${Guests} Please join us in tonights party!`);
}

);

