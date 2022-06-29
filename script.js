// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordTextvalue = password;

}

// create clickable button
generateBtn.addEventListener("click", run)

function run() {
  length = parseInt("Choose the length of your password but, has to be within 8-128 characters.")
    if (length > 8 && length <128) {
      var parameters = {
        specialCharacters: confirm ("**Special characters?**"),
        uppercase: confirm ("**One uppercase letter?**"),
        lowerCase: confirm ("**Lowercase?**"),
        numeric: confirm ("**Do you want to use numbers?**"),



      }
    }
}

