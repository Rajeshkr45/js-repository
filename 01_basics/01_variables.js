const accountId =1234
let accountEmail="Abc@Gmail.com"
var accountPassword ="1122"
accountCity="Delhi"
let accountState;

// accountId = 2 // not allowed
accountEmail ="Rajesh@Gmail.com"
accountPassword="221223"
accountCity="Haryana"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var
because of issue in block scope and functional scope
*/ 