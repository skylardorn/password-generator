// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var password = " ";

// selected the password id element and created the value for it to equal passwordText
var passwordText = document.querySelector("#password");

// when button is clicked it runs passwordButton function
generateBtn.addEventListener("click", passwordButton);

// created passwordButton function
function passwordButton() {
  // prompts user with question length and assigns a number value
  var lengthQuestion = parseInt(prompt("**Password between 8-128 characters."));

  // if the inpupted length is in between 8 128 return a password
  if (lengthQuestion > 8 && lengthQuestion < 128) {
    // questions object which stores all the alerts and there values
    var question = {
      specialCharacters: confirm("**Special characters?**"),
      upperCase: confirm("**Would you like to add an uppercase letter?**"),
      lowerCase: confirm("**Would you like lowercase?**"),
      numeric: confirm("**Do you want to use numbers?**"),
    };

    for (var i = 0; i < lengthQuestion; i++) {
      // character object which stores all the character traits
      var characters = {
        stringLowerCase: "abcdefghijklmnopqrstuvwxyz",
        specialCharacters: " !#$%&'()*+,-./:;<=>?@[^_`{|}~",
        upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numeric: "0123456789",
      };

      // if user wants lowercase
      if (question.lowerCase) {
        // setting the password to add a letter from the lowercase property that has been picked randomly
        password += characters.stringLowerCase.charAt(
          Math.floor(Math.random() * characters.stringLowerCase.length)
        );
      }

      // if user wants specialcharacters
      if (question.specialCharacters) {
        password += characters.specialCharacters.charAt(
          Math.floor(Math.random() * characters.specialCharacters.length)
        );
      }

      // if user wants uppercase characters
      if (question.upperCase) {
        password += characters.upperCase.charAt(
          Math.floor(Math.random() * characters.upperCase.length)
        );
      }

      // if user wants numbers
      if (question.numeric) {
        password += parseInt(
          characters.numeric.charAt(
            Math.floor(Math.random() * characters.numeric.length)
          )
        );
      }
    }

    // setting the password text on the html page to the user preferred password length
    passwordText.textContent = password.slice(0, lengthQuestion + 1);
  }
  // Alerts user password is invalid
  else {
    alert("Password input invalid, try again!");
  }
}
