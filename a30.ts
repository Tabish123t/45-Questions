// HELLO ADMIN

let user_names: string[] = ["Admin", "Eric", "ZBook", "Intel", "Core"];

for (let i = 0; i < user_names.length; i++) {
    if (user_names[i] === 'Admin') {
        console.log("Special Greetings for you, Hello Admin, would you like to see a status report?");
    }
else {
    console.log(`Hello ${user_names[i]}, thank you for logging in again.`);
}    
}

