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


// Function to prompt user for password options
function getPasswordOptions() {
  let len = getPasswordLength();
  let options = getCharacterOptions();
  return ([len, options]);
}

// Function for getting the length of the passwordText
function getPasswordLength() {
  let val = parseInt (prompt ('Please specify the length of the password: (10-64 characters)'));
  if (Number.isInteger(val) && val >= 10 && val <= 64) {
    return val;
  } else {
    alert ('Wrong value selected, try again.');
    return getPasswordLength();
  }
}

// Function for getting Character options
function getCharacterOptions(){
  let options = [];
  if (getCharacterOptionsInput('Special Characters')) {
    options.push('specialCharacters');
  }
  if (getCharacterOptionsInput('Numeric Characters')) {
    options.push('numericCharacters');
  }
  if (getCharacterOptionsInput('Lower Cased Characters')) {
    options.push('lowerCasedCharacters');
  }
  if (getCharacterOptionsInput('Upper Cased Characters')) {
    options.push('upperCasedCharacters');
  }
  if (options.length && options.length > 0) {
    return options;
  } else {
    alert ('Please select at least one option.');
    return getCharacterOptions();
  }
}

function getCharacterOptionsInput(option){
  let userInput = prompt ('Would you like to use ' + option + ' (yes / no)');
  if (userInput == 'yes') {
    return true;
  } else if (userInput == 'no') {
    return false;
  } else {
    alert ('Wrong input, try again.');
    return getCharacterOptionsInput(option);
  }
}

function getRandom(arr) {
  let len = arr.length;
  if (len) {
    return ( arr[Math.floor(Math.random() * len)] );
  }
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  let len = options[0];
  let characters = options[1];
  let password = '';

  for (let i = 0; i < len; i++){
      let type = getRandom(characters);
      password += getRandom(window[type]);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate 
generateBtn.addEventListener('click', writePassword);