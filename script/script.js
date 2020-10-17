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
    // If the user enters a valid length the function will resolve
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

// Returns an array of selected character types
const typeOfChars = () => {
    let chosenChars = [];
    do {
        // Pushes a boolean into confirmArray for each char type in the order that those types appear in the allCharTypes array
        const allCharTypes = ['lowercase', 'uppercase', 'special', 'number'];
        let confirmArray = [];
        let lowerConfirm = confirm("Would you like to use lower case letters?");
        confirmArray.push(lowerConfirm);
        let upperConfirm = confirm("Would you like to use uppercase letters?");
        confirmArray.push(upperConfirm);
        let specialConfirm = confirm("Would you like to use special characters?");
        confirmArray.push(specialConfirm);
        let numConfirm = confirm("Would you like to use numbers?");
        confirmArray.push(numConfirm);
        // If the boolean was true then the matching char type gets pushed to the return array
        for (let i= 0; i < confirmArray.length; i++) {
            if (confirmArray[i]) {
                chosenChars.push(allCharTypes[i]);
            };
        };
        // User must select at least one char type for the function to resolve
        if (chosenChars.length > 0) {
            return chosenChars;
        } else {
            alert("Must choose at least one character type!");
        };
    } while (chosenChars.length === 0);
};

// Constructs a random password using the user's choice of length and types
const generatePassword = () => {
    // Strings containing all available characters
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const numbers = '0123456789';
    // Rounds user input for length down to an integer
    const length = Math.floor(numOfChars());
    const types = typeOfChars();
    let newPassword = [];

    // Selects a random index
    const randomValue = varToIndex => {
        let randomIndex = Math.floor(Math.random() * varToIndex.length);
        let choice = varToIndex[randomIndex];
        return choice;
    }

    // Selects a random character type from the available character types the user selected
    // Then pushes a random character from the corresponding string into the newPassword array
    for (let i = 0; i < length; i++) {
        let typeToPush = randomValue(types);
        if (typeToPush === 'lowercase') {
            newPassword.push(randomValue(lowerCase));
        } else if (typeToPush === 'uppercase') {
            newPassword.push(randomValue(upperCase));
        } else if (typeToPush === 'special') {
            newPassword.push(randomValue(special));
        } else {
            newPassword.push(randomValue(numbers));
        };
    };

    // Returns a string version of the password array
    return newPassword.join('');
};