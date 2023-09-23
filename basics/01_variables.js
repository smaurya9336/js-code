const accountId=144553
let accountEmail="sarita@google.com"
var accountPassword="12345"
let accountCity="Lucknow"
let accountState;//undefined

// accountId=2 // not allowed

accountEmail="sm@sm.com"
accountPassword="42423443"
accountCity="Gonda"
console.log(accountId)
console.log(accountEmail);

/*
Prefer not to use var 
because of issues in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
