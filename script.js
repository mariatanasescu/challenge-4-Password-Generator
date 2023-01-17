// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let wantsUppercase 
let wantsLowercase 
let wantsNumeric 
let wantsSpecial 

// Function to prompt user for password options
function getPasswordOptions() {
  wantsUppercase = confirm ("Do you want Uppercase characters?")
  wantsLowercase = confirm ("Do you want Lowercase characters?")
  wantsNumeric = confirm ("Do you want Numeric characters?")
  wantsSpecial = confirm ("Do you want Special characters?")
  if (wantsUppercase === false && wantsLowercase === false && wantsNumeric === false && wantsSpecial === false) {
    alert("You must choose at least one option");
    getPasswordOptions()
  }
 
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  let passwordLength = parseInt(prompt ("How long do you want your password to be?"))
  if (passwordLength < 10||
    passwordLength > 64) {
      alert("Length sould be more than 10 but no more than 64 characters");
      generatePassword()
    } 
 getPasswordOptions();  
 let passwordOptions = []
 if (wantsUppercase === true) {
   passwordOptions = passwordOptions.concat(upperCasedCharacters)
 }
 if (wantsLowercase === true) {
   passwordOptions = passwordOptions.concat(lowerCasedCharacters)
 }
 if (wantsNumeric === true) {
   passwordOptions = passwordOptions.concat(numericCharacters)
 }
 if (wantsSpecial === true) {
   passwordOptions = passwordOptions.concat(specialCharacters)
 }
 let password = ""
 for ( let i = 0; i < passwordLength; i++) {
  console.log(i)
  let randomChar = passwordOptions[Math.floor(Math.random()*passwordOptions.length)]
  password = password + randomChar
 }
 return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);