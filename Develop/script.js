var generateBtn = document.querySelector("#generate");

// The code that was provided beforehand 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Added a function to be able to generate a password
function generatePassword () {

  //Added console log to annotate/zone in on what is going on with the application 
  console.log("Clicked the Button")
  
  // Added the requirements and made them into 4 different variables in a string of code for all the possible character that can be used in the password generator
 const uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
 const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 const numbers= [0,1,2,3,4,5,6,7,8,9]
 const special= ["!@#$%&'()*+-./:;<=>?[\]^_`{|}~"]
 //Followed the *** guide to include all the special chracters that can be included within the generated password 


 //Prompt the user on how many characters they would want in the generated password by using an if statement  
 passwordLength =prompt ("How many chracters you would like your password to contain?")
 if (passwordlength < 8 || passwordlength >128) {
  window.alert ("Password needs to be between 8 and 128 chracters")
  // Return enables the user to go back to the start
  return;
 }
// Prompt user on what they want to encorporate within their passwords
 passworduppercase = window.confirm("Click OK to confirm the use of Uppercase letters in password")
 passwordlowercase = window.confirm("Click OK to confirm the use of Lowercase letters in password")
 passwornumbers = window.confirm("Click OK to confirm the use of numbers in password")
 passwordspecial = window.confirm("Click OK to confirm the use of special chracters in password")

 // used an if statement to create an error on the page if the user does not click OK
  if (passworduppercase == false&& passwordlowercase == false && passwordnumber == false && passwordspecial ==false){
  window.alert("You must select at least one character type")
  // Return enables the user to go back to the start
  return;
  }
 
// Use a loop
var passwordlength = 
 for (var i= 0; passwordlength; i++) {
  var randomNumber = Math.floor(Math.random() *Chars.passwordLength);
  password += chars.substring (randomuppercase, randomlowercase, randomnumber, randomspecial +1);
document.getElementById("Generated Password").value=password
}


 //Added a return function 
 return "Generated Password will go here";

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
