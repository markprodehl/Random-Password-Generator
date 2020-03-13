//Tell user to press the generate password button
alert("To generate password press the Generate Password button");
// Add click listener to the generate password button
// Ask user to choose character length between 8 - 128 and restart if they are outside parameters
function userChoice () {
    var numberOfChar = prompt("How many characters would you like your password to contain?")
    if (numberOfChar < 8 || numberOfChar > 128) {
        alert("Password must be between 8 and 128 characters long");
    return;       
    }

    //run through the remaining passwrod character optins
    var specialChar = confirm("Click ok to confirm if you would like to include special characters");
    var numbers = confirm("Click ok to confirm if you would like to include numbers");
    var lowerCase = confirm("Click ok to confirm if you would like to include lowercase characters");
    var uppercase = confirm("Click ok to confirm if you would like to include uppercase characters");
}

//declare the character possibilities
var specialChar = "~!@#$%^&*()_+";
var numbers = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var finalChar = [];



//if user wants special characters

// if user wants numbers

// if user wants lowercase 

//if user wants uppercase


// create random password based on the above


//let password = an empty string finalChar


// function generate () {






   












