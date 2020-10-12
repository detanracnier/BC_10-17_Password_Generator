// Assignment Code
let generateBtn = document.querySelector("#generate");
let lengthInput = document.querySelector("#passwordLength");
let upperCaseCB = document.querySelector("#upperCaseCB");
let lowerCaseCB = document.querySelector("#lowerCaseCB");


// Write password to the #password input
function writePassword() {
  let passwordLength = document.querySelector("#passwordLength").value;
  let options = getOptions();
  let password = generatePassword(passwordLength,options);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Gets character options from user input and returns an array of methods for generating that character type
function getOptions(){
  let options = [];
  if(document.querySelector("#upperCaseCB").checked){
    options.push({getCharacter: getUpperCase});
  }
  if(document.querySelector("#lowerCaseCB").checked){
    options.push({getCharacter: getLowerCase});
  }
  if(document.querySelector("#numbersCB").checked){
    options.push({getCharacter: getNumber});
  }
  if(document.querySelector("#specialsCB").checked){
    options.push({getCharacter: getSpecial});
  }
  return options
}

// Generates a password with random characters
function generatePassword(passwordLength,options){
  let password = "";
  for (let x=0; x < passwordLength; x++){
    //Generates a random character type option from the options array
    let charType = Math.floor(Math.random()*options.length);
    password += options[charType].getCharacter();
  }
  return password
}

//Generates a random uppercase Latin character
function getUpperCase(){
  return String.fromCharCode(Math.floor((Math.random()*26)+65))
}

//Generates a random lowercase Latin character
function getLowerCase(){
  return String.fromCharCode(Math.floor((Math.random()*26)+97))
}

//Generates a random number 0-9
function getNumber(){
  return Math.floor((Math.random()*10))
}

//Generates a random special character
function getSpecial(){
  let specailList = "!@#$%&*";
  let special = specailList.charAt(Math.floor(Math.random()*specailList.length));
  return special
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add event listener to password length input to resirict values to 8-128
lengthInput.onchange = function () {
  if (this.value > 128){
    this.value = 128;
  }
  if (this.value < 8){
    this.value = 8;
  }
}

//Adds event listener to ensure upper or lower case check box is always checked
upperCaseCB.onchange = function () {
  if (!this.checked){
    lowerCaseCB.checked = true;
  }
}

//Adds event listener to ensure upper or lower case check box is always checked
lowerCaseCB.onchange = function () {
  if (!this.checked){
    upperCaseCB.checked = true;
  }
}