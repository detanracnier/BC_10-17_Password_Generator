// Assignment Code
let generateBtn = document.querySelector("#generate");
let lengthInput = document.querySelector("#passwordLength");

// Write password to the #password input
function writePassword() {
  let passwordLength = document.getElementById("passwordLength").value;
  let password = generatePassword(passwordLength);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length){
  let password = "";
  for (let x=0; x < length; x++){
    let charType = Math.floor(Math.random()*3);
    switch (charType) {
      case 0:
        password += getUpperCase();
        break;
      case 1:
        password += getLowerCase();
        break;
      case 2:
        password += getSpecial();
        break;
      default:
        console.log("generatePassword switch failed. charType:" + charType);
    }
  }
  return password
}

function getUpperCase(){
  return String.fromCharCode(Math.floor((Math.random()*26)+65))
}

function getLowerCase(){
  return String.fromCharCode(Math.floor((Math.random()*26)+97))
}

function getSpecial(){
  let specailList = "!@#$%&*";
  let special = specailList.charAt(Math.floor(Math.random()*specailList.length));
  return special
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
lengthInput.oninput = function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0,2);
  }
}
lengthInput.onchange = function () {
  if (this.value > 30){
    this.value = 30;
  }
  if (this.value < 10){
    this.value = 10;
  }
}