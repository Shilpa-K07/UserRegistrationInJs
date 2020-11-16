console.log("Welcome to User Registration !");

const NAME_PATTERN = /^[A-Z][A-Za-z]{2,}$/;
const EMAIL_PATTERN = /^([0-9A-Za-z])+([-+._][0-9A-Za-z]+)*@([0-9A-Za-z])+[.]([a-zA-Z])+([.][A-Za-z]+)*$/;
const MOBILE_NUMBER_PATTERN = /^\d{2}[-\.\s]\d{10}$/;
const PASSWORD_PATTERN = /^(?=.{8,})(?=.*[A-Z]).*$/;

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

/**
 *  @description Email Validation
 */
var validateEmail = function(){
    emailID = input.question("Enter your email id:")
    if(validate(EMAIL_PATTERN, emailID))
        console.log("Email Id is valid !");
    else
        console.log("Email Id is invalid");
}
validateEmail();

/**
 *  @description Mobile number Validation
 */
var validateMobileNuber = function(){
    mobilenumber = input.question("Enter your mobile number:")
    if(validate(MOBILE_NUMBER_PATTERN, mobilenumber))
        console.log("mobile number  is valid !");
    else
        console.log("mobile number is invalid");
}
validateMobileNuber();


/**
 *  @description Password Validation
 */
var validatePassword = function(){
    password = input.question("Enter your password:")
    if(validate(PASSWORD_PATTERN, password))
        console.log("password  is valid !");
    else
        console.log("password is invalid");
}
validatePassword();
