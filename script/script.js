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

// Returns number of characters chosen by the user if the input was between 8 and 128
const numOfChars = () => {
    let passed = false;
    do {
        let numChar = prompt("How many characters long would you like your password? (Must be at least 8 characters)");
        if (typeof +numChar === 'number' && +numChar >= 8 && +numChar < 128) {
            passed = true;
            return numChar;
        } else {
            alert('Number of characters must be a number between 8 and 128!');
        };
    } while (passed === false);
};