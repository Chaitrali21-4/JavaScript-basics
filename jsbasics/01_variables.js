const accountId = 144553
let emailId = 'chaitu@google.com'
var accountPessword = '12345'
accountCity = "Jaypur"

//accountId = 2   -->we can't change constant variables, once we asign the value

emailId = "harsh@gmail.com"
accountPessword = "21212121"
accountCity = "Pune"
let accountState;

console.log(accountId);

accountState = "Chennai"

console.table([accountId, emailId, accountPessword, accountCity, accountState])

/* NOTE:
    prefer not to use var because of issue in block scope & functional scope
*/
