// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// will need prompts for each of password length (8-128)
// password length (8-128)
// lowercase
// uppercase
// numbers
// special characters (see link)
// IF user selcts number outside of range, they need to restart the process
// IF user doesnt select at least one character type, they need to restart the process
// Need one or more arrays to iterate over to get password characters
// Might need to look into some methods to join characters together into a single string
// Then either print password to page or display it using an alert
// (three more psuedo code steps miss teacher lady said)