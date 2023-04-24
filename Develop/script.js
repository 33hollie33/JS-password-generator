var generateBtn = document.querySelector("#generate");

// Added the requirements and made them into 4 different variables in a string of code for all the possible character that can be used in the password generator
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "@", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "^", "_", "{", "|", "}", "~"];
//Followed the *** guide to include all the special chracters that can be included within the generated password 


// The code that was provided beforehand 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Added a function to be able to generate a password
function generatePassword() {

  //Added console log to annotate/zone in on what is going on with the application 
  console.log("Clicked the Button");

  //Prompt the user on how many characters they would want in the generated password by using an if statement  
  let passwordLength = window.prompt("How many chracters you would like your password to contain?");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password needs to be between 8 and 128 chracters");
    // Return enables the user to go back to the start
    return;
  }
  // Prompt user on what they want to encorporate within their passwords
  let passworduppercase = window.confirm("Click OK to confirm the use of Uppercase letters in password");
  let passwordlowercase = window.confirm("Click OK to confirm the use of Lowercase letters in password");
  let passwordnumbers = window.confirm("Click OK to confirm the use of numbers in password");
  let passwordspecial = window.confirm("Click OK to confirm the use of special chracters in password");

  // used an if statement to create an error on the page if the user does not click OK
  if (passworduppercase == false && passwordlowercase == false && passwordnumbers == false && passwordspecial == false) {
    window.alert("You must select at least one character type")
    // Return enables the user to go back to the start
    return;
  }

  // Use a for loop so the code can be re-used over and over again
  
  let password = "";

  for (let i = 0; i < passwordLength; i++) {

    if (passworduppercase == true) {
      var randomNumber = Math.floor(Math.random() * uppercase.length);
      var uppercaseLetter = uppercase[randomNumber];
      password += uppercaseLetter;

      if (password.length == passwordLength) {
        break;
      }
    }

    if (passwordlowercase == true) {
      var randomNumber = Math.floor(Math.random() * lowercase.length);
      var lowerCaseLetter = lowercase[randomNumber];
      password += lowerCaseLetter;
      if (password.length == passwordLength) {
        break;
      }
    }

    if (passwordlowercase == true) {
      var randomNumber = Math.floor(Math.random() * lowercase.length);
      var lowerCaseLetter = lowercase[randomNumber];
      password += lowerCaseLetter;
      if (password.length == passwordLength) {
        break;
      }
    }

    if (passwordnumbers == true) {
      var randomNumber = Math.floor(Math.random() * numbers.length);
      var number = numbers[randomNumber];
      password += number;
      if (password.length == passwordLength) {
        break;
      }
    }

    if (passwordspecial == true) {
      var randomNumber = Math.floor(Math.random() * special.length);
      var specialChar = special[randomNumber];
      password += specialChar;
      if (password.length == passwordLength) {
        break;
      }
    }

  }

  if (passworduppercase == true && passwordContainsUppercase(password) == false) {
    alert("Generated password is invalid: doesnt contain uppercase letter(s)");
  }
  else if (passwordlowercase == true && passwordContainsLowercase(password) == false) {
    alert("Generated password is invalid: doesnt contain lowercase letter(s)");
  }
  else if (passwordnumbers == true && passwordContainsNumber(password) == false) {
    alert("Generated password is invalid: doesnt contain number(s)");
  }
  else if (passwordspecial == true && passwordContainsSpecialCharacter(password) == false) {
    alert("Generated password is invalid: doesnt contain special character(s)");
  } else {
    alert("Generated password follows all of the requirements!")
  }
  return password;

}

//Added a validator

function passwordContainsUppercase(password) {
  for (let i = 0; i < password.length; i++) {
    let character = password.charAt(i);
    if (character == character.toUpperCase()) {
      return true;
    }
  }
  return false;
}

function passwordContainsLowercase(password) {
  for (let i = 0; i < password.length; i++) {
    let character = password.charAt(i);
    if (character == character.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function passwordContainsNumber(password) {
  for (let i = 0; i < password.length; i++) {
    let character = password.charAt(i);
    if (character >= '0' && character <= '9') {
      return true;
    }
  }
  return false;
}
function passwordContainsSpecialCharacter(password) {
  for (let i = 0; i < password.length; i++) {
    let character = password.charAt(i);
    for (let a = 0; a < special.length; a++) {
      if (character == special[a]) {
        return true;
      }
    }
  }
  return false;
}

// Add event listener to generate button. This was code already added

generateBtn.addEventListener("click", writePassword);