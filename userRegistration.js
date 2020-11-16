console.log("Welcome to User Registration !");

const NAME_PATTERN = /^[A-Z][A-Za-z]{2,}$/;

const input = require('readline-sync');
const validate = (pattern, input) => pattern.test(input);

/**
 *  @description First name validation
 */
var validateFirstName = function(){
    firstName = input.question("Enter your first name: ");
    if(validate(NAME_PATTERN, firstName))
        console.log("First name is valid !");
    else
        console.log("First name is invalid");
}
validateFirstName();

/**
 *  @description Last name validation
 */
var validateLastName = function(){
    lastName = input.question("Enter your last name: ");
    if(validate(NAME_PATTERN, lastName))
        console.log("Last name is valid !");
    else
        console.log("Last name is invalid");
}
validateLastName();
