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
generateBtn.addEventListener("click", function run() {

  var lengthQuestion = parseInt(prompt("Choose the length of your password but, has to be within 8-128 characters."));
    if (lengthQuestion > 8 && lengthQuestion <128) {
      var question = {
        specialCharacters: confirm ("**Special characters?**"),
        upperCase: confirm ("**One uppercase letter?**"),
        lowerCase: confirm ("**Lowercase?**"),
        numeric: confirm ("**Do you want to use numbers?**"),

      };
    };
});

var password ="";

for (var i = 0; i length; i++) {
  if (lengthQuestion.lowerCase) {
    password += String.fromCharCode(Math.floor(Math.random() * 26) + 97 );
    console.log(lengthQuestion);
  }
}

  if (lengthQuestion.specialCharacters) {
    password += String.fromCharCode(Math.floor(Math.random() * 26) + 97 );
    console.log(lengthQuestion);
  }


  if (lengthQuestion.upperCase) {
    password += String.fromCharCode(Math.floor(Math.random() * 26) + 65 );
    console.log(lengthQuestion);
  }


  if (lengthQuestion.numeric) {
    password += String.fromCharCode(Math.floor(Math.random() * 10) + 48 );
    console.log(lengthQuestion);
  }



