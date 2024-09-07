// CHECKING USER NAMES 
var current_users = ["tab", "num", "caps", "ctrl", "back"];
var new_users = ["dell", "caps", "end", "tab", "alt"];
var _loop_1 = function (new_user) {
    var IsUsernameTaken = current_users.some(function (user) { return user === new_user; });
    if (IsUsernameTaken) {
        console.log("the username ".concat(new_user, " is already taken, please enter a new username"));
    }
    else {
        console.log("the username ".concat(new_user, " is available"));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
