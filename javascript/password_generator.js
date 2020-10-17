// Assignment Code
let generateBtn = document.querySelector("#generate");
let lengthInput = document.querySelector("#passwordLength");
let upperCaseCB = document.querySelector("#upperCaseCB");
let lowerCaseCB = document.querySelector("#lowerCaseCB");
let numbersCB = document.querySelector("#numbersCB");
let specialsCB = document.querySelector("#specialsCB");

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
  let optionIncluded = [];
  for(let i = 0; i < options.length; i++){
    optionIncluded.push(0);
  }
  for (let x=0; x < passwordLength; x++){
    //If a character option has not been included ensure it is included
    if(optionIncluded.length-optionIncluded.reduce(addThem)===passwordLength-x){
      for(let k = 0; k < options.length;k++){
        if(optionIncluded[k]===0){
          password += options[k].getCharacter();
        }
      }
    } else {
      //Generates a random character type option from the options array
      let charType = Math.floor(Math.random()*options.length);
      password += options[charType].getCharacter();
      optionIncluded[charType]=1;
    }
  }
  return password
}

function addThem(total, num){
  return total + num;
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
  return String.fromCharCode(Math.floor((Math.random()*16)+32))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add event listener to password length input to restrict values to 8-128
lengthInput.onchange = function () {
  if (this.value > 128){
    this.value = 128;
  }
  if (this.value < 8){
    this.value = 8;
  }
}

upperCaseCB.onchange = function () {
  if (upperCaseCB.checked===true || lowerCaseCB.checked===true || numbersCB.checked===true || specialsCB.checked===true){
      generateBtn.disabled=false;
    } else {
      generateBtn.disabled=true;
    }
}

lowerCaseCB.onchange = function () {
  if (upperCaseCB.checked===true || lowerCaseCB.checked===true || numbersCB.checked===true || specialsCB.checked===true){
      generateBtn.disabled=false;
    } else {
      generateBtn.disabled=true;
    }
}

numbersCB.onchange = function () {
  if (upperCaseCB.checked===true || lowerCaseCB.checked===true || numbersCB.checked===true || specialsCB.checked===true){
      generateBtn.disabled=false;
    } else {
      generateBtn.disabled=true;
    }
}

specialsCB.onchange = function () {
  if (upperCaseCB.checked===true || lowerCaseCB.checked===true || numbersCB.checked===true || specialsCB.checked===true){
      generateBtn.disabled=false;
    } else {
      generateBtn.disabled=true;
    }
}