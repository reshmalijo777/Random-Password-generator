// variable declaration
var userChoice;
var specialChar;
var lowerCase;
var upperCase;
var numberChar;
//Array declaration
var pass=[];
var spChar=["!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}",",","."," ","|","/",">","<","?"];
var number=["1","2","3","4","5","6","7","8","9"];
var upperAlpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerAlpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
   userChoice= window.prompt("How many characters would you like for your password?");
  //no
  if(!userChoice){
    window.alert("You must enter a value to continue!!!!!");
  } 
  //choose length atleast 8 charecters not more than 128 charecters.
  else if(userChoice<8||userChoice>128){
  var userChoice= window.prompt("choose a value between 8 and 128");
  }
  //series of prompt for password criteria 
  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters.
  else {
     specialChar=confirm("Click OK to confirm including special charecters");
     numberChar=confirm("click OK to confirm including numeric charecter");
     lowerCase=confirm("click OK to confirm including Lowercase charecters");
     upperCase=confirm("click OK to confirm including Uppercase charecters");
  }

//checking all possible options based on the prompt input value.
//validated and at least one character type should be selected.
if(specialChar===false && numberChar===false  && lowerCase===false  && upperCase===false )
{
  pass= window.alert("You must select any one options to generate your password");
}
else if(specialChar && numberChar && lowerCase && upperCase){
  pass = spChar + number +upperAlpha + lowerAlpha;
}
else if(specialChar && numberChar && lowerCase){
  pass= spChar.concat(number,lowerAlpha);
}
else if(specialChar && numberChar && upperCase){
  pass= spChar.concat(number,upperAlpha);
}
else if(numberChar && upperCase && lowerCase){
  pass= number.concat(upperAlpha,lowerAlpha);
}
else if(specialChar && numberChar){
  pass= spChar.concat(number);
}
else if(specialChar && lowerCase){
  pass=spChar.concat(lowerAlpha);
}
else if(specialChar && upperCase){
  pass=spChar.concat(upperAlpha);
}
else if(numberChar && lowerCase){
  pass=number.concat(lowerAlpha);
}
else if(numberChar && upperCase){
  pass=number.concat(upperAlpha);
}
else if(lowerCase && upperCase){
  pass=lowerAlpha.concat(upperAlpha);
}
else if(specialChar){
  pass=spChar;  
}
else if(numberChar){
  pass = number;
}
else if(lowerCase){
  pass=lowerAlpha;
}
else if(upperCase){
  pass=upperAlpha;
}
 console.log(pass);
// for loop to generate random password from the pass array 
var newChoice=[];
for(var i=0;i<userChoice;i++){
 newChoice=newChoice+pass[Math.floor(Math.random()*pass.length)];
 console.log(newChoice);
}
//return the value to function
 return newChoice;

 }
