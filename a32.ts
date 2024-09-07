// CHECKING USER NAMES 

let current_users: string[] = ["tab", "num", "caps","ctrl","back"];

let new_users: string[] = ["dell", "caps", "end", "tab", "alt"];

for (let new_user of new_users) {
   let IsUsernameTaken = current_users.some(user => user === new_user);

   if (IsUsernameTaken) {
    console.log(`the username ${new_user} is already taken, please enter a new username`);
   }

   else {
    console.log(`the username ${new_user} is available`);
   }
}
