alert("Hello Tester! \nThis page should fullfill the technical requirements of the assignment but if you want to see a better example please click the link in the top left");

// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  //Loop through prompt until user input is validated
  let checkValid = false;
  let passwordLength;
  do {
    passwordLength = prompt("Enter password length (8-128):");
    if(passwordLength === null){
      return;
    }
    if (isNaN(passwordLength)){
      alert("Value not recognized");
    } else {
      if(passwordLength < 8 || passwordLength > 128){
        alert("Value out of range");
      } else {
        checkValid = true;
      }
    }
  } while (!checkValid);
  //Prompt user for character options
  let options = getOptions();
  if(options!=[]){
    let password = generatePassword(passwordLength,options);
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
  } else {
    alert("Please select a character option");
  }
}

//Gets character options from user input and returns an array of methods for generating that character type
function getOptions(){
  let options = [];
  if(confirm("Include Uppercase characters?")){
    options.push({getCharacter: getUpperCase});
  }
  if(confirm("Include Lowercase characters?")){
    options.push({getCharacter: getLowerCase});
  }
  if(confirm("Include numbers?")){
    options.push({getCharacter: getNumber});
  }
  if(confirm("Include special characters?")){
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
