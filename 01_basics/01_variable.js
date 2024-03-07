const accountId = 1445;
let accountEmail = "ashish@google.com";
var accountPassword = "123456";
accountCity = "Noida";
let accountState;

// accountId = 1001;  // Error: Assignment to constant variable.

accountEmail = "ashish@facebook.com"
accountPassword = "654321";
accountCity = "Delhi";

/*
Prefer not to use var keyword.
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])