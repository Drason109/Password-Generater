// Assignment Code
//selects the id of generator from the button element
var generateBtn = document.querySelector("#generate");
var newPassword = "";

function generatePassword(){
    //user answer the prompt for their password
    var userSeleL = window.prompt("Enter an Upper or Lower case letter:");
    var userSeleN = window.prompt("Enter a Number:");
    var userSeleS = window.prompt("Enter a Special Character:");
    var charaMax = window.prompt("Enter how long the password would be: " + "\nChoose a number between 8 - 128");

    //if user doesnt answer cancel the prompt
    if (!userSeleL && !userSeleN && !userSeleS){
        return;
    }
    //if charaMax is less than 8 or greater than 128
    while (charaMax < 8 || charaMax > 128){
        charaMax = window.prompt("Enter a Number between 8 - 128");
       
    }

    
    var userSeleC = userSeleL + userSeleN + userSeleS;//add together the responds for the randomize
    
    //grabs the user respond and randomize their respond within their limit 
    for (var i = 0; i < charaMax; i++){
        var ranPassword = Math.floor(Math.random() * userSeleC.length);
        newPassword += userSeleC.substring(ranPassword, ranPassword +1);
        
    }
    return newPassword;// return my value


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   
  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());


