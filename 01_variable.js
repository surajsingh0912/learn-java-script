const accountId = 144553
let accountEmail = "surajsingh45908@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"

// accountId = 2  //not allowed to change const
console.log(accountId);

accountEmail = "singh@gmail"
accountPass = "9876"
accountCity = "noida"
let accountstate;

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPass, accountCity, accountstate])