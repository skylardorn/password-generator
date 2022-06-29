// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  var password = " ";
  var passwordText = document.querySelector("#password");



// create clickable button
generateBtn.addEventListener("click", function run() {
  var lengthQuestion = parseInt(prompt("**Password between 8-128 characters."));

  if (lengthQuestion > 8 && lengthQuestion < 128) {
    var question = {
      specialCharacters: confirm("**Special characters?**"),
      upperCase: confirm("**One uppercase letter?**"),
      lowerCase: confirm("**Lowercase?**"),
      numeric: confirm("**Do you want to use numbers?**"),
    };
    console.log(question.lowerCase);

    for (var i = 0; i < lengthQuestion; i++) {
      if (question.lowerCase) {
        var stringLowerCase = "abcdefghijklmnopqrstuvwxyz"
        password += stringLowerCase.charAt(Math.floor(Math.random() * lengthQuestion));
        console.log(password);
      }

      if (question.specialCharacters) {
        var stringSpecialCharacters = "!@#$%^&*()+"
        password += stringSpecialCharacters.lengthSpecial(Math.floor(Math.random() * 26) + 97);
        console.log(password);
      }

      if (question.upperCase) {
        var stringUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        password += stringUpperCase.fromCharCode[Math.floor(Math.random() * 26) + 65];
        console.log(lengthQuestion);
      }

      if (question.numeric) {
        var stringNumeric = "0123456789"
        password += stringNumeric.fromCharCode[Math.floor(Math.random() * 10 + 48)];
        console.log(lengthQuestion);
      }
    }

    passwordText.textContent = password;
  
  } else {
    run();
  }
});


